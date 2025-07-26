'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from '@/hooks/useOnboarding';
import { 
  Zap, 
  Target, 
  Users, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  X,
  Play
} from 'lucide-react';

// 🚀 STEP 4: ACCELERATE - Onboarding en 3 pasos SIMPLES
const onboardingSteps = [
  {
    id: 'welcome',
    title: '¡Bienvenido al Sistema AQXION!',
    subtitle: 'En 2 minutos tendrás tu sistema generando clientes',
    icon: Zap,
    color: 'emerald'
  },
  {
    id: 'business',
    title: 'Configura tu Negocio',
    subtitle: 'Solo necesitamos 3 datos básicos',
    icon: Target,
    color: 'blue'
  },
  {
    id: 'activate',
    title: '¡Sistema Activado!',
    subtitle: 'Tu infraestructura digital está funcionando',
    icon: CheckCircle,
    color: 'green'
  }
];

interface OnboardingFlowProps {
  userName?: string;
}

export function OnboardingFlow({ userName }: OnboardingFlowProps) {
  const { 
    isFirstTime,
    needsOnboarding,
    completeOnboarding
  } = useOnboarding();
  
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [businessData, setBusinessData] = useState({
    name: '',
    type: '',
    phone: ''
  });

  useEffect(() => {
    if (isFirstTime || needsOnboarding) {
      setShowOnboarding(true);
    }
  }, [isFirstTime, needsOnboarding]);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completar onboarding
      completeOnboarding();
      setShowOnboarding(false);
    }
  };

  const handleSkip = () => {
    setShowOnboarding(false);
  };

  if (!showOnboarding) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Sistema AQXION</h2>
                  <p className="text-sm text-emerald-100">Configuración inicial</p>
                </div>
              </div>
              
              <button
                onClick={handleSkip}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-3 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>Paso {currentStep + 1} de {onboardingSteps.length}</span>
              <span>{Math.round(((currentStep + 1) / onboardingSteps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
                className="h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* STEP 1: Welcome */}
                {currentStep === 0 && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ¡Bienvenido al Sistema AQXION!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      En solo 2 minutos tendrás tu sistema completo generando clientes automáticamente.
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Tu sistema incluye:</h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Website optimizado para conversiones</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>WhatsApp Business automatizado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Google My Business optimizado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Centro de control con métricas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Business Info */}
                {currentStep === 1 && (
                  <div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      Configura tu Negocio
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">
                      Solo necesitamos estos 3 datos para personalizar tu sistema
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre de tu negocio
                        </label>
                        <input
                          type="text"
                          value={businessData.name}
                          onChange={(e) => setBusinessData({...businessData, name: e.target.value})}
                          placeholder="Ej: Salón de Belleza María"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de negocio
                        </label>
                        <select
                          value={businessData.type}
                          onChange={(e) => setBusinessData({...businessData, type: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Selecciona tu rubro</option>
                          <option value="salon">Salón de Belleza</option>
                          <option value="dental">Clínica Dental</option>
                          <option value="restaurant">Restaurante</option>
                          <option value="gym">Gimnasio</option>
                          <option value="other">Otro</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          WhatsApp Business
                        </label>
                        <input
                          type="tel"
                          value={businessData.phone}
                          onChange={(e) => setBusinessData({...businessData, phone: e.target.value})}
                          placeholder="Ej: +51 987 654 321"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Activation */}
                {currentStep === 2 && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ¡Sistema Activado!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Tu infraestructura digital ya está funcionando y generando leads 24/7
                    </p>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-green-900 mb-3">Sistema funcionando:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-green-800">Website optimizado</span>
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs">ACTIVO</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-green-800">WhatsApp conectado</span>
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs">ACTIVO</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-green-800">Google optimizado</span>
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs">ACTIVO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
            <button
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Omitir por ahora
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentStep === 1 && (!businessData.name || !businessData.type)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              {currentStep === onboardingSteps.length - 1 ? (
                <>
                  <Play className="w-4 h-4" />
                  Ir al Sistema
                </>
              ) : (
                <>
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
