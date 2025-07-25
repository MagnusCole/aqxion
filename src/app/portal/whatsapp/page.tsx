'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Bot, Users, Settings, BarChart3, CheckCircle, Clock, QrCode, Send, Copy, Phone } from 'lucide-react';

interface WhatsAppTemplate {
  id: string;
  name: string;
  content: string;
  category: 'saludo' | 'seguimiento' | 'promocion' | 'informacion';
  variables: string[];
}

interface WhatsAppStats {
  total: number;
  today: number;
  automated: number;
  responseRate: number;
}

export default function WhatsAppPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'web' | 'templates'>('web');
  const [selectedTemplate, setSelectedTemplate] = useState<WhatsAppTemplate | null>(null);
  const [messageText, setMessageText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [stats, setStats] = useState<WhatsAppStats>({
    total: 45,
    today: 8,
    automated: 12,
    responseRate: 85
  });

  // Templates funcionales reales
  const templates: WhatsAppTemplate[] = [
    {
      id: '1',
      name: 'Saludo de Bienvenida',
      content: '¡Hola! 👋 Gracias por contactarnos. Soy [NOMBRE] de [NEGOCIO]. ¿En qué podemos ayudarte hoy?',
      category: 'saludo',
      variables: ['NOMBRE', 'NEGOCIO']
    },
    {
      id: '2',
      name: 'Consulta de Precios',
      content: 'Hola! 😊 Te comento que nuestros precios para [SERVICIO] son: [PRECIO]. ¿Te gustaría agendar una cita o tienes alguna consulta?',
      category: 'informacion',
      variables: ['SERVICIO', 'PRECIO']
    },
    {
      id: '3',
      name: 'Seguimiento de Cliente',
      content: 'Hola [NOMBRE] 👋 ¿Cómo te fue con [SERVICIO]? Nos encantaría saber tu experiencia y si necesitas algo más.',
      category: 'seguimiento',
      variables: ['NOMBRE', 'SERVICIO']
    },
    {
      id: '4',
      name: 'Promoción Especial',
      content: '🎉 ¡Oferta especial! [DESCUENTO] en [SERVICIO] válido hasta [FECHA]. ¡No te lo pierdas! Agenda ya: [ENLACE]',
      category: 'promocion',
      variables: ['DESCUENTO', 'SERVICIO', 'FECHA', 'ENLACE']
    }
  ];

  // Funciones reales
  const useTemplate = (template: WhatsAppTemplate) => {
    let content = template.content;
    
    // Reemplazar variables con datos del negocio
    const businessData = {
      NOMBRE: localStorage.getItem('businessOwner') || 'Tu nombre',
      NEGOCIO: localStorage.getItem('businessName') || 'Tu negocio',
      SERVICIO: 'tu servicio',
      PRECIO: 'consultar',
      DESCUENTO: '20% OFF',
      FECHA: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('es-PE'),
      ENLACE: window.location.origin
    };

    template.variables.forEach(variable => {
      content = content.replace(`[${variable}]`, businessData[variable as keyof typeof businessData] || `[${variable}]`);
    });

    setMessageText(content);
    setSelectedTemplate(template);
  };

  const sendWhatsAppMessage = () => {
    if (!phoneNumber || !messageText) {
      alert('Por favor ingresa un número y mensaje');
      return;
    }

    const cleanPhone = phoneNumber.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Actualizar estadísticas
    setStats(prev => ({
      ...prev,
      total: prev.total + 1,
      today: prev.today + 1
    }));

    // Guardar en localStorage para tracking
    const sentMessages = JSON.parse(localStorage.getItem('whatsapp-sent') || '[]');
    sentMessages.push({
      phone: cleanPhone,
      message: messageText,
      timestamp: new Date().toISOString(),
      template: selectedTemplate?.name || 'Mensaje personalizado'
    });
    localStorage.setItem('whatsapp-sent', JSON.stringify(sentMessages));

    window.open(whatsappUrl, '_blank');
  };

  const copyTemplate = (content: string) => {
    navigator.clipboard.writeText(content);
    alert('Template copiado al portapapeles');
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
                { id: 'web', label: 'WhatsApp Web', icon: QrCode },
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

        {/* WhatsApp Web Tab */}
        {activeTab === 'web' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WhatsApp Web Embebido */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <QrCode className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">WhatsApp Web</h3>
              </div>
              <div className="relative">
                <iframe
                  src="https://web.whatsapp.com"
                  className="w-full h-96 border border-gray-200 rounded-lg"
                  title="WhatsApp Web"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs text-gray-600">
                  Escanea el QR desde tu teléfono
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                1. Abre WhatsApp en tu teléfono<br />
                2. Ve a Configuración → Dispositivos vinculados<br />
                3. Escanea el código QR de arriba
              </p>
            </div>

            {/* Panel de Envío Rápido */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Send className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">Envío Rápido</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de teléfono
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                      +51
                    </span>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="987654321"
                      className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {selectedTemplate && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Template usado:</strong> {selectedTemplate.name}
                    </p>
                  </div>
                )}

                <button
                  onClick={sendWhatsAppMessage}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Enviar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Templates de Mensajes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        template.category === 'saludo' ? 'bg-blue-100 text-blue-800' :
                        template.category === 'seguimiento' ? 'bg-yellow-100 text-yellow-800' :
                        template.category === 'promocion' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {template.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{template.content}</p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => useTemplate(template)}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Usar template
                      </button>
                      <button 
                        onClick={() => copyTemplate(template.content)}
                        className="text-gray-600 hover:text-gray-700 text-sm flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        Copiar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
