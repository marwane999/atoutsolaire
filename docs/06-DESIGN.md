# Design System — Atout Solaire

## Brand Colors

```
┌─────────────────────────────────────────────────────────────┐
│ 🎨 PALETTE PRINCIPALE                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ PRIMARY (Or/Ambre) — CTA, Accents, Highlights                │
│ HEX: #D4A843   RGB: 212, 168, 67                            │
│ Utilisation: Boutons CTA, icônes, soulignages, étoiles      │
│                                                             │
│ SECONDARY (Bleu Foncé) — Fond, Headers, Authority           │
│ HEX: #1B3A5C   RGB: 27, 58, 92                              │
│ Utilisation: Header, Footer, H2/H3, cards backgrounds       │
│                                                             │
│ ACCENT (Vert Éco) — Écologie, Économies, Nature             │
│ HEX: #2D8B4E   RGB: 45, 139, 78                             │
│ Utilisation: Badges économies, checkmarks, statistiques      │
│                                                             │
│ MUTED (Beige clair) — Sections alternées                     │
│ HEX: #F5F5F0   RGB: 245, 245, 240                           │
│ Utilisation: Section backgrounds alternées                   │
│                                                             │
│ WARM WHITE — Background principal                             │
│ HEX: #FAFAF7   RGB: 250, 250, 247                            │
│ Utilisation: Page background                                 │
│                                                             │
│ DARK TEXT — Texte principal                                   │
│ HEX: #1C1C1C   RGB: 28, 28, 28                              │
│ Utilisation: Body text                                       │
│                                                             │
│ OR SOLEIL (Dégradé) — Hero backgrounds                       │
│ Gradient: from #1B3A5C via #2D5F8B to #D4A843               │
│ Utilisation: Hero overlay gradient                           │
└─────────────────────────────────────────────────────────────┘
```

## Typography

```
┌─────────────────────────────────────────────────────────────┐
│ 🔤 TYPOGRAPHIE                                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Titres: Inter (sans-serif, variable weight)                  │
│   H1: 800 (Extra Bold), 3.5rem-4rem                         │
│   H2: 700 (Bold), 2.25rem-2.75rem                           │
│   H3: 600 (Semibold), 1.5rem-2rem                           │
│                                                             │
│ Body: Inter (sans-serif)                                     │
│   P: 400 (Regular), 1rem, line-height 1.75                  │
│   Small: 400, 0.875rem                                      │
│                                                             │
│ Darija: Noto Kufi Arabic (sans-serif)                        │
│   Même échelle que Inter pour harmonie                       │
│                                                             │
│ Accents: Italic ou weight 300 pour citations                 │
└─────────────────────────────────────────────────────────────┘
```

## Spacing
```
space-0: 0
space-1: 0.25rem (4px)
space-2: 0.5rem (8px)
space-3: 0.75rem (12px)
space-4: 1rem (16px)
space-5: 1.25rem (20px)
space-6: 1.5rem (24px)
space-8: 2rem (32px)
space-10: 2.5rem (40px)
space-12: 3rem (48px)
space-16: 4rem (64px)
space-20: 5rem (80px)
space-24: 6rem (96px)

Section padding: py-16 md:py-24
Container max-width: max-w-7xl mx-auto
Content padding: px-4 md:px-8
```

## Shadows
```
shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
shadow-md: 0 4px 6px rgba(0,0,0,0.07)
shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
shadow-xl: 0 20px 25px rgba(0,0,0,0.12)
shadow-gold: 0 4px 14px rgba(212,168,67,0.25)  # For CTA buttons
```

## Button Styles
```
Primary CTA (Gold):
  bg-[#D4A843] hover:bg-[#C49A3A] text-[#1A1A1A] font-semibold
  px-8 py-3 rounded-lg shadow-gold
  hover:shadow-xl transition-all duration-300

Secondary CTA (Bleu):
  bg-[#1B3A5C] hover:bg-[#152D4A] text-white font-semibold
  px-8 py-3 rounded-lg

Outline CTA:
  border-2 border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-white
  px-8 py-3 rounded-lg font-semibold

WhatsApp CTA:
  bg-green-500 hover:bg-green-600 text-white
  flex items-center gap-2
```

## Card Styles
```
Product Card:
  bg-white rounded-xl shadow-md overflow-hidden
  hover:shadow-xl hover:scale-[1.02] transition-all duration-300
  
Section Card (Avantages):
  bg-white/80 backdrop-blur rounded-xl p-8 shadow-lg
  border-l-4 border-[#D4A843]
```

## Section Background Alternance
```
Section 1: bg-[#FAFAF7] (default white-warm)
Section 2: bg-[#F5F5F0] (muted beige)
Section 3: bg-[#FAFAF7]
Section 4: bg-[#1B3A5C] text-white (dark section)
...repeat
```

## Image Treatments
```
Hero images: dark overlay gradient (black 30% -> 10%)
Product images: white background, drop shadow
Installation gallery: rounded-2xl, shadow-lg
Team photos: circular masks
Icons: Lucide React, stroke-width 1.5, size 24-48
```

## Glassmorphism (for stats / overlay cards)
```
bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl
```

## Key Design Patterns

### CTA Hierarchy
1. **Primary**: Gold filled button → "Devis Gratuit", "Contactez-nous"
2. **Secondary**: Blue filled → "Voir les produits", "En savoir plus"
3. **Outline**: Gold border → "Nos installations", secondary actions
4. **WhatsApp**: Green → Contact direct mobile

### Badges System
```typescript
const badgeVariants = {
  garantie: "bg-green-100 text-green-800 border-green-200",
  promo: "bg-red-100 text-red-800 border-red-200 animate-pulse",
  nouveau: "bg-blue-100 text-blue-800 border-blue-200",
  eco: "bg-emerald-100 text-emerald-800 border-emerald-200",
  stock: "bg-amber-100 text-amber-800 border-amber-200",
}
```

### Trust Signals
- Badges must have subtle animations on scroll/load
- Numbers should use counter animation
- Testimonials: real name + city, not anonymous
- Certifications: show logos as images
- Contact: always visible in header + sticky footer on mobile

### Responsive Breakpoints Design
```
Mobile (< 640px):
  - Single column layouts
  - Smaller font sizes (clamp)
  - Hamburger menu
  - Sticky bottom bar "Devis Gratuit" with phone icon
  - Cards full width
  
Tablet (640-1024px):
  - 2 columns grids
  - Normal font sizes
  
Desktop (> 1024px):
  - Alternating image/text sections
  - 3-4 column grids
  - Full navigation
  - Hover effects active
```
