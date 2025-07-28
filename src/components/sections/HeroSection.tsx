/**
 * 🏠 Hero Section Component - PERFORMANCE OPTIMIZED
 * 
 * Ultra-lightweight hero section with minimal animations for optimal performance.
 * Focuses on <200MB RAM usage and essential interactions only.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - CSS-only animations (no Framer Motion)
 * - Mobile-first responsive design with Tailwind breakpoints
 * - Performance optimized with React.memo and useCallback
 * - Accessibility-compliant with ARIA attributes and semantic HTML
 * - Minimal visual elements with essential interactions
 * 
 * @example
 * ```tsx
 * <HeroSection onModalOpen={() => setContactModalOpen(true)} />
 * ```
 */

'use client';

import React from 'react';
import { Users, TrendingUp, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';
import { CookieBanner } from '@/components/ui/CookieBanner';

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
 * Social proof configuration with Peru-inspired colors
 */
const socialProofItems = [
  {
    icon: Users,
    text: 'Diseñado para MYPEs',
    color: 'text-peru-green',
  },
  {
    icon: TrendingUp,
    text: 'Resultados medibles',
    color: 'text-peru-red',
  },
  {
    icon: Shield,
    text: 'Sin compromisos largos',
    color: 'text-peru-gold',
  },
] as const;

/**
 * Simplified timing for better performance - REMOVED
 * Using CSS animations instead
 */

/**
 * 🏠 Hero Section Component - PERFORMANCE OPTIMIZED
 * 
 * Main landing section with compelling headline and value proposition.
 * Optimized for <200MB RAM usage with minimal animations.
 * 
 * @param props - Component props
 * @param props.onModalOpen - Callback to open contact modal
 * @returns JSX.Element
 */
export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onModalOpen }) => {
  /**
   * Handle CTA button click with analytics tracking and modal opening
   */
  const handleCTAClick = React.useCallback(() => {
    // Track conversion event for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Hero CTA',
        event_label: 'Empezar Ahora',
      });
    }
    onModalOpen();
  }, [onModalOpen]);
  /**
   * Render process visual - Crear, Atraer, Cerrar
   */
  const renderProcessVisual = React.useCallback(
    () => (
      <div className="relative">
        {/* Main container */}
        <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          
          {/* Process header */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Nuestro Proceso Probado</h3>
            <p className="text-sm text-gray-600">3 pasos simples para transformar tu negocio</p>
          </div>

          {/* Process steps - no animations */}
          <div className="space-y-6">
            {/* Paso 1: Crear */}
            <div className="flex items-center gap-4 p-4 bg-peru-red/10 rounded-xl border border-peru-red/20">
              <div className="w-12 h-12 bg-peru-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peru-red">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Crear</h4>
                <p className="text-sm text-gray-600">Construimos todos tus assets digitales</p>
              </div>
            </div>

            {/* Paso 2: Atraer */}
            <div className="flex items-center gap-4 p-4 bg-peru-gold/10 rounded-xl border border-peru-gold/20">
              <div className="w-12 h-12 bg-peru-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peru-gold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Atraer</h4>
                <p className="text-sm text-gray-600">Activamos el marketing que trae clientes</p>
              </div>
            </div>

            {/* Paso 3: Cerrar */}
            <div className="flex items-center gap-4 p-4 bg-peru-green/10 rounded-xl border border-peru-green/20">
              <div className="w-12 h-12 bg-peru-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peru-green">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Cerrar</h4>
                <p className="text-sm text-gray-600">Te ayudamos a convertir leads en ventas</p>
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
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 px-3 sm:px-4 lg:px-6 overflow-hidden bg-white"
      role="banner"
      aria-label="Hero section - AQXION landing page"
    >
      {/* Mobile-first container with enhanced spacing */}
      <div className="w-full max-w-7xl mx-auto py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Main content column - Mobile-first */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Credibility badge - Mobile-first */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-peru-red/10 backdrop-blur-sm rounded-full px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 lg:mb-6 border border-peru-red/20">
              <Sparkles className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-peru-red" />
              <span className="text-xs sm:text-sm font-medium text-peru-red">Sistema Completo para MYPEs</span>
            </div>
            
            {/* Headline - Mobile-first typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Tu MYPE convertida en{' '}
              <span className="text-peru-red">
                imán de clientes
              </span>
            </h1>

            {/* Subtitle - Mobile-first */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Transformamos tu negocio en una máquina de atraer clientes. 
              <span className="font-semibold text-peru-red">Nosotros lo hacemos, tú recibes los resultados.</span>
            </p>

            {/* Social proof - Mobile-first layout */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Users className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-peru-green" />
                <span className="text-xs sm:text-sm text-gray-600">Diseñado para MYPEs</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-peru-green" />
                <span className="text-xs sm:text-sm text-gray-600">90 días de soporte</span>
              </div>
              
              {/* Integrated social proof badge - Mobile responsive */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-200 shadow-sm">
                <div className="flex items-center -space-x-1 sm:-space-x-2">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-peru-red/20 rounded-full flex items-center justify-center border-2 border-white text-xs font-bold text-peru-red">
                    LA
                  </div>
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-peru-green/20 rounded-full flex items-center justify-center border-2 border-white text-xs font-bold text-peru-green">
                    AQ
                  </div>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-peru-gold fill-peru-gold" />
                  <span className="text-xs font-medium text-gray-700">5.0 • 15+ MYPEs</span>
                </div>
              </div>
            </div>

            {/* CTA buttons - Mobile-first responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onModalOpen}
                className="group inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-peru-red text-white font-bold rounded-lg sm:rounded-xl hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2 text-sm sm:text-base"
                aria-label="Hablemos de tu negocio - Abrir formulario de contacto"
              >
                Hablemos de tu negocio
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-white text-peru-red font-medium rounded-lg sm:rounded-xl border-2 border-peru-red/20 hover:border-peru-red/40 hover:bg-peru-red/5 transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2 text-sm sm:text-base"
                aria-label="Conocer el proceso - Navegar a sección de proceso"
              >
                Conocer el proceso
              </button>
            </div>
          </div>

          {/* Visual column - Mobile hidden, desktop visible */}
          <div className="order-1 lg:order-2 hidden lg:block">
            {renderProcessVisual()}
          </div>
        </div>
      </div>

      {/* Cookie Banner - Left positioned */}
      <CookieBanner
        onAccept={() => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'cookie_consent', {
              event_category: 'Privacy',
              event_label: 'Accepted',
            });
          }
        }}
      />
    </section>
  );
});

// Set display name for debugging and React DevTools
HeroSection.displayName = 'HeroSection';
