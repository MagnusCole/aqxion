# Component Reorganization Plan — AQXION

## New Structure

```bash
src/
├── components/
│   ├── primitives/
│   └── composables/
│       ├── layout/
│       ├── navigation/
│       ├── data-display/
│       ├── forms/
│       ├── feedback/
│       └── marketing/
```

## Migration

- Move primitives to `primitives/`.
- Group composables by function in `composables/`.
- Update imports and verify.

## Principles

- Simplicity: two main levels.
- Functional, maintainable, scalable.

---
