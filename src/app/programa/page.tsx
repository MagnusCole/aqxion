'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Play, CheckCircle } from 'lucide-react';

export default function ProgramaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    facturacion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Remove spaces and validate Peruvian phone format (+51 9XXXXXXXX)
    const cleanPhone = phone.replace(/\s/g, '');
    const phoneRegex = /^\+51\s?9\d{8}$/;
    return phoneRegex.test(cleanPhone);
  };

  const handleInputChange = useCallback((field: string, value: string) => {
    if (field === 'telefono') {
      // Auto-format phone number with +51
      let phoneValue = value.replace(/[^\d]/g, ''); // Remove non-digits
      if (phoneValue.length > 0 && !phoneValue.startsWith('51')) {
        if (phoneValue.startsWith('9')) {
          phoneValue = '51' + phoneValue;
        }
      }
      if (phoneValue.startsWith('51')) {
        phoneValue = '+51 ' + phoneValue.substring(2);
      }
      setFormData(prev => ({ ...prev, [field]: phoneValue }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
    
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El WhatsApp es requerido';
    } else if (!validatePhone(formData.telefono)) {
      newErrors.telefono = 'Por favor ingresa un número de WhatsApp válido (+51 9XXXXXXXX)';
    }
    
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'El nombre de tu MYPE es requerido';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Track program registration
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'program_registration', {
          event_category: 'Program',
          event_label: 'Masterclass Registration',
          value: 1500
        });
      }

      // Open Google Form in new tab
      const formUrl = 'https://forms.gle/1TXNyENdp8AstXNc9';
      window.open(formUrl, '_blank');
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'Hubo un error al enviar el formulario. Por favor intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
              ¡Registro{' '}
              <span className="text-peru-red font-medium">exitoso!</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Se abrió un formulario en una nueva pestaña para completar tu registro.
              <span className="block mt-2 text-peru-red font-medium">
                Una vez completado, recibirás el acceso por email.
              </span>
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => window.open('https://calendly.com/tu-calendly-link', '_blank')}
              className="w-full group inline-flex items-center justify-center px-8 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl text-lg"
            >
              <span>AGENDAR LLAMADA ESTRATÉGICA (OPCIONAL)</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <p className="text-sm text-gray-600">
              ¿Quieres una consulta personalizada? Agenda una llamada de 15 minutos.
            </p>
            
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-peru-red font-medium hover:gap-4 transition-all duration-300"
            >
              <span>Volver al inicio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
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

      {/* Qualification Banner */}
      <div className="bg-peru-red text-white py-4">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-sm sm:text-base font-medium">
            Solo para dueños de MYPEs que quieren hacer crecer su negocio
          </p>
        </div>
      </div>

      {/* Hero Section con massive typography */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="w-full max-w-6xl mx-auto text-center">
          
          {/* Main Headline - Tesla/SpaceX style */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-900 leading-tight mb-8 sm:mb-12 animate-in slide-in-from-top duration-700">
            Cómo Conseguir{' '}
            <span className="text-peru-red font-medium block">
              50 Clientes Nuevos
            </span>
            <span className="text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-4">
              En Los Próximos 90 Días
            </span>
          </h1>

          {/* Subheadlines */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed animate-in slide-in-from-top duration-700 delay-200">
              Sin gastar en publicidad ni contratar vendedores.
            </h2>
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed animate-in slide-in-from-top duration-700 delay-300">
              Disfruta de un negocio con clientes predecibles y recurrentes.
            </h3>

            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-500 leading-relaxed animate-in slide-in-from-top duration-700 delay-400">
              (Usando el Sistema AQXION y sin saturar tu equipo)
            </h4>
          </div>

          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16 animate-in slide-in-from-bottom duration-700 delay-500">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="w-20 h-20 bg-peru-red/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-peru-red ml-1" />
                  </div>
                  <h5 className="text-xl font-medium">Ver Masterclass Exclusiva</h5>
                  <p className="text-gray-400">45 minutos • Acceso inmediato</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              *Solo para dueños de MYPEs en Perú
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            
            {/* Form Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                Regístrate{' '}
                <span className="text-peru-red font-medium">Gratis</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acceso inmediato a la masterclass completa + material bonus
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 text-sm">{errors.general}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.nombre 
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-peru-red/20 focus:border-peru-red'
                    }`}
                    placeholder="Tu nombre completo"
                    required
                  />
                  {errors.nombre && (
                    <p className="text-red-600 text-sm mt-1">{errors.nombre}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Principal *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-peru-red/20 focus:border-peru-red'
                    }`}
                    placeholder="tu@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.telefono 
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-peru-red/20 focus:border-peru-red'
                    }`}
                    placeholder="+51 999 999 999"
                    required
                  />
                  {errors.telefono && (
                    <p className="text-red-600 text-sm mt-1">{errors.telefono}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de tu MYPE *
                  </label>
                  <input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange('empresa', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.empresa 
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-peru-red/20 focus:border-peru-red'
                    }`}
                    placeholder="Mi MYPE"
                    required
                  />
                  {errors.empresa && (
                    <p className="text-red-600 text-sm mt-1">{errors.empresa}</p>
                  )}
                </div>
              </div>

              {/* Facturación */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Facturación Anual Aproximada
                </label>
                <select
                  value={formData.facturacion}
                  onChange={(e) => handleInputChange('facturacion', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="0-25">0 - 25 UIT</option>
                  <option value="25-75">25 - 75 UIT</option>
                  <option value="75-150">75 - 150 UIT</option>
                  <option value="150+">Más de 150 UIT</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.nombre || !formData.email || !formData.telefono || !formData.empresa}
                className="w-full group inline-flex items-center justify-center px-8 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl disabled:bg-gray-300 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? 'Registrando...' : 'ACCEDER A LA MASTERCLASS GRATIS'}
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Acceso Inmediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Material Bonus</span>
                </div>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Para obtener más información sobre cómo cancelar la recepción de comunicaciones de AQXION y cómo son nuestras prácticas de privacidad, revisa nuestra{' '}
                <Link href="/privacidad" className="text-peru-red hover:underline">
                  Política de privacidad
                </Link>
                . Al dejar tus datos y tu consentimiento, también aceptas nuestros{' '}
                <Link href="/terminos" className="text-peru-red hover:underline">
                  términos y condiciones
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          
          {/* Founder Info */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
              Tu Mentor{' '}
              <span className="text-peru-red font-medium block">
                AQXION
              </span>
            </h3>
            
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Especialistas en transformación digital de MYPEs peruanas. Nos enfocamos en crear sistemas que realmente funcionen para negocios como el tuyo.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-peru-red mt-1 flex-shrink-0" />
                <p className="text-gray-700">Sistema probado específicamente en el mercado peruano</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-peru-red mt-1 flex-shrink-0" />
                <p className="text-gray-700">Especialización en presencia digital efectiva</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-peru-red mt-1 flex-shrink-0" />
                <p className="text-gray-700">Enfoque 100% en MYPEs y pequeños negocios</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-peru-red mt-1 flex-shrink-0" />
                <p className="text-gray-700">Estrategias sin necesidad de gran inversión</p>
              </div>
            </div>

            {/* Simple CTA */}
            <div className="pt-8">
              <p className="text-lg text-gray-700 font-medium">
                Descubre nuestro sistema en la masterclass gratuita
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-400">
              2025 AQXION ® Derechos reservados
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                Políticas de privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
