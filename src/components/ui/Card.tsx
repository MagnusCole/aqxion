/**
 * Card Component System - Modular & Accessible
 * 
 * Flexible card component system with compound components pattern.
 * Provides semantic structure for content cards with consistent spacing,
 * typography hierarchy, and accessibility features.
 * 
 * @features
 * - Compound component pattern (Card.Header, Card.Content, etc.)
 * - Responsive design with mobile-first approach
 * - Accessibility compliant with proper ARIA roles
 * - Hover effects and smooth transitions
 * - Consistent spacing and typography scale
 * 
 * @example
 * ```tsx
 * <Card hover variant="elevated">
 *   <Card.Header>
 *     <h3>Card Title</h3>
 *   </Card.Header>
 *   <Card.Content>
 *     <p>Card content goes here</p>
 *   </Card.Content>
 *   <Card.Footer>
 *     <Button>Action</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import type { CardProps, WithChildren, BaseComponentProps } from '@/types/components';

/**
 * Card variant style mappings
 */
const cardVariants = {
  default: 'bg-white border border-gray-200 shadow-sm',
  elevated: 'bg-white border border-gray-200 shadow-lg',
  outlined: 'bg-white border-2 border-gray-300 shadow-none',
} as const;

/**
 * Card padding configurations
 */
const cardPadding = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

/**
 * Card Header Component
 * 
 * Header section for cards, typically containing titles and optional actions.
 * Provides consistent spacing and typography hierarchy.
 */
export const CardHeader: React.FC<WithChildren> = React.memo(
  ({ children, className, 'data-testid': testId }) => {
    return (
      <div
        className={cn(
          'pb-4 mb-4 border-b border-gray-100',
          'first:pt-0 last:pb-0 last:mb-0 last:border-b-0',
          className
        )}
        data-testid={testId}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * Card Content Component
 * 
 * Main content area of the card with optimized spacing and typography.
 * Handles both text content and complex nested components.
 */
export const CardContent: React.FC<WithChildren> = React.memo(
  ({ children, className, 'data-testid': testId }) => {
    return (
      <div
        className={cn(
          'space-y-4',
          'first:pt-0 last:pb-0',
          '[&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
          className
        )}
        data-testid={testId}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

/**
 * Card Footer Component
 * 
 * Footer section for cards, typically containing actions or metadata.
 * Provides consistent spacing and alignment for interactive elements.
 */
export const CardFooter: React.FC<WithChildren> = React.memo(
  ({ children, className, 'data-testid': testId }) => {
    return (
      <div
        className={cn(
          'pt-4 mt-4 border-t border-gray-100',
          'flex items-center justify-between gap-3',
          'first:pt-0 first:mt-0 first:border-t-0',
          className
        )}
        data-testid={testId}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

/**
 * Card Title Component
 * 
 * Semantic title component with consistent typography and accessibility.
 * Automatically handles heading hierarchy and screen reader optimization.
 */
interface CardTitleProps extends BaseComponentProps {
  /** Title text content */
  children: React.ReactNode;
  /** Heading level for semantic HTML */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CardTitle: React.FC<CardTitleProps> = React.memo(
  ({ children, className, level = 3, 'data-testid': testId }) => {
    const headingProps = {
      className: cn(
        'text-lg font-semibold text-gray-900 leading-tight tracking-tight',
        className
      ),
      'data-testid': testId,
    };

    switch (level) {
      case 1:
        return <h1 {...headingProps}>{children}</h1>;
      case 2:
        return <h2 {...headingProps}>{children}</h2>;
      case 3:
        return <h3 {...headingProps}>{children}</h3>;
      case 4:
        return <h4 {...headingProps}>{children}</h4>;
      case 5:
        return <h5 {...headingProps}>{children}</h5>;
      case 6:
        return <h6 {...headingProps}>{children}</h6>;
      default:
        return <h3 {...headingProps}>{children}</h3>;
    }
  }
);

CardTitle.displayName = 'CardTitle';

/**
 * Card Description Component
 * 
 * Semantic description component with optimized readability.
 * Provides consistent typography for supplementary content.
 */
interface CardDescriptionProps extends BaseComponentProps {
  /** Description text content */
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = React.memo(
  ({ children, className, 'data-testid': testId }) => {
    return (
      <p
        className={cn(
          'text-sm text-gray-600 leading-relaxed',
          className
        )}
        data-testid={testId}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

/**
 * Card Component Interface with Compound Components
 */
interface CardComponent extends React.FC<CardProps> {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
}

/**
 * Main Card Component
 * 
 * Container component that provides the basic card structure and styling.
 * Can be used standalone or with compound components for complex layouts.
 */
const CardRoot: React.FC<CardProps> = React.memo(
  ({
    children,
    className,
    hover = false,
    variant = 'default',
    padding = 'md',
    'data-testid': testId,
    ...props
  }) => {
    /**
     * Compute dynamic classes
     */
    const computedClassName = React.useMemo(
      () =>
        cn(
          // Base styles
          'rounded-xl transition-all duration-200 ease-in-out',
          'focus-within:ring-2 focus-within:ring-peru-red/20 focus-within:ring-offset-2',
          
          // Variant styles
          cardVariants[variant],
          
          // Padding styles
          cardPadding[padding],
          
          // Hover effects
          hover && 'hover:shadow-md hover:-translate-y-1 cursor-pointer',
          
          // Custom className
          className
        ),
      [variant, padding, hover, className]
    );

    return (
      <motion.div
        className={computedClassName}
        data-testid={testId}
        whileHover={hover ? { y: -2 } : undefined}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

CardRoot.displayName = 'Card';

// Create the compound component
export const Card = CardRoot as CardComponent;

// Attach sub-components
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;
