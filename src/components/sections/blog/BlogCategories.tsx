"use client";

import React, { useState } from 'react';

interface BlogCategoriesProps {
  categories: string[];
}

export const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Agregar "Todos" al inicio y calcular counts (mock data por ahora)
  const categoriesWithCounts = [
    { id: 'all', name: 'Todos', count: 24 },
    ...categories.map(cat => ({
      id: cat.toLowerCase().replace(/\s+/g, '-'),
      name: cat,
      count: Math.floor(Math.random() * 10) + 1 // Mock count
    }))
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-4">
          {categoriesWithCounts.map((category) => (
            <button
              key={category.id}
              aria-label={`Filtrar artículos por categoría: ${category.name}`}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
