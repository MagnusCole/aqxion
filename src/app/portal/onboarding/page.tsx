import React from 'react';

export default function OnboardingPage() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-peru-gold">Onboarding</h2>
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="text-gray-900 font-semibold mb-2">¡Bienvenido al portal MYPE Boost!</div>
        <p className="text-gray-600 mb-4">Completa los siguientes pasos para personalizar tu experiencia y acceder a todos los recursos.</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Completa tu perfil de negocio</li>
          <li>Conecta tu WhatsApp Business</li>
          <li>Activa tu panel de métricas</li>
        </ol>
      </div>
    </section>
  );
}
