"use client";

import React, { useState } from 'react';
import { googleSheetsService, trackFormSubmission } from '@/lib/googleSheets';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  resourceDescription: string;
}

const businessTypes = [
  "Selecciona tu tipo de negocio",
  "E-commerce (tienda online)",
  "Software as a Service (SaaS)",
  "Marketplace o plataforma digital",
  "Agencia de marketing/publicidad",
  "Consultoría empresarial",
  "Fintech o servicios financieros",
  "Educación online/EdTech",
  "Salud digital/HealthTech",
  "Logística y distribución",
  "Manufactura e industria",
  "Servicios profesionales",
  "Startup en crecimiento",
  "Otro negocio escalable"
];


export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  isOpen,
  onClose,
  resourceTitle,
  resourceDescription: _resourceDescription,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    industria: 'Selecciona tu tipo de negocio'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await googleSheetsService.submitLeadMagnetDownload({
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        industria: formData.industria,
        resourceName: resourceTitle
      });

      if (result.success) {
        setIsSubmitted(true);
        
        // Tracking de evento exitoso
        trackFormSubmission('lead-magnet', true, {
          resource_name: resourceTitle,
          business_type: formData.industria
        });

        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            industria: 'Selecciona tu tipo de negocio'
          });
          onClose();
        }, 3000);
      } else {
        throw new Error(result.error || 'Error al descargar el recurso');
      }
    } catch (error) {
      // Tracking de evento fallido
      trackFormSubmission('lead-magnet', false, {
        error_message: error instanceof Error ? error.message : 'Error desconocido',
        resource_name: resourceTitle
      });
      
      alert('Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight leading-snug">¿Buscas un socio estratégico?</h2>
              <p className="text-neutral-600 text-base mt-2 max-w-md">Recursos exclusivos para hacer crecer tu negocio</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar modal de generación de leads"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Apellido */}
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu apellido"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Número telefónico *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Industria */}
                <div>
                  <label htmlFor="industria" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de negocio *
                  </label>
                  <select
                    id="industria"
                    name="industria"
                    value={formData.industria}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {businessTypes.map((businessType, index) => (
                      <option key={index} value={businessType} disabled={businessType === 'Selecciona tu tipo de negocio'}>
                        {businessType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.industria === 'Selecciona tu tipo de negocio'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : (
                    'Acceder al Recurso �'
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Información confidencial. Solo para empresarios comprometidos con el crecimiento.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">¡Excelente!</h3>
              <p className="text-gray-600 mb-4">
                Hemos enviado el recurso a tu email. Revisa tu bandeja de entrada para acceder al contenido exclusivo.
              </p>
              <p className="text-sm text-gray-500">
                Esta ventana se cerrará automáticamente...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
