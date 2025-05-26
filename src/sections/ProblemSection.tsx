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
export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title = "Tu negocio merece ser encontrado, no ignorado",
  subtitle = "Cada día, clientes potenciales buscan exactamente lo que ofreces... pero terminan con tu competencia",
  problems = [
    {
      icon: "📱",
      title: "Te están buscando, pero no te encuentran",
      description: "Mientras tu competencia aparece en los primeros resultados, tu negocio queda enterrado en la página 3 de Google donde nadie llega."
    },
    {
      icon: "💸",
      title: "Inversión sin retorno real",
      description: "Gastas en publicidad que parece funcionar pero no convierte. Cada clic cuesta dinero, pero los clientes reales no llegan."
    },
    {
      icon: "⏰",
      title: "Tu tiempo vale oro, pero lo desperdicias",
      description: "Entre administrar tu negocio y tratar de entender el marketing digital, te quedas sin horas en el día y sin energía para crecer."
    },
    {
      icon: "🎯",
      title: "Navegando a ciegas, sin dirección clara",
      description: "Pruebas diferentes tácticas sin estrategia, esperando resultados diferentes pero obteniendo la misma frustración cada mes."
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
