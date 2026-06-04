from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class NewsletterCreate(BaseModel):
    email: EmailStr
    name: Optional[str] = Field(None, max_length=100)


class NewsletterResponse(BaseModel):
    success: bool = True
    message: str = "Inscription confirmée ! Merci de nous avoir rejoints."
