from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db
from app.models.devis import DevisRequest
from app.schemas.devis import DevisCreate, DevisResponse
from app.services.email import send_devis_notification

router = APIRouter()

PRODUCT_RECOMMENDATIONS = {
    ("lighting",): ("SG1210", 60),
    ("lighting", "tv"): ("SHS1265", 50),
    ("lighting", "tv", "fridge"): ("EP3100", 65),
    ("lighting", "fridge"): ("EP1100", 55),
    ("tv",): ("SG1230", 45),
}


@router.post("/devis", response_model=DevisResponse)
async def request_devis(
    data: DevisCreate,
    db: AsyncSession = Depends(get_db),
):
    needs_key = tuple(sorted(data.needs))
    recommended_product, savings_pct = PRODUCT_RECOMMENDATIONS.get(
        needs_key, ("Contactez-nous", 50)
    )

    devis = DevisRequest(
        name=data.name,
        phone=data.phone,
        email=data.email,
        city=data.city,
        property_type=data.property_type,
        monthly_bill=data.monthly_bill,
        needs=data.needs,
        message=data.message,
    )
    db.add(devis)
    await db.commit()
    await db.refresh(devis)

    estimated_savings = round(data.monthly_bill * savings_pct / 100, 2)

    try:
        await send_devis_notification(
            name=data.name,
            phone=data.phone,
            email=data.email,
            city=data.city,
            property_type=data.property_type,
            monthly_bill=data.monthly_bill,
            needs=data.needs,
            message=data.message,
        )
    except Exception:
        pass

    return DevisResponse(
        estimated_savings=estimated_savings,
        recommended_product=recommended_product,
    )
