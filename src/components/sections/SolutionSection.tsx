'use client';

import React from 'react';
import { Target, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * 🚀 **SolutionSection Component - PERFORMANCE OPTIMIZED**
 * 
 * Ultra-lightweight solution section with essential interactions only.
 * Mobile-first design consistent with HeroSection and ProblemSection.
 * Copy aligned with AQXION value proposition.
 * 
 * @component
 * @param {SolutionSectionProps} props - Component props
 * @returns {React.ReactElement} Rendered solution section
 */

interface SolutionSectionProps {
  className?: string;
  ariaLabel?: string;
}

interface ProcessStep {
  step: number;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
  description: string;
  benefits: string[];
  theme: {
    primary: string;
    background: string;
    accent: string;
  };
}

/**
 * 3-step process configuration - Enhanced copy for MYPE owners
 */
const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: Target,
    title: "Diseñamos tu estrategia completa",
    description: "Creamos todo lo que necesitas para atraer más clientes sin que tengas que aprender marketing",
    benefits: [
      "Landing page profesional",
      "Estrategia de contenido",
      "Identificación de tu cliente ideal"
    ],
    theme: {
      primary: 'text-peru-red',
      background: 'bg-peru-red/5',
      accent: 'border-peru-red/20'
    }
  },
  {
    step: 2,
    icon: Users,
    title: "Ejecutamos por ti",
    description: "Nosotros nos encargamos de todo: anuncios, contenido y seguimiento mientras tú atiendes tu negocio",
    benefits: [
      "Campañas publicitarias activas",
      "Gestión de redes sociales",
      "Seguimiento a clientes potenciales"
    ],
    theme: {
      primary: 'text-peru-gold',
      background: 'bg-peru-gold/5',
      accent: 'border-peru-gold/20'
    }
  },
  {
    step: 3,
    icon: Zap,
    title: "Recibes más clientes",
    description: "Empiezas a recibir clientes de forma constante y predecible, sin depender solo del boca a boca",
    benefits: [
      "Flujo constante de consultas",
      "Ventas más predecibles",
      "Crecimiento sostenible"
    ],
    theme: {
      primary: 'text-peru-green',
      background: 'bg-peru-green/5',
      accent: 'border-peru-green/20'
    }
  }
];

export const SolutionSection: React.FC<SolutionSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Cómo convertimos tu MYPE en imán de clientes'
}) => {
  /**
   * Renders individual process step - Performance optimized
   */
  const renderProcessStep = React.useCallback((step: ProcessStep, index: number) => {
    const IconComponent = step.icon;
    
    return (
      <div key={step.step} className="h-full">
        {/* Step Card - Mobile-first design */}
        <div className={`relative p-4 xs:p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl ${step.theme.background} ${step.theme.accent} border hover:border-gray-200 transition-colors duration-200 h-full`}>
          
          {/* Step Number with Icon - Mobile-first sizing */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className={`w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 ${step.theme.background} border ${step.theme.accent} rounded-xl sm:rounded-2xl flex items-center justify-center`}>
              <IconComponent className={`w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 ${step.theme.primary}`} aria-hidden={true} />
            </div>
            <div className={`w-10 xs:w-11 sm:w-12 h-10 xs:h-11 sm:h-12 bg-white border ${step.theme.accent} rounded-full flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl ${step.theme.primary}`}>
              {step.step}
            </div>
          </div>

          {/* Content - Mobile-first typography */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {step.title}
            </h3>
            
            <p className="text-sm xs:text-base sm:text-base text-gray-600 leading-relaxed">
              {step.description}
            </p>

            {/* Benefits List - Mobile-first spacing */}
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              {step.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className={`w-4 sm:w-5 h-4 sm:h-5 ${step.theme.primary} mt-0.5 flex-shrink-0`} aria-hidden={true} />
                  <span className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <section 
      id="solucion"
      className={`relative pt-4 sm:pt-6 lg:pt-8 pb-12 xs:pb-14 sm:pb-16 lg:pb-20 bg-white ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile-first with enhanced copy */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-peru-green/10 backdrop-blur-sm rounded-full px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 lg:mb-6 border border-peru-green/20">
            <Zap className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-peru-green" />
            <span className="text-xs sm:text-sm font-medium text-peru-green">La Solución para tu MYPE</span>
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4 sm:px-0">
            <span className="text-peru-red">Nosotros hacemos</span> todo por ti{' '}
            <span className="text-peru-green relative">
              mientras creces
              <div className="absolute -bottom-0.5 xs:-bottom-1 sm:-bottom-2 left-0 w-full h-0.5 xs:h-1 sm:h-1.5 bg-peru-green/20 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-6 sm:px-4">
            Ya no tienes que aprender marketing. <span className="font-semibold text-peru-red">Tú te enfocas en tu negocio</span>, 
            nosotros nos encargamos de traerte más clientes de forma constante.
          </p>
        </div>

        {/* 3-Step Process - Mobile-first grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          {processSteps.map((step, index) => renderProcessStep(step, index))}
        </div>

        {/* CTA Section - Enhanced copy and mobile-first design */}
        <div className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 border border-gray-200">
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 lg:mb-6 leading-tight px-2 sm:px-0">
              ¿Listo para tener <span className="text-peru-red">clientes constantes</span>?
            </h3>
            
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 leading-relaxed px-2 sm:px-0">
              Hablemos de tu negocio y te mostramos exactamente cómo podemos ayudarte a crecer.
            </p>

            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 lg:px-8 py-2.5 xs:py-3 lg:py-4 bg-peru-red text-white font-bold rounded-lg xs:rounded-xl hover:bg-red-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2 text-sm xs:text-base w-full xs:w-auto"
              aria-label="Hablemos de tu negocio"
            >
              Hablemos de tu negocio
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

SolutionSection.displayName = 'SolutionSection';
