'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Users, MessageSquare, FileText, 
  CheckCircle, AlertCircle, Clock, ArrowRight,
  Search, Share2, Phone, Star
} from 'lucide-react';

interface AccessSetupProps {
  onComplete: (access: string) => void;
}

export default function AccessSetupFlow() {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const setupSteps = [
    {
      id: 'google-my-business',
      title: 'Google My Business',
      description: 'Para generar llamadas y reseñas locales',
      action: 'Dar acceso de administrador',
      urgency: 'high',
      estimatedLeads: '5-10 llamadas/mes',
      icon: Search,
      color: 'bg-red-500',
      instructions: [
        '1. Ve a business.google.com',
        '2. Selecciona tu negocio',
        '3. Ve a "Usuarios" > "Invitar usuarios"',
        '4. Agrega: admin@aqxion.com como "Administrador"',
        '5. Confirma la invitación'
      ]
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      description: 'Para campañas de búsqueda pagada',
      action: 'Dar acceso de gestión',
      urgency: 'medium',
      estimatedLeads: '10-20 leads/mes',
      icon: Search,
      color: 'bg-blue-500',
      instructions: [
        '1. Ve a ads.google.com',
        '2. Click en "Herramientas" > "Acceso a la cuenta"',
        '3. Click "+" para invitar usuario',
        '4. Email: ads@aqxion.com',
        '5. Nivel: "Administrador"'
      ]
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook/Instagram)',
      description: 'Para campañas en redes sociales',
      action: 'Dar acceso de gestión',
      urgency: 'medium', 
      estimatedLeads: '8-15 leads/mes',
      icon: Share2,
      color: 'bg-blue-600',
      instructions: [
        '1. Ve a business.facebook.com',
        '2. Configuración empresarial > Usuarios',
        '3. Click "Agregar" > "Agregar usuario"',
        '4. Email: social@aqxion.com',
        '5. Asignar acceso a cuentas publicitarias'
      ]
    },
    {
      id: 'whatsapp-community',
      title: 'WhatsApp Community',
      description: 'Soporte 24/7 y recursos compartidos',
      action: 'Unirse al grupo',
      urgency: 'high',
      estimatedLeads: 'Soporte inmediato',
      icon: MessageSquare,
      color: 'bg-green-500',
      instructions: [
        '1. Click en el enlace del grupo',
        '2. Unirse a "AQXION Clientes VIP"',
        '3. Presentarse con nombre y tipo de negocio',
        '4. Activar notificaciones',
        '5. Revisar mensajes fijados'
      ]
    }
  ];

  const markComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    return urgency === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getProgressPercentage = () => {
    return (completedSteps.length / setupSteps.length) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header con progreso */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🚀 Setup para Generar Leads REALES
        </h1>
        <p className="text-gray-600 mb-4">
          Completa estos pasos para que tu inversión de S/.1,500 empiece a generar resultados inmediatos.
        </p>
        
        {/* Barra de progreso */}
        <div className="bg-gray-200 rounded-full h-3 mb-2">
          <motion.div
            className="bg-green-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${getProgressPercentage()}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-sm text-gray-600">
          {completedSteps.length} de {setupSteps.length} completados
        </div>
      </div>

      {/* ROI Estimado */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">23-45</div>
            <div className="text-green-700">Leads estimados/mes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">S/.4,500+</div>
            <div className="text-blue-700">Revenue proyectado</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">300%</div>
            <div className="text-purple-700">ROI en 30 días</div>
          </div>
        </div>
      </motion.div>

      {/* Steps de configuración */}
      <div className="space-y-6">
        {setupSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl border-2 transition-all ${
                isCompleted 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${step.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        {step.title}
                        {isCompleted && (
                          <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        )}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getUrgencyColor(step.urgency)}`}>
                        {step.urgency === 'high' ? 'Alta Prioridad' : 'Prioridad Media'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">
                      {step.estimatedLeads}
                    </div>
                    <div className="text-xs text-gray-500">Estimado</div>
                  </div>
                </div>

                {/* Instrucciones paso a paso */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    📋 Pasos para completar:
                  </h4>
                  <ol className="space-y-1">
                    {step.instructions.map((instruction, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Botones de acción */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {step.id === 'whatsapp-community' && (
                      <a
                        href="https://chat.whatsapp.com/AQXION_VIP_GROUP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Unirse al Grupo
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    
                    <button
                      onClick={() => markComplete(step.id)}
                      disabled={isCompleted}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        isCompleted
                          ? 'bg-green-100 text-green-700 cursor-default'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {isCompleted ? (
                        <span className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Completado
                        </span>
                      ) : (
                        'Marcar como Completado'
                      )}
                    </button>
                  </div>

                  {!isCompleted && (
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      ~5 min
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action Final */}
      {completedSteps.length === setupSteps.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-2">🎉 ¡Setup Completado!</h2>
          <p className="text-green-100 mb-4">
            Tu sistema está configurado para generar leads. Los primeros resultados llegarán en 24-48 horas.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Ver Dashboard de Resultados
          </button>
        </motion.div>
      )}

      {/* Soporte disponible */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <MessageSquare className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-1">
              💬 Soporte Disponible 24/7
            </h3>
            <p className="text-yellow-700 text-sm mb-3">
              ¿Tienes dudas con algún paso? Nuestro equipo está aquí para ayudarte.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://chat.whatsapp.com/AQXION_VIP_GROUP"
                className="inline-flex items-center text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                <MessageSquare className="w-3 h-3 mr-1" />
                Grupo VIP
              </a>
              <a
                href="https://wa.me/51999999999"
                className="inline-flex items-center text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                <Phone className="w-3 h-3 mr-1" />
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
