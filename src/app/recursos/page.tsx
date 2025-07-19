import Link from 'next/link';

interface Resource {
  title: string;
  description: string;
  type: 'template' | 'tool' | 'guide';
  status: 'ready' | 'coming-soon';
  category: string;
  icon: string;
}

const resources: Resource[] = [
  // Recursos urgentes/listos
  {
    title: "Template: Landing Page de Conversión",
    description: "Diseño probado que convierte visitantes en leads. Copia, personaliza y lanza.",
    type: "template",
    status: "ready",
    category: "urgent",
    icon: "🎯"
  },
  {
    title: "Calculadora ROI Publicidad",
    description: "Descubre si tu publicidad es rentable con esta calculadora automática.",
    type: "tool", 
    status: "ready",
    category: "urgent",
    icon: "📊"
  },
  {
    title: "Scripts de WhatsApp para Ventas",
    description: "Mensajes que convierten. Probados en cientos de negocios.",
    type: "template",
    status: "ready", 
    category: "urgent",
    icon: "💬"
  },
  
  // Recursos de crecimiento
  {
    title: "Checklist: Google Business Profile",
    description: "Optimiza tu perfil paso a paso para aparecer en el top 3 de tu zona.",
    type: "guide",
    status: "ready",
    category: "growth", 
    icon: "📋"
  },
  {
    title: "Template: Email de Seguimiento",
    description: "Secuencia de emails que convierte leads fríos en clientes.",
    type: "template",
    status: "ready",
    category: "growth",
    icon: "📧"
  },
  {
    title: "Calendario de Contenidos",
    description: "30 días de contenido listo para publicar (sin pensar qué escribir).",
    type: "template", 
    status: "ready",
    category: "growth",
    icon: "📅"
  },
  
  // Recursos de automatización
  {
    title: "Workflow: Lead Generation Automático",
    description: "Sistema completo para captar leads mientras duermes.",
    type: "tool",
    status: "coming-soon",
    category: "automation",
    icon: "🤖"
  },
  {
    title: "Zapier Templates Marketing",
    description: "Automatizaciones listas para conectar todas tus herramientas.",
    type: "template",
    status: "coming-soon", 
    category: "automation",
    icon: "⚡"
  }
];

function organizeResourcesByUrgency(resources: Resource[]) {
  return {
    urgent: resources.filter(r => r.category === 'urgent' && r.status === 'ready'),
    growth: resources.filter(r => r.category === 'growth' && r.status === 'ready'), 
    automation: resources.filter(r => r.category === 'automation')
  };
}

export default function RecursosPage() {
  const organizedResources = organizeResourcesByUrgency(resources);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      
      {/* Hero siguiendo la vibe: urgency-focused, problem-solving */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Subtitle siguiendo el pattern de empathy */}
            <p className="text-lg text-slate-600 mb-6">
              Templates y Herramientas Listas para Usar
            </p>
            
            {/* H1 urgency-focused, siguiendo exact pattern homepage */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Necesitas 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Resultados Inmediatos?
              </span>
            </h1>
            
            {/* Benefit-focused subtitle siguiendo la vibe */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Herramientas y templates listos para acelerar tu implementación.</strong>
              <br />Copia, personaliza y obtén resultados en días, no meses.
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Resources - Immediate value siguiendo vibe problem-solving */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
                🚨 ¿Necesitas Resultados Esta Semana?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Recursos listos para implementar hoy mismo. Sin configuraciones complejas.
              </p>
              <div className="w-16 h-1 bg-red-500 rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {organizedResources.urgent.map((resource, index) => (
                <div key={index} className="bg-white border-2 border-red-200 rounded-xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-200 group">
                  <div className="text-3xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">
                      ✅ Listo para usar
                    </span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Resources */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
                📈 ¿Quieres Crecer de Forma Sostenible?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Herramientas para construir un sistema de marketing que funcione a largo plazo.
              </p>
              <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {organizedResources.growth.map((resource, index) => (
                <div key={index} className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group">
                  <div className="text-3xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">
                      ✅ Listo para usar
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Automation Resources - Coming Soon */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
                🤖 ¿Quieres Automatizar Todo?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Herramientas de automatización avanzada (en desarrollo activo).
              </p>
              <div className="w-16 h-1 bg-purple-500 rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {organizedResources.automation.map((resource, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-6 opacity-75">
                  <div className="text-3xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">
                      🔨 En desarrollo
                    </span>
                    <button className="bg-purple-300 text-purple-700 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                      Próximamente
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Support - Value-added siguiendo vibe helpfulness */}
      <section className="section-padding bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Necesitas Ayuda con la Implementación?
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Los recursos incluyen instrucciones detalladas, pero si necesitas apoyo extra:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3">
                  Guías de Implementación
                </h3>
                <p className="text-neutral-400 mb-4">
                  Step-by-step detallado para cada recurso. Sin dudas, sin errores.
                </p>
                <Link 
                  href="/guias" 
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Ver Guías
                  <span className="ml-2">📖</span>
                </Link>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">
                  Casos de Uso Reales
                </h3>
                <p className="text-neutral-400 mb-4">
                  Ejemplos de cómo otros negocios han usado estos recursos.
                </p>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Ver Casos
                  <span className="ml-2">💼</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final siguiendo vibe action-oriented */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Deja de Buscar. Empieza a Implementar.
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Tienes las herramientas. Tienes las guías. Solo te falta <strong>actuar</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:scale-105">
                Descargar Todo Ahora
                <span className="ml-2">⬇️</span>
              </button>
              
              <Link 
                href="/guias" 
                className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Ver Guías de Implementación
                <span className="ml-2">🚀</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
