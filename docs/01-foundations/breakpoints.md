# Breakpoints — AQXION Design System

This document outlines the responsive breakpoints used in the AQXION project to ensure a consistent and adaptable user experience across various devices and screen sizes.

## Defined Breakpoints

The following breakpoints are defined as CSS custom properties:

| Token Name          | Value  | Target Devices (General Guide) |
|---------------------|--------|--------------------------------|
| `--breakpoint-sm`   | 640px  | Small devices (large phones, portrait tablets) |
| `--breakpoint-md`   | 768px  | Medium devices (tablets)       |
| `--breakpoint-lg`   | 1024px | Large devices (laptops, small desktops) |
| `--breakpoint-xl`   | 1280px | Extra-large devices (desktops) |
| `--breakpoint-2xl`  | 1536px | Very large devices (large desktops, high-res screens) |

## CSS Implementation

These breakpoints are defined in `src/styles/tokens/breakpoints.css`:

```css
/* filepath: src/styles/tokens/breakpoints.css */
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Usage in CSS

Breakpoints are typically used in media queries to apply different styles based on screen width. It's recommended to use a mobile-first approach, defining base styles for small screens and then overriding them for larger screens.

```css
/* Example: Mobile-first approach */
.my-element {
  /* Base styles for mobile */
  width: 100%;
  padding: var(--spacing-4);
}

/* Styles for small devices and up (sm) */
@media (min-width: var(--breakpoint-sm)) {
  .my-element {
    padding: var(--spacing-6);
  }
}

/* Styles for medium devices and up (md) */
@media (min-width: var(--breakpoint-md)) {
  .my-element {
    width: 75%;
  }
}

/* Styles for large devices and up (lg) */
@media (min-width: var(--breakpoint-lg)) {
  .my-element {
    width: 50%;
    padding: var(--spacing-8);
  }
}
```

## Tailwind CSS Configuration

If using Tailwind CSS, these breakpoints should be configured in `tailwind.config.js` under `theme.screens`:

```javascript
// Example: tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // ... other theme configurations
  },
  plugins: [],
};
```
This allows the use of Tailwind's responsive utility classes (e.g., `sm:text-left`, `md:grid-cols-2`, `lg:hidden`).

## Considerations

-   **Mobile-First:** Design for mobile first, then enhance for larger screens.
-   **Content-Driven:** While these breakpoints provide a consistent framework, always let the content dictate layout adjustments.
-   **Testing:** Thoroughly test layouts across all defined breakpoints and on various real devices.
