// sections/PainPointSection.tsx
"use client"

import React from 'react'

export interface PainPointSectionProps {
  title?: string;
  painPoints?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  className?: string;
}

/**
 * Sección de Soluciones Fallidas - Continúa la narrativa del problema
 */
export const PainPointSection: React.FC<PainPointSectionProps> = ({
  title = "Has Intentado Esto... Y No Ha Funcionado",
  painPoints = [
    {
      icon: "❌",
      title: "Hacerlo tú mismo",
      description: "Requiere tiempo y conocimiento que no tienes. Terminas frustrado y sin resultados."
    },
    {
      icon: "❌",
      title: "Contratar empleados internos",
      description: "Caro y arriesgado. Meses buscando a alguien, sin garantía de que sepa lo que hace."
    },
    {
      icon: "❌",
      title: "Agencias grandes",
      description: "Eres solo un número más. Tu cuenta la maneja un practicante que cambia cada mes."
    }
  ],
  className = ""
}) => {
  return (
    <section 
      className={`py-16 bg-red-50 ${className}`}
      aria-labelledby="painpoint-heading"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título directo */}
        <div className="text-center mb-12">
          <h2 
            id="painpoint-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mientras sigues probando soluciones que no funcionan, tu competencia sigue creciendo.
          </p>
        </div>        {/* Soluciones fallidas */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          role="list"
          aria-label="Lista de soluciones que no funcionan"
        >
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-400 hover:shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
            >
              <div className="text-center">
                <div 
                  className="text-4xl mb-4" 
                  aria-hidden="true"
                  role="img"
                >
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-red-800 mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Realidad sin dramatizar */}
        <div className="bg-red-100 rounded-lg p-6 text-center max-w-3xl mx-auto">
          <p className="text-lg text-red-900 font-bold mb-2">
            El tiempo perdido en soluciones incorrectas es tiempo que no recuperas.
          </p>
          <p className="text-base text-red-800">
            ¿No es hora de probar algo que realmente funcione?
          </p>
        </div>
      </div>
    </section>
  );
}
