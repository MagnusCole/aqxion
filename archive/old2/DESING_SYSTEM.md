# 🧠 AQXION STYLE GUIDE

> The official visual and interface system powering AQXION — a strategic acquisition firm designed for LATAM and built for the next 50 years.

---

## 🎨 1. COLORS

| Name              | Variable                    | HEX       | Usage                          |
|-------------------|-----------------------------|-----------|--------------------------------|
| Background        | `--color-bg`                | `#0A0A0A` | Global page background         |
| Footer BG         | `--color-footer`            | `#111111` | Footer / deep sections         |
| Text Primary      | `--color-text`              | `#F8F8F8` | Main text on dark              |
| Text Muted        | `--color-muted`             | `#888888` | Secondary / paragraph content  |
| Accent Gold       | `--color-accent`, `--color-gold` | `#C9A96D` | CTA, hover, emphasis           |

---

## 🔤 2. TYPOGRAPHY

**Font:** `'Geist', sans-serif`  
**Weights:** 300 (light) to 600 (semi-bold)  
**Base size:** 16px  
**Tracking:** controlled with Tailwind + custom variables

### Headings

| Class             | Size         | Use case                      |
|-------------------|--------------|-------------------------------|
| `.heading-hero`   | `text-4xl` → `5xl` | Hero or bold titles      |
| `.heading-section`| `text-3xl` → `4xl` | Section titles            |
| `.label`          | `text-xs uppercase` | Navigation / tags       |

---

## 📐 3. SPACING SYSTEM

Defined in `tokens.css`:

| Variable                | Value   | Purpose                 |
|-------------------------|---------|-------------------------|
| `--spacing-section`     | `6rem`  | Standard vertical padding |
| `--spacing-section-lg`  | `8rem`  | Hero or large sections    |

Use `.section` and `.section-lg` for layout spacing.

---

## 💠 4. COMPONENT CLASSES

From `components.css`:

### ✅ Buttons

```html
<button class="btn-primary">Call to Action</button>
<button class="btn-outline">Secondary CTA</button>
<button class="btn-gold">Premium Action</button>
