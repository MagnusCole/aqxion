// sections/SolutionSection.tsx
"use client"

import React from 'react'

export interface SolutionSectionProps {
  title?: string;
  subtitle?: string;
  uniqueValues?: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  guaranteeText?: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * Sección de Nuestra Solución Única
 * Propuesta Única de Valor (PUV) diferenciadora
 */
export const SolutionSection: React.FC<SolutionSectionProps> = ({
  title = "¿Por Qué Elegirnos?",
  subtitle = "Nuestra misión es simple: Conseguir más clientes para tu negocio, con estrategias que realmente funcionan",
  uniqueValues = [
    {
      number: "1",
      title: "Garantía de resultados o no cobramos",
      description: "No ofrecemos promesas vacías. Te garantizamos más clientes o seguimos trabajando sin costo adicional hasta conseguirlo."
    },
    {
      number: "2", 
      title: "Somos locales y hablamos tu idioma",
      description: "Olvidate de chatbots y automáticos. Aquí hablas directamente con expertos que entienden tu mercado y responden en el mismo día."
    },
    {
      number: "3",
      title: "Estrategias efectivas, no solo bonitas",
      description: "No diseñamos campañas para ganar premios, sino para generar ventas reales. Medimos el éxito con tus ingresos, no con likes."
    },
    {
      number: "4",
      title: "Atención exclusiva y personalizada",
      description: "Limitamos nuestros clientes para garantizar atención de calidad. Tu proyecto nunca será delegado a practicantes o subcontratistas."
    },
    {
      number: "5",
      title: "Metodología probada y actualizada",
      description: "Aplicamos estrategias validadas en múltiples industrias y nos mantenemos al día con las últimas tendencias digitales que realmente generan resultados."
    },
    {
      number: "6",
      title: "Sin riesgo para tu inversión",
      description: "Asumimos el riesgo contigo: si no ves resultados tangibles, no pagas. Así de simple, así de transparente."
    }
  ],
  guaranteeText = "🛡️ Garantía de Satisfacción Total: Si en los primeros 90 días no ves un incremento real en tus clientes, seguimos trabajando sin costo adicional hasta que lo logres.",
  ctaButton = { 
    label: "Agenda tu consulta gratuita", 
    onClick: () => window.open('https://calendly.com/luis-aqxion/30min', '_blank')
  },
  className = ""
}) => {  
  return (
    <section id="servicios" className={`py-16 md:py-24 bg-blue-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-3xl mb-4">⭐</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Valores Únicos en Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uniqueValues.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="flex items-start space-x-4 mb-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {value.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 pt-1">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-700 text-base pl-14">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Servicios que ofrecemos */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 mb-12 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nuestros Servicios
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold text-gray-900 mb-1">Google Ads</h4>
              <p className="text-gray-600 text-sm">Campañas que convierten búsquedas en ventas</p>
            </div>
            <div className="p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-bold text-gray-900 mb-1">Redes Sociales</h4>
              <p className="text-gray-600 text-sm">Estrategias que conectan con tu audiencia ideal</p>
            </div>
            <div className="p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-gray-900 mb-1">SEO Local</h4>
              <p className="text-gray-600 text-sm">Más visibilidad en tu área de servicio</p>
            </div>
            <div className="p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-bold text-gray-900 mb-1">Sitios Web</h4>
              <p className="text-gray-600 text-sm">Diseño optimizado para convertir visitantes en clientes</p>
            </div>
          </div>
        </div>

        {/* Garantía */}
        <div className="max-w-3xl mx-auto bg-green-100 rounded-xl p-6 border border-green-300 mb-10">
          <div className="text-center">
            <p className="text-md md:text-lg text-green-800 font-medium">
              {guaranteeText}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={ctaButton.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaButton.label}
          </button>
          <p className="text-gray-600 mt-3 text-sm">
            Sin compromiso • Consulta de 30 minutos • Estrategia personalizada
          </p>
        </div>
      </div>
    </section>
  );
}
