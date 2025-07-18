// LLM-OPTIMIZED: Refactored Text component for strict TS and performance
"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Text component variants optimized for IA theme
 */
const textVariants = cva(
  [
    "max-w-full",
    "transition-colors duration-[var(--duration-200)] ease-[var(--ease-default)]",
  ].join(" "),
  {
    variants: {
      variant: {
        body: [
          "font-[var(--font-secondary)]",
          "font-[var(--font-weight-regular)]",
          "leading-[var(--line-height-relaxed)]",
          "text-[color:var(--color-text-secondary)]",
        ].join(" "),
        subheading: [
          "font-[var(--font-secondary)]",
          "font-[var(--font-weight-medium)]",
          "leading-[var(--line-height-normal)]",
          "text-[color:var(--color-text-secondary)]",
        ].join(" "),
        metric: [
          "font-[var(--font-primary)]",
          "font-[var(--font-weight-semibold)]",
          "leading-[var(--line-height-tight)]",
          "text-[color:var(--ia-blue)]",
        ].join(" "),
        caption: [
          "font-[var(--font-secondary)]",
          "font-[var(--font-weight-medium)]",
          "leading-[var(--line-height-normal)]",
          "text-[color:var(--color-text-tertiary)]",
        ].join(" "),
        link: [
          "font-[var(--font-secondary)]",
          "font-[var(--font-weight-medium)]",
          "text-[color:var(--ia-blue)]",
          "hover:text-[color:var(--color-primary-700)]",
          "hover:underline underline-offset-4",
          "transition-colors duration-[var(--duration-200)]",
        ].join(" "),
        success: [
          "font-[var(--font-secondary)]",
          "font-[var(--font-weight-medium)]",
          "text-[color:var(--auto-green)]",
        ].join(" "),
        error: [
          "font-[var(--font-secondary)]",
          "font-[var(--font-weight-medium)]",
          "text-[color:var(--color-error-600)]",
        ].join(" "),
      },
      size: {
        xs: "text-xs",
        sm: "text-sm", 
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium", 
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "body",
      size: "base",
      align: "left",
      weight: "normal",
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
}

/**
 * Text component with polymorphic as prop
 */
const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, size, align, weight, as: Component = "p", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={textVariants({ variant, size, align, weight, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
