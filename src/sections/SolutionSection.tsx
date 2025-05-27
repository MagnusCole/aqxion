// sections/SolutionSection.tsx
"use client"

import React from 'react'

export interface SolutionSectionProps {
  title?: string;
  uniqueValues?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  className?: string;
}

/**
 * Sección de Solución - Diferenciadores únicos que contrastan con los pain points
 */
export const SolutionSection: React.FC<SolutionSectionProps> = ({
  title = "La Solución Que Realmente Funciona",
  uniqueValues = [
    {
      icon: "🤝",
      title: "Solo ganamos si tú ganas",
      description: "Compartimos el riesgo contigo. Esa es la base de una buena sociedad."
    },
    {
      icon: "📍", 
      title: "Somos locales, no un call center",
      description: "Nos encuentras cuando nos necesites. Sin intermediarios anónimos."
    },
    {
      icon: "🎯",
      title: "Más resultados, menos charlas",
      description: "Trabajamos con industrias que conocemos para garantizar resultados."
    }
  ],
  className = ""
}) => {
  return (
    <section 
      id="servicios" 
      className={`py-16 bg-green-50 ${className}`}
      aria-labelledby="solucion-heading"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título con narrativa positiva */}
        <div className="text-center mb-12">
          <h2 
            id="solucion-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un enfoque probado que elimina el riesgo y se enfoca en resultados reales para tu negocio.
          </p>
        </div>

        {/* Diferenciadores con el mismo estilo que otras secciones */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          role="list"
          aria-label="Lista de diferenciadores únicos"
        >
          {uniqueValues.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border-l-4 border-green-400 shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
            >
              <div className="text-center">
                <div 
                  className="text-4xl mb-4" 
                  aria-hidden="true"
                  role="img"
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-green-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mensaje de confianza */}
        <div className="bg-green-100 rounded-lg p-6 border border-green-200 text-center max-w-3xl mx-auto">
          <p className="text-lg text-green-900 font-bold mb-2">
            Así es como ayudamos a negocios como el tuyo a crecer.
          </p>
          <p className="text-base text-green-800">
            Sin promesas vacías, solo resultados medibles que puedes ver en tu cuenta bancaria.
          </p>
        </div>
      </div>
    </section>
  );
}
