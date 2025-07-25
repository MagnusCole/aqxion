'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Plus, Download, RefreshCw, Hash, Image, Video } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  platform: 'facebook' | 'instagram' | 'linkedin' | 'blog' | 'email';
  status: 'scheduled' | 'published' | 'draft';
  content: string;
  hashtags?: string[];
  imageUrl?: string;
  type: 'post' | 'story' | 'video' | 'carousel';
}

export default function CalendarioPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);

  // Datos demo realistas para MYPE
  const mockEvents: CalendarEvent[] = [
    {
      id: '1',
      title: '5 Tips para MYPES en Lima',
      date: '2025-01-27',
      time: '09:00',
      platform: 'facebook',
      status: 'scheduled',
      content: 'Post sobre consejos prácticos para micro empresas en Lima. Incluir casos locales y estadísticas.',
      hashtags: ['#MYPEsLima', '#NegociosLocales', '#Emprendimiento', '#Lima'],
      type: 'post'
    },
    {
      id: '2', 
      title: 'Video: Cómo usar WhatsApp Business',
      date: '2025-01-28',
      time: '15:30',
      platform: 'instagram',
      status: 'draft',
      content: 'Tutorial de 60 segundos sobre configuración de WhatsApp Business para restaurantes',
      hashtags: ['#WhatsAppBusiness', '#Tutorial', '#MYPES', '#Restaurantes'],
      type: 'video'
    },
    {
      id: '3',
      title: 'Case Study: Restaurante Sabor Limeño',
      date: '2025-01-29',
      time: '11:00',
      platform: 'linkedin',
      status: 'scheduled',
      content: 'Historia de éxito: cómo el Restaurante Sabor Limeño aumentó sus ventas 40% en 90 días con presencia digital',
      hashtags: ['#CaseStudy', '#Success', '#DigitalTransformation', '#RestaurantMarketing'],
      type: 'post'
    },
    {
      id: '4',
      title: 'Infografía: ROI Marketing Digital',
      date: '2025-01-30',
      time: '14:00',
      platform: 'instagram',
      status: 'scheduled',
      content: 'Infografía mostrando retorno de inversión promedio para MYPEs que invierten en marketing digital',
      hashtags: ['#ROI', '#MarketingDigital', '#Infografia', '#MYPEs'],
      type: 'carousel'
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setEvents(mockEvents);
    }, 500);
  }, []);

  const getPlatformColor = (platform: string) => {
    const colors = {
      facebook: 'bg-blue-500 text-white',
      instagram: 'bg-pink-500 text-white',
      linkedin: 'bg-blue-600 text-white',
      blog: 'bg-green-500 text-white',
      email: 'bg-purple-500 text-white'
    };
    return colors[platform as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'scheduled': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'draft': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'carousel': return <Image className="w-4 h-4" />;
      default: return <Hash className="w-4 h-4" />;
    }
  };

  const getPlatformStats = () => {
    const stats = events.reduce((acc, event) => {
      acc[event.platform] = (acc[event.platform] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return stats;
  };

  const getUpcomingEvents = () => {
    return events
      .filter(event => new Date(event.date) >= new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  };

  const syncWithGoogleCalendar = async () => {
    // Aquí conectaríamos con Google Calendar API
    console.log('Sincronizando con Google Calendar...');
  };

  const platformStats = getPlatformStats();
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="min-h-screen bg-gray-50">
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
                Planifica y programa tu contenido para todas las plataformas sociales
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={syncWithGoogleCalendar}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <RefreshCw className="w-4 h-4" />
                Sincronizar Google Calendar
              </button>
              
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Nuevo Contenido
              </button>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Contenidos</p>
                <p className="text-2xl font-bold text-gray-900">{events.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Programados</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.filter(e => e.status === 'scheduled').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Publicados</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.filter(e => e.status === 'published').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Borradores</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.filter(e => e.status === 'draft').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar Area */}
          <div className="lg:col-span-2">
            {/* View Toggle */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Vista de Calendario</h2>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('week')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'week' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Semana
                  </button>
                  <button
                    onClick={() => setViewMode('month')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'month' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Mes
                  </button>
                </div>
              </div>

              {/* Calendar Grid - Simplified */}
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPlatformColor(event.platform)}`}>
                            {event.platform}
                          </span>
                          {getStatusIcon(event.status)}
                          {getTypeIcon(event.type)}
                        </div>
                        
                        <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{event.content}</p>
                        
                        {event.hashtags && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {event.hashtags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                            {event.hashtags.length > 3 && (
                              <span className="text-xs text-gray-500">+{event.hashtags.length - 3} más</span>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right text-sm text-gray-500">
                        <div>{new Date(event.date).toLocaleDateString()}</div>
                        <div>{event.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Próximos eventos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Contenidos</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${getPlatformColor(event.platform).replace('text-white', '')}`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.date} a las {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Distribución por plataforma */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución por Plataforma</h3>
              <div className="space-y-3">
                {Object.entries(platformStats).map(([platform, count]) => (
                  <div key={platform} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getPlatformColor(platform).replace('text-white', '')}`}></div>
                      <span className="text-sm text-gray-700 capitalize">{platform}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Templates rápidos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Templates Rápidos</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                  📸 Post con imagen producto
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                  💬 Testimonio cliente
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                  📈 Tip de negocio
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                  🎉 Promoción especial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
