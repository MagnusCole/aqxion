import React, { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del contenedor usando class-variance-authority
const containerVariants = cva(
  // Base styles que se aplican a todos los contenedores
  // Estilo Apple: centrado con márgenes laterales fluidos y reducidos
  "mx-auto w-full px-[clamp(1rem,4vw,2rem)]",
  {
    variants: {
      size: {
        sm: "max-w-[var(--container-sm)]",
        md: "max-w-[var(--container-md)]",
        lg: "max-w-[var(--container-lg)]",
        xl: "max-w-[var(--container-xl)]",
        "2xl": "max-w-[var(--container-2xl)]",
        full: "max-w-full",
      },
      padding: {
        none: "py-0",
        sm: "py-[var(--spacing-2)]",
        md: "py-[var(--spacing-4)]",
        lg: "py-[var(--spacing-6)]",
        xl: "py-[var(--spacing-8)]",
        xxl: "py-[var(--spacing-section-y)]",
      },
      center: {
        true: "flex items-center justify-center",
      },
    },
    defaultVariants: {
      size: "lg",
      padding: "none", // Por defecto sin padding vertical para evitar espaciado excesivo
      center: false,
    },
  }
);

// Exportamos los tipos de las props para el componente Container
export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
}

// Componente Container
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, center, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={containerVariants({ size, padding, center, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };