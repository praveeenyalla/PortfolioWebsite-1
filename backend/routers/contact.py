from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from typing import List
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

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