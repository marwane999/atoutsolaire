# Frontend — Tech Stack & Coding Rules

## Stack Details

### Core
- **Next.js 14** with App Router (`app/` directory)
- **TypeScript** (strict mode)
- **Tailwind CSS v3** for styling
- **shadcn/ui** component library (Radix Primitives)
- **Framer Motion** for animations
- **Lucide React** for icons

### Additional Libraries
```bash
npm install next@14 react@18 react-dom@18 typescript tailwindcss postcss autoprefixer
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs
npm install @radix-ui/react-accordion @radix-ui/react-carousel @radix-ui/react-toast
npm install class-variance-authority clsx tailwind-merge lucide-react framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install @next/third-parties next-sitemap
```

### Design Tokens (tailwind.config.ts)
```typescript
// Colors
--primary: #D4A843 (Or/Amber — CTA, accents)
--primary-foreground: #1A1A1A
--secondary: #1B3A5C (Bleu Foncé — backgrounds, headers)
--secondary-foreground: #FFFFFF
--accent: #2D8B4E (Vert Éco — nature, économies)
--accent-foreground: #FFFFFF
--background: #FFFFFF
--foreground: #1A1A1A
--muted: #F5F5F0 (Beige clair — sections alternées)
--muted-foreground: #6B7280
--destructive: #EF4444
--border: #E5E7EB
--ring: #D4A843

borderRadius: {
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
}

fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  arabic: ['Noto Kufi Arabic', 'sans-serif'],
}
```

### Typography Scale
```css
h1: 3.5rem / 4rem (desktop), 2.25rem / 2.75rem (mobile) — font-bold tracking-tight
h2: 2.25rem / 2.75rem (desktop), 1.75rem / 2.25rem (mobile) — font-semibold
h3: 1.5rem / 2rem — font-semibold
h4: 1.25rem / 1.75rem — font-medium
body: 1rem / 1.75rem
small: 0.875rem / 1.25rem
```

## Coding Rules

### 1. File Structure
```
src/
  app/
    (public)/
      layout.tsx        # Public layout (header + footer)
      page.tsx          # Homepage
      vision/page.tsx
      produits/page.tsx
      produits/[slug]/page.tsx
      installations/page.tsx
      distributeurs/page.tsx
      showroom/page.tsx
      facture/page.tsx
      garantie/page.tsx
      contact/page.tsx
      mentiones-legales/page.tsx
      privacy/page.tsx
    layout.tsx          # Root layout (providers, fonts)
    globals.css         # Tailwind directives + custom styles
  components/
    ui/                 # shadcn/ui generated components
    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx
      TopBar.tsx
      StickyContact.tsx
    sections/
      home/
        HeroSection.tsx
        StatsBanner.tsx
        ProblemSection.tsx
        SolutionSection.tsx
        ProductsShowcase.tsx
        AdvantagesGrid.tsx
        TestimonialsCarousel.tsx
        AuthoritySection.tsx
        SavingsCalculator.tsx
        InstallationsGallery.tsx
        FAQSection.tsx
        FinalCTA.tsx
    products/
      ProductCard.tsx
      ProductGrid.tsx
      ProductSpecs.tsx
      ProductGallery.tsx
    shared/
      Button.tsx
      Badge.tsx
      SectionTitle.tsx
      CTASection.tsx
      StarRating.tsx
      ContactInfo.tsx
      SocialProof.tsx
      GuaranteeBadge.tsx
  lib/
    utils.ts            # cn() function, misc utilities
    api.ts              # API client for backend
    constants.ts        # Site-wide constants
  hooks/
    useCounter.ts       # Animated counter
    useMediaQuery.ts    # Responsive hooks
    useScrollAnimation.ts
  types/
    index.ts            # Shared types
    product.ts
  data/
    products.ts         # All product data
    testimonials.ts     # Testimonials data
    navigation.ts       # Nav menu structure
    faq.ts              # FAQ data
    installations.ts    # Installation gallery data
```

### 2. Component Patterns
- **Server components by default** — only add 'use client' when needed
- **Section components** in `sections/` directory, one per section
- **Data** lives in `data/` files, not hardcoded in components
- **Images** use `next/image` with `priority` on above-fold images
- **Forms** use React Hook Form + Zod
- **Animations** use Framer Motion's `motion.div` with `initial/whileInView`

### 3. Performance Rules
- Use `next/image` with `loading="lazy"` for below-fold images
- Use `next/link` for internal navigation (no `<a>` tags)
- Fonts: use `next/font` with `display: 'swap'`
- SEO: `generateMetadata()` on each page
- ISR: `revalidate = 3600` on static pages that may update
- Bundle: keep `'use client'` minimal — extract non-interactive parts

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1536)
- Images: `sizes` attribute for responsive images
- Text: responsive font sizes using clamp()
- Navigation: hamburger on mobile, full menu on desktop

### 5. SEO & Meta
Every page exports:
```typescript
export const metadata: Metadata = {
  title: 'Page Title | Atout Solaire',
  description: 'SEO description in French',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/images/og-image.jpg'],
  },
}
```

### 6. Forms
```typescript
// Schema example (contact)
const contactSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone requis'),
  subject: z.enum(['devis', 'info', 'sav', 'partenariat']),
  message: z.string().min(10, 'Message trop court'),
})
```

### 7. Animation Guidelines
- **Hero**: Fade in + subtle slide up
- **Sections**: `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 40 }}`
- **Counters**: Animate numbers in StatsBanner
- **Cards**: Hover scale(1.02) + shadow increase
- **Testimonials**: Auto-play carousel (pause on hover)
- **Stagger**: Children stagger animation for grids
- **Timing**: 0.5s default, ease-out

### 8. Accessibility
- All images have `alt` text (French/descriptive)
- Interactive elements have focus styles
- Forms have proper labels and error messages
- ARIA labels on icon buttons
- Skip-to-content link
- Color contrast ratios WCAG AA
