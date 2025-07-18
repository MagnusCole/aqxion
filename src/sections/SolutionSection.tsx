// LLM-OPTIMIZED: SolutionSection transformado para Growth Equity Partner - cómo creamos valor compartido
"use client"

const equityPartnershipSteps = [
  {
    icon: "🔍",
    title: "Due Diligence Integral",
    description: "Evaluamos potencial de growth, fit del mercado y oportunidades de escalamiento para determinar equity partnership."
  },
  {
    icon: "🤝", 
    title: "Estructuración del Deal",
    description: "Definimos % equity, términos, milestones y framework de colaboración transparente que beneficie a ambas partes."
  },
  {
    icon: "�",
    title: "Growth Stack Implementation",
    description: "Desplegamos nuestro stack completo (ads, outreach, content, IA, copy) alineado 100% con objetivos de valuación."
  },
  {
    icon: "📈",
    title: "Scale & Value Building",
    description: "Escalamos revenue, optimizamos operaciones y construimos activos que incrementan valuación para exit o reinversión."
  }
];

const partnershipBenefits = [
  { icon: "�", title: "Skin-in-the-Game", desc: "Ganamos cuando tú ganas - intereses 100% alineados" },
  { icon: "💰", title: "Capital + Expertise", desc: "Inversión inicial + servicios world-class incluidos" },
  { icon: "�", title: "Valuation Focus", desc: "Cada acción optimizada para incrementar tu valuación" },
  { icon: "🎯", title: "Exit Strategy", desc: "Preparamos tu empresa para exit exitoso en 18-36 meses" }
];

export const SolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-[var(--equity-gold)]/5 to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Solution Overview */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[var(--equity-gold)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-gold)]/20">
            <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
            💎 CÓMO CREAMOS VALOR COMPARTIDO
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            <span className="text-[var(--equity-blue)]">De Partnership a</span><br />
            <span className="equity-gradient-text">Exit Exitoso Conjunto</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            <strong>Proceso probado</strong> para transformar empresas con potencial en <strong>activos valuados</strong> listos para exit. 
            <span className="text-[var(--equity-green)] font-semibold">Partnership equity que beneficia a ambas partes.</span>
          </p>
        </div>

        {/* Partnership Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {equityPartnershipSteps.map((step, i) => (
            <div key={i} className="relative">
              <div className="equity-deal-card text-center h-full">
                <div className="w-20 h-20 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="text-sm font-bold text-[var(--equity-gold)] mb-3 uppercase tracking-wide">Fase {i + 1}</div>
                <h3 className="text-xl font-bold text-[var(--equity-blue)] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connecting steps */}
              {i < equityPartnershipSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[var(--equity-gold)] text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership Benefits Grid */}
        <div className="equity-deal-card mb-16">
          <h3 className="text-3xl font-bold text-center text-[var(--equity-blue)] mb-12">
            ¿Por Qué Partnership Equity vs Servicios Tradicionales?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, i) => (
              <div key={i} className="text-center p-6 hover:bg-[var(--equity-gold)]/5 rounded-xl transition-all duration-300">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h4 className="font-bold text-[var(--equity-blue)] text-lg mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Comparison */}
        <div className="bg-gradient-to-r from-red-50 via-white to-[var(--equity-green)]/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-[var(--equity-blue)] mb-12">
            Agencia Tradicional vs Growth Equity Partner
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Traditional Agency */}
            <div className="bg-red-100 p-8 rounded-2xl border border-red-200">
              <h4 className="text-2xl font-bold text-red-600 mb-6 text-center">
                🏢 Agencia Tradicional
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Cobran sin importar tus resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Enfoque táctico, no estratégico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Sin skin-in-the-game real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Relación cliente-proveedor temporal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">No optimizan para valuación</span>
                </li>
              </ul>
            </div>

            {/* Growth Equity Partner */}
            <div className="bg-[var(--equity-green)]/10 p-8 rounded-2xl border border-[var(--equity-green)]/30">
              <h4 className="text-2xl font-bold text-[var(--equity-green)] mb-6 text-center">
                🤝 Growth Equity Partner
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-xl">✅</span>
                  <span className="text-gray-700">Ganamos cuando tú ganas - intereses alineados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-xl">✅</span>
                  <span className="text-gray-700">Visión estratégica long-term</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-xl">✅</span>
                  <span className="text-gray-700">Equity stake = máximo compromiso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-xl">✅</span>
                  <span className="text-gray-700">Partnership duradero hasta exit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-xl">✅</span>
                  <span className="text-gray-700">Todo optimizado para incrementar valuación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Proposition CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--equity-blue)] via-[var(--equity-green)] to-[var(--equity-gold)] p-12 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para un Partner que Realmente Invierta en Tu Éxito?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              No más pagos sin resultados. No más agencias sin compromiso real. 
              Partnership equity donde ganamos juntos o no ganamos.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/due-diligence'}
                className="bg-white text-[var(--equity-blue)] font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🔍 Evaluar Mi Empresa
              </button>
              <button 
                onClick={() => window.location.href = '/modelos-partnership'}
                className="bg-white/20 text-white border-2 border-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-[var(--equity-blue)] transition-all duration-300"
              >
                💎 Ver Modelos de Partnership
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
