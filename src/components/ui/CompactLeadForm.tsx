'use client';
import React, { useState } from 'react';
import { 
  FormFieldRedesigned as FormField, 
  FormSelectRedesigned as FormSelect, 
  FormButtonRedesigned as FormButton 
} from './FormComponentsRedesigned';

interface CompactLeadFormProps {
  onSubmit: (data: CompactLeadData) => void;
  isLoading?: boolean;
  title?: string;
  subtitle?: string;
}

export interface CompactLeadData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  objetivoPrincipal: string;
  presupuestoEstimado: string;
}

const objetivoOptions = [
  { value: 'ventas', label: '💰 Aumentar ventas directas' },
  { value: 'leads', label: '📈 Generar más leads calificados' },
  { value: 'awareness', label: '🌟 Mejorar reconocimiento de marca' },
  { value: 'digitalizacion', label: '🚀 Digitalizar mi negocio' },
  { value: 'competencia', label: '⚡ Superar a la competencia' },
  { value: 'otro', label: '🎯 Otro objetivo' }
];

const presupuestoOptions = [
  { value: 'menos-1k', label: 'Menos de S/1,000/mes' },
  { value: '1k-3k', label: 'S/1,000 - S/3,000/mes' },
  { value: '3k-10k', label: 'S/3,000 - S/10,000/mes' },
  { value: '10k-mas', label: 'Más de S/10,000/mes' },
  { value: 'evaluar', label: 'Por evaluar' }
];

export const CompactLeadForm: React.FC<CompactLeadFormProps> = ({
  onSubmit,
  isLoading = false,
  title = "¡Recibe tu estrategia personalizada!",
  subtitle = "En 24 horas tendrás un plan diseñado específicamente para tu MYPE"
}) => {
  const [formData, setFormData] = useState<CompactLeadData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    objetivoPrincipal: '',
    presupuestoEstimado: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateField = (field: keyof CompactLeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isStep1Valid = formData.nombre && formData.email && formData.telefono && formData.empresa;
  const isStep2Valid = formData.objetivoPrincipal && formData.presupuestoEstimado;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          {subtitle}
        </p>
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentStep >= 1 ? 'bg-peru-red' : 'bg-gray-200'
          }`} />
          <div className={`w-8 h-1 rounded-full transition-all duration-300 ${
            currentStep >= 2 ? 'bg-peru-red' : 'bg-gray-200'
          }`} />
          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentStep >= 2 ? 'bg-peru-red' : 'bg-gray-200'
          }`} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-5 animate-in slide-in-from-right duration-500">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Primero, conozcámonos 👋
              </h4>
              <p className="text-sm text-gray-500">
                Solo necesitamos algunos datos básicos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Tu nombre"
                value={formData.nombre}
                onChange={(value) => updateField('nombre', value)}
                placeholder="Nombre completo"
                required
                icon={<span className="text-blue-500">👤</span>}
              />
              <FormField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => updateField('email', value)}
                placeholder="tu@empresa.com"
                required
                icon={<span className="text-green-500">📧</span>}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="WhatsApp"
                type="tel"
                value={formData.telefono}
                onChange={(value) => updateField('telefono', value)}
                placeholder="+51 999 888 777"
                required
                icon={<span className="text-green-500">📱</span>}
              />
              <FormField
                label="Empresa"
                value={formData.empresa}
                onChange={(value) => updateField('empresa', value)}
                placeholder="Tu MYPE"
                required
                icon={<span className="text-purple-500">🏢</span>}
              />
            </div>

            <FormButton
              type="button"
              onClick={handleNext}
              disabled={!isStep1Valid}
              className="w-full"
              size="lg"
            >
              Continuar → 
            </FormButton>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-5 animate-in slide-in-from-right duration-500">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                ¿Qué necesita tu negocio? 🎯
              </h4>
              <p className="text-sm text-gray-500">
                Esto nos ayuda a personalizar tu estrategia
              </p>
            </div>

            <FormSelect
              label="¿Cuál es tu principal objetivo?"
              value={formData.objetivoPrincipal}
              onChange={(value) => updateField('objetivoPrincipal', value)}
              options={objetivoOptions}
              placeholder="Selecciona tu objetivo principal"
              required
              icon={<span className="text-orange-500">🎯</span>}
              helpText="Selecciona lo más importante para tu negocio ahora"
            />

            <FormSelect
              label="¿Cuánto podrías invertir mensualmente?"
              value={formData.presupuestoEstimado}
              onChange={(value) => updateField('presupuestoEstimado', value)}
              options={presupuestoOptions}
              placeholder="Rango de inversión mensual"
              required
              icon={<span className="text-green-500">💰</span>}
              helpText="No hay compromisos, solo queremos darte opciones realistas"
            />

            <div className="flex gap-3 pt-4">
              <FormButton
                type="button"
                onClick={handleBack}
                variant="secondary"
                className="flex-1"
              >
                ← Atrás
              </FormButton>
              <FormButton
                type="submit"
                loading={isLoading}
                disabled={!isStep2Valid}
                className="flex-[2]"
                size="lg"
              >
                {isLoading ? 'Enviando...' : '🚀 Recibir mi estrategia'}
              </FormButton>
            </div>
          </div>
        )}

        {/* Trust indicators */}
        <div className="text-center pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>100% seguro</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>24h respuesta</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🎁</span>
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
