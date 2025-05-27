// sections/ProblemSection.tsx
"use client"

import React from 'react'

export interface ProblemSectionProps {
  title?: string;
  problems?: Array<{
    icon: string;
    title: string;
  }>;
  className?: string;
}

/**
 * Sección de Problemas - Narrativa directa que conecta emocionalmente
 */
export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title = "Tu Negocio Está Perdiendo Clientes Ahora Mismo",
  problems = [
    {
      icon: "📱",
      title: "Los clientes no te encuentran online"
    },
    {
      icon: "💸",
      title: "Tu marketing no genera resultados"
    },
    {
      icon: "⏰",
      title: "No tienes tiempo para promocionarte"
    },
    {
      icon: "🎯",
      title: "No sabes qué realmente funciona"
    }
  ],
  className = ""
}) => {  return (
    <section 
      id="problema" 
      className={`py-16 bg-orange-50 ${className}`}
      aria-labelledby="problema-heading"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título con hook emocional */}
        <div className="text-center mb-12">
          <h2 
            id="problema-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mientras lees esto, clientes potenciales están buscando tus servicios... pero encuentran a tu competencia.
          </p>
        </div>

        {/* Grid de Problemas */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          role="list"
          aria-label="Lista de problemas comunes"
        >
          {problems.map((problem, index) => (            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="text-4xl flex-shrink-0" 
                  aria-hidden="true"
                  role="img"
                >
                  {problem.icon}
                </div>
                <p className="text-lg text-gray-900 font-semibold leading-tight">
                  {problem.title}
                </p>
              </div>
            </div>
          ))}
        </div>
          {/* Impacto emocional */}
        <div className="bg-orange-100 rounded-lg p-6 border border-orange-200 text-center max-w-3xl mx-auto">
          <p className="text-lg text-orange-900 font-bold mb-2">
            Cada día que pasa sin actuar, pierdes dinero.
          </p>
          <p className="text-base text-orange-800">
            ¿Cuántos clientes más vas a dejar que se vayan a la competencia?
          </p>
        </div>
      </div>
    </section>
  );
}
