'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Calendar, MessageSquare } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleConsultaSubmit = useCallback(async () => {
    setIsSubmitting(true);
    
    // Track consultation request
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Consultation Request',
        value: 500
      });
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  }, []);

  const handleAgendarClick = useCallback(() => {
    // Track calendar booking intent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calendar_intent', {
        event_category: 'Contact',
        event_label: 'Schedule Meeting',
        value: 1000
      });
    }

    // Open Calendly with pre-filled data
    const calendlyUrl = `https://calendly.com/aqxion/consulta-estrategica?name=${encodeURIComponent(formData.nombre)}&email=${encodeURIComponent(formData.email)}`;
    window.open(calendlyUrl, '_blank', 'width=900,height=700');
  }, [formData]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-green-600 text-3xl">✓</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
              ¡Mensaje{' '}
              <span className="text-peru-red font-medium">recibido!</span>
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Te contactaremos en las próximas 24 horas.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-peru-red font-medium hover:gap-4 transition-all duration-300"
          >
            <span>Volver al inicio</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header de navegación */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-lg sm:text-xl font-medium text-gray-900 hover:text-peru-red transition-colors duration-200"
            >
              AQXION
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-peru-red transition-colors duration-200 flex items-center gap-2"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section con massive typography - Estilo HeroSection */}
      <section 
        className="relative pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center"
        role="banner"
        aria-label="Contact section - AQXION"
      >
        {/* Award-winning container optimized for landing page flow */}
        <div className="w-full max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Main content column - SpaceX focused design */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8">
              
              {/* Headline - Award-winning balanced typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-tight animate-in slide-in-from-left duration-700">
                Hablemos de{' '}
                <span className="text-peru-red font-medium">
                  tu negocio
                </span>
              </h1>

              {/* Subtitle - Proportioned for conversion */}
              <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 px-2 sm:px-0 animate-in slide-in-from-left duration-700 delay-200">
                20 minutos que pueden cambiar el futuro de tu MYPE.
                <span className="font-medium text-peru-red"> Sin compromiso, solo resultados.</span>
              </p>

              {/* Social proof - Honest and consolidated */}
              <div className="flex items-center justify-center lg:justify-start gap-2 animate-in fade-in duration-700 delay-300">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-peru-gold fill-peru-gold" />
                  <Star className="w-4 h-4 text-peru-gold fill-peru-gold" />
                  <Star className="w-4 h-4 text-peru-gold fill-peru-gold" />
                  <Star className="w-4 h-4 text-peru-gold fill-peru-gold" />
                  <Star className="w-4 h-4 text-peru-gold fill-peru-gold" />
                </div>
                <span className="text-sm font-medium text-gray-700">5.0 • Respuesta en 24h garantizada</span>
              </div>
            </div>

            {/* Contact Form - Clean and professional */}
            <div className="order-1 lg:order-2 animate-in slide-in-from-right duration-700 delay-300">
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                
                {/* Form header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cuéntanos sobre tu MYPE</h3>
                  <p className="text-base text-gray-600">Completa la información para una consulta personalizada</p>
                </div>

                {/* Form fields */}
                <div className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="¿Cómo te llamas?"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  {/* Teléfono y Empresa en una fila */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="+51 999 999 999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tu negocio *
                      </label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => handleInputChange('empresa', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="Mi MYPE"
                        required
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cuéntanos sobre tu negocio
                    </label>
                    <textarea
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 resize-none text-gray-900 placeholder-gray-400"
                      placeholder="¿Qué vendes? ¿Cuál es tu mayor desafío para conseguir clientes?"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3 pt-4">
                    {/* Opción 1: Dejar consulta - Más prominente */}
                    <button
                      onClick={handleConsultaSubmit}
                      disabled={isSubmitting || !formData.nombre || !formData.email || !formData.empresa}
                      className="w-full group inline-flex items-center justify-center px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl disabled:bg-gray-300 disabled:cursor-not-allowed text-base"
                    >
                      <MessageSquare className="w-5 h-5 mr-3" />
                      {isSubmitting ? 'Enviando tu consulta...' : 'Enviar consulta (te responderemos en 24h)'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />}
                    </button>

                    {/* Separador visual */}
                    <div className="relative flex items-center justify-center py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative bg-white px-4 text-sm text-gray-500">
                        o si prefieres hablar ahora
                      </div>
                    </div>

                    {/* Opción 2: Agendar llamada - Más sutil */}
                    <button
                      onClick={handleAgendarClick}
                      disabled={!formData.nombre || !formData.email}
                      className="w-full group inline-flex items-center justify-center px-6 py-3 bg-white text-peru-red font-medium rounded-xl border-2 border-peru-red hover:bg-peru-red hover:text-white active:scale-95 transition-all duration-150 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed text-sm"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar llamada de 20 minutos
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    {/* Trust indicators - Mejorados */}
                    <div className="grid grid-cols-3 gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <span className="text-green-500 font-bold">✓</span>
                        </div>
                        <span>Respuesta en 24h garantizada</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <span className="text-green-500 font-bold">✓</span>
                        </div>
                        <span>Sin compromiso ni presión</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <span className="text-green-500 font-bold">✓</span>
                        </div>
                        <span>Consulta 100% gratuita</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
