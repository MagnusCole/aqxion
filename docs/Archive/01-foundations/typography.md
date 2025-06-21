# Typography — AQXION Design System

This document defines the typographic system for the AQXION website, ensuring consistency, readability, and a professional, corporate aesthetic.

## Font Families

-   **Primary (Headings & Display):** 'SF Pro Display', 'Helvetica Neue', sans-serif
    *   CSS Variable: `var(--font-primary)`
    *   Notes: Chosen for its elegance and suitability for titles.
-   **Secondary (Body Text & UI):** 'SF Pro Text', 'Inter', sans-serif
    *   CSS Variable: `var(--font-secondary)`
    *   Notes: Optimized for readability in longer passages and UI elements.

## Typographic Scale & Definitions

The system uses a fluid typographic scale with `clamp()` for responsiveness. Key typographic elements are defined as composite CSS variables.

| Element           | CSS Variable        | Example Font Properties (from variable)                                     | Notes                                      |
|-------------------|---------------------|-----------------------------------------------------------------------------|--------------------------------------------|
| **Hero Heading**  | `--heading-hero`    | `var(--font-weight-bold) var(--font-size-hero)/var(--line-height-tight) var(--font-primary)` | Large, impactful titles for hero sections. |
| **Section Heading**| `--heading-section` | `var(--font-weight-bold) var(--font-size-section)/var(--line-height-tight) var(--font-primary)` | Standard titles for page sections.         |
| **Subheading**    | `--subheading`      | `var(--font-weight-semibold) var(--font-size-subheading)/var(--line-height-normal) var(--font-primary)` | Supporting headings, introductory text.    |
| **Body Text**     | `--body-text`       | `var(--font-weight-regular) var(--font-size-body)/var(--line-height-relaxed) var(--font-secondary)` | Main content text, optimized for reading.  |
| **CTA Text**      | `--cta-text`        | `var(--font-weight-semibold) var(--font-size-md)/var(--line-height-normal) var(--font-primary)` | Text within buttons and calls to action.   |
| **Metric Text**   | `--metric-text`     | `var(--font-weight-semibold) var(--font-size-2xl)/var(--line-height-tight) var(--font-primary)` | For highlighting statistics or key numbers.|
| **Caption Text**  | `--caption-text`    | `var(--font-weight-medium) var(--font-size-xs)/var(--line-height-normal) var(--font-secondary)` | Disclaimers, image captions, small print.  |

### Core Font Sizes (Fluid with `clamp()`)

-   `--font-size-hero`: `clamp(2.75rem, 6vw, 4rem)`
-   `--font-size-section`: `clamp(2rem, 4vw, 3rem)`
-   `--font-size-subheading`: `clamp(1.5rem, 3vw, 2rem)`
-   `--font-size-body`: `clamp(1rem, 1.15vw, 1.125rem)`
-   `--font-size-cta`: `clamp(1rem, 1.25vw, 1.175rem)`
-   `--font-size-metric`: `clamp(1.5rem, 2.25vw, 2rem)`
-   Additional sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl` are also defined with `clamp()`.

### Font Weights

-   `--font-weight-regular`: 400
-   `--font-weight-medium`: 500
-   `--font-weight-semibold`: 600
-   `--font-weight-bold`: 700

### Line Heights

-   `--line-height-tight`: 1.2 (For titles)
-   `--line-height-normal`: 1.5 (For general text, UI elements)
-   `--line-height-relaxed`: 1.7 (For long paragraphs)

### Letter Spacing

-   `--letter-spacing-tight`: -0.02em (For large titles)
-   `--letter-spacing-normal`: -0.01em (For general text)
-   `--letter-spacing-wide`: 0.01em (For small text)
-   `--letter-spacing-wider`: 0.02em (For uppercase text)

## CSS Implementation

All typographic tokens are defined in `src/styles/tokens/typography.css`.

```css
/* Example: src/styles/tokens/typography.css */
:root {
  --font-primary: 'SF Pro Display', 'Helvetica Neue', sans-serif;
  --font-secondary: 'SF Pro Text', 'Inter', sans-serif;
  
  --font-size-body: clamp(1rem, 1.15vw, 1.125rem);
  --font-weight-regular: 400;
  --line-height-relaxed: 1.7;

  /* Composite style */
  --body-text: var(--font-weight-regular) var(--font-size-body)/var(--line-height-relaxed) var(--font-secondary);
}

/* Usage */
.paragraph {
  font: var(--body-text);
  color: var(--color-text-primary);
}
```

## Usage Guidelines

-   **Hierarchy:** Maintain a clear visual hierarchy using different sizes, weights, and families.
-   **Readability:** Prioritize readability by ensuring sufficient contrast and appropriate line heights.
-   **Consistency:** Use the defined styles consistently across the application.
-   **Responsiveness:** Ensure typography scales appropriately across different screen sizes. Use responsive text utilities or `clamp()` where possible.

## Tailwind CSS

Tailwind utility classes can be used to apply these typographic styles:
-   `font-primary`, `font-secondary`
-   `font-regular`, `font-medium`, `font-semibold`, `font-bold`
-   Text size utilities (e.g., `text-lg`, `text-xl`) should be configured to align with this scale.