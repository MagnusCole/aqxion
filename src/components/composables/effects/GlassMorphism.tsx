"use client";

import React from 'react';

interface GlassMorphismProps {
  children: React.ReactNode;
  variant?: 'default' | 'strong' | 'subtle' | 'card' | 'navigation';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  className?: string;
}

export const GlassMorphism: React.FC<GlassMorphismProps> = ({
  children,
  variant = 'default',
  size = 'md',
  glow = false,
  className = '',
  ...props
}) => {
  const baseClasses = `
    backdrop-filter backdrop-blur-xl
    border border-white/20
    relative overflow-hidden
  `;

  const variantClasses = {
    default: 'bg-white/10 shadow-lg',
    strong: 'bg-white/20 shadow-xl backdrop-blur-2xl',
    subtle: 'bg-white/5 shadow-md',
    card: 'bg-white/15 shadow-xl border-white/30',
    navigation: 'bg-white/5 shadow-sm border-white/10 backdrop-blur-md'
  };

  const sizeClasses = {
    sm: 'rounded-lg p-4',
    md: 'rounded-xl p-6',
    lg: 'rounded-2xl p-8',
    xl: 'rounded-3xl p-10'
  };

  const glowClasses = glow ? 'hover:shadow-blue-500/25 transition-shadow duration-300' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${glowClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
