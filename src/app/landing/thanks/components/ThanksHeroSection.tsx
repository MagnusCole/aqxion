import React from 'react';

export const ThanksHeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          ¡Tu Guía Está en Camino! 📚
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Revisa tu <strong>email en los próximos 5 minutos</strong><br />
          y descarga tu guía &ldquo;Cómo Usar Meta Ads para Más Clientes&rdquo;
        </p>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📧 Qué sigue ahora:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Revisa tu email</h4>
                <p className="text-sm text-gray-600">La guía llegará en los próximos minutos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Descarga el PDF</h4>
                <p className="text-sm text-gray-600">23 páginas de estrategias probadas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Implementa ya</h4>
                <p className="text-sm text-gray-600">Empieza con el plan paso a paso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Check Spam Folder */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <p className="text-yellow-800">
            <strong>💡 Tip:</strong> Si no ves el email, revisa tu carpeta de spam o correo no deseado
          </p>
        </div>
      </div>
    </section>
  );
};
