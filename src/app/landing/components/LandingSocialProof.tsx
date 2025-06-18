import React from 'react';

export const LandingSocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-gray-600">
            Estos son algunos de nuestros clientes que han multiplicado su facturación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">R</span>
                </div>
              </div>
              <div className="flex-1">                <blockquote className="text-gray-700 mb-4 italic">
                  &ldquo;En 45 días pasamos de 2-3 clientes por semana a 15-20 clientes nuevos. 
                  El teléfono no para de sonar y tuvimos que contratar más personal.&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Roberto Martínez</p>
                  <p className="text-gray-600 text-sm">Propietario, Taller Mecánico</p>
                  <p className="text-blue-600 font-semibold text-sm mt-1">
                    +600% incremento en clientes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-green-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">M</span>
                </div>
              </div>
              <div className="flex-1">                <blockquote className="text-gray-700 mb-4 italic">
                  &ldquo;Mi clínica dental estaba vacía los martes y miércoles. Ahora tengo lista de espera 
                  y facturé 40% más este trimestre comparado con el año pasado.&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Dra. María González</p>
                  <p className="text-gray-600 text-sm">Clínica Dental</p>
                  <p className="text-green-600 font-semibold text-sm mt-1">
                    +40% incremento en facturación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-gray-700 font-medium">de nuestros clientes ven resultados en los primeros 30 días</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700 font-medium">industrias locales donde hemos probado que funciona</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">garantía de satisfacción o seguimos trabajando gratis</p>
            </div>
          </div>
        </div>

        {/* Business Types */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Especialistas en:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Restaurantes',
              'Clínicas Dentales',
              'Talleres Mecánicos',
              'Salones de Belleza',
              'Consultorios Médicos',
              'Gimnasios',
              'Veterinarias',
              'Servicios de Limpieza'
            ].map((business, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
              >
                {business}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
