'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Phone, MessageCircle, Globe, ArrowRight, Loader2 } from 'lucide-react'

interface BusinessInfoFormProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: BusinessFormData) => void
  loading?: boolean
  initialData?: Partial<BusinessFormData>
}

interface BusinessFormData {
  businessName: string
  businessType: string
  whatsappNumber: string
  website: string
}

const businessTypes = [
  { value: 'restaurant', label: '🍽️ Restaurante/Comida', icon: '🍽️' },
  { value: 'retail', label: '🛍️ Tienda/Retail', icon: '🛍️' },
  { value: 'services', label: '⚙️ Servicios Profesionales', icon: '⚙️' },
  { value: 'health', label: '🏥 Salud/Medicina', icon: '🏥' },
  { value: 'beauty', label: '💄 Belleza/Estética', icon: '💄' },
  { value: 'education', label: '📚 Educación/Cursos', icon: '📚' },
  { value: 'tech', label: '💻 Tecnología', icon: '💻' },
  { value: 'real-estate', label: '🏠 Bienes Raíces', icon: '🏠' },
  { value: 'automotive', label: '🚗 Automotriz', icon: '🚗' },
  { value: 'other', label: '📋 Otro', icon: '📋' }
]

export function BusinessInfoForm({ isOpen, onClose, onComplete, loading = false, initialData }: BusinessInfoFormProps) {
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: initialData?.businessName || '',
    businessType: initialData?.businessType || '',
    whatsappNumber: initialData?.whatsappNumber || '',
    website: initialData?.website || ''
  })
  
  const [errors, setErrors] = useState<Partial<BusinessFormData>>({})
  const [currentStep, setCurrentStep] = useState(0)

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<BusinessFormData> = {}
    
    if (step === 0) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'El nombre del negocio es requerido'
      }
      if (!formData.businessType) {
        newErrors.businessType = 'Selecciona el tipo de negocio'
      }
    }
    
    if (step === 1) {
      if (formData.whatsappNumber && !/^(\+51)?9\d{8}$/.test(formData.whatsappNumber.replace(/\s/g, ''))) {
        newErrors.whatsappNumber = 'Formato inválido (ej: 999888777)'
      }
      if (formData.website && !/^https?:\/\/.+\..+/.test(formData.website)) {
        newErrors.website = 'URL inválida (debe incluir http:// o https://)'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 0) {
        setCurrentStep(1)
      } else {
        handleSubmit()
      }
    }
  }

  const prevStep = () => {
    setCurrentStep(0)
  }

  const handleSubmit = () => {
    if (validateStep(1)) {
      onComplete(formData)
    }
  }

  const updateField = (field: keyof BusinessFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-6 w-6" />
            <h2 className="text-xl font-bold">Información de tu Negocio</h2>
          </div>
          <p className="text-red-100 text-sm">
            Cuéntanos sobre tu empresa para personalizar tu experiencia
          </p>
          
          {/* Progress */}
          <div className="flex gap-2 mt-4">
            {[0, 1].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  step <= currentStep ? 'bg-white' : 'bg-red-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Paso 1: Información básica */}
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="h-4 w-4 inline mr-1" />
                  Nombre de tu negocio *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.businessName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: Restaurante El Sabor Peruano"
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Users className="h-4 w-4 inline mr-1" />
                  Tipo de negocio *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {businessTypes.map((type) => (
                    <motion.button
                      key={type.value}
                      type="button"
                      onClick={() => updateField('businessType', type.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 rounded-lg border-2 text-left transition-colors ${
                        formData.businessType === type.value
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-lg mb-1">{type.icon}</div>
                      <div className="text-sm font-medium">
                        {type.label.split(' ').slice(1).join(' ')}
                      </div>
                    </motion.button>
                  ))}
                </div>
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Paso 2: Información de contacto */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="h-4 w-4 inline mr-1" />
                  WhatsApp Business (opcional)
                </label>
                <input
                  type="tel"
                  value={formData.whatsappNumber}
                  onChange={(e) => updateField('whatsappNumber', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="999 888 777"
                />
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  Te ayudaremos a optimizar tu WhatsApp para recibir más consultas
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Globe className="h-4 w-4 inline mr-1" />
                  Sitio web actual (opcional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.website ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://miweb.com"
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">{errors.website}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  Si ya tienes un sitio web, podemos analizarlo y mejorarlo
                </p>
              </div>

              {/* Resumen */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Resumen:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Negocio:</span>
                    <span className="font-medium">{formData.businessName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="font-medium">
                      {businessTypes.find(t => t.value === formData.businessType)?.label.split(' ').slice(1).join(' ') || 'No seleccionado'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex gap-3 mt-8 pt-4 border-t">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                disabled={loading}
                className="flex-1 px-4 py-3 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Anterior
              </button>
            )}
            
            <motion.button
              type="button"
              onClick={nextStep}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Guardando...
                </>
              ) : (
                <>
                  {currentStep === 0 ? 'Continuar' : 'Completar'}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </div>

          {/* Skip option */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="w-full mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
          >
            Completar más tarde
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
