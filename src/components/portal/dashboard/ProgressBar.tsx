import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  completed: number;
  total: number;
  className?: string;
}

/**
 * ProgressBar - Micro UI Component
 * iOS-style progress indicator with motivational text
 * Single responsibility: Progress visualization
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  completed,
  total,
  className = ''
}) => {
  const getMotivationalText = (percentage: number) => {
    if (percentage === 100) return '🎉 ¡Perfecto! Todas completadas';
    if (percentage >= 75) return '🔥 ¡Casi terminado!';
    if (percentage >= 50) return '💪 ¡Buen progreso!';
    if (percentage >= 25) return '🚀 ¡Sigue así!';
    return '✨ ¡Comienza el día!';
  };

  return (
    <section className={`px-4 mb-8 ${className}`}>
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Progreso del día</h3>
          <span 
            className="text-sm text-gray-500 font-medium"
            aria-label={`${Math.round(progress)} por ciento completado`}
          >
            {Math.round(progress)}%
          </span>
        </div>
        
        <div 
          className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso de tareas diarias"
        >
          <motion.div 
            className="h-2 bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-500">
            {completed} de {total} tareas completadas
          </p>
          
          <motion.span
            key={progress}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-blue-600 font-medium"
          >
            {getMotivationalText(progress)}
          </motion.span>
        </div>
      </div>
    </section>
  );
};
