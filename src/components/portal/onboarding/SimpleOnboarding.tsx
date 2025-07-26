'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  MessageCircle,
  Building2,
  Sparkles,
  Play,
  X
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';
import { useRouter } from 'next/navigation';

interface OnboardingStepData {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  action?: string;
  route?: string;
}

const onboardingSteps: OnboardingStepData[] = [
  {
    id: 1,
    title: '¡Bienvenido a tu Plan MYPE!',
    description: 'Tu inversión de S/1,500 te da acceso completo a herramientas que funcionan. Empecemos paso a paso.',
    icon: Sparkles,
    color: 'blue',
    action: 'Comenzar'
  },
  {
    id: 2,
    title: 'Configura tu Negocio',
    description: 'Completa la información básica de tu empresa para personalizar tu experiencia.',
    icon: Building2,
    color: 'purple',
    action: 'Configurar',
    route: '/portal/setup/business'
  },
  {
    id: 3,
    title: 'Tu Dashboard de Control',
    description: 'Accede a métricas reales, tareas pendientes y herramientas para hacer crecer tu negocio.',
    icon: Users,
    color: 'green',
    action: 'Ver Dashboard',
    route: '/portal/dashboard'
  },
  {
    id: 4,
    title: 'Gestión de Contactos',
    description: 'Empieza a construir tu base de datos de clientes y leads.',
    icon: MessageCircle,
    color: 'orange',
    action: 'Gestionar Contactos',
    route: '/portal/contacts'
  },
  {
    id: 5,
    title: 'Tu Presencia Digital',
    description: 'Verifica tu sitio web, WhatsApp Business y Google My Business.',
    icon: Globe,
    color: 'indigo',
    action: 'Ver Sitio Web'
  },
  {
    id: 6,
    title: '¡Ya tienes todo listo!',
    description: 'Tu Plan MYPE está funcionando. Tienes 90 días de soporte personal incluido.',
    icon: CheckCircle,
    color: 'emerald',
    action: 'Ir al Dashboard',
    route: '/portal/dashboard'
  }
];

interface SimpleOnboardingProps {
  onComplete?: () => void;
  onClose?: () => void;
}

export default function SimpleOnboarding({ onComplete, onClose }: SimpleOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const { userData, addActivity } = useMYPEUserData();
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleStepAction = (step: OnboardingStepData) => {
    if (step.route) {
      router.push(step.route);
      setIsVisible(false);
    } else {
      handleNext();
    }
  };

  const handleComplete = () => {
    addActivity('setup_step', 'Onboarding completado');
    setIsVisible(false);
    onComplete?.();
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const currentStepData = onboardingSteps.find(step => step.id === currentStep);
  const progress = (currentStep / onboardingSteps.length) * 100;

  if (!isVisible || !currentStepData) return null;

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; button: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', button: 'bg-blue-500 hover:bg-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', button: 'bg-purple-500 hover:bg-purple-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', button: 'bg-green-500 hover:bg-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', button: 'bg-orange-500 hover:bg-orange-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', button: 'bg-indigo-500 hover:bg-indigo-600' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', button: 'bg-emerald-500 hover:bg-emerald-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(currentStepData.color);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full relative"
        >
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>

          {/* Barra de progreso */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Paso {currentStep} de {onboardingSteps.length}</span>
              <span>{Math.round(progress)}% completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="bg-blue-500 h-1.5 rounded-full"
              />
            </div>
          </div>

          {/* Contenido del paso */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Icono */}
            <div className={`w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <currentStepData.icon className={`h-8 w-8 ${colors.text}`} />
            </div>

            {/* Título */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {currentStepData.title}
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {currentStepData.description}
            </p>

            {/* Información del usuario si está disponible */}
            {userData && currentStep === 1 && (
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-blue-800">
                  <div className="font-medium">Plan MYPE Activo</div>
                  <div>Inversión: S/1,500</div>
                  <div>90 días de soporte incluido</div>
                </div>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex gap-3">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Anterior
                </button>
              )}
              
              <button
                onClick={() => handleStepAction(currentStepData)}
                className={`flex-1 px-6 py-3 ${colors.button} text-white rounded-xl transition-colors font-medium flex items-center justify-center gap-2`}
              >
                {currentStepData.action}
                {currentStep < onboardingSteps.length && (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Indicador de pasos */}
            <div className="flex justify-center gap-2 mt-6">
              {onboardingSteps.map((step) => (
                <div
                  key={step.id}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    step.id === currentStep ? 'bg-blue-500' : 
                    step.id < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
