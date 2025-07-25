'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, CheckCircle, AlertCircle, Clock, 
  User, Shield, Key, ArrowRight, Copy, Eye, EyeOff 
} from 'lucide-react';

interface AccessSetupProps {
  onComplete: (accesses: any) => void;
}

export default function AccessSetup({ onComplete }: AccessSetupProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [accesses, setAccesses] = useState({
    googleMyBusiness: { status: 'pending', email: '', access: false },
    googleAds: { status: 'pending', email: '', access: false },
    metaAds: { status: 'pending', email: '', access: false },
    whatsappNumber: { status: 'pending', number: '', verified: false }
  });

  const steps = [
    {
      id: 'gmb',
      title: 'Google My Business',
      description: 'Para optimizar tu perfil y generar leads locales',
      icon: '🏪',
      instructions: [
        'Ve a business.google.com',
        'Selecciona tu negocio',
        'Ve a "Usuarios" → "Invitar usuario"',
        'Agrega: soporte@aqxion.com como "Administrador"',
        'Confirma la invitación'
      ],
      benefit: 'Generará 5-15 leads mensuales via Google'
    },
    {
      id: 'gads',
      title: 'Google Ads',
      description: 'Para campañas optimizadas que convierten',
      icon: '🎯',
      instructions: [
        'Ve a ads.google.com',
        'Configuración → "Acceso a la cuenta"',
        'Hacer clic en "+"',
        'Email: ads@aqxion.com',
        'Nivel: "Administrador"'
      ],
      benefit: 'ROI promedio: 3x inversión publicitaria'
    },
    {
      id: 'meta',
      title: 'Meta Ads (Facebook/Instagram)',
      description: 'Para alcance masivo y retargeting',
      icon: '📱',
      instructions: [
        'Ve a business.facebook.com',
        'Configuración del negocio',
        'Usuarios → "Agregar"',
        'Email: meta@aqxion.com',
        'Rol: "Administrador"'
      ],
      benefit: 'Alcance: 10x más personas en tu área'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Business Info',
      description: 'Para conectarte con soporte y comunidad',
      icon: '💬',
      instructions: [
        'Tu número WhatsApp Business actual',
        'Confirma que puedes recibir mensajes',
        'Te agregaremos al grupo de soporte',
        'Acceso a comunidad AQXION'
      ],
      benefit: 'Soporte 24/7 + comunidad activa'
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(accesses);
    }
  };

  const markCompleted = (stepId: string, data: any) => {
    setAccesses(prev => ({
      ...prev,
      [stepId]: { ...prev[stepId as keyof typeof prev], ...data, status: 'completed' }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Setup de Accesos DWY</h2>
          <span className="text-sm text-gray-600">
            Paso {currentStep + 1} de {steps.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{currentStepData.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{currentStepData.title}</h3>
              <p className="text-blue-100">{currentStepData.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Instructions */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Key className="w-5 h-5 mr-2 text-blue-600" />
                Pasos a seguir:
              </h4>
              <ol className="space-y-3">
                {currentStepData.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>

              {/* Benefit */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center text-green-700 font-medium mb-1">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Beneficio Esperado:
                </div>
                <p className="text-green-600">{currentStepData.benefit}</p>
              </div>
            </div>

            {/* Action Form */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Confirmar Setup:
              </h4>
              
              {currentStepData.id === 'whatsapp' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tu número WhatsApp Business
                    </label>
                    <input
                      type="tel"
                      placeholder="+51 999 999 999"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onChange={(e) => markCompleted('whatsappNumber', { number: e.target.value })}
                    />
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 text-sm">
                      📱 Te enviaremos el link del grupo de soporte una vez confirmado
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email usado en la plataforma
                    </label>
                    <input
                      type="email"
                      placeholder="tu-email@empresa.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onChange={(e) => markCompleted(currentStepData.id, { email: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="access-granted"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      onChange={(e) => markCompleted(currentStepData.id, { access: e.target.checked })}
                    />
                    <label htmlFor="access-granted" className="text-sm text-gray-700">
                      ✅ He enviado la invitación de acceso
                    </label>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center text-yellow-700 text-sm">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span>Verificaremos el acceso en las próximas 2 horas</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>

            <div className="flex space-x-3">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg">
                Ayuda
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <span>{currentStep === steps.length - 1 ? 'Finalizar Setup' : 'Siguiente'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Help Section */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center text-gray-700 text-sm">
          <ExternalLink className="w-4 h-4 mr-2" />
          <span>¿Necesitas ayuda? Contacta a soporte: </span>
          <a href="https://wa.me/51999999999" className="text-blue-600 hover:text-blue-800 ml-1">
            WhatsApp Soporte
          </a>
        </div>
      </div>
    </div>
  );
}
