// AI OPTIMIZATION: HeroSection ultra-simplificado manteniendo diseño premium
"use client"

/**
 * Hero optimizado para conversión - Fórmula PAS simplificada
 */
export const HeroSection = () => {
  const handleCTA = () => window.location.href = '/contacto';

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* COPY OPTIMIZADO: Enfoque en valor y especialización */}
        <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-6">
          DUEÑO DE NEGOCIO
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          ¿Quieres más clientes?
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Marketing directo que simplemente funciona.
        </p>
        
        {/* CTA OPTIMIZADO: Enfoque consultivo */}
        <button
          onClick={handleCTA}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-12 py-6 text-xl 
               transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          ¡Sí, Quiero Más Clientes!
        </button>
        
      </div>
    </section>
  );
}
