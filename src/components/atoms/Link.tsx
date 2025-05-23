/**
 * @fileoverview Link Component - Componente base para todos los enlaces de la aplicación
 * @module components/atoms/Link
 * @since 1.0.0
 * 
 * El componente Link proporciona:
 * - Estilos consistentes con el sistema de diseño
 * - Manejo automático de enlaces externos
 * - Soporte para íconos
 * - Accesibilidad mejorada
 */

"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Define las variantes y estilos disponibles para el componente Link.
 */
const linkVariants = cva(
  // Base styles que se aplican a todos los enlaces
  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1D1D6] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-[#2A5298] hover:text-[#1C3A6B] dark:text-[#3182CE] dark:hover:text-[#4299E1]",
        muted: "text-[#4A5D70] hover:text-[#1A2B3C] dark:text-[#AEAEB2] dark:hover:text-white",
        contrast: "text-[#1A2B3C] hover:text-[#1C3A6B] dark:text-white dark:hover:text-[#E2E8F0]",
        destructive: "text-[#9B2C2C] hover:text-[#7B202B] dark:text-[#F56565] dark:hover:text-[#FC8181]"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      decoration: {
        none: "",
        underline: "underline underline-offset-4",
        hover: "hover:underline underline-offset-4",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
      },
      withIcon: {
        true: "inline-flex items-center gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      decoration: "hover",
      weight: "normal",
      withIcon: false,
    },
  }
);

// Exportamos los tipos de las props para el componente Link
/**
 * Props para el componente Link.
 * @interface LinkProps
 * @extends {React.AnchorHTMLAttributes<HTMLAnchorElement>}
 * @extends {VariantProps<typeof linkVariants>}
 */
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  /** URL del enlace */
  href: string;

  /** Contenido del enlace */
  children: React.ReactNode;

  /** Indica si el enlace es externo (abrirá en nueva pestaña) */
  external?: boolean;

  /** Ícono opcional para el enlace */
  icon?: React.ReactNode;

  /** Posición del ícono */
  iconPosition?: "left" | "right";
}

/**
 * Componente Link - Proporciona enlaces estilizados y accesibles.
 * 
 * @example
 * // Enlace básico
 * <Link href="/ruta">Texto del enlace</Link>
 * 
 * // Enlace externo con ícono
 * <Link href="https://ejemplo.com" external icon={<ExternalIcon />}>
 *   Sitio externo
 * </Link>
 * 
 * // Enlace con variante y decoración
 * <Link href="/contacto" variant="contrast" decoration="underline">
 *   Contáctanos
 * </Link>
 */
// Componente Link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    variant, 
    size, 
    decoration, 
    weight,
    href, 
    children, 
    external = false,
    icon,
    iconPosition = "left",
    ...props 
  }, ref) => {
    // Si hay un icono, configuramos withIcon en true
    const hasIcon = Boolean(icon);

    // Atributos para enlaces externos
    const externalProps = external
      ? { 
          target: "_blank", 
          rel: "noopener noreferrer",
          "aria-label": `${children} (opens in a new tab)`
        }
      : {};

    return (
      <a
        ref={ref}
        href={href}
        className={linkVariants({ 
          variant, 
          size, 
          decoration, 
          weight,
          withIcon: hasIcon,
          className 
        })}
        {...externalProps}
        {...props}
      >
        {hasIcon && iconPosition === "left" && icon}
        {children}
        {hasIcon && iconPosition === "right" && icon}
        {external && (
          <span className="sr-only"> (opens in a new tab)</span>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";

// Componentes especializados
export const NavLink = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'decoration' | 'weight'>>(
  (props, ref) => (
    <Link decoration="none" weight="medium" ref={ref} {...props} />
  )
);

NavLink.displayName = "NavLink";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'decoration' | 'weight'>>(
  (props, ref) => (
    <Link 
      className="inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition-colors hover:bg-[#F2F2F7] dark:hover:bg-[#2C2C2E]" 
      decoration="none" 
      weight="semibold" 
      ref={ref} 
      {...props} 
    />
  )
);

ButtonLink.displayName = "ButtonLink";

export { Link, linkVariants };