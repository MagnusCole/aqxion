import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del input usando class-variance-authority
const inputVariants = cva(
  // Base styles que se aplican a todos los inputs
  "flex h-10 w-full rounded-md border bg-white px-3 py-2 font-secondary text-base text-[#1A2B3C] placeholder:text-[#A3B1C0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5298] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300",
        error: "border-[#9B2C2C] focus-visible:ring-[#9B2C2C]", // --color-accent-alert
      },
      size: {
        sm: "h-8 px-2 text-sm",
        md: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Exportamos los tipos de las props para el componente Input
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  error?: string;
  label?: string;
}

// Componente Input
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type = "text", error, label, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-[#1A2B3C] dark:text-[#E2E8F0]"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={inputVariants({ variant: error ? "error" : variant, size: size, className })}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[#9B2C2C]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Componente para área de texto
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label 
            htmlFor={textareaId} 
            className="block text-sm font-medium text-[#1A2B3C] dark:text-[#E2E8F0]"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 font-secondary text-base text-[#1A2B3C] placeholder:text-[#A3B1C0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5298] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-[#9B2C2C] focus-visible:ring-[#9B2C2C]" : ""
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[#9B2C2C]">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { Input, inputVariants };