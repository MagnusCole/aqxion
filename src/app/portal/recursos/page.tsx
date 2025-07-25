import React from 'react';
import { Download, Play, FileText, BookOpen, Zap, Star, Clock, Users } from 'lucide-react';

export default function RecursosPage() {
  const recursos = [
    {
      id: 1,
      title: 'Guía Completa: Facebook Ads para MYPEs',
      type: 'PDF',
      description: 'Estrategias paso a paso para crear campañas rentables desde S/ 50.',
      downloads: 1247,
      rating: 4.9,
      icon: FileText,
      color: 'blue',
      isNew: true
    },
    {
      id: 2,
      title: 'Templates de WhatsApp Business',
      type: 'Plantillas',
      description: '25+ mensajes prediseñados para ventas, soporte y seguimiento.',
      downloads: 892,
      rating: 4.8,
      icon: Zap,
      color: 'green',
      isNew: false
    },
    {
      id: 3,
      title: 'Masterclass: Copywriting que Vende',
      type: 'Video',
      description: 'Aprende a escribir textos que convierten visitantes en clientes.',
      downloads: 654,
      rating: 4.7,
      icon: Play,
      color: 'purple',
      isNew: true
    },
    {
      id: 4,
      title: 'Calculator ROI de Marketing',
      type: 'Herramienta',
      description: 'Calcula el retorno de inversión de tus campañas publicitarias.',
      downloads: 543,
      rating: 4.6,
      icon: BookOpen,
      color: 'yellow',
      isNew: false
    }
  ];

  const categorias = [
    { name: 'Marketing Digital', count: 12, color: 'blue' },
    { name: 'Ventas', count: 8, color: 'green' },
    { name: 'Redes Sociales', count: 15, color: 'purple' },
    { name: 'Analytics', count: 6, color: 'yellow' }
  ];

  const ResourceCard = ({ recurso }: { recurso: any }) => {
    const colorClasses: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    };

    return (
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100 hover:shadow-lg transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[recurso.color]}`}>
            <recurso.icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            {recurso.isNew && (
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                Nuevo
              </span>
            )}
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              {recurso.type}
            </span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {recurso.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {recurso.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              {recurso.downloads.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              {recurso.rating}
            </div>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Descargar Recurso
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Biblioteca de Recursos 📚</h1>
        <p className="text-green-100">
          Accede a <span className="font-semibold text-white">40+ recursos</span> diseñados para hacer crecer tu MYPE.
        </p>
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categorias.map((categoria) => {
          const colorClasses: { [key: string]: string } = {
            blue: 'bg-blue-50 text-blue-700 border-blue-200',
            green: 'bg-green-50 text-green-700 border-green-200',
            purple: 'bg-purple-50 text-purple-700 border-purple-200',
            yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200'
          };
          
          return (
            <button
              key={categoria.name}
              className={`p-4 rounded-xl border text-left hover:shadow-md transition-all ${colorClasses[categoria.color]}`}
            >
              <div className="font-semibold text-sm">{categoria.name}</div>
              <div className="text-xs opacity-70">{categoria.count} recursos</div>
            </button>
          );
        })}
      </div>

      {/* Búsqueda y filtros */}
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar recursos..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos los tipos</option>
              <option>PDFs</option>
              <option>Videos</option>
              <option>Plantillas</option>
              <option>Herramientas</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Más populares</option>
              <option>Más nuevos</option>
              <option>Mejor calificados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recursos destacados */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recursos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recursos.map((recurso) => (
            <ResourceCard key={recurso.id} recurso={recurso} />
          ))}
        </div>
      </div>

      {/* Bonus exclusivos */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          Bonus Exclusivos para Miembros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h3 className="font-medium text-gray-900 mb-2">Consultoría 1:1</h3>
            <p className="text-sm text-gray-600 mb-3">Sesión personalizada de 30 min con nuestro equipo.</p>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
              Agendar →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h3 className="font-medium text-gray-900 mb-2">Grupo VIP WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-3">Acceso directo a tips y networking exclusivo.</p>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
              Unirme →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h3 className="font-medium text-gray-900 mb-2">Plantillas Premium</h3>
            <p className="text-sm text-gray-600 mb-3">Diseños profesionales para tu marca.</p>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
              Descargar →
            </button>
          </div>
        </div>
      </div>

      {/* Estadísticas de progreso */}
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tu Progreso de Aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Recursos completados</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">8h</div>
            <div className="text-sm text-gray-600">Tiempo invertido</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600">Implementaciones exitosas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
