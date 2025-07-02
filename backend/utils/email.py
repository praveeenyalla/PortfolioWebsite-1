import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os
from typing import List, Optional

from ..config import settings

class EmailService:
    def __init__(self):
        self.smtp_server = settings.SMTP_SERVER
        self.smtp_port = settings.SMTP_PORT
        self.username = settings.EMAIL_USERNAME
        self.password = settings.EMAIL_PASSWORD
    
    def send_email(
        self,
        to_emails: List[str],
        subject: str,
        body: str,
        html_body: Optional[str] = None,
        attachments: Optional[List[str]] = None
    ) -> bool:
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = self.username
            msg['To'] = ', '.join(to_emails)
            msg['Subject'] = subject
            
            # Add text body
            msg.attach(MIMEText(body, 'plain'))
            
            # Add HTML body if provided
            if html_body:
                msg.attach(MIMEText(html_body, 'html'))
            
            # Add attachments if provided
            if attachments:
                for file_path in attachments:
                    if os.path.exists(file_path):
                        with open(file_path, "rb") as attachment:
                            part = MIMEBase('application', 'octet-stream')
                            part.set_payload(attachment.read())
                        
                        encoders.encode_base64(part)
                        part.add_header(
                            'Content-Disposition',
                            f'attachment; filename= {os.path.basename(file_path)}'
                        )
                        msg.attach(part)
            
            # Send email
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.username, self.password)
            text = msg.as_string()
            server.sendmail(self.username, to_emails, text)
            server.quit()
            
            return True
            
        except Exception as e:
            print(f"Failed to send email: {e}")
            return False
    
    def send_contact_notification(self, contact_data: dict) -> bool:
        subject = f"New Contact Form Submission: {contact_data['subject']}"
        body = f"""
        New contact form submission received:
        
        Name: {contact_data['name']}
        Email: {contact_data['email']}
        Subject: {contact_data['subject']}
        
        Message:
        {contact_data['message']}
        
        ---
        Sent from Portfolio Website Contact Form
        Time: {contact_data.get('created_at', 'N/A')}
        """
        
        return self.send_email([self.username], subject, body)
    
    def send_welcome_email(self, user_email: str, user_name: str) -> bool:
        subject = "Welcome to YALLA.NAGAPRAVEEN Portfolio"
        body = f"""
        Dear {user_name},
        
        Welcome to my portfolio website! Thank you for registering.
        
        You can now access exclusive content and stay updated with my latest projects and achievements.
        
        Best regards,
        YALLA.NAGAPRAVEEN
        
        Website: https://yallanagapraveen.info
        Email: nagapraveenyalla@gmail.com
        """
        
        return self.send_email([user_email], subject, body)

# Create global email service instance
email_service = EmailService()