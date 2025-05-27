// sections/PainPointSection.tsx
"use client"

import React from 'react'

export interface PainPointSectionProps {
  title?: string;
  subtitle?: string;
  painPoints?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  className?: string;
}

/**
 * Sección para Agitar el Dolor
 * Maximiza el pain point y elimina opciones insuficientes
 */
export const PainPointSection: React.FC<PainPointSectionProps> = ({  title = "¿Por Qué Estas Soluciones No Funcionan?",
  subtitle = "Mientras esperas el momento perfecto o pruebas soluciones baratas, tu competencia sigue robándote clientes...",
  painPoints = [    {
      icon: "❌",
      title: "Hacerlo tú mismo",
      description: "Suena fácil, pero el marketing digital requiere tiempo, conocimiento y experiencia que no tienes. Terminas frustrado y sin resultados."
    },
    {
      icon: "❌",
      title: "Contratar empleados internos",
      description: "Caro, arriesgado y lento. Necesitas meses para encontrar y entrenar a alguien, sin garantía de que sepa lo que hace."
    },
    {
      icon: "❌",
      title: "Agencias grandes y costosas",
      description: "Te prometen el mundo, pero eres solo un número más. Tu cuenta la maneja un becario y nunca hablas con quien realmente sabe."
    }
  ],
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-red-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            {subtitle}
          </p>
        </div>

        {/* Pain Points en Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-red-400 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="text-4xl mb-4 text-center">{point.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                {point.title}
              </h3>
              <p className="text-gray-700 text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Consecuencias */}
        <div className="max-w-3xl mx-auto bg-red-100 rounded-xl p-6 border border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-3 text-center">
            El costo real: $3,000-$8,000 USD perdidos cada mes
          </h3>
          <p className="text-base text-red-800 text-center">
            Cada cliente que no te encuentra es dinero que se va a tu competencia. 
            Si pierdes solo 10 clientes al mes ($300 promedio cada uno), son $36,000 USD anuales que no están llegando a tu negocio.
          </p>
          <p className="text-lg font-bold text-center mt-3">
            ¿Cuánto más puedes permitirte perder?
          </p>
        </div>
      </div>
    </section>
  );
}
