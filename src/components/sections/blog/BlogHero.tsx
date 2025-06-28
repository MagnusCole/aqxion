"use client";

import React from 'react';

export const BlogHero: React.FC = () => {
  return (
    // AI OPTIMIZATION: Simplificado fondo y reducido padding para mejor proporción
    <section className="bg-white pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          {/* AI OPTIMIZATION: Badge más sutil y directo */}
          <p className="text-sm text-blue-600 font-medium mb-4">
            Estrategias que funcionan
          </p>
          {/* AI OPTIMIZATION: Título más directo y jerarquía mejorada */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Marketing Digital para Negocios
          </h1>
          {/* AI OPTIMIZATION: Subtítulo más específico y actionable */}
          <p className="text-lg text-gray-600 mx-auto max-w-2xl leading-relaxed">
            Casos reales, estrategias probadas y consejos prácticos para multiplicar tus ventas
          </p>
        </div>
      </div>
    </section>
  );
};
