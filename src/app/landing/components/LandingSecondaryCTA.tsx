"use client";

import React from 'react';

export const LandingSecondaryCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Una conversación honesta para saber si<br />
          <span className="text-blue-200">podemos ayudarte.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
          30 minutos • Sin compromiso • 100% gratis
        </p>

        {/* CTA Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* Primary CTA - Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3">Opción 1: Formulario</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Te contactamos en menos de 24 horas con un análisis inicial de tu negocio
            </p>
            <button
              onClick={() => {
                document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('landing-form-name')?.focus();
              }}
              className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              ¡Hablemos! →
            </button>
          </div>

          {/* Secondary CTA - Direct Scheduling */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3">Opción 2: Directa</h3>
            <p className="text-blue-100 mb-4 text-sm">
              ¿Prefieres agendar una llamada directamente? Agenda tu consulta gratuita
            </p>
            <a
              href="https://calendly.com/aqxion/consulta-gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Agenda tu consulta gratuita →
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-100">Consulta inicial gratuita sin compromiso</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-100">Estrategia personalizada basada en tu negocio</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-100">Garantía de resultados o no cobramos</span>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8 bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-blue-100 text-lg">
            <strong>¿Prefieres agendar directamente?</strong>
          </p>
          <p className="text-blue-200 mt-2">
            Si ya tienes claro que quieres más clientes y estás listo para una conversación directa, 
            agenda tu consulta gratuita de 30 minutos. Sin rodeos, sin ventas agresivas.
          </p>
        </div>
      </div>
    </section>
  );
};
