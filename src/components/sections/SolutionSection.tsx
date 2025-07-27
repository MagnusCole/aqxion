'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Star, ArrowRight, CheckCircle } from 'lucide-react';

/**
 * 🚀 **SolutionSection Component**
 * 
 * Redesigned solution section with 3-step process visualization and coordinated animations.
 * Features "estrellas que salen" effect with Peru-inspired design matching Hero's animation style.
 * 
 * Design Features:
 * - 3-step process with star animations and coordinated timing
 * - Sequential reveal with 0.2s→0.4s→0.6s delay pattern (matching Hero)
 * - Floating star decorations with gentle "danza" motion
 * - Peru-inspired colors and professional typography
 * - Optimized height to show section below
 * 
 * @component
 * @param {SolutionSectionProps} props - Component props
 * @returns {React.ReactElement} Rendered solution section
 */

/**
 * Interface for SolutionSection component props
 */
interface SolutionSectionProps {
  /** Custom CSS classes */
  className?: string;
  /** ARIA label for the section */
  ariaLabel?: string;
}

/**
 * Interface for 3-step process items
 */
interface ProcessStep {
  /** Step number */
  step: number;
  /** Step icon */
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** List of benefits */
  benefits: string[];
  /** Color theme */
  theme: {
    /** Primary color for the step */
    primary: string;
    /** Background color for the step */
    background: string;
    /** Accent color for highlights */
    accent: string;
  };
}

/**
 * Interface for floating star decoration
 */
interface FloatingStar {
  /** Initial X position percentage */
  x: number;
  /** Initial Y position percentage */
  y: number;
  /** Animation delay in seconds */
  delay: number;
  /** Star size class */
  size: string;
}

/**
 * Animation variants for coordinated motion
 */
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  step: {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  },
  star: {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  }
};

/**
 * Main SolutionSection component
 */
export const SolutionSection: React.FC<SolutionSectionProps> = ({
  className = '',
  ariaLabel = 'Nuestra solución de marketing digital'
}) => {

  // 3-step process data with Peru-inspired themes
  const processSteps: ProcessStep[] = React.useMemo(() => [
    {
      step: 1,
      icon: Target,
      title: 'Lo Hacemos TODO Por Ti - Presencia Digital',
      description: 'Armamos tu presencia digital completa mientras tú sigues trabajando',
      benefits: [
        'Tu página web profesional (lista para vender)',
        'Tus perfiles en redes sociales (optimizados)',
        'Tu perfil en Google (para que te encuentren)'
      ],
      theme: {
        primary: 'text-red-600',
        background: 'bg-red-50',
        accent: 'border-red-200'
      }
    },
    {
      step: 2,
      icon: Users,
      title: 'Lo Hacemos TODO Por Ti - Tu Oferta Irresistible',
      description: 'Creamos la oferta perfecta que haga que tus clientes digan "SÍ" inmediatamente',
      benefits: [
        'Definimos quién es tu cliente ideal',
        'Creamos tu oferta que no pueden rechazar',
        'Escribimos todos los textos que convierten'
      ],
      theme: {
        primary: 'text-yellow-600',
        background: 'bg-yellow-50',
        accent: 'border-yellow-200'
      }
    },
    {
      step: 3,
      icon: Zap,
      title: 'Lo Hacemos TODO Por Ti - Tus Primeros Anuncios',
      description: 'Lanzamos tus anuncios y empiezas a recibir clientes desde el primer día',
      benefits: [
        'Tus anuncios en Facebook e Instagram (funcionando)',
        'Textos y creativos que convierten (probados)',
        'Soporte directo por WhatsApp (90 días completos)'
      ],
      theme: {
        primary: 'text-green-600',
        background: 'bg-green-50',
        accent: 'border-green-200'
      }
    }
  ], []);

  // Floating stars configuration for "estrellas que salen" effect
  const floatingStars: FloatingStar[] = React.useMemo(() => [
    { x: 10, y: 20, delay: 0, size: 'w-3 h-3' },
    { x: 85, y: 15, delay: 1, size: 'w-4 h-4' },
    { x: 15, y: 75, delay: 2, size: 'w-2 h-2' },
    { x: 75, y: 80, delay: 3, size: 'w-3 h-3' },
    { x: 50, y: 10, delay: 4, size: 'w-2 h-2' },
    { x: 90, y: 60, delay: 5, size: 'w-3 h-3' }
  ], []);

  /**
   * Renders floating star decorations with coordinated animation
   */
  const renderFloatingStars = React.useCallback(() => (
    <>
      {floatingStars.map((star, index) => (
        <motion.div
          key={index}
          className={`absolute ${star.size} text-yellow-400`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.star}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6 + star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-full h-full fill-current" aria-hidden={true} />
        </motion.div>
      ))}
    </>
  ), [floatingStars]);

  /**
   * Renders individual process step with coordinated animations
   */
  const renderProcessStep = React.useCallback((step: ProcessStep, index: number) => {
    const IconComponent = step.icon;
    
    return (
      <motion.div
        key={step.step}
        variants={animations.step}
        className="relative group"
      >
        {/* Step Card */}
        <div className={`relative p-8 rounded-2xl ${step.theme.background} ${step.theme.accent} border-2 hover:shadow-lg transition-all duration-300 h-full`}>
          
          {/* Step Number with Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className={`relative w-16 h-16 rounded-full ${step.theme.primary.replace('text-', 'bg-')} bg-opacity-10 flex items-center justify-center`}>
              <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white ${step.theme.primary} text-sm font-bold flex items-center justify-center shadow-md`}>
                {step.step}
              </span>
              <IconComponent 
                className={`w-8 h-8 ${step.theme.primary}`} 
                aria-hidden={true} 
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="text-center mb-6">
            <h3 className={`text-xl font-bold ${step.theme.primary} mb-3`}>
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-3">
            {step.benefits.map((benefit, benefitIndex) => (
              <motion.div
                key={benefitIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.2 + (index * 0.2) + (benefitIndex * 0.1),
                  duration: 0.6 
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle 
                  className={`w-5 h-5 ${step.theme.primary} mt-0.5 flex-shrink-0`} 
                  aria-hidden="true" 
                />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Step Connector Arrow (except for last step) */}
          {index < processSteps.length - 1 && (
            <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (index * 0.2) }}
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-gray-400" aria-hidden="true" />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }, [processSteps.length]);

  return (
    <section 
      className={`relative py-16 bg-gradient-to-br from-slate-50 to-white overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      {/* Floating Stars Background */}
      {renderFloatingStars()}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            La solución que buscabas:{' '}
            <span className="text-red-600 block">
              "Lo Hacemos TODO Por Ti"
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Olvídate de aprender marketing. <span className="font-semibold text-red-600">Nosotros armamos todo</span> mientras tú 
            sigues enfocado en lo que mejor sabes hacer: tu negocio.
          </p>
        </motion.div>

        {/* 3-Step Process Grid */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
        >
          {processSteps.map((step, index) => renderProcessStep(step, index))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para empezar tu transformación digital?
            </h3>
            <p className="text-gray-600 mb-6">
              Miles de empresas peruanas ya confían en nosotros para hacer crecer su negocio online
            </p>
            <motion.a
              href="https://app.myperu.pe/auth/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Comenzar ahora
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
