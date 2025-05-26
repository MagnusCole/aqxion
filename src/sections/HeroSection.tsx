// sections/HeroSection.tsx
"use client"

import React from 'react'

/**
 * Interfaces para parametrización de HeroSection
 */
export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Sección Hero - Marketing Digital para Negocios Locales
 * Sigue principios de UX científicamente respaldados:
 * - Headline efectivo que comunica beneficios claros
 * - Mensaje directo para dueños de negocios locales
 * - Un solo CTA prominente
 */
export const HeroSection: React.FC<HeroSectionProps> = ({  title = "De 5 Clientes por Mes a 50+ Clientes Garantizados",
  subtitle = "Ayudamos a dueños de negocios locales a multiplicar por 10 sus clientes usando marketing digital que realmente funciona. Sin contratos eternos, sin promesas vacías. Resultados garantizados en 90 días.",
  ctaButton = { 
    label: "Quiero 10x más clientes", 
    onClick: () => window.open('https://calendly.com/luis-aqxion/30min', '_blank')
  }
}) => {  return (
    <section className="bg-gradient-to-br from-blue-50 to-white pt-28 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Encabezado principal - Siguiendo proporción áurea */}
        <div className="text-center mb-[1.618rem]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-[1.618rem] leading-[1.1]">
            {title}
          </h1>
          
          {/* Subtexto - Proporción áurea en relación con el título */}
          <p className="text-xl md:text-2xl text-gray-600 mx-auto mb-[2.618rem] leading-[1.4] max-w-4xl">
            {subtitle}
          </p>
        </div>
        
        {/* Un único CTA centrado - Posicionado según regla de tercios */}
        <div className="text-center">
          <button
            onClick={ctaButton.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-10 py-5 text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {ctaButton.label}
          </button>
          <p className="text-gray-600 mt-4 text-sm">
            Consulta gratuita • Sin compromiso • Resultados garantizados
          </p>
        </div>
      </div>
    </section>
  );
}
