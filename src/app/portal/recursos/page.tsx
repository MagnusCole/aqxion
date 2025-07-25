import React from 'react';

export default function RecursosPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-peru-gold">Recursos</h2>
      <ul className="space-y-4">
        <li className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <span className="font-semibold text-gray-900">Guía: Cómo captar clientes sin publicidad</span>
          <p className="text-gray-600 text-sm mt-1">Estrategias prácticas para atraer clientes sin gastar en anuncios.</p>
        </li>
        <li className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <span className="font-semibold text-gray-900">Plantilla: WhatsApp para ventas</span>
          <p className="text-gray-600 text-sm mt-1">Convierte tu WhatsApp en una máquina de ventas.</p>
        </li>
      </ul>
    </section>
  );
}
