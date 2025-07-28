/**
 * ContactModal Component - Conversion-Optimized Modal
 * 
 * High-converting contact modal with strategic UX design,
 * form validation, and Peru-specific business targeting.
 * Implements Apple-like minimalism with conversion psychology.
 * 
 * @features
 * - TypeScript strict interfaces for form data
 * - Multi-step progressive disclosure pattern
 * - Peru-specific business types with icons
 * - Real-time validation with error states
 * - Accessibility-compliant modal pattern
 * - Smooth animations and micro-interactions
 * - Analytics tracking for conversion optimization
 */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { useFormSubmission } from '@/hooks';
import { ContactFormData, BusinessType, CommonProblem, ModalState } from '@/types';
import { cn } from '@/utils';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Business types optimized for Peru market with visual icons
 */
const businessTypes: readonly BusinessType[] = [
  { value: 'clinica-dental', label: '🦷 Clínica Dental', popular: true },
  { value: 'salon-belleza', label: '💅 Salón de Belleza', popular: true },
  { value: 'consultorio-medico', label: '👨‍⚕️ Consultorio Médico', popular: false },
  { value: 'abogado', label: '⚖️ Bufete Legal', popular: false },
  { value: 'restaurante', label: '🍽️ Restaurante', popular: true },
  { value: 'gym-fitness', label: '💪 Gimnasio/Fitness', popular: false },
  { value: 'academia', label: '📚 Academia/Instituto', popular: false },
  { value: 'otro', label: '🏢 Otro tipo de negocio', popular: false }
] as const;

/**
 * Common business problems for targeted messaging
 */
const commonProblems: readonly CommonProblem[] = [
  { value: 'pocos-clientes', label: '😔 Muy pocos clientes' },
  { value: 'ingresos-impredecibles', label: '📉 Ingresos impredecibles' },
  { value: 'invisible-online', label: '👻 Invisible en internet' },
  { value: 'no-tiempo-marketing', label: '⏰ Sin tiempo para marketing' },
  { value: 'competencia-fuerte', label: '🥊 Mucha competencia' },
  { value: 'no-se-donde-empezar', label: '🤷‍♂️ No sé por dónde empezar' }
] as const;

/**
 * Form validation schema
 */
const validateForm = (data: Partial<ContactFormData>): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  if (!data.nombre?.trim()) {
    errors.nombre = 'El nombre es requerido';
  } else if (data.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres';
  }
  
  if (!data.email?.trim()) {
    errors.email = 'El email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un email válido';
  }
  
  if (!data.tipoNegocio) {
    errors.tipoNegocio = 'Selecciona el tipo de negocio';
  }
  
  return errors;
};

/**
 * ContactModal Component
 * 
 * Conversion-optimized contact modal with progressive disclosure,
 * strategic messaging, and seamless user experience.
 */
export const ContactModal: React.FC<ContactModalProps> = React.memo(({ isOpen, onClose }) => {
  // Form state management
  const [formData, setFormData] = React.useState<Partial<ContactFormData>>({
    nombre: '',
    email: '',
    tipoNegocio: '',
    problema: ''
  });
  
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState<'form' | 'problem' | 'success'>('form');

  /**
   * Form submission hook with success/error handling
   */
  const { submitForm, isLoading } = useFormSubmission({
    onSuccess: () => {
      // Track successful conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_modal'
        });
      }
      
      setCurrentStep('success');
      setShowSuccess(true);
      
      // Auto-close after success message
      setTimeout(() => {
        handleClose();
      }, 3000);
    },
    onError: (error) => {
      setErrors({ submit: error.message });
    }
  });

  /**
   * Handle form field changes with validation
   */
  const handleFieldChange = React.useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  /**
   * Handle form submission with validation
   */
  const handleSubmit = React.useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // If problema is not selected, go to problem selection step
    if (!formData.problema && currentStep === 'form') {
      setCurrentStep('problem');
      return;
    }
    
    await submitForm(e);
  }, [formData, currentStep, submitForm]);

  /**
   * Handle modal close with cleanup
   */
  const handleClose = React.useCallback(() => {
    setFormData({ nombre: '', email: '', tipoNegocio: '', problema: '' });
    setErrors({});
    setShowSuccess(false);
    setCurrentStep('form');
    onClose();
  }, [onClose]);

  /**
   * Check if form can be submitted
   */
  const canSubmit = React.useMemo(() => {
    return formData.nombre?.trim() && 
           formData.email?.trim() && 
           formData.tipoNegocio &&
           Object.keys(errors).length === 0;
  }, [formData, errors]);

  /**
   * Modal animation variants
   */
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success State */}
            {showSuccess && currentStep === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ¡Perfecto! 🎉
                </h3>
                <p className="text-gray-600 mb-4">
                  Hemos recibido tu información. Te contactaremos en las próximas 2 horas 
                  para comenzar la transformación de tu MYPE.
                </p>
                <div className="bg-peru-red/10 rounded-lg p-4">
                  <p className="text-sm text-peru-red font-medium">
                    📱 Revisa tu WhatsApp - Te escribiremos pronto
                  </p>
                </div>
              </motion.div>
            )}

            {/* Problem Selection Step */}
            {currentStep === 'problem' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 id="modal-title" className="text-xl font-semibold text-gray-900 mb-2">
                    ¿Cuál es tu mayor desafío? 🤔
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Esto nos ayuda a personalizar nuestra estrategia para ti
                  </p>
                </div>

                <div className="grid gap-3">
                  {commonProblems.map((problem) => (
                    <button
                      key={problem.value}
                      onClick={() => {
                        handleFieldChange('problema', problem.value);
                        setCurrentStep('form');
                      }}
                      className="text-left p-4 rounded-lg border border-gray-200 hover:border-peru-red hover:bg-peru-red/5 transition-all duration-200 group"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-peru-red transition-colors">
                        {problem.label}
                      </span>
                    </button>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep('form')}
                  className="w-full"
                >
                  ← Volver al formulario
                </Button>
              </motion.div>
            )}

            {/* Main Form */}
            {currentStep === 'form' && !showSuccess && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <h3 id="modal-title" className="text-xl font-semibold text-gray-900 mb-2">
                    Comienza Tu Transformación 🚀
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cuéntanos sobre tu MYPE y te mostraremos cómo llegar a 150 UIT
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <Input
                    label="¿Cómo te llamas?"
                    type="text"
                    name="nombre"
                    value={formData.nombre || ''}
                    onChange={(e) => handleFieldChange('nombre', e.target.value)}
                    placeholder="Tu nombre completo"
                    error={errors.nombre}
                    required
                  />

                  <Input
                    label="Tu email"
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="tu@email.com"
                    error={errors.email}
                    required
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      ¿Qué tipo de negocio tienes?
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {businessTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleFieldChange('tipoNegocio', type.value)}
                          className={cn(
                            "text-left p-3 rounded-lg border transition-all duration-200",
                            formData.tipoNegocio === type.value
                              ? "border-peru-red bg-peru-red/5 text-peru-red"
                              : "border-gray-200 hover:border-gray-300 text-gray-700",
                            type.popular && "ring-1 ring-peru-gold/20"
                          )}
                        >
                          <span className="text-sm font-medium">
                            {type.label}
                          </span>
                          {type.popular && (
                            <span className="ml-2 text-xs bg-peru-gold/20 text-peru-gold px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    {errors.tipoNegocio && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.tipoNegocio}
                      </p>
                    )}
                  </div>

                  {formData.problema && (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">
                        <strong>Tu desafío:</strong>{' '}
                        {commonProblems.find(p => p.value === formData.problema)?.label}
                      </p>
                      <button
                        type="button"
                        onClick={() => setCurrentStep('problem')}
                        className="text-xs text-peru-red hover:underline mt-1"
                      >
                        Cambiar
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.submit}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  isLoading={isLoading}
                  disabled={!canSubmit}
                  className="bg-peru-red hover:bg-peru-red/90 text-white"
                >
                  {!formData.problema ? (
                    <>
                      Continuar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    'Comenzar Mi Transformación 🚀'
                  )}
                </Button>

                {/* Trust Indicators */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    4.9/5 • Más de 50 MYPEs transformadas este año
                  </p>
                  <p className="text-xs text-gray-400">
                    🔒 Tus datos están seguros y protegidos
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

ContactModal.displayName = 'ContactModal';
