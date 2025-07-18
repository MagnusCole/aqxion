/**
 * @fileoverview Section Component - Un componente fundamental para estructurar el contenido de la página
 * @module components/composables/layout/Section
 * @since 2.0.0
 */

import React, { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Container } from './Container';

/**
 * Define las variantes visuales y de comportamiento disponibles para el componente Section.
 * Utiliza class-variance-authority para una gestión tipada y flexible de las clases CSS.
 * 
 * @see https://cva.style/docs
 */
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
        light: "bg-neutral-50", // Gris claro estilo Apple
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

/**
 * Props para el componente Section.
 * @interface SectionProps
 * @extends {HTMLAttributes<HTMLElement>}
 * @extends {VariantProps<typeof sectionVariants>}
 */
export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /** 
   * Elemento HTML a renderizar. Por defecto es 'section'.
   * @default 'section'
   */
  as?: React.ElementType;

  /**
   * Contenido de la sección.
   */
  children: React.ReactNode;

  /**
   * Si es true, envuelve el contenido en un Container.
   * @default false
   * @see Container
   */
  container?: boolean;

  /**
   * Tamaño del Container cuando container=true.
   * @default "lg"
   */
  containerSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  /**
   * ID único de la sección.
   */
  id?: string;

  /**
   * Espaciado vertical entre elementos hijos.
   * @default "md"
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";

  /**
   * Habilita animaciones y transiciones responsivas.
   * @default true
   */
  responsive?: boolean;

  /**
   * Centra el contenido vertical y horizontalmente.
   * @default false
   */
  centerContent?: boolean;
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