/**
 * � Hero Section Component - AWARD-WINNING DESIGN
 * 
 * Tesla/SpaceX inspired massive typography with sophisticated spacing.
 * Award-winning design principles: boldness, hierarchy, narrative flow.
 */

'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

/**
 * Props interface for HeroSection component
 * @interface HeroSectionProps
 */
interface HeroSectionProps {
  /** Callback function to open contact modal */
  readonly onModalOpen: () => void;
}

/**
 * Animation variant configurations - REMOVED for performance
 * Using CSS-only animations instead of JavaScript
 */

/**
 * Social proof configuration - REMOVED for simplified design
 */

/**
 * Simplified timing for better performance - REMOVED
 * Using CSS animations instead
 */

/**
 * � Hero Section Component - AWARD-WINNING DESIGN
 * 
 * Main landing section with massive typography and sophisticated spacing.
 * Tesla/SpaceX inspired design with award-winning hierarchy.
 */
export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onModalOpen }) => {
  /**
   * Render process visual - Simple, clear, accessible
   */
  const renderProcessVisual = React.useCallback(
    () => (
      <div className="relative">
        {/* Main container */}
        <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          
          {/* Process header */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">¿Cómo lo hacemos?</h3>
            <p className="text-base text-gray-600">Solo 3 pasos para hacer crecer tu negocio</p>
          </div>

          {/* Process steps - clear and simple */}
          <div className="space-y-4">
            {/* Paso 1: Creamos */}
            <div className="flex items-center gap-4 p-5 bg-peru-red/10 rounded-xl border border-peru-red/20">
              <div className="w-12 h-12 bg-peru-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peru-red">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Creamos tu presencia digital</h4>
                <p className="text-sm text-gray-600">Lo que tu negocio necesite para destacar en internet</p>
              </div>
            </div>

            {/* Paso 2: Atraemos */}
            <div className="flex items-center gap-4 p-5 bg-peru-gold/10 rounded-xl border border-peru-gold/20">
              <div className="w-12 h-12 bg-peru-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peru-gold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Traemos clientes</h4>
                <p className="text-sm text-gray-600">Usamos marketing digital para que te encuentren en internet</p>
              </div>
            </div>

            {/* Paso 3: Vendes */}
            <div className="flex items-center gap-4 p-5 bg-peru-green/10 rounded-xl border border-peru-green/20">
              <div className="w-12 h-12 bg-peru-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peru-green">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Vendes más</h4>
                <p className="text-sm text-gray-600">Te ayudamos a cerrar ventas y hacer crecer tu negocio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <section 
      className="relative pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center"
      role="banner"
      aria-label="Hero section - AQXION landing page"
    >
      {/* Award-winning container optimized for landing page flow */}
      <div className="w-full max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Main content column - SpaceX focused design */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Headline - Award-winning balanced typography for landing page */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-tight animate-in slide-in-from-left duration-700">
              Tu MYPE convertida en{' '}
              <span className="text-peru-red font-medium">
                imán de clientes
              </span>
            </h1>

            {/* Subtitle - Proportioned for landing page conversion */}
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 px-2 sm:px-0 animate-in slide-in-from-left duration-700 delay-200">
              Transformamos tu negocio en una máquina de atraer clientes. 
              <span className="font-medium text-peru-red"> Nosotros lo hacemos, tú recibes los resultados.</span>
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
              <span className="text-sm font-medium text-gray-700">5.0 • 2 MYPEs ya creciendo</span>
            </div>

            {/* CTA button - Single primary action */}
            <div className="flex justify-center lg:justify-start animate-in slide-in-from-bottom duration-700 delay-500">
              <button
                onClick={onModalOpen}
                className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2 text-base sm:text-lg"
                aria-label="Hablemos de tu negocio - Abrir formulario de contacto"
              >
                Hablemos de tu negocio
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Visual column - Mobile hidden, desktop visible */}
          <div className="order-1 lg:order-2 hidden lg:block animate-in slide-in-from-right duration-700 delay-300">
            {renderProcessVisual()}
          </div>
        </div>
      </div>
    </section>
  );
});

// Set display name for debugging and React DevTools
HeroSection.displayName = 'HeroSection';
