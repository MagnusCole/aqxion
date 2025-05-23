<!--
TODO: Este documento debe actualizarse tras cada cambio estructural relevante.
-->

# 🧠 CONTEXTO DEL SISTEMA AQXION

Este documento es el informe central y exhaustivo del sistema AQXION. Aquí se detalla el estado real, estructura, procesos, convenciones, objetivos, criterios de obsolescencia, dependencias, scripts, y recomendaciones prácticas. Es la referencia única y actualizada para IA y colaboradores.

---

## 1. Estado Actual y Alcance
- **Proyecto en desarrollo activo y migración estructural.**
- **Stack principal:**
  - Next.js 15 (App Router, SSR/SSG, layouts, dynamic routing)
  - TypeScript (tipado estricto, convenciones de nomenclatura)
  - Tailwind CSS v3 (tokens, utilidades, responsive, dark mode)
  - Vercel (deploy, preview, edge functions)
  - PostgreSQL (Prisma ORM, aún no integrado)
  - Playwright (testing end-to-end, automatización de flujos críticos)
- **Base de datos:** No integrada. Ver `SETUP_ENV.md` para detalles de conexión y variables de entorno.
- **Migración:**
  - De estructura legacy (carpetas `archive/`, componentes monolíticos) a estructura modular, escalable y basada en Design System.
  - Uso intensivo de tokens de diseño y separación estricta de responsabilidades.
- **Documentación:**
  - Estructura y convenciones en `docs/STRUCTURE_NUEVO.md`, `docs/REORGANIZACION.md`, `docs/IMPLEMENTACION.md`.
  - Documentos antiguos solo para referencia histórica.

---

## 2. Estructura del Proyecto (Vigente y Detallada)

```
src/
├── styles/
│   ├── base.css, components.css, globals.css, responsive-utils.css, section-layout.css, tokens.css, utilities.css
│   └── tokens/ (colors.css, spacing.css, typography.css)
├── components/
│   ├── atoms/ (próximamente: Button, Input, Text, Label, Icon, etc.)
│   └── composables/ (próximamente: layout, navigation, data-display, forms, feedback, marketing)
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── StatsAndTrackRecordSection.tsx
│   ├── FAQSection.tsx
│   ├── FooterSection.tsx
│   └── ExampleSection.tsx
├── layouts/ (LandingLayout, DashboardLayout) [pendiente migración]
├── app/ (layout.tsx, page.tsx, rutas dinámicas, loading, error boundaries)
├── lib/ (helpers, hooks, lógica de negocio compartida)
├── server/ (handlers, endpoints, lógica de backend)
├── utils/ (utilidades transversales)
```

- **Convenciones de nombres:**
  - PascalCase para componentes y secciones (`HeroSection.tsx`)
  - kebab-case para archivos de estilos (`base.css`)
  - snake_case para variables de entorno
- **Rutas:**
  - Todas las rutas públicas y privadas se definen bajo `src/app/` siguiendo la convención de Next.js 13+.
- **Tokens de diseño:**
  - Centralizados en `src/styles/tokens/` y consumidos vía Tailwind y CSS custom properties.
- **Accesibilidad:**
  - Uso obligatorio de `aria-label`, roles semánticos y contraste adecuado.

---

## 3. Componentes y Secciones Principales (Vigentes y Detallados)

### HeroSection
- **Funcionalidad:** Sección de bienvenida, gradientes, animaciones, CTA destacado, métricas y experiencia del equipo.
- **Props:** Pendiente parametrización para personalización dinámica.
- **Accesibilidad:** Títulos jerárquicos, roles, contraste.
- **Limitaciones:** Contenido estático, métricas hardcodeadas.
- **Próximos pasos:** Integrar props y datos reales.

### AboutSection
- **Funcionalidad:** Propuesta de valor, tarjetas de características, iconografía, animaciones.
- **Props:** Tarjetas definidas en el propio componente.
- **Accesibilidad:** Iconos con `aria-label`, estructura semántica.
- **Limitaciones:** No editable desde CMS.
- **Próximos pasos:** Extraer datos a fuente externa, mejorar accesibilidad.

### StatsAndTrackRecordSection
- **Funcionalidad:** Estadísticas clave, casos de éxito, carrusel horizontal, navegación, indicadores.
- **Props:** Datos hardcodeados.
- **Accesibilidad:** Navegación por teclado, roles de carrusel.
- **Limitaciones:** Sin integración backend.
- **Próximos pasos:** Integrar datos reales, mejorar experiencia móvil.

### FAQSection
- **Funcionalidad:** Preguntas frecuentes, objeciones, expansión animada.
- **Props:** Preguntas y respuestas hardcodeadas.
- **Accesibilidad:** Soporte para lectores de pantalla, foco visible.
- **Limitaciones:** No editable dinámicamente.
- **Próximos pasos:** Permitir gestión dinámica, mejorar accesibilidad.

### FooterSection
- **Funcionalidad:** Disclaimer legal, enlaces clave, branding.
- **Props:** Estáticos.
- **Accesibilidad:** Roles de contenido informativo.

---

## 4. Principios de Diseño y Convenciones
- **Design System:** Modularidad, atomicidad, escalabilidad, separación de concerns.
- **Sistema de cajas (boxes):** Agrupación visual, separación de secciones, ver `docs/BOXES.md`.
- **Tokens de diseño:**
  - Colores, espaciados, tipografía, radios, sombras.
  - Definidos en CSS y consumidos vía Tailwind (`@apply` y custom properties).
- **Accesibilidad:**
  - Contraste mínimo AA, navegación por teclado, aria-labels, headings jerárquicos.
- **Testing:**
  - Playwright para flujos críticos, pruebas de accesibilidad y regresión visual.

---

## 5. Flujo de Trabajo y Colaboración (Detallado)
- **Branching:**
  - Fork → branch `feat/<topic>` o `fix/<issue>`.
  - Pull Request a `main` o rama de integración.
- **Commits:**
  - Convenciones: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
  - Mensajes descriptivos y atómicos.
- **PR:**
  - Tests y lint automáticos (CI/CD en Vercel o GitHub Actions).
  - Revisión obligatoria por al menos 1 colaborador.
  - Plantilla de PR: descripción, pruebas realizadas, checklist de criterios de aceptación (ver `CONTRIBUTING.md`).
- **Documentación:**
  - Todo cambio estructural debe reflejarse en este informe y en los documentos de `docs/`.

---

## 6. Objetivos, Roadmap y Próximos Pasos
- **Migrar completamente a la nueva estructura modular.**
- **Integrar base de datos y autenticación (ver `SETUP_ENV.md`).**
- **Optimizar experiencia visual y acción del usuario (ver `docs/NEXT_GOAL.md`).**
- **Automatizar migraciones y refactors con scripts (`scripts/reorganizar-componentes.ps1`).**
- **Mantener documentación y contexto siempre actualizados.**
- **Próximos milestones:**
  - Finalizar migración de layouts y composables.
  - Parametrizar secciones principales.
  - Integrar datos reales y CMS.
  - Mejorar cobertura de tests y accesibilidad.

---

## 7. Clasificación de Componentes y Archivos Obsoletos o No Usados (Detallado)

### Obsoletos / No Usados (mantener solo para referencia histórica o migración):

- **Carpetas:**
  - `archive/Old3/`, `archive/old/`, `archive/old2/`, `archive/sections/`, `archive/ui/`, `archive/layout/`, `archive/hero/`
    - Contienen versiones antiguas de componentes (Hero, Footer, Header, AboutAqxion, etc.), estilos y utilidades.
    - No seguir usando ni modificando. Solo consultar para migración o referencia.
- **Estilos en `archive/styles/`:**
  - `base.css`, `components.css`, `globals.css`, `tokens.css`, `utilities.css` (versiones antiguas, reemplazadas por las de `src/styles/`).
- **Componentes antiguos:**
  - `HeroContent.tsx`, `Navbar.tsx`, `Footer.tsx`, `Header.tsx`, `Section.tsx`, `Button.tsx`, etc. (ver carpetas de `archive/`).
- **Documentación antigua:**
  - `docs/STRUCTURE.md`, `docs/STYLE_GUIDE.MD`, `docs/FOOTER.MD`, `docs/DESING_SYSTEM.md` (consultar solo para migración, la referencia oficial es `docs/STRUCTURE_NUEVO.md`).
- **Convenciones obsoletas:**
  - Uso de clases CSS globales, componentes monolíticos, estilos inline, y lógica de negocio acoplada a la UI.

### Vigentes (únicos a mantener y evolucionar):
- Todo lo bajo `src/` (excepto lo explicitado como en desarrollo o pendiente migración).
- Documentación bajo `docs/` que no esté marcada como antigua.
- Archivos de configuración y scripts en raíz (`package.json`, `tailwind.config.js`, etc.).
- Estructura de tokens y utilidades en `src/styles/`.
- Scripts de automatización y migración.

---

## 8. Notas, Limitaciones y Recomendaciones Prácticas
- **Errores de rutas o CSS:**
  - Actualizar dependencias de Tailwind y Next.js si surgen problemas de compilación o estilos.
- **Despliegue:**
  - El sistema aún no está en producción; incluir disclaimer legal en el footer.
- **Migraciones automáticas:**
  - Usar el script `scripts/reorganizar-componentes.ps1` para refactors masivos.
- **Accesibilidad:**
  - Validar con Lighthouse y Playwright. Priorizar contraste, navegación por teclado y roles semánticos.
- **Testing:**
  - Mantener y ampliar cobertura de tests E2E y unitarios.
- **Documentación:**
  - Todo cambio relevante debe reflejarse en este informe y en los documentos clave.

---

## 9. Dependencias, Scripts y Configuración
- **Dependencias principales:**
  - `next`, `react`, `react-dom`, `tailwindcss`, `@prisma/client`, `playwright`, `eslint`, `prettier`, `typescript`.
- **Scripts útiles (`package.json`):**
  - `dev`, `build`, `start`, `lint`, `test`, `test:e2e`, `format`, `migrate`, `prisma generate`, etc.
- **Configuraciones clave:**
  - `tailwind.config.js`: Customización de tokens, dark mode, plugins.
  - `tsconfig.json`: Paths, strict mode, aliases.
  - `.env.local`: Variables de entorno sensibles.

---

## 10. Documentación Clave y Referencias
- `README.md`: Visión general, comandos principales, dependencias.
- `SETUP_ENV.md`: Setup local, variables de entorno, conexión a base de datos.
- `CONTRIBUTING.md`: Guía de colaboración, convenciones de código, checklist de PR.
- `docs/REORGANIZACION.md`: Plan y motivación de la reorganización.
- `docs/STRUCTURE_NUEVO.md`: Estructura oficial actualizada, convenciones y ejemplos.
- `docs/BOXES.md`: Sistema de cajas para secciones, buenas prácticas visuales.
- `docs/NEXT_GOAL.md`: Objetivos inmediatos, visión de página, roadmap.
- Otros documentos en `docs/` para detalles de layout, tipografía, colores, etc.

---

**Este informe debe actualizarse tras cada cambio relevante en la estructura, componentes principales, dependencias o estado del sistema. Es la referencia obligatoria para todo el equipo.**