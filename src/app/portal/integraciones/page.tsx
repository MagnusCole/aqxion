'use client';

import { useState } from 'react';
import { Settings, CheckCircle, AlertCircle, Clock, ExternalLink, Zap, Shield, Globe, Smartphone, CreditCard, Mail, BarChart3, MessageSquare, Calendar, Users, Bot, Puzzle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Integration {
  id: string;
  name: string;
  description: string;
  category: 'payment' | 'marketing' | 'analytics' | 'communication' | 'productivity' | 'ai';
  status: 'connected' | 'available' | 'premium' | 'coming_soon';
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  setupTime: number;
  popularity: number;
  lastSync?: string;
  dataPoints?: number;
}

const integrations: Integration[] = [
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Análisis detallado de tráfico web y comportamiento de usuarios',
    category: 'analytics',
    status: 'connected',
    icon: BarChart3,
    color: 'bg-orange-500',
    features: ['Seguimiento de conversiones', 'Análisis de audiencia', 'Reportes automáticos'],
    setupTime: 15,
    popularity: 95,
    lastSync: '2025-01-20T10:30:00Z',
    dataPoints: 1547
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    description: 'Automatización de mensajes y gestión de conversaciones',
    category: 'communication',
    status: 'connected',
    icon: MessageSquare,
    color: 'bg-green-500',
    features: ['Respuestas automáticas', 'Broadcast lists', 'Métricas de mensajes'],
    setupTime: 10,
    popularity: 88,
    lastSync: '2025-01-20T15:45:00Z',
    dataPoints: 234
  },
  {
    id: 'google-my-business',
    name: 'Google My Business',
    description: 'Gestión de tu presencia en Google y Maps',
    category: 'marketing',
    status: 'connected',
    icon: Globe,
    color: 'bg-blue-500',
    features: ['Gestión de reseñas', 'Posts automáticos', 'Insights de búsqueda'],
    setupTime: 20,
    popularity: 92,
    lastSync: '2025-01-20T14:20:00Z',
    dataPoints: 89
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Procesamiento de pagos online seguro y confiable',
    category: 'payment',
    status: 'available',
    icon: CreditCard,
    color: 'bg-purple-500',
    features: ['Pagos con tarjeta', 'Suscripciones', 'Reportes financieros'],
    setupTime: 25,
    popularity: 87
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Email marketing y automatización de campañas',
    category: 'marketing',
    status: 'available',
    icon: Mail,
    color: 'bg-yellow-500',
    features: ['Campañas de email', 'Automatización', 'Segmentación'],
    setupTime: 30,
    popularity: 78
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Automatización de tareas entre diferentes aplicaciones',
    category: 'productivity',
    status: 'premium',
    icon: Zap,
    color: 'bg-orange-600',
    features: ['5000+ integraciones', 'Flujos automáticos', 'Triggers personalizados'],
    setupTime: 45,
    popularity: 84
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    description: 'Sincronización de eventos y programación de contenido',
    category: 'productivity',
    status: 'available',
    icon: Calendar,
    color: 'bg-blue-600',
    features: ['Sync de eventos', 'Recordatorios', 'Calendarios compartidos'],
    setupTime: 15,
    popularity: 91
  },
  {
    id: 'hubspot',
    name: 'HubSpot CRM',
    description: 'CRM completo para gestión de clientes y leads',
    category: 'marketing',
    status: 'premium',
    icon: Users,
    color: 'bg-red-500',
    features: ['Gestión de leads', 'Pipeline de ventas', 'Reportes avanzados'],
    setupTime: 60,
    popularity: 82
  },
  {
    id: 'openai',
    name: 'OpenAI GPT',
    description: 'Inteligencia artificial para contenido y automatización',
    category: 'ai',
    status: 'coming_soon',
    icon: Bot,
    color: 'bg-indigo-500',
    features: ['Generación de contenido', 'Chatbots inteligentes', 'Análisis de texto'],
    setupTime: 35,
    popularity: 89
  }
];

const categories = [
  { id: 'all', name: 'Todas', icon: Puzzle, count: integrations.length },
  { id: 'payment', name: 'Pagos', icon: CreditCard, count: integrations.filter(i => i.category === 'payment').length },
  { id: 'marketing', name: 'Marketing', icon: BarChart3, count: integrations.filter(i => i.category === 'marketing').length },
  { id: 'analytics', name: 'Analytics', icon: BarChart3, count: integrations.filter(i => i.category === 'analytics').length },
  { id: 'communication', name: 'Comunicación', icon: MessageSquare, count: integrations.filter(i => i.category === 'communication').length },
  { id: 'productivity', name: 'Productividad', icon: Calendar, count: integrations.filter(i => i.category === 'productivity').length },
  { id: 'ai', name: 'IA', icon: Bot, count: integrations.filter(i => i.category === 'ai').length }
];

const statusConfig = {
  connected: {
    label: 'Conectado',
    color: 'bg-green-100 text-green-800',
    icon: CheckCircle
  },
  available: {
    label: 'Disponible',
    color: 'bg-blue-100 text-blue-800',
    icon: Clock
  },
  premium: {
    label: 'Premium',
    color: 'bg-yellow-100 text-yellow-800',
    icon: Shield
  },
  coming_soon: {
    label: 'Próximamente',
    color: 'bg-gray-100 text-gray-800',
    icon: Clock
  }
};

export default function IntegracionesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const availableCount = integrations.filter(i => i.status === 'available').length;
  const totalDataPoints = integrations
    .filter(i => i.status === 'connected' && i.dataPoints)
    .reduce((sum, i) => sum + (i.dataPoints || 0), 0);

  const handleConnect = (integration: Integration) => {
    if (integration.status === 'connected') {
      // Mostrar configuración
      console.log('Configurar:', integration.name);
    } else if (integration.status === 'available') {
      // Proceso de conexión
      console.log('Conectar:', integration.name);
    } else if (integration.status === 'premium') {
      // Upgrade to premium
      console.log('Upgrade required for:', integration.name);
    } else {
      // Coming soon
      console.log('Coming soon:', integration.name);
    }
  };

  const getLastSyncText = (lastSync?: string) => {
    if (!lastSync) return null;
    const date = new Date(lastSync);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Sincronizado hace menos de 1 hora';
    if (diffHours === 1) return 'Sincronizado hace 1 hora';
    return `Sincronizado hace ${diffHours} horas`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Integraciones</h1>
        <p className="text-gray-100">
          Conecta tus herramientas favoritas para maximizar tu productividad
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Conectadas</p>
              <p className="text-2xl font-bold text-gray-900">{connectedCount}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Disponibles</p>
              <p className="text-2xl font-bold text-gray-900">{availableCount}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Puzzle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Datos Sincronizados</p>
              <p className="text-2xl font-bold text-gray-900">{totalDataPoints.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Automatizaciones</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Búsqueda y Filtros */}
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar integraciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name} ({category.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Integraciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration, index) => {
          const Icon = integration.icon;
          const StatusIcon = statusConfig[integration.status].icon;
          
          return (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${integration.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${statusConfig[integration.status].color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {statusConfig[integration.status].label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {integration.popularity}% popular
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{integration.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {integration.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connection Info */}
                {integration.status === 'connected' && (
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-700">
                        {integration.dataPoints?.toLocaleString()} datos sincronizados
                      </span>
                    </div>
                    {integration.lastSync && (
                      <p className="text-xs text-green-600 mt-1">
                        {getLastSyncText(integration.lastSync)}
                      </p>
                    )}
                  </div>
                )}

                {/* Setup Time */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Tiempo de configuración:</span>
                  <span>~{integration.setupTime} min</span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleConnect(integration)}
                  disabled={integration.status === 'coming_soon'}
                  className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    integration.status === 'connected'
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : integration.status === 'available'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : integration.status === 'premium'
                      ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  } flex items-center justify-center gap-2`}
                >
                  {integration.status === 'connected' && (
                    <>
                      <Settings className="w-4 h-4" />
                      Configurar
                    </>
                  )}
                  {integration.status === 'available' && (
                    <>
                      <Zap className="w-4 h-4" />
                      Conectar
                    </>
                  )}
                  {integration.status === 'premium' && (
                    <>
                      <Shield className="w-4 h-4" />
                      Upgrade Required
                    </>
                  )}
                  {integration.status === 'coming_soon' && (
                    <>
                      <Clock className="w-4 h-4" />
                      Próximamente
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Integraciones Personalizadas */}
      <div className="bg-white rounded-xl shadow border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">¿Necesitas una integración específica?</h2>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <ExternalLink className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-2">Integraciones Personalizadas</h3>
              <p className="text-gray-600 mb-4">
                Si necesitas conectar una herramienta específica que no está en nuestro catálogo, podemos desarrollar una integración personalizada para ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail className="w-4 h-4" />
                  Solicitar Integración
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Ver Documentación API
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información de Desarrollo */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Puzzle className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🔌 Centro de Integraciones - Demo</h3>
            <p className="text-gray-600 mb-4">
              En la versión completa, estas integraciones funcionarán con autenticación OAuth real y sincronización automática.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✅ Configuración guiada paso a paso</p>
              <p>✅ Sincronización en tiempo real</p>
              <p>✅ Webhooks y automatizaciones avanzadas</p>
              <p>✅ Monitoreo de salud de integraciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
