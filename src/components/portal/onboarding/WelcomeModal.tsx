'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Sparkles, Heart, DollarSign, Users, TrendingUp } from 'lucide-react'

interface WelcomeModalProps {
  isOpen: boolean
  onClose: () => void
  userName?: string
  businessName?: string
}

export function WelcomeModal({ isOpen, onClose, userName, businessName }: WelcomeModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  
  const welcomeSteps = [
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "¡Felicitaciones! 🎉",
      subtitle: "Tomaste la mejor decisión para tu negocio",
      description: "Tu inversión de S/.1,500 en AQXION marcará un antes y después en tu presencia digital.",
      action: "Continuar"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-green-600" />,
      title: "Tu Portal Está Listo ✨",
      subtitle: "Todo configurado y funcionando",
      description: "Hemos preparado tu espacio personalizado con herramientas profesionales para hacer crecer tu negocio.",
      action: "Ver mi portal"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "90 Días de Acompañamiento 🚀",
      subtitle: "No estás solo en este viaje",
      description: "Nuestro equipo te guiará paso a paso hasta que veas resultados reales en tu negocio.",
      action: "¡Empezar ahora!"
    }
  ]

  const benefits = [
    { icon: <Users className="h-5 w-5" />, text: "Más clientes potenciales" },
    { icon: <DollarSign className="h-5 w-5" />, text: "Mejores conversiones" },
    { icon: <TrendingUp className="h-5 w-5" />, text: "Crecimiento sostenible" },
  ]

  const nextStep = () => {
    if (currentStep < welcomeSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const skipToEnd = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={skipToEnd}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500" />
              
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Icon with sparkle animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex justify-center mb-6 relative"
                >
                  {welcomeSteps[currentStep].icon}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-2"
                >
                  {welcomeSteps[currentStep].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-red-600 font-semibold mb-4"
                >
                  {welcomeSteps[currentStep].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 mb-8 leading-relaxed"
                >
                  {welcomeSteps[currentStep].description}
                </motion.p>

                {/* Benefits (solo en el primer paso) */}
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gray-50 rounded-lg p-4 mb-6"
                  >
                    <p className="text-sm font-medium text-gray-700 mb-3">Lo que vas a lograr:</p>
                    <div className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center gap-3 text-sm text-gray-600"
                        >
                          <span className="text-green-600">{benefit.icon}</span>
                          {benefit.text}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Información personal (si está disponible) */}
                {(userName || businessName) && currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-red-50 rounded-lg p-4 mb-6"
                  >
                    <p className="text-sm text-red-800">
                      {businessName ? (
                        <>Listo para hacer crecer <span className="font-semibold">{businessName}</span></>
                      ) : userName ? (
                        <>Bienvenido, <span className="font-semibold">{userName}</span></>
                      ) : (
                        <>Tu portal personalizado está configurado</>
                      )}
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Progress indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {welcomeSteps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 w-6 rounded-full transition-colors ${
                      index <= currentStep ? 'bg-red-600' : 'bg-gray-200'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index === currentStep ? 1.2 : 1 }}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1 px-4 py-3 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Anterior
                  </button>
                )}
                
                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  {welcomeSteps[currentStep].action}
                </motion.button>
              </div>

              {/* Skip option */}
              <button
                onClick={skipToEnd}
                className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Saltar introducción
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
