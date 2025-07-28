// FormField Component - Conversion-optimized styling for lead capture
'use client';
import React from 'react';

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

export const FormField: React.FC<FormFieldProps> = ({
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
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-800">
          {label} {required && <span className="text-peru-red">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
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
          className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 hover:border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md focus:shadow-lg text-base`}
        />
      </div>
      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-xs text-peru-red font-medium">{error}</p>
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

export const FormTextarea: React.FC<FormTextareaProps> = ({
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
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-800">
          {label} {required && <span className="text-peru-red">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        rows={rows}
        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 hover:border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed resize-none shadow-sm hover:shadow-md focus:shadow-lg text-base"
      />
      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-xs text-peru-red font-medium">{error}</p>
      )}
    </div>
  );
};

interface FormSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; description?: string }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  helpText?: string;
  icon?: React.ReactNode;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  error,
  helpText,
  icon
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-800">
          {label} {required && <span className="text-peru-red">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          disabled={disabled}
          className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-12 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-peru-red/20 focus:border-peru-red transition-all duration-200 hover:border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-right bg-[length:20px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgN0wxMCAxMkwxNSA3IiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')] shadow-sm hover:shadow-md focus:shadow-lg text-base`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value} title={option.description}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-xs text-peru-red font-medium">{error}</p>
      )}
    </div>
  );
};

interface FormButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variantClasses = {
    primary: "bg-peru-red text-white hover:bg-red-700 focus:ring-peru-red shadow-lg hover:shadow-xl",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    ghost: "text-peru-red hover:bg-peru-red/10 focus:ring-peru-red"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-4 text-base"
  };
  
  const disabledClasses = disabled || loading ? "opacity-50 cursor-not-allowed transform-none" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </button>
  );
};

interface FormCheckboxProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  checked,
  onChange,
  required = false,
  disabled = false,
  className = '',
  error
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
          disabled={disabled}
          className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2 disabled:cursor-not-allowed"
        />
        <span className="text-sm text-gray-600 leading-relaxed">
          {label} {required && <span className="text-peru-red">*</span>}
        </span>
      </label>
      {error && (
        <p className="text-xs text-peru-red mt-1 ml-7">{error}</p>
      )}
    </div>
  );
};
