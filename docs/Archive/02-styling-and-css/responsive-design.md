# Responsive Design Strategy — AQXION

AQXION's website is designed with a mobile-first approach, ensuring a seamless experience across all devices. This document outlines the strategies, breakpoints, and utility classes used to achieve responsiveness.

## Core Principles

1.  **Mobile-First:** Styles are primarily defined for the smallest screens, then progressively enhanced for larger screens using media queries.
2.  **Fluidity:** Layouts and typography utilize fluid techniques (e.g., percentages, `vw`/`vh`, `clamp()`) where appropriate to adapt smoothly between breakpoints.
3.  **Readability & Usability:** Content remains legible and interactive elements are easily accessible on all screen sizes.
4.  **Performance:** Optimize assets and loading strategies for mobile devices.

## Breakpoints

The project uses a standard set of breakpoints defined in `src/styles/tokens/breakpoints.css` and documented in [`01-foundations/breakpoints.md`](../01-foundations/breakpoints.md). These are:

-   `sm`: 640px
-   `md`: 768px
-   `lg`: 1024px
-   `xl`: 1280px
-   `2xl`: 1536px

These breakpoints are integrated into Tailwind CSS for utility class usage (e.g., `md:text-left`, `lg:grid-cols-3`).

## Responsive Utility Classes (`src/styles/responsive-utils.css`)

A dedicated set of utility classes in `responsive-utils.css` provides quick solutions for common responsive adjustments, particularly for mobile devices (max-width: 767px or 768px depending on the class).

### Visibility Utilities:
-   `.hide-on-mobile`: Hides element on screens <= 767px.
-   `.show-on-mobile`: Shows element only on screens <= 767px (hides on > 768px).

### CTA & Layout Optimizations:
-   `.cta-sticky-bottom`: Makes an element a sticky footer CTA on mobile, respecting safe areas.
-   `.cta-sticky-bottom-container`: A flex container for the sticky CTA.
-   `.hero-mobile-optimize`: Adjusts padding and min-height for hero sections on mobile.
-   `.trackrecord-mobile-optimize`: Adjusts margin for track record sections on mobile.

### Spacing & Sizing Adjustments:
-   `.compact-on-mobile`: Reduces horizontal padding on mobile.
-   `.full-width-on-mobile`: Makes an element take full width on mobile.
-   `.no-margin-on-mobile`: Removes all margins on mobile.
-   `.no-padding-on-mobile`: Removes all padding on mobile.
-   `.reduced-gap-on-mobile`: Reduces `gap` property in flex/grid layouts on mobile.

### Text & Content Adjustments:
-   `.text-center-on-mobile`: Centers text on mobile.
-   `.smaller-text-on-mobile`: Reduces font size (typically by a factor like 0.875em) on mobile.

```css
/* Example Usage from responsive-utils.css */
.hide-on-mobile {
  @media (max-width: 767px) { /* or var(--breakpoint-md) - 1px */
    display: none !important;
  }
}

.cta-sticky-bottom {
  @media (max-width: 767px) {
    position: fixed !important;
    bottom: 1rem !important;
    /* ... other styles ... */
  }
}
```

## Strategies & Best Practices

1.  **Tailwind Responsive Modifiers:** Extensively use Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`) for applying styles at different breakpoints.
    ```html
    <div class="text-center lg:text-left p-4 md:p-8">...</div>
    ```
2.  **Fluid Typography:** Utilize `clamp()` for font sizes as defined in `tokens/typography.css` to allow text to scale smoothly within breakpoint ranges.
3.  **Flexbox & Grid:** Employ CSS Flexbox and Grid for creating robust and adaptable layouts. Tailwind's utilities (`flex`, `grid`, `gap-`, `col-span-`, etc.) are preferred.
4.  **Image Optimization:** Use responsive images (`<picture>` element, `srcset` attribute) and ensure images are optimized for different screen sizes and resolutions.
5.  **Navigation:** Mobile navigation often collapses into a hamburger menu or a more compact form.
6.  **Touch Targets:** Ensure buttons and interactive elements have adequate touch target sizes on mobile devices (minimum 44x44px recommended).
7.  **Testing:**
    *   Use browser developer tools to simulate different screen sizes.
    *   Test on real mobile, tablet, and desktop devices.
    *   Verify landscape and portrait orientations.

By combining Tailwind's responsive capabilities with custom utilities and a mobile-first mindset, the AQXION website aims to provide an optimal viewing experience for all users.
