'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * 🎬 CTA Section Component - NARRATIVE FINALE
 * 
 * Award-winning CTA section inspired by SpaceX's bold storytelling
 * and Tesla's full-screen impact. Creates the final chapter of the
 * AQXION narrative journey with massive typography and clear conversion.
 */

interface CTASectionProps {
  className?: string;
  onModalOpen?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = React.memo(({
  className = '',
  onModalOpen
}) => {

  /**
   * Handle CTA click with analytics
   */
  const handleCTAClick = React.useCallback(() => {
    // Track conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA Final',
        event_label: 'Consulta Estratégica',
      });
    }
    
    if (onModalOpen) {
      onModalOpen();
    } else {
      // Default scroll to contact
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onModalOpen]);

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50/30 ${className}`}>
      
      {/* Background Narrative Flow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/20 to-gray-50/40" />
      
      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pb-24">
        
        {/* Narrative Arc Completion */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* Award-winning Typography - Unified with Hero vibes */}
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-tight">
              ¿Listo para{' '}
              <span className="font-medium text-peru-red">
                hacer crecer tu negocio?
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Conversemos sobre tu negocio.
                <span className="block text-gray-900 font-medium mt-2">
                  Te mostramos exactamente cómo podemos ayudarte.
                </span>
              </p>
            </div>
          </div>

          {/* Simple Promise - Clear and accessible */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div className="space-y-6 text-center">
                
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight">
                  Nuestra promesa:
                  <span className="block font-medium text-peru-red mt-1">
                    Te ayudamos hasta que veas resultados
                  </span>
                </h3>
                
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-medium text-peru-red">✓</div>
                    <p className="text-sm font-medium text-gray-900">Plan personalizado</p>
                    <p className="text-sm text-gray-600">Para tu tipo de negocio</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-medium text-peru-red">✓</div>
                    <p className="text-sm font-medium text-gray-900">Te acompañamos</p>
                    <p className="text-sm text-gray-600">Paso a paso contigo</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-medium text-peru-red">✓</div>
                    <p className="text-sm font-medium text-gray-900">Siempre te ayudamos</p>
                    <p className="text-sm text-gray-600">Soporte cuando lo necesites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple call to action - Clear and direct */}
          <div className="space-y-6">
            
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600 font-light">
                Hablemos de tu negocio.
                <span className="block text-gray-900 font-medium mt-1">
                  20 minutos que pueden cambiar todo.
                </span>
              </p>
              
              <p className="text-sm text-gray-500">
                Gratis • Sin compromiso • Te damos ideas que puedes usar ya
              </p>
            </div>

            {/* CTA Button - iOS style unified with other sections */}
            <div className="space-y-3">
              <button
                onClick={handleCTAClick}
                className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2 text-base sm:text-lg"
                aria-label="Conversemos - Abrir formulario de contacto"
              >
                Conversemos
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <p className="text-xs text-gray-400">
                Agenda en menos de 2 minutos
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';
