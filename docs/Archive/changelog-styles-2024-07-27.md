# Styles Changelog - 2024-07-27

This changelog summarizes significant updates and refinements made to the AQXION website's styling system.

## 1. Token System Overhaul (`src/styles/tokens/`)

A comprehensive review and update of all design tokens to establish a more professional, corporate, and consistent aesthetic.

-   **`colors.css`:**
    *   Introduced refined Light Mode palette with subtle blue-gray undertones for backgrounds and text.
    *   Optimized Dark Mode palette with deeper blues and improved text contrast.
    *   Expanded accent color ranges (Primary: Navy Blue, Secondary: Blue Gray).
    *   Standardized state colors (Success, Error, Warning, Info) with full shade ranges.
    *   Improved dark mode application logic in `globals.css` using `[data-theme="dark"]` and `prefers-color-scheme`.
-   **`typography.css`:**
    *   Updated primary font to 'SF Pro Display' (headings) and secondary font to 'SF Pro Text'/'Inter' (body).
    *   Implemented fluid typography using `clamp()` for all major font sizes (`--font-size-hero`, `--font-size-body`, etc.).
    *   Defined composite typographic style variables (e.g., `--heading-hero`, `--body-text`) for easy application.
    *   Refined line heights and letter spacing tokens.
-   **`spacing.css`:**
    *   Expanded spacing scale with more granular options (e.g., `--spacing-0-5` for 2px).
    *   Introduced fluid section spacing tokens using `clamp()` (e.g., `--spacing-section-y`).
    *   Defined a subtle and professional border radius system (`--radius-xs` to `--radius-full`).
    *   Implemented a comprehensive shadow system (`--shadow-xs` to `--shadow-2xl`, `--shadow-inner`) for depth.
    *   Standardized container max-width tokens (`--container-sm` to `--container-2xl`).
-   **`breakpoints.css`:**
    *   Standardized breakpoint values (`sm` to `2xl`).
-   **`animations.css`:**
    *   Refined durations for more subtle motion.
    *   Introduced new easing functions (e.g., `--ease-default`, `--ease-bounce`).
    *   Defined base and composite transition variables for common UI elements.
    *   Standardized keyframe animations for common patterns (fade, scale, slide).
-   **`tokens.css` (Root Level):**
    *   Now acts as a manifest, importing all individual token files from the `tokens/` subdirectory.

## 2. Global Styles Enhancement (`src/styles/globals.css`)

-   Centralized all style imports.
-   Enhanced `html` and `body` base styles for smooth scrolling, text rendering, and a default subtle gradient background.
-   Improved selection and `:focus-visible` styles.
-   Added custom styled scrollbar.
-   Integrated "premium" effects: `.premium-gradient-text`, `.premium-glow`, `.premium-glass`, `.premium-skeleton`.
-   Improved print styles.
-   Added utility classes for GPU acceleration and animation optimization.
-   Refined dark mode application logic.

## 3. Base Styles (`src/styles/base.css`)

-   Simplified to focus on essential resets, normalization, and base typographic element styling, leveraging tokens from `tokens.css`.

## 4. Utility Classes

-   **`utilities.css`:**
    *   Consolidated general utility classes.
    *   Updated `.cta-primary` and `.cta-secondary` to use new color tokens and refined transitions.
    *   Updated `.trust-badge` styling.
    *   The `.section` class (basic padding/background) is now primarily handled by component props or Tailwind, with base styling potentially here if needed beyond component logic.
-   **`responsive-utils.css`:**
    *   Introduced a dedicated file for responsive helper classes (e.g., `.hide-on-mobile`, `.cta-sticky-bottom`, `.full-width-on-mobile`).

## 5. Component Styles (`src/styles/components.css`)

-   Updated component classes (e.g., `.button`, `.card`, `.box`) to utilize the new design tokens for typography, spacing, colors, and radii.
-   Added refined styles for `.card-interactive`, `.card-elevated`, `.card-flat`, `.card-gradient`, and `.card-loading` states.
-   Standardized styles for `.split-view` and `.tab-view` components.

## 6. Section Layout Styles (`src/styles/section-layout.css`)

-   Consolidated styles specifically for structuring page sections (e.g., `.section-header-headline`, `.section-content`, `.section-grid`, `.section-container`).
-   Ensured these classes leverage the new spacing and typography tokens.

## 7. Overall CSS Architecture

-   Strengthened the token-driven approach by centralizing all token definitions in the `tokens/` subdirectory and importing them via `tokens.css`.
-   Improved clarity in the purpose of each CSS file, promoting better separation of concerns.
-   Ensured all custom styles are imported correctly through `globals.css`.

These changes aim to create a more robust, maintainable, and visually polished styling foundation for the AQXION website.
