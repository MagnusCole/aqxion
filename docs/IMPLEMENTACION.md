# 📋 Implementación de la Reorganización de Componentes

Este documento proporciona los pasos concretos para implementar la nueva estructura de componentes definida en el plan de reorganización.

## 🛠️ Pasos de Implementación

### 1. Crear la nueva estructura de carpetas

```bash
# Crear carpetas principales
mkdir -p src/components/primitives
mkdir -p src/components/composables/layout
mkdir -p src/components/composables/navigation
mkdir -p src/components/composables/data-display
mkdir -p src/components/composables/forms
mkdir -p src/components/composables/feedback
mkdir -p src/components/composables/marketing
```

### 2. Mover los componentes a sus nuevas ubicaciones

#### Primitives (desde atoms)

```bash
# Mover componentes primitivos
mv src/components/atoms/Button.tsx src/components/primitives/
mv src/components/atoms/Heading.tsx src/components/primitives/
mv src/components/atoms/Icon.tsx src/components/primitives/
mv src/components/atoms/Image.tsx src/components/primitives/
mv src/components/atoms/Input.tsx src/components/primitives/
mv src/components/atoms/Label.tsx src/components/primitives/
mv src/components/atoms/Link.tsx src/components/primitives/
mv src/components/atoms/Text.tsx src/components/primitives/
```

#### Composables - Layout

```bash
# Mover componentes de layout
mv src/components/atoms/Box.tsx src/components/composables/layout/
mv src/components/atoms/Container.tsx src/components/composables/layout/
mv src/components/atoms/Divider.tsx src/components/composables/layout/
mv src/components/atoms/Section.tsx src/components/composables/layout/
```

#### Composables - Navigation

```bash
# Mover componentes de navegación
mv src/components/macros/Navbar.tsx src/components/composables/navigation/
mv src/components/macros/Footer.tsx src/components/composables/navigation/
```

#### Composables - Data Display

```bash
# Mover componentes de visualización de datos
mv src/components/molecules/Avatar.tsx src/components/composables/data-display/
mv src/components/molecules/Bagde.tsx src/components/composables/data-display/Badge.tsx  # Corregir nombre
mv src/components/molecules/Card.tsx src/components/composables/data-display/
mv src/components/molecules/Chip.tsx src/components/composables/data-display/
mv src/components/molecules/IconList.tsx src/components/composables/data-display/
mv src/components/molecules/MediaObject.tsx src/components/composables/data-display/
mv src/components/molecules/MetricItem.tsx src/components/composables/data-display/
mv src/components/molecules/Stats.tsx src/components/composables/data-display/
mv src/components/compounds/FeatureCard.tsx src/components/composables/data-display/
mv src/components/compounds/Stat.tsx src/components/composables/data-display/
mv src/components/compounds/TrackRecordCard.tsx src/components/composables/data-display/
mv src/components/macros/FeatureCarousel.tsx src/components/composables/data-display/
mv src/components/macros/FeatureGrid.tsx src/components/composables/data-display/
mv src/components/atoms/FeatureIcon.tsx src/components/composables/data-display/
mv src/components/macros/StatsGrid.tsx src/components/composables/data-display/
mv src/components/macros/TrackRecordGrid.tsx src/components/composables/data-display/
```

#### Composables - Forms

```bash
# Mover componentes de formularios
mv src/components/molecules/FieldSet.tsx src/components/composables/forms/
mv src/components/molecules/FormAction.tsx src/components/composables/forms/
mv src/components/molecules/FormGroup.tsx src/components/composables/forms/
mv src/components/molecules/InputGroup.tsx src/components/composables/forms/
```

#### Composables - Feedback

```bash
# Mover componentes de feedback
mv src/components/molecules/Callout.tsx src/components/composables/feedback/
mv src/components/atoms/Spinner.tsx src/components/composables/feedback/
```

#### Composables - Marketing

```bash
# Mover componentes de marketing
mv src/components/macros/AboutHighlights.tsx src/components/composables/marketing/
mv src/components/compounds/AboutItem.tsx src/components/composables/marketing/
mv src/components/compounds/CTABox.tsx src/components/composables/marketing/
mv src/components/compounds/CTAButton.tsx src/components/composables/marketing/
mv src/components/compounds/Disclaimer.tsx src/components/composables/marketing/
mv src/components/macros/HeroContent.tsx src/components/composables/marketing/
```

### 3. Actualizar importaciones en los archivos

Después de mover los archivos, será necesario actualizar todas las importaciones en los componentes y páginas que los utilizan. Esto se puede hacer con un script o manualmente, buscando y reemplazando las rutas de importación.

### 4. Actualizar la documentación

Actualizar el archivo STRUCTURE.md para reflejar la nueva estructura de carpetas y los principios de organización.

## 🔍 Verificación

Después de completar la migración, verificar que:

1. Todos los componentes estén en sus nuevas ubicaciones
2. Las importaciones estén actualizadas correctamente
3. La aplicación se compile y funcione sin errores
4. La documentación esté actualizada

## 📝 Notas Adicionales

- Se ha corregido el nombre del componente "Bagde.tsx" a "Badge.tsx" durante la migración
- Se recomienda realizar esta migración en una rama separada para facilitar la revisión y pruebas antes de fusionarla con la rama principal
- Considerar la posibilidad de agregar pruebas automatizadas para verificar que los componentes sigan funcionando correctamente después de la reorganización