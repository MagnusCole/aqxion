import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes de texto usando class-variance-authority
const textVariants = cva(
  // Base styles que se aplican a todos los textos
  "max-w-full",
  {
    variants: {
      variant: {
        body: "font-[var(--font-secondary)] font-[var(--font-weight-regular)] leading-[var(--line-height-relaxed)] text-[color:var(--color-text-secondary)]", // BodyText
        subheading: "font-[var(--font-secondary)] font-[var(--font-weight-medium)] leading-[var(--line-height-normal)] text-[color:var(--color-text-secondary)]", // Subheading
        metric: "font-[var(--font-primary)] font-[var(--font-weight-semibold)] leading-[var(--line-height-tight)] text-[color:var(--color-accent-secondary)]", // MetricText
        placeholder: "font-[var(--font-secondary)] font-[var(--font-weight-regular)] text-[color:var(--color-text-tertiary)]", // Placeholder
        link: "font-[var(--font-secondary)] font-[var(--font-weight-regular)] text-[color:var(--color-text-link)] hover:underline", // Link
        alert: "font-[var(--font-primary)] font-[var(--font-weight-semibold)] text-[color:var(--color-accent-alert)]", // Alert
      },
      size: {
        xs: "text-[0.75rem]",
        sm: "text-[0.8125rem] md:text-[0.875rem]",
        base: "text-[0.9375rem] md:text-[var(--font-size-body)]",
        lg: "text-[1rem] md:text-[1.125rem]",
        xl: "text-[1.125rem] md:text-[1.25rem]",
        "2xl": "text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem]",
        "3xl": "text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]",
        "4xl": "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem]",
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

// Exportamos los tipos de las props para el componente Text
export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
}

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
