'use client';

import { useState } from 'react';
import { MessageSquare, Bot, Users, Settings, BarChart3, CheckCircle, Clock } from 'lucide-react';

export default function WhatsAppPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'messages' | 'templates'>('dashboard');

  const stats = {
    total: 45,
    today: 8,
    automated: 12,
    responseRate: 85
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-green-600" />
            WhatsApp Business Hub
          </h1>
          <p className="mt-2 text-gray-600">
            Automatiza tu atención al cliente y gestiona conversaciones
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'messages', label: 'Mensajes', icon: MessageSquare },
                { id: 'templates', label: 'Templates', icon: Settings }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mensajes Total</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Hoy</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.today}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Automatizados</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.automated}</p>
                </div>
                <Bot className="w-8 h-8 text-purple-500" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Tasa Respuesta</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.responseRate}%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversaciones Recientes</h3>
            <div className="space-y-4">
              {[
                { from: '+51 999 123 456', message: 'Hola, quisiera información sobre sus servicios', time: '14:30' },
                { from: '+51 987 654 321', message: '¿Tienen disponibilidad para una reunión?', time: '15:15' },
                { from: '+51 912 345 678', message: 'Gracias por la información', time: '16:00' }
              ].map((msg, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border border-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                    {msg.from.slice(-4)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{msg.from}</span>
                      <span className="text-sm text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-700">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Templates de Mensajes</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { name: 'Saludo Inicial', content: '¡Hola! Gracias por contactarnos. ¿En qué podemos ayudarte?', category: 'greeting' },
                { name: 'Información Servicios', content: 'Te cuento sobre nuestros servicios de presencia digital...', category: 'promotion' },
                { name: 'Seguimiento', content: 'Hola, quería hacer seguimiento a nuestra conversación...', category: 'follow-up' }
              ].map((template, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{template.content}</p>
                  <button className="text-green-600 hover:text-green-700 text-sm">
                    Usar template
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
