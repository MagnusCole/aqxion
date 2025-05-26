// sections/TestimonialsSection.tsx
"use client"

import React from 'react'

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Array<{
    name: string;
    business: string;
    location: string;
    testimonial: string;
    result: string;
    avatar?: string;
  }>;
  className?: string;
}

/**
 * Sección de Testimonios
 * Casos de éxito reales que generan confianza
 */
export const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title = "Nuestros Clientes Hablan por Nosotros",
  subtitle = "Resultados reales de negocios locales que confiaron en nosotros",
  testimonials = [
    {
      name: "María González",
      business: "Clínica Dental Sonrisas",
      location: "Monterrey, México",
      testimonial: "Antes teníamos que depender del boca a boca. Ahora tenemos una agenda llena por 3 semanas gracias a las campañas de Google Ads. Lo mejor es que solo pagamos por clientes reales que llegan.",
      result: "+180% incremento en citas nuevas"
    },
    {
      name: "Carlos Ramírez",
      business: "Taller Mecánico El Experto",
      location: "Guadalajara, México",
      testimonial: "En 2 meses ya recuperé toda la inversión. Ahora aparezco primero cuando alguien busca 'taller mecánico cerca de mí'. Mi teléfono no para de sonar con clientes nuevos.",
      result: "ROI del 320% en 60 días"
    },
    {
      name: "Ana Martínez",
      business: "Salón de Belleza Glamour",
      location: "Ciudad de México",
      testimonial: "Lo que más me gustó es que me explican todo en palabras simples. No necesito entender de marketing, ellos se encargan de todo y yo solo veo llegar más clientas cada semana.",
      result: "+65% nuevas clientas mensuales"
    }
  ],
  className = ""
}) => {  return (
    <section id="testimonios" className={`py-16 md:py-24 bg-gray-50 ${className}`}>
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

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              {/* Resultado destacado */}
              <div className="bg-green-100 text-green-800 font-bold text-sm px-4 py-2 rounded-lg inline-block mb-6">
                {testimonial.result}
              </div>
              
              {/* Testimonial */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.testimonial}&rdquo;
              </blockquote>
              
              {/* Cliente */}
              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonial.business}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Agenda tu consulta gratuita y descubre cómo podemos hacer crecer tu negocio
            </p>
            <button
              onClick={() => window.open('https://calendly.com/luis-aqxion/30min', '_blank')}
              className="bg-white text-blue-600 font-bold rounded-lg px-8 py-4 text-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Agenda tu consulta ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
