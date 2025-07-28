'use client';

import React from 'react';
import { Check, ArrowRight, Shield, Clock, Users } from 'lucide-react';

interface OfferSectionProps {
  className?: string;
  ariaLabel?: string;
}

export const OfferSection: React.FC<OfferSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Oferta especial AQXION'
}) => {
  return (
    <section 
      id="oferta" 
      className={`py-8 sm:py-12 lg:py-16 relative overflow-hidden ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight animate-in slide-in-from-bottom duration-700">
            El futuro de tu <span className="text-peru-red font-medium">MYPE</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
            Compara las opciones y elige el camino que te lleve 
            <span className="font-medium text-peru-red"> a más clientes.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16 animate-in slide-in-from-bottom duration-700 delay-300">
          {/* Plan Traditional */}
          <div className="relative bg-white rounded-xl border border-gray-200 p-6 lg:p-8 opacity-75">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              Método de Antes
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Marketing Tradicional</h3>
              <p className="text-gray-600 mb-4">Lo que has estado haciendo</p>
              <div className="text-3xl font-bold text-gray-900">Costo alto</div>
            </div>
            <ul className="space-y-3 mb-8">
              {['Letrero en la tienda', 'Solo boca a boca', 'Esperar que lleguen', 'Resultados limitados'].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button disabled className="w-full py-4 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed">
              Método Actual
            </button>
          </div>

          {/* Plan AQXION - Recommended */}
          <div className="relative bg-white rounded-xl border-2 border-peru-red p-6 lg:p-8 shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-peru-red text-white px-4 py-2 rounded-full text-sm font-bold">
              LA MEJOR OPCIÓN
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sistema AQXION</h3>
              <p className="text-gray-600 mb-4">Marketing digital que sí funciona</p>
              <div className="text-3xl font-bold text-peru-red">Consulta gratis</div>
              <div className="text-sm text-gray-600 mt-1">Solicita tu cotización</div>
            </div>
            <ul className="space-y-3 mb-8">
              {['Tu negocio en internet', 'Clientes te encuentran 24/7', 'Vendes mientras duermes', 'Crecimiento garantizado'].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-peru-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-900">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-peru-red text-white rounded-lg font-semibold hover:bg-peru-red/90 transition-colors">
              Consultar Precio
              <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Plan DIY */}
          <div className="relative bg-white rounded-xl border border-gray-200 p-6 lg:p-8 opacity-75">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              Hágalo Usted
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Hazlo Tú Mismo</h3>
              <p className="text-gray-600 mb-4">Aprender todo por tu cuenta</p>
              <div className="text-3xl font-bold text-gray-900">Tu tiempo</div>
            </div>
            <ul className="space-y-3 mb-8">
              {['Aprender diseño web', 'Estudiar marketing digital', 'Invertir 6-12 meses', 'Sin garantías de resultados'].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button disabled className="w-full py-4 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed">
              Intentar Solo
            </button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-peru-red/5 border border-peru-red/20 p-6 lg:p-8 rounded-xl animate-in slide-in-from-bottom duration-700 delay-500">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
              Nuestro compromiso contigo es de por vida
            </h3>
            <p className="text-lg text-gray-600">
              No solo creamos tu presencia digital, crecemos juntos hasta que logres el éxito que buscas
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-peru-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-peru-red" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Garantía de por vida</h4>
              <p className="text-gray-600">Trabajamos contigo hasta que veas resultados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-peru-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-peru-red" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Paso a paso contigo</h4>
              <p className="text-gray-600">Vamos a tu ritmo, implementamos todo juntos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-peru-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-peru-red" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Siempre te ayudamos</h4>
              <p className="text-gray-600">Te acompañamos durante todo el crecimiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OfferSection.displayName = 'OfferSection';
