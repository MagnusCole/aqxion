'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MessageCircle, Star, Shield } from 'lucide-react';
import { useFormSubmission } from '@/hooks';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { submitForm, isLoading } = useFormSubmission({
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    },
    onError: () => {
      alert('Error al enviar. Por favor intenta nuevamente.');
    },
    useGoogleSheets: true
  });

  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white via-yellow-50 to-red-50 rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl border border-yellow-200"
          >
            {/* Elementos decorativos */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-20 blur-lg"
            />
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-20 w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full opacity-30"
            />

            {/* Botón cerrar premium */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
            >
              <X size={20} />
            </motion.button>

            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: 3 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    ✓
                  </motion.div>
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ¡Mensaje Recibido! 🇵🇪
                </h3>
                <p className="text-lg text-gray-600">
                  Nuestro equipo te contactará en las próximas 24 horas para tu consulta gratuita
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header Premium */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-yellow-100 px-4 py-2 rounded-full mb-4"
                  >
                    <Star className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 font-medium">Consulta VIP Gratuita</span>
                  </motion.div>

                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold mb-3"
                  >
                    <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                      ¡Conversemos sobre tu MYPE!
                    </span>
                  </motion.h3>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 text-lg"
                  >
                    Cuéntanos tu situación actual y descubre cómo podemos 
                    <span className="text-red-600 font-semibold"> multiplicar tus ventas en 90 días</span>
                  </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Formulario */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <form onSubmit={submitForm} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Tu nombre completo"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Tu email principal"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="tel"
                          name="telefono"
                          placeholder="Tu WhatsApp (+51 999 888 777)"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="text"
                          name="negocio"
                          placeholder="¿Qué tipo de negocio tienes?"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white/80 backdrop-blur-sm"
                        />
                      </div>

                      <div>
                        <textarea
                          name="mensaje"
                          rows={3}
                          placeholder="Cuéntanos tu mayor desafío actual..."
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white/80 backdrop-blur-sm resize-none"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      >
                        {/* Efecto shine */}
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          whileHover={{ x: 100, opacity: 1 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                        />
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isLoading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Solicitar Consulta VIP
                            </>
                          )}
                        </span>
                      </motion.button>
                    </form>
                  </motion.div>

                  {/* Información adicional */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Garantías */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-green-600" />
                        <span className="font-bold text-green-800">100% Seguro y Confidencial</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        Tus datos están protegidos. Solo los usamos para contactarte sobre tu consulta.
                      </p>
                    </div>

                    {/* Qué incluye */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900">Tu consulta VIP incluye:</h4>
                      
                      {[
                        { icon: Phone, text: "Llamada de 30 min con especialista" },
                        { icon: MessageCircle, text: "Análisis gratuito de tu situación" },
                        { icon: Star, text: "Plan personalizado sin compromiso" },
                        { icon: Mail, text: "Reporte digital con recomendaciones" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Urgencia */}
                    <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-red-200 rounded-2xl p-4 text-center">
                      <p className="text-red-700 font-medium text-sm">
                        ⏰ Solo 3 consultas VIP disponibles esta semana
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Footer del modal */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center mt-8 pt-6 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-500">
                    🇵🇪 <span className="font-medium">Respuesta garantizada en 24 horas</span> • 
                    Atención de lunes a sábado • Especialistas peruanos
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
