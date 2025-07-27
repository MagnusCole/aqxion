/**
 * ProgressiveForm - Formulario progresivo optimizado para conversión
 * Diseño menos invasivo con expansión suave hacia abajo
 */

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

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
  onCancel: () => void;
  onFirstStepComplete?: (isComplete: boolean) => void;
}

/**
 * Formulario progresivo para agendamiento de sesiones
 * Expansión suave hacia abajo, no pantallas separadas
 */
export const ProgressiveForm: React.FC<ProgressiveFormProps> = React.memo(({ 
  onComplete, 
  onCancel,
  onFirstStepComplete
}) => {
  const [step, setStep] = useState<1 | 2>(1);
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

  const handleNextStep = useCallback(() => {
    if (step < 2) {
      setStep(prev => (prev + 1) as typeof step);
    } else {
      onComplete(formData);
    }
  }, [step, formData, onComplete]);

  const isStepValid = useCallback(() => {
    switch (step) {
      case 1:
        return formData.phone.length > 0 && formData.firstName.trim() && formData.lastName.trim();
      case 2:
        return formData.email.includes('@') && formData.revenue && formData.canTravel && formData.budget;
      default:
        return false;
    }
  }, [step, formData]);

  // Notify when first step is complete
  const isFirstStepComplete = Boolean(formData.phone.length > 0 && formData.firstName.trim() && formData.lastName.trim());
  
  useEffect(() => {
    if (onFirstStepComplete) {
      onFirstStepComplete(isFirstStepComplete);
    }
  }, [isFirstStepComplete, onFirstStepComplete]);

  return (
    <div className="space-y-6">
      {/* Always visible basic form */}
      <div className="space-y-4">
        {/* Phone input */}
        <div>
          <div className="flex">
            <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
              <span className="text-sm font-medium">🇵🇪 +51</span>
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="999 888 777"
              autoFocus
            />
          </div>
        </div>

        {/* Name inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First name *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last name *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder=""
            />
          </div>
        </div>

        {/* Smooth expansion for additional fields */}
        <div className={`transition-all duration-500 ease-in-out ${
          step === 2 
            ? 'max-h-[800px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="space-y-4 pt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Email *"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your Annual Revenue? *
              </label>
              <select
                value={formData.revenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="0-50k">$0 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-200k">$100,000 - $200,000</option>
                <option value="200k+">$200,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you able to travel to grow your business in the next 90 days? *
              </label>
              <select
                value={formData.canTravel}
                onChange={(e) => handleInputChange('canTravel', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="yes">Yes, I can travel</option>
                <option value="limited">Limited travel</option>
                <option value="no">No, I cannot travel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tickets are $5k. Does that work for you?
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="yes">Yes, that works</option>
                <option value="maybe">I need more information</option>
                <option value="no">Not at this time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center">
          By entering information, I agree to{' '}
          <a href="#" className="text-purple-600 hover:underline">Terms</a>
          {' '}&{' '}
          <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={handleNextStep}
        disabled={!isStepValid()}
        className={`
          w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2
          transition-all duration-200
          ${isStepValid() 
            ? 'bg-purple-600 hover:bg-purple-700 text-white' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        <span>Continue</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
});

ProgressiveForm.displayName = 'ProgressiveForm';
