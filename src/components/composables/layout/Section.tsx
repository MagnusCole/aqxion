import React, { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Container } from './Container';

// Definimos las variantes de sección usando class-variance-authority
const sectionVariants = cva(
  // Base styles que se aplican a todas las secciones - estilo Apple
  "w-full overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-[color:var(--color-bg-primary)]", // Fondo Principal
        secondary: "bg-[color:var(--color-bg-secondary)]", // Fondo Secundario
        card: "bg-white dark:bg-[color:var(--color-dark-bg-primary-elevated)]", // Fondo Tarjeta
        accent: "bg-[color:var(--color-accent)]", // Fondo Acento
        transparent: "bg-transparent", // Fondo Transparente
        dark: "bg-[color:var(--color-dark-bg-primary)]", // Fondo Oscuro
        light: "bg-[#f5f5f7]", // Gris claro estilo Apple
        white: "bg-white", // Blanco puro estilo Apple
      },
      padding: {
        none: "py-0",
        sm: "py-[var(--spacing-section-sm-y)]", // Usa variable CSS para consistencia
        md: "py-[clamp(2rem,4vw,3rem)]", // Estilo Apple: compacto pero espacioso
        lg: "py-[clamp(2.5rem,5vw,4rem)]", // Estilo Apple: espaciado medio
        xl: "py-[var(--spacing-section-y)]", // Estilo Apple: espaciado amplio
      },
    },
    defaultVariants: {
      variant: "primary",
      padding: "lg",
    },
  }
);

// Exportamos los tipos de las props para el componente Section
export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  id?: string;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean; // Controla si la sección responde a viewports
  centerContent?: boolean; // Permite centrar el contenido
}

// Componente Section mejorado
const Section = React.forwardRef<HTMLElement, SectionProps>((
  { 
    className, 
    variant, 
    padding, 
    spacing = "md", 
    as: Component = "section", 
    children, 
    container = false,
    containerSize = "lg",
    responsive = true,
    centerContent = false,
    ...props 
  }, ref) => {
    // Mapeo para clases de espaciado
    const spacingClasses = {
      none: "space-y-0",
      sm: "space-y-2",
      md: "space-y-3", // Ajustado para ser más compacto
      lg: "space-y-4", // Ajustado para ser más compacto
      xl: "space-y-5", // Ajustado para ser más compacto
    };

    // Creamos los estilos dinámicos para la sección
    const sectionStyles = [
      sectionVariants({ variant, padding, className }),
      centerContent ? 'flex flex-col justify-center items-center' : '',
      responsive ? 'transition-all duration-300' : '',
    ].filter(Boolean).join(' ');

    // Verificamos si los children contienen un header y content separados
    // o si debemos usar la estructura antigua
    const hasStructuredChildren = !container && React.Children.toArray(children).some(
      child => React.isValidElement(child) && child.type === Container
    );

    return (
      <Component
        ref={ref}
        className={sectionStyles}
        {...props}
      >
        {container && (
          <Container size={containerSize} className={spacingClasses[spacing]}>
            {children}
          </Container>
        )}
        {!container && !hasStructuredChildren && children}
        {!container && hasStructuredChildren && children}
      </Component>
    );
  }
);

Section.displayName = "Section";

export { Section, sectionVariants };