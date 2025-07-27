'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Shield, Clock, Star } from 'lucide-react';

/**
 * Interface for CTA benefit data
 * @interface CTABenefit
 */
interface CTABenefit {
  /** Lucide icon component */
  icon: React.ComponentType<{ className?: string }>;
  /** Benefit description text */
  text: string;
}

/**
 * Interface for result metric data
 * @interface ResultMetric
 */
interface ResultMetric {
  /** Metric value or percentage */
  value: string;
  /** Descriptive label */
  label: string;
}

/**
 * Interface for trust indicator data
 * @interface TrustIndicator
 */
interface TrustIndicator {
  /** Indicator text */
  text: string;
}

/**
 * Props interface for CTASection component
 * @interface CTASectionProps
 */
interface CTASectionProps {
  /** Optional additional CSS classes */
  className?: string;
  /** Optional custom title */
  title?: string;
  /** Optional custom description */
  description?: string;
  /** Optional primary CTA text */
  primaryCtaText?: string;
  /** Optional secondary CTA text */
  secondaryCtaText?: string;
  /** Optional primary CTA URL */
  primaryCtaUrl?: string;
  /** Whether to show benefits section */
  showBenefits?: boolean;
  /** Whether to show results metrics */
  showResults?: boolean;
  /** Whether to show trust indicators */
  showTrustIndicators?: boolean;
  /** Callback to open contact modal */
  onModalOpen?: () => void;
}

/**
 * CTASection Component
 * 
 * Displays final call-to-action with benefits, results metrics, and trust indicators.
 * Features dual-column layout with content and visual elements.
 * 
 * @component
 * @param {CTASectionProps} props - Component props
 * @returns {React.ReactElement} Rendered CTA section
 */
export const CTASection: React.FC<CTASectionProps> = ({
  className = '',
  title = '¿Listo para que hagamos todo por ti?',
  description = 'No pierdas más tiempo viendo cómo tu competencia te roba clientes. Cada día que pasa sin actuar es dinero que se va de tus manos.',
  primaryCtaText = 'Sí, quiero que lo hagan por mí',
  secondaryCtaText = 'Tengo algunas preguntas',
  primaryCtaUrl = 'https://app.myperu.pe/auth/signup',
  showBenefits = true,
  showResults = true,
  showTrustIndicators = true,
  onModalOpen
}) => {

  // Benefits data
  const benefits: CTABenefit[] = [
    { icon: Users, text: 'Sistema completo armado por nosotros' },
    { icon: Shield, text: 'Triple garantía sin riesgos' },
    { icon: Clock, text: 'Resultados visibles en 90 días' },
    { icon: Star, text: 'Solo 5 cupos disponibles este mes' }
  ];

  // Results metrics data
  const resultMetrics: ResultMetric[] = [
    { value: '+250%', label: 'Más clientes promedio' },
    { value: '90 días', label: 'Para ver resultados' },
    { value: '15+', label: 'Negocios transformados' },
    { value: '100%', label: 'Hecho por nosotros' }
  ];

  // Trust indicators data
  const trustIndicators: TrustIndicator[] = [
    { text: 'Solo 5 cupos este mes' },
    { text: 'Triple garantía incluida' },
    { text: 'Soporte directo por WhatsApp' }
  ];

  /**
   * Renders decorative floating elements
   * @returns {React.ReactElement} Decorative elements
   */
  const renderDecorations = React.useCallback((): React.ReactElement => (
    <>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
      />
      
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full"
      />
    </>
  ), []);

  /**
   * Renders individual benefit item
   * @param {CTABenefit} benefit - Benefit data
   * @param {number} index - Benefit index for animations
   * @returns {React.ReactElement} Benefit item
   */
  const renderBenefit = React.useCallback((benefit: CTABenefit, index: number): React.ReactElement => (
    <motion.div
      key={`benefit-${index}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        <benefit.icon className="w-4 h-4 text-white" />
      </div>
      <span className="text-white font-medium">{benefit.text}</span>
    </motion.div>
  ), []);

  /**
   * Renders benefits list
   * @returns {React.ReactElement} Benefits list
   */
  const renderBenefitsList = React.useCallback((): React.ReactElement => (
    <div className="space-y-4 mb-8">
      {benefits.map((benefit, index) => renderBenefit(benefit, index))}
    </div>
  ), [benefits, renderBenefit]);

  /**
   * Renders CTA buttons
   * @returns {React.ReactElement} CTA buttons
   */
  const renderCTAButtons = React.useCallback((): React.ReactElement => (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.a
        href={primaryCtaUrl}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label={`${primaryCtaText} - Ir a registro`}
      >
        {primaryCtaText}
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </motion.a>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onModalOpen}
        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-red-600 transition-all duration-200"
        aria-label={secondaryCtaText}
      >
        {secondaryCtaText}
      </motion.button>
    </div>
  ), [primaryCtaText, secondaryCtaText, primaryCtaUrl, onModalOpen]);

  /**
   * Renders main content section
   * @returns {React.ReactElement} Content section
   */
  const renderContent = React.useCallback((): React.ReactElement => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {title}
      </h2>
      
      <p className="text-xl text-red-100 mb-8 leading-relaxed">
        {description}
      </p>

      {showBenefits && renderBenefitsList()}
      {renderCTAButtons()}
    </motion.div>
  ), [title, description, showBenefits, renderBenefitsList, renderCTAButtons]);

  /**
   * Renders individual result metric
   * @param {ResultMetric} metric - Metric data
   * @param {number} index - Metric index for animations
   * @returns {React.ReactElement} Metric item
   */
  const renderResultMetric = React.useCallback((metric: ResultMetric, index: number): React.ReactElement => (
    <motion.div
      key={`metric-${index}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-4 bg-white/10 rounded-xl"
    >
      <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
      <div className="text-sm text-red-100">{metric.label}</div>
    </motion.div>
  ), []);

  /**
   * Renders results metrics grid
   * @returns {React.ReactElement} Results metrics
   */
  const renderResultsMetrics = React.useCallback((): React.ReactElement => (
    <div className="grid grid-cols-2 gap-6">
      {resultMetrics.map((metric, index) => renderResultMetric(metric, index))}
    </div>
  ), [resultMetrics, renderResultMetric]);

  /**
   * Renders visual results section
   * @returns {React.ReactElement} Visual section
   */
  const renderVisualSection = React.useCallback((): React.ReactElement => (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Lo que puedes esperar:
          </h3>
          <p className="text-red-100">
            Cuando decidimos trabajar contigo (solo 5 cupos)
          </p>
        </div>

        {showResults && renderResultsMetrics()}
      </div>
    </motion.div>
  ), [showResults, renderResultsMetrics]);

  /**
   * Renders trust indicators
   * @returns {React.ReactElement} Trust indicators
   */
  const renderTrustIndicators = React.useCallback((): React.ReactElement => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-16 text-center"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
        {trustIndicators.map((indicator, index) => (
          <motion.div
            key={`trust-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>{indicator.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ), [trustIndicators]);

  return (
    <section className={`py-20 bg-red-600 relative overflow-hidden ${className}`}>
      {renderDecorations()}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {renderContent()}
          {renderVisualSection()}
        </div>

        {showTrustIndicators && renderTrustIndicators()}
      </div>
    </section>
  );
};