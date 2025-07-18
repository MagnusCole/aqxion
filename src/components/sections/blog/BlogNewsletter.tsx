"use client";

import React, { useState } from 'react';
import { googleSheetsService, trackFormSubmission } from '@/lib/googleSheets';

export const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await googleSheetsService.submitNewsletterSubscription(email, 'blog-newsletter');
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
        
        // Tracking de evento exitoso
        trackFormSubmission('newsletter', true, {
          source: 'blog'
        });
      } else {
        throw new Error(result.error || 'Error al suscribirse');
      }
    } catch (error) {
      // Tracking de evento fallido
      trackFormSubmission('newsletter', false, {
        error_message: error instanceof Error ? error.message : 'Error desconocido'
      });
      
      alert('Hubo un error al suscribirte. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // AI OPTIMIZATION: Fondo blanco más natural, integrado con el resto del blog
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          {/* AI OPTIMIZATION: Diseño más sutil sin caja separada */}
          <div className="max-w-2xl mx-auto">
            {/* AI OPTIMIZATION: Icono más sutil */}
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Recibe contenido exclusivo
            </h2>
            {/* AI OPTIMIZATION: Descripción más enfocada en valor */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Las mejores estrategias de marketing directo en tu email.
              <br />
              <span className="text-blue-600 font-medium">Solo contenido útil, sin spam.</span>
            </p>
            {!isSubscribed ? (
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Enviando suscripción..." : "Suscribirse al newsletter"}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Suscribiendo...' : 'Suscribirme gratis'}
                  </button>
                </form>
                {/* AI OPTIMIZATION: Texto de confianza más sutil */}
                <p className="text-xs text-gray-500 mt-4">
                  Puedes cancelar tu suscripción en cualquier momento
                </p>
              </div>
            ) : (
              <div className="max-w-sm mx-auto">
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">¡Perfecto!</span>
                  </div>
                  <p className="text-sm">
                    Revisa tu email para confirmar tu suscripción
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* AI OPTIMIZATION: CTA secundario más natural para conversión */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 text-sm">
              ¿Necesitas ayuda personalizada?
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group text-sm"
            >
              Agenda una consulta gratuita
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            {/* AI OPTIMIZATION: Demostrar abundancia de contenido */}
            <p className="text-xs text-gray-500 mt-6">
              ¿Viste todos nuestros artículos arriba? Publicamos contenido nuevo cada semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
