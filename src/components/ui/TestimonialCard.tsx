/**
 * 💬 Testimonial Card Component - Customer Review Display
 * 
 * Displays customer testimonials with Peru-inspired design and animations.
 * Features star ratings, customer info, and verification badges.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Integrated StarRating component
 * - Peru color system with floating elements
 * - Verification badge for credibility
 * - Mobile-first responsive design
 * - Performance optimized with React.memo
 * 
 * @example
 * ```tsx
 * <TestimonialCard testimonial={testimonialData} />
 * ```
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, CheckCircle, Building2 } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import type { TestimonialData } from '@/types/testimonial.types';

/**
 * Props interface for TestimonialCard component
 * @interface TestimonialCardProps
 */
interface TestimonialCardProps {
  /** Testimonial data to display */
  readonly testimonial: TestimonialData;
  /** Show animated entrance */
  readonly animated?: boolean;
  /** Custom className for styling */
  readonly className?: string;
}

/**
 * Animation variants for testimonial card
 */
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: 'easeOut',
    },
  },
} as const;

/**
 * Quote icon animation
 */
const quoteVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -45,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
} as const;

/**
 * 💬 Testimonial Card Component
 * 
 * Displays customer review with star rating, customer info, and verification.
 * Implements Peru-inspired design with subtle animations.
 * 
 * @param props - Component props
 * @returns JSX.Element
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(({
  testimonial,
  animated = true,
  className = '',
}) => {
  const {
    customerName,
    businessName,
    review,
    rating,
    date,
    location,
    industry,
    verified,
  } = testimonial;

  /**
   * Format date for display
   */
  const formattedDate = React.useMemo(() => {
    try {
      return new Intl.DateTimeFormat('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(date));
    } catch {
      return date;
    }
  }, [date]);

  return (
    <motion.div
      className={`
        relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100
        hover:shadow-xl transition-shadow duration-300
        ${className}
      `}
      variants={animated ? cardVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      whileHover={animated ? 'hover' : undefined}
      viewport={{ once: true }}
    >
      {/* Floating quote decoration */}
      <motion.div
        className="absolute -top-3 -left-3 w-8 h-8 bg-peru-gold rounded-full flex items-center justify-center shadow-md"
        variants={animated ? quoteVariants : undefined}
        initial={animated ? 'hidden' : undefined}
        whileInView={animated ? 'visible' : undefined}
        viewport={{ once: true }}
      >
        <Quote className="w-4 h-4 text-white" />
      </motion.div>

      {/* Peru-inspired floating elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-peru-red/20 rounded-full" aria-hidden="true" />
      <div className="absolute bottom-6 right-8 w-2 h-2 bg-peru-green/20 rounded-full" aria-hidden="true" />

      {/* Header with star rating */}
      <div className="mb-6">
        <StarRating
          rating={rating}
          totalReviews={1}
          animated={animated}
          size="lg"
          className="mb-4"
        />
        
        {/* Verification badge */}
        {verified && (
          <motion.div
            initial={animated ? { opacity: 0, x: -10 } : undefined}
            whileInView={animated ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-peru-green/10 text-peru-green px-3 py-1 rounded-full text-sm font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            Cliente verificado
          </motion.div>
        )}
      </div>

      {/* Review content */}
      <motion.blockquote
        initial={animated ? { opacity: 0 } : undefined}
        whileInView={animated ? { opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-gray-700 text-lg leading-relaxed mb-6 italic"
      >
        "{review}"
      </motion.blockquote>

      {/* Customer info */}
      <motion.div
        initial={animated ? { opacity: 0, y: 10 } : undefined}
        whileInView={animated ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="border-t border-gray-100 pt-6"
      >
        {/* Customer name and business */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{customerName}</h4>
            <div className="flex items-center gap-2 text-peru-red font-medium">
              <Building2 className="w-4 h-4" />
              <span>{businessName}</span>
            </div>
          </div>
        </div>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          
          <div className="text-gray-400">•</div>
          
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
            {industry}
          </span>
          
          <div className="text-gray-400">•</div>
          
          <time dateTime={date} className="text-gray-500">
            {formattedDate}
          </time>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Set display name for debugging
TestimonialCard.displayName = 'TestimonialCard';
