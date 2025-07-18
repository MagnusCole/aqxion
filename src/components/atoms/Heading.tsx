// LLM-OPTIMIZED: Refactored Heading component for strict TS and consistency
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define las variantes de heading usando class-variance-authority
const headingVariants = cva(
  [
    "font-[var(--font-primary)] font-[var(--font-weight-bold)]",
    "max-w-fit text-[color:var(--color-text-primary)]", 
    "leading-[1.1] tracking-[-0.03em]",
  ].join(" "),
  {
    variants: {
      level: {
        h1: "text-[clamp(2.5rem,6vw,4.5rem)]", // HeadingHero responsivo
        h2: "text-[clamp(2.25rem,5vw,3.5rem)]", // HeadingSection responsivo
        h3: "text-[clamp(1.75rem,3.5vw,2.25rem)]",
        h4: "text-[clamp(1.375rem,2.5vw,1.75rem)]",
        h5: "text-[clamp(1.125rem,1.75vw,1.375rem)]",
        h6: "text-[clamp(1rem,1.25vw,1.125rem)]",
      },
      size: {
        xs: "text-[clamp(0.75rem,0.8vw,0.875rem)]",
        sm: "text-[clamp(0.875rem,1vw,1rem)]",
        md: "text-[clamp(1rem,1.2vw,1.125rem)]",
        lg: "text-[clamp(1.125rem,1.5vw,1.25rem)]",
        xl: "text-[clamp(1.375rem,2vw,1.5rem)]",
        "2xl": "text-[clamp(1.75rem,2.5vw,2rem)]",
        "3xl": "text-[clamp(2.25rem,3vw,2.5rem)]",
        "4xl": "text-[clamp(2.75rem,4vw,3.25rem)]",
        "5xl": "text-[clamp(3.25rem,5vw,4rem)]",
        "6xl": "text-[clamp(3.75rem,6vw,4.5rem)]",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      weight: {
        regular: "font-[var(--font-weight-regular)]",
        medium: "font-[var(--font-weight-medium)]",
        semibold: "font-[var(--font-weight-semibold)]",
        bold: "font-[var(--font-weight-bold)]",
      },
    },
    defaultVariants: {
      level: "h2",
      align: "left",
      weight: "bold",
    },
  }
);

// Tipos de props para el componente Heading
export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode;
}

// Componente Heading
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, size, align, weight, children, ...props }, ref) => {
    // Mapear el valor de level a un elemento HTML válido
    const getHeadingElement = () => {
      switch(level) {
        case "h1": return "h1";
        case "h2": return "h2";
        case "h3": return "h3";
        case "h4": return "h4";
        case "h5": return "h5";
        case "h6": return "h6";
        default: return "h2";
      }
    };
    
    const HeadingTag = getHeadingElement();
    
    return React.createElement(
      HeadingTag,
      {
        ref,
        className: headingVariants({ level, size, align, weight, className }),
        ...props
      },
      children
    );
  }
);

Heading.displayName = "Heading";

// Componentes especializados
export const HeadingHero = (props: Omit<HeadingProps, 'level'>) => (
  <Heading level="h1" {...props} />
);

export const HeadingSection = (props: Omit<HeadingProps, 'level'>) => (
  <Heading level="h2" {...props} />
);

export { Heading, headingVariants };
