from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from fastapi import UploadFile, File, Form
from typing import List, Optional
from sqlalchemy.orm import Session
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os
import tempfile

from ..database import get_db
from ..models import Contact, User
from ..schemas import ContactCreate, ContactResponse, APIResponse, PaginatedResponse
from ..routers.auth import get_current_admin_user
from ..config import settings

router = APIRouter()

async def send_email_notification(contact_data: ContactCreate):
    """Send email notification when new contact is received"""
    try:
        msg = MIMEMultipart()
        msg['From'] = settings.EMAIL_USERNAME
        msg['To'] = settings.EMAIL_USERNAME
        msg['Subject'] = f"New Contact Form Submission: {contact_data.subject}"
        
        body = f"""
        New contact form submission received:
        
        Name: {contact_data.name}
        Email: {contact_data.email}
        Subject: {contact_data.subject}
        
        Message:
        {contact_data.message}
        
        ---
        Sent from Portfolio Website Contact Form
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(settings.SMTP_SERVER, settings.SMTP_PORT)
        server.starttls()
        server.login(settings.EMAIL_USERNAME, settings.EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(settings.EMAIL_USERNAME, settings.EMAIL_USERNAME, text)
        server.quit()
        
    except Exception as e:
        print(f"Failed to send email notification: {e}")

@router.post("/", response_model=APIResponse)
async def create_contact(
    contact: ContactCreate, 
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    # Create contact record
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # Send email notification in background
    background_tasks.add_task(send_email_notification, contact)
    
    return APIResponse(
        success=True,
        message="Contact form submitted successfully. Thank you for reaching out!",
        data={"contact_id": db_contact.id}
    )

@router.post("/with-files", response_model=APIResponse)
async def create_contact_with_files(
    background_tasks: BackgroundTasks,
    name: str = Form(...),
    email: str = Form(...),
    subject: str = Form(...),
    message: str = Form(...),
    files: List[UploadFile] = File(default=[]),
    db: Session = Depends(get_db)
):
    # Create contact record
    contact_data = ContactCreate(
        name=name,
        email=email,
        subject=subject,
        message=message
    )
    
    db_contact = Contact(**contact_data.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # Send email notification with files in background
    background_tasks.add_task(send_email_with_files, contact_data, files)
    
    return APIResponse(
        success=True,
        message="Your message has been sent successfully with all attachments! I will get back to you within 24-48 hours.",
        data={"contact_id": db_contact.id}
    )

async def send_email_with_files(contact_data: ContactCreate, files: List[UploadFile]):
    """Send email notification with file attachments"""
    try:
        msg = MIMEMultipart()
        msg['From'] = settings.EMAIL_USERNAME
        msg['To'] = settings.EMAIL_USERNAME
        msg['Subject'] = f"Portfolio Contact: {contact_data.subject}"
        
        # Email body
        body = f"""
        New contact form submission received:
        
        Name: {contact_data.name}
        Email: {contact_data.email}
        Subject: {contact_data.subject}
        
        Message:
        {contact_data.message}
        
        ---
        Sent from yallanagapraveen.info portfolio website
        Time: {db_contact.created_at if 'db_contact' in locals() else 'N/A'}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Add file attachments
        temp_files = []
        for file in files:
            if file.filename and file.size > 0:
                # Create temporary file
                temp_file = tempfile.NamedTemporaryFile(delete=False)
                temp_files.append(temp_file.name)
                
                # Write uploaded file content to temp file
                content = await file.read()
                temp_file.write(content)
                temp_file.close()
                
                # Attach file to email
                with open(temp_file.name, "rb") as attachment:
                    part = MIMEBase('application', 'octet-stream')
                    part.set_payload(attachment.read())
                
                encoders.encode_base64(part)
                part.add_header(
                    'Content-Disposition',
                    f'attachment; filename= {file.filename}'
                )
                msg.attach(part)
        
        # Send email
        server = smtplib.SMTP(settings.SMTP_SERVER, settings.SMTP_PORT)
        server.starttls()
        server.login(settings.EMAIL_USERNAME, settings.EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(settings.EMAIL_USERNAME, settings.EMAIL_USERNAME, text)
        server.quit()
        
        # Clean up temporary files
        for temp_file_path in temp_files:
            try:
                os.unlink(temp_file_path)
            except OSError:
                pass
        
        print(f"Email sent successfully with {len(files)} attachments")
        
    except Exception as e:
        print(f"Failed to send email with attachments: {e}")
        # Clean up temporary files in case of error
        for temp_file_path in temp_files:
            try:
                os.unlink(temp_file_path)
            except OSError:
                pass

@router.get("/", response_model=PaginatedResponse)
async def get_contacts(
    page: int = 1,
    size: int = 10,
    unread_only: bool = False,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    query = db.query(Contact)
    
    if unread_only:
        query = query.filter(Contact.is_read == False)
    
    total = query.count()
    contacts = query.order_by(Contact.created_at.desc()).offset((page - 1) * size).limit(size).all()
    
    return PaginatedResponse(
        items=contacts,
        total=total,
        page=page,
        size=size,
        pages=(total + size - 1) // size
    )

@router.get("/{contact_id}", response_model=ContactResponse)
async def get_contact(
    contact_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    # Mark as read
    if not contact.is_read:
        contact.is_read = True
        db.commit()
    
    return contact

@router.put("/{contact_id}/mark-read", response_model=APIResponse)
async def mark_contact_read(
    contact_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    contact.is_read = True
    db.commit()
    
    return APIResponse(
        success=True,
        message="Contact marked as read"
    )

@router.put("/{contact_id}/mark-replied", response_model=APIResponse)
async def mark_contact_replied(
    contact_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    contact.is_replied = True
    contact.is_read = True
    db.commit()
    
    return APIResponse(
        success=True,
        message="Contact marked as replied"
    )

@router.delete("/{contact_id}", response_model=APIResponse)
async def delete_contact(
    contact_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    db.delete(contact)
    db.commit()
    
    return APIResponse(
        success=True,
        message="Contact deleted successfully"
    )

@router.get("/stats/summary", response_model=APIResponse)
async def get_contact_stats(
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    total_contacts = db.query(Contact).count()
    unread_contacts = db.query(Contact).filter(Contact.is_read == False).count()
    replied_contacts = db.query(Contact).filter(Contact.is_replied == True).count()
    
    return APIResponse(
        success=True,
        message="Contact statistics retrieved successfully",
        data={
            "total": total_contacts,
            "unread": unread_contacts,
            "replied": replied_contacts,
            "read": total_contacts - unread_contacts
        }
    )