# Aesthetics & Motion — AQXION Design System

This document covers the general aesthetic principles, including motion (animations and transitions), that contribute to the AQXION website's professional, elegant, and modern user experience.

## Core Aesthetic Principles

-   **Clean & Uncluttered:** Interfaces are designed to be spacious and free of unnecessary visual noise.
-   **Professional Elegance:** A sophisticated and corporate look is achieved through refined typography, a controlled color palette, and subtle visual details.
-   **Modern & Crisp:** Sharp lines, clear visual hierarchy, and contemporary UI patterns.
-   **Subtlety:** Animations, shadows, and gradients are used judiciously to enhance usability and visual appeal without being distracting.
-   **Consistency:** A cohesive look and feel is maintained across all parts of the website.

## Motion System (Animations & Transitions)

Motion is used to provide feedback, guide attention, and create a smoother, more engaging user experience. The system is defined in `src/styles/tokens/animations.css`.

### Durations

A set of standardized durations for subtle and quick feedback:

-   `--duration-50`: 50ms
-   `--duration-100`: 100ms
-   `--duration-150`: 150ms (Common for color/border changes)
-   `--duration-200`: 200ms (Common for transforms, opacity, shadows)
-   `--duration-300`: 300ms (Common for fade/slide animations)
-   `--duration-500`: 500ms

### Easing Functions

Refined easing functions for natural and professional motion:

-   `--ease-default`: `cubic-bezier(0.16, 1, 0.3, 1)` (Custom, smooth out-quad like)
-   `--ease-in`: `cubic-bezier(0.4, 0, 0.7, 0.2)` (Softer in)
-   `--ease-out`: `cubic-bezier(0.2, 0.8, 0.4, 1)` (Elegant out)
-   `--ease-in-out`: `cubic-bezier(0.4, 0, 0.2, 1)` (Professional in-out)
-   `--ease-bounce`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Subtle bounce, use sparingly)

### Base Transitions

Predefined transitions for common properties:

-   `--transition-transform`: `transform var(--duration-200) var(--ease-out)`
-   `--transition-opacity`: `opacity var(--duration-200) var(--ease-out)`
-   `--transition-colors`: For `background-color`, `border-color`, `color`, `fill`, `stroke`.
-   `--transition-shadow`: `box-shadow var(--duration-200) var(--ease-out)`

### Composite Transitions

Transitions for specific UI elements:

-   `--transition-button`: Combines color, shadow, and transform transitions.
-   `--transition-card`: Combines transform and shadow transitions.
-   `--transition-link`: Combines color and text-decoration transitions.

### Keyframe Animations

Standardized animations for common entrance/exit patterns:

-   `--animation-fade-in`: Fades in with a slight upward translate.
-   `--animation-fade-out`: Fades out with a slight upward translate.
-   `--animation-scale-in`: Fades and scales in.
-   `--animation-scale-out`: Fades and scales out.
-   `--animation-slide-in`: Slides in from bottom with fade.
-   `--animation-slide-out`: Slides out to bottom with fade.

```css
/* Example Usage */
.my-interactive-element {
  transition: var(--transition-button);
}

.my-interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.modal-enter-active {
  animation: var(--animation-fade-in);
}
```

## Global Styles Enhancements

Found in `src/styles/globals.css`:

-   **Scroll Behavior:** Smooth scrolling is enabled globally.
-   **Text Rendering:** Optimized for legibility.
-   **Font Smoothing:** Antialiased for crisp text.
-   **Body Background:** A subtle radial and linear gradient for a sophisticated backdrop.
-   **Selection Styles:** Custom selection styles using primary accent color.
-   **Focus Styles:** Enhanced `:focus-visible` outline for accessibility.
-   **Scrollbar:** Custom styled scrollbar for a more branded experience.
-   **Reduced Motion:** Adherence to `prefers-reduced-motion` for accessibility.

## Premium Effects (from `globals.css`)

Used sparingly for high-impact visual elements:

-   `.premium-gradient-text`: Animating gradient text.
-   `.premium-glow`: Hover glow effect around elements.
-   `.premium-glass`: Frosted glass effect (supports backdrop-filter).
-   `.premium-skeleton`: Shimmering skeleton loading effect.

These effects should be applied thoughtfully to avoid over-designing.

By adhering to these aesthetic and motion principles, the AQXION website aims to deliver a polished and trustworthy user experience.
