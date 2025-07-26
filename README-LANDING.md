# MyPerú - Landing Page

Una página de aterrizaje moderna y funcional para MyPerú, sistema para MYPEs peruanas.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Características

- ✅ Página de aterrizaje completamente responsiva
- ✅ Componentes modernos con Framer Motion
- ✅ Formularios de contacto funcionales
- ✅ Chat interactivo (HermesIA)
- ✅ Banner de cookies
- ✅ Optimizado para SEO
- ✅ Diseño moderno con Tailwind CSS

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout base
│   └── gracias/          # Página de agradecimiento
├── components/
│   ├── page-components/
│   │   ├── home/         # Componentes de la landing
│   │   └── shared/       # Componentes compartidos
│   ├── ui/               # Componentes UI básicos
│   └── shared/           # Navegación simplificada
├── hooks/
│   ├── useFormSubmission.ts
│   └── useCountdown.ts
├── lib/                  # Utilidades
└── styles/              # Estilos globales
```

## 🎨 Componentes Principales

### Home Components
- `HeroSection` - Sección principal con CTA
- `ProblemSection` - Identificación del problema
- `SolutionSection` - Presentación de la solución
- `CTASection` - Llamadas a la acción
- `OfferSection` - Presentación de la oferta

### Shared Components
- `Header` - Navegación principal
- `Footer` - Pie de página
- `ContactModal` - Modal de contacto
- `HermesIAChat` - Chat interactivo
- `CookieBanner` - Banner de cookies

## 🛠️ Tecnologías

- **Next.js 14** - Framework React
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **TypeScript** - Tipado estático
- **Lucide React** - Iconografía

## 📧 Configuración de Formularios

Los formularios están configurados para enviar a Google Apps Script. 
Configurar las variables de entorno en `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=tu_script_url
NEXT_PUBLIC_CALENDLY_URL=tu_calendly_url
```

## 🎯 Funcionalidad

- **Landing Page Completa**: Hero, problema, solución, CTA, oferta
- **Formularios Funcionales**: Contacto y lead magnets
- **Chat Interactivo**: Respuestas automáticas inteligentes
- **Responsive Design**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura semántica

---

*Desarrollado con ❤️ para MYPEs peruanas*
