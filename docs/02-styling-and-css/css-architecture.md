# CSS Architecture — AQXION Design System

This document describes the organization and purpose of CSS files within the AQXION project, aiming for a maintainable, scalable, and token-driven styling approach.

## Core Principles

1.  **Token-Driven Design:** CSS custom properties (variables) for design tokens (colors, typography, spacing, etc.) are central to the system.
2.  **Utility-First (with Tailwind CSS):** Leverage Tailwind CSS for rapid UI development, and supplement with custom utilities where necessary.
3.  **Component-Based Styles:** Encapsulate component-specific styles, either via CSS Modules (if used with React components) or dedicated classes in `components.css`.
4.  **Clear Separation of Concerns:** Different types of styles (tokens, base, utilities, components) are organized into distinct files.
5.  **Global Control:** `globals.css` serves as the main entry point for importing all other CSS and applying global styles.

## File Structure Overview (`src/styles/`)

```
src/styles/
├── tokens/                     # Design tokens defined as CSS custom properties
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css             # Includes spacing, radii, shadows, container sizes
│   ├── breakpoints.css
│   ├── animations.css
│   └── aesthetics.css          # (If specific aesthetic tokens are needed beyond others)
│
├── tokens.css                  # Imports all individual token files
├── base.css                    # Base element styling, resets, and normalization
├── utilities.css               # Custom utility classes (e.g., .cta-primary, .trust-badge)
├── components.css              # Styles for reusable UI components (e.g., .button, .card)
├── section-layout.css          # Specific layout utilities for page sections
├── responsive-utils.css        # Responsive helper classes (e.g., .hide-on-mobile)
├── animations.css              # (If global keyframes are defined outside tokens/animations.css)
└── globals.css                 # Main CSS entry point, Tailwind imports, global body/html styles
```

## File Descriptions

### 1. `tokens/` directory & `tokens.css`
-   **Purpose:** Defines all fundamental design decisions as CSS custom properties.
    -   `colors.css`: Color palettes (light/dark, accents, states).
    -   `typography.css`: Font families, sizes, weights, line heights, composite text styles.
    -   `spacing.css`: Spacing scale, border radii, shadow definitions, container max-widths.
    -   `breakpoints.css`: Responsive breakpoints.
    -   `animations.css`: Durations, easing functions, predefined transitions, and keyframe animations.
    -   `aesthetics.css`: (Optional) For other visual design tokens not covered elsewhere.
-   `tokens.css`: A manifest file that `@import`s all individual token files from the `tokens/` directory. This is then imported into `globals.css`.

### 2. `base.css`
-   **Purpose:** Provides foundational styles.
    -   Resets or normalizes default browser styles (e.g., `box-sizing: border-box`).
    -   Sets base typography for `body`, `h1-h6`, `p`, `a`.
    -   Defines default `font-family`, `line-height`, `color`, `background-color` for the `body`.

### 3. `utilities.css`
-   **Purpose:** Contains custom, reusable utility classes that extend or complement Tailwind CSS.
-   **Examples:** `.cta-primary`, `.cta-secondary`, `.trust-badge`, `.highlight-text`, `.section` (if not handled by Tailwind components), `.section-space-y`.
-   **Note:** The `.section` class and its responsive padding have been moved here from `section-layout.css` or are handled by component props/Tailwind.

### 4. `components.css`
-   **Purpose:** Defines styles for custom, reusable UI components that are not fully covered by Tailwind utilities or require more complex styling.
-   **Examples:** `.button`, `.button-primary`, `.card`, `.box`, `.split-view`, `.tab-view`.
-   These classes are typically applied to React components.

### 5. `section-layout.css`
-   **Purpose:** Contains specific layout helper classes and structures tailored for building page sections, often following patterns like those inspired by Apple's design language.
-   **Examples:** `.section-header-headline`, `.section-header-row`, `.trust-badge-container`, `.section-content`, `.section-grid`, `.section-container`.

### 6. `responsive-utils.css`
-   **Purpose:** Provides utility classes specifically for managing responsive behavior, such as hiding/showing elements on mobile, or applying mobile-specific optimizations.
-   **Examples:** `.hide-on-mobile`, `.show-on-mobile`, `.cta-sticky-bottom`, `.full-width-on-mobile`.

### 7. `animations.css` (Root level)
-   **Purpose:** If there are global keyframe animations or animation utility classes that are not part of the token system (e.g., more complex, one-off animations), they might reside here. However, most animation definitions are expected in `tokens/animations.css`. The import in `globals.css` points to `tokens/animations.css`.

### 8. `globals.css`
-   **Purpose:** The main entry point for all CSS.
    -   Imports Tailwind CSS's `base`, `components`, and `utilities`.
    -   Imports all custom style files: `tokens.css`, `base.css`, `utilities.css`, `components.css`, etc.
    -   Defines global HTML and body styles (e.g., `scroll-behavior`, `text-rendering`, base background).
    -   Includes global styles for dark mode, focus visibility, scrollbars, and "premium" effects.

## Workflow

1.  **Define Tokens:** Start by defining or updating design tokens in the `tokens/` files.
2.  **Base Styles:** Ensure `base.css` correctly sets global defaults.
3.  **Tailwind First:** Attempt to build UI using Tailwind CSS utility classes.
4.  **Custom Utilities/Components:** If Tailwind is insufficient or leads to overly complex class strings for repeated patterns:
    *   Create a custom utility class in `utilities.css` or `responsive-utils.css`.
    *   Create a component class in `components.css` or `section-layout.css`.
5.  **Import:** Ensure all new CSS files or significant class systems are imported into `globals.css`.

This architecture promotes a systematic approach to styling, making the codebase easier to understand, maintain, and scale.
