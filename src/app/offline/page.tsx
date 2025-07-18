'use client';

// LLM-OPTIMIZED: PWA Offline page - Engaging offline experience with value

/**
 * 📴 AQXION OFFLINE PAGE
 * Provides value even when offline - guides, tips, cached content
 */
export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Offline Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-blue-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" 
            />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          Sin conexión a internet
        </h1>
        
        <p className="text-neutral-600 mb-8">
          No hay problema. Aquí tienes algunos recursos de AQXION disponibles sin conexión.
        </p>

        {/* Offline Features */}
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg text-left">
            <h3 className="font-semibold text-blue-900 mb-2">
              📋 Guía de Marketing IA (Offline)
            </h3>
            <p className="text-sm text-blue-700">
              5 pasos para implementar IA en tu marketing digital
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg text-left">
            <h3 className="font-semibold text-green-900 mb-2">
              🎯 Calculadora ROI
            </h3>
            <p className="text-sm text-green-700">
              Calcula el retorno de inversión de la automatización IA
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg text-left">
            <h3 className="font-semibold text-purple-900 mb-2">
              📊 Checklist de Optimización
            </h3>
            <p className="text-sm text-purple-700">
              Evalúa tu estrategia actual de marketing digital
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            aria-label="Intentar reconectar a internet"
          >
            🔄 Intentar reconectar
          </button>
          
          <button
            onClick={() => history.back()}
            className="w-full bg-neutral-100 text-neutral-700 py-3 px-6 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
            aria-label="Volver a la página anterior"
          >
            ← Volver atrás
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-2">
            ¿Necesitas ayuda urgente?
          </p>
          <div className="space-y-1">
            <p className="text-sm font-medium text-neutral-700">
              📞 WhatsApp: +34 000 000 000
            </p>
            <p className="text-sm font-medium text-neutral-700">
              ✉️ hola@aqxion.com
            </p>
          </div>
        </div>

        {/* PWA Install Prompt */}
        <div className="mt-6 p-3 bg-yellow-50 rounded-lg">
          <p className="text-xs text-yellow-800">
            💡 <strong>Tip:</strong> Instala AQXION como app para mejor acceso offline
          </p>
        </div>
      </div>

      {/* Background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-neutral-50/50"></div>
      </div>
    </div>
  );
}
