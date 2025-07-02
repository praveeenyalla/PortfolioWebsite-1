from pydantic import BaseModel, EmailStr, validator
from typing import List, Optional, Dict, Any
from datetime import datetime

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    username: str
    full_name: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool
    is_admin: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Project Schemas
class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    code_url: Optional[str] = None
    video_url: Optional[str] = None
    technologies: List[str] = []
    features: List[str] = []
    status: str = "Completed"
    date_completed: Optional[str] = None
    is_featured: bool = False

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    code_url: Optional[str] = None
    video_url: Optional[str] = None
    technologies: Optional[List[str]] = None
    features: Optional[List[str]] = None
    status: Optional[str] = None
    date_completed: Optional[str] = None
    is_featured: Optional[bool] = None

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime]
    
    class Config:
        from_attributes = True

# Skill Schemas
class SkillBase(BaseModel):
    name: str
    category: str
    proficiency_level: int
    icon: Optional[str] = None
    description: Optional[str] = None
    years_experience: Optional[int] = None
    
    @validator('proficiency_level')
    def validate_proficiency(cls, v):
        if not 0 <= v <= 100:
            raise ValueError('Proficiency level must be between 0 and 100')
        return v

class SkillCreate(SkillBase):
    pass

class SkillResponse(SkillBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Experience Schemas
class ExperienceBase(BaseModel):
    title: str
    company: str
    location: Optional[str] = None
    start_date: str
    end_date: Optional[str] = None
    description: Optional[str] = None
    achievements: List[str] = []
    technologies: List[str] = []
    is_current: bool = False

class ExperienceCreate(ExperienceBase):
    pass

class ExperienceResponse(ExperienceBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Contact Schemas
class ContactBase(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactCreate(ContactBase):
    pass

class ContactResponse(ContactBase):
    id: int
    is_read: bool
    is_replied: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Certification Schemas
class CertificationBase(BaseModel):
    name: str
    issuer: str
    issue_date: Optional[str] = None
    expiry_date: Optional[str] = None
    credential_id: Optional[str] = None
    credential_url: Optional[str] = None
    certificate_file: Optional[str] = None
    description: Optional[str] = None

class CertificationCreate(CertificationBase):
    pass

class CertificationResponse(CertificationBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Authentication Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class LoginRequest(BaseModel):
    username: str
    password: str

# Portfolio Summary Schema
class PortfolioSummary(BaseModel):
    total_projects: int
    total_skills: int
    total_experience_years: int
    total_certifications: int
    featured_projects: List[ProjectResponse]
    top_skills: List[SkillResponse]
    recent_contacts: int

# API Response Schemas
class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Any] = None
    
class PaginatedResponse(BaseModel):
    items: List[Any]
    total: int
    page: int
    size: int
    pages: int