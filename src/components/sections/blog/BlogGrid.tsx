"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    // AI OPTIMIZATION: Fondo blanco más limpio, padding optimizado
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* AI OPTIMIZATION: Featured Posts - Solo el más importante */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículo destacado</h2>
            {featuredPosts.slice(0, 1).map((post) => (
              <article key={post.slug} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-5/12">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-7/12 p-8 md:p-10">
                    {/* AI OPTIMIZATION: Metadata más sutil y organizada */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    {/* AI OPTIMIZATION: CTA más sutil */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Leer artículo completo
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* AI OPTIMIZATION: Mostrar TODOS los artículos para demostrar abundancia de contenido */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Todos los artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI OPTIMIZATION: Combinar featured posts restantes con regulares para mostrar TODO */}
            {[...featuredPosts.slice(1), ...regularPosts].map((post) => (
              <article key={post.slug} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* AI OPTIMIZATION: Badge discreto para posts destacados */}
                  {post.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {/* AI OPTIMIZATION: Metadata simplificada */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* AI OPTIMIZATION: Eliminado botón "Ver más" - ahora se muestran TODOS los artículos */}
      </div>
    </section>
  );
};
