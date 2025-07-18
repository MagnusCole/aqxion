"use client";

import React from 'react';

export const BlogHero: React.FC = () => {
  return (
    // AI OPTIMIZATION: Simplificado fondo y reducido padding para mejor proporción
    <section className="bg-gradient-to-br from-[var(--equity-gold)]/5 to-[var(--equity-blue)]/5 pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          {/* AI OPTIMIZATION: Badge más sutil y directo */}
          <p className="text-sm text-[var(--equity-gold)] font-medium mb-4">
            Growth Equity Insights
          </p>
          {/* AI OPTIMIZATION: Título más directo y jerarquía mejorada */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Equity Partnership <span className="text-[var(--equity-gold)]">Insights</span>
          </h1>
          {/* AI OPTIMIZATION: Subtítulo más específico y actionable */}
          <p className="text-lg text-gray-600 mx-auto max-w-2xl leading-relaxed">
            Case studies, growth strategies y insights from our equity partnerships. 
            Real results from companies we&apos;ve invested in and scaled together.
          </p>
          
          <div className="mt-8 bg-white/50 border border-[var(--color-border)] p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">
              💡 <strong>Portfolio insights:</strong> Aprende de empresas donde tenemos skin-in-the-game real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
