// AI OPTIMIZATION: SolutionSection optimizada con diferenciadores clave
"use client"

const uniqueValues = [
  {
    icon: "🎯",
    title: "Especialización",
    description: "Trabajamos solo con industrias que conocemos."
  },
  {
    icon: "📊", 
    title: "Resultados",
    description: "Menos palabras. Más clientes."
  },
  {
    icon: "📍",
    title: "Locales",
    description: "Siempre accesibles, sin call centers anónimos."
  },
  {
    icon: "🛡️",
    title: "Garantía",
    description: "Solo ganamos si tú ganas."
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* AI OPTIMIZATION: Título directo y positivo */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          La Solución Que Realmente Funciona
        </h2>

        {/* AI OPTIMIZATION: Grid de diferenciadores con estilo premium */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {uniqueValues.map((value, i) => (
            <div key={i} className="bg-white rounded-lg p-6 text-center border-l-4 border-blue-400 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-3">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* AI OPTIMIZATION: Mensaje de confianza consolidado */}
        <div className="bg-blue-50 rounded-lg p-8 text-center max-w-2xl mx-auto border border-blue-200">
          <p className="text-lg font-bold text-gray-900 mb-2">
            Así ayudamos a negocios como el tuyo a crecer.
          </p>
          <p className="text-gray-700">
            Resultados reales que puedes ver en tu cuenta bancaria.
          </p>
        </div>
        
      </div>
    </section>
  );
}
