# Architecture du Projet Atout Solaire

## Stack Technique

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + clsx/twMerge
- **UI Components**: shadcn/ui (Radix Primitives)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email/Contact**: EmailJS or Resend
- **Icons**: Lucide React
- **Images**: next/image (optimized, WebP format)
- **SEO**: next-seo or built-in generateMetadata
- **Analytics**: Google Analytics 4 (via next/script)
- **Font**: Inter (Google Fonts, variable weight)

### Backend
- **Framework**: FastAPI (Python 3.11+)
- **ORM**: SQLAlchemy 2.0 + Alembic migrations
- **Database**: PostgreSQL (via Easypanel)
- **Validation**: Pydantic v2
- **Auth**: JWT tokens (python-jose)
- **Email**: smtplib + email-validator
- **File Upload**: python-multipart
- **CORS**: fastapi.middleware.cors
- **ASGI Server**: Uvicorn
- **Task Queue**: Celery (optional, for heavy tasks)

## Project Structure

```
atout-solaire/
├── frontend/
│   ├── public/
│   │   ├── images/         # All static images from old site
│   │   ├── fonts/          # Custom fonts if needed
│   │   └── icons/          # Favicon, app icons
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   │   ├── (public)/   # Public routes layout
│   │   │   │   ├── page.tsx          # Homepage
│   │   │   │   ├── vision/page.tsx
│   │   │   │   ├── produits/page.tsx
│   │   │   │   ├── produits/[slug]/page.tsx
│   │   │   │   ├── installations/page.tsx
│   │   │   │   ├── distributeurs/page.tsx
│   │   │   │   ├── showroom/page.tsx
│   │   │   │   ├── facture/page.tsx
│   │   │   │   ├── garantie/page.tsx
│   │   │   │   ├── contact/page.tsx
│   │   │   │   └── blog/page.tsx
│   │   │   ├── api/        # API routes (proxy to backend)
│   │   │   ├── layout.tsx  # Root layout
│   │   │   └── globals.css # Global styles + Tailwind
│   │   ├── components/
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── layout/     # Header, Footer, Navigation
│   │   │   ├── sections/   # Homepage sections
│   │   │   ├── products/   # Product cards, grids
│   │   │   └── shared/     # Reusable components
│   │   ├── lib/
│   │   │   ├── utils.ts    # Utility functions
│   │   │   └── api.ts      # API client
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript types
│   │   └── data/           # Static data (products, content)
│   ├── docker/
│   │   └── Dockerfile
│   ├── .env.example
│   ├── docker-compose.yml
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── endpoints/
│   │   │   │   │   ├── contact.py
│   │   │   │   │   ├── newsletter.py
│   │   │   │   │   ├── devis.py
│   │   │   │   │   └── blog.py
│   │   │   │   └── router.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── database.py
│   │   │   └── security.py
│   │   ├── models/
│   │   │   ├── contact.py
│   │   │   ├── newsletter.py
│   │   │   └── devis.py
│   │   ├── schemas/
│   │   │   ├── contact.py
│   │   │   └── devis.py
│   │   ├── services/
│   │   │   ├── email.py
│   │   │   └── notification.py
│   │   └── main.py
│   ├── alembic/
│   ├── docker/
│   │   └── Dockerfile
│   ├── .env.example
│   ├── requirements.txt
│   └── docker-compose.yml
│
├── docs/              # This folder
├── docker-compose.yml # Root orchestrator
└── README.md
```

## Data Flow
1. User visits frontend (Next.js)
2. Static pages served via SSG/ISR for speed
3. Forms (contact, devis, newsletter) submit to backend API
4. Backend validates with Pydantic, stores in PostgreSQL
5. Email notifications sent to admin (solaireatout@gmail.com)
6. Frontend shows success/error toast notifications

## Key Pages Routing
| Path | Page | Content Source |
|------|------|---------------|
| `/` | Homepage | Static + dynamic sections |
| `/vision` | Notre Vision | Static content from old site |
| `/produits` | Produits (catalog) | Static data + images |
| `/produits/[slug]` | Single product detail | Static data |
| `/installations` | Nos Installations | Static content + gallery |
| `/distributeurs` | Distributeurs/Revendeurs | Static content |
| `/showroom` | Adresse Show-Room | Static + Google Maps embed |
| `/facture` | Diminuer votre facture | Static content |
| `/garantie` | Garantie & SAV | Static content |
| `/contact` | Contact form | Form -> Backend API |
