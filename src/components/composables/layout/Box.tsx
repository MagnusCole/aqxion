import React, { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del box usando class-variance-authority
const boxVariants = cva(
  // Base styles que se aplican a todos los boxes
  "w-full transition-all duration-[var(--duration-200)] ease-[var(--ease-default)]",
  {
    variants: {
      variant: {
        default: `
          bg-[color:var(--color-bg-elevated)]
          border border-[color:var(--color-border-light)]
        `,
        outline: `
          border border-[color:var(--color-border)]
          bg-[color:var(--color-bg-elevated)]
        `,
        filled: `
          bg-[color:var(--color-bg-primary)]
          border-none
        `,
        elevated: `
          bg-[color:var(--color-bg-elevated)]
          border border-[color:var(--color-border-light)]
          shadow-[var(--shadow-md)]
        `,
        glass: `
          bg-[color:var(--color-bg-elevated)]/80
          backdrop-blur-md
          border border-[color:var(--color-border)]/50
        `,
        gradient: `
          bg-gradient-to-br
          from-[color:var(--color-bg-elevated)]
          to-[color:var(--color-bg-subtle)]
          border border-[color:var(--color-border-light)]
        `
      },      padding: {
        none: "p-0",
        xs: "p-[var(--spacing-2)] md:p-[var(--spacing-2-5)]",
        sm: "p-[var(--spacing-3)] md:p-[var(--spacing-3-5)]",
        md: "p-[var(--spacing-4)] md:p-[var(--spacing-5)]",
        lg: "p-[var(--spacing-6)] md:p-[var(--spacing-7)]",
        xl: "p-[var(--spacing-8)] md:p-[var(--spacing-9)]",
      },
      margin: {
        none: "m-[var(--spacing-0)]",
        xs: "m-[var(--spacing-2)]",
        sm: "m-[var(--spacing-3)]",
        md: "m-[var(--spacing-4)]",
        lg: "m-[var(--spacing-6)]",
        xl: "m-[var(--spacing-8)]",
      },
      borderRadius: {
        none: "rounded-none",
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
        xl: "rounded-[var(--radius-xl)]",
        full: "rounded-full",
      },      shadow: {
        none: "shadow-none",
        xs: "shadow-[var(--shadow-xs)]",
        sm: "shadow-[var(--shadow-sm)]",
        md: "shadow-[var(--shadow-md)]",
        lg: "shadow-[var(--shadow-lg)]",
        xl: "shadow-[var(--shadow-xl)]",
        "2xl": "shadow-[var(--shadow-2xl)]",
        inner: "shadow-[var(--shadow-inner)]",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        "1/2": "w-1/2",
        "1/3": "w-1/3",
        "2/3": "w-2/3",
        "1/4": "w-1/4",
        "3/4": "w-3/4",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      margin: "none",
      borderRadius: "md",
      shadow: "none",
      width: "full",
    },
  }
);

// Exportamos los tipos de las props para el componente Box
export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  as?: React.ElementType;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isInteractive?: boolean;
}

// Componente Box
const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ 
    className, 
    variant, 
    padding, 
    margin, 
    borderRadius,
    shadow,
    width,
    as: Component = "div", 
    title,
    description,
    header,
    footer,
    isInteractive = false,
    children,
    ...props 
  }, ref) => {
    return (
      <Component
        ref={ref}
        className={boxVariants({ 
          variant, 
          padding, 
          margin, 
          borderRadius,
          shadow,
          width,
          className: `${className || ""} ${isInteractive ? 'transition-all duration-200 hover:shadow-md cursor-pointer' : ''}` 
        })}
        {...props}
      >
        {(header || title || description) && (
          <div className={`${padding !== 'none' ? 'mb-4' : ''}`}>
            {header || (
              <>
                {title && (
                  <h3 className="text-lg font-bold text-[#1A2B3C] dark:text-white mb-1">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-sm text-[#4A5D70] dark:text-[#AEAEB2]">
                    {description}
                  </p>
                )}
              </>
            )}
          </div>
        )}
        
        <div>
          {children}
        </div>
        
        {footer && (
          <div className={`${padding !== 'none' ? 'mt-4' : ''}`}>
            {footer}
          </div>
        )}
      </Component>
    );
  }
);

Box.displayName = "Box";

// Componentes especializados
export const Card = React.forwardRef<HTMLDivElement, Omit<BoxProps, 'variant' | 'shadow'>>(
  (props, ref) => (
    <Box variant="outline" shadow="sm" ref={ref} {...props} />
  )
);

Card.displayName = "Card";

export const Panel = React.forwardRef<HTMLDivElement, Omit<BoxProps, 'variant' | 'borderRadius'>>(
  (props, ref) => (
    <Box variant="filled" borderRadius="none" ref={ref} {...props} />
  )
);

Panel.displayName = "Panel";

export { Box, boxVariants };