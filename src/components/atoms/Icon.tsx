import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del icono usando class-variance-authority
const iconVariants = cva(
  // Base styles que se aplican a todos los iconos
  "inline-flex shrink-0",
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10",
      },
      color: {
        primary: "text-[#1A2B3C] dark:text-white",
        secondary: "text-[#4A5D70] dark:text-[#AEAEB2]",
        muted: "text-[#A3B1C0] dark:text-[#8E8E93]",
        accent: "text-[#2A5298] dark:text-[#3182CE]",
        alert: "text-[#9B2C2C] dark:text-[#F56565]",
        success: "text-[#276749] dark:text-[#48BB78]",
      },
      variant: {
        default: "stroke-current",
        solid: "fill-current stroke-none",
        outline: "fill-none stroke-current stroke-[1.5]",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
      variant: "default",
    },
  }
);

// Exportamos los tipos de las props para el componente Icon
export interface IconProps
  extends Omit<React.SVGAttributes<SVGElement>, 'color' | 'size'>,
    VariantProps<typeof iconVariants> {
  name: string;
  ariaLabel?: string;
  label?: string;
}

// Componente Icon
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, color, variant, name, ariaLabel, label, ...props }, ref) => {
    // Esta función es un placeholder para mapear nombres de iconos a SVGs
    // Deberías reemplazarla con una implementación real que utilice una librería de iconos
    // como Lucide React, Heroicons, etc.
    const renderIcon = () => {
      // Placeholder SVG (signo de plus)
      return (
        <svg 
          ref={ref}
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={iconVariants({ size, color, variant, className })}
          aria-hidden={label || ariaLabel ? "false" : "true"}
          aria-label={ariaLabel || label || name}
          role={label || ariaLabel ? "img" : "presentation"}
          {...props}
        >
          <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    };

    // Si se proporciona una etiqueta, envuelve el icono en un span con la etiqueta
    if (label) {
      return (
        <span className="inline-flex items-center gap-1.5">
          {renderIcon()}
          <span className="sr-only">{label}</span>
        </span>
      );
    }

    return renderIcon();
  }
);

Icon.displayName = "Icon";

// Componentes especializados basados en Icon
export const StatusIcon = (props: Omit<IconProps, 'size'>) => (
  <Icon size="sm" {...props} />
);

export const ButtonIcon = (props: Omit<IconProps, 'size' | 'color'>) => (
  <Icon size="md" color="primary" {...props} />
);

export { Icon, iconVariants };