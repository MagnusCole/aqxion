---
title: AQXION Footer System
version: 1.0
lastUpdated: 2025-05-14
author: MAGNUS_DEV369
---

# 📦 AQXION Footer Documentation

## 🎯 Purpose
Establish a high-trust, professional brand identity at the bottom of every AQXION page, conveying long-term vision and accessibility.

---

## ✅ Key Objectives
- Communicate seriousness, credibility, and institutional alignment.
- Provide clear access to strategic, operational, and legal information.
- Stay visually consistent with AQXION's premium dark brand aesthetic.

---

## ⚙️ Design Principles
- **Dark mode only** (fixed for now)
- **4-column grid** layout for clarity
- **Typography:** `text-white`, `uppercase`, `tracking-widest` for headings
- **Background:** `bg-gradient-to-t from-[#0A0A0A] to-[#111]`
- **Noise layer:** `/public/noise.svg` using `mix-blend-soft-light`

---

## 📐 Structure

```plaintext
[ Partner With Us ]   [ Growth & Strategy ]   [ Company ]     [ Legal & Contact ]
```

### Partner With Us
- Work with us  → `#work`
- Join us       → `#join`
- Sell to us    → `#sell`

### Growth & Strategy
- Thesis        → `#thesis`
- Criteria      → `#criteria`
- Playbook      → `#playbook`

### Company
- Manifesto     → `#manifesto`
- Team          → `#team`
- News & Insights → `#news`

### Legal & Contact
- Privacy Policy → `#privacy`
- Legal Framework → `#legal`
- Email → `mailto:deals@aqxion.com`

---

## 🧠 Accessibility & Semantic Features
- `footer` includes `role="contentinfo"`
- Navigation block uses `aria-labelledby="footer-navigation"`
- All external links include `rel="noopener noreferrer"`
- Email link includes `aria-label` for screen readers

---

## 🌌 Visual Layer
- Noise texture is rendered via:
```tsx
<div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light pointer-events-none" />
```

---

## 🔒 Locked Decisions
- Footer is fixed to **dark mode only** for now.
- `Footer.tsx` lives in `src/components/Footer.tsx`
- No dynamic layout switching in this version.

---

## 📈 Next Iterations
- Add social media icons (LinkedIn, Twitter) in legal section
- Detect route and apply `<FooterLight />` on legal pages
- Add dynamic copyright year
