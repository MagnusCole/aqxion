// LLM-OPTIMIZED: Contact Form Section transformado para Growth Equity Partner
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
 * Contact Form Section optimizado para equity partnerships
 * Due diligence inicial y aplicación para partnerships
 */
const industrias = [
  "Selecciona industria/sector",
  "SaaS y tecnología",
  "E-commerce y retail online", 
  "Servicios profesionales (consultoría, legal)",
  "Clínicas y servicios de salud",
  "EdTech y educación online",
  "Fintech y servicios financieros",
  "PropTech e inmobiliaria",
  "AgTech y agricultura",
  "HealthTech y biotecnología",
  "Marketplaces y plataformas",
  "Servicios B2B especializados",
  "Otro sector con alto potencial"
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
  industria: 'Selecciona industria/sector',
  message: ''
};

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title = "¿Tu Empresa Califica para Partnership Equity?",
  subtitle = "Due diligence gratuito y confidencial. Evaluamos empresas con potencial 5x+ para partnerships equity. Solo aceptamos 5 partnerships por trimestre.",
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
        message: `[EQUITY PARTNERSHIP APPLICATION] ${formState.message}`
      });

      if (result.success) {
        setIsSubmitted(true);
        
        // Enhanced tracking with Equity Partnership context
        trackFormSubmission('equity-partnership-application', true, {
          business_type: formState.industria,
          has_message: formState.message.length > 0,
          equity_qualified_lead: true
        });
        
        trackContactFormSubmit('equity-partnership-application');
      } else {
        throw new Error(result.error || 'Error desconocido');
      }
    } catch (error) {
      trackFormSubmission('equity-partnership-application', false, {
        error_message: error instanceof Error ? error.message : 'Error desconocido'
      });
      
      alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendlyClick = () => {
    trackCalendlyClick();
    window.open('https://calendly.com/aqxion/equity-partnership', '_blank', 'noopener,noreferrer');
  };

  if (isSubmitted) {
    return (
      <section className={`py-24 bg-gradient-to-br from-[var(--equity-blue)]/5 via-white to-[var(--equity-gold)]/5 ${className}`}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-[var(--equity-gold)]/20">
            <div className="text-6xl mb-6">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--equity-blue)] mb-6">
              Aplicación para Partnership Recibida
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Gracias por tu interés en partnership equity.</strong> Nuestro equipo revisará tu aplicación 
              y te contactaremos en 24-48 horas si tu empresa califica para due diligence completo.
            </p>
            <div className="bg-[var(--equity-gold)]/10 p-6 rounded-2xl border border-[var(--equity-gold)]/30 mb-8">
              <h3 className="font-bold text-[var(--equity-blue)] mb-3">Próximos Pasos:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>✅ Análisis inicial de potencial (24h)</li>
                <li>✅ Pre-qualification call si calificas</li>
                <li>✅ Due diligence completo para candidates</li>
                <li>✅ Propuesta de partnership personalizada</li>
              </ul>
            </div>
            <button
              onClick={handleCalendlyClick}
              className="bg-[var(--equity-gold)] hover:bg-[var(--equity-gold)]/80 text-[var(--equity-blue)] font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📅 Agendar Call Estratégica (Opcional)
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 bg-gradient-to-br from-[var(--equity-blue)]/5 via-white to-[var(--equity-gold)]/5 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--equity-gold)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-gold)]/20">
            <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
            🔍 APLICACIÓN PARA PARTNERSHIP EQUITY
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Form */}
          <div className="equity-deal-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--equity-blue)] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre y apellido"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--equity-blue)] mb-2">
                    Nombre de la Empresa *
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formState.business}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--equity-blue)] mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all duration-300"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--equity-blue)] mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-bold text-[var(--equity-blue)] mb-2">
                  Industria/Sector *
                </label>
                <select
                  name="industria"
                  value={formState.industria}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all duration-300"
                >
                  {industrias.map((industria) => (
                    <option key={industria} value={industria}>
                      {industria}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message/Application */}
              <div>
                <label className="block text-sm font-bold text-[var(--equity-blue)] mb-2">
                  Información sobre tu Empresa y Objetivos *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all duration-300"
                  placeholder="Cuéntanos sobre:
• Revenue mensual actual aprox
• Principales desafíos de growth
• Objetivos para los próximos 12-24 meses  
• ¿Por qué buscas partnership equity vs servicios cash?
• Cualquier información relevante sobre tu empresa"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[var(--equity-blue)] to-[var(--equity-green)] text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando Aplicación...
                    </span>
                  ) : (
                    '🤝 Aplicar para Partnership Equity'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            
            {/* Process Overview */}
            <div className="equity-deal-card">
              <h3 className="text-2xl font-bold text-[var(--equity-blue)] mb-6">
                Proceso de Evaluación
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--equity-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--equity-blue)]">Análisis Inicial</h4>
                    <p className="text-gray-600 text-sm">Revisión de potencial y fit inicial (24h)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--equity-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--equity-blue)]">Pre-Qualification Call</h4>
                    <p className="text-gray-600 text-sm">Llamada estratégica para candidatos calificados</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--equity-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--equity-blue)]">Due Diligence Completo</h4>
                    <p className="text-gray-600 text-sm">Análisis detallado para partnerships finales</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--equity-green)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--equity-blue)]">Partnership Proposal</h4>
                    <p className="text-gray-600 text-sm">Propuesta personalizada (cash/equity/hybrid)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Criteria */}
            <div className="equity-deal-card">
              <h3 className="text-2xl font-bold text-[var(--equity-blue)] mb-6">
                Criterios de Partnership
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-lg">✅</span>
                  <span className="text-gray-700">Potencial 5x+ growth en 18-36 meses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-lg">✅</span>
                  <span className="text-gray-700">Market size significativo y tracción</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-lg">✅</span>
                  <span className="text-gray-700">Founder/team comprometido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-lg">✅</span>
                  <span className="text-gray-700">Unit economics sólidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--equity-green)] text-lg">✅</span>
                  <span className="text-gray-700">Fit con nuestro expertise</span>
                </li>
              </ul>
            </div>

            {/* Alternative CTA */}
            <div className="bg-gradient-to-r from-[var(--equity-gold)]/10 to-[var(--equity-blue)]/10 p-6 rounded-2xl border border-[var(--equity-gold)]/30">
              <h3 className="font-bold text-[var(--equity-blue)] mb-3">¿Prefieres Hablar Directamente?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Agenda una llamada de 30 minutos para discutir tu empresa y explorar opciones de partnership.
              </p>
              <button
                onClick={handleCalendlyClick}
                className="w-full bg-[var(--equity-gold)] hover:bg-[var(--equity-gold)]/80 text-[var(--equity-blue)] font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                📅 Agendar Llamada Estratégica
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
