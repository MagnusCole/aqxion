'use client';

import React, { useState, useMemo } from 'react';
import { BlogHero } from '@/components/sections/blog/BlogHero';
import { BlogGrid } from '@/components/sections/blog/BlogGrid';
import { BlogNewsletter } from '@/components/sections/blog/BlogNewsletter';
import { useBlogPosts } from '@/hooks/useBlogPosts';

export default function BlogPage() {
  const { posts: allPosts, loading } = useBlogPosts();
  
  // Estado para filtros activos
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Obtener categorías únicas de los posts
  const categories = useMemo(() => {
    const allCategories = allPosts.map(post => post.category);
    return ['todos', ...Array.from(new Set(allCategories))];
  }, [allPosts]);

  // Filtrar posts basado en categoría y búsqueda
  const filteredPosts = useMemo(() => {
    let filtered = allPosts;
    
    // Filtrar por categoría
    if (activeCategory !== 'todos') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [allPosts, activeCategory, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando artículos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      
      {/* Nueva sección de filtros dinámicos */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Barra de búsqueda */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filtros de categoría */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category === 'todos' ? 'Todos los artículos' : category}
                  <span className="ml-2 text-sm opacity-75">
                    ({category === 'todos' 
                      ? allPosts.length 
                      : allPosts.filter(post => post.category === category).length
                    })
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {filteredPosts.length === allPosts.length 
                ? `Mostrando todos los ${filteredPosts.length} artículos`
                : `Mostrando ${filteredPosts.length} de ${allPosts.length} artículos`
              }
              {searchTerm && (
                <span className="ml-2">
                  para &ldquo;<strong>{searchTerm}</strong>&rdquo;
                </span>
              )}
              {activeCategory !== 'todos' && (
                <span className="ml-2">
                  en la categoría <strong>{activeCategory}</strong>
                </span>
              )}
            </p>
            
            {/* Botón para limpiar filtros */}
            {(searchTerm || activeCategory !== 'todos') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('todos');
                }}
                className="mt-3 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </section>
      
      <BlogGrid posts={filteredPosts} />
      <BlogNewsletter />
    </div>
  );
}
