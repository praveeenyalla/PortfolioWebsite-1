from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List

from ..database import get_db
from ..models import Project, Skill, Experience, Certification, Contact
from ..schemas import PortfolioSummary, ProjectResponse, SkillResponse, APIResponse

router = APIRouter()

@router.get("/summary", response_model=PortfolioSummary)
async def get_portfolio_summary(db: Session = Depends(get_db)):
    # Get counts
    total_projects = db.query(Project).count()
    total_skills = db.query(Skill).count()
    total_certifications = db.query(Certification).count()
    recent_contacts = db.query(Contact).filter(
        Contact.created_at >= func.date_trunc('month', func.now())
    ).count()
    
    # Calculate experience years (simplified)
    total_experience_years = 3  # This could be calculated from experience data
    
    # Get featured projects
    featured_projects = db.query(Project).filter(Project.is_featured == True).limit(3).all()
    
    # Get top skills
    top_skills = db.query(Skill).order_by(Skill.proficiency_level.desc()).limit(6).all()
    
    return PortfolioSummary(
        total_projects=total_projects,
        total_skills=total_skills,
        total_experience_years=total_experience_years,
        total_certifications=total_certifications,
        featured_projects=featured_projects,
        top_skills=top_skills,
        recent_contacts=recent_contacts
    )

@router.get("/stats", response_model=APIResponse)
async def get_portfolio_stats(db: Session = Depends(get_db)):
    # Project stats by status
    project_stats = db.query(
        Project.status, 
        func.count(Project.id).label('count')
    ).group_by(Project.status).all()
    
    # Skills by category
    skill_stats = db.query(
        Skill.category,
        func.count(Skill.id).label('count'),
        func.avg(Skill.proficiency_level).label('avg_proficiency')
    ).group_by(Skill.category).all()
    
    # Contact stats
    contact_stats = db.query(
        func.count(Contact.id).label('total'),
        func.count(Contact.id).filter(Contact.is_read == True).label('read'),
        func.count(Contact.id).filter(Contact.is_replied == True).label('replied')
    ).first()
    
    return APIResponse(
        success=True,
        message="Portfolio statistics retrieved successfully",
        data={
            "projects": [{"status": stat[0], "count": stat[1]} for stat in project_stats],
            "skills": [
                {
                    "category": stat[0], 
                    "count": stat[1], 
                    "avg_proficiency": round(float(stat[2]), 2)
                } for stat in skill_stats
            ],
            "contacts": {
                "total": contact_stats.total,
                "read": contact_stats.read,
                "replied": contact_stats.replied
            }
        }
    )

@router.get("/about", response_model=APIResponse)
async def get_about_info():
    about_data = {
        "name": "YALLA.NAGAPRAVEEN",
        "title": "Aspiring Data Scientist & Technology Enthusiast",
        "email": "praveen.yalla2@gmail.com",
        "phone": "+91 8328377820",
        "location": "Hyderabad, India",
        "website": "https://yallanagapraveen.info",
        "linkedin": "https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351",
        "github": "https://github.com/praveeenyalla",
        "bio": "Fresh graduate with a passion for data science, data analysis, and machine learning. Equipped with strong analytical skills, technical knowledge in data science and analytics, and hands-on project experience. Ready to contribute to data-driven decision making and grow professionally in the fields of data science and analytics.",
        "objective": "Seeking an entry-level Data Scientist or Data Analyst position where I can apply my analytical skills, technical knowledge, and passion for machine learning and data analysis to contribute to organizational success.",
        "availability": "Available for immediate joining",
        "work_preference": "Remote/Hybrid/On-site",
        "key_skills": [
            "Data Science & Machine Learning",
            "Data Analysis & Business Intelligence",
            "Statistical Modeling & Analysis", 
            "Python & SQL Programming",
            "Excel & BI Tools (Power BI, Tableau)",
            "Model Development & Deployment",
            "Problem Solving",
            "Quick Learning Ability"
        ],
        "achievements": [
            "ExcelR Data Science certification",
            "6+ completed projects",
            "Strong foundation in data science and analytics",
            "Professional portfolio website"
        ]
    }
    
    return APIResponse(
        success=True,
        message="About information retrieved successfully",
        data=about_data
    )