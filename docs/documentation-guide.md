# AQXION Documentation System Guide

This document outlines the structure, conventions, and maintenance plan for the AQXION project documentation. Its goal is to ensure documentation is clear, consistent, discoverable, and easy to maintain.

## Core Principles

1.  **Clarity & Conciseness:** Documentation should be easy to understand and to the point.
2.  **Discoverability:** A logical structure and comprehensive index (`docs/README.md`) will help users find information quickly.
3.  **Consistency:** Uniform naming conventions, file structure, and content formatting.
4.  **Accuracy:** Documentation must be kept up-to-date with the project.
5.  **Actionability:** Provide practical examples and clear instructions.

## Documentation Structure

All project documentation resides within the `docs/` directory, organized as follows:

```
docs/
├── README.md                     # Main entry point and index
├── documentation-guide.md        # This file: How to write and organize docs
│
├── 00-introduction/
│   ├── project-overview.md       # High-level project goals and scope
│   └── contribution-guide.md     # How to contribute to the project/docs
│
├── 01-foundations/
│   ├── colors.md                 # Color palettes (light/dark) & usage
│   ├── typography.md             # Font families, sizes, weights, and usage
│   ├── spacing.md                # Spacing scale and application
│   ├── breakpoints.md            # Responsive breakpoints
│   ├── layout-principles.md      # Core layout concepts, grid, Section/Container usage
│   ├── iconography.md            # (If applicable) Icon library and usage
│   └── aesthetics.md             # General look and feel, shadows, borders, radii
│
├── 02-styling-and-css/
│   ├── css-architecture.md       # Overview of CSS files (globals, base, utilities)
│   ├── tailwind-integration.md   # Tailwind CSS setup and custom utilities
│   └── responsive-design.md      # Responsive utility classes and strategies
│
├── 03-components/
│   ├── README.md                 # Component library overview and philosophy
│   ├── primitives/               # Docs for each primitive component
│   │   ├── button.md
│   │   └── heading.md
│   │   └── ...etc.
│   ├── composables/              # Docs for each composable component
│   │   ├── section.md
│   │   ├── container.md
│   │   └── ...etc.
│   └── conventions.md            # Naming, props, accessibility, state management
│
├── 04-sections/
│   ├── README.md                 # How page sections are structured and used
│   ├── hero-section.md           # Documentation for HeroSection
│   ├── about-section.md          # Documentation for AboutSection
│   └── ...etc.                   # Docs for other standard page sections
│
├── 05-architecture/
│   ├── project-structure.md      # Detailed explanation of src/ folder structure
│   ├── component-organization.md # Rationale for primitives vs. composables
│   └── state-management.md       # (If applicable) Approach to state
│
├── 06-guides/
│   ├── creating-new-component.md # Step-by-step guide
│   ├── page-construction.md      # How to build new pages using sections/components
│   └── component-migration.md    # (If major refactors occur)
└── assets/                       # Images or other assets used in documentation
```

## File Naming Conventions

-   All documentation files use **lowercase** characters.
-   Words are separated by **hyphens** (kebab-case).
-   File extension is `.md`.
-   Example: `docs/foundations/color-palette.md`

## Content Guidelines

Each documentation page should ideally include:

1.  **H1 Title:** Clear and descriptive.
2.  **Brief Introduction:** Purpose of the document/feature.
3.  **Key Information:**
    *   For components: Props table, usage examples (React/TSX), visual examples (screenshots/GIFs if helpful).
    *   For style guides: Visual swatches, token names, usage examples.
    *   For architectural docs: Diagrams, explanations.
4.  **Best Practices & "Do's and Don'ts"**.
5.  **Accessibility Notes**.

## Maintaining Documentation

-   **Ownership:** The developer or team member implementing a feature or making a significant change is responsible for creating or updating the relevant documentation.
-   **Review Process:** Documentation changes should be part of the standard pull request (PR) and code review process. Reviewers should check for clarity, accuracy, and completeness of the documentation alongside code changes.
-   **Regular Audits:** Periodically (e.g., quarterly or before major releases), the core team should review key sections of the documentation to ensure they are up-to-date and accurate.
-   **Outdated Docs:**
    *   If a document becomes obsolete, mark it clearly at the top with: `<!-- Obsolete: [Reason for obsolescence, e.g., "Feature removed" or "Superseded by new-document.md"]. This file will be removed after [Date]. -->`
    *   Update links pointing to the obsolete document.
    *   Remove the file after a reasonable grace period.
-   **Feedback Loop:** Encourage all team members to report outdated or unclear documentation. Consider a dedicated channel or issue tracker label for documentation feedback.
-   **Version Control:** All documentation is version-controlled with Git, allowing for history tracking and collaborative editing.

This structured approach will help maintain a high-quality, useful documentation hub for the AQXION project.
