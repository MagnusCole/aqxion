# Component Organization — AQXION Architecture

This document outlines the rationale and structure for organizing React components within the AQXION project. The goal is to create a maintainable, scalable, and understandable component library.

## Core Philosophy

The component structure follows a philosophy that balances atomic design principles with practical, domain-driven organization. We primarily distinguish between two main categories of components:

1.  **Primitives:** Basic, highly reusable UI building blocks.
2.  **Composables:** More complex components, often assembled from primitives or other composables, typically serving a specific layout or functional purpose.

## Directory Structure

The primary location for shared UI components is `src/components/`.

```bash
src/
└── components/
    ├── primitives/      # Basic, foundational UI elements
    │   ├── Button.tsx
    │   ├── Heading.tsx
    │   ├── Text.tsx
    │   ├── Image.tsx
    │   └── Link.tsx
    │   └── ...etc.
    │
    └── composables/     # More complex, composed UI components
        ├── layout/
        │   ├── Section.tsx
        │   ├── Container.tsx
        │   └── Box.tsx
        ├── navigation/
        │   ├── Navbar.tsx
        │   └── Footer.tsx
        ├── data-display/
        │   ├── Card.tsx
        │   └── StatItem.tsx
        ├── forms/
        │   ├── InputField.tsx
        │   └── SelectField.tsx
        ├── feedback/
        │   ├── Alert.tsx
        │   └── Modal.tsx
        └── marketing/
            ├── CTABanner.tsx
            └── Disclaimer.tsx
            └── ...etc.
```

## 1. Primitives (`src/components/primitives/`)

-   **Definition:** These are the most basic UI elements, analogous to atoms in atomic design. They are highly generic and reusable across the entire application.
-   **Characteristics:**
    *   Minimal internal state (often stateless or controlled by props).
    *   Highly configurable via props.
    *   No direct knowledge of application-specific business logic.
    *   Focus on presentation and basic interaction.
-   **Examples:** `Button`, `Heading`, `Text`, `Icon`, `Input`, `Image`, `Link`.
-   **Goal:** To provide a consistent set of fundamental UI pieces that ensure visual and interactive uniformity.

## 2. Composables (`src/components/composables/`)

-   **Definition:** These components are built by combining primitives and/or other composables. They often represent more specific UI patterns or solve common layout/functional problems.
-   **Sub-directories:** Composables are further organized into subdirectories based on their primary function or domain. This helps in locating and understanding their purpose.
    *   `layout/`: Components responsible for page structure and content arrangement (e.g., `Section`, `Container`, `Grid`).
    *   `navigation/`: Components related to site navigation (e.g., `Navbar`, `Footer`, `Breadcrumbs`).
    *   `data-display/`: Components for presenting information (e.g., `Card`, `Table`, `List`, `StatItem`).
    *   `forms/`: Components related to user input and forms (e.g., `FormGroup`, `InputField` (if more complex than primitive), `FileUpload`).
    *   `feedback/`: Components for user feedback (e.g., `Alert`, `Modal`, `Toast`).
    *   `marketing/`: Components specific to marketing or promotional content (e.g., `CTABanner`, `TestimonialCard`).
-   **Characteristics:**
    *   May have internal state or manage interactions between child components.
    *   Can encapsulate more specific styling or behavior.
    *   Still aim for reusability within their domain.
-   **Examples:** `UserProfileCard` (combining `Image`, `Heading`, `Text`), `ProductGrid` (using `Card` primitives), `MainLayout` (using `Navbar`, `Footer`, `Section`).

## Rationale for this Structure

-   **Simplicity:** A two-tier primary structure (`primitives` and `composables`) is easy to grasp.
-   **Scalability:** The functional grouping within `composables` allows the library to grow without becoming disorganized.
-   **Discoverability:** Developers can more easily find components based on their purpose.
-   **Maintainability:** Clear separation of concerns makes components easier to update and debug.
-   **Reusability:** Promotes the reuse of primitives, leading to a more consistent UI.

## When to Create Which Type?

-   **Primitive:** If the component is a very basic UI element, highly generic, and likely to be used in many different contexts with varying styles (controlled by props), it's a primitive.
-   **Composable:** If the component combines multiple primitives, has a more specific layout or function, or encapsulates a common UI pattern, it's a composable. If it serves a particular domain (like navigation or data display), place it in the appropriate sub-folder.

This organization aims to provide a robust foundation for building the AQXION user interface.
