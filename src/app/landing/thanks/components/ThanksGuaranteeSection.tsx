import React from 'react';

export const ThanksGuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sin Riesgo: Garantía de Satisfacción Total
          </h2>
          <p className="text-xl text-gray-600">
            Solo ganamos si tú ganas. Así de simple.
          </p>
        </div>

        {/* Guarantee Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* 90 Day Guarantee */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">90 Días de Garantía</h3>
            <p className="text-gray-600">
              Si en 90 días no ves un incremento real en tus clientes, seguimos trabajando sin costo adicional hasta que lo logres.
            </p>
          </div>

          {/* No Contracts */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sin Contratos Largos</h3>
            <p className="text-gray-600">
              No permanencias. No letra pequeña. Solo resultados medibles que puedes ver en tu cuenta bancaria.
            </p>
          </div>

          {/* Transparent Process */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proceso Transparente</h3>
            <p className="text-gray-600">
              Sabrás exactamente qué estamos haciendo, cuánto cuesta y qué resultados esperar. Sin sorpresas.
            </p>
          </div>
        </div>

        {/* Success Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-gray-700 font-medium">de nuestros clientes ven resultados en los primeros 30 días</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3.2x</div>
              <p className="text-gray-700 font-medium">incremento promedio en clientes nuevos después de 60 días</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700 font-medium">industrias locales donde hemos probado que funciona</p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Prefieres implementar la guía por tu cuenta?
            </h3>
            <p className="text-gray-700 mb-6">
              Perfecto. La guía tiene todo lo que necesitas para empezar. Y si después quieres acelerar los resultados, 
              aquí estaremos para ayudarte.
            </p>
            <p className="text-blue-600 font-semibold">
              📧 Cualquier duda sobre la guía, escríbenos a: <a href="mailto:deal@aqxion.com" className="underline">deal@aqxion.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
