import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';

const resources = {
  // 1. 🚨 ¿Necesitas Resultados Rápidos? (40% pains - pocos clientes)
  rapid: [
    {
      title: "Plantilla: Página de Aterrizaje Básica",
      description: "Diseño simple para captar clientes potenciales.",
      icon: "🎯",
      status: "coming-soon",
      downloadType: "plantilla"
    },
    {
      title: "Calculadora de Rentabilidad",
      description: "Verifica si tus esfuerzos generan ganancias.",
      icon: "📊", 
      status: "coming-soon",
      downloadType: "herramienta"
    },
    {
      title: "Guiones para WhatsApp",
      description: "Mensajes para convertir conversaciones en ventas rápido.",
      icon: "💬",
      status: "coming-soon", 
      downloadType: "plantillas"
    },
    {
      title: "Lista de Verificación Google Mi Negocio",
      description: "Pasos para visibilidad local inmediata.",
      icon: "📍",
      status: "coming-soon",
      downloadType: "lista"
    },
    {
      title: "Correos de Seguimiento",
      description: "Mensajes para nutrir clientes potenciales.",
      icon: "📧",
      status: "coming-soon",
      downloadType: "plantillas"
    },
    {
      title: "Calendario de Contenido 30 Días",
      description: "Publicaciones listas para publicar sin pensar.",
      icon: "📅",
      status: "coming-soon",
      downloadType: "calendario"
    }
  ],

  // 2. 💸 ¿Gastas Demasiado en Marketing? (35% pains - mucho gasto)
  budget: [
    {
      title: "Estrategias Orgánicas",
      description: "Guía para tráfico sin anuncios pagados.",
      icon: "🌱",
      status: "coming-soon",
      downloadType: "guía"
    },
    {
      title: "Retención de Clientes",
      description: "Técnicas para ventas repetidas automáticas.",
      icon: "🔄",
      status: "coming-soon",
      downloadType: "estrategias"
    },
    {
      title: "Posicionamiento Local Básico",
      description: "Aparece en búsquedas sin pagar anuncios.",
      icon: "📍",
      status: "coming-soon",
      downloadType: "guía"
    },
    {
      title: "Planificador de Presupuesto",
      description: "Herramienta para optimizar gastos sin costo.",
      icon: "💰",
      status: "coming-soon",
      downloadType: "herramienta"
    },
    {
      title: "Plantillas de Contenido",
      description: "Ideas para publicaciones gratuitas.",
      icon: "📝",
      status: "coming-soon",
      downloadType: "plantillas"
    },
    {
      title: "Configuración de Boletín",
      description: "Construye lista sin herramientas pagadas.",
      icon: "📧",
      status: "coming-soon",
      downloadType: "configuración"
    }
  ],

  // 3. ⏰ ¿Falta Tiempo para Todo? (50% pains - falta de tiempo)
  time: [
    {
      title: "Flujo de Trabajo con IA Simple",
      description: "Pasos para automatizar ventas fácilmente.",
      icon: "🤖",
      status: "coming-soon",
      downloadType: "flujo"
    },
    {
      title: "Plantillas de Automatización",
      description: "Conecta herramientas gratis para flujo automático.",
      icon: "⚡",
      status: "coming-soon",
      downloadType: "plantillas"
    },
    {
      title: "Generación Automática de Clientes",
      description: "Sistema para captar clientes mientras duermes.",
      icon: "🔄",
      status: "coming-soon",
      downloadType: "sistema"
    },
    {
      title: "Programador Básico",
      description: "Calendario para marketing sin esfuerzo.",
      icon: "📅",
      status: "coming-soon",
      downloadType: "herramienta"
    },
    {
      title: "Guiones de Chat",
      description: "Automatiza respuestas de WhatsApp.",
      icon: "💬",
      status: "coming-soon",
      downloadType: "guiones"
    },
    {
      title: "Lista de Verificación de Automatización",
      description: "Pasos para empezar hoy mismo.",
      icon: "📋",
      status: "coming-soon",
      downloadType: "lista"
    }
  ]
};

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50/40">
      
      {/* Hero siguiendo la vibe: urgency-focused, problem-solving */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50/40">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Subtitle natural, empathy-first */}
            <p className="text-lg text-slate-600 mb-8">
              Plantillas y Herramientas Listas para Usar
            </p>
            
            {/* H1 siguiendo website-vibe pattern */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
              ¿Necesitas 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Resultados Inmediatos?
              </span>
            </h1>
            
            {/* Benefit natural, sin overselling */}
            <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Herramientas y plantillas listas para acelerar tu implementación.</strong>
              <br />Copia, personaliza y obtén resultados en días, no meses.
            </p>
            
          </div>
        </div>
      </section>

      {/* Main content section - Problem-first organization */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="max-w-7xl mx-auto">

            {/* 1. 🚨 ¿Necesitas Resultados Rápidos? - pocos clientes (VERDE) */}
            <div className="mb-24">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                🚨 ¿Necesitas Resultados Rápidos?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
                Herramientas para conseguir clientes esta semana – implementa hoy, ve resultados mañana.
              </p>
              <div className="w-20 h-1 bg-green-500 rounded-full mb-8"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {resources.rapid.map((resource, index) => (
                  <div key={index} className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200 group">
                    <div className="text-3xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-amber-600 font-semibold">
                        🔨 En desarrollo
                      </span>
                      <button className="bg-amber-300 text-amber-800 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Próximamente
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-xs text-green-700">
                  <strong>Nota:</strong> Resultados basados en implementación correcta; cada negocio es único.
                </p>
              </div>
            </div>

            {/* 2. 💸 ¿Gastas Demasiado en Marketing? - mucho gasto (AZUL) */}
            <div className="mb-24">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                💸 ¿Gastas Demasiado en Marketing?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
                Herramientas para marketing efectivo sin gastos – enfócate en lo que funciona gratis.
              </p>
              <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {resources.budget.map((resource, index) => (
                  <div key={index} className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group">
                    <div className="text-3xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-amber-600 font-semibold">
                        🔨 En desarrollo
                      </span>
                      <button className="bg-amber-300 text-amber-800 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Próximamente
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-xs text-blue-700">
                  <strong>Nota:</strong> Estrategias probadas en múltiples negocios; adapta a tu contexto específico.
                </p>
              </div>
            </div>

            {/* 3. ⏰ ¿Falta Tiempo para Todo? - falta de tiempo (AMBER) */}
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                ⏰ ¿Falta Tiempo para Todo?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
                Automatizaciones básicas para ahorrar horas – implementa rápido y gana tiempo.
              </p>
              <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {resources.time.map((resource, index) => (
                  <div key={index} className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition-all duration-200 group">
                    <div className="text-3xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-amber-600 font-semibold">
                        🔨 En desarrollo
                      </span>
                      <button className="bg-amber-300 text-amber-800 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Próximamente
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <p className="text-xs text-amber-700">
                  <strong>Nota:</strong> Automatizaciones requieren configuración inicial; ahorro de tiempo es progresivo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Action CTA - Consistente con guías y cursos */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Deja de Buscar. Empieza a Implementar.
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              <strong>¿Por qué esperar a tener todo perfecto?</strong> Empieza con las guías disponibles y construye impulso mientras desarrollamos más recursos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/guias" 
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Ver Todas las Guías
                <span className="ml-2">📖</span>
              </Link>
              
              <Link 
                href="/cursos" 
                className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Cursos en Desarrollo
                <span className="ml-2">🎓</span>
              </Link>
            </div>

            {/* Email signup minimalista */}
            <div className="border-t border-blue-500/30 pt-8">
              <p className="text-blue-200 mb-4 text-sm">
                ¿Te avisamos cuando estén listos los recursos?
              </p>
              <EmailSignup 
                page="recursos"
                buttonText="Sí, avísame"
                theme="blue"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
