from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db
from app.models.newsletter import NewsletterSubscriber
from app.schemas.newsletter import NewsletterCreate, NewsletterResponse
from app.services.email import send_newsletter_confirmation

router = APIRouter()


@router.post("/newsletter", response_model=NewsletterResponse)
async def subscribe_newsletter(
    data: NewsletterCreate,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(NewsletterSubscriber).where(NewsletterSubscriber.email == data.email)
    )
    existing = result.scalar_one_or_none()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Cet email est déjà inscrit à notre newsletter.",
        )

    subscriber = NewsletterSubscriber(
        email=data.email,
        name=data.name,
    )
    db.add(subscriber)
    await db.commit()
    await db.refresh(subscriber)

    try:
        await send_newsletter_confirmation(email=data.email, name=data.name)
    except Exception:
        pass

    return NewsletterResponse()
