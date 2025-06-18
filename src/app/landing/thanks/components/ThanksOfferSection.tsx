"use client";

import React from 'react';

export const ThanksOfferSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Quieres <span className="text-blue-200">Acelerar</span> Tus Resultados?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            La guía te dará la base, pero una <strong>estrategia personalizada</strong><br />
            puede multiplicar tus resultados en la mitad del tiempo
          </p>
        </div>

        {/* Offer Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - What's Included */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Consulta Estratégica Gratuita de 30 Minutos
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Análisis gratuito de tu negocio</h4>
                  <p className="text-blue-200 text-sm">Identificamos exactamente qué está frenando tu crecimiento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Estrategia personalizada para tu industria</h4>
                  <p className="text-blue-200 text-sm">No teoría genérica, sino un plan específico para tu tipo de negocio</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Casos de éxito similares al tuyo</h4>
                  <p className="text-blue-200 text-sm">Te mostramos cómo otros negocios como el tuyo han crecido</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Plan de acción inmediato</h4>
                  <p className="text-blue-200 text-sm">Sales de la llamada sabiendo exactamente qué hacer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold mb-4">
                Agenda Tu Consulta Gratuita
              </h4>
              
              <p className="text-blue-100 mb-6">
                30 minutos • Sin compromiso • 100% gratis<br />
                <span className="text-sm">Agenda ahora y elige el horario que mejor te convenga</span>
              </p>
              
              <a
                href="https://calendly.com/aqxion/consulta-gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📅 Agendar Consulta Gratuita →
              </a>
              
              <p className="text-blue-200 text-sm mt-4">
                ⚡ Respuesta inmediata • No necesitas preparar nada
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Trust */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-blue-200">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Sin presión de ventas</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Estrategia personalizada</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Resultados reales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
