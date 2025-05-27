// sections/SolutionSection.tsx
"use client"

import React from 'react'

export interface SolutionSectionProps {
  title?: string;
  subtitle?: string;
  uniqueValues?: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  guaranteeText?: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * Sección de Nuestra Solución Única
 * Propuesta Única de Valor (PUV) diferenciadora
 */
export const SolutionSection: React.FC<SolutionSectionProps> = ({  title = "¿Qué Nos Hace Diferentes?",
  subtitle = "Te ayudamos a conseguir más clientes para tu negocio local de forma confiable y sin complicaciones",
  uniqueValues = [
    {
      number: "1",
      title: "Trabajo enfocado en resultados",
      description: "No te cobramos por likes o seguidores. Solo nos importa que consigas más clientes reales que paguen por tus servicios."
    },
    {
      number: "2", 
      title: "Comunicación directa y clara",
      description: "Hablas directamente con nosotros, no con chatbots o asistentes. Respuestas rápidas y comunicación transparente."
    },
    {
      number: "3",
      title: "Estrategias probadas que funcionan",
      description: "Usamos métodos que ya han funcionado para otros negocios como el tuyo. Nada experimental con tu dinero."
    }
  ],  guaranteeText = "Consulta gratuita de 30 minutos para analizar tu situación y ver cómo podemos ayudarte",
  ctaButton = { 
    label: "Agenda tu consulta gratuita", 
    onClick: () => window.open('https://calendly.com/luis-aqxion/30min', '_blank')
  },
  className = ""
}) => {  
  return (
    <section id="servicios" className={`py-16 md:py-24 bg-blue-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-3xl mb-4">⭐</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Valores Únicos en Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uniqueValues.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="flex items-start space-x-4 mb-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {value.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 pt-1">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-700 text-base pl-14">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        {/* Garantía */}
        <div className="max-w-3xl mx-auto bg-green-100 rounded-xl p-6 border border-green-300 mb-10">
          <div className="text-center">
            <p className="text-md md:text-lg text-green-800 font-medium">
              {guaranteeText}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={ctaButton.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaButton.label}
          </button>
          <p className="text-gray-600 mt-3 text-sm">
            Sin compromiso • Consulta de 30 minutos • Estrategia personalizada
          </p>
        </div>
      </div>
    </section>
  );
}
