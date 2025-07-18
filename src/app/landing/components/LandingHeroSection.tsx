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
        leadMagnet: 'Equity Partnership Evaluation'
      });

      if (result.success) {
        // Tracking de evento exitoso
        trackFormSubmission('landing-page', true, {
          business_type: formState.businessType,
          lead_magnet: 'Equity Partnership Evaluation'
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
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'saas', label: 'SaaS/Tech' },
    { value: 'healthcare', label: 'Salud/Medicina' },
    { value: 'professional-services', label: 'Servicios Profesionales' },
    { value: 'real-estate', label: 'Bienes Raíces' },
    { value: 'fintech', label: 'Fintech' },
    { value: 'education', label: 'Educación' },
    { value: 'consulting', label: 'Consultoría' },
    { value: 'manufacturing', label: 'Manufactura' },
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
              <span className="text-[var(--equity-gold)]">¿Tu empresa</span><br />
              <span className="text-gray-900">está lista para</span><br />
              <span className="text-[var(--equity-blue)]">Equity Partnership?</span>
            </h1>

            {/* Specific Result + Timeframe */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Descubre si calificas para nuestro <strong>equity partnership</strong><br />
              <span className="text-[var(--equity-gold)] font-semibold">Solo 5 empresas seleccionadas por trimestre</span>
            </p>

            {/* Value Bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--equity-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">💎 Evaluación gratuita de equity potential</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--equity-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">📊 Portfolio companies con 8.2x ROI promedio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--equity-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">🤝 Skin-in-the-game real: invertimos contigo</span>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="bg-[var(--equity-gold)]/10 border-l-4 border-[var(--equity-gold)] p-4 mb-8 rounded-r-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[var(--equity-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-[var(--equity-gold)] font-semibold">
                    🤝 <strong>Evaluación Confidencial - Sin Compromiso</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Due diligence gratuito. Solo 5 partnerships por trimestre.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--equity-gold)]/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-[var(--equity-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Evalúa Tu Equity Potential
                </h3>
                <p className="text-gray-600">
                  Respuesta inicial en 48-72 horas
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email corporativo*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="founder@tuempresa.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry/Sector*
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formState.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent text-lg"
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
                  aria-label={isSubmitting ? "Enviando evaluación..." : "Solicitar evaluación de equity"}
                  className="w-full bg-gradient-to-r from-[var(--equity-gold)] to-[var(--equity-blue)] hover:opacity-90 disabled:opacity-50 text-black font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    '� Evaluar Equity Partnership →'
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  Al solicitar evaluación, aceptas nuestra{' '}
                  <a href="/terminos-privacidad" className="text-[var(--equity-gold)] hover:underline">
                    política de privacidad
                  </a>. Proceso confidencial bajo NDA.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
