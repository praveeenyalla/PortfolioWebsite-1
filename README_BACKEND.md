# YALLA.NAGAPRAVEEN Data Scientist Portfolio - Python Backend API

A comprehensive FastAPI backend for the professional data scientist portfolio website with authentication, database management, and RESTful APIs.

## 🚀 Features

### Core Functionality
- **RESTful API Design** - Clean, well-documented APIs
- **Authentication & Authorization** - JWT-based security
- **Database Management** - PostgreSQL with SQLAlchemy ORM
- **File Upload & Management** - Image processing and storage
- **Email Notifications** - Automated contact form handling
- **Data Validation** - Pydantic schemas for type safety

### API Endpoints

#### Authentication (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /me` - Get current user info
- `GET /verify-token` - Token validation

#### Portfolio (`/api/portfolio`)
- `GET /summary` - Portfolio overview
- `GET /stats` - Portfolio statistics
- `GET /about` - About information

#### Projects (`/api/projects`)
- `GET /` - List all projects
- `GET /{id}` - Get specific project
- `POST /` - Create new project (admin)
- `PUT /{id}` - Update project (admin)
- `DELETE /{id}` - Delete project (admin)
- `POST /{id}/upload-image` - Upload project image

#### Skills (`/api/skills`)
- `GET /` - List all skills
- `GET /categories` - Get skill categories
- `POST /` - Create new skill (admin)
- `PUT /{id}` - Update skill (admin)
- `DELETE /{id}` - Delete skill (admin)

#### Contact (`/api/contact`)
- `POST /` - Submit contact form
- `GET /` - List contacts (admin)
- `GET /{id}` - Get specific contact (admin)
- `PUT /{id}/mark-read` - Mark as read (admin)
- `PUT /{id}/mark-replied` - Mark as replied (admin)

## 🛠️ Technology Stack

### Backend Framework
- **FastAPI** - Modern, fast web framework for APIs
- **Uvicorn** - ASGI server for production deployment
- **Pydantic** - Data validation and settings management

### Database
- **PostgreSQL** - Primary database
- **SQLAlchemy** - ORM for database operations
- **Alembic** - Database migration management

### Security
- **JWT** - JSON Web Tokens for authentication
- **Passlib** - Password hashing with bcrypt
- **CORS** - Cross-origin resource sharing

### Additional Features
- **Pillow** - Image processing and optimization
- **SMTP** - Email notifications
- **Aiofiles** - Async file operations
- **Redis** - Caching (optional)

## 📦 Installation & Setup

### Prerequisites
- Python 3.8+
- PostgreSQL 12+
- Redis (optional, for caching)

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Database Setup
```bash
# Create PostgreSQL database
createdb portfolio_db

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials
```

### 3. Database Migration
```bash
# Initialize Alembic (first time only)
alembic init alembic

# Create initial migration
alembic revision --autogenerate -m "Initial migration"

# Apply migrations
alembic upgrade head
```

### 4. Environment Configuration
Edit `.env` file with your settings:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost/portfolio_db

# Security
SECRET_KEY=your-super-secret-key-here
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Email
EMAIL_USERNAME=nagapraveenyalla@gmail.com
EMAIL_PASSWORD=your-app-password

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### 5. Run the Server
```bash
# Development server
python run_backend.py

# Or using uvicorn directly
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

## 📚 API Documentation

### Interactive Documentation
- **Swagger UI**: http://localhost:8000/api/docs
- **ReDoc**: http://localhost:8000/api/redoc

### Health Check
```bash
curl http://localhost:8000/api/health
```

### Authentication Example
```bash
# Register new user
curl -X POST "http://localhost:8000/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "username": "testuser",
    "full_name": "Test User",
    "password": "securepassword"
  }'

# Login
curl -X POST "http://localhost:8000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "securepassword"
  }'
```

### Portfolio Data Example
```bash
# Get portfolio summary
curl http://localhost:8000/api/portfolio/summary

# Get projects
curl http://localhost:8000/api/projects

# Submit contact form
curl -X POST "http://localhost:8000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project opportunity."
  }'
```

## 🗄️ Database Schema

### Core Tables
- **users** - User accounts and authentication
- **projects** - Portfolio projects with details
- **skills** - Technical skills and proficiency levels
- **experiences** - Work experience and education
- **contacts** - Contact form submissions
- **certifications** - Professional certifications
- **blog_posts** - Blog articles (future feature)

### Key Relationships
- Users can have multiple projects (admin users)
- Skills are categorized by technology areas
- Contacts are tracked with read/reply status
- Projects can have multiple technologies and features

## 🔧 Configuration

### Email Setup
For Gmail SMTP:
1. Enable 2-factor authentication
2. Generate app-specific password
3. Use app password in EMAIL_PASSWORD

### File Upload Configuration
- Default upload directory: `backend/static/uploads`
- Maximum file size: 10MB
- Supported image formats: JPEG, PNG, GIF
- Automatic image optimization and resizing

### Security Configuration
- JWT tokens expire in 30 minutes (configurable)
- Passwords are hashed using bcrypt
- CORS is configured for frontend domains
- Admin-only endpoints require authentication

## 🚀 Deployment

### Production Setup
```bash
# Install production dependencies
pip install gunicorn

# Run with Gunicorn
gunicorn backend.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

### Docker Deployment
```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Environment Variables for Production
```env
DATABASE_URL=postgresql://user:pass@db:5432/portfolio_db
SECRET_KEY=production-secret-key
ALLOWED_ORIGINS=https://yallanagapraveen.info
```

## 📊 Monitoring & Logging

### Health Checks
- `/api/health` - Basic health check
- Database connection validation
- File system access verification

### Logging
- Request/response logging
- Error tracking and reporting
- Performance monitoring

### Metrics
- API response times
- Database query performance
- File upload statistics
- Contact form submissions

## 🔒 Security Features

### Authentication
- JWT-based authentication
- Secure password hashing
- Token expiration management
- Admin role authorization

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- File upload security
- CORS protection

### Privacy
- Contact form data encryption
- Secure file storage
- Email notification security
- User data protection

## 🧪 Testing

### API Testing
```bash
# Install testing dependencies
pip install pytest httpx

# Run tests
pytest tests/
```

### Manual Testing
Use the interactive API documentation at `/api/docs` to test all endpoints with real data.

## 📞 Support & Contact

### Technical Support
- **Developer**: YALLA.NAGAPRAVEEN
- **Email**: nagapraveenyalla@gmail.com
- **Website**: https://yallanagapraveen.info
- **GitHub**: https://github.com/praveeenyalla

### API Issues
For API-related issues:
1. Check the interactive documentation
2. Verify environment configuration
3. Review server logs
4. Contact via the portfolio website

---

**Built with ❤️ using FastAPI and modern Python technologies**

*Last Updated: January 2025*