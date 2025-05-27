// sections/ContactFormSection.tsx
"use client"

import React, { useState } from 'react';

export interface ContactFormSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Sección de Formulario de Contacto
 * Permite a los visitantes enviar sus datos para ser contactados
 */
export const ContactFormSection: React.FC<ContactFormSectionProps> = ({  title = "¿Listo para Hacer Crecer tu Negocio?",
  subtitle = "Agenda una consulta gratuita y veamos cómo podemos ayudarte a conseguir más clientes",
  className = ""
}) => {
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
    interests: [] as string[]
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormState(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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
          interests: formState.interests,
          message: formState.message
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
    <section id="contacto" className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario (Lado izquierdo) */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Mensaje Enviado!</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Tu nombre completo*</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Nombre de tu negocio*</label>
                    <input
                      type="text"
                      name="business"
                      value={formState.business}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Tu Negocio Local"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Teléfono*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">¿Qué te interesa más?</label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="google-ads"
                        name="interests"
                        value="Google Ads"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="google-ads" className="text-gray-700">Ads</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="social-media"
                        name="interests"
                        value="Redes Sociales"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="social-media" className="text-gray-700">Redes Sociales</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="seo"
                        name="interests"
                        value="SEO Local"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="seo" className="text-gray-700">SEO</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="web"
                        name="interests"
                        value="Sitio Web"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="web" className="text-gray-700">Sitio Web</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Mensaje o Consulta</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Cuéntanos sobre tu negocio y objetivos..."
                  ></textarea>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Quiero multiplicar mis clientes →'}
                  </button>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Al enviar, aceptas nuestra política de privacidad.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* CTA Inteligente (Lado derecho) */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 md:p-10 text-white">
            <div className="mb-8 text-center">
              <div className="inline-block p-3 bg-blue-500 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Respuesta rápida garantizada</h3>
              <p className="text-blue-100 mb-2">
                Nuestro equipo se pondrá en contacto contigo en menos de 24 horas con una estrategia personalizada.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="mr-3 text-green-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-blue-50">Consulta inicial gratuita sin compromiso</p>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-green-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-blue-50">Estrategia personalizada basada en tu negocio</p>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-green-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-blue-50">Garantía de resultados o no cobramos</p>
              </div>
            </div>

            <div className="bg-blue-700 rounded-lg p-5 mb-8 border border-blue-500">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-2">🛡️</div>
                <h4 className="font-bold text-lg">Garantía de Satisfacción Total</h4>
              </div>
              <p className="text-blue-100">
                Si en los primeros 90 días no ves un incremento real en tus clientes, seguimos trabajando sin costo adicional hasta que lo logres.
              </p>
            </div>

            <div className="text-center mt-auto">
              <p className="text-sm text-blue-200 font-medium mb-2">¿Prefieres agendar directamente?</p>
              <button
                onClick={() => window.open('https://calendly.com/luis-aqxion/30min', '_blank')}
                className="w-full py-3 px-6 rounded-lg bg-white text-blue-700 font-bold transition-all hover:bg-blue-50"
              >
                Agenda tu consulta gratuita →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
