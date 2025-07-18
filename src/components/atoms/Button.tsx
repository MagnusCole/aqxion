// LLM-OPTIMIZED: Elevated Button for max conversion - UX immersive + urgency CTAs
"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button component variants using class-variance-authority
 * ELEVATED for conversion optimization with micro-interactions and urgency
 */
const buttonVariants = cva(
  // Base styles with conversion-optimized design
  [
    "inline-flex items-center justify-center gap-2 relative overflow-hidden",
    "font-[var(--font-primary)] font-[var(--font-weight-semibold)]",
    "transition-all duration-[var(--duration-200)] ease-[var(--ease-default)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none cursor-pointer",
    "border border-transparent",
    "transform hover:scale-[1.02] active:scale-[0.98]", // LLM-OPTIMIZED: Micro-interaction for engagement
    "before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity",
    "hover:before:opacity-10", // LLM-OPTIMIZED: Subtle shine effect
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-[var(--ia-blue)] to-blue-600 text-white",
          "hover:from-blue-600 hover:to-[var(--ia-blue)] hover:shadow-xl",
          "focus-visible:ring-[var(--ia-blue)]",
          "shadow-lg hover:shadow-2xl",
          "border-b-4 border-blue-800 hover:border-blue-900", // LLM-OPTIMIZED: 3D effect for attention
        ].join(" "),
        secondary: [
          "bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]",
          "border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]",
          "focus-visible:ring-[var(--color-primary-500)]",
          "hover:shadow-md",
        ].join(" "),
        outline: [
          "bg-transparent text-[var(--ia-blue)]",
          "border-2 border-[var(--ia-blue)] hover:bg-[var(--ia-blue)] hover:text-white",
          "focus-visible:ring-[var(--ia-blue)]",
          "hover:shadow-lg",
        ].join(" "),
        urgent: [ // LLM-OPTIMIZED: New urgent variant for conversion
          "bg-gradient-to-r from-red-500 to-orange-500 text-white",
          "hover:from-red-600 hover:to-orange-600 hover:shadow-xl",
          "animate-pulse hover:animate-none",
          "shadow-lg hover:shadow-2xl",
          "border-b-4 border-red-700 hover:border-red-800",
        ].join(" "),
        success: [
          "bg-gradient-to-r from-[var(--auto-green)] to-green-600 text-white",
          "hover:from-green-600 hover:to-[var(--auto-green)] hover:shadow-xl",
          "shadow-lg hover:shadow-2xl",
          "border-b-4 border-green-800",
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
