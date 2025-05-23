"use client"

import React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500",
        link: "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-500",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof buttonVariants> {
  label: string;
  href?: string;
  ariaLabel?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href,
  variant,
  size,
  ariaLabel,
  className,
  ...props
}) => {
  const classes = buttonVariants({ variant, size, className });
  
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {label}
      </Link>
    );
  }
  
  return (
    <button className={classes} aria-label={ariaLabel} {...props}>
      {label}
    </button>
  );
}
