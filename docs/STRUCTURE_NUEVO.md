# 📦 AQXION Design System — Nueva Estructura Oficial de Carpetas y Nomenclatura

Este archivo define la arquitectura actualizada del sistema de componentes de AQXION, basado en principios de simplicidad y organización funcional para escalar de forma eficiente y modular.

---

## 🌐 Estructura Principal

```bash
src/
├── styles/
│   └── tokens/
│       ├── colors.css          # Variables --color-*
│       ├── spacing.css         # Variables --spacing-*
│       └── typography.css      # Variables --font-*, --line-height-*
│
├── components/
│   ├── primitives/            # Componentes básicos (Button, Input, Text, etc.)
│   ├── composables/           # Componentes compuestos organizados por funcionalidad
│       ├── layout/            # Componentes de estructura (Container, Section)
│       ├── navigation/        # Componentes de navegación (Navbar, Footer)
│       ├── data-display/      # Componentes para mostrar datos (Card, FeatureCard)
│       ├── forms/             # Componentes de formularios (FormGroup, InputGroup)
│       ├── feedback/          # Componentes de retroalimentación (Spinner, Callout)
│       └── marketing/         # Componentes específicos de marketing (CTABox, HeroContent)
│
├── sections/                   # Secciones completas de página (HeroSection, TestimonialsSection)
│
├── layouts/                    # Estructuras de página (LandingLayout, DashboardLayout)
│
├── pages/                      # Páginas completas (HomePage, ContactPage)
```

---

## 🧬 Niveles Semánticos Simplificados

| Nivel      | UI Equivalente                | Ejemplo                |
|------------|-------------------------------|------------------------|
| Partículas | Design Tokens                 | `--color-accent`       |
| Primitives | Componentes básicos           | `Button`, `Input`      |
| Composables| Componentes compuestos        | `Card`, `Navbar`       |
| Secciones  | Secciones de página           | `HeroSection`          |
| Layouts    | Estructuras de página         | `LandingLayout`        |
| Páginas    | Páginas completas             | `HomePage`             |

---

## ✅ Convenciones de Nombres

- `Button.tsx`, `Input.tsx` → Primitives
- `Card.tsx`, `Navbar.tsx` → Composables (organizados por categoría funcional)
- `HeroSection.tsx` → Sección de página
- `LandingLayout.tsx` → Layout
- `HomePage.tsx` → Página

---

## 🧠 Principios

- Organización por **funcionalidad** en lugar de por nivel de abstracción
- Estructura **simple y plana** para facilitar la navegación
- Componentes agrupados por su **propósito** en el sistema
- Los `tokens` siguen siendo el **origen único de verdad visual**
- Los componentes pueden importar de `primitives` y de otras categorías de `composables`

---

## 🚀 Resultado

- Simplicidad conceptual
- Organización intuitiva
- Facilidad de mantenimiento
- Mayor velocidad de desarrollo
- Estructura escalable para el Design System