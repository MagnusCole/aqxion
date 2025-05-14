# AQXION — Strategic Acquisition Platform

> **Vision:** Operator‑led, vision‑driven acquisitions across LATAM.  
> **Stack:** Next.js 15 · TypeScript · Tailwind CSS v3 · Vercel · PostgreSQL (Prisma) · Playwright.

---

##  · Quick Start

```bash
git clone https://github.com/AQXION/aqxion-app.git
cd aqxion-app
pnpm install
cp .env.example .env.local   # ⬅️ fill DB_URL & NEXT_PUBLIC_SITE_URL
pnpm dev
```

Site runs at `http://localhost:3000`.

---

## 2 · Core Scripts

| Command            | Purpose                          |
|--------------------|----------------------------------|
| `pnpm dev`         | Local dev (Next.js)              |
| `pnpm build`       | Production build                 |
| `pnpm lint`        | ESLint + Prettier                |
| `pnpm test`        | Vitest unit suite                |
| `pnpm test:e2e`    | Playwright end‑to‑end            |
| `pnpm prisma:mig`  | Run DB migrations                |

---

## 3 · Repo Map

```
src/
 ├ app/            # Next.js 15 App Router
 ├ components/     # UI primitives (layout, sections, ui)
 ├ styles/         # tokens, base, utilities, components
 └ tests/          # unit + e2e
docs/
 ├ DESIGN_SYSTEM.md
 └ ARCHITECTURE.md
```

---

## 4 · Documentation

| Topic | File |
|-------|------|
| Visual language | `/docs/DESIGN_SYSTEM.md` |
| System diagram & ADRs | `/docs/ARCHITECTURE.md` |
| Contribution flow | `CONTRIBUTING.md` *(TBD)* |
| Deployment | `/docs/DEPLOYMENT.md` *(TBD)* |

---

## 5 · Status

| Env | URL | Branch |
|-----|-----|--------|
| **Production** | https://aqxion.com | `main` |
| **Preview** | Vercel PR previews | `feat/*` |

---

## 6 · License

© 2025 AQXION Holdings. All rights reserved.
