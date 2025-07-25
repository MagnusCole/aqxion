'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, MessageCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useFormSubmission } from '@/hooks';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  interest: string;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    interest: 'plan-mype'
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const { submitForm, isLoading } = useFormSubmission({
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          interest: 'plan-mype'
        });
      }, 3000);
    },
    onError: () => {
      // Error handled with toast-like notification
    },
    useGoogleSheets: true
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canSubmit = () => {
    return formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.business.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;
    
    await submitForm({
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'Contact Modal - Simplified',
      leadValue: 'S/.1,500 - Plan MYPE'
    } as any);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl overflow-hidden"
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-gray-50/50" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 text-red-500 opacity-20"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    ¡Empezá ya!
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold text-red-600">S/.1,500</span> • Presencia digital completa
                  </p>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Success State */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">¡Listo!</h3>
                    <p className="text-gray-600 text-sm">Te contactamos en las próximas 2 horas para coordinar tu transformación digital.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              {!showSuccess && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* What's included */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tu plan incluye:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>✅ Sitio web profesional</li>
                      <li>✅ WhatsApp Business configurado</li>
                      <li>✅ Google My Business optimizado</li>
                      <li>✅ Dashboard de control</li>
                      <li>✅ 90 días de soporte personal</li>
                      <li>✅ Hosting incluido por 1 año</li>
                    </ul>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 text-sm"
                      required
                    />
                    
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 text-sm"
                      required
                    />
                    
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+51 999 999 999"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 text-sm"
                      required
                    />
                    
                    <input
                      type="text"
                      value={formData.business}
                      onChange={(e) => handleInputChange('business', e.target.value)}
                      placeholder="Nombre de tu negocio"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 text-sm"
                      required
                    />

                    {/* Interest Selection */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">¿Cuándo te gustaría empezar?</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => handleInputChange('interest', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 text-sm"
                      >
                        <option value="inmediato">Esta semana (recomendado)</option>
                        <option value="proximo-mes">Próximo mes</option>
                        <option value="solo-info">Solo quiero información</option>
                        <option value="plan-mype">Plan MYPE completo - S/.1,500</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!canSubmit() || isLoading}
                    className="group relative w-full bg-gray-900 text-white py-4 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden"
                  >
                    {/* Efecto de gradiente animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Quiero mi presencia digital</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Trust Signals */}
                  <div className="text-center pt-4">
                    <p className="text-xs text-gray-500">
                      🔒 Sin compromisos de largo plazo • ⚡ Resultados en 90 días • 🇵🇪 Soporte en español
                    </p>
                  </div>
                </form>
              )}

              {/* Contact Methods */}
              {!showSuccess && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center mb-3">
                    ¿Prefieres hablar directamente?
                  </p>
                  <div className="flex justify-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="tel:+51999999999"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Phone className="w-3 h-3" />
                      Llamar
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/51999999999?text=Hola! Me interesa el Plan MYPE de S/.1,500 para mi presencia digital completa"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-xl text-xs font-medium hover:bg-green-200 transition-colors duration-300"
                    >
                      <MessageCircle className="w-3 h-3" />
                      WhatsApp
                    </motion.a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
