'use client';

import { useState } from 'react';
import { Search, BookOpen, Video, FileText, Download, Star, Clock, User, Filter, ChevronRight, Play, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  description: string;
  category: 'marketing' | 'tecnico' | 'finanzas' | 'estrategia';
  type: 'article' | 'video' | 'template' | 'checklist';
  readTime: number;
  difficulty: 'basico' | 'intermedio' | 'avanzado';
  rating: number;
  views: number;
  lastUpdated: string;
  isFavorite: boolean;
  tags: string[];
  content?: string;
}

const knowledgeBase: Article[] = [
  {
    id: '1',
    title: 'Cómo Optimizar tu Google My Business para MYPEs',
    description: 'Guía completa para aparecer en los primeros resultados de búsqueda local y atraer más clientes.',
    category: 'marketing',
    type: 'article',
    readTime: 8,
    difficulty: 'basico',
    rating: 4.8,
    views: 1247,
    lastUpdated: '2025-01-15',
    isFavorite: true,
    tags: ['Google My Business', 'SEO Local', 'Visibilidad']
  },
  {
    id: '2',
    title: 'Setup Inicial de WhatsApp Business API',
    description: 'Tutorial paso a paso para configurar y automatizar tu WhatsApp Business desde cero.',
    category: 'tecnico',
    type: 'video',
    readTime: 15,
    difficulty: 'intermedio',
    rating: 4.9,
    views: 892,
    lastUpdated: '2025-01-18',
    isFavorite: false,
    tags: ['WhatsApp', 'Automatización', 'API']
  },
  {
    id: '3',
    title: 'Calculadora de ROI para Campañas Digitales',
    description: 'Template de Excel para calcular el retorno de inversión de tus campañas de marketing.',
    category: 'finanzas',
    type: 'template',
    readTime: 5,
    difficulty: 'basico',
    rating: 4.6,
    views: 634,
    lastUpdated: '2025-01-10',
    isFavorite: true,
    tags: ['ROI', 'Excel', 'Métricas']
  },
  {
    id: '4',
    title: 'Checklist: Lanzamiento de Sitio Web',
    description: 'Lista de verificación de 30 puntos para asegurar un lanzamiento exitoso de tu sitio web.',
    category: 'tecnico',
    type: 'checklist',
    readTime: 12,
    difficulty: 'intermedio',
    rating: 4.7,
    views: 1156,
    lastUpdated: '2025-01-20',
    isFavorite: false,
    tags: ['Lanzamiento', 'Web', 'Checklist']
  },
  {
    id: '5',
    title: 'Estrategias de Content Marketing para MYPEs',
    description: 'Cómo crear contenido que conecte con tu audiencia y genere leads sin un gran presupuesto.',
    category: 'marketing',
    type: 'article',
    readTime: 10,
    difficulty: 'intermedio',
    rating: 4.5,
    views: 789,
    lastUpdated: '2025-01-12',
    isFavorite: false,
    tags: ['Content Marketing', 'Social Media', 'Leads']
  },
  {
    id: '6',
    title: 'Métricas Clave para Medir el Éxito Digital',
    description: 'Los KPIs más importantes que toda MYPE debe monitorear para crecer digitalmente.',
    category: 'estrategia',
    type: 'video',
    readTime: 18,
    difficulty: 'avanzado',
    rating: 4.9,
    views: 2103,
    lastUpdated: '2025-01-22',
    isFavorite: true,
    tags: ['KPIs', 'Analytics', 'Estrategia']
  }
];

const categories = [
  { id: 'all', name: 'Todos', color: 'bg-gray-100 text-gray-800' },
  { id: 'marketing', name: 'Marketing', color: 'bg-pink-100 text-pink-800' },
  { id: 'tecnico', name: 'Técnico', color: 'bg-blue-100 text-blue-800' },
  { id: 'finanzas', name: 'Finanzas', color: 'bg-green-100 text-green-800' },
  { id: 'estrategia', name: 'Estrategia', color: 'bg-purple-100 text-purple-800' }
];

const typeIcons = {
  article: FileText,
  video: Video,
  template: Download,
  checklist: BookOpen
};

const difficultyColors = {
  basico: 'bg-green-100 text-green-800',
  intermedio: 'bg-yellow-100 text-yellow-800',
  avanzado: 'bg-red-100 text-red-800'
};

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'rating'>('recent');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = knowledgeBase
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views;
        case 'rating':
          return b.rating - a.rating;
        case 'recent':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

  const toggleFavorite = (articleId: string) => {
    // En la versión real, esto haría una llamada a la API
    console.log('Toggle favorite:', articleId);
  };

  const trackView = (article: Article) => {
    setSelectedArticle(article);
    // En la versión real, esto incrementaría las vistas
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Knowledge Base</h1>
        <p className="text-blue-100">
          Recursos, guías y herramientas para maximizar tu crecimiento digital
        </p>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Recursos</p>
              <p className="text-2xl font-bold text-gray-900">{knowledgeBase.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Videos</p>
              <p className="text-2xl font-bold text-gray-900">
                {knowledgeBase.filter(a => a.type === 'video').length}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <Video className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Templates</p>
              <p className="text-2xl font-bold text-gray-900">
                {knowledgeBase.filter(a => a.type === 'template').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Download className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Favoritos</p>
              <p className="text-2xl font-bold text-gray-900">
                {knowledgeBase.filter(a => a.isFavorite).length}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="recent">Más recientes</option>
              <option value="popular">Más populares</option>
              <option value="rating">Mejor valorados</option>
            </select>
          </div>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : category.color
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Recursos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredArticles.map((article, index) => {
          const TypeIcon = typeIcons[article.type];
          
          return (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => trackView(article)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      article.type === 'video' ? 'bg-red-100' :
                      article.type === 'template' ? 'bg-green-100' :
                      article.type === 'checklist' ? 'bg-purple-100' : 'bg-blue-100'
                    }`}>
                      <TypeIcon className={`w-5 h-5 ${
                        article.type === 'video' ? 'text-red-600' :
                        article.type === 'template' ? 'text-green-600' :
                        article.type === 'checklist' ? 'text-purple-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className={`px-2 py-1 text-xs rounded-full ${difficultyColors[article.difficulty]}`}>
                        {article.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(article.id);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Star className={`w-4 h-4 ${
                      article.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-400'
                    }`} />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{article.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {article.type === 'video' && (
                      <div className="flex items-center gap-1 text-red-600">
                        <Play className="w-4 h-4" />
                        <span className="text-xs">Ver</span>
                      </div>
                    )}
                    {article.type === 'template' && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Download className="w-4 h-4" />
                        <span className="text-xs">Descargar</span>
                      </div>
                    )}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal de Artículo */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 pr-4">
                    {selectedArticle.title}
                  </h2>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedArticle.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="mb-4">
                    {selectedArticle.type === 'video' && <Video className="w-12 h-12 text-red-500 mx-auto" />}
                    {selectedArticle.type === 'template' && <Download className="w-12 h-12 text-green-500 mx-auto" />}
                    {selectedArticle.type === 'checklist' && <BookOpen className="w-12 h-12 text-purple-500 mx-auto" />}
                    {selectedArticle.type === 'article' && <FileText className="w-12 h-12 text-blue-500 mx-auto" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Contenido disponible próximamente
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Este recurso estará disponible una vez completemos tu configuración inicial.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Continuar Configuración
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No hay resultados */}
      {filteredArticles.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center shadow border border-gray-100">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron recursos</h3>
          <p className="text-gray-600">
            Intenta con otros términos de búsqueda o selecciona una categoría diferente.
          </p>
        </div>
      )}

      {/* Información de Desarrollo */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📚 Knowledge Base - Demo</h3>
            <p className="text-gray-600 mb-4">
              En la versión completa tendrás acceso a más de 100 recursos especializados para MYPEs.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✅ Guías paso a paso con videos HD</p>
              <p>✅ Templates descargables en Excel/Word</p>
              <p>✅ Webinars exclusivos y casos de éxito</p>
              <p>✅ Chat en vivo con expertos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
