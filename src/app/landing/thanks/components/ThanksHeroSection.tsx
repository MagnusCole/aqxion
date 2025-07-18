import React from 'react';

export const ThanksHeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--equity-gold)]/10 via-white to-[var(--equity-blue)]/10">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--equity-gold)]/20 rounded-full mb-8">
          <svg className="w-12 h-12 text-[var(--equity-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          ¡Application Recibida! �
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Tu empresa está siendo <strong>evaluada para equity partnership</strong><br />
          Respuesta inicial en las próximas <span className="text-[var(--equity-gold)] font-semibold">48-72 horas</span>
        </p>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-[var(--equity-gold)]">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Qué sigue en el proceso:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--equity-gold)] font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Initial Review</h4>
                <p className="text-sm text-gray-600">Evaluamos tu perfil empresarial inicial</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--equity-gold)] font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Initial Call</h4>
                <p className="text-sm text-gray-600">Si hay fit, agendamos llamada estratégica</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--equity-gold)] font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Due Diligence</h4>
                <p className="text-sm text-gray-600">Evaluación profunda y term sheet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Confidentiality Notice */}
        <div className="bg-[var(--equity-blue)]/10 border border-[var(--equity-blue)]/30 rounded-lg p-4 text-center">
          <p className="text-gray-700">
            <strong>� Confidencialidad garantizada:</strong> Todo el proceso está protegido bajo NDA. Solo 5 partnerships por trimestre.
          </p>
        </div>
      </div>
    </section>
  );
};
