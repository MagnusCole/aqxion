'use client';

import React from 'react';
import { AlertTriangle, TrendingDown, EyeOff, Clock } from 'lucide-react';

/**
 * Interface for ProblemSection component props
 */
interface ProblemSectionProps {
  /** Custom CSS classes */
  className?: string;
  /** ARIA label for the section */
  ariaLabel?: string;
}

/**
 * Interface for individual problem items - PERFORMANCE OPTIMIZED
 */
interface Problem {
  /** Icon component for the problem */
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  /** Problem title */
  title: string;
  /** Problem description */
  description: string;
  /** Background color class */
  bgColor: string;
  /** Icon color class */
  iconColor: string;
}

/**
 * ProblemSection component showcasing common business challenges - PERFORMANCE OPTIMIZED
 * Highlights pain points that resonate with target MYPE audience
 * Optimized with CSS-only animations for <200MB RAM usage
 */
export const ProblemSection: React.FC<ProblemSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Problemas comunes de las MYPEs',
}) => {
  /**
   * Array of business problems for MYPE owners - PERFORMANCE OPTIMIZED
   */
  const problems: Problem[] = React.useMemo(() => [
    {
      icon: AlertTriangle,
      title: "Trabajas solo cuando alguien te recuerda",
      description: "Dependes del boca a boca y las recomendaciones. Sin publicidad propia, tu negocio se vuelve invisible.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: TrendingDown,
      title: "Ingresos que suben y bajan sin control",
      description: "Algunos meses vendes bien, otros apenas cubres gastos. No puedes predecir cuánto vas a ganar.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: EyeOff,
      title: "Tu competencia te está robando clientes",
      description: "Mientras tú esperas que te encuentren, otros negocios están capturando a TUS clientes potenciales con publicidad online.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Clock,
      title: "No tienes tiempo para aprender marketing",
      description: "Entre atender clientes y manejar el negocio, ¿cuándo vas a aprender a hacer páginas web y anuncios?",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ], []);

  /**
   * Handle scroll to solution section
   */
  const handleScrollToSolution = React.useCallback(() => {
    const solutionSection = document.getElementById('solucion');
    if (solutionSection) {
      solutionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  }, []);

  /**
   * Render section header - PERFORMANCE OPTIMIZED with title teaser
   */
  const renderHeader = React.useCallback(
    () => (
      <header className="text-center mb-8 sm:mb-12 lg:mb-16">
        {/* Main headline with enhanced visual emphasis - mobile-first sizing */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4 sm:px-0">
          ¿Te suena{' '}
          <span className="text-red-600 relative">
            conocido
            {/* Subtle underline for emphasis - mobile responsive */}
            <div className="absolute -bottom-0.5 xs:-bottom-1 sm:-bottom-2 left-0 w-full h-0.5 xs:h-1 sm:h-1.5 bg-red-600/20 rounded-full"></div>
          </span>
          ?
        </h2>
        
        {/* Compelling subtitle - mobile-first typography */}
        <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-6 sm:px-4">
          Mira, sabemos exactamente lo que estás viviendo. Hemos ayudado a más de 2 negocios 
          como el tuyo y <span className="font-semibold text-red-600">TODOS empezamos con estos mismos problemas.</span>
        </p>
      </header>
    ),
    []
  );

  /**
   * Render individual problem card - PERFORMANCE OPTIMIZED
   */
  const renderProblemCard = React.useCallback(
    (problem: Problem, index: number) => {
      const IconComponent = problem.icon;
      
      return (
        <article
          key={index}
          className="h-full"
        >
          <div className={`relative p-4 xs:p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors duration-200 ${problem.bgColor} h-full flex flex-col`}>
            
            {/* Icon container - mobile-first sizing */}
            <div className="flex items-center mb-3 xs:mb-4 sm:mb-6">
              <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-white rounded-lg xs:rounded-xl flex items-center justify-center shadow-sm">
                <IconComponent 
                  className={`w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 ${problem.iconColor}`}
                  aria-hidden={true}
                />
              </div>
            </div>

            {/* Content - mobile-first typography */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 sm:mb-4 leading-tight">
                {problem.title}
              </h3>
              
              <p className="text-sm xs:text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                {problem.description}
              </p>
            </div>
          </div>
        </article>
      );
    },
    []
  );

  /**
   * Render problems grid - MOBILE-FIRST OPTIMIZED
   */
  const renderProblemsGrid = React.useCallback(
    () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
        {problems.map((problem, index) => renderProblemCard(problem, index))}
      </div>
    ),
    [problems, renderProblemCard]
  );

  /**
   * Render call to action section - PERFORMANCE OPTIMIZED
   */
  const renderCTA = React.useCallback(
    () => (
      <footer className="text-center mt-8 xs:mt-10 sm:mt-12 lg:mt-16">
        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mb-2 xs:mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
            La buena noticia es que todos estos problemas tienen solución
          </h3>
          <p className="text-sm xs:text-sm sm:text-base text-gray-600 mb-4 xs:mb-5 sm:mb-6 leading-relaxed px-2 sm:px-0">
            Con las herramientas y estrategias correctas, puedes tener un flujo constante de clientes 
            y hacer que tu negocio sea más predecible y rentable.
          </p>
          <button 
            onClick={handleScrollToSolution}
            className="inline-flex items-center px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-red-600 text-white font-medium rounded-lg xs:rounded-xl hover:bg-red-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm xs:text-base w-full xs:w-auto"
            aria-label="Ver la solución - Ir a la siguiente sección"
          >
            Ver la solución
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </footer>
    ),
    [handleScrollToSolution]
  );

  return (
    <section 
      id="problemas" 
      className={`pt-4 sm:pt-6 lg:pt-8 pb-12 xs:pb-14 sm:pb-16 lg:pb-20 bg-white ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {renderHeader()}
        {renderProblemsGrid()}
        {renderCTA()}
      </div>
    </section>
  );
});

ProblemSection.displayName = 'ProblemSection';
