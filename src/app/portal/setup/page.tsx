'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, CheckCircle, ExternalLink, Copy, AlertTriangle,
  Search, Globe, MessageSquare, BarChart3, Users, Settings
} from 'lucide-react';

interface AccessSetupStep {
  id: string;
  title: string;
  description: string;
  platform: 'google-my-business' | 'google-ads' | 'meta-ads';
  status: 'pending' | 'in-progress' | 'completed';
  instructions: string[];
  accessLevel: string;
  estimatedTime: string;
}

export default function AccessSetupPage() {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const adminEmail = "admin@aqxion.com"; // Email real de AQXION

  const setupSteps: AccessSetupStep[] = [
    {
      id: 'google-my-business',
      title: 'Google My Business',
      description: 'Acceso para optimizar perfil y generar leads locales',
      platform: 'google-my-business',
      status: 'pending',
      accessLevel: 'Administrador',
      estimatedTime: '5 minutos',
      instructions: [
        'Abre Google My Business en tu navegador',
        'Ve a "Usuarios" en el menú lateral',
        'Haz clic en "Invitar usuarios"',
        'Agrega el email: admin@aqxion.com',
        'Selecciona rol: "Administrador"',
        'Envía la invitación'
      ]
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      description: 'Gestión de campañas publicitarias para maximizar ROI',
      platform: 'google-ads',
      status: 'pending',
      accessLevel: 'Administrador',
      estimatedTime: '3 minutos',
      instructions: [
        'Entra a tu cuenta de Google Ads',
        'Ve a "Herramientas y configuración" → "Acceso y seguridad"',
        'Haz clic en el ícono "+"',
        'Ingresa email: admin@aqxion.com',
        'Selecciona "Administrador"',
        'Confirma la invitación'
      ]
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads Manager',
      description: 'Campañas en Facebook e Instagram para reach masivo',
      platform: 'meta-ads',
      status: 'pending',
      accessLevel: 'Administrador de anuncios',
      estimatedTime: '4 minutos',
      instructions: [
        'Ve a Meta Business Manager',
        'Selecciona tu cuenta de anuncios',
        'Ve a "Configuración" → "Usuarios"',
        'Haz clic en "Agregar personas"',
        'Email: admin@aqxion.com',
        'Rol: "Administrador de anuncios"',
        'Enviar invitación'
      ]
    }
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(adminEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'google-my-business': return Search;
      case 'google-ads': return BarChart3;
      case 'meta-ads': return Users;
      default: return Settings;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-12 w-12 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Setup de Accesos</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Para generar leads reales, necesitamos acceso a tus plataformas. 
          Este proceso es <strong>seguro</strong> y <strong>reversible</strong> en cualquier momento.
        </p>
      </motion.div>

      {/* Email de AQXION */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Email de AQXION para invitaciones:
            </h3>
            <div className="flex items-center space-x-2">
              <code className="bg-white px-3 py-2 rounded border text-blue-800 font-mono">
                {adminEmail}
              </code>
              <button
                onClick={copyEmailToClipboard}
                className="flex items-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <Copy className="h-4 w-4 mr-1" />
                {copiedEmail ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid gap-6 mb-8">
        {setupSteps.map((step, index) => {
          const Icon = getPlatformIcon(step.platform);
          const isSelected = selectedStep === step.id;
          
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all cursor-pointer ${
                isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedStep(isSelected ? null : step.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(step.status)}`}></div>
                    <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 pt-4"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Instrucciones paso a paso:</h4>
                        <ol className="space-y-2">
                          {step.instructions.map((instruction, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full text-xs flex items-center justify-center mt-0.5">
                                {i + 1}
                              </span>
                              <span>{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Nivel de acceso:</div>
                          <div className="font-medium text-gray-900">{step.accessLevel}</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-sm text-green-700 mb-1">¿Por qué necesitamos esto?</div>
                          <div className="text-xs text-green-600">
                            Para optimizar tu perfil, crear campañas efectivas y generar leads reales para tu negocio.
                          </div>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                          Marcar como completado
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Security Notice */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
      >
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Compromiso de Seguridad</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Solo usaremos el acceso para optimizar tu presencia digital</li>
              <li>• Puedes revocar el acceso en cualquier momento</li>
              <li>• Todas las acciones son transparentes y te mantenemos informado</li>
              <li>• No compartimos tu información con terceros</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-8"
      >
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Completaste los accesos?</h3>
          <p className="text-gray-600 mb-4">
            Una vez que nos des acceso, comenzaremos la optimización inmediatamente.
            Verás los primeros resultados en 24-48 horas.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Accesos Completados - Comenzar Optimización
          </button>
        </div>
      </motion.div>
    </div>
  );
}
