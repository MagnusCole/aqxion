import React from 'react';

export default function DashboardPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-peru-red">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-3xl font-bold text-peru-green mb-2">+32%</div>
          <div className="text-gray-700">Crecimiento mensual</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-3xl font-bold text-peru-gold mb-2">24</div>
          <div className="text-gray-700">Clientes nuevos</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-3xl font-bold text-peru-red mb-2">98%</div>
          <div className="text-gray-700">Satisfacción</div>
        </div>
      </div>
    </section>
  );
}
