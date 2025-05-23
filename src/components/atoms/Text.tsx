/**
 * @fileoverview Text Component - Componente base para todo el texto de la aplicación
 * @module components/atoms/Text
 * @since 1.0.0
 * 
 * El componente Text proporciona una forma consistente de mostrar texto en la aplicación,
 * siguiendo el sistema de diseño definido. Soporta múltiples variantes, tamaños y pesos
 * tipográficos, así como alineación y características responsive.
 */

"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Define las variantes y estilos disponibles para el componente Text.
 * Utiliza CSS custom properties para mantener consistencia con el sistema de diseño.
 */
const textVariants = cva(
  // Base styles que se aplican a todos los textos
  "max-w-full transition-colors duration-[var(--duration-200)] ease-[var(--ease-default)]",
  {
    variants: {
      variant: {
        body: `
          font-[var(--font-secondary)]
          font-[var(--font-weight-regular)]
          leading-[var(--line-height-relaxed)]
          text-[color:var(--color-text-secondary)]
          tracking-[var(--letter-spacing-normal)]
        `,
        subheading: `
          font-[var(--font-secondary)]
          font-[var(--font-weight-medium)]
          leading-[var(--line-height-normal)]
          text-[color:var(--color-text-secondary)]
          tracking-[var(--letter-spacing-tight)]
        `,
        metric: `
          font-[var(--font-primary)]
          font-[var(--font-weight-semibold)]
          leading-[var(--line-height-tight)]
          text-[color:var(--color-primary-600)]
          tracking-[var(--letter-spacing-tight)]
        `,
        caption: `
          font-[var(--font-secondary)]
          font-[var(--font-weight-medium)]
          leading-[var(--line-height-normal)]
          text-[color:var(--color-text-tertiary)]
          tracking-[var(--letter-spacing-wide)]
        `,
        link: `
          font-[var(--font-secondary)]
          font-[var(--font-weight-medium)]
          text-[color:var(--color-primary-600)]
          hover:text-[color:var(--color-primary-700)]
          hover:underline
          underline-offset-4
          transition-colors duration-[var(--duration-200)]
        `,
        success: `
          font-[var(--font-secondary)]
          font-[var(--font-weight-medium)]
          text-[color:var(--color-success-600)]
        `,
        error: `
          font-[var(--font-secondary)]
          font-[var(--font-weight-medium)]
          text-[color:var(--color-error-600)]
        `,
      },
      size: {
        xs: "text-[var(--font-size-xs)]",
        sm: "text-[var(--font-size-sm)]",
        base: "text-[var(--font-size-base)]",
        lg: "text-[var(--font-size-lg)]",
        xl: "text-[var(--font-size-xl)]",
        "2xl": "text-[var(--font-size-2xl)]",
        "3xl": "text-[var(--font-size-3xl)]",
        "4xl": "text-[var(--font-size-4xl)]",
        "5xl": "text-[2rem] md:text-[2.75rem] lg:text-[3.5rem]",
        "6xl": "text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]",
        "7xl": "text-[3rem] md:text-[4.5rem] lg:text-[6rem]",
        "8xl": "text-[4rem] md:text-[6rem] lg:text-[8rem]",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      weight: {
        normal: "font-[var(--font-weight-regular)]",
        medium: "font-[var(--font-weight-medium)]",
        semibold: "font-[var(--font-weight-semibold)]",
        bold: "font-[var(--font-weight-bold)]",
      },
    },
    defaultVariants: {
      variant: "body",
      size: "base",
      align: "left",
    },
  }
);

/**
 * Props para el componente Text.
 * @interface TextProps
 * @extends {React.HTMLAttributes<HTMLParagraphElement>} - Props nativas del elemento p
 * @extends {VariantProps<typeof textVariants>} - Props de las variantes definidas por cva
 */
export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  /** 
   * Elemento HTML a renderizar. Por defecto es 'p'.
   * @default 'p'
   */
  as?: React.ElementType;

  /**
   * Contenido del texto.
   */
  children: React.ReactNode;
}

/**
 * Componente Text - Proporciona estilos consistentes para texto.
 * 
 * @example
 * // Texto de cuerpo básico
 * <Text>Contenido normal</Text>
 * 
 * // Texto con variante y tamaño específicos
 * <Text variant="subheading" size="lg">Subtítulo grande</Text>
 * 
 * // Texto métrico con alineación
 * <Text variant="metric" align="center">100+</Text>
 */

// Componente Text
const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, align, weight, as: Component = "p", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={textVariants({ variant, size, align, weight, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

// Componentes especializados basados en Text
export const BodyText = (props: Omit<TextProps, 'variant'>) => (
  <Text variant="body" {...props} />
);

export const Subheading = (props: Omit<TextProps, 'variant' | 'size'>) => (
  <Text variant="subheading" size="lg" {...props} />
);

export const MetricText = (props: Omit<TextProps, 'variant' | 'size'>) => (
  <Text variant="metric" size="xl" {...props} />
);

export { Text, textVariants };
