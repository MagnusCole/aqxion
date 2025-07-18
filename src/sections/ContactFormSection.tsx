// LLM-OPTIMIZED: Contact Form Section with IA theme and enhanced UX
"use client";

import React, { useState } from 'react';
import { googleSheetsService, trackFormSubmission } from '@/lib/googleSheets';
import { trackContactFormSubmit, trackCalendlyClick } from '@/lib/analytics';

export interface ContactFormSectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly className?: string;
}

/**
 * Contact Form Section optimized for Growth Agency positioning
 * Enhanced with lead generation focus and business owner targeting
 */
const industrias = [
  "Selecciona tu tipo de negocio",
  "Servicios profesionales (consultoría, legal, contabilidad)",
  "Clínicas y servicios de salud (médicos, dentales, estética)",
  "Servicios locales (restaurantes, retail, belleza)",
  "Coaching y educación (formación, academias)",
  "Servicios técnicos y mantenimiento",
  "Inmobiliaria y construcción",
  "E-commerce y tiendas online",
  "Agencias y servicios digitales",
  "Otro tipo de negocio"
] as const;

type IndustriaType = typeof industrias[number];

interface FormState {
  readonly name: string;
  readonly business: string;
  readonly email: string;
  readonly phone: string;
  readonly industria: IndustriaType;
  readonly message: string;
}

const initialFormState: FormState = {
  name: '',
  business: '',
  email: '',
  phone: '',
  industria: 'Selecciona tu tipo de negocio',
  message: ''
};

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title = "¿Listo Para Más Clientes de Forma Automática?",
  subtitle = "Agenda una consulta gratuita y descubre cómo nuestro stack integrado puede generar +50 leads calificados por mes para tu negocio",
  className = ""
}) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const result = await googleSheetsService.submitContactForm({
        name: formState.name,
        business: formState.business,
        email: formState.email,
        phone: formState.phone,
        industria: formState.industria,
        message: formState.message
      });

      if (result.success) {
        setIsSubmitted(true);
        
        // Enhanced tracking with Growth Agency context
        trackFormSubmission('contact-form-growth', true, {
          business_type: formState.industria,
          has_message: formState.message.length > 0,
          lead_generation_interest: true
        });
        
        trackContactFormSubmit('growth-agency-contact-form');
      } else {
        throw new Error(result.error || 'Error desconocido');
      }
    } catch (error) {
      trackFormSubmission('contact-form-growth', false, {
        error_message: error instanceof Error ? error.message : 'Error desconocido'
      });
      
      if (process.env.NODE_ENV === 'development') {
        console.error('Contact form error:', error);
      }
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formState.industria !== 'Selecciona tu tipo de negocio' && 
                     formState.name.trim() && 
                     formState.business.trim() && 
                     formState.email.trim() && 
                     formState.phone.trim();

  return (
    <section id="contacto" className={`py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* IA-themed header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--ia-blue)]/10 text-[var(--ia-blue)] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Leads Automatizados Garantizados
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced form with IA styling */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-[var(--auto-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Perfecto! Tu Diagnóstico Está en Camino</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Excelente. Nuestro equipo analizará tu negocio y te contactará en menos de 24 horas con un diagnóstico personalizado y tu estrategia de crecimiento automatizado.
                </p>
                <button 
                  aria-label="Reiniciar formulario para nueva consulta"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState(initialFormState);
                  }} 
                  className="text-[var(--ia-blue)] hover:text-blue-800 font-medium transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold">Nombre completo*</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--ia-blue)] focus:ring-2 focus:ring-[var(--ia-blue)]/20 outline-none transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold">Nombre de tu negocio*</label>
                  <input
                    type="text"
                    name="business"
                    value={formState.business}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--ia-blue)] focus:ring-2 focus:ring-[var(--ia-blue)]/20 outline-none transition-all"
                    placeholder="Nombre de tu empresa o negocio"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--ia-blue)] focus:ring-2 focus:ring-[var(--ia-blue)]/20 outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold">Teléfono*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--ia-blue)] focus:ring-2 focus:ring-[var(--ia-blue)]/20 outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold">Tipo de negocio*</label>
                  <select
                    name="industria"
                    value={formState.industria}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--ia-blue)] focus:ring-2 focus:ring-[var(--ia-blue)]/20 outline-none transition-all bg-white"
                  >
                    {industrias.map((industria, index) => (
                      <option key={index} value={industria} disabled={industria === 'Selecciona tu tipo de negocio'}>
                        {industria}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold">Cuéntanos tus objetivos (opcional)</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--ia-blue)] focus:ring-2 focus:ring-[var(--ia-blue)]/20 outline-none transition-all resize-none"
                    placeholder="¿Cuál es tu principal desafío para conseguir más clientes? ¿Cuántos leads necesitas por mes?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    aria-label={isSubmitting ? "Enviando consulta..." : "Activar automatización IA"}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 ${
                      isFormValid && !isSubmitting
                        ? 'bg-gradient-to-r from-[var(--ia-blue)] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                          <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Enviando diagnóstico...
                      </span>
                    ) : (
                      'Quiero Mi Diagnóstico Gratis →'
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Al enviar, aceptas nuestra política de privacidad. Sin spam, solo valor.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Enhanced Growth Agency themed CTA side panel */}
          <div className="bg-gradient-to-br from-[var(--ia-blue)] via-blue-600 to-[var(--auto-green)] rounded-2xl shadow-xl p-8 md:p-10 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-xl" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full blur-lg" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-white/20 rounded-xl mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Sistema de Crecimiento Integrado</h3>
                <p className="text-blue-100 opacity-90">
                  Nuestro stack completo (Ads + Outreach + Content + IA + Copy) trabajará 24/7 para generar leads mientras te enfocas en cerrar ventas.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Diagnóstico gratuito completo de tu negocio',
                  'Stack personalizado de generación de leads',
                  'Implementación garantizada en 30 días',
                  '+50 leads/mes garantizados o no cobramos',
                  'Acompañamiento hasta 20% de cierre'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3 text-[var(--auto-green)] flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-blue-50">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">🚀</div>
                  <h4 className="font-bold text-lg">Resultados Predecibles</h4>
                </div>
                <p className="text-blue-100">
                  150+ negocios ya están escalando con nuestro sistema. Metodología probada con ROI 5x promedio en los primeros 90 días.
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-blue-200 font-medium mb-3">¿Prefieres hablar directamente?</p>
                <button
                  aria-label="Agendar consulta gratuita de crecimiento"
                  onClick={() => {
                    trackCalendlyClick();
                    window.open('https://calendly.com/luis-aqxion/30min', '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full py-3 px-6 rounded-lg bg-white text-[var(--ia-blue)] font-bold transition-all duration-200 hover:bg-blue-50 hover:scale-[1.02] shadow-lg"
                >
                  Agenda tu diagnóstico gratuito →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
