'use client';
import React, { useState } from 'react';
import { 
  FormFieldRedesigned as FormField, 
  FormSelectRedesigned as FormSelect, 
  FormTextareaRedesigned as FormTextarea, 
  FormButtonRedesigned as FormButton 
} from './FormComponentsRedesigned';

interface StrategicLeadFormProps {
  onSubmit: (data: LeadFormData) => void;
  isLoading?: boolean;
  variant?: 'compact' | 'detailed' | 'qualification';
}

export interface LeadFormData {
  // Datos básicos
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  cargo: string;
  
  // Datos de segmentación estratégica
  industria: string;
  tamanoEmpresa: string;
  facturacionAnual: string;
  nivelDigitalizacion: string;
  presupuestoEstimado: string;
  timelineProyecto: string;
  
  // Datos de calificación
  rolDecision: string;
  experienciaAgencias: string;
  objetivoPrincipal: string;
  canalActual: string;
  dolorPrincipal: string;
  
  // Contexto adicional
  descripcionProyecto: string;
  comoNosConocio: string;
}

const industriaOptions = [
  { value: 'retail', label: 'Retail / Comercio', description: 'Tiendas físicas y online' },
  { value: 'restaurantes', label: 'Restaurantes / Gastronomía', description: 'Food service y delivery' },
  { value: 'servicios', label: 'Servicios Profesionales', description: 'Consultorías, asesorías' },
  { value: 'salud', label: 'Salud y Bienestar', description: 'Clínicas, spa, fitness' },
  { value: 'educacion', label: 'Educación', description: 'Institutos, academias' },
  { value: 'tecnologia', label: 'Tecnología', description: 'Software, IT services' },
  { value: 'manufactura', label: 'Manufactura', description: 'Producción y fabricación' },
  { value: 'inmobiliaria', label: 'Inmobiliaria', description: 'Bienes raíces' },
  { value: 'turismo', label: 'Turismo y Hotelería', description: 'Hoteles, agencias de viaje' },
  { value: 'otro', label: 'Otro', description: 'Especificar en comentarios' }
];

const tamanoEmpresaOptions = [
  { value: 'micro', label: '1-10 empleados', description: 'Microempresa' },
  { value: 'pequena', label: '11-50 empleados', description: 'Pequeña empresa' },
  { value: 'mediana', label: '51-200 empleados', description: 'Mediana empresa' },
  { value: 'grande', label: '200+ empleados', description: 'Gran empresa' }
];

const presupuestoOptions = [
  { value: 'menos-1k', label: 'Menos de S/1,000', description: 'Presupuesto inicial' },
  { value: '1k-3k', label: 'S/1,000 - S/3,000', description: 'Presupuesto básico' },
  { value: '3k-10k', label: 'S/3,000 - S/10,000', description: 'Presupuesto estándar' },
  { value: '10k-30k', label: 'S/10,000 - S/30,000', description: 'Presupuesto premium' },
  { value: 'mas-30k', label: 'Más de S/30,000', description: 'Presupuesto enterprise' },
  { value: 'evaluar', label: 'Por evaluar', description: 'Depende de la propuesta' }
];

const objetivoOptions = [
  { value: 'ventas', label: 'Aumentar ventas directas', description: 'ROI inmediato' },
  { value: 'leads', label: 'Generar más leads calificados', description: 'Pipeline de ventas' },
  { value: 'awareness', label: 'Mejorar reconocimiento de marca', description: 'Brand building' },
  { value: 'digitalizacion', label: 'Digitalizar el negocio', description: 'Transformación digital' },
  { value: 'competencia', label: 'Superar a la competencia', description: 'Ventaja competitiva' },
  { value: 'expansion', label: 'Expandir a nuevos mercados', description: 'Crecimiento geográfico' }
];

export const StrategicLeadForm: React.FC<StrategicLeadFormProps> = ({
  onSubmit,
  isLoading = false,
  variant = 'detailed'
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    cargo: '',
    industria: '',
    tamanoEmpresa: '',
    facturacionAnual: '',
    nivelDigitalizacion: '',
    presupuestoEstimado: '',
    timelineProyecto: '',
    rolDecision: '',
    experienciaAgencias: '',
    objetivoPrincipal: '',
    canalActual: '',
    dolorPrincipal: '',
    descripcionProyecto: '',
    comoNosConocio: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = variant === 'compact' ? 2 : variant === 'detailed' ? 3 : 4;

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          Paso {currentStep} de {totalSteps}
        </span>
        <span className="text-sm text-gray-500">
          {Math.round((currentStep / totalSteps) * 100)}% completado
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-peru-red h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          ¡Hablemos de tu proyecto! 🚀
        </h3>
        <p className="text-gray-600">
          Primero, necesitamos conocerte un poco mejor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Nombre completo"
          value={formData.nombre}
          onChange={(value) => updateField('nombre', value)}
          placeholder="Tu nombre y apellido"
          required
          icon={<span>👤</span>}
        />
        <FormField
          label="Email corporativo"
          type="email"
          value={formData.email}
          onChange={(value) => updateField('email', value)}
          placeholder="tu@empresa.com"
          required
          icon={<span>📧</span>}
          helpText="Usaremos este email para enviarte la propuesta"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="WhatsApp"
          type="tel"
          value={formData.telefono}
          onChange={(value) => updateField('telefono', value)}
          placeholder="+51 999 888 777"
          required
          icon={<span>📱</span>}
          helpText="Para coordinar la consulta estratégica"
        />
        <FormField
          label="Cargo / Posición"
          value={formData.cargo}
          onChange={(value) => updateField('cargo', value)}
          placeholder="Gerente General, CEO, Marketing Manager..."
          required
          icon={<span>💼</span>}
        />
      </div>

      <FormField
        label="Nombre de la empresa"
        value={formData.empresa}
        onChange={(value) => updateField('empresa', value)}
        placeholder="MYPE Innovadora S.A.C."
        required
        icon={<span>🏢</span>}
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Cuéntanos sobre tu empresa 📊
        </h3>
        <p className="text-gray-600">
          Esto nos ayuda a personalizar nuestra propuesta
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="¿En qué industria opera tu empresa?"
          value={formData.industria}
          onChange={(value) => updateField('industria', value)}
          options={industriaOptions}
          placeholder="Selecciona tu industria"
          required
          icon={<span>🏭</span>}
          helpText="Nos especializamos en MYPES de diferentes sectores"
        />
        <FormSelect
          label="Tamaño de la empresa"
          value={formData.tamanoEmpresa}
          onChange={(value) => updateField('tamanoEmpresa', value)}
          options={tamanoEmpresaOptions}
          placeholder="Número de empleados"
          required
          icon={<span>👥</span>}
        />
      </div>

      <FormSelect
        label="¿Cuál es tu principal objetivo con el marketing digital?"
        value={formData.objetivoPrincipal}
        onChange={(value) => updateField('objetivoPrincipal', value)}
        options={objetivoOptions}
        placeholder="¿Qué quieres lograr?"
        required
        icon={<span>🎯</span>}
        helpText="Esto define nuestra estrategia contigo"
      />

      <FormSelect
        label="Presupuesto estimado para marketing digital (mensual)"
        value={formData.presupuestoEstimado}
        onChange={(value) => updateField('presupuestoEstimado', value)}
        options={presupuestoOptions}
        placeholder="Rango de inversión"
        required
        icon={<span>💰</span>}
        helpText="Nos ayuda a diseñar servicios acordes a tu realidad"
      />
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Último paso: Tu proyecto 🎯
        </h3>
        <p className="text-gray-600">
          Cuéntanos qué necesitas y cómo podemos ayudarte
        </p>
      </div>

      <FormTextarea
        label="Describe tu proyecto o necesidad principal"
        value={formData.descripcionProyecto}
        onChange={(value) => updateField('descripcionProyecto', value)}
        placeholder="Ejemplo: Necesitamos más clientes para nuestro restaurante, especialmente delivery. Actualmente solo tenemos Facebook pero no vemos resultados..."
        rows={4}
        required
        helpText="Sé específico: ¿qué problema quieres resolver? ¿qué has intentado antes?"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="¿Cuándo necesitas implementar esto?"
          value={formData.timelineProyecto}
          onChange={(value) => updateField('timelineProyecto', value)}
          options={[
            { value: 'inmediato', label: 'Lo antes posible', description: 'Urgente' },
            { value: '1-2-semanas', label: 'En 1-2 semanas', description: 'Pronto' },
            { value: '1-mes', label: 'En el próximo mes', description: 'Planificado' },
            { value: '2-3-meses', label: 'En 2-3 meses', description: 'Futuro cercano' },
            { value: 'evaluando', label: 'Solo estoy evaluando', description: 'Investigación' }
          ]}
          placeholder="Timeline del proyecto"
          required
          icon={<span>⏰</span>}
        />
        <FormSelect
          label="¿Cómo nos conociste?"
          value={formData.comoNosConocio}
          onChange={(value) => updateField('comoNosConocio', value)}
          options={[
            { value: 'google', label: 'Google / Búsqueda web', description: 'SEO' },
            { value: 'redes-sociales', label: 'Redes sociales', description: 'Facebook, Instagram, LinkedIn' },
            { value: 'referido', label: 'Me lo recomendaron', description: 'Boca a boca' },
            { value: 'publicidad', label: 'Publicidad online', description: 'Anuncios' },
            { value: 'evento', label: 'Evento o conferencia', description: 'Presencial' },
            { value: 'otro', label: 'Otro canal', description: 'Especificar en comentarios' }
          ]}
          placeholder="Canal de adquisición"
          icon={<span>📍</span>}
          helpText="Nos ayuda a entender qué funciona mejor"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {renderProgressBar()}
        
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex justify-between items-center pt-8 border-t border-gray-100">
          <div>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
              >
                ← Paso anterior
              </button>
            )}
          </div>
          
          <div className="flex gap-4">
            {currentStep < totalSteps ? (
              <FormButton
                type="button"
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && (!formData.nombre || !formData.email || !formData.telefono || !formData.empresa || !formData.cargo)) ||
                  (currentStep === 2 && (!formData.industria || !formData.tamanoEmpresa || !formData.objetivoPrincipal || !formData.presupuestoEstimado))
                }
                className="min-w-[140px]"
              >
                Siguiente paso →
              </FormButton>
            ) : (
              <FormButton
                type="submit"
                loading={isLoading}
                disabled={!formData.descripcionProyecto || !formData.timelineProyecto}
                className="min-w-[180px]"
              >
                {isLoading ? 'Enviando...' : '🚀 Recibir mi propuesta estratégica'}
              </FormButton>
            )}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center pt-6 border-t border-gray-50">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Datos 100% seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎯</span>
              <span>Propuesta personalizada</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
