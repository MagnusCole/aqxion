'use client';

import React from 'react';
import { CheckCircle, Circle, Play } from 'lucide-react';

/**
 * Step Progress Indicator - Ultra-clear for MYPEs
 * Shows exactly where user is and what's next
 * Visual, numbered, with completion status
 */

interface Step {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly status: 'completed' | 'current' | 'upcoming';
}

interface StepProgressProps {
  readonly steps: Step[];
  readonly currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 text-center">
        Tu Progreso MyPerú
      </h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';
          const isUpcoming = step.status === 'upcoming';
          
          return (
            <div key={step.id} className="relative">
              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div 
                  className={`absolute left-6 lg:left-8 top-16 w-0.5 h-8 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
              
              <div className={`
                flex items-start gap-4 lg:gap-6 p-4 lg:p-6 rounded-xl border-2 transition-all
                ${isCurrent ? 'border-blue-500 bg-blue-50' : ''}
                ${isCompleted ? 'border-green-500 bg-green-50' : ''}
                ${isUpcoming ? 'border-gray-200 bg-gray-50' : ''}
              `}>
                {/* Indicador de Estado */}
                <div className="flex-shrink-0 mt-1">
                  {isCompleted && (
                    <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 text-green-500" />
                  )}
                  {isCurrent && (
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                  )}
                  {isUpcoming && (
                    <div className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm lg:text-base font-bold text-gray-400">
                        {step.number}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`
                      text-xs lg:text-sm font-bold px-2 py-1 rounded-full
                      ${isCurrent ? 'bg-blue-100 text-blue-700' : ''}
                      ${isCompleted ? 'bg-green-100 text-green-700' : ''}
                      ${isUpcoming ? 'bg-gray-100 text-gray-500' : ''}
                    `}>
                      Paso {step.number}
                    </span>
                    {isCurrent && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                        AHORA
                      </span>
                    )}
                  </div>
                  
                  <h4 className={`
                    text-base lg:text-lg font-bold mb-1
                    ${isCurrent ? 'text-blue-900' : ''}
                    ${isCompleted ? 'text-green-900' : ''}
                    ${isUpcoming ? 'text-gray-500' : ''}
                  `}>
                    {step.title}
                  </h4>
                  
                  <p className={`
                    text-sm lg:text-base
                    ${isCurrent ? 'text-blue-700' : ''}
                    ${isCompleted ? 'text-green-700' : ''}
                    ${isUpcoming ? 'text-gray-400' : ''}
                  `}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progreso General */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progreso Total
          </span>
          <span className="text-sm font-bold text-gray-900">
            {Math.round((steps.filter(s => s.status === 'completed').length / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ 
              width: `${(steps.filter(s => s.status === 'completed').length / steps.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(StepProgress);
