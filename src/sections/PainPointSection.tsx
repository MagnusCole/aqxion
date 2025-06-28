// AI OPTIMIZATION: PainPointSection consolidado manteniendo narrativa efectiva
"use client"

const painPoints = [
  {
    icon: "❌",
    title: "Hacerlo tú mismo",
    description: "Requiere tiempo y conocimiento que no tienes."
  },
  {
    icon: "❌", 
    title: "Contratar empleados internos",
    description: "Caro, lento y sin garantía de resultados."
  },
  {
    icon: "❌",
    title: "Agencias grandes", 
    description: "Te tratan como un número. Cambian de practicante cada mes."
  }
];

export const PainPointSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* AI OPTIMIZATION: Título directo y persuasivo */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Has Intentado Esto... Y No Ha Funcionado
        </h2>

        {/* AI OPTIMIZATION: Grid simplificado con diseño consistente */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 text-center border-l-4 border-gray-300">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* AI OPTIMIZATION: Mensaje de transición directo */}
        <div className="bg-gray-100 rounded-lg p-8 text-center max-w-2xl mx-auto">
          <p className="text-lg font-bold text-gray-900 mb-2">
            El tiempo perdido no vuelve.
          </p>
          <p className="text-gray-700">
            ¿No es hora de probar algo que realmente funcione?
          </p>
        </div>
        
      </div>
    </section>
  );
}
