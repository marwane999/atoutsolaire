# Backend — FastAPI + PostgreSQL

## Tech Stack
- **Python 3.11+**
- **FastAPI** (async)
- **SQLAlchemy 2.0** (async)
- **Alembic** (migrations)
- **PostgreSQL** (via Easypanel)
- **Pydantic v2** (validation)
- **python-jose** (JWT, if admin auth needed)
- **python-multipart** (file uploads)
- **smtplib** (email)

## Architecture

```
backend/
├── app/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── contact.py     # POST /contact
│   │   │   │   ├── newsletter.py  # POST /newsletter
│   │   │   │   ├── devis.py       # POST /devis
│   │   │   │   └── admin.py       # GET/POST admin endpoints
│   │   │   └── router.py          # v1 router aggregation
│   │   └── deps.py                # Dependencies (DB session, etc.)
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py              # Settings from env vars
│   │   ├── database.py            # Async engine + session
│   │   └── security.py            # JWT utils (if needed)
│   ├── models/
│   │   ├── __init__.py
│   │   ├── contact.py             # ContactMessage ORM model
│   │   ├── newsletter.py          # NewsletterSubscriber ORM model
│   │   └── devis.py               # DevisRequest ORM model
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── contact.py             # Pydantic schemas for contact
│   │   └── devis.py               # Pydantic schemas for devis
│   ├── services/
│   │   ├── __init__.py
│   │   ├── email.py               # Email sending logic
│   │   └── notification.py        # Admin notification logic
│   └── main.py                    # FastAPI app creation
├── alembic/
│   ├── versions/
│   └── env.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── .env.example
```

## API Endpoints

### Contact Form `POST /api/v1/contact`
```json
{
  "name": "Hassan El Amrani",
  "email": "hassan@email.com",
  "phone": "+2126XXXXXXXX",
  "subject": "devis",
  "message": "Bonjour, je souhaite un devis pour un kit solaire..."
}
```
Response: `{ "success": true }`
Action: Save to DB + Send email to solaireatout@gmail.com

### Newsletter `POST /api/v1/newsletter`
```json
{
  "email": "client@email.com",
  "name": "Hassan"
}
```
Response: `{ "success": true }`
Action: Save subscriber + Send confirmation

### Devis Request `POST /api/v1/devis`
```json
{
  "name": "Hassan El Amrani",
  "phone": "+2126XXXXXXXX",
  "email": "hassan@email.com",
  "city": "El Jadida",
  "property_type": "maison",
  "monthly_bill": 500,
  "needs": ["lighting", "tv", "fridge"],
  "message": "Je veux un kit pour ma maison à la campagne"
}
```
Response: `{ "success": true, "estimated_savings": 300, "recommended_product": "SHS1265" }`
Action: Save to DB + Send email to admin

### Health Check `GET /api/v1/health`
Response: `{ "status": "ok", "version": "1.0.0" }`

## Database Models

### ContactMessage
```python
class ContactMessage(Base):
    __tablename__ = "contact_messages"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(255))
    phone: Mapped[str] = mapped_column(String(20))
    subject: Mapped[str] = mapped_column(String(50))  # devis, info, sav, partenariat
    message: Mapped[str] = mapped_column(Text)
    is_read: Mapped[bool] = mapped_column(default=False)
    created_at: Mapped[datetime] = mapped_column(default=func.now())
```

### NewsletterSubscriber
```python
class NewsletterSubscriber(Base):
    __tablename__ = "newsletter_subscribers"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True)
    name: Mapped[Optional[str]] = mapped_column(String(100))
    is_active: Mapped[bool] = mapped_column(default=True)
    created_at: Mapped[datetime] = mapped_column(default=func.now())
```

### DevisRequest
```python
class DevisRequest(Base):
    __tablename__ = "devis_requests"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    phone: Mapped[str] = mapped_column(String(20))
    email: Mapped[str] = mapped_column(String(255))
    city: Mapped[str] = mapped_column(String(100))
    property_type: Mapped[str] = mapped_column(String(50))
    monthly_bill: Mapped[float] = mapped_column(Float)
    needs: Mapped[str] = mapped_column(JSON)  # array of needs
    message: Mapped[Optional[str]] = mapped_column(Text)
    is_contacted: Mapped[bool] = mapped_column(default=False)
    created_at: Mapped[datetime] = mapped_column(default=func.now())
```

## Email Service
```python
# Send notification to admin
async def send_contact_notification(contact: ContactMessage):
    msg = MIMEText(f"""
    Nouveau message de contact:
    
    Nom: {contact.name}
    Email: {contact.email}
    Téléphone: {contact.phone}
    Sujet: {contact.subject}
    
    Message:
    {contact.message}
    """)
    # Send to solaireatout@gmail.com via SMTP
```

## Configuration (Settings)
```python
class Settings(BaseSettings):
    APP_NAME: str = "Atout Solaire API"
    DATABASE_URL: str = "postgresql+asyncpg://user:pass@localhost:5432/atoutsolaire"
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    ADMIN_EMAIL: str = "solaireatout@gmail.com"
    CORS_ORIGINS: list[str] = ["https://atoutsolaire.ma", "http://localhost:3000"]
    SECRET_KEY: str = ""
    ENVIRONMENT: str = "production"
```

## Backend Dockerfile
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```
