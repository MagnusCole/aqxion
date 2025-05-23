// components/composables/data-display/AboutFeatureCard.tsx
"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const aboutFeatureCardVariants = cva(
  "group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg",
        light: "bg-gray-50/80 border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-lg",
        glass: "bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20",
        gradient: "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:from-blue-100 hover:to-indigo-100"
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export interface AboutFeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aboutFeatureCardVariants> {
  text: string;
  icon: React.ReactNode;
  iconClassName?: string;
}

export const AboutFeatureCard: React.FC<AboutFeatureCardProps> = ({
  text,
  icon,
  iconClassName = "",
  variant,
  size,
  className = "",
  ...props
}) => {
  return (
    <div
      className={aboutFeatureCardVariants({ variant, size, className })}
      {...props}
    >
      {/* Premium background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`mb-4 text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300 ${iconClassName}`}>
          {icon}
        </div>
        
        {/* Text */}
        <p className="text-gray-700 group-hover:text-gray-900 font-medium leading-relaxed transition-colors duration-300">
          {text}
        </p>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-300"></div>
      
      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-float" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};