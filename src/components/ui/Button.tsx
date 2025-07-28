// Button optimizado
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', variant = 'primary', size = 'md', fullWidth = false, isLoading = false, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
    
    const variants = {
      primary: 'bg-peru-red text-white hover:bg-red-700 focus:ring-peru-red shadow-lg hover:shadow-xl',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
    };
    
    const sizes = {
      sm: 'px-4 py-3 text-sm',
      md: 'px-6 py-4 text-base', 
      lg: 'px-8 py-5 text-lg'
    };
    
    const classes = [
      baseClasses,
      variants[variant],
      sizes[size],
      fullWidth ? 'w-full' : '',
      className
    ].filter(Boolean).join(' ');
    
    return (
      <button 
        ref={ref} 
        className={classes} 
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? 'Cargando...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
