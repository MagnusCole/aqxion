'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Heart, 
  Sparkles, 
  Target, 
  Zap,
  Users,
  Calendar,
  MessageCircle,
  Globe,
  BarChart3,
  Award,
  X,
  Play,
  Clock
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface OnboardingStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  estimatedTime: string;
  value: string;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: '¡Bienvenido a AQXION!',
    subtitle: 'Tu plan MYPE está listo',
    description: 'Vas a tener todo lo que necesitas para conseguir más clientes de forma consistente. Sin complicaciones técnicas, nosotros nos encargamos.',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    estimatedTime: '2 min',
    value: 'Setup completo'
  },
  {
    id: 2,
    title: 'Tu Dashboard Personal',
    subtitle: 'Métricas que realmente importan',
    description: 'Olvídate de números complicados. Aquí verás exactamente cuántos clientes nuevos tienes, cuántas vistas en Google y cómo van tus ingresos.',
    icon: BarChart3,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    estimatedTime: '3 min',
    value: 'Control total'
  },
  {
    id: 3,
    title: 'Gestión de Clientes',
    subtitle: 'CRM simple pero poderoso',
    description: 'Todos tus contactos organizados. Sabrás exactamente quién te contactó, cuándo y qué necesita. Perfecto para dar seguimiento.',
    icon: Users,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    estimatedTime: '5 min',
    value: 'Organización pro'
  },
  {
    id: 4,
    title: 'Tu Calendario Inteligente',
    subtitle: 'Nunca pierdas una cita',
    description: 'Programa contenido, recuerda seguimientos y organiza tu tiempo. Todo sincronizado para que puedas enfocarte en atender clientes.',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    estimatedTime: '4 min',
    value: 'Tiempo optimizado'
  },
  {
    id: 5,
    title: 'Hermes, tu Asistente IA',
    subtitle: 'Como tener un empleado 24/7',
    description: 'Te ayuda a crear contenido, responder mensajes y optimizar tu estrategia. Es como tener un experto en marketing trabajando para ti.',
    icon: Sparkles,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    estimatedTime: '6 min',
    value: 'Automatización mágica'
  },
  {
    id: 6,
    title: '¡Listo para Crecer!',
    subtitle: 'Tu MYPE transformada',
    description: 'Ya tienes todo funcionando. Ahora solo queda ver crecer tu negocio mientras nosotros nos encargamos de la tecnología.',
    icon: Award,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    estimatedTime: '1 min',
    value: 'Éxito garantizado'
  }
];

const quickWins = [
  {
    title: 'Actualiza tu perfil',
    description: 'Agrega información básica de tu negocio',
    time: '2 min',
    points: 50,
    completed: false
  },
  {
    title: 'Explora el CRM',
    description: 'Agrega tu primer contacto',
    time: '3 min',
    points: 75,
    completed: false
  },
  {
    title: 'Programa tu primera tarea',
    description: 'Usa el calendario para organizarte',
    time: '2 min',
    points: 50,
    completed: false
  },
  {
    title: 'Chatea con Hermes',
    description: 'Pregúntale cómo mejorar tu marketing',
    time: '5 min',
    points: 100,
    completed: false
  }
];

interface OnboardingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function OnboardingWizard({ isOpen, onClose, onComplete }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleting, setIsCompleting] = useState(false);
  const { user } = useAuth();

  const currentStepData = onboardingSteps.find(step => step.id === currentStep);
  const isLastStep = currentStep === onboardingSteps.length;
  const firstName = user?.email?.split('@')[0] || 'Usuario';

  const nextStep = () => {
    if (currentStep < onboardingSteps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = async () => {
    setIsCompleting(true);
    // Simular guardado en backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    onComplete();
    onClose();
  };

  if (!isOpen || !currentStepData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        
        {/* Header */}
        <div className={`relative ${currentStepData.bgColor} p-8 border-b`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full hover:bg-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className={`w-20 h-20 ${currentStepData.bgColor} rounded-3xl flex items-center justify-center border-4 border-white shadow-lg`}>
                <currentStepData.icon className={`w-10 h-10 ${currentStepData.color}`} />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {currentStepData.title}
            </h1>
            <h2 className={`text-xl font-semibold ${currentStepData.color} mb-4`}>
              {currentStepData.subtitle}
            </h2>
            
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index + 1 <= currentStep 
                      ? 'bg-gray-900 w-8' 
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{currentStepData.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>{currentStepData.value}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
              {currentStepData.description}
            </p>
          </motion.div>

          {/* Quick Wins para el último paso */}
          {isLastStep && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                🎯 Tus primeras tareas para conseguir resultados rápidos:
              </h3>
              <div className="space-y-3">
                {quickWins.map((win, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{win.title}</h4>
                      <p className="text-sm text-gray-600">{win.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{win.time}</div>
                      <div className="text-xs text-amber-600 font-medium">{win.points} pts</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={prevStep}
                className="px-6 py-3 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
              >
                Anterior
              </button>
            ) : <div />}

            {!isLastStep ? (
              <motion.button
                onClick={nextStep}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all flex items-center gap-2 font-semibold"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                onClick={handleComplete}
                disabled={isCompleting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl hover:from-red-700 hover:to-amber-700 transition-all flex items-center gap-2 font-semibold disabled:opacity-50"
              >
                {isCompleting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Configurando tu portal...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    ¡Empezar a crecer mi MYPE!
                  </>
                )}
              </motion.button>
            )}
          </div>

          {/* Skip option */}
          {!isLastStep && (
            <div className="text-center mt-6">
              <button
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Saltar tutorial (puedes verlo después)
              </button>
            </div>
          )}
        </div>

        {/* Footer motivacional */}
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-sm text-gray-600">
            🚀 <strong>{firstName}</strong>, estás a {onboardingSteps.length - currentStep + 1} pasos de transformar tu MYPE
          </p>
        </div>
      </motion.div>
    </div>
  );
}
