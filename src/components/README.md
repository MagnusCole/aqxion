# AQXION Components Directory

This directory contains all reusable components for AQXION, organized for scalability and clarity.

## Structure

```
components/
├── primitives/      # Basic, atomic components (Button, Heading, Text, etc.)
├── composables/     # Complex components grouped by function
│   ├── layout/
│   ├── navigation/
│   ├── data-display/
│   ├── forms/
│   ├── feedback/
│   └── marketing/
└── README.md        # This documentation
```

## Primitives

- `Button.tsx` — Buttons and interactive controls
- `Heading.tsx` — Headings and titles
- `Image.tsx` — Images and avatars
- `Link.tsx` — Navigation links
- `Text.tsx` — Typography

## Composables

Grouped by function, e.g.:

- **layout/**: `Section.tsx`, `Container.tsx`, `Box.tsx`, `Divider.tsx`
- **data-display/**: `AboutFeatureCard.tsx`, `FeatureCard.tsx`, `StatItem.tsx`, etc.
- **navigation/**: `Navbar.tsx`, `Footer.tsx`, `ButtonLink.tsx`
- **marketing/**: `Disclaimer.tsx`, etc.

## Conventions

- **File Naming:** PascalCase, descriptive, English.
- **Props:** Typed with TypeScript, documented.
- **Accessibility:** ARIA attributes, keyboard support, high contrast.
- **Styling:** Tailwind CSS and custom CSS variables.

## Best Practices

- Prefer composition over inheritance.
- Keep components focused and reusable.
- Document all props and provide sensible defaults.
- Use React.memo and lazy loading where needed.
- Keep documentation and tests up to date.

---
