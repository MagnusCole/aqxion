// sections/ServicesSection.tsx
"use client"

import React from 'react'

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  keyPoints?: string[];
  className?: string;
}

/**
 * Sección de Servicios de Marketing Digital
 * Destaca propuesta de valor principal
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Soluciones Personalizadas, Resultados Extraordinarios",
  subtitle = "No existen dos negocios iguales. Por eso, cada estrategia que desarrollamos es única, como tu negocio",
  keyPoints = [
    "Estrategias digitales adaptadas a tus objetivos específicos",
    "Enfoque en métricas y resultados medibles",
    "Optimización continua basada en datos reales",
    "Transparencia total en cada fase del proceso"
  ],
  className = ""
}) => {  
  return (
    <section id="servicios" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Puntos clave de valor */}
        <div className="max-w-4xl mx-auto my-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nuestra propuesta de valor
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 text-blue-600 font-bold text-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de personalización con más énfasis */}
        <div className="max-w-5xl mx-auto bg-blue-50 rounded-xl p-10 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Tu estrategia, tan única como tu negocio
          </h3>
          <p className="text-lg text-gray-700 text-center mb-4">
            Porque entendemos que cada negocio tiene sus propios desafíos, objetivos y audiencia, 
            desarrollamos una estrategia completamente personalizada que se alinea perfectamente con tu realidad.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Sin fórmulas genéricas. Sin soluciones preempaquetadas. Solo resultados reales para tu negocio único.
          </p>
        </div>

        {/* Call to Action mejorado */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-10 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Descubre tu estrategia personalizada
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            En una consulta gratuita de 30 minutos, analizaremos tu situación específica y diseñaremos un plan adaptado exclusivamente a tu negocio.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/luis-aqxion/30min', '_blank')}
            className="bg-white hover:bg-blue-50 text-blue-700 font-bold rounded-lg px-10 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Agenda tu estrategia personalizada gratuita →
          </button>
          <p className="text-blue-100 mt-4 text-sm">
            Sin compromisos. Sin fórmulas genéricas. 100% adaptado a tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
