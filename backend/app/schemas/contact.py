from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=20)
    subject: str = Field(..., pattern="^(devis|info|sav|partenariat)$")
    message: str = Field(..., min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    success: bool = True
    message: str = "Votre message a été envoyé avec succès. Nous vous répondrons sous 24h."
