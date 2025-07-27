/**
 * ScheduleModal - Modal principal para agendamiento optimizado
 * Layout split con formulario progresivo y Calendly embebido
 */

import React, { useState, useCallback, useEffect } from 'react';
import { ProgressiveForm } from './ProgressiveForm';
import { CalendlyEmbed } from './CalendlyEmbed';
import { useSound } from '@/hooks';

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
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showCalendarOnly, setShowCalendarOnly] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  // Sound effects
  const { play: playModalSound } = useSound('/notification-sound.mp3', {
    volume: 0.2,
    preload: true
  });

  const handleFormComplete = useCallback((data: FormData) => {
    setFormData(data);
    setIsFormComplete(true);
  }, []);

  const handleBasicFieldsComplete = useCallback(() => {
    // Ya no necesitamos expandir - simplificado
  }, []);

  const handleContinueToCalendar = useCallback(() => {
    setShowCalendarOnly(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsFormComplete(false);
    setShowCalendarOnly(false);
    setFormData(null);
    onClose();
  }, [onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Play modal open sound with slight delay
      setTimeout(() => {
        playModalSound();
      }, 200);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, playModalSound]);

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
      
      {/* Modal - Optimizado para RAM <200MB */}
      <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
        <div className={`
          w-full bg-white rounded-lg shadow-lg overflow-hidden 
          transition-all duration-300
          ${showCalendarOnly ? 'max-w-2xl' : 'max-w-4xl'} h-[90vh]
        `}>
          
          {/* Header - Simplificado */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Sesión Estratégica MyPerú
              </h3>
              <p className="text-sm text-gray-600">
                Consultoría <span className="text-red-600 font-semibold">personalizada</span> para MYPEs
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>

          {/* Layout simplificado */}
          <div className={`flex h-full ${showCalendarOnly ? 'justify-center' : ''}`}>
            {/* Formulario */}
            <div className={`${showCalendarOnly ? 'hidden' : 'w-1/2'} p-4 border-r`}>
              <ProgressiveForm 
                onComplete={handleFormComplete}
                onContinue={handleContinueToCalendar}
                onBasicFieldsComplete={handleBasicFieldsComplete}
              />
            </div>
            
            {/* Calendario */}
            <div className={`${showCalendarOnly ? 'w-full' : 'w-1/2'} bg-gray-50`}>
              <div className="h-full p-4">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Selecciona Tu Horario
                  </h4>
                  <p className="text-sm text-gray-600">
                    {showCalendarOnly 
                      ? 'Elige tu horario preferido'
                      : 'Completa el formulario para acceder'
                    }
                  </p>
                </div>
                
                <CalendlyEmbed
                  isVisible={showCalendarOnly}
                  userName={formData ? `${formData.firstName} ${formData.lastName}` : ''}
                  userEmail={formData?.email || ''}
                  userPhone={formData?.phone || ''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ScheduleModal.displayName = 'ScheduleModal';
