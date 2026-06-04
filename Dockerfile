FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY frontend/ .
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_FB_PIXEL_ID
ARG NEXT_PUBLIC_WHATSAPP_NUMBER
ARG NEXT_PUBLIC_CONTACT_PHONE
ARG NEXT_PUBLIC_CONTACT_EMAIL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID \
    NEXT_PUBLIC_FB_PIXEL_ID=$NEXT_PUBLIC_FB_PIXEL_ID \
    NEXT_PUBLIC_WHATSAPP_NUMBER=$NEXT_PUBLIC_WHATSAPP_NUMBER \
    NEXT_PUBLIC_CONTACT_PHONE=$NEXT_PUBLIC_CONTACT_PHONE \
    NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
