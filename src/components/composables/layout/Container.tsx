import React, { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del contenedor usando class-variance-authority
const containerVariants = cva(
  // Base styles que se aplican a todos los contenedores
  // Estilo Apple: centrado con márgenes laterales fluidos y reducidos
  "w-full mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        sm: "max-w-[640px]",
        md: "max-w-[768px]",
        lg: "max-w-[1024px]",
        xl: "max-w-[1280px]",
        "2xl": "max-w-[1536px]",
        full: "max-w-full",
      },
      spacing: {
        none: "space-y-0",
        sm: "space-y-4",
        md: "space-y-6",
        lg: "space-y-8",
        xl: "space-y-12",
      },
    },
    defaultVariants: {
      size: "lg",
      spacing: "md",
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
  ({ className, size, spacing, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={containerVariants({ size, spacing, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };