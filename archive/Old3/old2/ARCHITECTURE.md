# AQXION – Architecture Overview  
_Last updated: 2024-07-26_

---

## 1 · Context (C4 Level 1)

```
[ Founders / Investors ] ─ HTTP(S) ─> [ AQXION Web App ] ─ Prisma ─> [ PostgreSQL ]
```

- **Goal:** Showcase, qualify and manage acquisitions end‑to‑end.
- **Core KPI:** Strategy‑call bookings / qualified targets.

---

## 2 · Containers (C4 Level 2)

| Container | Tech | Responsibility |
|-----------|------|----------------|
| **Next.js Frontend** | React 18, Next.js 15 App Router | Public site, auth, dashboard |
| **API Routes** | Next.js Edge Functions | Contact, booking, webhooks |
| **Database** | PostgreSQL 15 (Supabase) | Deals, founders, pipeline |
| **CI/CD** | GitHub Actions + Vercel | Lint, test, preview, deploy |
| **E2E Testing** | Playwright + Vitest | Critical flows |

---

## 3 · Key Decisions (ADR extract)

1. **Next.js 15 over Remix** – SSR, edge flexibility, large talent pool.  
2. **Tailwind CSS v3 Tokens** – Visual consistency & speed.  
3. **Prisma ORM** – Type‑safe DB, simple migrations.  

*Full ADRs live in `/docs/adr/`.*

---

## 4 · Convención de Carpetas

```
src/
 ├ app/            # Next.js 15 App Router
 │  ├ favicon.ico
 │  ├ layout.tsx
 │  └ page.tsx
 ├ components/     # UI primitives (decoration, layout, sections, shared, ui)
 │  ├ decoration/
 │  │  └ HeroBackground.tsx
 │  ├ layout/
 │  │  ├ Footer.tsx
 │  │  ├ Header.tsx
 │  │  └ MobileMenuPortal.tsx
 │  ├ sections/
 │  │  └ Hero.tsx
 │  ├ shared/       # Shared components, hooks, utils
 │  └ ui/           # Basic UI elements (Button, Container, etc.)
 │     ├ Button.tsx
 │     ├ Container.tsx
 │     ├ Logo.tsx
 │     ├ Section.tsx
 │     └ Typography.tsx
 ├ styles/         # Global styles, tokens, base, utilities, components
 │  ├ base.css
 │  ├ components.css
 │  ├ globals.css
 │  ├ tokens.css
 │  └ utilities.css
 └ tests/          # Pruebas (unitarias, integración, e2e)
public/
 ├ backgrounds/    # Static background assets
 │  └ noise.svg
 ├ downloads/      # Downloadable files (e.g., PDFs)
 ├ favicons/       # Favicon assets
 ├ file.svg        # Example/generic public assets
 ├ globe.svg
 ├ icons/          # SVG icons
 ├ images/         # Static image assets
 ├ logo/           # Logo files
 ├ next.svg        # Next.js related assets
 ├ vercel.svg      # Vercel related assets
 └ window.svg
```

---

## 5 · Data Model (v0)

| Entity | Fields (excerpt) |
|--------|------------------|
| **Founder** | id, name, email, company_id |
| **Company** | id, name, revenue, ebitda |
| **Deal** | id, stage, valuation, company_id |
| **Call** | id, start_at, founder_id |

---

## 6 · Runtime Flow (Booking)

1. Visitor hits `/` → CTA.  
2. `POST /api/booking` saves lead & triggers email.  
3. CRM sheet updated via webhook.  
4. Founder selects time in Calendly; `deal.stage = 'Discovery'`.

---

## 7 · Scaling Notes

- **Edge Functions** for latency‑sensitive routes.  
- **Read Replicas** when leads > 10 k/mo.  
- Move heavy analytics to ClickHouse.

---

## 8 · Open Questions

- Asset storage (statements, NDAs) → S3 vs Supabase Storage?  
- Multi‑tenant support for sub‑brands?

---

## 9 · Changelog

| Date | Change |
|------|--------|
| 2025-05-13 | Initial architecture draft |
