'use client';

import { CheckCircle, Phone, Clock } from 'lucide-react';

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* SUCCESS ICON */}
        <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          🎉 ¡Felicitaciones!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-8">
          Ya Estás En Camino a Tener 50+ Clientes Nuevos
        </h2>

        {/* NEXT STEPS */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-6">📋 Próximos Pasos</h3>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-bold">Nuestro equipo te contactará</h4>
                <p className="text-gray-600">En los próximos 5-10 minutos por WhatsApp</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-bold">Configuración express</h4>
                <p className="text-gray-600">Setup completo en 24-48 horas máximo</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-bold">¡Primeros clientes llegando!</h4>
                <p className="text-gray-600">En 3-7 días verás los primeros resultados</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">💬 ¿Necesitas ayuda inmediata?</h3>
          <button 
            onClick={() => window.open('https://wa.me/51987654321?text=Hola,%20acabo%20de%20confirmar%20mi%20compra%20y%20necesito%20ayuda', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
          >
            <Phone className="w-5 h-5 inline mr-2" />
            Contactar por WhatsApp
          </button>
        </div>

        {/* GUARANTEE */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6">
          <h3 className="font-bold text-emerald-800 mb-3">
            🛡️ Recuerda: Tienes 30 días de garantía total
          </h3>
          <p className="text-sm text-emerald-700">
            Si no ves resultados reales en tu negocio, te devolvemos el 100% de tu dinero.
          </p>
        </div>

        {/* TIMER */}
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>Nuestro equipo te contactará en menos de 10 minutos</span>
        </div>
      </div>
    </div>
  );
}
