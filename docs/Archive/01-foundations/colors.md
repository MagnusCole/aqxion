# Colors — AQXION Design System

This document outlines the refined color system for the AQXION project, designed for a professional, elegant, and accessible interface. It includes comprehensive palettes for Light Mode, Dark Mode, accent colors, and states.

## Core Philosophy

The color system is built upon a base of neutral grays with blue undertones for a corporate feel, complemented by a strong primary accent color. It prioritizes readability and a clean aesthetic.

## Light Mode Palette

Inspired by modern professional interfaces, focusing on clarity and subtlety.

| Category          | Usage                 | Hex        | CSS Variable Example          | Notes                                   |
|-------------------|-----------------------|------------|-------------------------------|-----------------------------------------|
| **Backgrounds**   | Main Background       | `#FFFFFF`  | `var(--color-bg-primary)`     | Clean white base                        |
|                   | Secondary Background  | `#F8F9FB`  | `var(--color-bg-secondary)`   | Subtle off-white for differentiation    |
|                   | Tertiary Background   | `#F3F4F6`  | `var(--color-bg-tertiary)`    | Slightly darker for layering            |
|                   | Quaternary Background | `#E9ECEF`  | `var(--color-bg-quaternary)`  |                                         |
|                   | Elevated Surfaces     | `#FFFFFF`  | `var(--color-bg-elevated)`    | For cards, modals                       |
|                   | Subtle Accents        | `#FAFBFC`  | `var(--color-bg-subtle)`      | Very light gray for subtle distinctions |
| **Text**          | Primary Text          | `#1A1F36`  | `var(--color-text-primary)`   | Dark blue-gray for high contrast        |
|                   | Secondary Text        | `#3C4257`  | `var(--color-text-secondary)` | Medium blue-gray for supporting text    |
|                   | Tertiary Text         | `#697386`  | `var(--color-text-tertiary)`  | Lighter blue-gray for less emphasis     |
|                   | Quaternary Text       | `#8792A2`  | `var(--color-text-quaternary)`|                                         |
|                   | Placeholder Text      | `#A3ACB9`  | `var(--color-text-placeholder)`| For input placeholders                  |
| **Borders**       | Standard Border       | `#E3E8EF`  | `var(--color-border)`         | Subtle borders                          |
|                   | Light Border          | `#EDF2F7`  | `var(--color-border-light)`   | For lighter UI elements                 |
|                   | Dark Border           | `#CBD5E1`  | `var(--color-border-dark)`    | For more prominent dividers             |
| **Overlays**      | Standard Overlay      | `rgba(26, 31, 54, 0.4)` | `var(--color-overlay)` | For modal backdrops, etc.            |
| **Shadows**       | Standard Shadow Color | `rgba(26, 31, 54, 0.08)`| `var(--color-shadow)`  | Base color for shadow definitions       |

## Dark Mode Palette

Optimized for low-light environments, maintaining professionalism and readability. Applied via `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)`.

| Category          | Usage                 | Hex        | CSS Variable Example              | Notes                               |
|-------------------|-----------------------|------------|-----------------------------------|-------------------------------------|
| **Backgrounds**   | Main Background       | `#0A0F1F`  | `var(--color-dark-bg)`            | Deep, dark blue                     |
|                   | Primary Background    | `#0F1425`  | `var(--color-dark-bg-primary)`    | Base for dark theme                 |
|                   | Secondary Background  | `#1A1F36`  | `var(--color-dark-bg-secondary)`  | For layering                        |
|                   | Tertiary Background   | `#252D4A`  | `var(--color-dark-bg-terciary)`   |                                     |
|                   | Quaternary Background | `#2F3757`  | `var(--color-dark-bg-quaternary)` |                                     |
|                   | Elevated Surfaces     | `#1A1F36`  | `var(--color-dark-bg-elevated)`   | For cards, modals in dark mode      |
|                   | Subtle Accents        | `#151931`  | `var(--color-dark-bg-subtle)`     |                                     |
| **Text**          | Primary Text          | `#FFFFFF`  | `var(--color-dark-text-primary)`  | White for high contrast             |
|                   | Secondary Text        | `#E0E7FF`  | `var(--color-dark-text-secondary)`| Off-white for supporting text       |
|                   | Tertiary Text         | `#B0B9D1`  | `var(--color-dark-text-terciary)` | Light gray for less emphasis        |
|                   | Quaternary Text       | `#8792A2`  | `var(--color-dark-text-quaternary)`|                                     |
|                   | Placeholder Text      | `#697386`  | `var(--color-dark-text-placeholder)`|                                     |
| **Borders**       | Standard Border       | `#2F3757`  | `var(--color-dark-border)`        | Visible but not overly stark        |
|                   | Light Border          | `#3C4257`  | `var(--color-dark-border-light)`  |                                     |
|                   | Dark Border           | `#1A1F36`  | `var(--color-dark-border-dark)`   |                                     |
| **Overlays**      | Standard Overlay      | `rgba(15, 20, 37, 0.6)` | `var(--color-dark-overlay)` | Darker overlay for dark mode        |
| **Shadows**       | Standard Shadow Color | `rgba(0, 0, 0, 0.2)` | `var(--color-dark-shadow)`   | Base color for dark mode shadows    |

*Note: Specific dark mode text colors like `--color-dark-text`, `--color-dark-text-primary` etc. are defined in `colors.css` and applied when dark mode is active.*

## Accent Colors

Used for calls to action, highlights, and branding elements.

### Primary Accent (Navy Blue)

| Shade | Hex       | CSS Variable          |
|-------|-----------|-----------------------|
| 50    | `#F5F7FF` | `--color-primary-50`  |
| 100   | `#E5E9FF` | `--color-primary-100` |
| 200   | `#D0D7FF` | `--color-primary-200` |
| 300   | `#A3B3FF` | `--color-primary-300` |
| 400   | `#7B8FFF` | `--color-primary-400` |
| **500**| `#536DFE` | `--color-primary-500` | (Base Accent)
| 600   | `#3D5AFE` | `--color-primary-600` | (Often used for CTAs)
| 700   | `#3151E1` | `--color-primary-700` |
| 800   | `#2945BC` | `--color-primary-800` |
| 900   | `#1E3799` | `--color-primary-900` |

### Secondary Accent (Blue Gray)

| Shade | Hex       | CSS Variable            |
|-------|-----------|-------------------------|
| 50    | `#F8FAFC` | `--color-secondary-50`  |
| 100   | `#F1F5F9` | `--color-secondary-100` |
| ...   | ...       | ...                     |
| **500**| `#64748B` | `--color-secondary-500` | (Base Accent)
| ...   | ...       | ...                     |
| 900   | `#0F172A` | `--color-secondary-900` |

## State Colors

Used for feedback elements like success messages, errors, and warnings.

-   **Success:** Green tones (e.g., `var(--color-success-500)`: `#22C55E`)
-   **Error:** Red tones (e.g., `var(--color-error-500)`: `#EF4444`)
-   **Warning:** Yellow/Orange tones (e.g., `var(--color-warning-500)`: `#F59E0B`)
-   **Info:** Blue tones (e.g., `var(--color-info-500)`: `#3B82F6`)

Each state color has a full range from 50 to 700 (or 900) defined in `tokens/colors.css`.

## Implementation

Colors are defined as CSS custom properties in `src/styles/tokens/colors.css`. Dark mode is activated using the `[data-theme="dark"]` attribute on the `html` tag or automatically via `prefers-color-scheme: dark` media query if no explicit theme is set.

```css
/* Example Usage */
.my-element {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.my-button-primary {
  background-color: var(--color-primary-600);
  color: var(--color-primary-50); /* Or white */
}
```

