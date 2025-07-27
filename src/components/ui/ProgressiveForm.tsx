/**
 * ProgressiveForm - Formulario progresivo optimizado para conversión
 * Diseño menos invasivo con expansión suave hacia abajo
 */

import React, { useState, useCallback, useEffect } from 'react';

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
  onBasicFieldsComplete: () => void; // Requerido otra vez
}

/**
 * Formulario progresivo para agendamiento de sesiones
 * Expansión suave hacia abajo, no pantallas separadas
 */
export const ProgressiveForm: React.FC<ProgressiveFormProps> = React.memo(({ 
  onComplete, 
  onContinue,
  onBasicFieldsComplete
}) => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [hasTriggeredExpansion, setHasTriggeredExpansion] = useState(false);
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

  // Auto-mostrar campos adicionales cuando los básicos estén completos
  const basicFieldsComplete = Boolean(
    formData.phone.length > 0 && 
    formData.firstName.trim() && 
    formData.lastName.trim()
  );

  useEffect(() => {
    if (basicFieldsComplete && !hasTriggeredExpansion) {
      if (onBasicFieldsComplete) {
        onBasicFieldsComplete();
      }
      setHasTriggeredExpansion(true);
      
      // Mostrar campos adicionales inmediatamente para mejor performance
      setShowAdditionalFields(true);
    }
  }, [basicFieldsComplete, hasTriggeredExpansion, onBasicFieldsComplete]);

  // Validar si TODOS los campos están completos
  const isFormComplete = Boolean(
    basicFieldsComplete &&
    formData.email.includes('@') && 
    formData.revenue && 
    formData.canTravel && 
    formData.budget
  );

  useEffect(() => {
    if (isFormComplete) {
      onComplete(formData);
    }
  }, [isFormComplete, formData, onComplete]);

  const handleContinue = useCallback(() => {
    if (isFormComplete) {
      onContinue();
    }
  }, [isFormComplete, onContinue]);

  return (
    <div className="space-y-4">
      {/* Campos básicos */}
      <div className="space-y-3">
        {/* Phone input simplificado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <div className="flex border rounded-lg focus-within:border-red-500">
            <div className="px-3 py-2 bg-gray-50 border-r">
              <span className="text-sm font-medium">🇵🇪 +51</span>
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="flex-1 px-3 py-2 focus:outline-none"
              placeholder="999 888 777"
              autoFocus
            />
          </div>
        </div>

        {/* Name inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:border-red-500 focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:border-red-500 focus:outline-none"
              placeholder="Tu apellido"
            />
          </div>
        </div>

        {/* Campos adicionales con reveal automático */}
        <div className={`transition-all duration-700 ease-in-out ${
          showAdditionalFields
            ? 'max-h-[800px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="space-y-4 pt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Cuáles son los ingresos anuales de tu MYPE? *
              </label>
              <select
                value={formData.revenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Seleccionar</option>
                <option value="0-50k">S/0 - S/180,000</option>
                <option value="50k-100k">S/180,000 - S/360,000</option>
                <option value="100k-200k">S/360,000 - S/720,000</option>
                <option value="200k+">S/720,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Estás dispuesto a invertir para hacer crecer tu negocio en los próximos 90 días? *
              </label>
              <select
                value={formData.canTravel}
                onChange={(e) => handleInputChange('canTravel', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Seleccionar</option>
                <option value="yes">Sí, estoy listo para invertir</option>
                <option value="limited">Necesito más información</option>
                <option value="no">No por el momento</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nuestro programa de mentoría cuesta S/18,000. ¿Te funciona?
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Seleccionar</option>
                <option value="yes">Sí, me funciona</option>
                <option value="maybe">Necesito conocer más detalles</option>
                <option value="no">No por el momento</option>
              </select>
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center">
          Al ingresar tu información, aceptas nuestros{' '}
          <a href="#" className="text-red-600 hover:underline">Términos</a>
          {' '}&{' '}
          <a href="#" className="text-red-600 hover:underline">Política de Privacidad</a>
        </p>
      </div>

      {/* Botón simplificado */}
      <button
        onClick={handleContinue}
        disabled={!isFormComplete}
        className={`
          w-full py-3 px-4 rounded-lg font-semibold
          ${isFormComplete 
            ? 'bg-red-600 hover:bg-red-700 text-white' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        {isFormComplete ? 'Continuar al Calendario' : 'Completa el formulario'}
      </button>
    </div>
  );
});

ProgressiveForm.displayName = 'ProgressiveForm';
