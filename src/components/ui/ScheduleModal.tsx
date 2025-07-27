/**
 * ScheduleModal - Modal principal para agendamiento optimizado
 * Layout split con formulario progresivo y Calendly embebido
 */

import React, { useState, useCallback, useEffect } from 'react';
import { ProgressiveForm } from './ProgressiveForm';
import { CalendlyEmbed } from './CalendlyEmbed';

interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal de agendamiento con diseño split optimizado para conversión
 * Formulario progresivo + Calendly embebido
 */
export const ScheduleModal: React.FC<ScheduleModalProps> = React.memo(({ 
  isOpen, 
  onClose 
}) => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [firstStepCompleted, setFirstStepCompleted] = useState(false);
  const [userData, setUserData] = useState<FormData | null>(null);

  const handleFormComplete = useCallback((data: FormData) => {
    setUserData(data);
    setFormCompleted(true);
  }, []);

  const handleFirstStepComplete = useCallback((isComplete: boolean) => {
    setFirstStepCompleted(isComplete);
  }, []);

  const handleClose = useCallback(() => {
    setFormCompleted(false);
    setFirstStepCompleted(false);
    setUserData(null);
    onClose();
  }, [onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal - Dynamic Layout Based on Progress */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className={`w-full bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ${
          firstStepCompleted ? 'max-w-6xl' : 'max-w-2xl'
        }`}>
          
          {/* Two Column Layout when first step is complete */}
          <div className={`${firstStepCompleted ? 'grid grid-cols-2 gap-0' : ''}`}>
            
            {/* Left Side: Calendar (only visible when first step complete) */}
            {firstStepCompleted && (
              <div className="bg-gray-50 p-6 border-r border-gray-200">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Select Your Time
                  </h4>
                  <p className="text-sm text-gray-600">
                    Complete the form to unlock scheduling
                  </p>
                </div>
                
                <CalendlyEmbed
                  isVisible={formCompleted}
                  userName={userData ? `${userData.firstName} ${userData.lastName}` : ''}
                  userEmail={userData?.email || ''}
                  userPhone={userData?.phone || ''}
                />
              </div>
            )}
            
            {/* Right Side: Form */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    ACQ Scaling Workshop Meeting
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Excited to speak with you for our <span className="underline">in-person</span> scaling workshop.
                  </p>
                  <p className="text-sm text-gray-600">
                    Book a call below to see if you are a fit.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>

              {/* Progressive Form */}
              <ProgressiveForm
                onComplete={handleFormComplete}
                onCancel={handleClose}
                onFirstStepComplete={handleFirstStepComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ScheduleModal.displayName = 'ScheduleModal';
