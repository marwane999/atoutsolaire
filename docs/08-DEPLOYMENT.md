# Déploiement & Configuration

## Docker Setup

### Root docker-compose.yml (orchestrator)
```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=https://api.atoutsolaire.ma
      - NEXT_PUBLIC_SITE_URL=https://atoutsolaire.ma
    restart: unless-stopped

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql+asyncpg://user:password@db:5432/atoutsolaire
      - SMTP_HOST=${SMTP_HOST}
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASSWORD=${SMTP_PASSWORD}
      - ADMIN_EMAIL=solaireatout@gmail.com
      - CORS_ORIGINS=https://atoutsolaire.ma
      - SECRET_KEY=${SECRET_KEY}
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=atoutsolaire
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=atoutsolaire
    restart: unless-stopped

volumes:
  postgres_data:
```

## Environment Variables

### Frontend (.env.example)
```env
# === FRONTEND ENV ===
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.atoutsolaire.ma
NEXT_PUBLIC_SITE_URL=https://atoutsolaire.ma
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=212631038760
NEXT_PUBLIC_CONTACT_PHONE=0523343993
NEXT_PUBLIC_CONTACT_EMAIL=solaireatout@gmail.com
```

### Backend (.env.example)
```env
# === BACKEND ENV ===
APP_NAME=Atout Solaire API
ENVIRONMENT=production
DEBUG=false

# Database (Easypanel PostgreSQL)
DATABASE_URL=postgresql+asyncpg://user:password@db:5432/atoutsolaire

# SMTP (Gmail or your provider)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=solaireatout@gmail.com

# Security
SECRET_KEY=your-super-secret-key-change-in-production
CORS_ORIGINS=https://atoutsolaire.ma,https://www.atoutsolaire.ma

# Optional
SENTRY_DSN=your-sentry-dsn
```

## Easypanel Setup Guide

### 1. Database
1. Easypanel → Databases → Create PostgreSQL
2. Note: username, password, database name, host
3. These go into backend .env DATABASE_URL

### 2. Backend App
1. Easypanel → Apps → Create App
2. Git repository → atout-solaire (backend folder)
3. Dockerfile path: `backend/Dockerfile`
4. Add env vars from backend .env
5. Port: 8000
6. Domain: api.atoutsolaire.ma (or atoutsolaire.ma/api)

### 3. Frontend App
1. Easypanel → Apps → Create App
2. Git repository → atout-solaire (frontend folder)
3. Dockerfile path: `frontend/Dockerfile`
4. Add env vars from frontend .env
5. Port: 3000
6. Domain: atoutsolaire.ma

### 4. Nginx / Proxy (if needed)
- Route `atoutsolaire.ma` → Frontend (port 3000)
- Route `api.atoutsolaire.ma` → Backend (port 8000)

### 5. SSL
- Let's Encrypt via Easypanel (auto)

## Domain Setup
- Primary: `atoutsolaire.ma`
- API: `api.atoutsolaire.ma` (or use `/api` path on same domain)
- WWW redirect: `www.atoutsolaire.ma` → `atoutsolaire.ma`
- Old site redirect: `atoutsolaire.wordpress.com` → `atoutsolaire.ma` (301)

## Monitoring & Maintenance
- Backend health: `GET /api/v1/health`
- Backups: Easypanel automated database backups
- Updates: Docker image rebuild on git push
- Logs: Easypanel app logs

## CI/CD (GitHub Actions — optional)
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy via Easypanel webhook
        run: curl -X POST ${{ secrets.EASYPANEL_WEBHOOK }}
```

## Post-Deployment Checklist
- [ ] Frontend accessible at domain
- [ ] Backend health endpoint returns 200
- [ ] Contact form sends email
- [ ] Newsletter subscription works
- [ ] Devis form submits correctly
- [ ] SSL certificate active
- [ ] Google Analytics tracking
- [ ] Facebook Pixel active
- [ ] Google Search Console verified
- [ ] Sitemap.xml accessible
- [ ] robots.txt correct
- [ ] Images loading properly
- [ ] Mobile responsive
- [ ] Same tag: atoutsolaire (G-XXXXXXXXXX) in GA4
