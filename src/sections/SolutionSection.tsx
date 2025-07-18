// LLM-OPTIMIZED: SolutionSection for Automated Growth Agency - how we deliver results
"use client"

const solutions = [
  {
    icon: "🎯",
    title: "Diagnóstico Estratégico",
    description: "Analizamos tu negocio, identificamos cuellos de botella y diseñamos tu stack de growth personalizado."
  },
  {
    icon: "🚀", 
    title: "Implementación Rápida",
    description: "En 30 días tienes ads, outreach, contenido e IA trabajando juntos para generar leads cualificados."
  },
  {
    icon: "📈",
    title: "Optimización Continua",
    description: "Monitoreamos métricas 24/7 y optimizamos automáticamente para maximizar ROI y conversiones."
  },
  {
    icon: "🏆",
    title: "Escalamiento Sostenible",
    description: "Tu growth opera en piloto automático mientras tú te enfocas en cerrar deals y escalar estratégicamente."
  }
];

const benefits = [
  { icon: "💰", title: "ROI Garantizado", desc: "450% ROI promedio o devolvemos tu inversión" },
  { icon: "⏱️", title: "Setup Rápido", desc: "Resultados visibles en primeros 30 días" },
  { icon: "🔄", title: "100% Automatizado", desc: "Funciona 24/7 sin supervisión constante" },
  { icon: "📊", title: "Reportes Transparentes", desc: "Dashboard en tiempo real de todas las métricas" }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Solution Overview */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--auto-green)]/10 text-[var(--auto-green)] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full animate-pulse"></span>
            CÓMO TRANSFORMAMOS TU GROWTH
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            De 0 a 100 Leads/Mes en <span className="text-[var(--auto-green)]">90 Días Garantizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro proceso probado convierte dueños de negocio en máquinas de crecimiento automatizado. 
            Stack completo funcionando en 30 días.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[var(--ia-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{solution.icon}</span>
                </div>
                <div className="text-sm font-bold text-[var(--ia-blue)] mb-2">PASO {i + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
              
              {/* Arrow connecting steps */}
              {i < solutions.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[var(--ia-blue)] text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ¿Por Qué Eligen Nuestro Sistema de Growth?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Growth Manual vs Growth Automatizado
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-100 p-6 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-700 mb-4 text-center">❌ FORMA TRADICIONAL</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Ads caros sin optimización constante</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Outreach manual que consume 15h/semana</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Contenido sin estrategia ni medición</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Procesos desconectados y pérdida de leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Crecimiento limitado por capacidad humana</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-6 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-700 mb-4 text-center">✅ NUESTRO SISTEMA</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Ads optimizados 24/7 con IA para máximo ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Outreach automatizado con 15% response rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Contenido estratégico que ranquea y convierte</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Stack integrado que nutre leads automáticamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Escalamiento ilimitado sin aumentar equipo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
