# 📦 Plan de Reorganización de Componentes AQXION

Este documento detalla el plan para reorganizar los componentes actuales en una estructura más simple y mantenible, siguiendo los principios del Design System de AQXION.

## 🔄 Nueva Estructura Propuesta

```bash
src/
├── components/
│   ├── primitives/            # Componentes básicos (anteriormente atoms)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Text.tsx
│   │   └── ...
│   │
│   ├── composables/           # Componentes compuestos organizados por funcionalidad
│   │   ├── layout/            # Componentes de estructura y layout
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Divider.tsx
│   │   │   └── ...
│   │   │
│   │   ├── navigation/        # Componentes de navegación
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   │
│   │   ├── data-display/      # Componentes para mostrar datos
│   │   │   ├── Card.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── TrackRecordCard.tsx
│   │   │   ├── StatsGrid.tsx
│   │   │   └── ...
│   │   │
│   │   ├── forms/             # Componentes de formularios
│   │   │   ├── FormGroup.tsx
│   │   │   ├── InputGroup.tsx
│   │   │   ├── FieldSet.tsx
│   │   │   └── ...
│   │   │
│   │   ├── feedback/          # Componentes de retroalimentación
│   │   │   ├── Spinner.tsx
│   │   │   ├── Callout.tsx
│   │   │   └── ...
│   │   │
│   │   └── marketing/         # Componentes específicos de marketing
│   │       ├── CTABox.tsx
│   │       ├── CTAButton.tsx
│   │       ├── HeroContent.tsx
│   │       └── ...
```

## 📋 Plan de Migración

### 1. Primitives (anteriormente atoms)

Los siguientes componentes se moverán a `primitives/`:

- Button.tsx
- Heading.tsx
- Icon.tsx
- Image.tsx
- Input.tsx
- Label.tsx
- Link.tsx
- Text.tsx

### 2. Composables por categoría

#### Layout
- Box.tsx (de atoms)
- Container.tsx (de atoms)
- Divider.tsx (de atoms)
- Section.tsx (de atoms)

#### Navigation
- Navbar.tsx (de macros)
- Footer.tsx (de macros)

#### Data Display
- Avatar.tsx (de molecules)
- Badge.tsx (de molecules)
- Card.tsx (de molecules)
- Chip.tsx (de molecules)
- FeatureCard.tsx (de compounds)
- FeatureCarousel.tsx (de macros)
- FeatureGrid.tsx (de macros)
- FeatureIcon.tsx (de atoms)
- IconList.tsx (de molecules)
- MediaObject.tsx (de molecules)
- MetricItem.tsx (de molecules)
- Stat.tsx (de compounds)
- Stats.tsx (de molecules)
- StatsGrid.tsx (de macros)
- TrackRecordCard.tsx (de compounds)
- TrackRecordGrid.tsx (de macros)

#### Forms
- FieldSet.tsx (de molecules)
- FormAction.tsx (de molecules)
- FormGroup.tsx (de molecules)
- InputGroup.tsx (de molecules)

#### Feedback
- Callout.tsx (de molecules)
- Spinner.tsx (de atoms)

#### Marketing
- AboutHighlights.tsx (de macros)
- AboutItem.tsx (de compounds)
- CTABox.tsx (de compounds)
- CTAButton.tsx (de compounds)
- Disclaimer.tsx (de compounds)
- HeroContent.tsx (de macros)

## 🧠 Principios de la Nueva Estructura

1. **Simplicidad**: Dos niveles principales (primitives y composables) para facilitar la navegación.
2. **Organización funcional**: Componentes agrupados por su función en el sistema.
3. **Mantenibilidad**: Estructura clara que facilita encontrar y actualizar componentes.
4. **Escalabilidad**: Fácil de extender con nuevos componentes en las categorías existentes.

## 🚀 Beneficios Esperados

- Reducción de la complejidad conceptual (de 4 niveles a 2 principales)
- Mayor claridad sobre dónde encontrar y colocar componentes
- Mejor organización por funcionalidad en lugar de por nivel de abstracción
- Facilidad para los nuevos desarrolladores para entender la estructura