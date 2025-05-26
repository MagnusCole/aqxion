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
export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title = "¿Listo para multiplicar tus clientes?",
  subtitle = "Completa el formulario y nuestro equipo experto te contactará en menos de 24 horas con una propuesta personalizada",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // En una implementación real, aquí se enviarían los datos a un servidor
    }, 1500);
  };

  return (
    <section id="contacto" className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          {/* Formulario */}
          <div className="max-w-2xl mx-auto w-full bg-white rounded-xl shadow-lg p-8 md:p-10">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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
                  <label className="block text-gray-700 font-medium">¿Qué te interesa más? (Selecciona todas las opciones que apliquen)</label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="google-ads"
                        name="interests"
                        value="Google Ads"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="google-ads" className="text-gray-700">Google Ads</label>
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
                      <label htmlFor="seo" className="text-gray-700">SEO Local</label>
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
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Cuéntanos brevemente sobre tu negocio y objetivos..."
                  ></textarea>
                </div>

                <div className="pt-4">
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
                    Al enviar, aceptas nuestra política de privacidad. Nunca compartiremos tus datos.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
