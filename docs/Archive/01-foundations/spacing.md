# Spacing, Sizing & Elevation — AQXION Design System

Consistent spacing, sizing, and elevation (shadows, borders) are crucial for a clean, organized, and visually appealing professional interface. This document outlines these systems.

## Spacing Scale

AQXION uses a refined spacing scale, primarily based on multiples of 4px, for a corporate look.

| Token Name    | Value (px) | Rem (16px base) | Typical Use                                       |
|---------------|------------|-----------------|---------------------------------------------------|
| `--spacing-0`   | 0px        | 0rem            | Reset                                             |
| `--spacing-px`  | 1px        | 0.0625rem       | Fine lines, borders                               |
| `--spacing-0-5` | 2px        | 0.125rem        | Micro-spacing                                     |
| `--spacing-1`   | 4px        | 0.25rem         | Small icon padding, tight gaps                    |
| `--spacing-2`   | 8px        | 0.5rem          | Standard small padding/margin                     |
| `--spacing-3`   | 12px       | 0.75rem         |                                                   |
| `--spacing-4`   | 16px       | 1rem            | Base unit for many components, paragraph spacing  |
| `--spacing-5`   | 20px       | 1.25rem         |                                                   |
| `--spacing-6`   | 24px       | 1.5rem          | Margins between distinct elements                 |
| `--spacing-8`   | 32px       | 2rem            | Larger gaps, section sub-padding                  |
| `--spacing-10`  | 40px       | 2.5rem         |                                                   |
| `--spacing-12`  | 48px       | 3rem            | Sectional element spacing                         |
| `--spacing-16`  | 64px       | 4rem            | Major vertical rhythm, large gaps                 |
| `--spacing-20`  | 80px       | 5rem            |                                                   |
| `--spacing-24`  | 96px       | 6rem            |                                                   |
| `--spacing-32`  | 128px      | 8rem            | Very large separations                            |

### Section Spacing (Fluid with `clamp()`)

-   `--spacing-section-y`: `clamp(4rem, 10vh, 6rem)` (Default vertical padding for sections)
-   `--spacing-section-sm-y`: `clamp(3rem, 7vh, 4rem)` (For smaller screens or compact sections)
-   `--spacing-section-lg-y`: `clamp(6rem, 15vh, 8rem)` (For larger, more impactful sections)

## Border Radii

Subtle border radii are used to maintain a professional and modern look.

| Token Name      | Value (px) | Rem (16px base) | Typical Use                     |
|-----------------|------------|-----------------|---------------------------------|
| `--radius-xs`   | 2px        | 0.125rem        | Very small elements, tags       |
| `--radius-sm`   | 4px        | 0.25rem         | Buttons, inputs, small cards    |
| `--radius-md`   | 6px        | 0.375rem        | Standard card radius            |
| `--radius-lg`   | 8px        | 0.5rem          | Larger cards, modal dialogs     |
| `--radius-xl`   | 12px       | 0.75rem         |                                 |
| `--radius-2xl`  | 16px       | 1rem            | Significant rounding for features |
| `--radius-3xl`  | 24px       | 1.5rem         |                                 |
| `--radius-full` | 9999px     | N/A             | Pills, circular elements        |

## Shadows (Elevation)

A professional shadow system to create depth and hierarchy. Shadow colors are defined in `colors.css`.

| Token Name       | Value                                                    | Typical Use                               |
|------------------|----------------------------------------------------------|-------------------------------------------|
| `--shadow-xs`    | `0 1px 2px rgba(26, 31, 54, 0.05)`                       | Subtle lift for small, static elements    |
| `--shadow-sm`    | `0 1px 3px rgba(26, 31, 54, 0.1), 0 1px 2px rgba(26, 31, 54, 0.06)` | Default for cards, interactive elements |
| `--shadow-md`    | `0 4px 6px -1px rgba(26, 31, 54, 0.08), 0 2px 4px -2px rgba(26, 31, 54, 0.06)` | More pronounced elevation, modals       |
| `--shadow-lg`    | `0 10px 15px -3px rgba(26, 31, 54, 0.08), 0 4px 6px -4px rgba(26, 31, 54, 0.04)` | Significant depth, dropdowns, popovers  |
| `--shadow-xl`    | `0 20px 25px -5px rgba(26, 31, 54, 0.08), 0 8px 10px -6px rgba(26, 31, 54, 0.04)` | Maximum elevation for key elements      |
| `--shadow-2xl`   | `0 25px 50px -12px rgba(26, 31, 54, 0.15)`              | Deep, diffuse shadows                     |
| `--shadow-inner` | `inset 0 2px 4px 0 rgba(26, 31, 54, 0.06)`               | Inner shadow for pressed states, inputs |

## Container Sizes

Optimized container widths for content readability across devices.

| Token Name        | Max Width | Typical Use        |
|-------------------|-----------|--------------------|
| `--container-sm`  | 640px     | Mobile-centric     |
| `--container-md`  | 768px     | Tablet             |
| `--container-lg`  | 1024px    | Standard Desktop   |
| `--container-xl`  | 1280px    | Wide Desktop       |
| `--container-2xl` | 1440px    | Extra Wide Screens |

## CSS Implementation

All these tokens are defined as CSS custom properties in `src/styles/tokens/spacing.css`.

```css
/* Example: src/styles/tokens/spacing.css */
:root {
  --spacing-4: 1rem;     /* 16px */
  --radius-md: 0.375rem; /* 6px */
  --shadow-sm: 0 1px 3px rgba(26, 31, 54, 0.1),
               0 1px 2px rgba(26, 31, 54, 0.06);
  --container-lg: 1024px;
}

/* Usage */
.my-card {
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  max-width: var(--container-md);
  margin: 0 auto;
}
```

## Application

-   **Margins & Padding:** Use these tokens for `margin` and `padding` properties on components and layout elements.
-   **Gaps:** Apply to `gap` property in Flexbox and Grid layouts.
-   **Component Internals:** Components should use these tokens for their internal spacing.
-   **Vertical Rhythm:** Establish a consistent vertical rhythm, especially between text blocks and sections.

## Tailwind CSS Configuration

If using Tailwind CSS, the `theme.spacing` configuration in `tailwind.config.js` should be updated to reflect this scale, allowing for utility classes like `p-4`, `m-8`, `gap-6`.

```javascript
// Example: tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '1': '0.25rem', // 4px
        '2': '0.5rem',  // 8px
        // ...and so on, matching the tokens
        'section-sm-y': 'var(--spacing-section-sm-y)',
        'section-y': 'var(--spacing-section-y)',
      },
    },
  },
  plugins: [],
};
```

## Guidelines

-   **Consistency:** Strive for consistency. Avoid arbitrary magic numbers for spacing.
-   **Hierarchy:** Use larger spacing to separate less related items and smaller spacing for more related items.
-   **Breathability:** Ensure enough white space around elements to improve readability and reduce clutter.
