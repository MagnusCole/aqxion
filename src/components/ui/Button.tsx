/**
 * Button Component - Accessible & Type-Safe UI Primitive
 * 
 * Versatile button component with comprehensive accessibility features,
 * multiple variants, and performance optimizations. Follows design system
 * principles and provides consistent interaction patterns.
 * 
 * @features
 * - Full accessibility compliance (ARIA, keyboard navigation)
 * - Multiple visual variants and sizes
 * - Icon support with proper spacing
 * - Loading states with spinner
 * - Polymorphic component support
 * - Performance optimized with React.memo
 * 
 * @example
 * ```tsx
 * <Button 
 *   variant="primary" 
 *   size="lg"
 *   leftIcon={ArrowRight}
 *   onClick={handleClick}
 *   aria-label="Submit form"
 * >
 *   Submit
 * </Button>
 * ```
 */

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils';
import type { ButtonProps } from '@/types/components';

/**
 * Button variant style mappings
 */
const buttonVariants = {
  primary: 'bg-peru-red text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg',
} as const;

/**
 * Button size style mappings
 */
const buttonSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
} as const;

/**
 * Loading spinner animation configuration
 */
const spinnerAnimation = {
  rotate: 360,
} as const;

/**
 * Button Component
 * 
 * Accessible, performant button component with comprehensive feature set
 * including loading states, icons, and multiple visual variants.
 */
export const Button: React.FC<ButtonProps & MotionProps> = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
    (
      {
        children,
        className,
        variant = 'primary',
        size = 'md',
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        isLoading = false,
        disabled = false,
        fullWidth = false,
        'data-testid': testId,
        'aria-label': ariaLabel,
        type = 'button',
        onClick,
        ...motionProps
      },
      ref
    ) => {
      /**
       * Handle click events with loading state consideration
       */
      const handleClick = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
          if (isLoading || disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        },
        [onClick, isLoading, disabled]
      );

      /**
       * Compute dynamic classes
       */
      const computedClassName = React.useMemo(
        () =>
          cn(
            // Base styles
            'inline-flex items-center justify-center font-medium rounded-xl',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'select-none relative overflow-hidden',
            
            // Variant styles
            buttonVariants[variant],
            
            // Size styles
            buttonSizes[size],
            
            // Width styles
            fullWidth && 'w-full',
            
            // Loading state
            isLoading && 'cursor-wait',
            
            // Disabled state
            (disabled || isLoading) && 'pointer-events-none',
            
            // Custom className
            className
          ),
        [variant, size, fullWidth, isLoading, disabled, className]
      );

      /**
       * Render icon with proper spacing
       */
      const renderIcon = React.useCallback(
        (Icon: React.ElementType | undefined, position: 'left' | 'right') => {
          if (!Icon) return null;

          const iconSize = size === 'lg' ? 20 : size === 'sm' ? 16 : 18;
          const spacing = position === 'left' ? 'mr-2' : 'ml-2';

          return (
            <Icon 
              className={cn('flex-shrink-0', spacing)} 
              size={iconSize}
              aria-hidden="true"
            />
          );
        },
        [size]
      );

      /**
       * Render loading spinner
       */
      const renderSpinner = React.useMemo(() => {
        if (!isLoading) return null;

        const spinnerSize = size === 'lg' ? 20 : size === 'sm' ? 16 : 18;

        return (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={spinnerAnimation}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Loader2 size={spinnerSize} aria-label="Loading" />
            </motion.div>
          </motion.div>
        );
      }, [isLoading, size]);

      return (
        <motion.button
          ref={ref}
          type={type}
          className={computedClassName}
          onClick={handleClick}
          disabled={disabled || isLoading}
          aria-label={ariaLabel}
          aria-busy={isLoading}
          data-testid={testId}
          whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
          whileTap={!disabled && !isLoading ? { scale: 0.98 } : undefined}
          {...motionProps}
        >
          {/* Content container - hidden during loading */}
          <span 
            className={cn(
              'flex items-center justify-center transition-opacity duration-200',
              isLoading && 'opacity-0'
            )}
          >
            {renderIcon(LeftIcon, 'left')}
            {children}
            {renderIcon(RightIcon, 'right')}
          </span>

          {/* Loading spinner overlay */}
          {renderSpinner}
        </motion.button>
      );
    }
  )
);

Button.displayName = 'Button';
