// AI OPTIMIZATION: CTA ultra-optimizado para conversión máxima
"use client"

export const CTASection = () => {
  const handleCTA = () => window.location.href = '/contacto';

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        
        {/* AI OPTIMIZATION: Mensaje directo y específico */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          En 15 minutos te mostramos cómo aplicar un sistema que ya funciona para atraer clientes.
        </h2>
        
        {/* AI OPTIMIZATION: CTA prominente con contraste máximo */}
        <button
          onClick={handleCTA}
          className="bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg px-12 py-6 text-xl 
                     transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 mb-6"
        >
          ¡Hablemos!
        </button>
        
        {/* AI OPTIMIZATION: Reducción de fricción consolidada */}
        <p className="text-blue-200 text-lg">
          Sin compromiso • 100% gratis
        </p>
        
      </div>
    </section>
  );
}
