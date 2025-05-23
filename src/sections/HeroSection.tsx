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
 * Sección Hero - Rediseñada para mostrar el encabezado de la siguiente sección
 * Sigue principios de UX científicamente respaldados:
 * - Altura apropiada para permitir visibilidad de la siguiente sección
 * - Mensaje claro y conciso
 * - Un solo CTA prominente
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "¿Quieres crecer tu empresa?",
  subtitle = "Preservamos tu legado y escalamos tu negocio con más de $500M en transacciones exitosas.",
  ctaButton = { 
    label: "Agenda una consulta", 
    onClick: () => window.open('https://calendly.com/luis-aqxion/30min', '_blank')
  }
}) => {
  return (
    <section className="bg-gray-50 pt-28 pb-16 md:pt-32 md:pb-24 min-h-[75vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Encabezado principal - Siguiendo proporción áurea */}
        <div className="text-center mb-[1.618rem]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-[1.618rem] leading-[1.2]">
            {title}
          </h1>
          
          {/* Subtexto - Proporción áurea en relación con el título */}
          <p className="text-xl md:text-2xl text-gray-600 mx-auto mb-[2.618rem] leading-[1.5]">
            {subtitle}
          </p>
        </div>
        
        {/* Un único CTA centrado - Posicionado según regla de tercios */}
        <div className="text-center">
          <button
            onClick={ctaButton.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-4 text-lg transition-colors duration-300"
          >
            {ctaButton.label}
          </button>
        </div>
      </div>
    </section>
  );
}
