# Estructura de Componentes AQXION

Este directorio contiene los componentes reutilizables del sistema de diseño de AQXION, organizados siguiendo una arquitectura atómica modular.

## Estructura

```
components/
├── atoms/           # Componentes básicos y primitivos
├── composables/     # Componentes compuestos por funcionalidad
└── README.md        # Esta documentación
```

## Átomos (atoms/)

Componentes básicos y primitivos que sirven como bloques fundamentales de construcción:

- `Button.tsx` - Botones y controles interactivos
- `Heading.tsx` - Encabezados y títulos
- `Image.tsx` - Imágenes y avatares
- `Link.tsx` - Enlaces y navegación
- `Text.tsx` - Texto y tipografía

## Composables (composables/)

Componentes más complejos organizados por funcionalidad:

### Layout (/layout)
- `Section.tsx` - Contenedor principal de secciones
- `Container.tsx` - Contenedor con márgenes responsivos
- `Box.tsx` - Contenedor versátil para agrupar contenido
- `Divider.tsx` - Separador visual

### Data Display (/data-display)
- `AboutFeatureCard.tsx` - Tarjetas de características
- `FAQItem.tsx` - Elementos de preguntas frecuentes
- `FeatureCard.tsx` - Tarjetas de funcionalidades
- `StatItem.tsx` - Elementos estadísticos
- `StatsGroup.tsx` - Grupos de estadísticas

### Navigation (/navigation)
- `ButtonLink.tsx` - Enlaces estilizados como botones
- `Footer.tsx` - Pie de página
- `Navbar.tsx` - Barra de navegación

### Marketing (/marketing)
- `Disclaimer.tsx` - Avisos legales y descargos

## Convenciones

1. **Nombres de Archivos**
   - PascalCase para componentes: `ButtonLink.tsx`
   - Los nombres deben ser descriptivos y consistentes

2. **Estructura de Archivos**
   - Documentación JSDoc completa
   - Props tipadas con TypeScript
   - Variantes usando class-variance-authority
   - Tests cuando sea aplicable

3. **Accesibilidad**
   - Atributos ARIA apropiados
   - Soporte para teclado
   - Alto contraste y legibilidad

4. **Estilos**
   - Uso de variables CSS personalizadas
   - Clases utilitarias de Tailwind
   - Consistencia con el sistema de diseño

## Mejores Prácticas

1. **Composición**
   - Preferir composición sobre herencia
   - Mantener los componentes simples y enfocados
   - Reutilizar componentes atómicos

2. **Props**
   - Documentar todas las props
   - Proporcionar valores por defecto sensatos
   - Validar tipos con TypeScript

3. **Rendimiento**
   - Usar React.memo cuando sea necesario
   - Optimizar re-renders
   - Lazy loading para componentes pesados

4. **Mantenibilidad**
   - Mantener la documentación actualizada
   - Seguir las convenciones establecidas
   - Refactorizar cuando sea necesario
