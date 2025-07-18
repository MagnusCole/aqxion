// GROWTH EQUITY PARTNER: ProblemSection transformado - problema de agencias sin skin-in-the-game
"use client"

const agencyProblems = [
  { 
    icon: "🤝", 
    title: "Agencias cobran sin importar tus resultados reales", 
    description: "Te facturan mensualmente aunque no generes ROI",
    stat: "85% de agencias" 
  },
  { 
    icon: "💸", 
    title: "Sin skin-in-the-game = sin alineación real de intereses", 
    description: "Ellos ganan aunque tú pierdas dinero",
    stat: "90% casos típicos" 
  },
  { 
    icon: "📈", 
    title: "Promesas de growth sin garantías ni equity compartido", 
    description: "Venden sueños pero no invierten en tu éxito",
    stat: "75% experiencias" 
  },
  { 
    icon: "🔄", 
    title: "Modelo obsoleto: servicios aislados sin partnership", 
    description: "No construyen contigo, solo ejecutan tareas",
    stat: "95% mercado" 
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 via-white to-[var(--equity-blue)]/5">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* PAIN AGITATION: Agencias tradicionales vs Growth Equity Partner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-red-200">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            🚨 PROBLEMA REAL DE 85% DE DUEÑOS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            <span className="text-red-600">Agencias Tradicionales</span><br />
            <span className="text-gray-900">Cobran Sin</span> <span className="text-red-600">Skin-in-the-Game</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Mientras <strong className="text-red-600">ellos ganan mensualidades</strong> sin importar tus resultados, 
            <strong className="text-[var(--equity-blue)]"> tú arriesgas todo</strong> sin un socio que invierta en tu éxito real.
          </p>

          <div className="bg-gradient-to-r from-red-100 to-red-50 p-8 rounded-2xl border-l-4 border-red-500 max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-red-800 mb-2">
              � <strong>LA CRUDA REALIDAD:</strong>
            </p>
            <p className="text-lg text-red-700">
              85% de agencias cobran $5K-15K/mes aunque tu negocio no crezca. 
              <span className="font-bold text-red-800">Ganancia asegurada para ellos, riesgo total para ti.</span>
            </p>
          </div>
        </div>

        {/* Pain Points: Traditional Agency Problems */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {agencyProblems.map((problem, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-red-200 shadow-sm hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                {problem.stat}
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{problem.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{problem.description}</p>
                  <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                    {problem.stat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contrast: Traditional vs Equity Partnership */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Agency Model */}
          <div className="bg-gradient-to-br from-red-100 to-red-50 p-8 rounded-2xl border-2 border-red-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">Agencia Tradicional</h3>
              <p className="text-red-600 font-medium">Ellos ganan, tú arriesgas</p>
            </div>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>Cobran sin importar resultados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>Sin inversión en tu éxito</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>Modelo transaccional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>Solo ejecutan, no construyen</span>
              </li>
            </ul>
          </div>

          {/* Growth Equity Partnership */}
          <div className="bg-gradient-to-br from-[var(--equity-gold)]/20 via-[var(--equity-blue)]/10 to-[var(--equity-green)]/20 p-8 rounded-2xl border-2 border-[var(--equity-gold)]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[var(--equity-gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--equity-blue)] text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--equity-blue)] mb-2">Growth Equity Partner</h3>
              <p className="text-[var(--equity-green)] font-bold">Ganamos cuando tú ganas</p>
            </div>
            <ul className="space-y-3 text-[var(--equity-blue)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--equity-gold)] mt-1">●</span>
                <span className="font-medium">Invertimos equity en tu éxito</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--equity-gold)] mt-1">●</span>
                <span className="font-medium">Skin-in-the-game total</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--equity-gold)] mt-1">●</span>
                <span className="font-medium">Partnership a largo plazo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--equity-gold)] mt-1">●</span>
                <span className="font-medium">Construimos valor juntos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA Transition */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[var(--equity-blue)] to-[var(--equity-green)] p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para un Partner que <span className="text-[var(--equity-gold)]">Invierta en Tu Éxito?</span>
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Descubre cómo nuestro modelo de equity cambia todo el juego
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🤝 Partnership Real
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                💰 Interests Alineados
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                📈 Growth Compartido
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
