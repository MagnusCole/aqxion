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
  title = "La Solución Que Realmente Funciona",  uniqueValues = [
    {
      icon: "🎯",
      title: "Especializados por sector",
      description: "Conocemos tu industria y sus desafíos específicos. No improvisamos."
    },
    {
      icon: "📊", 
      title: "Resultados medibles",
      description: "Datos claros y métricas reales. Sin informes confusos ni promesas vacías."
    },
    {
      icon: "📍",
      title: "100% locales",
      description: "Estamos cerca. Nos encuentras cuando nos necesitas, sin intermediarios."
    },
    {
      icon: "🛡️",
      title: "Garantía completa",
      description: "Si no estás satisfecho, no pagas. Asumimos el riesgo por ti."
    }
  ],
  className = ""
})=> {  return (    <section 
      id="servicios" 
      className={`py-12 bg-gray-50 ${className}`}
      aria-labelledby="solucion-heading"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título con narrativa positiva */}
        <div className="text-center mb-10">
          <h2 
            id="solucion-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight"
          >
            {title}
          </h2>          
        </div>        {/* Diferenciadores con el mismo estilo que otras secciones */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          role="list"
          aria-label="Lista de diferenciadores únicos"
        >
          {uniqueValues.map((value, index) => (            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border-l-4 border-blue-400 shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
            >
              <div className="text-center">                <div 
                  className="text-4xl mb-4" 
                  aria-hidden="true"
                  role="img"
                >
                  {value.icon}
                </div>                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  {value.title}
                </h3>                <p className="text-sm text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
          {/* Mensaje de confianza */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-900 font-bold mb-2">
            Así es como ayudamos a negocios como el tuyo a crecer.
          </p>
          <p className="text-base text-gray-700">
            Sin promesas vacías, solo resultados medibles que puedes ver en tu cuenta bancaria.
          </p>
        </div>
      </div>
    </section>
  );
}
