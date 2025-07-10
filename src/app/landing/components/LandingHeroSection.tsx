"use client";

import React, { useState, useEffect } from 'react';
import { googleSheetsService, trackFormSubmission } from '@/lib/googleSheets';

export const LandingHeroSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    businessType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track form view for analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tracking = window.landingPageTracking;
      if (tracking?.trackFormView) {
        tracking.trackFormView();
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track conversion with existing analytics
      if (typeof window !== 'undefined') {
        const tracking = window.landingPageTracking;
        if (tracking?.trackFormSubmit) {
          tracking.trackFormSubmit();
        }
      }

      const result = await googleSheetsService.submitLandingPageLead({
        name: formState.name,
        email: formState.email,
        business: formState.businessType,
        leadMagnet: 'Guía Meta Ads'
      });

      if (result.success) {
        // Tracking de evento exitoso
        trackFormSubmission('landing-page', true, {
          business_type: formState.businessType,
          lead_magnet: 'Meta Ads Guide'
        });

        // Redirect to thank you page
        window.location.href = '/landing/thanks';
      } else {
        throw new Error(result.error || 'Error al procesar tu solicitud');
      }
    } catch (error) {
      // Tracking de evento fallido
      trackFormSubmission('landing-page', false, {
        error_message: error instanceof Error ? error.message : 'Error desconocido',
        business_type: formState.businessType
      });

      // Development only - remove in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Error:', error);
      }
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = [
    { value: '', label: 'Selecciona tu tipo de negocio' },
    { value: 'restaurante', label: 'Restaurante' },
    { value: 'clinica-dental', label: 'Clínica Dental' },
    { value: 'taller-mecanico', label: 'Taller Mecánico' },
    { value: 'salon-belleza', label: 'Salón de Belleza' },
    { value: 'consultorio-medico', label: 'Consultorio Médico' },
    { value: 'gimnasio', label: 'Gimnasio' },
    { value: 'veterinaria', label: 'Veterinaria' },
    { value: 'servicios-limpieza', label: 'Servicios de Limpieza' },
    { value: 'otro', label: 'Otro' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Hero Content */}
          <div className="order-2 lg:order-1">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="ml-3 text-xl font-bold">AQXION.com</span>
            </div>

            {/* Problem + Solution Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Guía Gratuita:</span><br />
              <span className="text-gray-900">Meta Ads Que Funcionan</span>
            </h1>

            {/* Specific Result + Timeframe */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Descarga nuestra <strong>guía paso a paso</strong> para conseguir<br />
              <span className="text-blue-600 font-semibold">más clientes locales con Meta Ads en 30 días</span>
            </p>

            {/* Value Bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">🎯 Estrategias específicas para negocios locales</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">📊 Casos reales con resultados verificables</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">🚀 Implementación paso a paso (sin tecnicismos)</span>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-blue-800 font-semibold">
                    📚 <strong>100% Gratuito - Sin Compromisos</strong>
                  </p>
                  <p className="text-blue-700 text-sm">
                    Descarga inmediata. No spam. Información práctica que funciona.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Lead Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-100">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Descarga Tu Guía Gratis
                </h3>
                <p className="text-gray-600">
                  Recíbela en tu email en menos de 2 minutos
                </p>
              </div>

              {/* Form */}
              <form id="landing-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="landing-form-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre*
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
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email donde quieres recibir la guía*
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
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de negocio*
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formState.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  >
                    {businessTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
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
                    '📚 Descargar Guía Gratuita →'
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  Al descargar, aceptas nuestra{' '}
                  <a href="/terminos-privacidad" className="text-blue-600 hover:underline">
                    política de privacidad
                  </a>. No spam, solo contenido de valor.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
