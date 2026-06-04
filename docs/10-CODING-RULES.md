# Coding Rules & Best Practices

## General Rules
- **No comments in code** unless the logic is truly complex and non-obvious
- **No console.log** in production code
- **French** for visible UI text, **English** for code (variables, functions, comments)
- **Darija (Arabic)** for sections targeting ICP rural
- **TypeScript** — strict mode, no `any` unless absolutely necessary
- **No hardcoded strings** in components — use data files or constants
- **Mobile-first** responsive design
- **Accessible** — proper ARIA, semantic HTML, keyboard navigation

## Component Rules
1. **Server components by default** — only use 'use client' when you need:
   - Event handlers (onClick, onSubmit, etc.)
   - useState / useEffect
   - Browser APIs
   - Framer Motion animations

2. **Section components** in `sections/` should be composable:
   - Receive data as props (don't fetch inside section)
   - Be self-contained (can be copy-pasted)
   - Have proper TypeScript interfaces

3. **Client components** should be leaf components (as deep as possible)

4. **Export metadata** from each page for SEO

## Naming Conventions
- **Files**: `kebab-case.ts` / `kebab-case.tsx`
- **Components**: `PascalCase.tsx`
- **Functions**: `camelCase()`
- **Types/Interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **CSS classes**: Tailwind utility classes only (no custom CSS unless necessary)

## Image Rules
- All images in `/public/images/`
- Use `next/image` with explicit `width` and `height`
- WebP format preferred
- Under 200KB per image
- `priority` on above-fold images, `loading="lazy"` on below-fold
- Meaningful `alt` text in French

## Performance Targets
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **First Load JS**: < 150KB (without images)
- **Image optimization**: serve WebP with srcset/sizes
- **Font optimization**: `next/font` with `display: 'swap'`

## Tailwind Conventions
- Use Tailwind classes directly in JSX
- Extract reusable patterns to `className` variables for repeated blocks
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Use Tailwind's `@apply` only in `globals.css` for base styles
- Custom colors: use theme tokens (e.g., `bg-[#D4A843]` or define in tailwind.config)

## Git Commit Messages
- French or English
- Prefix: `feat:` / `fix:` / `style:` / `refactor:` / `docs:` / `chore:`
- Examples:
  - `feat: ajouter la section héro avec formulaire de devis`
  - `fix: corriger le responsive du footer sur mobile`
  - `style: ajuster les couleurs CTA pour meilleur contraste`

## Backend Rules
- Async endpoints with proper error handling
- Pydantic schemas for request/response validation
- Type hints everywhere
- No business logic in endpoint functions → use services layer
- Proper HTTP status codes (200, 201, 400, 404, 500)
- Logging with Python's `logging` module (not print)

## SEO Rules
- Every page: unique `<title>` + `<meta description>`
- Open Graph tags for social sharing
- Structured data (JSON-LD) for:
  - LocalBusiness (show-room)
  - Product (each product)
  - FAQ
- `hreflang` tags for FR / AR versions
- Sitemap.xml generation
- robots.txt

## Testing (if applicable)
- Run: `npm run lint` before committing frontend
- Run: `ruff check .` before committing backend
- No unit tests required for MVP, but ensure no lint errors
