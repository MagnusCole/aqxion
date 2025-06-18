"use client";

import React from 'react';

export const MobileStickyCallToAction: React.FC = () => {
  const handleScrollToForm = () => {
    document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('landing-form-name')?.focus();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-blue-600 p-4 shadow-lg">
      <button
        onClick={handleScrollToForm}
        className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-200"
      >
        🚀 Quiero Más Clientes
      </button>
    </div>
  );
};
