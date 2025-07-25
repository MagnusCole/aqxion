'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Bot, Users, Send, Settings, Download, RefreshCw, Play, Pause } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

interface WhatsAppTemplate {
  id: string;
  name: string;
  trigger: string;
  message: string;
  active: boolean;
  category: 'bienvenida' | 'consulta' | 'seguimiento' | 'promocion';
  usage: number;
}

interface WhatsAppMessage {
  id: string;
  from: string;
  message: string;
  timestamp: string;
  status: 'pending' | 'replied' | 'automated';
  template?: string;
}

const WhatsAppDashboard = () => {
  const [templates, setTemplates] = useState<WhatsAppTemplate[]>([]);
  const [messages, setMessages] = useState<WhatsAppMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'mensajes' | 'plantillas' | 'automatizacion'>('mensajes');

  // Datos simulados
  const mockTemplates: WhatsAppTemplate[] = [
    {
      id: '1',
      name: 'Bienvenida Automática',
      trigger: 'palabra_clave: hola',
      message: '¡Hola! 👋 Gracias por contactarnos. Somos AQXION y te ayudamos a crear tu presencia digital completa por solo S/.1,500.\n\n¿Te interesa saber más sobre nuestros servicios?',
      active: true,
      category: 'bienvenida',
      usage: 45
    },
    {
      id: '2',
      name: 'Consulta de Precios',
      trigger: 'palabra_clave: precio|costo|cuanto',
      message: '💰 Nuestro paquete completo incluye:\n✅ Sitio web profesional\n✅ WhatsApp Business\n✅ Google My Business\n✅ 90 días de soporte\n\nTodo por S/.1,500 (pago único, sin mensualidades)\n\n¿Te gustaría agendar una llamada para explicarte los detalles?',
      active: true,
      category: 'consulta',
      usage: 23
    },
    {
      id: '3',
      name: 'Seguimiento Post-Consulta',
      trigger: 'programado: 24_horas_sin_respuesta',
      message: 'Hola 👋 Vi que te interesaron nuestros servicios digitales.\n\n¿Tienes alguna pregunta específica? Estoy aquí para ayudarte a tomar la mejor decisión para tu negocio.\n\nRecuerda que incluimos 90 días de soporte personal 💪',
      active: true,
      category: 'seguimiento',
      usage: 12
    }
  ];

  const mockMessages: WhatsAppMessage[] = [
    {
      id: '1',
      from: '+51 999 123 456',
      message: 'Hola, me interesa saber sobre sus servicios digitales',
      timestamp: '2025-01-27 14:30',
      status: 'automated',
      template: 'Bienvenida Automática'
    },
    {
      id: '2',
      from: '+51 987 654 321',
      message: '¿Cuánto cuesta el paquete completo?',
      timestamp: '2025-01-27 13:15',
      status: 'automated',
      template: 'Consulta de Precios'
    },
    {
      id: '3',
      from: '+51 999 888 777',
      message: 'Necesito ayuda con mi negocio online urgente',
      timestamp: '2025-01-27 12:45',
      status: 'pending'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setTemplates(mockTemplates);
      setMessages(mockMessages);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleTemplate = (id: string) => {
    setTemplates(templates.map(t => 
      t.id === id ? { ...t, active: !t.active } : t
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      bienvenida: 'bg-blue-100 text-blue-800',
      consulta: 'bg-green-100 text-green-800',
      seguimiento: 'bg-yellow-100 text-yellow-800',
      promocion: 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-red-100 text-red-800',
      replied: 'bg-green-100 text-green-800',
      automated: 'bg-blue-100 text-blue-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const exportWhatsAppData = () => {
    const csvContent = [
      ['Desde', 'Mensaje', 'Fecha', 'Estado', 'Plantilla'],
      ...messages.map(msg => [
        msg.from, msg.message, msg.timestamp, msg.status, msg.template || 'Manual'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `whatsapp-mensajes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const stats = {
    totalMensajes: messages.length,
    automatizados: messages.filter(m => m.status === 'automated').length,
    pendientes: messages.filter(m => m.status === 'pending').length,
    plantillasActivas: templates.filter(t => t.active).length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-green-600" />
                WhatsApp Automation
              </h1>
              <p className="mt-2 text-gray-600">
                Automatiza la atención al cliente y gestiona leads por WhatsApp
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={exportWhatsAppData}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="w-4 h-4" />
                Exportar Datos
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Settings className="w-4 h-4" />
                Configurar API
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mensajes Hoy</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalMensajes}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Automatizados</p>
                <p className="text-2xl font-bold text-blue-600">{stats.automatizados}</p>
              </div>
              <Bot className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pendientes</p>
                <p className="text-2xl font-bold text-red-600">{stats.pendientes}</p>
              </div>
              <Users className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Plantillas Activas</p>
                <p className="text-2xl font-bold text-green-600">{stats.plantillasActivas}</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">T</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: 'mensajes', label: 'Mensajes Recientes', icon: MessageSquare },
            { id: 'plantillas', label: 'Plantillas Auto', icon: Bot },
            { id: 'automatizacion', label: 'Configuración', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                activeTab === tab.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6">
            {activeTab === 'mensajes' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Mensajes Recientes ({messages.length})
                </h2>
                
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900">{message.from}</span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>
                              {message.status === 'automated' ? 'Automatizado' : 
                               message.status === 'replied' ? 'Respondido' : 'Pendiente'}
                            </span>
                            {message.template && (
                              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {message.template}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-2">{message.message}</p>
                          
                          <span className="text-sm text-gray-500">{message.timestamp}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          {message.status === 'pending' && (
                            <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                              Responder
                            </button>
                          )}
                          <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                            Ver Chat
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'plantillas' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Plantillas de Respuesta Automática ({templates.length})
                  </h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Bot className="w-4 h-4" />
                    Nueva Plantilla
                  </button>
                </div>
                
                <div className="space-y-4">
                  {templates.map((template) => (
                    <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-medium text-gray-900">{template.name}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(template.category)}`}>
                              {template.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              Usado {template.usage} veces
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Trigger:</strong> {template.trigger}
                          </p>
                          
                          <div className="bg-gray-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-700 whitespace-pre-wrap">{template.message}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleTemplate(template.id)}
                            className={`flex items-center gap-1 px-3 py-1 text-sm rounded ${
                              template.active 
                                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                : 'bg-red-100 text-red-700 hover:bg-red-200'
                            }`}
                          >
                            {template.active ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                            {template.active ? 'Activo' : 'Inactivo'}
                          </button>
                          <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                            Editar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'automatizacion' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Configuración de Automatización
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      📱 Google Apps Script + Sheets Integration
                    </h3>
                    <p className="text-green-800 mb-4">
                      Sistema 100% gratuito que conecta WhatsApp con Google Sheets para automatizar respuestas y gestionar leads.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-900 mb-2">1. Google Apps Script</h4>
                        <p className="text-sm text-green-700 mb-3">
                          Script que procesa mensajes y activa respuestas automáticas
                        </p>
                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Configurar Script
                        </button>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-900 mb-2">2. Google Sheets Database</h4>
                        <p className="text-sm text-green-700 mb-3">
                          Hoja de cálculo que almacena mensajes y plantillas
                        </p>
                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Abrir Sheets
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      🔗 WhatsApp Business API Setup
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Conecta tu número de WhatsApp Business para recibir y enviar mensajes automáticamente.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Conectar WhatsApp
                      </button>
                      <button className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50">
                        Probar Conexión
                      </button>
                      <button className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50">
                        Ver Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDashboard;
