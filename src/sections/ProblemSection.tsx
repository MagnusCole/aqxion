// sections/ProblemSection.tsx
"use client"

import React from 'react'

export interface ProblemSectionProps {
  title?: string;
  subtitle?: string;
  problems?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  className?: string;
}

/**
 * Sección de Identificación del Problema
 * Enfocada en dueños de negocios locales y sus desafíos con marketing digital
 */
export const ProblemSection: React.FC<ProblemSectionProps> = ({  title = "¿Te Está Pasando Esto?",
  subtitle = "Si eres dueño de un negocio local, probablemente enfrentas uno o más de estos problemas...",
  problems = [    {
      icon: "📱",
      title: "Los clientes no te encuentran online",
      description: "Tu negocio existe, pero cuando la gente busca tus servicios en Google, aparece tu competencia."
    },
    {
      icon: "💸",
      title: "Gastas en marketing sin ver resultados",
      description: "Inviertes en publicidad, redes sociales o volantes, pero no ves un retorno claro en tu inversión."
    },
    {
      icon: "⏰",
      title: "No tienes tiempo para el marketing",
      description: "Entre atender clientes y manejar tu negocio, no te queda tiempo para promocionarte efectivamente."
    },
    {
      icon: "🎯",
      title: "No sabes qué funciona realmente",
      description: "Pruebas diferentes cosas, pero no tienes claridad sobre qué estrategias te traerán más clientes."
    }
  ],
  className = ""
}) => {
  return (
    <section id="problema" className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid de Problemas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mensaje de Resonancia */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-gray-800 font-medium">
            Cada día que pasa sin resolver estos problemas, estás perdiendo clientes que ya te están buscando.
          </p>
          <p className="text-lg text-gray-800 font-bold mt-3">
            La pregunta no es si puedes permitirte una solución... es si puedes permitirte seguir perdiendo clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
