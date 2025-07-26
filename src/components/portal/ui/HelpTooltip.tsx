'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Lightbulb } from 'lucide-react';

/**
 * Help Tooltip - Contextual help for complex features
 * Simple explanations in plain Spanish
 * Always visible help indicators
 */

interface HelpTooltipProps {
  readonly title: string;
  readonly content: string;
  readonly examples?: string[];
  readonly position?: 'top' | 'bottom' | 'left' | 'right';
  readonly size?: 'small' | 'medium' | 'large';
}

const HelpTooltip: React.FC<HelpTooltipProps> = ({
  title,
  content,
  examples = [],
  position = 'top',
  size = 'medium'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const tooltipSizeClasses = {
    small: 'max-w-xs',
    medium: 'max-w-sm',
    large: 'max-w-md'
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      {/* Help Icon Trigger */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-500 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
        aria-label={`Ayuda: ${title}`}
      >
        <HelpCircle className={sizeClasses[size]} />
      </button>

      {/* Tooltip Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`
              absolute z-50 ${positionClasses[position]} ${tooltipSizeClasses[size]}
              bg-white border border-gray-200 rounded-xl shadow-lg p-4
            `}
          >
            {/* Arrow */}
            <div className={`
              absolute w-3 h-3 bg-white border-gray-200 transform rotate-45
              ${position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1.5 border-b border-r' : ''}
              ${position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1.5 border-t border-l' : ''}
              ${position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -ml-1.5 border-t border-r' : ''}
              ${position === 'right' ? 'right-full top-1/2 -translate-y-1/2 -mr-1.5 border-b border-l' : ''}
            `} />

            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 ml-2 lg:hidden"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {content}
            </p>

            {/* Examples */}
            {examples.length > 0 && (
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-medium text-gray-500 mb-2">Ejemplos:</p>
                <ul className="space-y-1">
                  {examples.map((example, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-green-500 font-bold">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer for mobile */}
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-500 text-white py-2 px-3 rounded-lg text-sm font-medium"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(HelpTooltip);
