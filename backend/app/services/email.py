import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.core.config import settings

logger = logging.getLogger(__name__)


async def send_email(to: str, subject: str, body: str, html: str | None = None):
    if not settings.SMTP_USER or not settings.SMTP_PASSWORD:
        logger.warning("SMTP not configured. Email not sent.")
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = settings.SMTP_USER
    msg["To"] = to

    msg.attach(MIMEText(body, "plain", "utf-8"))
    if html:
        msg.attach(MIMEText(html, "html", "utf-8"))

    try:
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            server.sendmail(settings.SMTP_USER, to, msg.as_string())
        logger.info(f"Email sent to {to}")
    except Exception as e:
        logger.error(f"Failed to send email to {to}: {e}")
        raise


async def send_contact_notification(name: str, email: str, phone: str, subject: str, message: str):
    body = f"""Nouveau message de contact - Atout Solaire

Nom: {name}
Email: {email}
Téléphone: {phone}
Sujet: {subject}

Message:
{message}
"""
    await send_email(
        to=settings.ADMIN_EMAIL,
        subject=f"[Atout Solaire] Nouveau contact: {subject} - {name}",
        body=body,
    )


async def send_devis_notification(
    name: str, phone: str, email: str, city: str,
    property_type: str, monthly_bill: float, needs: list[str], message: str | None
):
    body = f"""Nouvelle demande de devis - Atout Solaire

Nom: {name}
Email: {email}
Téléphone: {phone}
Ville: {city}
Type de bien: {property_type}
Facture mensuelle: {monthly_bill} dh
Besoins: {', '.join(needs)}
Message: {message or 'N/A'}
"""
    await send_email(
        to=settings.ADMIN_EMAIL,
        subject=f"[Atout Solaire] Devis: {name} - {city}",
        body=body,
    )


async def send_newsletter_confirmation(email: str, name: str | None = None):
    greeting = f"{name}" if name else "Bonjour"
    body = f"""{greeting},

Merci de vous être inscrit à la newsletter Atout Solaire.

Vous recevrez bientôt nos actualités, promotions et conseils solaires.

L'équipe Atout Solaire
solaireatout@gmail.com
05 23 34 39 93
"""
    await send_email(
        to=email,
        subject="Bienvenue à la newsletter Atout Solaire",
        body=body,
    )
