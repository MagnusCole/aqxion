# PLAN DE OPTIMIZACIÓN Y MODULARIDAD DE LA ESTRUCTURA AQXION

## 1. Revisión y Limpieza de Estructura ✓
- Eliminar o archivar definitivamente carpetas y archivos obsoletos (según sección 7 del CONTEXTO_SISTEMA.md). ✓
- Garantizar que solo los directorios y archivos vigentes estén activos bajo `src/` y `docs/`. ✓
- Actualizar referencias y rutas en imports tras cualquier movimiento. ✓

## 2. Modularización de Componentes ⚒️ (En progreso)
- Extraer componentes monolíticos en `sections/` a subcomponentes atómicos y composables en `components/atoms/` y `components/composables/`. ✓
  - Componentes atómicos: Card ✓
  - Componentes composables:
    - Data Display: StatItem ✓, StatsGroup ✓, FAQItem ✓, FeatureCard ✓
    - Layout: Hero ✓, BackgroundGradient ✓, Section ✓
    - Navegación: ButtonLink ✓, Footer ✓
    - Display: FeatureCardCarousel ✓
- Parametrizar secciones principales para recibir props y datos externos: ⚒️
  - HeroSection ✓
  - AboutSection ✓
  - FAQSection ✓
  - FooterSection ✓
  - StatsAndTrackRecordSection ⚠️ (Pendiente de corregir errores)
- Centralizar lógica compartida en `lib/` y utilidades transversales en `utils/`. ⚠️ (Pendiente)

## 3. Refactor de Estilos y Tokens ⚒️ (En progreso)
- Consolidar todos los estilos en `src/styles/` y eliminar duplicados en `archive/styles/`. ✓
- Garantizar que los tokens de diseño (colores, tipografía, espaciados) estén centralizados en `src/styles/tokens/` y sean consumidos vía Tailwind y CSS custom properties. ⚠️ (Pendiente de revisión)
- Revisar y documentar el uso de utilidades y convenciones de Tailwind. ⚠️ (Pendiente)

## 4. Accesibilidad y Buenas Prácticas ⚠️ (Pendiente)
- Auditar todos los componentes para asegurar roles semánticos, uso de `aria-label`, contraste adecuado y navegación por teclado.
- Añadir tests de accesibilidad con Playwright y Lighthouse.

## 5. Documentación y Convenciones ⚒️ (En progreso)
- Mantener actualizado `CONTEXTO_SISTEMA.md` y `docs/STRUCTURE_NUEVO.md` tras cada cambio estructural. ✓
- Documentar patrones de diseño, ejemplos de uso y convenciones en los archivos correspondientes de `docs/`. ⚠️ (Pendiente)

## 6. Automatización y Testing ⚠️ (Pendiente)
- Usar y mejorar scripts de migración y reorganización (`scripts/reorganizar-componentes.ps1`).
- Asegurar cobertura de tests E2E y unitarios para flujos críticos y componentes principales.

## 7. Roadmap de Integración ⚒️ (En progreso)
- Finalizar migración de layouts y composables. ⚒️ (En progreso)
- Integrar base de datos y autenticación. ⚠️ (Pendiente)
- Parametrizar y conectar secciones a fuentes de datos reales o CMS. ⚠️ (Pendiente)
- Mejorar experiencia visual y acción del usuario según `docs/NEXT_GOAL.md`. ⚠️ (Pendiente)
