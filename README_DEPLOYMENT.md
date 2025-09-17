# Deployment Guide

## Frontend Deployment (Netlify)

This project's frontend is configured for deployment on Netlify. The backend API is separate and needs to be deployed on a different platform.

### Netlify Deployment Steps

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**: Netlify will automatically detect the build settings from `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: No environment variables needed for the frontend
4. **Deploy**: Netlify will build and deploy automatically

### Backend Deployment Options

The Python FastAPI backend needs to be deployed separately on platforms that support Python applications:

#### Option 1: Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### Option 2: Render
1. Create account on Render.com
2. Connect your repository
3. Create a new Web Service
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `python run_backend.py`

#### Option 3: Heroku
```bash
# Install Heroku CLI and login
heroku login

# Create app
heroku create your-app-name

# Add Python buildpack
heroku buildpacks:set heroku/python

# Deploy
git push heroku main
```

#### Option 4: DigitalOcean App Platform
1. Create account on DigitalOcean
2. Go to App Platform
3. Connect your repository
4. Configure Python app settings
5. Deploy

### Environment Configuration

For production deployment, update the API base URL in `src/utils/api.ts`:

```typescript
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-backend-domain.com' // Replace with your actual backend URL
  : 'http://localhost:8000';
```

### Database Setup

For production, you'll need a PostgreSQL database:

1. **Railway**: Provides PostgreSQL addon
2. **Render**: Offers PostgreSQL service
3. **Heroku**: Has PostgreSQL addon
4. **Supabase**: Free PostgreSQL with additional features
5. **PlanetScale**: MySQL alternative
6. **AWS RDS**: Enterprise solution

### SSL and Domain

- **Frontend**: Netlify provides free SSL and custom domain support
- **Backend**: Most platforms provide free SSL certificates
- **Custom Domain**: Configure DNS to point to your deployed services

### Monitoring and Analytics

- **Frontend**: Netlify Analytics, Google Analytics
- **Backend**: Platform-specific monitoring, Sentry for error tracking
- **Database**: Platform monitoring tools

## Current Status

✅ **Frontend**: Ready for Netlify deployment  
⏳ **Backend**: Needs separate deployment platform  
⏳ **Database**: Needs production database setup  

## Next Steps

1. Deploy frontend to Netlify (automatic with this configuration)
2. Choose and deploy backend to a Python-supporting platform
3. Set up production database
4. Update API URLs in frontend configuration
5. Configure environment variables for backend
6. Test full application functionality

## Support

For deployment issues:
- Frontend: Check Netlify build logs
- Backend: Check platform-specific logs
- Database: Verify connection strings and credentials

Contact: praveen.yalla2@gmail.com