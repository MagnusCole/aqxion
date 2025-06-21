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
 * Sigue la fórmula PAS (Problem-Agitate-Solve):
 * - Identifica el problema (pérdida de clientes)
 * - Mensaje directo y simple sin promesas exageradas
 * - Un solo CTA claro y efectivo
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "¿Quieres más clientes?",
  subtitle = "Usamos marketing directo que simplemente funciona.",
  ctaButton = {
    label: "¡Sí, Quiero Más Clientes!",
    onClick: () => window.location.href = '/contacto'
  }
}) => {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-40 pb-28 md:pt-48 md:pb-36 min-h-[90vh] flex flex-col justify-center">
      <div className="container mx-auto px-8 max-w-5xl">
        {/* Encabezado principal - Siguiendo proporción áurea */}
        <div className="text-center mb-16">          
          <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium mb-6 animate-fade-in">
            Dueño de negocio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 leading-[1.2]">
            {title}
          </h1>
          
          {/* Subtexto - Proporción áurea en relación con el título */}
          <p className="text-xl md:text-2xl text-gray-600 mx-auto mb-16 leading-relaxed max-w-2xl font-light">
            {subtitle}
          </p>
        </div>
        
        {/* Un único CTA centrado - Posicionado según regla de tercios */}
        <div className="text-center mt-4">
          <button
            onClick={ctaButton.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-14 py-7 text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:translate-y-[-2px]"
          >
            {ctaButton.label}
          </button>
        </div>
      </div>
    </section>
  );
}
