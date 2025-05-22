import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes de label usando class-variance-authority
const labelVariants = cva(
  // Base styles que se aplican a todos los labels
  "font-secondary font-medium block text-[#4A5D70] dark:text-[#AEAEB2]",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-[#9B2C2C] dark:after:text-[#F56565]",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      required: false,
      disabled: false,
    },
  }
);

// Exportamos los tipos de las props para el componente Label
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  htmlFor: string;
  children: React.ReactNode;
}

// Componente Label
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, required, disabled, htmlFor, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={labelVariants({ size, required, disabled, className })}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

// Componente FormGroup para agrupar un label con un input
export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: "sm" | "md" | "lg";
}

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, spacing = "md", ...props }, ref) => {
    const spacingClasses = {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
    };
    
    return (
      <div
        ref={ref}
        className={`${spacingClasses[spacing]} ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FormGroup.displayName = "FormGroup";

// Componente FieldError para mensajes de error en formularios
export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-xs text-[#9B2C2C] dark:text-[#F56565] ${className || ""}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);

FieldError.displayName = "FieldError";

export { Label, labelVariants };