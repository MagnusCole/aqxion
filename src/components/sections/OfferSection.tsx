'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  /** Feature icon */
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

/**
 * Animation variants for offer section elements
 */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

/**
 * OfferSection component showcasing pricing plans and guarantees
 * Highlights value proposition with competitive pricing comparison
 */
export const OfferSection: React.FC<OfferSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Oferta de servicios para MYPEs',
}) => {
  const [hoveredPlan, setHoveredPlan] = React.useState<string | null>(null);

  /**
   * Handle CTA navigation to signup
   */
  const handleSignupNavigation = React.useCallback(() => {
    window.open('https://app.myperu.pe/auth/signup', '_blank', 'noopener,noreferrer');
  }, []);

  /**
   * Pricing plans configuration
   */
  const pricingPlans: PricingPlan[] = React.useMemo(() => [
    {
      id: 'traditional',
      name: 'Plan Agencia',
      description: 'Agencias tradicionales',
      price: 'S/.15,000',
      originalPrice: undefined,
      features: [
        'Sitio web básico',
        'Hosting por 1 año',
        'Soporte por email',
        '+ S/.500/mes mantenimiento'
      ],
      type: 'traditional',
      ctaText: 'Muy costoso para MYPEs',
      ctaDisabled: true,
      badgeText: 'Agencias tradicionales',
      badgeColor: 'bg-gray-100 text-gray-600 border-gray-300'
    },
    {
      id: 'recommended',
      name: 'Plan MYPE',
      description: 'Nuestra propuesta optimizada',
      price: 'S/.1,500',
      originalPrice: 'S/.15,000',
      features: [
        'Sitio web profesional',
        'WhatsApp Business integrado',
        'Google My Business configurado',
        'Dashboard de control',
        '90 días de soporte personal',
        'Hosting incluido por 1 año'
      ],
      type: 'recommended',
      ctaText: 'Empezar ahora',
      ctaAction: handleSignupNavigation,
      badgeText: '✨ MEJOR VALOR',
      badgeColor: 'bg-peru-red text-white'
    },
    {
      id: 'diy',
      name: 'Plan DIY',
      description: 'Hacerlo tú mismo',
      price: 'S/.0',
      originalPrice: undefined,
      features: [
        'Aprender por tu cuenta',
        'Configurar todo manualmente',
        'Resolver problemas solo',
        'Tiempo estimado: 3-6 meses'
      ],
      type: 'diy',
      ctaText: 'Intentarlo por mi cuenta',
      badgeText: 'Hacerlo tú mismo',
      badgeColor: 'bg-yellow-100 text-yellow-700 border-yellow-300'
    }
  ], [handleSignupNavigation]);

  /**
   * Guarantee features configuration
   */
  const guaranteeFeatures: GuaranteeFeature[] = React.useMemo(() => [
    {
      icon: Users,
      title: 'Soporte personal',
      description: 'Acceso directo al equipo'
    },
    {
      icon: Clock,
      title: '90 días de acompañamiento',
      description: 'Te guiamos hasta el éxito'
    },
    {
      icon: CheckCircle,
      title: 'Sin letras pequeñas',
      description: 'Términos claros y justos'
    }
  ], []);

  /**
   * Handle plan hover for interactive effects
   */
  const handlePlanHover = React.useCallback((planId: string | null) => {
    setHoveredPlan(planId);
  }, []);

  /**
   * Render section header with value proposition
   */
  const renderHeader = React.useCallback(
    () => (
      <motion.header 
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.div
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-peru-red/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-peru-red/20"
        >
          <Star className="w-4 sm:w-5 h-4 sm:h-5 text-peru-red" aria-hidden="true" />
          <span className="text-peru-red font-medium text-sm sm:text-base">Oferta de Lanzamiento</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Tu presencia digital{' '}
          <span className="text-peru-red relative">
            completa
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-peru-red/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              aria-hidden="true"
            />
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
          Todo lo que necesitas para que tu MYPE sea encontrada en línea. Sin promesas exageradas, 
          solo herramientas probadas que funcionan.
        </p>
      </motion.header>
    ),
    []
  );

  /**
   * Render individual pricing plan card
   */
  const renderPricingCard = React.useCallback(
    (plan: PricingPlan, index: number) => {
      const isRecommended = plan.type === 'recommended';
      const isTraditional = plan.type === 'traditional';
      const isDIY = plan.type === 'diy';
      
      const cardClasses = `
        relative overflow-hidden transform transition-all duration-300
        ${isRecommended 
          ? 'bg-white rounded-2xl p-6 sm:p-8 border-2 border-peru-red shadow-lg hover:shadow-xl hover:scale-105' 
          : 'bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 shadow-sm hover:shadow-md'
        }
        ${isTraditional ? 'hidden lg:block' : ''}
      `.trim();

      const motionVariants = isTraditional ? fadeInLeft : isDIY ? fadeInRight : fadeInUp;
      const delay = isTraditional ? 0.1 : isRecommended ? 0.2 : 0.3;

      return (
        <motion.article
          key={plan.id}
          variants={motionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
          className="relative h-full"
          onMouseEnter={() => handlePlanHover(plan.id)}
          onMouseLeave={() => handlePlanHover(null)}
        >
          <div className={cardClasses}>
            {/* Recommended plan accent */}
            {isRecommended && (
              <div className="absolute top-0 left-0 right-0 h-2 bg-peru-red" />
            )}
            
            {/* Badge */}
            {plan.badgeText && (
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${plan.badgeColor} ${isTraditional ? 'border' : ''}`}>
                  {plan.badgeText}
                </div>
              </div>
            )}
            
            {/* Plan content */}
            <div className="text-center mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              
              {/* Pricing */}
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-base sm:text-lg text-gray-500 line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-4xl sm:text-5xl font-bold ${isRecommended ? 'text-peru-red' : 'text-gray-700'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm sm:text-base">
                    {isRecommended ? '/pago único' : plan.type === 'traditional' ? '/setup inicial' : '/gratis'}
                  </span>
                </div>
              </div>
              
              {/* Features list */}
              <div className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => {
                  const IconComponent = isTraditional ? CheckCircle : isDIY ? Clock : CheckCircle;
                  const iconColor = isTraditional ? 'text-gray-400' : isDIY ? 'text-yellow-600' : 'text-peru-green';
                  
                  return (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${iconColor} flex-shrink-0`} aria-hidden="true" />
                      <span className={`text-sm sm:text-base ${isRecommended ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={plan.ctaAction}
                disabled={plan.ctaDisabled}
                whileHover={!plan.ctaDisabled ? { scale: 1.02 } : {}}
                whileTap={!plan.ctaDisabled ? { scale: 0.98 } : {}}
                className={`
                  w-full font-medium py-3 sm:py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2
                  ${isRecommended 
                    ? 'bg-peru-red text-white hover:bg-red-700 shadow-lg hover:shadow-xl font-bold'
                    : plan.ctaDisabled
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `.trim()}
                aria-label={`${plan.ctaText} - ${plan.name}`}
              >
                {plan.ctaText}
                {!plan.ctaDisabled && isRecommended && (
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.article>
      );
    },
    [handlePlanHover]
  );

  /**
   * Render pricing comparison grid
   */
  const renderPricingGrid = React.useCallback(
    () => (
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {pricingPlans.map((plan, index) => renderPricingCard(plan, index))}
      </div>
    ),
    [pricingPlans, renderPricingCard]
  );

  /**
   * Render guarantee section
   */
  const renderGuarantee = React.useCallback(
    () => (
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100"
        aria-labelledby="guarantee-heading"
      >
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-peru-green/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-peru-green" aria-hidden="true" />
            </div>
          </div>
          
          <h3 id="guarantee-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Garantía honesta
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            Te ayudamos a configurar tu presencia digital paso a paso. Si algo no funciona como esperamos, 
            trabajamos contigo hasta solucionarlo. No prometemos milagros, pero sí nuestro compromiso.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {guaranteeFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-peru-red/10 rounded-full flex items-center justify-center mb-3">
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-peru-red" aria-hidden={true} />
                  </div>
                  <span className="font-medium text-gray-900 text-center text-sm sm:text-base">
                    {feature.title}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 mt-1 text-center">
                    {feature.description}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    ),
    [guaranteeFeatures]
  );

  /**
   * Render final CTA section
   */
  const renderFinalCTA = React.useCallback(
    () => (
      <motion.footer
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          ¿Listo para hacer crecer tu MYPE?
        </p>
        
        <motion.button
          onClick={handleSignupNavigation}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-peru-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-700"
          aria-label="Empezar transformación digital - Ir a registro"
        >
          Empezar mi transformación digital
        </motion.button>
        
        <p className="text-xs sm:text-sm text-gray-500 mt-4">
          Sin compromisos de largo plazo • Soporte en español • Resultados en 90 días
        </p>
      </motion.footer>
    ),
    [handleSignupNavigation]
  );

  return (
    <section 
      id="oferta" 
      className={`py-16 sm:py-20 bg-gray-50 ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderHeader()}
        {renderPricingGrid()}
        {renderGuarantee()}
        {renderFinalCTA()}
      </div>
    </section>
  );
});

OfferSection.displayName = 'OfferSection';

OfferSection.displayName = 'OfferSection';
