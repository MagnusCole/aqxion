# Boxes — AQXION

Boxes group related content for clarity. Use Tailwind for simple construction.

## Principles

- Use `div` with `border`, `rounded-lg`, `bg-white` (or light gray), `p-4`, `shadow-sm`.
- Limit width with `max-w-md` or `max-w-lg`, center with `mx-auto`.
- Optional title: `h2` with `text-lg font-bold mb-2`.
- Organize content with `flex flex-col gap-2` or `grid gap-4`.
- Avoid unnecessary nesting.

## Example

```jsx
<div className="border border-gray-300 bg-white p-4 rounded-lg shadow-sm max-w-md mx-auto m-4">
  <h2 className="text-lg font-bold mb-2">What We Do</h2>
  <div className="flex flex-col gap-2">
    {/* content */}
  </div>
</div>
```

---
