# 🇵🇪 MyPerú - Tu Camino a 150 UIT

**Portal DFY→DWY→DIY para escalar MYPEs peruanas de 0 a 150 UIT anuales**

## 🎯 Misión
Ayudar a 500 MYPEs peruanas a alcanzar 150 UIT de ingresos anuales mediante un sistema progresivo:
- **DFY (Done For You):** Calculadoras y templates automáticos
- **DWY (Done With You):** Workshops grupales y feedback personalizado  
- **DIY (Do It Yourself):** Herramientas autónomas para crecimiento sostenible

## 🚀 Características Principales

### 📊 Sistema de Módulos
- **Mi Nicho:** Descubrimiento y validación de nicho ganador
- **Mi Oferta:** Creación de ofertas irresistibles con calculadora de precios
- **Mi Campaña:** Lanzamiento de campañas con proyecciones automáticas
- **Mi Progreso:** Tracking en tiempo real hacia 150 UIT

### 🔧 Stack Tecnológico
- **Framework:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Integrations:** Google Sheets API para calculadoras
- **Deployment:** Vercel

### 📈 Calculadoras Inteligentes
- **Nicho Score:** Algoritmo de evaluación de potencial de mercado
- **Precio Estratégico:** Calculadora automática con ROI optimizado
- **Proyecciones de Campaña:** Métricas en tiempo real por canal

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   └── portal/
│       ├── modules/           # Módulos principales (Nicho, Oferta, Campaña)
│       ├── RealMYPEDashboard.tsx # Dashboard principal
│       └── UITProgressTracker.tsx # Tracker de progreso UIT
├── hooks/                     # Custom hooks para estado y datos
├── services/                  # Integración Google Sheets y APIs
└── types/                     # Definiciones TypeScript

sql/
├── migrations/               # Schema de base de datos
├── views/                   # Vistas optimizadas para dashboards
└── indexes/                 # Índices de rendimiento
```

## 🚀 Instalación y Setup

```bash
# Clonar repositorio
git clone [repo-url]
cd myperu-portal

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# Ejecutar base de datos
npx prisma generate
npm run db:seed

# Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## 📊 Métricas de Éxito

### Beta Test (Semanas 1-2)
- ✅ 5 MYPEs completando los 3 módulos principales
- ✅ 80%+ tasa de finalización
- ✅ 3+ leads calificados por MYPE  
- ✅ 8+/10 satisfaction score

### Escalado Q2-Q4 2025
- **Q2:** 50 MYPEs activas
- **Q3:** 200 MYPEs con automation completa
- **Q4:** 500 MYPEs objetivo, $500K revenue

## 🎯 Meta SMART
**Enrollar 500 MYPEs peruanas generando $500K de ingresos para Diciembre 31, 2025**

---
*Built with ❤️ para el crecimiento de MYPEs peruanas*
