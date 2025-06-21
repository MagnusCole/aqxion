"use client";

import React from 'react';

export const BlogHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium mb-6">
            Conocimiento que funciona
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.2]">
            Blog de Marketing Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mx-auto mb-12 leading-relaxed max-w-3xl font-light">
            Estrategias probadas, casos reales y consejos prácticos para hacer crecer tu negocio local
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
