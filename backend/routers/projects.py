from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from typing import List, Optional
import os
import uuid
from PIL import Image

from ..database import get_db
from ..models import Project, User
from ..schemas import ProjectCreate, ProjectUpdate, ProjectResponse, APIResponse, PaginatedResponse
from ..routers.auth import get_current_admin_user
from ..config import settings

router = APIRouter()

@router.get("/", response_model=List[ProjectResponse])
async def get_projects(
    featured_only: bool = False,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Project)
    
    if featured_only:
        query = query.filter(Project.is_featured == True)
    
    if status:
        query = query.filter(Project.status == status)
    
    projects = query.order_by(Project.created_at.desc()).all()
    return projects

@router.get("/{project_id}", response_model=ProjectResponse)
async def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.post("/", response_model=APIResponse)
async def create_project(
    project: ProjectCreate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    db_project = Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    
    return APIResponse(
        success=True,
        message="Project created successfully",
        data={"project_id": db_project.id}
    )

@router.put("/{project_id}", response_model=APIResponse)
async def update_project(
    project_id: int,
    project_update: ProjectUpdate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    update_data = project_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(project, field, value)
    
    db.commit()
    db.refresh(project)
    
    return APIResponse(
        success=True,
        message="Project updated successfully",
        data={"project_id": project.id}
    )

@router.delete("/{project_id}", response_model=APIResponse)
async def delete_project(
    project_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    db.delete(project)
    db.commit()
    
    return APIResponse(
        success=True,
        message="Project deleted successfully"
    )

@router.post("/{project_id}/upload-image", response_model=APIResponse)
async def upload_project_image(
    project_id: int,
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Validate file type
    if not file.content_type.startswith('image/'):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    # Generate unique filename
    file_extension = file.filename.split('.')[-1]
    filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join(settings.UPLOAD_DIR, "projects", filename)
    
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    # Save file
    with open(file_path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)
    
    # Resize image if needed
    try:
        with Image.open(file_path) as img:
            if img.width > 1200:
                ratio = 1200 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
                img.save(file_path, optimize=True, quality=85)
    except Exception as e:
        print(f"Image processing error: {e}")
    
    # Update project with image URL
    image_url = f"/static/uploads/projects/{filename}"
    project.image_url = image_url
    db.commit()
    
    return APIResponse(
        success=True,
        message="Project image uploaded successfully",
        data={"image_url": image_url}
    )

@router.get("/stats/summary", response_model=APIResponse)
async def get_project_stats(db: Session = Depends(get_db)):
    total_projects = db.query(Project).count()
    completed_projects = db.query(Project).filter(Project.status == "Completed").count()
    in_progress_projects = db.query(Project).filter(Project.status == "In Progress").count()
    featured_projects = db.query(Project).filter(Project.is_featured == True).count()
    
    return APIResponse(
        success=True,
        message="Project statistics retrieved successfully",
        data={
            "total": total_projects,
            "completed": completed_projects,
            "in_progress": in_progress_projects,
            "featured": featured_projects
        }
    )