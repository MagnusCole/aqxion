import React from 'react';

export default function ResultadosPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-peru-green">Resultados</h2>
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="text-lg font-semibold text-gray-900 mb-2">¡Felicidades! Has alcanzado el 80% de tu meta mensual.</div>
        <div className="text-gray-600">Sigue así para desbloquear nuevas herramientas y recursos.</div>
      </div>
    </section>
  );
}
