from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class DevisCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    email: EmailStr
    city: str = Field(..., min_length=2, max_length=100)
    property_type: str = Field(..., pattern="^(maison|appartement|ferme|commerce|autre)$")
    monthly_bill: float = Field(..., ge=0, le=100000)
    needs: list[str] = Field(..., min_length=1)
    message: Optional[str] = Field(None, max_length=2000)


class DevisResponse(BaseModel):
    success: bool = True
    message: str = "Votre demande de devis a été reçue. Nous vous contacterons sous 24h."
    estimated_savings: Optional[float] = None
    recommended_product: Optional[str] = None
