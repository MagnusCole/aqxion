/**
 * OfferSection Optimized - CSS-only animations
 * Principle: Performance via static elements, minimal hover effects
 */
'use client';

import React from 'react';
import { Check, Star, Clock, Shield, Users, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

/**
 * Interface for OfferSection component props
 */
interface OfferSectionProps {
  /** Custom CSS classes */
  className?: string;
  /** ARIA label for the section */
  ariaLabel?: string;
}

/**
 * Interface for pricing plan
 */
interface PricingPlan {
  /** Plan identifier */
  id: string;
  /** Plan name */
  name: string;
  /** Plan description */
  description: string;
  /** Plan price */
  price: string;
  /** Original price (for comparison) */
  originalPrice?: string;
  /** List of features */
  features: string[];
  /** Plan type for styling */
  type: 'traditional' | 'recommended' | 'diy';
  /** CTA button text */
  ctaText: string;
  /** CTA button action */
  ctaAction?: () => void;
  /** Whether button is disabled */
  ctaDisabled?: boolean;
  /** Badge text */
  badgeText?: string;
  /** Badge color */
  badgeColor?: string;
}

/**
 * Interface for guarantee feature
 */
interface GuaranteeFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

/**
 * Pricing plans configuration - Consultation-based pricing
 */
const pricingPlans: PricingPlan[] = [
  {
    id: 'traditional',
    name: 'Marketing Tradicional',
    description: 'El método que has estado usando',
    price: 'Alto costo',
    features: [
      'Volantes en la calle',
      'Anuncios en radio local',
      'Carteles en postes',
      'Boca a boca',
      'Resultados inciertos',
      'Alto costo por cliente',
      'Sin métricas claras'
    ],
    type: 'traditional',
    ctaText: 'Método Anterior',
    ctaDisabled: true,
    badgeText: 'Método Tradicional',
    badgeColor: 'bg-gray-500'
  },
  {
    id: 'aqxion',
    name: 'Sistema AQXION',
    description: 'Marketing digital que funciona para MYPEs',
    price: 'Consulta gratis',
    features: [
      'Presencia digital profesional',
      'Clientes te encuentran 24/7',
      'Sistema de seguimiento',
      'Métricas claras y reales',
      'Soporte personalizado',
      'Crecimiento sostenible',
      'Garantía de por vida'
    ],
    type: 'recommended',
    ctaText: 'Consultar Precio',
    badgeText: 'MÁS POPULAR',
    badgeColor: 'bg-peru-red'
  },
  {
    id: 'diy',
    name: 'Hazlo Tú Mismo',
    description: 'Intentar aprender todo por tu cuenta',
    price: 'Tiempo = Dinero',
    features: [
      'Aprende HTML, CSS, JavaScript',
      'Estudia marketing digital',
      'Configura Google Ads',
      'Maneja redes sociales',
      'Invierte 6-12 meses',
      'Sin garantía de resultados',
      'Alto riesgo de fracaso'
    ],
    type: 'diy',
    ctaText: 'Intentar Solo',
    ctaDisabled: true,
    badgeText: 'DIY',
    badgeColor: 'bg-orange-500'
  }
];

/**
 * Guarantee features configuration - Enhanced lifetime guarantee
 */
const guaranteeFeatures: GuaranteeFeature[] = [
  {
    icon: Shield,
    title: 'Garantía de por vida',
    description: 'Trabajamos contigo hasta que logres resultados. Sin letra pequeña, sin límites de tiempo.'
  },
  {
    icon: Clock,
    title: 'Implementación estratégica',
    description: 'Plan personalizado paso a paso, implementamos juntos cada fase según tu ritmo de crecimiento'
  },
  {
    icon: Users,
    title: 'Soporte continuo',
    description: 'Acompañamiento personal durante todo tu crecimiento, no solo en el inicio'
  }
];

/**
 * OfferSection Optimized Component
 * Performance-focused with CSS-only animations
 */
export const OfferSection: React.FC<OfferSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Oferta especial AQXION'
}) => {

  /**
   * Handle CTA click
   */
  const handleCTA = React.useCallback((plan: PricingPlan) => {
    if (plan.ctaDisabled) return;
    
    // Track conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Pricing',
        event_label: plan.name,
      });
    }
    
    // Scroll to contact
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /**
   * Render pricing plan card
   */
  const renderPricingCard = React.useCallback((plan: PricingPlan, index: number) => {
    const isRecommended = plan.type === 'recommended';
    const isDisabled = plan.ctaDisabled;

    return (
      <div
        key={plan.id}
        className={`relative bg-white rounded-xl sm:rounded-2xl border p-4 xs:p-5 sm:p-6 lg:p-8 h-full ${
          isRecommended 
            ? 'border-peru-red shadow-lg' 
            : 'border-gray-200 shadow-md hover:shadow-lg'
        } transition-shadow duration-200 ${isDisabled ? 'opacity-75' : ''}`}
      >
        {/* Badge */}
        {plan.badgeText && (
          <div className={`absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold`}>
            {plan.badgeText}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-sm xs:text-base text-gray-600 mb-3 sm:mb-4">{plan.description}</p>
          
          {/* Price */}
          <div className="mb-3 sm:mb-4">
            <div className={`text-2xl xs:text-3xl sm:text-4xl font-bold ${isRecommended ? 'text-peru-red' : 'text-gray-900'}`}>
              {plan.price}
            </div>
            {plan.type === 'recommended' && (
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Solicita tu cotización</div>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <div className={`flex-shrink-0 w-4 sm:w-5 h-4 sm:h-5 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 ${
                plan.type === 'recommended' ? 'bg-peru-green' :
                plan.type === 'traditional' ? 'bg-gray-400' : 'bg-orange-400'
              }`}>
                {plan.type === 'traditional' || plan.type === 'diy' ? (
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                ) : (
                  <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" />
                )}
              </div>
              <span className={`text-xs xs:text-sm sm:text-base ${
                plan.type === 'recommended' ? 'text-gray-900' : 'text-gray-600'
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleCTA(plan)}
          disabled={isDisabled}
          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base ${
            isRecommended && !isDisabled
              ? 'bg-peru-red text-white hover:bg-peru-red/90'
              : isDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {plan.ctaText}
          {!isDisabled && <ArrowRight className="inline-block w-3 sm:w-4 h-3 sm:h-4 ml-2" />}
        </button>
      </div>
    );
  }, [handleCTA]);

  /**
   * Render guarantee section - Mobile-first without gradients
   */
  const renderGuarantee = React.useCallback(() => (
    <div className="bg-peru-red/5 border border-peru-red/20 p-4 xs:p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
          Nuestro compromiso contigo es de por vida
        </h3>
        <p className="text-sm xs:text-base sm:text-lg text-gray-600">
          No solo creamos tu presencia digital, crecemos juntos hasta que logres el éxito que buscas
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {guaranteeFeatures.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-peru-red/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <feature.icon className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-peru-red" />
            </div>
            <h4 className="text-base xs:text-lg font-semibold mb-2 text-gray-900">{feature.title}</h4>
            <p className="text-xs xs:text-sm sm:text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  ), []);

  return (
    <section 
      id="oferta"
      className={`pt-4 sm:pt-6 lg:pt-8 pb-12 xs:pb-14 sm:pb-16 lg:pb-20 bg-white relative overflow-hidden ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile-first */}
        <header className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-peru-red/10 text-peru-red px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Star className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 mr-1.5 sm:mr-2" />
            Oferta Especial
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
            Elige el Futuro de tu <span className="text-peru-red">MYPE</span>
          </h2>
          
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-6 sm:px-4">
            Compara el método tradicional con nuestro sistema digital probado y la opción DIY
          </p>
        </header>

        {/* Pricing Cards - Mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          {pricingPlans.map((plan, index) => renderPricingCard(plan, index))}
        </div>

        {/* Guarantee Section */}
        <div className="mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          {renderGuarantee()}
        </div>
      </div>
    </section>
  );
});

OfferSection.displayName = 'OfferSection';
