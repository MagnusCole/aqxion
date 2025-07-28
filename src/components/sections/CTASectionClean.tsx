/**
 * 🚀 CTA Section - Tesla/SpaceX Inspired Massive Typography
 * 
 * Based on webdesign instructions: "massive, impactful fonts dominating the canvas"
 * Channels Tesla's sleek full-screen boldness and SpaceX's parallax heroism.
 * Award-winning typography with narrative-driven flow.
 */

'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  className?: string;
  onModalOpen?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = React.memo(({
  className = '',
  onModalOpen
}) => {
  const handleCTAClick = React.useCallback(() => {
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'Conversion',
        event_label: 'CTA Section Clean',
        value: 1000
      });
    }
    
    // Open Google Form directly
    window.open('https://forms.gle/1TXNyENdp8AstXNc9', '_blank');
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50/30 ${className}`}>
      
      {/* Background Narrative Flow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/20 to-gray-50/40" />
      
      {/* Massive Typography Container - Tesla/SpaceX Inspired */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Award-winning Typography Hierarchy */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* Massive Headline - Commanding Presence */}
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-900 leading-none animate-in slide-in-from-bottom duration-700">
              Tu MYPE{' '}
              <span className="block font-medium text-peru-red">
                convertida en
              </span>
              <span className="block font-light">
                imán de clientes
              </span>
            </h2>
            
            {/* Supporting Text - Balanced Typography */}
            <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom duration-700 delay-200">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light leading-relaxed">
                20 minutos que pueden cambiar todo.
              </p>
              <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Nosotros lo hacemos, tú recibes los resultados.
              </p>
            </div>
          </div>
          
          {/* Single, Focused CTA - Tesla Minimalism */}
          <div className="flex flex-col items-center space-y-8 animate-in slide-in-from-bottom duration-700 delay-500">
            <button
              onClick={handleCTAClick}
              className="group inline-flex items-center justify-center px-12 py-6 bg-peru-red text-white font-medium text-xl rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2"
              aria-label="Contactar a AQXION"
            >
              Hablemos de tu negocio
              <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            {/* Trust Indicators - Minimal */}
            <div className="flex items-center justify-center gap-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Resultados reales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/60 to-transparent" />
    </section>
  );
});

CTASection.displayName = 'CTASection';
