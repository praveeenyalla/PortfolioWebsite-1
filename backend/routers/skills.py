from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional

from ..database import get_db
from ..models import Skill, User
from ..schemas import SkillCreate, SkillResponse, APIResponse
from ..routers.auth import get_current_admin_user

router = APIRouter()

@router.get("/", response_model=List[SkillResponse])
async def get_skills(
    category: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Skill)
    
    if category:
        query = query.filter(Skill.category == category)
    
    skills = query.order_by(Skill.proficiency_level.desc()).all()
    return skills

@router.get("/categories", response_model=APIResponse)
async def get_skill_categories(db: Session = Depends(get_db)):
    categories = db.query(Skill.category).distinct().all()
    category_list = [cat[0] for cat in categories]
    
    return APIResponse(
        success=True,
        message="Skill categories retrieved successfully",
        data={"categories": category_list}
    )

@router.get("/{skill_id}", response_model=SkillResponse)
async def get_skill(skill_id: int, db: Session = Depends(get_db)):
    skill = db.query(Skill).filter(Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    return skill

@router.post("/", response_model=APIResponse)
async def create_skill(
    skill: SkillCreate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    db_skill = Skill(**skill.dict())
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    
    return APIResponse(
        success=True,
        message="Skill created successfully",
        data={"skill_id": db_skill.id}
    )

@router.put("/{skill_id}", response_model=APIResponse)
async def update_skill(
    skill_id: int,
    skill_update: SkillCreate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    skill = db.query(Skill).filter(Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    
    update_data = skill_update.dict()
    for field, value in update_data.items():
        setattr(skill, field, value)
    
    db.commit()
    db.refresh(skill)
    
    return APIResponse(
        success=True,
        message="Skill updated successfully",
        data={"skill_id": skill.id}
    )

@router.delete("/{skill_id}", response_model=APIResponse)
async def delete_skill(
    skill_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    skill = db.query(Skill).filter(Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    
    db.delete(skill)
    db.commit()
    
    return APIResponse(
        success=True,
        message="Skill deleted successfully"
    )

@router.get("/stats/summary", response_model=APIResponse)
async def get_skill_stats(db: Session = Depends(get_db)):
    from sqlalchemy import func
    
    total_skills = db.query(Skill).count()
    avg_proficiency = db.query(func.avg(Skill.proficiency_level)).scalar()
    
    category_stats = db.query(
        Skill.category,
        func.count(Skill.id).label('count'),
        func.avg(Skill.proficiency_level).label('avg_proficiency')
    ).group_by(Skill.category).all()
    
    return APIResponse(
        success=True,
        message="Skill statistics retrieved successfully",
        data={
            "total_skills": total_skills,
            "average_proficiency": round(float(avg_proficiency or 0), 2),
            "categories": [
                {
                    "name": stat[0],
                    "count": stat[1],
                    "avg_proficiency": round(float(stat[2]), 2)
                } for stat in category_stats
            ]
        }
    )