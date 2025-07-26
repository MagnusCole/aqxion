'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Simple Large Button - Ultra-friendly for MYPEs
 * 60px+ height, clear labels, touch-optimized
 * Following accessibility and simplicity guidelines
 */

interface SimpleLargeButtonProps {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly description?: string;
  readonly onClick: () => void;
  readonly color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  readonly isActive?: boolean;
  readonly disabled?: boolean;
}

const colorClasses = {
  primary: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
  secondary: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700',
  success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
  warning: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
  info: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
} as const;

const SimpleLargeButton: React.FC<SimpleLargeButtonProps> = ({
  icon: Icon,
  label,
  description,
  onClick,
  color = 'primary',
  isActive = false,
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full min-h-[80px] lg:min-h-[100px] p-6 lg:p-8 
        rounded-2xl lg:rounded-3xl text-white font-bold text-left
        transition-all duration-200 shadow-lg hover:shadow-xl
        active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed
        ${colorClasses[color]}
        ${isActive ? 'ring-4 ring-white ring-opacity-50 scale-105' : ''}
        ${disabled ? 'hover:scale-100' : 'hover:scale-102'}
      `}
      aria-pressed={isActive}
      role="button"
    >
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Icono Grande */}
        <div className="flex-shrink-0">
          <Icon className="w-10 h-10 lg:w-12 lg:h-12" />
        </div>
        
        {/* Texto */}
        <div className="flex-1 min-w-0">
          <div className="text-lg lg:text-xl font-bold mb-1">
            {label}
          </div>
          {description && (
            <div className="text-sm lg:text-base opacity-90 font-normal">
              {description}
            </div>
          )}
        </div>
        
        {/* Indicador de Estado */}
        {isActive && (
          <div className="flex-shrink-0">
            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full opacity-90"></div>
          </div>
        )}
      </div>
    </button>
  );
};

export default React.memo(SimpleLargeButton);
