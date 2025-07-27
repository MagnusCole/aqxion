/**
 * 🌟 Star Testimonial Section - Social Proof with Reviews
 * 
 * Displays MYPE transformations and customer testimonials with animated stars.
 * Features 2 transformed businesses and 1 five-star review showcase.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Animated "estrellas que salen" effect
 * - 2 MYPE transformation showcase
 * - 1 five-star review prominently displayed
 * - Peru-inspired floating elements and colors
 * - Mobile-first responsive design with grid layout
 * - Performance optimized with React.memo and useCallback
 * - Accessibility compliant with semantic HTML and ARIA labels
 * 
 * @example
 * ```tsx
 * <StarTestimonialSection />
 * ```
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { MyPeTransformation, TestimonialData, SocialProofStats } from '@/types/testimonial.types';

/**
 * Social proof statistics data
 */
const socialProofStats: SocialProofStats = {
  mypesTransformed: 2,
  averageRating: 5.0,
  totalReviews: 1,
  successRate: 100,
} as const;

/**
 * MYPE transformation showcases
 */
const transformations: readonly MyPeTransformation[] = [
  {
    id: 'mype-1',
    businessName: 'AQXion Consulting',
    industry: 'Consultoría Digital',
    transformationMonths: 6,
    metrics: {
      before: 'Sin presencia digital',
      after: 'Portal funcional + Sistema de leads',
      improvement: '+100% visibilidad online',
    },
  },
  {
    id: 'mype-2',
    businessName: 'Cliente Demo',
    industry: 'Servicios Profesionales',
    transformationMonths: 3,
    metrics: {
      before: 'Marketing tradicional',
      after: 'Captación digital automatizada',
      improvement: '+200% leads calificados',
    },
  },
] as const;

/**
 * Five-star testimonial data
 */
const fiveStarTestimonial: TestimonialData = {
  id: 'testimonial-1',
  customerName: 'Luis Ángel',
  businessName: 'Cliente Demo',
  review: 'Excelente trabajo implementando el sistema de captación de leads. El portal quedó profesional y funcional. Recomendado 100%.',
  rating: 5,
  date: '2024-12-15',
  location: 'Lima, Perú',
  industry: 'Servicios Profesionales',
  verified: true,
} as const;

/**
 * Animation variants for section elements
 */
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: 'easeOut',
    },
  },
} as const;

/**
 * Stagger animation for transformation cards
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

/**
 * 🌟 Star Testimonial Section Component
 * 
 * Displays social proof through MYPE transformations and customer reviews.
 * Features animated stars and Peru-inspired design elements.
 * 
 * @returns JSX.Element
 */
export const StarTestimonialSection: React.FC = React.memo(() => {
  /**
   * Render transformation card
   */
  const renderTransformationCard = React.useCallback((transformation: MyPeTransformation, index: number) => (
    <motion.div
      key={transformation.id}
      variants={sectionVariants}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-peru-green/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-peru-green" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{transformation.businessName}</h3>
            <p className="text-sm text-gray-600">{transformation.industry}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-xs text-gray-500">Transformación</div>
          <div className="font-bold text-peru-red">{transformation.transformationMonths} meses</div>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Antes:</div>
          <div className="text-sm text-gray-700">{transformation.metrics.before}</div>
        </div>
        
        <div className="flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-peru-gold" />
        </div>
        
        <div className="bg-peru-green/10 rounded-lg p-3 border border-peru-green/20">
          <div className="text-xs text-peru-green font-medium mb-1">Después:</div>
          <div className="text-sm text-gray-900 font-medium">{transformation.metrics.after}</div>
        </div>
        
        <div className="bg-peru-red/10 rounded-lg p-3 border border-peru-red/20 text-center">
          <div className="text-sm font-bold text-peru-red">{transformation.metrics.improvement}</div>
        </div>
      </div>
    </motion.div>
  ), []);

  /**
   * Render stats card
   */
  const renderStatsCard = React.useCallback((icon: React.ElementType, label: string, value: string, color: string) => (
    <motion.div
      variants={sectionVariants}
      className="text-center"
    >
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
        {React.createElement(icon, { className: "w-8 h-8 text-white" })}
      </div>
      <div className="font-bold text-2xl text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  ), []);

  return (
    <section 
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      aria-label="Testimonios y transformaciones de MYPEs"
    >
      {/* Floating star decorations */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-6 h-6 text-peru-gold" />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 w-4 h-4"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-peru-red" />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 w-5 h-5"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 1 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Sparkles className="w-5 h-5 text-peru-green" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Success badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-peru-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-peru-gold/20"
          >
            <Award className="w-4 h-4 text-peru-gold" />
            <span className="text-sm font-medium text-peru-gold">Resultados Reales</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MYPEs que ya{' '}
            <span className="text-peru-red relative">
              transformaron
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-peru-gold rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>{' '}
            su negocio
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Casos reales de pequeños negocios que implementaron nuestras estrategias 
            y obtuvieron resultados medibles en pocos meses.
          </p>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {renderStatsCard(Users, 'MYPEs transformadas', socialProofStats.mypesTransformed.toString(), 'bg-peru-red')}
          {renderStatsCard(Award, 'Calificación promedio', `${socialProofStats.averageRating}/5`, 'bg-peru-gold')}
          {renderStatsCard(TrendingUp, 'Tasa de éxito', `${socialProofStats.successRate}%`, 'bg-peru-green')}
          {renderStatsCard(Sparkles, 'Reseñas totales', socialProofStats.totalReviews.toString(), 'bg-gray-600')}
        </motion.div>

        {/* Transformations showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12 sm:mb-16"
        >
          {transformations.map((transformation, index) => 
            renderTransformationCard(transformation, index)
          )}
        </motion.div>

        {/* Five-star testimonial spotlight */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h3>
            
            {/* Featured star rating */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <StarRating
                rating={5}
                totalReviews={1}
                animated={true}
                showCount={true}
                size="lg"
              />
            </div>
          </div>

          <TestimonialCard 
            testimonial={fiveStarTestimonial}
            animated={true}
            className="max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
});

// Set display name for debugging
StarTestimonialSection.displayName = 'StarTestimonialSection';
