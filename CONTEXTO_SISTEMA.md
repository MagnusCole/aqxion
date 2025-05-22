# 🧠 CONTEXTO DEL SISTEMA AQXION

Este documento centraliza el estado actual, estructura, procesos y objetivos del sistema AQXION, facilitando la comprensión global para IA y nuevos colaboradores.

---

## 1. Estado Actual
- **Proyecto en desarrollo activo.**
- **Stack:** Next.js 15, TypeScript, Tailwind CSS v3, Vercel, PostgreSQL (Prisma), Playwright.
- **Base de datos:** Aún no integrada (ver SETUP_ENV.md).
- **Estructura y componentes en proceso de reorganización** siguiendo principios de Design System y modularidad.

---

## 2. Estructura del Proyecto

La estructura oficial y la nueva propuesta están documentadas en `docs/STRUCTURE.md` y `docs/STRUCTURE_NUEVO.md`. Actualmente se migra hacia la nueva estructura:

```
src/
├── styles/
│   └── tokens/ (colors.css, spacing.css, typography.css)
├── components/
│   ├── primitives/ (Button, Input, Text)
│   ├── composables/
│       ├── layout/ (Container, Section)
│       ├── navigation/ (Navbar, Footer)
│       ├── data-display/ (Card, FeatureCard)
│       ├── forms/ (FormGroup, InputGroup)
│       ├── feedback/ (Spinner, Callout)
│       └── marketing/ (CTABox, HeroContent)
├── sections/ (HeroSection, TestimonialsSection)
├── layouts/ (LandingLayout, DashboardLayout)
├── pages/ (HomePage, ContactPage)
```

- **Ver detalles y convenciones:** `docs/STRUCTURE_NUEVO.md`, `docs/REORGANIZACION.md`, `docs/IMPLEMENTACION.md`.

---

## 3. Principios de Diseño y Componentes
- **Design System:** Modularidad, claridad visual, escalabilidad.
- **Sistema de cajas (boxes):** Ver `docs/BOXES.md` para agrupación visual y buenas prácticas.
- **Tokens de diseño:** Variables CSS para colores, espaciados y tipografía.
- **Accesibilidad:** Uso de aria-labels y buenas prácticas en títulos.

---

## 4. Flujo de Trabajo y Colaboración
- **Branching:** Fork → branch `feat/<topic>`.
- **Commits:** Convencionales (`feat:`, `fix:`).
- **PR:** Tests y lint automáticos, requiere al menos 1 review.
- **Plantilla de PR:** Incluye descripción, pruebas y checklist (ver CONTRIBUTING.md).

---

## 5. Objetivos y Próximos Pasos
- **Migrar completamente a la nueva estructura de componentes.**
- **Integrar base de datos y autenticación.**
- **Optimizar la experiencia visual y la acción del usuario (ver docs/NEXT_GOAL.md).**
- **Mantener documentación actualizada tras cada cambio estructural.**

---

## 6. Notas y Limitaciones
- Si hay errores de rutas o CSS, actualizar Tailwind y Next.js.
- El sistema aún no está en producción; disclaimer legal en el footer.
- Para migraciones automáticas, usar el script `scripts/reorganizar-componentes.ps1`.

---

## 7. Documentación Clave
- `README.md`: Visión general y comandos principales.
- `SETUP_ENV.md`: Setup local y notas de entorno.
- `CONTRIBUTING.md`: Guía de colaboración.
- `docs/REORGANIZACION.md`: Plan y motivación de la reorganización.
- `docs/STRUCTURE_NUEVO.md`: Estructura oficial actualizada.
- `docs/BOXES.md`: Sistema de cajas para secciones.
- `docs/NEXT_GOAL.md`: Objetivos inmediatos y visión de página.

---

**Este archivo debe actualizarse tras cada cambio relevante para mantener el contexto global actualizado.**