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
        </div>
      </div>
    </section>
  );
};
