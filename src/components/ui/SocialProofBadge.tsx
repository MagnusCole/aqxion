/**
 * 🏆 Social Proof Badge Component - Customer Credibility Display
 * 
 * Floating badge showcasing customer transformations with avatars and ratings.
 * Implements exact design from image: "Más de 50 MYPEs ya transformaron su negocio".
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Floating badge with subtle shadow and Peru-inspired styling
 * - Integrated AvatarGroup and StarRating components
 * - Customizable positioning (bottom-left default)
 * - Animated entrance with coordinated timing
 * - Mobile-responsive with adaptive sizing
 * - Performance optimized with React.memo
 * 
 * @example
 * ```tsx
 * <SocialProofBadge 
 *   transformedCount={50}
 *   rating={4.9}
 *   reviewCount={127}
 *   position="bottom-left"
 * />
 * ```
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StarRating } from '@/components/ui/StarRating';
import { AvatarGroup } from '@/components/ui/AvatarGroup';

/**
 * Props interface for SocialProofBadge component
 * @interface SocialProofBadgeProps
 */
interface SocialProofBadgeProps {
  /** Number of MYPEs transformed */
  readonly transformedCount: number;
  /** Average star rating */
  readonly rating: 1 | 2 | 3 | 4 | 5;
  /** Total number of reviews */
  readonly reviewCount: number;
  /** Badge positioning */
  readonly position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Show animated entrance */
  readonly animated?: boolean;
  /** Custom className */
  readonly className?: string;
}

/**
 * Customer avatar data for social proof - Updated with real data
 */
const customerAvatars = [
  {
    id: 'customer-1',
    name: 'Luis Ángel',
    initials: 'LA',
    businessType: 'Cliente Demo',
  },
  {
    id: 'customer-2',
    name: 'Founder AQXion',
    initials: 'AQ',
    businessType: 'Consultoría',
  },
] as const;

/**
 * Position style mapping
 */
const POSITION_STYLES = {
  'bottom-left': 'fixed bottom-4 left-4 sm:bottom-6 sm:left-6',
  'bottom-right': 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6',
  'top-left': 'fixed top-4 left-4 sm:top-6 sm:left-6',
  'top-right': 'fixed top-4 right-4 sm:top-6 sm:right-6',
} as const;

/**
 * Animation variants for badge entrance
 */
const badgeVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      duration: 0.6,
    },
  },
  hover: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.2 },
  },
} as const;

/**
 * Content animation variants
 */
const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 },
  },
} as const;

/**
 * 🏆 Social Proof Badge Component
 * 
 * Displays floating badge with customer transformations, avatars, and ratings.
 * Perfect for building credibility and social proof on landing pages.
 * 
 * @param props - Component props
 * @returns JSX.Element
 */
export const SocialProofBadge: React.FC<SocialProofBadgeProps> = React.memo(({
  transformedCount,
  rating,
  reviewCount,
  position = 'bottom-left',
  animated = true,
  className = '',
}) => {
  /**
   * Format numbers for display
   */
  const formattedCount = React.useMemo(() => {
    if (transformedCount >= 1000) {
      return `${(transformedCount / 1000).toFixed(1)}k`;
    }
    return transformedCount.toString();
  }, [transformedCount]);

  const formattedRating = React.useMemo(() => {
    return rating === 5 ? '5.0' : rating.toFixed(1);
  }, [rating]);

  return (
    <motion.div
      className={`
        ${POSITION_STYLES[position]}
        bg-white rounded-2xl p-4 shadow-lg border border-gray-100
        backdrop-blur-sm max-w-xs z-50
        hover:shadow-xl transition-shadow duration-300
        ${className}
      `}
      variants={animated ? badgeVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      whileHover={animated ? 'hover' : undefined}
      viewport={{ once: true }}
    >
      <motion.div
        variants={animated ? contentVariants : undefined}
        initial={animated ? 'hidden' : undefined}
        whileInView={animated ? 'visible' : undefined}
        viewport={{ once: true }}
        className="space-y-3"
      >
        {/* Main message */}
        <motion.p
          variants={animated ? itemVariants : undefined}
          className="text-gray-900 font-medium text-sm leading-relaxed"
        >
          Más de{' '}
          <span className="font-bold text-peru-red">{formattedCount} MYPEs</span>{' '}
          ya transformaron su negocio
        </motion.p>

        {/* Customer avatars */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="flex items-center gap-3"
        >
          <AvatarGroup
            avatars={customerAvatars}
            maxDisplay={2}
            size="sm"
          />
        </motion.div>

        {/* Star rating */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="flex items-center gap-2"
        >
          <StarRating
            rating={rating}
            totalReviews={reviewCount}
            size="sm"
          />
          <span className="text-xs text-gray-600 font-medium">
            {formattedRating} • {reviewCount} reseñas
          </span>
        </motion.div>
      </motion.div>

      {/* Peru-inspired decorative element */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-peru-gold rounded-full opacity-60" aria-hidden="true" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-peru-green rounded-full opacity-40" aria-hidden="true" />
    </motion.div>
  );
});

// Set display name for debugging
SocialProofBadge.displayName = 'SocialProofBadge';
