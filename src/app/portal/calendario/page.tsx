'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Plus, Download, RefreshCw, Hash, Image, Video, MessageCircle, Users, Globe, Star } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'contenido' | 'comunidad'>('contenido');

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

  // Eventos de la Comunidad AQXION
  const communityEvents = [
    {
      id: 'c1',
      title: 'Webinar: SEO Local para MYPEs',
      description: 'Aprende las mejores prácticas de SEO local para hacer crecer tu negocio',
      date: '2025-01-25',
      time: '19:00',
      type: 'webinar',
      instructor: 'Equipo AQXION',
      attendees: 45,
      duration: '60 min',
      platform: 'Zoom',
      status: 'upcoming'
    },
    {
      id: 'c2',
      title: 'Sesión Q&A: WhatsApp Business',
      description: 'Sesión de preguntas y respuestas sobre automatización de WhatsApp',
      date: '2025-01-28',
      time: '20:00',
      type: 'qa_session',
      instructor: 'Especialista en Automatización',
      attendees: 32,
      duration: '45 min',
      platform: 'Google Meet',
      status: 'upcoming'
    },
    {
      id: 'c3',
      title: 'Workshop: Métricas que Importan',
      description: 'Taller práctico sobre KPIs esenciales para MYPEs digitales',
      date: '2025-02-01',
      time: '18:30',
      type: 'workshop',
      instructor: 'Analista de Datos Senior',
      attendees: 28,
      duration: '90 min',
      platform: 'Zoom',
      status: 'upcoming'
    },
    {
      id: 'c4',
      title: 'Networking Virtual MYPEs',
      description: 'Espacio de networking para conectar con otros emprendedores',
      date: '2025-02-05',
      time: '19:30',
      type: 'networking',
      instructor: 'Community Manager',
      attendees: 67,
      duration: '75 min',
      platform: 'Plataforma Virtual',
      status: 'upcoming'
    },
    {
      id: 'c5',
      title: 'Masterclass: Content Marketing 2025',
      description: 'Estrategias avanzadas de marketing de contenidos para el nuevo año',
      date: '2025-02-08',
      time: '19:00',
      type: 'masterclass',
      instructor: 'Director de Marketing',
      attendees: 89,
      duration: '120 min',
      platform: 'Zoom',
      status: 'featured'
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

  // Funciones para eventos de comunidad
  const getCommunityEventTypeColor = (type: string) => {
    const colors = {
      webinar: 'bg-purple-500 text-white',
      qa_session: 'bg-green-500 text-white',
      workshop: 'bg-blue-500 text-white',
      networking: 'bg-orange-500 text-white',
      masterclass: 'bg-red-500 text-white'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  const getCommunityEventTypeIcon = (type: string) => {
    switch (type) {
      case 'webinar': return <Video className="w-4 h-4" />;
      case 'qa_session': return <MessageCircle className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'networking': return <Globe className="w-4 h-4" />;
      case 'masterclass': return <Star className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getUpcomingCommunityEvents = () => {
    return communityEvents
      .filter(event => new Date(event.date) >= new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  };

  const platformStats = getPlatformStats();
  const upcomingEvents = getUpcomingEvents();
  const upcomingCommunityEvents = getUpcomingCommunityEvents();

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

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1">
            <div className="flex">
              <button
                onClick={() => setActiveTab('contenido')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'contenido'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Calendario de Contenido
              </button>
              <button
                onClick={() => setActiveTab('comunidad')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'comunidad'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Users className="w-4 h-4" />
                Eventos de Comunidad
              </button>
            </div>
          </div>
        </div>

        {/* Contenido basado en el tab activo */}
        {activeTab === 'contenido' && (
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
        )}

        {/* Contenido de Eventos de Comunidad */}
        {activeTab === 'comunidad' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Eventos Próximos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Próximos Eventos de Comunidad</h2>
              
              <div className="space-y-4">
                {upcomingCommunityEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${getCommunityEventTypeColor(event.type)}`}>
                          {getCommunityEventTypeIcon(event.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'featured' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {event.status === 'featured' ? 'Destacado' : 'Próximo'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('es-ES', { 
                          day: 'numeric', 
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.attendees} inscritos
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        {event.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Instructor:</span> {event.instructor}
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                          Ver Detalles
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                          Unirse al Evento
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Estadísticas de Comunidad */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Estadísticas de Comunidad</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Eventos</span>
                  <span className="font-semibold text-gray-900">{communityEvents.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Inscritos Totales</span>
                  <span className="font-semibold text-gray-900">
                    {communityEvents.reduce((acc, event) => acc + event.attendees, 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Próximos</span>
                  <span className="font-semibold text-green-600">{upcomingCommunityEvents.length}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Tipos de Eventos</h3>
              
              <div className="space-y-3">
                {Object.entries(
                  communityEvents.reduce((acc, event) => {
                    acc[event.type] = (acc[event.type] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)
                ).map(([type, count]) => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-1 rounded ${getCommunityEventTypeColor(type)}`}>
                        {getCommunityEventTypeIcon(type)}
                      </div>
                      <span className="text-sm text-gray-700 capitalize">
                        {type.replace('_', ' ')}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
              
              <div className="space-y-2">
                <button className="w-full text-left p-3 border border-blue-200 rounded-lg hover:bg-blue-50 text-sm text-blue-700 font-medium">
                  📅 Solicitar Evento Personalizado
                </button>
                <button className="w-full text-left p-3 border border-green-200 rounded-lg hover:bg-green-50 text-sm text-green-700 font-medium">
                  📧 Notificarme Nuevos Eventos
                </button>
                <button className="w-full text-left p-3 border border-purple-200 rounded-lg hover:bg-purple-50 text-sm text-purple-700 font-medium">
                  👥 Invitar a un Colega
                </button>
                <button className="w-full text-left p-3 border border-orange-200 rounded-lg hover:bg-orange-50 text-sm text-orange-700 font-medium">
                  📹 Ver Grabaciones Anteriores
                </button>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
