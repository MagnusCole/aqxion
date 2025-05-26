// sections/ServicesSection.tsx
"use client"

import React from 'react'

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Array<{
    icon: string;
    title: string;
    description: string;
    benefits: string[];
  }>;
  className?: string;
}

/**
 * Sección de Servicios de Marketing Digital
 * Detalla qué servicios específicos ofrecemos
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Soluciones Personalizadas, Resultados Extraordinarios",
  subtitle = "No existen dos negocios iguales. Por eso, cada estrategia que desarrollamos es única, como tu negocio",
  services = [
    {
      icon: "🎯",
      title: "Google Ads que Convierten",
      description: "Campañas meticulosamente diseñadas que aparecen exactamente cuando tus clientes ideales te buscan",
      benefits: [
        "Geolocalización precisa de tu audiencia local",
        "Palabras clave con alta intención de compra",
        "Optimización continua para maximizar cada peso invertido"
      ]
    },
    {
      icon: "📱",
      title: "Redes Sociales con Propósito",
      description: "No más publicaciones al azar. Creamos contenido estratégico que transforma seguidores en clientes leales",
      benefits: [
        "Narrativa auténtica adaptada a tu audiencia local",
        "Sistema probado de publicación y engagement",
        "Gestión proactiva de reputación y conexión comunitaria"
      ]
    },
    {
      icon: "🌐",
      title: "Ecosistema Digital Completo",
      description: "Construimos una presencia digital coherente y profesional que trabaja 24/7 para conseguirte clientes",
      benefits: [
        "Google My Business optimizado para dominar búsquedas locales",
        "Sitio web enfocado en conversión, no solo en estética",
        "SEO local para superar consistentemente a tu competencia"
      ]
    },
    {
      icon: "📈",
      title: "Resultados Transparentes y Medibles",
      description: "Sin humo ni espejos. Verás exactamente qué está funcionando y cómo impacta en tu negocio",
      benefits: [
        "Dashboards personalizados que realmente entenderás",
        "Medición clara del retorno de inversión (ROI)",
        "Optimización continua basada en datos reales"
      ]
    }
  ],
  className = ""
}) => {  
  return (
    <section id="servicios" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-4xl mb-6">✨</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-1 group">
              <div className="inline-block text-5xl p-4 bg-blue-100 rounded-2xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {service.description}
              </p>
              
              {/* Beneficios */}
              <ul className="space-y-4">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <div className="mr-3 text-green-500 font-bold text-xl flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sección de personalización */}
        <div className="max-w-5xl mx-auto text-center mt-16 mb-12">
          <h3 className="text-2xl font-bold text-gray-800">
            Tu estrategia, tan única como tu negocio
          </h3>
          <p className="mt-4 text-gray-600">
            Porque entendemos que cada negocio tiene sus propios desafíos, objetivos y audiencia, 
            desarrollamos una estrategia completamente personalizada que se alinea perfectamente con tu realidad.
          </p>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-10 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Descubre tu estrategia personalizada
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            En una consulta gratuita de 30 minutos, analizaremos tu situación específica y diseñaremos un plan adaptado exclusivamente a tu negocio.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/luis-aqxion/30min', '_blank')}
            className="bg-white hover:bg-blue-50 text-blue-700 font-bold rounded-lg px-10 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Agenda tu estrategia personalizada gratuita →
          </button>
          <p className="text-blue-100 mt-4 text-sm">
            Sin compromisos. Sin fórmulas genéricas. 100% adaptado a tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
