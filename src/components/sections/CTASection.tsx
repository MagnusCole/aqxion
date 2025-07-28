'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Users, Shield, Clock, Star } from 'lucide-react';

/**
 * 📢 CTA Section Component - AQXION CONSULTATION FOCUS
 * 
 * Ultra-lightweight call-to-action section promoting consultation-based approach.
 * Removed all Framer Motion for better performance. Focuses on AQXION's
 * personalized consultation model with lifetime guarantee.
 */

interface CTABenefit {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface ResultMetric {
  value: string;
  label: string;
}

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface CTASectionProps {
  className?: string;
  title?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  showBenefits?: boolean;
  showMetrics?: boolean;
  showTrustIndicators?: boolean;
  onPrimaryCTAClick?: () => void;
  onSecondaryCTAClick?: () => void;
  onModalOpen?: () => void;
}

/**
 * Benefits configuration - AQXION consultation focus
 */
const ctaBenefits: CTABenefit[] = [
  {
    icon: CheckCircle,
    text: "Consulta personalizada gratuita"
  },
  {
    icon: Shield,
    text: "Garantía de por vida"
  },
  {
    icon: Users,
    text: "Acompañamiento continuo"
  },
  {
    icon: Clock,
    text: "Estrategia a tu ritmo"
  }
];

/**
 * Result metrics configuration - AQXION real metrics
 */
const resultMetrics: ResultMetric[] = [
  { value: "100%", label: "Personalizado" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "5+", label: "Años experiencia" },
  { value: "∞", label: "Soporte ilimitado" }
];

/**
 * Trust indicators configuration - AQXION values
 */
const trustIndicators: TrustIndicator[] = [
  { icon: Shield, text: "Estrategia probada" },
  { icon: Star, text: "Resultados sostenibles" },
  { icon: Users, text: "Expertos AQXION" }
];

export const CTASection: React.FC<CTASectionProps> = React.memo(({
  className = '',
  title = "¿Listo para hacer crecer tu MYPE con AQXION?",
  description = "Reserva tu consulta estratégica gratuita y descubre cómo nuestro sistema personalizado puede transformar tu negocio.",
  primaryCTA = "Consulta Gratuita",
  secondaryCTA = "Conocer más",
  showBenefits = true,
  showMetrics = true, 
  showTrustIndicators = true,
  onPrimaryCTAClick,
  onSecondaryCTAClick,
  onModalOpen
}) => {

  /**
   * Handle primary CTA click
   */
  const handlePrimaryCTA = React.useCallback(() => {
    // Track conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA Section',
        event_label: primaryCTA,
      });
    }
    
    if (onModalOpen) {
      onModalOpen();
    } else if (onPrimaryCTAClick) {
      onPrimaryCTAClick();
    } else {
      // Default scroll to contact
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onModalOpen, onPrimaryCTAClick, primaryCTA]);

  /**
   * Handle secondary CTA click
   */
  const handleSecondaryCTA = React.useCallback(() => {
    if (onSecondaryCTAClick) {
      onSecondaryCTAClick();
    } else {
      // Default scroll to offer section
      document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onSecondaryCTAClick]);

  /**
   * Render benefits list
   */
  const renderBenefitsList = React.useCallback(() => (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {ctaBenefits.map((benefit, index) => (
        <div
          key={index}
          className="flex items-center gap-3 text-red-100 hover:text-white transition-colors duration-200"
        >
          <benefit.icon className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium">{benefit.text}</span>
        </div>
      ))}
    </div>
  ), []);

  /**
   * Render CTA buttons
   */
  const renderCTAButtons = React.useCallback(() => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={handlePrimaryCTA}
        className="inline-flex items-center justify-center px-8 py-4 bg-white text-peru-red font-bold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-peru-red"
        aria-label={`${primaryCTA} - Acción principal`}
      >
        {primaryCTA}
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
      
      <button
        onClick={handleSecondaryCTA}
        className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-peru-red"
        aria-label={`${secondaryCTA} - Acción secundaria`}
      >
        {secondaryCTA}
      </button>
    </div>
  ), [handlePrimaryCTA, handleSecondaryCTA, primaryCTA, secondaryCTA]);

  /**
   * Render main content section
   */
  const renderMainContent = React.useCallback(() => (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {title}
      </h2>
      
      <p className="text-xl text-red-100 mb-8 leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>

      {showBenefits && renderBenefitsList()}
      {renderCTAButtons()}
    </div>
  ), [title, description, showBenefits, renderBenefitsList, renderCTAButtons]);

  /**
   * Render results metrics grid
   */
  const renderResultsMetrics = React.useCallback(() => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {resultMetrics.map((metric, index) => (
        <div key={index} className="text-center p-4 bg-white/10 rounded-xl">
          <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
          <div className="text-sm text-red-100">{metric.label}</div>
        </div>
      ))}
    </div>
  ), []);

  /**
   * Render trust indicators
   */
  const renderTrustIndicators = React.useCallback(() => (
    <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/20">
      {trustIndicators.map((indicator, index) => (
        <div key={index} className="flex items-center gap-2 text-red-100">
          <indicator.icon className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium">{indicator.text}</span>
        </div>
      ))}
    </div>
  ), []);

  return (
    <section className={`relative py-20 bg-gradient-to-r from-peru-red to-red-700 overflow-hidden ${className}`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        {renderMainContent()}

        {/* Results metrics */}
        {showMetrics && renderResultsMetrics()}

        {/* Trust indicators */}
        {showTrustIndicators && renderTrustIndicators()}
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';
