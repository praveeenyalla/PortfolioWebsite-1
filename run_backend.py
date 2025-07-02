#!/usr/bin/env python3
"""
Backend server runner script
"""
import uvicorn
import os
import sys

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

if __name__ == "__main__":
    print("🚀 Starting YALLA.NAGAPRAVEEN Portfolio Backend API...")
    print("📍 API Documentation: http://localhost:8000/api/docs")
    print("📍 Health Check: http://localhost:8000/api/health")
    print("📍 Portfolio API: http://localhost:8000/api/portfolio/summary")
    print("=" * 60)
    
    uvicorn.run(
        "backend.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info",
        access_log=True
    )