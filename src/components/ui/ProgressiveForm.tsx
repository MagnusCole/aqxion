// ProgressiveForm optimizado
'use client';
import React, { useState, useCallback } from 'react';

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

export const ProgressiveForm: React.FC<ProgressiveFormProps> = ({ 
  onComplete, 
  onContinue,
  onBasicFieldsComplete
}) => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
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

  const handleBasicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isBasicComplete) {
      setShowAdditionalFields(true);
      onBasicFieldsComplete();
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <div className='space-y-6'>
      <form onSubmit={showAdditionalFields ? handleFinalSubmit : handleBasicSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='Nombre'
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150'
            required
          />
          <input
            type='text'
            placeholder='Apellidos'
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150'
          />
        </div>
        
        <input
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150'
          required
        />
        
        <input
          type='tel'
          placeholder='Teléfono'
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150'
          required
        />

        {showAdditionalFields && (
          <div className='space-y-4 animate-in slide-in-from-top-4 duration-300'>
            <textarea
              placeholder='Cuéntanos sobre tu negocio...'
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 h-24 resize-none'
            />
            
            <select
              value={formData.revenue}
              onChange={(e) => handleInputChange('revenue', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150'
            >
              <option value=''>Facturación mensual aproximada</option>
              <option value='0-5k'>S/0 - S/5,000</option>
              <option value='5k-15k'>S/5,000 - S/15,000</option>
              <option value='15k-50k'>S/15,000 - S/50,000</option>
              <option value='50k+'>S/50,000+</option>
            </select>
          </div>
        )}

        <button
          type='submit'
          disabled={!isBasicComplete}
          className='w-full px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {showAdditionalFields ? 'Agendar Sesión' : 'Continuar'}
        </button>
      </form>
    </div>
  );
};
