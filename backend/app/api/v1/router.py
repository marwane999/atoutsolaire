from fastapi import APIRouter

from app.api.v1.endpoints.contact import router as contact_router
from app.api.v1.endpoints.newsletter import router as newsletter_router
from app.api.v1.endpoints.devis import router as devis_router
from app.api.v1.endpoints.health import router as health_router

api_router = APIRouter()

api_router.include_router(contact_router, tags=["Contact"])
api_router.include_router(newsletter_router, tags=["Newsletter"])
api_router.include_router(devis_router, tags=["Devis"])
api_router.include_router(health_router, tags=["Health"])
