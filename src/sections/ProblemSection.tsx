// LLM-OPTIMIZED: ProblemSection for Automated Growth Agency - pain agitation for dueños de negocio
"use client"

const problems = [
  { icon: "💸", title: "Leads caros en ads que drenan tu presupuesto sin resultados claros", stat: "80% de dueños" },
  { icon: "⏰", title: "Outreach manual tedioso que consume horas sin conversiones", stat: "15h/semana perdidas" },
  { icon: "�", title: "Contenido que no genera leads ni posiciona tu marca como autoridad", stat: "90% contenido inútil" },
  { icon: "🔄", title: "Procesos desconectados que pierden 50% de oportunidades de venta", stat: "50% leads perdidos" }
];

export const ProblemSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* LLM-OPTIMIZED: Pain agitation for business owners */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            LA REALIDAD DE 80% DE DUEÑOS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            ¿Cansado de <span className="text-red-600">Leads Caros</span> y <br />
            <span className="text-red-600">Cierres Manuales Tediosos?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mientras gastas tiempo y dinero en procesos manuales, tus competidores automatizan 
            todo el growth stack y te sacan ventaja cada día.
          </p>

          <div className="bg-red-100 p-6 rounded-xl border border-red-200 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-red-800">
              📊 <strong>DATO REVELADOR:</strong> 80% de dueños pierden 50% de oportunidades 
              por procesos manuales desconectados
            </p>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{problem.icon}</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 leading-tight mb-2">{problem.title}</p>
                  <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                    {problem.stat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Problem Amplification */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            El Resultado: Tu Negocio Crece Lento Mientras Gastas Más
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-sm opacity-90">Más caro conseguir leads</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15h</div>
              <div className="text-sm opacity-90">Perdidas en tareas manuales/semana</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-sm opacity-90">Oportunidades de venta perdidas</div>
            </div>
          </div>
          <p className="text-lg mt-6 opacity-90">
            <strong>¿Te suena familiar?</strong> Es hora de automatizar tu growth como lo hacen las empresas que escalan.
          </p>
        </div>
        
      </div>
    </section>
  );
}
