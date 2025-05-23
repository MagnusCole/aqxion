import React, { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del botón usando class-variance-authority
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[var(--radius-md)] font-[var(--font-primary)] font-[var(--font-weight-semibold)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-border)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[color:var(--color-text-primary)] text-white hover:bg-[color:var(--color-text-secondary)]',
        secondary: 'border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-bg-secondary)]',
        outline: 'border border-[color:var(--color-border)] bg-transparent hover:bg-[color:var(--color-bg-primary)] text-[color:var(--color-text-primary)]',
        ghost: 'bg-transparent hover:bg-[color:var(--color-bg-primary)] text-[color:var(--color-text-primary)]',
        link: 'bg-transparent underline-offset-4 hover:underline text-[color:var(--color-text-primary)]',
        error: 'bg-red-600 text-white hover:bg-red-700',
        success: 'bg-green-600 text-white hover:bg-green-700',
      },
      size: {
        sm: 'h-[var(--spacing-9)] px-[var(--spacing-3)] text-[0.875rem]',
        md: 'h-[var(--spacing-10)] px-[var(--spacing-4)] text-[var(--font-size-cta)]',
        lg: 'h-[var(--spacing-12)] px-[var(--spacing-6)] text-[1.125rem]',
        icon: 'h-[var(--spacing-10)] w-[var(--spacing-10)]',
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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  iconSpacing?: string;
  customSize?: string;
  onClickTrack?: () => void;
  responsive?: boolean;
  role?: string;
  ariaExpanded?: boolean;
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