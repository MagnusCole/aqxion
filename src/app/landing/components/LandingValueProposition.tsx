"use client";

import React from 'react';

export const LandingValueProposition: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qué Incluye Tu Guía Gratuita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            23 páginas de estrategias comprobadas, sin relleno.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Especialización */}
          <div className="text-center group">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-pink-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>              <h3 className="text-xl font-bold text-gray-900 mb-4">Configuración Paso a Paso</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Capturas de pantalla reales</strong> de cómo configurar tus campañas. 
                Incluso si nunca has usado Meta Ads antes.
              </p>
            </div>
          </div>

          {/* Resultados */}
          <div className="text-center group">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>              <h3 className="text-xl font-bold text-gray-900 mb-4">Casos Reales de Éxito</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>5 estudios de caso detallados</strong> de negocios locales que multiplicaron 
                sus clientes usando exactamente estas estrategias.
              </p>
            </div>
          </div>

          {/* Garantía */}
          <div className="text-center group">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>              <h3 className="text-xl font-bold text-gray-900 mb-4">Plantillas Listas</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>7 plantillas de anuncios</strong> que han generado miles de leads. 
                Solo copia, pega y personaliza para tu negocio.
              </p>
            </div>
          </div>
        </div>        {/* Bottom CTA */}
        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Todo esto, completamente gratis.
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Sin trucos, sin ventas agresivas. Solo información valiosa que funciona.
          </p>
          <button
            aria-label="Descargar guía gratuita de automatización"
            onClick={() => {
              document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth' });
              document.getElementById('landing-form-name')?.focus();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            📚 Quiero Mi Guía Gratis →
          </button>
        </div>
      </div>
    </section>
  );
};
