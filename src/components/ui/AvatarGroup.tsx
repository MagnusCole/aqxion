/**
 * 👥 Avatar Group Component - Customer Profile Display
 * 
 * Displays group of customer avatars with overlapping design.
 * Features Peru-inspired styling and subtle hover animations.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Overlapping avatar layout with hover effects
 * - Customizable size and maximum display count
 * - Peru color borders and shadows
 * - Performance optimized with React.memo
 * - Accessibility compliant with alt text
 * 
 * @example
 * ```tsx
 * <AvatarGroup avatars={customerAvatars} maxDisplay={5} size="md" />
 * ```
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Avatar data interface
 * @interface Avatar
 */
interface Avatar {
  /** Unique identifier */
  readonly id: string;
  /** Customer name for alt text */
  readonly name: string;
  /** Avatar image URL or initials */
  readonly src?: string;
  /** Fallback initials */
  readonly initials: string;
  /** Customer business type */
  readonly businessType?: string;
}

/**
 * Props interface for AvatarGroup component
 * @interface AvatarGroupProps
 */
interface AvatarGroupProps {
  /** Array of avatar data */
  readonly avatars: readonly Avatar[];
  /** Maximum number of avatars to display */
  readonly maxDisplay?: number;
  /** Size variant */
  readonly size?: 'sm' | 'md' | 'lg';
  /** Custom className */
  readonly className?: string;
  /** Show animated entrance */
  readonly animated?: boolean;
}

/**
 * Size configurations for avatars
 */
const AVATAR_SIZES = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
} as const;

/**
 * Animation variants for avatar entrance
 */
const avatarVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    x: -20,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  hover: {
    scale: 1.1,
    zIndex: 10,
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
 * 👥 Avatar Group Component
 * 
 * Displays overlapping customer avatars with Peru-inspired styling.
 * Perfect for social proof and credibility indicators.
 * 
 * @param props - Component props
 * @returns JSX.Element
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = React.memo(({
  avatars,
  maxDisplay = 5,
  size = 'md',
  className = '',
  animated = true,
}) => {
  /**
   * Prepare displayed avatars and remainder count
   */
  const { displayedAvatars, remainderCount } = React.useMemo(() => {
    const displayed = avatars.slice(0, maxDisplay);
    const remainder = Math.max(0, avatars.length - maxDisplay);
    
    return {
      displayedAvatars: displayed,
      remainderCount: remainder,
    };
  }, [avatars, maxDisplay]);

  /**
   * Generate avatar element
   */
  const renderAvatar = React.useCallback((avatar: Avatar, index: number) => {
    const zIndex = displayedAvatars.length - index;
    const leftOffset = index * 24; // 24px overlap
    
    return (
      <motion.div
        key={avatar.id}
        variants={animated ? avatarVariants : undefined}
        whileHover={animated ? 'hover' : undefined}
        className={`
          absolute flex items-center justify-center
          ${AVATAR_SIZES[size]}
          bg-white border-2 border-peru-gold rounded-full
          shadow-md hover:shadow-lg transition-shadow duration-200
          cursor-pointer
        `}
        style={{ 
          left: `${leftOffset}px`,
          zIndex,
        }}
        title={`${avatar.name}${avatar.businessType ? ` - ${avatar.businessType}` : ''}`}
      >
        {avatar.src ? (
          <img
            src={avatar.src}
            alt={`Avatar de ${avatar.name}`}
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-peru-red/20 flex items-center justify-center">
            <span className="font-bold text-peru-red">
              {avatar.initials}
            </span>
          </div>
        )}
      </motion.div>
    );
  }, [displayedAvatars.length, size, animated]);

  /**
   * Render remainder count badge
   */
  const renderRemainderBadge = React.useCallback(() => {
    if (remainderCount <= 0) return null;
    
    const leftOffset = displayedAvatars.length * 24;
    
    return (
      <motion.div
        variants={animated ? avatarVariants : undefined}
        className={`
          absolute flex items-center justify-center
          ${AVATAR_SIZES[size]}
          bg-peru-green border-2 border-white rounded-full
          shadow-md text-white font-bold
        `}
        style={{ 
          left: `${leftOffset}px`,
          zIndex: 0,
        }}
        title={`+${remainderCount} clientes más`}
      >
        +{remainderCount}
      </motion.div>
    );
  }, [remainderCount, displayedAvatars.length, size, animated]);

  /**
   * Calculate total width for container
   */
  const containerWidth = React.useMemo(() => {
    const baseWidth = size === 'sm' ? 32 : size === 'md' ? 40 : 48; // Avatar width
    const totalAvatars = displayedAvatars.length + (remainderCount > 0 ? 1 : 0);
    const overlapWidth = (totalAvatars - 1) * 24; // 24px per overlap
    
    return baseWidth + overlapWidth;
  }, [displayedAvatars.length, remainderCount, size]);

  if (avatars.length === 0) return null;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: `${containerWidth}px`, height: AVATAR_SIZES[size].split(' ')[1] }}
      variants={animated ? containerVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      viewport={{ once: true }}
    >
      {/* Displayed avatars */}
      {displayedAvatars.map((avatar, index) => renderAvatar(avatar, index))}
      
      {/* Remainder count badge */}
      {renderRemainderBadge()}
    </motion.div>
  );
});

// Set display name for debugging
AvatarGroup.displayName = 'AvatarGroup';
