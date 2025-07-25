'use client';

import { useState, useEffect } from 'react';
import { Book, Search, Plus, Eye, Download, Tag, Clock, User, ChevronRight, FileText, Video, Link, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  type: 'article' | 'video' | 'link' | 'template';
  category: string;
  tags: string[];
  views: number;
  rating: number;
  createdAt: string;
  author: string;
}

export default function KnowledgeBasePage() {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    content: '',
    type: 'article' as const,
    category: '',
    tags: ''
  });

  useEffect(() => {
    // Cargar desde localStorage o datos iniciales
    const savedItems = localStorage.getItem('knowledge-base');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      const initialItems: KnowledgeItem[] = [
        {
          id: '1',
          title: 'Estrategia WhatsApp Business 2025',
          content: `# Guía Completa WhatsApp Business

## Configuración Inicial
1. **Perfil empresarial**: Logo, descripción, horarios
2. **Catálogo**: Máximo 500 productos
3. **Mensajes automáticos**: Bienvenida, ausencia, respuesta rápida

## Templates Aprobados
- Confirmación de citas
- Promociones especiales
- Recordatorios de pago
- Seguimiento post-venta

## Métricas Clave
- Tasa de respuesta: <5 minutos
- Conversión: 15-25%
- Satisfacción: >4.5/5`,
          type: 'article',
          category: 'Marketing',
          tags: ['whatsapp', 'marketing', 'ventas'],
          views: 47,
          rating: 4.8,
          createdAt: new Date().toISOString(),
          author: 'AQXION Team'
        },
        {
          id: '2',
          title: 'ROI en Marketing Digital',
          content: `# Cálculo de ROI en Marketing Digital

## Fórmula Básica
ROI = (Ganancia - Inversión) / Inversión × 100

## Métricas por Canal
- Facebook Ads: ROI mínimo 300%
- Google Ads: ROI mínimo 400%
- WhatsApp: ROI mínimo 500%

## Herramientas
- Facebook Analytics
- Google Analytics 4
- UTM tracking`,
          type: 'article',
          category: 'Finanzas',
          tags: ['roi', 'marketing', 'analytics'],
          views: 32,
          rating: 4.6,
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          author: 'AQXION Team'
        }
      ];
      setItems(initialItems);
      localStorage.setItem('knowledge-base', JSON.stringify(initialItems));
    }
  }, []);

  const addItem = () => {
    if (!newItem.title || !newItem.content) {
      alert('Título y contenido son obligatorios');
      return;
    }

    const item: KnowledgeItem = {
      id: Date.now().toString(),
      title: newItem.title,
      content: newItem.content,
      type: newItem.type,
      category: newItem.category || 'General',
      tags: newItem.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      views: 0,
      rating: 5,
      createdAt: new Date().toISOString(),
      author: 'Usuario'
    };

    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem('knowledge-base', JSON.stringify(updatedItems));

    setNewItem({ title: '', content: '', type: 'article', category: '', tags: '' });
    setShowAddItem(false);
  };

  const incrementViews = (id: string) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, views: item.views + 1 } : item
    );
    setItems(updatedItems);
    localStorage.setItem('knowledge-base', JSON.stringify(updatedItems));
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 Knowledge Base</h1>
            <p className="text-gray-600">Base de conocimiento para tu negocio</p>
          </div>
          <button
            onClick={() => setShowAddItem(!showAddItem)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Agregar Contenido
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en la base de conocimiento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Todas las categorías' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Add Item Form */}
        {showAddItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-6"
          >
            <h3 className="text-xl font-semibold mb-4">Agregar Nuevo Contenido</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Título"
                value={newItem.title}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={newItem.type}
                onChange={(e) => setNewItem({...newItem, type: e.target.value as any})}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="article">Artículo</option>
                <option value="video">Video</option>
                <option value="link">Enlace</option>
                <option value="template">Template</option>
              </select>
              <input
                type="text"
                placeholder="Categoría"
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Tags (separados por coma)"
                value={newItem.tags}
                onChange={(e) => setNewItem({...newItem, tags: e.target.value})}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Contenido (puedes usar Markdown)"
              value={newItem.content}
              onChange={(e) => setNewItem({...newItem, content: e.target.value})}
              rows={8}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex gap-4">
              <button
                onClick={addItem}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Guardar
              </button>
              <button
                onClick={() => setShowAddItem(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => incrementViews(item.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {item.type === 'article' && <FileText className="w-5 h-5 text-blue-600" />}
                  {item.type === 'video' && <Video className="w-5 h-5 text-red-600" />}
                  {item.type === 'link' && <Link className="w-5 h-5 text-green-600" />}
                  {item.type === 'template' && <Book className="w-5 h-5 text-purple-600" />}
                  <span className="text-sm font-medium text-gray-600 capitalize">{item.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.content.substring(0, 150)}...
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {item.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.author}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda o agrega nuevo contenido</p>
          </div>
        )}
      </div>
    </div>
  );
}
