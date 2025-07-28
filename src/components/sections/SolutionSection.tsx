'use client';

import React from 'react';
import { Target, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * 🚀 **Sol    <section 
      id="solucion" 
      className={`relative py-8 sm:py-12 lg:py-16 ${className}`.trim()}
      aria-label={ariaLabel}
    >Section Component - PERFORMANCE OPTIMIZED**
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
 * 3-step process configuration - Simple, clear, accessible messaging
 */
const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: Target,
    title: "Creamos tu estrategia digital",
    description: "Hacemos todo lo que necesitas para que te encuentren online - simple y efectivo",
    benefits: [
      "Tu presencia digital profesional",
      "Plan de contenido que funciona",
      "Enfoque en tu cliente ideal"
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
    title: "Nosotros lo ejecutamos",
    description: "Te relajas mientras nosotros manejamos todo: publicidad, contenido y seguimiento",
    benefits: [
      "Publicidad que trae clientes",
      "Contenido que genera interés",
      "Seguimiento a cada oportunidad"
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
    title: "Tú recibes más clientes",
    description: "Empiezas a recibir consultas constantes sin depender del boca a boca",
    benefits: [
      "Clientes nuevos cada semana",
      "Ingresos más estables",
      "Negocio que crece solo"
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
        {/* Section Header - SpaceX focused with award-winning typography */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16 animate-in slide-in-from-bottom duration-700">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            <span className="text-peru-red font-medium">Nosotros lo hacemos</span>, tú{' '}
            <span className="text-peru-green font-medium relative">
              recibes clientes
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 bg-peru-green/20 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed px-6 sm:px-4 animate-in slide-in-from-bottom duration-700 delay-200">
            Te enfocas en tu negocio mientras nosotros traemos los clientes. 
            <span className="font-medium text-peru-red"> Simple y efectivo.</span>
          </p>
        </div>

        {/* 3-Step Process - Mobile-first grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 lg:mb-16 animate-in slide-in-from-bottom duration-700 delay-300">
          {processSteps.map((step, index) => renderProcessStep(step, index))}
        </div>

        {/* CTA Section - SpaceX focused with iOS-style interaction */}
        <div className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
              ¿Listo para <span className="text-peru-red font-medium">más clientes</span>?
            </h3>
            
            <p className="text-lg sm:text-xl font-light text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Conversemos sobre tu negocio y te mostramos cómo funciona.
            </p>

            <button
              onClick={() => window.open('https://forms.gle/1TXNyENdp8AstXNc9', '_blank')}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2 text-base sm:text-lg"
              aria-label="Hablemos de tu negocio"
            >
              Hablemos de tu negocio
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

SolutionSection.displayName = 'SolutionSection';
