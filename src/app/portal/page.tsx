import React from 'react';
import Link from 'next/link';

export default function PortalHome() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-peru-red">Portal MYPE Boost</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/portal/dashboard" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 hover:bg-peru-red/5 transition">
          <span className="font-semibold text-lg text-gray-900">Dashboard</span>
          <p className="text-gray-600 text-sm mt-2">Tus métricas y progreso en tiempo real.</p>
        </Link>
        <Link href="/portal/recursos" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 hover:bg-peru-gold/5 transition">
          <span className="font-semibold text-lg text-gray-900">Recursos</span>
          <p className="text-gray-600 text-sm mt-2">Guías, plantillas y herramientas para crecer.</p>
        </Link>
        <Link href="/portal/resultados" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 hover:bg-peru-green/5 transition">
          <span className="font-semibold text-lg text-gray-900">Resultados</span>
          <p className="text-gray-600 text-sm mt-2">Revisa tus logros y próximos pasos.</p>
        </Link>
        <Link href="/portal/soporte" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 hover:bg-peru-red/10 transition">
          <span className="font-semibold text-lg text-gray-900">Soporte</span>
          <p className="text-gray-600 text-sm mt-2">Solicita ayuda personalizada.</p>
        </Link>
      </div>
    </main>
  );
}
