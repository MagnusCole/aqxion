// sections/CTASection.tsx
"use client"

import React from 'react'

export interface CTASectionProps {
  title?: string;
  description?: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * Sección CTA - Call to Action prominente de ancho completo
 * Diseñada para maximizar conversiones al final del flujo
 */
export const CTASection: React.FC<CTASectionProps> = ({
  title = "Consultoría de Marketing Gratuita",
  description = "30 minutos para analizar tu situación actual y diseñar una estrategia que funcione.",
  ctaButton = { 
    label: "¡Quiero mi consultoría!", 
    onClick: () => window.location.href = '/contacto'
  },
  className = ""
}) => {
  return (
    <section 
      className={`py-20 bg-blue-600 ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            {description}
          </p>
          <button
            onClick={ctaButton.onClick}
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg px-10 py-5 text-xl transition-colors shadow-lg hover:shadow-xl"
            aria-label="Solicitar consultoría gratuita"
          >
            {ctaButton.label}
          </button>
          <p className="text-blue-200 mt-6 text-lg">
            Sin compromiso • Respuesta en 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
