// ProgressiveForm optimizado
'use client';
import React, { useState, useCallback } from 'react';
import { FormField, FormTextarea, FormSelect, FormButton } from './FormComponents';

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

interface ProgressiveFormProps {
  onComplete: (data: FormData) => void;
  onContinue: () => void;
  onBasicFieldsComplete: () => void;
}

const revenueOptions = [
  { value: '0-5k', label: 'S/0 - S/5,000' },
  { value: '5k-15k', label: 'S/5,000 - S/15,000' },
  { value: '15k-50k', label: 'S/15,000 - S/50,000' },
  { value: '50k+', label: 'S/50,000+' }
];

export const ProgressiveForm: React.FC<ProgressiveFormProps> = ({ 
  onComplete, 
  onContinue,
  onBasicFieldsComplete
}) => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    firstName: '',
    lastName: '',
    email: '',
    description: '',
    revenue: '',
    canTravel: '',
    budget: ''
  });

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const isBasicComplete = formData.phone && formData.firstName && formData.email;

  const handleBasicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isBasicComplete) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300)); // Smooth transition
      setShowAdditionalFields(true);
      setIsLoading(false);
      onBasicFieldsComplete();
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    onComplete(formData);
    setIsLoading(false);
  };

  return (
    <div className='space-y-6'>
      {/* Header with progress indicator */}
      <div className="text-center space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {showAdditionalFields ? 'Cuéntanos más sobre tu negocio' : 'Información básica'}
        </h3>
        
        {/* Progress dots */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-peru-red"></div>
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${showAdditionalFields ? 'bg-peru-red' : 'bg-gray-300'}`}></div>
        </div>
        
        <p className="text-sm text-gray-600">
          {showAdditionalFields ? 'Paso 2 de 2' : 'Paso 1 de 2'}
        </p>
      </div>

      <form onSubmit={showAdditionalFields ? handleFinalSubmit : handleBasicSubmit} className='space-y-4'>
        
        {!showAdditionalFields ? (
          // Paso 1: Información básica
          <div className="space-y-4">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <FormField
                placeholder='Nombre'
                value={formData.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                required
              />
              <FormField
                placeholder='Apellidos'
                value={formData.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
              />
            </div>
            
            <FormField
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              required
            />
            
            <FormField
              type='tel'
              placeholder='Teléfono (+51)'
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              required
            />
          </div>
        ) : (
          // Paso 2: Información adicional
          <div className='space-y-4 animate-in slide-in-from-right-4 duration-300'>
            <FormTextarea
              placeholder='Cuéntanos sobre tu negocio...'
              value={formData.description}
              onChange={(value) => handleInputChange('description', value)}
              rows={3}
            />
            
            <FormSelect
              value={formData.revenue}
              onChange={(value) => handleInputChange('revenue', value)}
              options={revenueOptions}
              placeholder="Facturación mensual aproximada"
            />

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800">
                💡 Esta información nos ayuda a personalizar mejor nuestras recomendaciones para tu MYPE
              </p>
            </div>
          </div>
        )}

        <FormButton
          type='submit'
          disabled={!isBasicComplete}
          loading={isLoading}
          size="lg"
          className="w-full"
        >
          {showAdditionalFields ? 'Agendar Sesión Estratégica' : 'Continuar'}
        </FormButton>
        
        {showAdditionalFields && (
          <button
            type="button"
            onClick={() => setShowAdditionalFields(false)}
            className="w-full text-sm text-gray-600 hover:text-gray-800 transition-colors duration-150"
          >
            ← Volver al paso anterior
          </button>
        )}
      </form>
    </div>
  );
};
