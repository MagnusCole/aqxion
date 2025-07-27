'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
 * Interface for individual problem items
 */
interface Problem {
  /** Icon component for the problem */
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  /** Problem title */
  title: string;
  /** Problem description */
  description: string;
  /** Animation delay */
  delay: number;
  /** Background color class */
  bgColor: string;
  /** Icon color class */
  iconColor: string;
}

/**
 * Animation variants for problem section elements
 */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * ProblemSection component showcasing common business challenges
 * Highlights pain points that resonate with target MYPE audience
 */
export const ProblemSection: React.FC<ProblemSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Problemas comunes de las MYPEs',
}) => {
  /**
   * Array of business problems for MYPE owners
   */
  const problems: Problem[] = React.useMemo(() => [
    {
      icon: AlertTriangle,
      title: "Trabajas solo cuando alguien te recuerda",
      description: "Dependes del boca a boca y las recomendaciones. Sin publicidad propia, tu negocio se vuelve invisible.",
      delay: 0.1,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: TrendingDown,
      title: "Ingresos que suben y bajan sin control",
      description: "Algunos meses vendes bien, otros apenas cubres gastos. No puedes predecir cuánto vas a ganar.",
      delay: 0.2,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: EyeOff,
      title: "Tu competencia te está robando clientes",
      description: "Mientras tú esperas que te encuentren, otros negocios están capturando a TUS clientes potenciales con publicidad online.",
      delay: 0.3,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Clock,
      title: "No tienes tiempo para aprender marketing",
      description: "Entre atender clientes y manejar el negocio, ¿cuándo vas a aprender a hacer páginas web y anuncios?",
      delay: 0.4,
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
   * Render section header
   */
  const renderHeader = React.useCallback(
    () => (
      <motion.header 
        className="text-center mb-12 sm:mb-16"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          ¿Te suena{' '}
          <span className="text-red-600 relative">
            conocido
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </span>
          ?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
          Mira, sabemos exactamente lo que estás viviendo. Hemos ayudado a más de 2 negocios 
          como el tuyo y <span className="font-semibold text-red-600">TODOS empezamos con estos mismos problemas.</span>
        </p>
      </motion.header>
    ),
    []
  );

  /**
   * Render individual problem card
   */
  const renderProblemCard = React.useCallback(
    (problem: Problem, index: number) => {
      const IconComponent = problem.icon;
      
      return (
        <motion.article
          key={index}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            delay: problem.delay,
            ease: "easeOut"
          }}
          className="group h-full"
        >
          <div className={`relative p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ${problem.bgColor} hover:shadow-lg h-full flex flex-col`}>
            
            {/* Icon container */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <IconComponent 
                  className={`w-5 sm:w-6 h-5 sm:h-6 ${problem.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden={true}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">
                {problem.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                {problem.description}
              </p>
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-100 transition-all duration-300 pointer-events-none" />
          </div>
        </motion.article>
      );
    },
    []
  );

  /**
   * Render problems grid
   */
  const renderProblemsGrid = React.useCallback(
    () => (
      <motion.div
        className="grid sm:grid-cols-2 gap-6 sm:gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {problems.map((problem, index) => renderProblemCard(problem, index))}
      </motion.div>
    ),
    [problems, renderProblemCard]
  );

  /**
   * Render call to action section
   */
  const renderCTA = React.useCallback(
    () => (
      <motion.footer
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="text-center mt-12 sm:mt-16"
      >
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-3xl sm:max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            La buena noticia es que todos estos problemas tienen solución
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            Con las herramientas y estrategias correctas, puedes tener un flujo constante de clientes 
            y hacer que tu negocio sea más predecible y rentable.
          </p>
          <motion.button 
            onClick={handleScrollToSolution}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Ver la solución - Ir a la siguiente sección"
          >
            Ver la solución
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="ml-2"
              aria-hidden="true"
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.footer>
    ),
    [handleScrollToSolution]
  );

  return (
    <section 
      id="problemas" 
      className={`py-16 sm:py-20 bg-white ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderHeader()}
        {renderProblemsGrid()}
        {renderCTA()}
      </div>
    </section>
  );
});

ProblemSection.displayName = 'ProblemSection';
