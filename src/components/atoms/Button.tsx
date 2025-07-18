// LLM-OPTIMIZED: Refactored Button component for strict TS, accessibility, and performance
"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button component variants using class-variance-authority
 * Optimized for IA theme and accessibility
 */
const buttonVariants = cva(
  // Base styles with strict token usage
  [
    "inline-flex items-center justify-center gap-2",
    "font-[var(--font-primary)] font-[var(--font-weight-semibold)]",
    "transition-all duration-[var(--duration-200)] ease-[var(--ease-default)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none cursor-pointer",
    "border border-transparent",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--ia-blue)] text-white",
          "hover:opacity-90 active:opacity-80",
          "focus-visible:ring-[var(--ia-blue)]",
          "shadow-md hover:shadow-lg",
        ].join(" "),
        secondary: [
          "bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]",
          "border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]",
          "focus-visible:ring-[var(--color-primary-500)]",
        ].join(" "),
        outline: [
          "bg-transparent text-[var(--ia-blue)]",
          "border-[var(--ia-blue)] hover:bg-[var(--ia-blue)] hover:text-white",
          "focus-visible:ring-[var(--ia-blue)]",
        ].join(" "),
        ghost: [
          "bg-transparent text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-bg-secondary)]",
          "focus-visible:ring-[var(--color-primary-500)]",
        ].join(" "),
        link: [
          "bg-transparent text-[var(--ia-blue)] p-0 h-auto",
          "hover:underline focus-visible:ring-[var(--ia-blue)]",
        ].join(" "),
        success: [
          "bg-[var(--auto-green)] text-white",
          "hover:opacity-90 active:opacity-80",
          "focus-visible:ring-[var(--auto-green)]",
          "shadow-md hover:shadow-lg",
        ].join(" "),
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-base rounded-md",
        lg: "h-12 px-6 text-lg rounded-lg",
        xl: "h-14 px-8 text-xl rounded-xl",
        icon: "h-10 w-10 rounded-md",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

/**
 * Button component with full accessibility support
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, children, type = "button", ...props }, ref) => {
    if (asChild) {
      // For asChild functionality, we'd need to install @radix-ui/react-slot
      // For now, we'll just render as a button
      console.warn("asChild prop requires @radix-ui/react-slot to be installed");
    }
    
    return (
      <button
        type={type}
        className={buttonVariants({ variant, size, fullWidth, className })}
        ref={ref}
        aria-label={props['aria-label'] || (typeof children === 'string' ? children : undefined)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
