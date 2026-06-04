from datetime import datetime
from typing import Optional

from sqlalchemy import String, Text, Float, Boolean, JSON, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class DevisRequest(Base):
    __tablename__ = "devis_requests"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(100))
    phone: Mapped[str] = mapped_column(String(20))
    email: Mapped[str] = mapped_column(String(255))
    city: Mapped[str] = mapped_column(String(100))
    property_type: Mapped[str] = mapped_column(String(50))
    monthly_bill: Mapped[float] = mapped_column(Float)
    needs: Mapped[dict] = mapped_column(JSON)
    message: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    is_contacted: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=func.now())
