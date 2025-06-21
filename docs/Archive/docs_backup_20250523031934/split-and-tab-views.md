# Split & Tab Views — AQXION

Design patterns for organizing content with Split Views and Tab Views.

## Split Views

- Use for multi-panel layouts (sidebar, main, inspector).
- Recommended for desktop (`lg:`), collapse to single panel on mobile.
- Highlight active selection with `bg-gray-200` or `border-l-2`.
- Use `flex` or `grid` for layout, hide secondary panels on mobile.

## Tab Views

- Use for mutually exclusive content panels.
- Limit to 6 tabs; use dropdown if more.
- Place tabs at top (`border-b`) or bottom (`border-t`).
- Use `flex gap-2` for tab controls, `hidden` for inactive panels.
- Label tabs clearly, use `aria-label` and `aria-selected` for accessibility.

## Implementation

- Use Tailwind for layout and visibility.
- Use React state or JS for tab switching.
- Ensure accessibility with proper ARIA attributes.

---
