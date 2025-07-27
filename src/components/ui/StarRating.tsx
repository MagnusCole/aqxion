/**
 * ⭐ Star Rating Component - Animated Star Display
 * 
 * Reusable star rating component with Peru-inspired animations.
 * Features "estrellas que salen" effect with coordinated timing.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Animated star appearance with stagger effect
 * - Customizable rating (1-5 stars)
 * - Peru color system integration
 * - Accessibility compliant with ARIA labels
 * - Performance optimized with React.memo
 * 
 * @example
 * ```tsx
 * <StarRating rating={5} totalReviews={1} animated showCount />
 * ```
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { StarRating as StarRatingType } from '@/types/testimonial.types';

/**
 * Props interface for StarRating component
 * @interface StarRatingProps
 */
interface StarRatingProps extends StarRatingType {
  /** Show review count text */
  readonly showCount?: boolean;
  /** Star size variant */
  readonly size?: 'sm' | 'md' | 'lg';
  /** Custom className for styling */
  readonly className?: string;
}

/**
 * Star size configurations
 */
const STAR_SIZES = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

/**
 * Animation variants for star appearance
 */
const starVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
} as const;

/**
 * Container animation for stagger effect
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

/**
 * ⭐ Star Rating Component
 * 
 * Displays animated star rating with optional review count.
 * Implements "estrellas que salen" effect with Peru-inspired colors.
 * 
 * @param props - Component props
 * @returns JSX.Element
 */
export const StarRating: React.FC<StarRatingProps> = React.memo(({
  rating,
  totalReviews,
  animated = true,
  showCount = false,
  size = 'md',
  className = '',
}) => {
  /**
   * Generate array of star elements
   */
  const stars = React.useMemo(() => 
    Array.from({ length: 5 }, (_, index) => {
      const isActive = index < rating;
      const starId = `star-${index}`;
      
      return (
        <motion.div
          key={starId}
          variants={animated ? starVariants : undefined}
          whileHover={animated ? 'hover' : undefined}
          className="relative"
        >
          <Star
            className={`
              ${STAR_SIZES[size]}
              ${isActive 
                ? 'text-peru-gold fill-peru-gold' 
                : 'text-gray-300 fill-gray-300'
              }
              transition-colors duration-200
            `}
            aria-hidden="true"
          />
        </motion.div>
      );
    }),
    [rating, animated, size]
  );

  /**
   * Generate review count text
   */
  const reviewText = React.useMemo(() => {
    if (!showCount) return null;
    
    const reviewWord = totalReviews === 1 ? 'reseña' : 'reseñas';
    return `${rating}/5 • ${totalReviews} ${reviewWord}`;
  }, [showCount, totalReviews, rating]);

  return (
    <div 
      className={`flex items-center gap-2 ${className}`}
      role="img"
      aria-label={`Calificación de ${rating} de 5 estrellas${showCount ? ` basada en ${totalReviews} reseñas` : ''}`}
    >
      {/* Stars container */}
      <motion.div
        className="flex items-center gap-1"
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : undefined}
        whileInView={animated ? 'visible' : undefined}
        viewport={{ once: true }}
      >
        {stars}
      </motion.div>

      {/* Review count text */}
      {reviewText && (
        <motion.span
          initial={animated ? { opacity: 0, x: 10 } : undefined}
          whileInView={animated ? { opacity: 1, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-600 font-medium"
        >
          {reviewText}
        </motion.span>
      )}
    </div>
  );
});

// Set display name for debugging
StarRating.displayName = 'StarRating';
