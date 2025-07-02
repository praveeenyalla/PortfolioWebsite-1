import os
import uuid
import shutil
from typing import Optional
from fastapi import UploadFile, HTTPException
from PIL import Image
import aiofiles

from ..config import settings

class FileHandler:
    def __init__(self):
        self.upload_dir = settings.UPLOAD_DIR
        self.max_file_size = settings.MAX_FILE_SIZE
        
        # Create upload directories
        os.makedirs(os.path.join(self.upload_dir, "projects"), exist_ok=True)
        os.makedirs(os.path.join(self.upload_dir, "certificates"), exist_ok=True)
        os.makedirs(os.path.join(self.upload_dir, "profile"), exist_ok=True)
    
    async def save_uploaded_file(
        self,
        file: UploadFile,
        folder: str,
        allowed_types: Optional[list] = None
    ) -> str:
        # Validate file size
        if file.size > self.max_file_size:
            raise HTTPException(
                status_code=413,
                detail=f"File size exceeds maximum allowed size of {self.max_file_size} bytes"
            )
        
        # Validate file type
        if allowed_types and file.content_type not in allowed_types:
            raise HTTPException(
                status_code=400,
                detail=f"File type {file.content_type} not allowed"
            )
        
        # Generate unique filename
        file_extension = file.filename.split('.')[-1] if '.' in file.filename else ''
        filename = f"{uuid.uuid4()}.{file_extension}"
        file_path = os.path.join(self.upload_dir, folder, filename)
        
        # Save file
        async with aiofiles.open(file_path, 'wb') as f:
            content = await file.read()
            await f.write(content)
        
        return f"/static/uploads/{folder}/{filename}"
    
    def process_image(
        self,
        file_path: str,
        max_width: int = 1200,
        quality: int = 85
    ) -> bool:
        try:
            with Image.open(file_path) as img:
                # Convert to RGB if necessary
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                # Resize if needed
                if img.width > max_width:
                    ratio = max_width / img.width
                    new_height = int(img.height * ratio)
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                # Save with optimization
                img.save(file_path, optimize=True, quality=quality)
            
            return True
            
        except Exception as e:
            print(f"Image processing error: {e}")
            return False
    
    def delete_file(self, file_path: str) -> bool:
        try:
            full_path = os.path.join(self.upload_dir, file_path.replace('/static/uploads/', ''))
            if os.path.exists(full_path):
                os.remove(full_path)
                return True
            return False
        except Exception as e:
            print(f"File deletion error: {e}")
            return False
    
    def get_file_info(self, file_path: str) -> dict:
        try:
            full_path = os.path.join(self.upload_dir, file_path.replace('/static/uploads/', ''))
            if os.path.exists(full_path):
                stat = os.stat(full_path)
                return {
                    "exists": True,
                    "size": stat.st_size,
                    "modified": stat.st_mtime,
                    "path": file_path
                }
            return {"exists": False}
        except Exception as e:
            print(f"File info error: {e}")
            return {"exists": False, "error": str(e)}

# Create global file handler instance
file_handler = FileHandler()