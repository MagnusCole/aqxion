# AQXION Copilot Instructions

## Architecture Overview

This is a **Next.js 15** app using the **App Router** with a **design-token driven CSS architecture** inspired by Apple's design language. The project follows a **strict component hierarchy** and **token-based styling** system.

### Key Architectural Patterns

**Token-First CSS Architecture**: All styling uses CSS custom properties defined in `src/styles/tokens/`. Never hardcode colors, spacing, or typography - always reference tokens like `var(--color-text-primary)` or `var(--spacing-4)`.

**Component Hierarchy**: 
- `src/components/atoms/` → Basic building blocks (Button, Heading, Text)
- `src/components/composables/` → Complex components organized by function (`layout/`, `navigation/`, `data-display/`, etc.)
- `src/sections/` → Page-level sections that compose components

**Section/Container Pattern**: Use `<Section>` for full-width page sections with background/padding, and `<Container>` for content width constraints. Never nest Containers directly.

```tsx
// ✅ Correct
<Section variant="primary" padding="lg">
  <Heading>Content here is automatically contained</Heading>
</Section>

// ❌ Wrong - Don't nest containers
<Section><Container><Container>content</Container></Container></Section>
```

## Development Workflows

**Design Token Updates**: When adding new styles, first check if a token exists in `src/styles/tokens/`. If not, add it there first, then use via CSS custom properties.

**Component Creation**: Follow the primitives vs composables distinction:
- Primitives: Stateless, highly configurable, no business logic
- Composables: Can have state, domain-specific, composed from primitives

**Styling Approach**: 
1. Use Tailwind utilities first
2. For repeated patterns, create utilities in `src/styles/utilities.css`
3. For complex components, use `src/styles/components.css`
4. Always reference design tokens via CSS variables

## Critical Project Conventions

**Component Props**: All components use `class-variance-authority` (cva) for variant management. Follow this pattern:

```tsx
const componentVariants = cva("base-classes", {
  variants: {
    variant: { primary: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." }
  },
  defaultVariants: { variant: "primary", size: "md" }
});
```

**File Naming**: 
- Components: PascalCase (`HeroSection.tsx`)
- CSS files: kebab-case (`section-layout.css`)
- Directories: lowercase with functional grouping

**Import Patterns**: Use path aliases `@/components/`, `@/sections/`, `@/lib/`. Components should import from the specific path level they need.

**Accessibility**: Every interactive component must include proper ARIA attributes, keyboard navigation, and semantic HTML. Use `aria-label`, proper heading hierarchy, and focus management.

## Integration Points

**Analytics**: Components use `@/lib/analytics` for tracking. Landing pages have specific conversion tracking in `src/app/landing/`.

**Styling Integration**: 
- `src/styles/globals.css` is the entry point that imports all other CSS
- Tokens are centralized in `src/styles/tokens.css` which imports individual token files
- Tailwind configuration extends the token system

**Next.js App Router**: Routes are in `src/app/` with layout hierarchies. Landing pages have isolated layouts with performance optimizations.

**Environment Variables**: GTM/GA tracking IDs are configurable via `NEXT_PUBLIC_GTM_ID`. Critical CSS is inlined in layouts for performance.

## Performance & Deployment

**Critical CSS**: Landing pages inline critical styles in layout components for fast loading.

**Image Optimization**: Use Next.js `Image` component with proper sizing and priority flags for above-fold content.

**Bundle Analysis**: Run `npm run analyze` to check bundle sizes. Components use React.memo strategically for heavy sections.

**Build Commands**:
- `pnpm dev` - Development with hot reload
- `pnpm build` - Production build 
- `pnpm lint` - ESLint + Prettier
- `pnpm test:e2e` - Playwright tests

Always reference the component documentation in `src/components/README.md` and design system docs in `docs/Archive/` for detailed patterns and conventions.
