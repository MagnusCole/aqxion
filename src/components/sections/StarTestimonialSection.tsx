/**
 * StarTestimonialSection Optimized - CSS-only animations
 * Principle: Performance via static elements, minimal hover effects
 */
import React from 'react';

// Simple transformation data structure
interface SimpleTransformation {
  id: string;
  businessName: string;
  location: string;
  industry: string;
  owner: string;
  beforeClients: number;
  afterClients: number;
  beforeRevenue: number;
  afterRevenue: number;
  clientIncrease: number;
  timeFrame: string;
  quote: string;
}

// Simple testimonial data structure
interface SimpleTestimonial {
  id: string;
  customerName: string;
  businessName: string;
  location: string;
  rating: 5;
  review: string;
  date: string;
  industry: string;
  verified: boolean;
}

/**
 * Simplified MYPE transformation showcase data
 */
const transformations: SimpleTransformation[] = [
  {
    id: 'transformation-1',
    businessName: 'Panadería Doña Rosa',
    location: 'San Juan de Lurigancho, Lima',
    industry: 'Panadería y Repostería',
    owner: 'Rosa Mendoza',
    beforeClients: 45,
    afterClients: 180,
    beforeRevenue: 1200,
    afterRevenue: 4800,
    clientIncrease: 300,
    timeFrame: '2 meses',
    quote: 'MyPerú nos ayudó a llegar a más familias del barrio. Ahora tenemos pedidos hasta de otros distritos.',
  },
  {
    id: 'transformation-2', 
    businessName: 'Taller Mecánico El Águila',
    location: 'Villa El Salvador, Lima',
    industry: 'Servicios Automotrices',
    owner: 'Carlos Vega',
    beforeClients: 25,
    afterClients: 85,
    beforeRevenue: 2800,
    afterRevenue: 8500,
    clientIncrease: 240,
    timeFrame: '3 meses',
    quote: 'Pensé que internet no era para mecánicos, pero MyPerú me demostró lo contrario. Ahora los clientes me encuentran fácil.',
  }
];

/**
 * Featured testimonials data
 */
const featuredTestimonials: SimpleTestimonial[] = [
  {
    id: 'testimonial-1',
    customerName: 'Ana Huamán',
    businessName: 'Bordados Huamán',
    location: 'Cusco, Perú',
    rating: 5 as const,
    review: 'Increíble lo que logré con MyPerú. En solo 6 semanas pasé de tener 3-4 pedidos por mes a recibir más de 40 consultas. Mi negocio de bordados tradicionales ahora llega a todo el Perú.',
    date: '2024-02-15',
    industry: 'Textiles y Bordados',
    verified: true,
  }
];

/**
 * StarTestimonialSection Optimized Component
 * Performance-focused with CSS-only animations
 */
const StarTestimonialSectionOptimized: React.FC = () => {
  /**
   * Renders a transformation card with before/after stats
   */
  const renderTransformationCard = React.useCallback((transformation: SimpleTransformation, index: number) => (
    <div
      key={transformation.id}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Business Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {transformation.businessName}
        </h3>
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {transformation.location}
        </p>
      </div>

      {/* Success Metric */}
      <div className="bg-gradient-to-r from-peru-red to-peru-gold p-4 rounded-lg text-white text-center mb-4">
        <div className="text-2xl font-bold mb-1">
          +{transformation.clientIncrease}%
        </div>
        <div className="text-sm opacity-90">
          Más clientes en {transformation.timeFrame}
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Antes</div>
          <div className="text-sm font-semibold text-gray-700">
            {transformation.beforeClients} clientes/mes
          </div>
          <div className="text-xs text-gray-600">
            S/.{transformation.beforeRevenue}
          </div>
        </div>
        <div className="text-center p-3 bg-peru-green/5 rounded-lg border border-peru-green/20">
          <div className="text-xs text-peru-green uppercase tracking-wide mb-1">Después</div>
          <div className="text-sm font-semibold text-peru-green">
            {transformation.afterClients} clientes/mes
          </div>
          <div className="text-xs text-peru-green">
            S/.{transformation.afterRevenue}
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-gray-600 italic mb-4 border-l-3 border-peru-gold pl-3">
        "{transformation.quote}"
      </blockquote>

      {/* Owner Info */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-peru-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
          {transformation.owner.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{transformation.owner}</div>
          <div className="text-xs text-gray-500">{transformation.industry}</div>
        </div>
      </div>
    </div>
  ), []);

  /**
   * Renders success statistics
   */
  const renderStats = React.useCallback(() => (
    <div className="bg-gradient-to-br from-peru-red via-peru-gold to-peru-green p-8 rounded-2xl text-white relative overflow-hidden">
      {/* Static background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute top-12 right-8 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-8 left-12 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 text-center">
          Resultados que Transforman Vidas
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">+300%</div>
            <div className="text-sm opacity-90">Aumento Promedio de Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2-3</div>
            <div className="text-sm opacity-90">Meses para Ver Resultados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-sm opacity-90">Satisfacción de Clientes</div>
          </div>
        </div>
      </div>
    </div>
  ), []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Static floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-peru-gold rounded-full opacity-20"></div>
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-peru-red rounded-full opacity-15"></div>
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-peru-green rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-[25%] w-1.5 h-1.5 bg-peru-gold rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Historias de <span className="text-peru-red">Éxito Real</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce cómo estas MYPEs peruanas transformaron sus negocios y multiplicaron sus ventas
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {transformations.map((transformation, index) => 
            renderTransformationCard(transformation, index)
          )}
        </div>

        {/* Success Stats */}
        <div className="mb-16">
          {renderStats()}
        </div>

        {/* Featured Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Lo que Dicen Nuestros Clientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-peru-red text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {testimonial.customerName.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-peru-gold fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                      {testimonial.verified && (
                        <span className="ml-2 text-xs bg-peru-green text-white px-2 py-1 rounded-full">
                          Verificado
                        </span>
                      )}
                    </div>
                    
                    {/* Review */}
                    <blockquote className="text-gray-700 mb-3 leading-relaxed">
                      "{testimonial.review}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.customerName}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.businessName} • {testimonial.location}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {testimonial.industry} • {new Date(testimonial.date).toLocaleDateString('es-PE')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a cientos de MYPEs que ya están creciendo con MyPerú
            </p>
            <button className="bg-peru-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-peru-red/90 transition-colors duration-200">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(StarTestimonialSectionOptimized);
