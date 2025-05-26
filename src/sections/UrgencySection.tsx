// sections/UrgencySection.tsx
"use client"

import React from 'react'

export interface UrgencySectionProps {
  title?: string;
  subtitle?: string;
  urgencyReasons?: Array<{
    icon: string;
    text: string;
  }>;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  limitedOffer?: string;
  className?: string;
}

/**
 * Sección de Urgencia
 * Crea un sentido de urgencia para la acción inmediata
 */
export const UrgencySection: React.FC<UrgencySectionProps> = ({
  title = "No Esperes Más: Tu Competencia Ya Empezó",
  subtitle = "Cada día que pases sin marketing digital es dinero directo a sus bolsillos",
  urgencyReasons = [
    {
      icon: "⏰",
      text: "Solo trabajamos con 10 clientes por mes para garantizar calidad"
    },
    {
      icon: "📈",
      text: "Los precios del marketing digital suben 15% cada año"
    },
    {
      icon: "🏆",
      text: "Tu competencia ya está invirtiendo en marketing digital"
    },
    {
      icon: "💰",
      text: "Cada mes sin marketing digital = $5,000+ USD perdidos"
    }
  ],
  ctaButton = { 
    label: "Agenda tu consulta AHORA", 
    onClick: () => window.open('https://calendly.com/luis-aqxion/30min', '_blank')
  },
  limitedOffer = "OFERTA LIMITADA: Solo para los próximos 5 clientes - Consulta estratégica gratuita + Audit completo sin costo",
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95">
            {subtitle}
          </p>
        </div>

        {/* Razones de Urgencia */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {urgencyReasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4 bg-red-800 bg-opacity-50 rounded-lg p-6">
              <div className="text-3xl flex-shrink-0">{reason.icon}</div>
              <p className="text-lg leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>

        {/* Oferta Limitada */}
        <div className="bg-yellow-400 text-gray-900 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🔥 {limitedOffer}
            </h3>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <button
            onClick={ctaButton.onClick}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-lg px-12 py-6 text-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-4"
          >
            {ctaButton.label}
          </button>
          <p className="text-lg opacity-90">
            ⚡ Respuesta en menos de 2 horas • 📞 Llamada en las próximas 24h
          </p>
          <p className="text-sm opacity-75 mt-2">
            Sin spam, sin presión. Solo una conversación honesta sobre tu negocio.
          </p>
        </div>

        {/* Contador visual (estático) */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-black bg-opacity-30 rounded-lg px-6 py-3">
            <span className="text-sm opacity-90">Lugares disponibles este mes:</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-sm font-bold">3 de 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
