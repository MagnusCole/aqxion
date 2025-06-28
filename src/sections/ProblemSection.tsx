// AI OPTIMIZATION: ProblemSection simplificado manteniendo impacto emocional
"use client"

const problems = [
  { icon: "📱", title: "Los clientes no te encuentran online" },
  { icon: "💸", title: "Tu marketing no genera resultados" },
  { icon: "⏰", title: "No tienes tiempo para promocionarte" },
  { icon: "🎯", title: "No sabes qué realmente funciona" }
];

export const ProblemSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* AI OPTIMIZATION: Título directo sin props configurables */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Tu Negocio Está Perdiendo Clientes Ahora Mismo
        </h2>

        {/* AI OPTIMIZATION: Grid simplificado sin accessibility excesiva */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border-l-4 border-gray-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{problem.icon}</span>
                <p className="text-lg font-semibold text-gray-900">{problem.title}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
