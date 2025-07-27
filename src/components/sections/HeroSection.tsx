/**
 * 🏠 Hero Section Component - Landing Page Main Section
 * 
 * Primary hero section implementing Peru-inspired design with coordinated animations.
 * Features conversion-optimized layout, accessibility compliance, and performance optimization.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Coordinated "danza" animations with precise timing (0.2s→0.4s→0.6s→0.8s→1.0s)
 * - Mobile-first responsive design with Tailwind breakpoints
 * - Performance optimized with React.memo and useCallback
 * - Accessibility-compliant with ARIA attributes and semantic HTML
 * - Peru-inspired floating elements with subtle micro-interactions
 * 
 * @example
 * ```tsx
 * <HeroSection onModalOpen={() => setContactModalOpen(true)} />
 * ```
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
 * Animation variant configurations - OPTIMIZED for low RAM usage
 * Reduced complexity and simplified animations
 */
const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const;

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
 * Simplified timing for better performance
 */
const ANIMATION_DELAYS = {
  CONTENT: 0.2,
  VISUAL: 0.4,
} as const;

/**
 * 🏠 Hero Section Component
 * 
 * Main landing section with compelling headline, value proposition,
 * and coordinated animations following Peru-inspired design patterns.
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
   * Render dashboard visual - SIMPLIFIED for performance
   */
  const renderDashboardVisual = React.useCallback(
    () => (
      <div className="relative">
        {/* Main container */}
        <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          
          {/* Browser header simulation */}
          <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="w-3 h-3 bg-peru-red rounded-full" aria-hidden="true" />
            <div className="w-3 h-3 bg-peru-gold rounded-full" aria-hidden="true" />
            <div className="w-3 h-3 bg-peru-green rounded-full" aria-hidden="true" />
            <div className="ml-4 text-sm text-gray-500 font-medium">Dashboard MYPE</div>
          </div>

          {/* Static metrics - no animations */}
          <div className="space-y-4">
            {/* Clientes metric */}
            <div className="flex items-center justify-between p-4 bg-peru-green/10 rounded-xl border border-peru-green/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-peru-green/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-peru-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Clientes este mes</p>
                  <p className="font-bold text-gray-900">En crecimiento</p>
                </div>
              </div>
            </div>

            {/* Presencia digital metric */}
            <div className="flex items-center justify-between p-4 bg-peru-gold/10 rounded-xl border border-peru-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-peru-gold/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-peru-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Presencia digital</p>
                  <p className="font-bold text-gray-900">Activa</p>
                </div>
              </div>
            </div>

            {/* Herramientas metric */}
            <div className="flex items-center justify-between p-4 bg-peru-red/10 rounded-xl border border-peru-red/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-peru-red/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-peru-red" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Herramientas</p>
                  <p className="font-bold text-gray-900">Configuradas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Static decorative element */}
        <div
          className="absolute -top-4 -right-4 w-8 h-8 bg-peru-gold rounded-full flex items-center justify-center shadow-md"
          aria-hidden="true"
        >
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>
    ),
    []
  );

  return (
    <section 
      className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
      role="banner"
      aria-label="Hero section - MyPerú landing page"
    >
      {/* Peru-inspired floating elements */}
      <motion.div 
        className="absolute top-20 right-4 sm:right-10 w-8 sm:w-12 h-8 sm:h-12 bg-peru-gold/10 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute bottom-20 left-4 sm:left-10 w-6 sm:w-8 h-6 sm:h-8 bg-peru-red/10 rounded-full"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-4 sm:w-6 h-4 sm:h-6 bg-peru-green/10 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Main content column - SIMPLIFIED */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Credibility badge */}
            <div className="inline-flex items-center gap-2 bg-peru-red/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-peru-red/20">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-peru-red" />
              <span className="text-xs sm:text-sm font-medium text-peru-red">Para MYPEs en Lima</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Tu MYPE merece{' '}
              <span className="text-peru-red relative">
                más clientes
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-peru-gold rounded-full w-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ayudamos a pequeños negocios en Lima a conseguir clientes de forma consistente. 
              Sin promesas mágicas, solo estrategias que funcionan.
            </p>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-peru-green" />
                <span className="text-sm text-gray-600">Diseñado para MYPEs</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-peru-green" />
                <span className="text-sm text-gray-600">90 días de soporte</span>
              </div>
              
              {/* Integrated social proof badge */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-200 shadow-sm">
                <div className="flex items-center -space-x-2">
                  <div className="w-6 h-6 bg-peru-red/20 rounded-full flex items-center justify-center border-2 border-white text-xs font-bold text-peru-red">
                    LA
                  </div>
                  <div className="w-6 h-6 bg-peru-green/20 rounded-full flex items-center justify-center border-2 border-white text-xs font-bold text-peru-green">
                    AQ
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-peru-gold fill-peru-gold" />
                  <span className="text-xs font-medium text-gray-700">5.0 • 2 MYPEs</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onModalOpen}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-peru-red text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                aria-label="Quiero más clientes - Abrir formulario de contacto"
              >
                Quiero más clientes
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-peru-red font-medium rounded-xl border-2 border-peru-red/20 hover:border-peru-red/40 hover:bg-peru-red/5 transition-all duration-200 w-full sm:w-auto"
                aria-label="Ver precios - Navegar a sección de ofertas"
              >
                Ver precios
              </button>
            </div>
          </div>

          {/* Visual column - Simplified */}
          <div className="order-1 lg:order-2 hidden lg:block">
            {renderDashboardVisual()}
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
