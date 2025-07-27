'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, Clock } from 'lucide-react';

/**
 * Interface for StatsSection component props
 */
interface StatsSectionProps {
  /** Custom CSS classes */
  className?: string;
  /** ARIA label for the section */
  ariaLabel?: string;
}

/**
 * Interface for individual stat items
 */
interface Stat {
  /** Icon component for the stat */
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  /** Stat value/number */
  value: string;
  /** Stat label/title */
  label: string;
  /** Additional descriptive text */
  subtext: string;
  /** Icon color class */
  color: string;
  /** Background color class */
  bgColor: string;
}

/**
 * Animation variants for stats section elements
 */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
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
 * StatsSection component showcasing key metrics and achievements
 * Displays social proof through quantified results and testimonials
 */
export const StatsSection: React.FC<StatsSectionProps> = React.memo(({
  className = '',
  ariaLabel = 'Estadísticas y logros de la empresa',
}) => {
  /**
   * Statistics data configuration
   */
  const stats: Stat[] = React.useMemo(() => [
    {
      icon: Users,
      value: "50+",
      label: "MYPEs Transformadas",
      subtext: "en Lima este año",
      color: "text-peru-red",
      bgColor: "bg-peru-red/10"
    },
    {
      icon: TrendingUp,
      value: "180%",
      label: "Crecimiento Promedio",
      subtext: "en primeros 60 días",
      color: "text-peru-green",
      bgColor: "bg-peru-green/10"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Satisfacción Cliente",
      subtext: "calificación promedio",
      color: "text-peru-gold",
      bgColor: "bg-peru-gold/10"
    },
    {
      icon: Clock,
      value: "24h",
      label: "Tiempo de Activación",
      subtext: "sistema 100% operativo",
      color: "text-peru-red",
      bgColor: "bg-peru-red/10"
    }
  ], []);

  /**
   * Render section header
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
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Resultados que hablan por{' '}
          <span className="text-peru-red relative">
            sí solos
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
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
          Cada número representa una MYPE peruana que transformó su futuro
        </p>
      </motion.header>
    ),
    []
  );

  /**
   * Render individual stat card
   */
  const renderStatCard = React.useCallback(
    (stat: Stat, index: number) => {
      const IconComponent = stat.icon;
      
      return (
        <motion.article
          key={index}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.6,
            ease: "easeOut"
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          className="text-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
        >
          {/* Icon container */}
          <div className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 ${stat.bgColor} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent 
              className={`w-6 sm:w-8 h-6 sm:h-8 ${stat.color}`}
              aria-hidden={true}
            />
          </div>
          
          {/* Stat value */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1 + 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            {stat.value}
          </motion.div>
          
          {/* Stat label */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight">
            {stat.label}
          </h3>
          
          {/* Stat subtext */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {stat.subtext}
          </p>
        </motion.article>
      );
    },
    []
  );

  /**
   * Render stats grid
   */
  const renderStatsGrid = React.useCallback(
    () => (
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => renderStatCard(stat, index))}
      </motion.div>
    ),
    [stats, renderStatCard]
  );

  /**
   * Render trust element
   */
  const renderTrustElement = React.useCallback(
    () => (
      <motion.footer
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-12 sm:mt-16 text-center"
      >
        <p className="text-gray-500 text-xs sm:text-sm">
          * Datos promedio basados en MYPEs peruanas durante 2024
        </p>
      </motion.footer>
    ),
    []
  );

  return (
    <section 
      className={`py-16 sm:py-20 bg-gray-50 ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderHeader()}
        {renderStatsGrid()}
        {renderTrustElement()}
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';
