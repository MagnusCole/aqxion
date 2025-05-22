import { ReactNode, ButtonHTMLAttributes } from 'react';
import { CTAText } from './Typography';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Botón Primario - Fondo #3182CE, texto blanco, hover #2B6CB0
 * Para CTAs principales como "Sell Your Business"
 */
export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded transition-colors duration-200';
  
  const variantStyles = {
    primary: 'bg-accent-cta text-white hover:bg-[#2B6CB0] focus:ring-2 focus:ring-offset-2 focus:ring-accent-cta',
    secondary: 'border border-accent-main text-accent-main hover:bg-bg-secondary focus:ring-2 focus:ring-offset-2 focus:ring-accent-main'
  };

  const buttonContent = <CTAText>{children}</CTAText>;

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {buttonContent}
    </button>
  );
}

/**
 * Botón CTA - Fondo #3182CE, texto blanco, hover #2B6CB0
 * Para botones destacados como "Sell Your Business"
 */
export function CTAButton({
  children,
  className = '',
  ...props
}: Omit<ButtonProps, 'variant'>) {
  return (
    <Button
      variant="primary"
      className={`${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

/**
 * Botón Dorado - Borde #B38B4C, texto dorado, hover fondo dorado
 * Para elementos premium
 */
export function ButtonOutlineGold({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block border border-accent-tertiary text-accent-tertiary rounded px-6 py-3 hover:bg-accent-tertiary hover:text-white transition-colors duration-200"
    >
      <CTAText>{children}</CTAText>
    </a>
  );
}
