# Layout Principles — AQXION Design System

This document outlines the core principles and common patterns for structuring page layouts and content within the AQXION website.

## Core Concepts

1.  **Responsive Design:** Layouts must adapt gracefully to various screen sizes, from mobile to large desktops. Utilize responsive utility classes and a mobile-first approach where appropriate.
2.  **Clear Hierarchy:** Guide the user's eye through the content with a strong visual hierarchy. Important elements (headings, CTAs) should be prominent.
3.  **Consistency:** Maintain consistent layout patterns across different pages and sections for a predictable user experience.
4.  **Whitespace (Negative Space):** Use whitespace effectively to improve readability, reduce clutter, and create a sense of elegance.
5.  **Grid System:** While not strictly enforcing a column-based grid for all elements, layouts should generally align to an underlying conceptual grid for harmony. Tailwind's responsive grid utilities are preferred.

## Key Layout Components & Patterns

### `Section` Component

-   **Purpose:** The primary building block for page content. Sections typically span the full width of the viewport and group related content thematically (e.g., Hero Section, About Section).
-   **Styling:** Sections manage their own background color/image and vertical padding.
    *   Vertical padding uses tokens like `var(--spacing-section-y)` and `var(--spacing-section-sm-y)` for responsiveness.
-   **Content Flow:** Usually stacked vertically on a page.

### `Container` Component

-   **Purpose:** Used within `Section` components (or independently) to constrain the width of content to a maximum value and center it on the page. This improves readability for text-heavy content.
-   **Styling:**
    *   Applies horizontal padding (e.g., `px-4` or `px-[clamp(1rem,4vw,2rem)]`).
    *   Sets `max-width` (e.g., `max-w-screen-lg`, `max-w-[var(--container-lg)]`).
    *   Uses `mx-auto` to center itself.
-   **Variants:** May have size variants (sm, md, lg, xl) to control `max-width`.

### `Section` vs. `Container` Usage

The following guidelines are based on the `Section` and `Container` components as implemented in this project:

-   **Default Behavior:** The `Section` component **may or may not** include a `Container` internally by default. Check the specific `Section` component's props (e.g., a `container={true}` prop).
-   **Full-Width Sections:** If a `Section` needs its background to span the full viewport width, but its content needs to be constrained, the `Section` itself will be full-width, and it will render a `Container` component internally for its children.
    ```tsx
    // Example: Section with internal container
    <Section variant="primary" padding="xl">
      {/* Content here is effectively within a Container */}
      <Heading>Section Title</Heading>
      <Text>Some content...</Text>
    </Section>
    ```
-   **Section without Internal Container (for full-width content):** If a `Section` has a prop like `container={false}`, its direct children will span the full width of the `Section`.
    ```tsx
    // Example: Section with full-width content (no internal container)
    <Section container={false} padding="none">
      <div className="w-full bg-blue-500 py-16 text-white text-center">
        This content spans the full width of the section.
      </div>
    </Section>
    ```
-   **Standalone `Container`:** Use the `Container` component directly when you need to constrain content width outside of a standard `Section` flow, or if a `Section` is configured not to use an internal container but you need one for a specific part of its content.
    ```tsx
    // Example: Standalone Container
    <main className="py-8">
      <Container size="md">
        <article>Article content constrained by Container...</article>
      </Container>
    </main>
    ```
-   **Avoid Nesting `Container`s:** Generally, do not nest `Container` components directly within each other, as this can lead to unexpected padding and width issues. A `Section` might use a `Container`, but that `Container`'s children shouldn't immediately be another `Container`.

### `Box` Component (or Utility Classes)

-   **Purpose:** A versatile `div` wrapper used for grouping related smaller pieces of information, often with visual styling like borders, background, padding, and shadows.
-   **Examples:** Cards, callouts, highlighted info blocks.
-   **Styling:** Typically achieved using Tailwind CSS utility classes directly on a `div` or through a dedicated `Box` component.
    *   `border rounded-lg bg-white p-4 shadow-sm`
-   Refer to `docs/03-components/composables/box.md` for more details if a specific `Box` component exists.

## Tailwind CSS for Layout

-   **Flexbox & Grid:** Heavily utilize Tailwind's `flex` and `grid` utilities for arranging elements.
-   **Responsive Prefixes:** Use `sm:`, `md:`, `lg:`, `xl:` prefixes to control layout at different breakpoints.
-   **Spacing Utilities:** Apply margin, padding, and gap utilities based on the defined spacing scale.
-   **Sizing & Max-Width:** Use `w-`, `max-w-`, `h-`, `min-h-` utilities.

## General Guidelines

-   **Mobile-First:** Design layouts with mobile screens in mind first, then scale up and adapt for larger screens.
-   **Content Prioritization:** Ensure key content and CTAs are easily accessible and visible, especially on smaller screens.
-   **Avoid Horizontal Scrolling:** Except for specific UI patterns like carousels, main page content should not cause horizontal scrolling.
