'use client';

import React, { useState, useMemo } from 'react';
import { BlogHero } from '@/components/sections/blog/BlogHero';
import { BlogGrid } from '@/components/sections/blog/BlogGrid';
import { BlogNewsletter } from '@/components/sections/blog/BlogNewsletter';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import { LeadQuiz } from '@/components/composables/data-display/LeadQuiz';

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
      
      {/* Interactive Lead Generation Quiz */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            QUIZ INTERACTIVO
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Qué Stack de Growth Necesita Tu Negocio?
          </h2>
          
          <Text size="lg" className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Responde 5 preguntas simples y descubre la estrategia exacta para multiplicar 
            tus leads y automatizar tu crecimiento.
          </Text>
          
          <LeadQuiz />
        </div>
      </section>
      
      {/* Growth Stack Integration CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--ia-blue)] to-blue-700">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full animate-pulse"></span>
            AUTOMATED GROWTH STACK
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implementa Todo Lo Que Lees Con Nuestro <span className="text-[var(--auto-green)]">Stack Completo</span>
          </h2>
          
          <Text size="lg" className="text-blue-100 mb-8 max-w-3xl mx-auto">
            No más teoría sin resultados. Convierte el conocimiento en leads reales con nuestro 
            sistema integrado de 5 servicios que automatiza todo el proceso de crecimiento.
          </Text>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              { icon: "🎯", name: "Ads Auto", desc: "Tráfico pagado 24/7" },
              { icon: "📧", name: "Outreach", desc: "Ventas directas" },
              { icon: "🤖", name: "IA Systems", desc: "Automatización total" },
              { icon: "📝", name: "Copy Pro", desc: "Mensajes que venden" },
              { icon: "📊", name: "Content", desc: "Autoridad + SEO" }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">{service.icon}</div>
                <div className="text-white text-sm font-semibold">{service.name}</div>
                <div className="text-blue-200 text-xs">{service.desc}</div>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg"
            variant="secondary" 
            className="bg-white text-[var(--ia-blue)] hover:bg-blue-50 px-8 py-4 text-lg font-bold shadow-xl"
          >
            Ver Stack Completo - Demo Gratis →
          </Button>
          
          <Text className="text-blue-200 mt-4 text-sm">
            150+ negocios ya generan 300+ leads/mes con este stack
          </Text>
        </div>
      </section>
      
      <BlogNewsletter />
    </div>
  );
}
