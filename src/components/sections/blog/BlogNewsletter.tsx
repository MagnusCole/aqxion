"use client";

import React, { useState } from 'react';

export const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí implementarías la lógica de suscripción
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            No te pierdas nuestros mejores consejos
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Recibe estrategias exclusivas de marketing directo en tu email cada semana. 
            Sin spam, solo contenido que realmente funciona.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email..."
                  required
                  className="flex-1 px-6 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Suscríbete
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                📧 Más de 2,500 dueños de negocios ya reciben nuestros consejos
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-500 text-white p-6 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold">¡Suscripción exitosa!</span>
                </div>
                <p className="text-green-100">
                  Revisa tu email para confirmar tu suscripción
                </p>
              </div>
            </div>
          )}
          
          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">2,500+</div>
              <div className="text-blue-200 text-sm">Suscriptores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-blue-200 text-sm">Tasa de apertura</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-blue-200 text-sm">Valoración</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
