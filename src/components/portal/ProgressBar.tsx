import React from 'react';
import { CheckCircle, Circle, Clock, Target } from 'lucide-react';

interface ProgressStep {
  id: string | number;
  title: string;
  description?: string;
  status: 'completed' | 'current' | 'upcoming';
  estimatedDay?: number;
}

interface ProgressBarProps {
  steps?: ProgressStep[];
  title?: string;
  currentStep?: number;
  showDaysRemaining?: boolean;
  className?: string;
  // Nuevas props para compatibilidad
  currentDay?: number;
  totalDays?: number;
  completedSteps?: number;
  totalSteps?: number;
  milestones?: ProgressStep[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps = [],
  title,
  currentStep,
  showDaysRemaining = true,
  className = ''
}) => {
  const completedSteps = steps.filter(step => step.status === 'completed').length;
  const progressPercentage = steps.length > 0 ? (completedSteps / steps.length) * 100 : 0;

  const getStepIcon = (status: ProgressStep['status'], index: number) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'current':
        return (
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <Clock className="w-3 h-3 text-white" />
          </div>
        );
      case 'upcoming':
        return <Circle className="w-5 h-5 text-gray-300" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getStepColors = (status: ProgressStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-700 border-green-200 bg-green-50';
      case 'current':
        return 'text-blue-700 border-blue-200 bg-blue-50';
      case 'upcoming':
        return 'text-gray-500 border-gray-200 bg-gray-50';
      default:
        return 'text-gray-500 border-gray-200 bg-gray-50';
    }
  };

  const totalDaysRemaining = steps
    .filter(step => step.status !== 'completed')
    .reduce((acc, step) => acc + (step.estimatedDay || 0), 0);

  return (
    <div className={`bg-white rounded-xl p-6 shadow border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          {title && (
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{completedSteps} de {steps.length} completados</span>
            {showDaysRemaining && totalDaysRemaining > 0 && (
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                ~{totalDaysRemaining} días restantes
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            {Math.round(progressPercentage)}%
          </div>
          <div className="text-xs text-gray-500">Progreso</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${getStepColors(step.status)} ${
              step.status === 'current' ? 'ring-2 ring-blue-200' : ''
            }`}
          >
            {/* Step icon */}
            <div className="flex-shrink-0 mt-0.5">
              {getStepIcon(step.status, index)}
            </div>

            {/* Step content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm leading-tight">
                  {step.title}
                </h3>
                {step.estimatedDay && step.status !== 'completed' && (
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    ~{step.estimatedDay}d
                  </span>
                )}
              </div>
              
              {step.description && (
                <p className="text-xs mt-1 leading-relaxed opacity-80">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      {progressPercentage === 100 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">¡Completado!</span>
          </div>
          <p className="text-green-600 text-sm mt-1">
            Has completado todos los pasos de tu transformación digital.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
