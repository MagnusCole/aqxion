"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

export const LandingHeroSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    email: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  // Track form view for analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tracking = window.landingPageTracking;
      if (tracking?.trackFormView) {
        tracking.trackFormView();
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {      // Track conversion
      if (typeof window !== 'undefined') {
        const tracking = window.landingPageTracking;
        if (tracking?.trackFormSubmit) {
          tracking.trackFormSubmit();
        }
      }

      await fetch('https://script.google.com/macros/s/AKfycbxBodHwv1UcOuPN4_dGo3G9JF9Sg-vuSseSYCTP4Pfcc_cEEWFiI3GsHkD6A31DqIM/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          business: formState.business,
          email: formState.email,
          phone: formState.phone,
          source: 'landing_page',
          message: `Lead desde Landing Page - Negocio: ${formState.business}`
        })
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Hero Content */}
          <div className="order-2 lg:order-1">
            {/* Problem + Solution Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-600">¿Tu Negocio No Encuentra</span><br />
              <span className="text-blue-600">Clientes Online?</span>
            </h1>

            {/* Specific Result + Timeframe */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Marketing directo que <strong>simplemente funciona</strong>.<br />
              <span className="text-blue-600 font-semibold">Más clientes en 30 días</span> o seguimos trabajando gratis.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Consulta gratuita sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Estrategia personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Garantía de resultados</span>
              </div>
            </div>

            {/* 90 Days Guarantee - Prominent */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-blue-800 font-semibold">
                    🛡️ <strong>Garantía de Satisfacción Total</strong>
                  </p>
                  <p className="text-blue-700 text-sm">
                    Si en los primeros 90 días no ves un incremento real en tus clientes, seguimos trabajando sin costo adicional hasta que lo logres.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Lead Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-100">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Perfecto!</h3>
                  <p className="text-gray-700 mb-6">
                    Nuestro equipo se pondrá en contacto contigo en menos de 24 horas con una estrategia personalizada.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-left">
                    <h4 className="font-semibold text-blue-900 mb-2">Qué sigue:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>📞 Te llamamos en las próximas 24 horas</li>
                      <li>📊 Análisis gratuito de tu negocio</li>
                      <li>🎯 Estrategia personalizada</li>
                      <li>🚀 Plan de acción inmediato</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  {/* Form Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Respuesta Rápida Garantizada
                    </h3>
                    <p className="text-gray-600">
                      Nuestro equipo se pondrá en contacto contigo en menos de 24 horas con una estrategia personalizada.
                    </p>
                  </div>

                  {/* Form */}
                  <form id="landing-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="landing-form-name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tu nombre completo*
                      </label>
                      <input
                        type="text"
                        id="landing-form-name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre de tu negocio*
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formState.business}
                        onChange={handleChange}
                        required
                        placeholder="Tu Negocio Local"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Teléfono*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="(123) 456-7890"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    </div>

                    {/* Primary CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        '🚀 Quiero Multiplicar Mis Clientes →'
                      )}
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-500 text-center">
                      Al enviar, aceptas nuestra{' '}
                      <a href="/terminos-privacidad" className="text-blue-600 hover:underline">
                        política de privacidad
                      </a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
