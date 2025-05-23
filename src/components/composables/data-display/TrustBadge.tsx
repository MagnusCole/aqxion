"use client";

import React from 'react';
import { GlassMorphism } from '../effects/GlassMorphism';

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
  variant?: 'default' | 'success' | 'premium' | 'verified';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  icon,
  text,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    default: 'text-gray-700 border-gray-200/50',
    success: 'text-green-700 border-green-200/50',
    premium: 'text-blue-700 border-blue-200/50',
    verified: 'text-purple-700 border-purple-200/50'
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-5 py-3'
  };

  return (
    <GlassMorphism 
      variant="subtle" 
      size="sm" 
      className={`inline-flex items-center gap-2 font-medium border backdrop-blur-xl hover:scale-105 transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="whitespace-nowrap">
        {text}
      </span>
    </GlassMorphism>
  );
};
