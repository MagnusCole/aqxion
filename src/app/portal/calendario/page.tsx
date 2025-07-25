'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Plus, Download, RefreshCw } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  platform: 'facebook' | 'instagram' | 'linkedin' | 'blog' | 'email';
  status: 'scheduled' | 'published' | 'draft';
  content: string;
  hashtags?: string[];
}

const CalendarioContenido = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  // Simulated data - En producción viene de Google Calendar API
  const mockEvents: CalendarEvent[] = [
    {
      id: '1',
      title: '5 Tips para MYPES en Lima',
      date: '2025-01-27',
      time: '09:00',
      platform: 'facebook',
      status: 'scheduled',
      content: 'Post sobre consejos prácticos para micro empresas en Lima. Incluir casos locales.',
      hashtags: ['#MYPEsLima', '#NegociosLocales', '#Emprendimiento']
    },
    {
      id: '2', 
      title: 'Video: Cómo usar WhatsApp Business',
      date: '2025-01-28',
      time: '15:30',
      platform: 'instagram',
      status: 'draft',
      content: 'Tutorial de 60 segundos sobre configuración de WhatsApp Business',
      hashtags: ['#WhatsAppBusiness', '#Tutorial', '#MYPES']
    },
    {
      id: '3',
      title: 'Case Study: Cliente Success Story',
      date: '2025-01-29',
      time: '11:00',
      platform: 'linkedin',
      status: 'scheduled',
      content: 'Historia de éxito de cliente que aumentó sus ventas 40% en 90 días',
      hashtags: ['#CaseStudy', '#Success', '#DigitalTransformation']
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const getPlatformColor = (platform: string) => {
    const colors = {
      facebook: 'bg-blue-500',
      instagram: 'bg-pink-500', 
      linkedin: 'bg-blue-600',
      blog: 'bg-green-500',
      email: 'bg-purple-500'
    };
    return colors[platform as keyof typeof colors] || 'bg-gray-500';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'scheduled': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'draft': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const syncWithGoogleCalendar = async () => {
    setLoading(true);
    // Aquí conectaríamos con Google Calendar API
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
                <Calendar className="w-8 h-8 text-blue-600" />
                Calendario de Contenido
              </h1>
              <p className="mt-2 text-gray-600">
                Planifica y programa tu contenido para todas las plataformas
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={syncWithGoogleCalendar}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Sincronizar Google Calendar
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Nuevo Evento
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Esta Semana</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Programados</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Publicados</p>
                <p className="text-2xl font-bold text-green-600">24</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Borradores</p>
                <p className="text-2xl font-bold text-yellow-600">4</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-lg font-medium ${
                viewMode === 'week' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Vista Semanal
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-lg font-medium ${
                viewMode === 'month' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Vista Mensual
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Download className="w-4 h-4" />
            Exportar Calendario
          </button>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Próximos Eventos de Contenido
            </h2>
            
            {loading ? (
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="animate-pulse">
                    <div className="h-16 bg-gray-200 rounded-lg"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`w-3 h-3 rounded-full ${getPlatformColor(event.platform)} mt-2`}></div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900">{event.title}</h3>
                            {getStatusIcon(event.status)}
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">{event.content}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </span>
                            <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                              {event.platform}
                            </span>
                          </div>
                          
                          {event.hashtags && (
                            <div className="flex gap-2 mt-2">
                              {event.hashtags.map((tag, index) => (
                                <span key={index} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                          Editar
                        </button>
                        <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                          Publicar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Google Calendar Integration Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📅 Integración con Google Calendar
          </h3>
          <p className="text-blue-800 mb-4">
            Tu calendario de contenido se sincroniza automáticamente con Google Calendar. 
            Puedes crear, editar y programar posts directamente desde tu calendario favorito.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Configurar Sincronización
            </button>
            <button className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50">
              Ver Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarioContenido;
