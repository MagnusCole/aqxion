'use client';

import React from 'react';
import { Clock, MessageSquare, Phone, Mail, CheckCircle, AlertTriangle, Star, Calendar } from 'lucide-react';

export default function SoportePage() {
  const supportOptions = [
    {
      id: 1,
      title: 'Soporte por Chat',
      description: 'Respuesta en menos de 4 horas durante horario laboral',
      icon: MessageSquare,
      availability: 'Lun-Vie 9AM-6PM',
      color: 'green'
    },
    {
      id: 2,
      title: 'Consulta Telefónica',
      description: 'Llamada personalizada con tu especialista',
      icon: Phone,
      availability: 'Previa coordinación',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Email Detallado',
      description: 'Para consultas técnicas o análisis profundo',
      icon: Mail,
      availability: 'Respuesta en 24h',
      color: 'purple'
    }
  ];

  const faqItems = [
    {
      question: '¿Cuánto tiempo tengo de soporte incluido?',
      answer: '90 días completos de soporte personal desde la activación de tu servicio. Sin restricciones en la cantidad de consultas.'
    },
    {
      question: '¿Qué tipo de consultas puedo hacer?',
      answer: 'Cualquier duda sobre tu sitio web, WhatsApp Business, Google My Business, o estrategias para optimizar tu presencia digital.'
    },
    {
      question: '¿Qué pasa después de los 90 días?',
      answer: 'Tu sistema seguirá funcionando de forma autónoma. Podrás contratar soporte adicional si lo necesitas, pero la mayoría de clientes ya son autónomos.'
    },
    {
      question: '¿Hacen cambios directamente en mi sitio?',
      answer: 'Sí, para optimizaciones menores. Para cambios grandes, te guiamos paso a paso o coordinamos una sesión de trabajo conjunto.'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-8 px-4 md:py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          Soporte Personal Incluido
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Durante tus 90 días de soporte, estamos aquí para ayudarte a maximizar 
          tu presencia digital. <span className="font-semibold text-gray-900">Sin letras pequeñas, 
          sin límites de consultas.</span>
        </p>
      </div>

      {/* Stats de soporte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-gray-900">Tiempo de respuesta</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-1">&lt; 24h</p>
          <p className="text-sm text-gray-600">Promedio: 4 horas</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-6 h-6 text-yellow-600" />
            <span className="font-semibold text-gray-900">Satisfacción</span>
          </div>
          <p className="text-2xl font-bold text-yellow-600 mb-1">4.9/5</p>
          <p className="text-sm text-gray-600">Calificación promedio</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="font-semibold text-gray-900">Resolución</span>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-1">98%</p>
          <p className="text-sm text-gray-600">Primer contacto</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Formulario de contacto */}
        <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Enviar consulta
            </h2>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tu nombre
                </label>
                <input 
                  type="text" 
                  placeholder="Ej: María García" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de consulta
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors">
                <option>Sitio web - Cambios o mejoras</option>
                <option>WhatsApp Business - Configuración</option>
                <option>Google My Business - Optimización</option>
                <option>Métricas y análisis</option>
                <option>Estrategia general</option>
                <option>Problema técnico</option>
                <option>Otra consulta</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe tu consulta
              </label>
              <textarea 
                placeholder="Explica en detalle qué necesitas. Mientras más específico seas, mejor podremos ayudarte."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                rows={5}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prioridad
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="priority" value="normal" className="mr-2" defaultChecked />
                  <span className="text-sm">Normal (24h)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" value="urgent" className="mr-2" />
                  <span className="text-sm">Urgente (4h)</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Enviar consulta
            </button>
          </form>
        </div>

        {/* Métodos de contacto y FAQ */}
        <div className="space-y-8">
          {/* Métodos de contacto */}
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Métodos de contacto
            </h3>
            <div className="space-y-4">
              {supportOptions.map((option) => (
                <div key={option.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    option.color === 'green' ? 'bg-green-100 text-green-600' :
                    option.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <option.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{option.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                    <p className="text-xs text-gray-500">{option.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preguntas frecuentes
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900 text-sm">{item.question}</span>
                    <div className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-3 px-3 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Recordatorio de garantía */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Garantía honesta
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Te ayudamos a configurar tu presencia digital paso a paso. 
                  Si algo no funciona como esperamos, trabajamos contigo hasta solucionarlo. 
                  No prometemos milagros, pero sí nuestro compromiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
