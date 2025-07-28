/**
 * 🎨 Form Components Redesigned - Mantiene las vibes del sitio
 * 
 * Inspirado en el diseño award-winning del Hero, con la misma sofisticación
 * tipográfica y espaciado que caracteriza a toda la experiencia AQXION.
 * 
 * @features
 * - Typography matching hero section
 * - Smooth hover states and transitions  
 * - Peru brand colors integration
 * - Mobile-first responsive design
 * - Accessibility compliant
 * - Form validation visual feedback
 */

'use client';
import React from 'react';
import { cn } from '@/utils';

interface FormFieldProps {
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'date' | 'url' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  icon?: React.ReactNode;
  helpText?: string;
}

/**
 * FormField with award-winning typography matching the site's aesthetic
 */
export const FormFieldRedesigned: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  error,
  icon,
  helpText
}) => {
  return (
    <div className={cn('space-y-3', className)}>
      {label && (
        <label className="block text-base font-medium text-gray-900 tracking-tight">
          {label} {required && <span className="text-peru-red font-normal">*</span>}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-peru-red transition-colors duration-200">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          disabled={disabled}
          className={cn(
            'w-full text-base font-light tracking-tight text-gray-900 placeholder-gray-500',
            'bg-white border border-gray-200 rounded-xl',
            icon ? 'pl-14 pr-5' : 'px-5',
            'py-4 lg:py-5',
            'focus:outline-none focus:ring-2 focus:ring-peru-red/10 focus:border-peru-red',
            'transition-all duration-300 ease-out',
            'hover:border-gray-300 hover:shadow-sm',
            'focus:shadow-md',
            'disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
          )}
        />
        {/* Subtle glow effect on focus */}
        <div className="absolute inset-0 rounded-xl bg-peru-red/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      {helpText && !error && (
        <p className="text-sm font-light text-gray-600 leading-relaxed">{helpText}</p>
      )}
      {error && (
        <p className="text-sm font-medium text-red-600 leading-relaxed">{error}</p>
      )}
    </div>
  );
};

interface FormTextareaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
  error?: string;
  helpText?: string;
}

/**
 * FormTextarea with award-winning typography matching the site's aesthetic
 */
export const FormTextareaRedesigned: React.FC<FormTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  error,
  helpText
}) => {
  return (
    <div className={cn('space-y-3', className)}>
      {label && (
        <label className="block text-base font-medium text-gray-900 tracking-tight">
          {label} {required && <span className="text-peru-red font-normal">*</span>}
        </label>
      )}
      <div className="relative group">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          disabled={disabled}
          rows={rows}
          className={cn(
            'w-full px-5 py-4 lg:py-5',
            'text-base font-light tracking-tight text-gray-900 placeholder-gray-500',
            'bg-white border border-gray-200 rounded-xl',
            'focus:outline-none focus:ring-2 focus:ring-peru-red/10 focus:border-peru-red',
            'transition-all duration-300 ease-out',
            'hover:border-gray-300 hover:shadow-sm',
            'focus:shadow-md',
            'disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500',
            'resize-none leading-relaxed',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
          )}
        />
        {/* Subtle glow effect on focus */}
        <div className="absolute inset-0 rounded-xl bg-peru-red/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      {helpText && !error && (
        <p className="text-sm font-light text-gray-600 leading-relaxed">{helpText}</p>
      )}
      {error && (
        <p className="text-sm font-medium text-red-600 leading-relaxed">{error}</p>
      )}
    </div>
  );
};

interface FormSelectProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; description?: string }[];
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  helpText?: string;
  icon?: React.ReactNode;
}

/**
 * FormSelect with award-winning typography matching the site's aesthetic
 */
export const FormSelectRedesigned: React.FC<FormSelectProps> = ({
  label,
  placeholder = "Seleccionar...",
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  className = '',
  error,
  helpText,
  icon
}) => {
  return (
    <div className={cn('space-y-3', className)}>
      {label && (
        <label className="block text-base font-medium text-gray-900 tracking-tight">
          {label} {required && <span className="text-peru-red font-normal">*</span>}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-peru-red transition-colors duration-200">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          disabled={disabled}
          className={cn(
            'w-full text-base font-light tracking-tight text-gray-900',
            'bg-white border border-gray-200 rounded-xl',
            icon ? 'pl-14 pr-12' : 'px-5 pr-12',
            'py-4 lg:py-5',
            'focus:outline-none focus:ring-2 focus:ring-peru-red/10 focus:border-peru-red',
            'transition-all duration-300 ease-out',
            'hover:border-gray-300 hover:shadow-sm',
            'focus:shadow-md',
            'disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500',
            'appearance-none cursor-pointer',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-peru-red transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {/* Subtle glow effect on focus */}
        <div className="absolute inset-0 rounded-xl bg-peru-red/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      {helpText && !error && (
        <p className="text-sm font-light text-gray-600 leading-relaxed">{helpText}</p>
      )}
      {error && (
        <p className="text-sm font-medium text-red-600 leading-relaxed">{error}</p>
      )}
    </div>
  );
};

interface FormButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * FormButton with award-winning styling matching the site's CTA buttons
 */
export const FormButtonRedesigned: React.FC<FormButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'lg',
  disabled = false,
  loading = false,
  className = '',
  onClick
}) => {
  const baseStyles = cn(
    'group inline-flex items-center justify-center font-medium tracking-tight',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'active:scale-[0.98] disabled:cursor-not-allowed',
    'rounded-xl shadow-sm hover:shadow-md active:shadow-lg'
  );

  const variantStyles = {
    primary: cn(
      'bg-peru-red text-white',
      'hover:bg-red-700 focus:ring-peru-red',
      'disabled:bg-gray-300 disabled:text-gray-500',
      'shadow-peru-red/20 hover:shadow-peru-red/30'
    ),
    secondary: cn(
      'bg-gray-100 text-gray-900',
      'hover:bg-gray-200 focus:ring-gray-500',
      'disabled:bg-gray-50 disabled:text-gray-400'
    ),
    outline: cn(
      'border-2 border-peru-red text-peru-red bg-white',
      'hover:bg-peru-red hover:text-white focus:ring-peru-red',
      'disabled:border-gray-300 disabled:text-gray-400'
    )
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg w-full sm:w-auto'
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Procesando...
        </>
      ) : (
        children
      )}
    </button>
  );
};

interface FormCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
}

/**
 * FormCheckbox with award-winning styling matching the site's aesthetic
 */
export const FormCheckboxRedesigned: React.FC<FormCheckboxProps> = ({
  label,
  checked,
  onChange,
  required = false,
  disabled = false,
  className = '',
  error
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            required={required}
            disabled={disabled}
            className="sr-only"
          />
          <div className={cn(
            'w-5 h-5 border-2 rounded transition-all duration-200',
            'group-hover:border-peru-red',
            checked
              ? 'bg-peru-red border-peru-red'
              : 'bg-white border-gray-300',
            disabled && 'opacity-50 cursor-not-allowed',
            error && 'border-red-300'
          )}>
            {checked && (
              <svg className="w-3 h-3 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
        <span className={cn(
          'text-sm font-light text-gray-700 leading-relaxed',
          disabled && 'text-gray-400'
        )}>
          {label} {required && <span className="text-peru-red">*</span>}
        </span>
      </label>
      {error && (
        <p className="text-sm font-medium text-red-600 leading-relaxed ml-8">{error}</p>
      )}
    </div>
  );
};
