from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.email import send_contact_notification

router = APIRouter()


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(
    data: ContactCreate,
    db: AsyncSession = Depends(get_db),
):
    contact = ContactMessage(
        name=data.name,
        email=data.email,
        phone=data.phone,
        subject=data.subject,
        message=data.message,
    )
    db.add(contact)
    await db.commit()
    await db.refresh(contact)

    try:
        await send_contact_notification(
            name=data.name,
            email=data.email,
            phone=data.phone,
            subject=data.subject,
            message=data.message,
        )
    except Exception:
        pass

    return ContactResponse()
