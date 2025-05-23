<!--
TODO: Este documento debe actualizarse tras cada cambio estructural relevante.
-->

# 📦 AQXION Design System — Nueva Estructura Oficial de Carpetas y Nomenclatura

Este archivo define la arquitectura actualizada del sistema de componentes de AQXION, basado en principios de simplicidad y organización funcional para escalar de forma eficiente y modular.

## 🌐 Estructura Principal

```bash
src/
├── styles/
│   ├── base.css               # Estilos base y reset
│   ├── components.css         # Estilos generales de componentes
│   ├── globals.css            # Estilos globales y variables CSS
│   ├── responsive-utils.css   # Utilidades responsivas
│   ├── section-layout.css     # Estilos específicos para secciones
│   ├── tokens.css             # Importación de todos los tokens
│   ├── utilities.css          # Utilidades generales
│   └── tokens/
│       ├── colors.css         # Variables --color-*
│       ├── spacing.css        # Variables --spacing-*
│       └── typography.css     # Variables --font-*, --line-height-*
│
├── components/
│   ├── atoms/                 # Componentes atómicos (Button, Text, Heading, Card)
│   └── composables/           # Componentes compuestos organizados por funcionalidad
│       ├── layout/            # Componentes de estructura (Container, Section, Hero)
│       ├── navigation/        # Componentes de navegación (Navbar, Footer, ButtonLink)
│       ├── data-display/      # Componentes para mostrar datos (StatItem, StatsGroup, FeatureCard)
│       ├── display/           # Componentes de visualización avanzada (FeatureCardCarousel)
│       ├── forms/             # Componentes de formularios (FormGroup, InputGroup)
│       └── feedback/          # Componentes de retroalimentación (Spinner, Callout)
│
├── sections/                  # Secciones completas de página parametrizadas (HeroSection, AboutSection)
│
├── lib/                       # Lógica de negocio y utilidades complejas
│
├── utils/                     # Utilidades y helpers generales
│
├── app/                       # Rutas y páginas de Next.js
│   ├── layout.tsx             # Layout principal de la aplicación
│   ├── page.tsx               # Página principal
│   └── (otras rutas)/         # Otras rutas y páginas
```

## 🧬 Niveles Semánticos Simplificados

| Nivel      | UI Equivalente                | Ejemplo                | Estado       |
|------------|-------------------------------|------------------------|--------------|
| Partículas | Design Tokens                 | `--color-accent`       | ✅ Completado |
| Atoms      | Componentes atómicos          | `Button`, `Card`       | ✅ Completado |
| Composables| Componentes compuestos        | `Hero`, `StatItem`     | ⚒️ En progreso |
| Secciones  | Secciones de página           | `HeroSection`          | ⚒️ En progreso |
| Layouts    | Estructuras de página         | `layout.tsx`           | ✅ Completado |
| Páginas    | Páginas completas             | `page.tsx`             | ✅ Completado |

## ✅ Convenciones de Nombres Actualizadas

- `Button.tsx`, `Card.tsx` → Atoms
- `Hero.tsx`, `StatItem.tsx` → Composables (organizados por categoría funcional)
- `HeroSection.tsx` → Sección de página parametrizada
- `layout.tsx` → Layout de Next.js
- `page.tsx` → Página de Next.js

## 🧠 Principios

- Organización por **funcionalidad** en lugar de por nivel de abstracción
- Estructura **simple y plana** para facilitar la navegación
- Componentes agrupados por su **propósito** en el sistema
- Los `tokens` siguen siendo el **origen único de verdad visual**
- Los componentes pueden importar de `atoms` y de otras categorías de `composables`
- Todas las secciones son **parametrizables** y reciben props para personalización

## 🚀 Resultados Actuales

- ✅ Simplicidad conceptual
- ✅ Organización intuitiva
- ✅ Modularidad y reutilización
- ✅ Parametrización de componentes
- ✅ Separación clara entre presentación y datos
- ⚒️ Mayor velocidad de desarrollo (en progreso)
- ⚠️ Estructura escalable para el Design System (pendiente de completar)