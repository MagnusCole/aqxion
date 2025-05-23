/**
 * @fileoverview Button Component - Componente base para todos los botones de la aplicación
 * @module components/atoms/Button
 * @since 1.0.0
 */

"use client"

import React, { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Define las variantes y estilos disponibles para el componente Button.
 * Incluye variantes de color, tamaño, estado y animaciones.
 */
const buttonVariants = cva(
  `
    inline-flex items-center justify-center
    font-[var(--font-primary)] font-[var(--font-weight-semibold)]
    transition-all duration-[var(--duration-200)] ease-[var(--ease-default)]
    focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-[color:var(--color-primary-500)]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[color:var(--color-bg-primary)]
    disabled:pointer-events-none
    disabled:opacity-50
    select-none
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-[color:var(--color-primary-600)]
          text-white
          border-[color:var(--color-primary-700)]
          shadow-sm
          hover:bg-[color:var(--color-primary-700)]
          hover:border-[color:var(--color-primary-800)]
          active:bg-[color:var(--color-primary-800)]
          disabled:bg-[color:var(--color-primary-200)]
          transform hover:scale-[1.02] active:scale-[0.98]
        `,
        secondary: `
          bg-[color:var(--color-bg-elevated)]
          text-[color:var(--color-text-primary)]
          border border-[color:var(--color-border)]
          shadow-sm
          hover:bg-[color:var(--color-bg-secondary)]
          hover:border-[color:var(--color-border-dark)]
          active:bg-[color:var(--color-bg-tertiary)]
          disabled:bg-[color:var(--color-bg-subtle)]
        `,
        outline: `
          bg-transparent
          text-[color:var(--color-primary-600)]
          border border-[color:var(--color-primary-600)]
          hover:bg-[color:var(--color-primary-50)]
          hover:border-[color:var(--color-primary-700)]
          active:bg-[color:var(--color-primary-100)]
          disabled:text-[color:var(--color-primary-300)]
          disabled:border-[color:var(--color-primary-200)]
        `,
        ghost: `
          bg-transparent
          text-[color:var(--color-text-primary)]
          hover:bg-[color:var(--color-bg-secondary)]
          active:bg-[color:var(--color-bg-tertiary)]
          disabled:text-[color:var(--color-text-quaternary)]
        `,
        link: `
          bg-transparent
          text-[color:var(--color-primary-600)]
          underline-offset-4
          hover:underline
          hover:text-[color:var(--color-primary-700)]
          active:text-[color:var(--color-primary-800)]
          disabled:text-[color:var(--color-primary-300)]
        `,
        error: `
          bg-[color:var(--color-error-600)]
          text-white
          border-[color:var(--color-error-700)]
          shadow-sm
          hover:bg-[color:var(--color-error-700)]
          active:bg-[color:var(--color-error-800)]
          disabled:bg-[color:var(--color-error-200)]
          transform hover:scale-[1.02] active:scale-[0.98]
        `,
        success: `
          bg-[color:var(--color-success-600)]
          text-white
          border-[color:var(--color-success-700)]
          shadow-sm
          hover:bg-[color:var(--color-success-700)]
          active:bg-[color:var(--color-success-800)]
          disabled:bg-[color:var(--color-success-200)]
          transform hover:scale-[1.02] active:scale-[0.98]
        `,
      },
      size: {
        xs: `
          h-[var(--spacing-8)]
          px-[var(--spacing-2-5)]
          text-[var(--font-size-xs)]
          rounded-[var(--radius-sm)]
        `,
        sm: `
          h-[var(--spacing-9)]
          px-[var(--spacing-3)]
          text-[var(--font-size-sm)]
          rounded-[var(--radius-md)]
        `,
        md: `
          h-[var(--spacing-10)]
          px-[var(--spacing-4)]
          text-[var(--font-size-base)]
          rounded-[var(--radius-md)]
        `,
        lg: `
          h-[var(--spacing-12)]
          px-[var(--spacing-6)]
          text-[var(--font-size-lg)]
          rounded-[var(--radius-lg)]
        `,
        xl: `
          h-[var(--spacing-14)]
          px-[var(--spacing-8)]
          text-[var(--font-size-xl)]
          rounded-[var(--radius-xl)]
        `,
        icon: {
          xs: 'h-[var(--spacing-8)] w-[var(--spacing-8)]',
          sm: 'h-[var(--spacing-9)] w-[var(--spacing-9)]',
          md: 'h-[var(--spacing-10)] w-[var(--spacing-10)]',
          lg: 'h-[var(--spacing-12)] w-[var(--spacing-12)]',
          xl: 'h-[var(--spacing-14)] w-[var(--spacing-14)]',
        },
      },
      fullWidth: {
        true: 'w-full',
      },
      maxWidth: {
        none: '',
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
      },
      textStyle: {
        normal: '',
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
      },
      textWeight: {
        normal: 'font-[var(--font-weight-regular)]',
        medium: 'font-[var(--font-weight-medium)]',
        semibold: 'font-[var(--font-weight-semibold)]',
        bold: 'font-[var(--font-weight-bold)]',
      },
      textAlign: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      },
      animation: {
        none: '',
        pulse: 'animate-pulse',
        bounce: 'animate-bounce',
      },
      state: {
        default: '',
        error: 'border-red-500 text-red-500',
        success: 'border-green-500 text-green-500',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      maxWidth: 'none',
      textStyle: 'normal',
      textWeight: 'semibold',
      textAlign: 'center',
      animation: 'none',
      state: 'default',
    },
    compoundVariants: [
      {
        variant: ['primary', 'secondary', 'outline', 'ghost', 'link'],
        className: 'active:scale-95',
      },
    ],
  }
);

/**
 * Props del componente Button
 * @interface ButtonProps
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>} - Props nativas del elemento button
 * @extends {VariantProps<typeof buttonVariants>} - Props de las variantes definidas por cva
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Permite renderizar el botón como otro elemento usando Radix Slot */
  asChild?: boolean;

  /** Ícono a mostrar a la izquierda del texto */
  leftIcon?: React.ReactNode;

  /** Ícono a mostrar a la derecha del texto */
  rightIcon?: React.ReactNode;

  /** Indica si el botón está en estado de carga */
  isLoading?: boolean;

  /** Texto a mostrar cuando isLoading es true */
  loadingText?: string;

  /** Espaciado personalizado para los íconos */
  iconSpacing?: string;

  /** Tamaño personalizado */
  customSize?: string;

  /** Función a ejecutar para tracking de clicks */
  onClickTrack?: () => void;

  /** Habilita comportamiento responsivo */
  responsive?: boolean;

  /** Rol ARIA del botón */
  role?: string;

  /** Estado expandido para ARIA */
  ariaExpanded?: boolean;

  /** ID del elemento controlado por el botón para ARIA */
  ariaControls?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    fullWidth,
    maxWidth,
    textStyle,
    textWeight,
    textAlign,
    animation,
    state,
    children,
    leftIcon,
    rightIcon,
    isLoading = false,
    loadingText,
    iconSpacing = 'mr-2',
    customSize,
    onClickTrack,
    responsive = false,
    role,
    ariaExpanded,
    ariaControls,
    ...props
  }, ref) => {
    // Estilos personalizados basados en props
    const customStyles = customSize ? { height: customSize, minWidth: customSize } : {};
    
    // Clase responsive para dispositivos móviles
    const responsiveClass = responsive ? 'flex-col md:flex-row w-full md:w-auto' : '';
    
    // Manejador de clics con seguimiento
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.onClick) {
        props.onClick(e);
      }
      if (onClickTrack) {
        onClickTrack();
      }
    };
    
    // Renderizado del spinner de carga
    const renderSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
    
    return (
      <button
        className={buttonVariants({
          variant,
          size,
          fullWidth,
          maxWidth,
          textStyle,
          textWeight,
          textAlign,
          animation,
          state,
          className: `${className || ''} ${responsiveClass}`
        })}
        ref={ref}
        style={customStyles}
        onClick={handleClick}
        role={role}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            {renderSpinner()}
            {loadingText || children}
          </>
        ) : (
          <>
            {leftIcon && <span className={iconSpacing}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={`ml-2 ${iconSpacing}`}>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };