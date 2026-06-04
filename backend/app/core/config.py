from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Atout Solaire API"
    ENVIRONMENT: str = "production"
    DEBUG: bool = False

    DATABASE_URL: str = "postgresql+asyncpg://atoutsolaire:password@db:5432/atoutsolaire"

    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    ADMIN_EMAIL: str = "solaireatout@gmail.com"

    SECRET_KEY: str = ""
    CORS_ORIGINS: list[str] = [
        "https://atoutsolaire.ma",
        "https://www.atoutsolaire.ma",
        "http://localhost:3000",
    ]

    SENTRY_DSN: str = ""

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
