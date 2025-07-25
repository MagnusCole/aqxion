'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  MapPin, 
  Globe,
  ArrowLeft,
  Check,
  ChevronRight
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

interface BusinessSetupProps {
  onComplete?: () => void;
  onBack?: () => void;
}

const businessTypes = [
  'Restaurante / Comida',
  'Belleza / Estética', 
  'Salud / Clínica',
  'Educación / Academia',
  'Servicios Profesionales',
  'Retail / Tienda',
  'Construcción / Hogar',
  'Tecnología / Software',
  'Otros'
];

export default function BusinessSetup({ onComplete, onBack }: BusinessSetupProps) {
  const { userData, updateBusinessInfo, completeTask } = useMYPEUserData();
  const [saving, setSaving] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: userData?.businessInfo.name || '',
    type: userData?.businessInfo.type || '',
    description: userData?.businessInfo.description || '',
    address: userData?.businessInfo.address || '',
    phone: userData?.businessInfo.phone || '',
    whatsapp: userData?.businessInfo.whatsapp || '',
    email: userData?.businessInfo.email || '',
    website: userData?.businessInfo.website || '',
    facebook: userData?.businessInfo.socialMedia.facebook || '',
    instagram: userData?.businessInfo.socialMedia.instagram || '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      updateBusinessInfo({
        name: formData.name,
        type: formData.type,
        description: formData.description,
        address: formData.address,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        email: formData.email,
        website: formData.website,
        socialMedia: {
          facebook: formData.facebook,
          instagram: formData.instagram,
        }
      });

      completeTask('setup-1');
      setCompleted(true);
      
      setTimeout(() => {
        onComplete?.();
      }, 1200);

    } catch (error) {
      console.error('Error saving business info:', error);
    } finally {
      setSaving(false);
    }
  };

  const isFormValid = formData.name && formData.type && formData.phone;

  // Apple-style success state
  if (completed) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-white" strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Listo</h2>
          <p className="text-gray-500 font-medium">Tu negocio está configurado</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Apple-style Navigation Bar */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-blue-500 font-medium active:opacity-60 transition-opacity"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
            <span className="text-[17px]">Atrás</span>
          </button>
          <h1 className="text-[17px] font-semibold text-gray-900">Mi Negocio</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 pb-20"
      >
        <form onSubmit={handleSubmit} className="space-y-8 mt-6">
          
          {/* Business Info Section */}
          <div className="space-y-1">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Información del Negocio</h2>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Nombre del negocio
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Mi Empresa"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Tipo de negocio
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors appearance-none"
                    required
                  >
                    <option value="">Seleccionar tipo</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Descripción
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="¿Qué hace tu negocio?"
                    rows={3}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-1">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Contacto</h2>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Teléfono principal
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+51 999 888 777"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="+51 999 888 777"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="contacto@empresa.com"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-1">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Ubicación</h2>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-900 mb-2">
                  Dirección
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Av. Principal 123, Distrito, Lima"
                  rows={2}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Digital Presence Section */}
          <div className="space-y-1">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Presencia Digital</h2>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Sitio web
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://www.empresa.com"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Facebook
                  </label>
                  <input
                    type="url"
                    value={formData.facebook}
                    onChange={(e) => handleInputChange('facebook', e.target.value)}
                    placeholder="https://facebook.com/empresa"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-gray-900 mb-2">
                    Instagram
                  </label>
                  <input
                    type="url"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange('instagram', e.target.value)}
                    placeholder="https://instagram.com/empresa"
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 text-[17px] focus:border-blue-500 focus:ring-0 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

        </form>
      </motion.div>

      {/* Apple-style Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200 p-4">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid || saving}
          className="w-full h-12 bg-blue-500 text-white text-[17px] font-semibold rounded-lg active:scale-95 disabled:bg-gray-300 disabled:active:scale-100 transition-all duration-200"
        >
          {saving ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Guardando...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Guardar</span>
              <ChevronRight className="h-4 w-4" strokeWidth={3} />
            </div>
          )}
        </button>
      </div>

    </div>
  );
}
