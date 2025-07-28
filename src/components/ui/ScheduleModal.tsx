// ScheduleModal optimizado
'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { ProgressiveForm } from './ProgressiveForm';
import { CalendlyEmbed } from './CalendlyEmbed';

interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  revenue: string;
  canTravel: string;
  budget: string;
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

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

  const handleFormComplete = useCallback((data: FormData) => {
    setFormData(data);
    setShowCalendly(true);
  }, []);

  const handleContinue = useCallback(() => {
    setShowCalendly(true);
  }, []);

  const handleBasicFieldsComplete = useCallback(() => {
    // Opcional: tracking de progreso
  }, []);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10'
        >
          <X className='w-6 h-6' />
        </button>
        
        <div className='grid md:grid-cols-2 h-full min-h-[600px]'>
          <div className='p-6 md:p-8 space-y-6'>
            <div>
              <h2 className='text-2xl font-light text-gray-900 mb-2'>
                Conversemos sobre tu negocio
              </h2>
              <p className='text-gray-600'>
                20 minutos que pueden cambiar tu negocio para siempre.
              </p>
            </div>
            
            {!showCalendly && (
              <ProgressiveForm
                onComplete={handleFormComplete}
                onContinue={handleContinue}
                onBasicFieldsComplete={handleBasicFieldsComplete}
              />
            )}
            
            {showCalendly && (
              <div className='space-y-4'>
                <div className='bg-green-50 border border-green-200 rounded-xl p-4'>
                  <p className='text-green-800 text-sm'>
                     Datos recibidos. Ahora selecciona el mejor horario para ti.
                  </p>
                </div>
                
                <button
                  onClick={() => setShowCalendly(false)}
                  className='text-peru-red text-sm hover:underline'
                >
                   Editar información
                </button>
              </div>
            )}
          </div>
          
          <div className='bg-gray-50 p-6 md:p-8'>
            {showCalendly ? (
              <CalendlyEmbed 
                isVisible={true}
                userName={formData ? `${formData.firstName} ${formData.lastName}` : undefined}
                userEmail={formData?.email}
                userPhone={formData?.phone}
              />
            ) : (
              <div className='h-full flex items-center justify-center text-gray-500'>
                <div className='text-center'>
                  <Calendar className='w-16 h-16 mx-auto mb-4 text-gray-300' />
                  <p>Completa el formulario para seleccionar tu horario</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
