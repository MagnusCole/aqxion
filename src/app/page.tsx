'use client';

import { useState } from 'react';
import { Phone, CheckCircle, Star, ArrowRight, Timer } from 'lucide-react';

export default function LandingKiller() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'landing_cta'
      });
    }
    
    window.open('https://wa.me/51987654321?text=Quiero%20más%20clientes%20para%20mi%20MYPE%20-%20Paquete%20S/.1500', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* CTA FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-bounce"
        >
          <Phone className="w-6 h-6 inline mr-2" />
          ¡EMPEZAR YA!
        </button>
      </div>
      {/* HERO KILLER */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* URGENCIA */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6 animate-pulse">
            <Timer className="w-4 h-4" />
            <span className="font-semibold">ÚLTIMAS 48 HORAS - PRECIO ESPECIAL</span>
          </div>

          {/* HEADLINE KILLER */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-emerald-600">50+ Clientes Nuevos</span><br />
            En Los Próximos 30 Días
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Sistema COMPLETO de presencia digital para MYPEs peruanas. 
            <span className="font-bold text-emerald-600"> Sin mensualidades. Un solo pago de S/.1,500.</span>
          </p>

          {/* PRECIO KILLER */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 max-w-2xl mx-auto border-4 border-emerald-500">
            <div className="text-center">
              <div className="text-gray-500 text-lg line-through mb-2">S/.15,000 (precio agencias)</div>
              <div className="text-6xl font-bold text-emerald-600 mb-2">S/.1,500</div>
              <div className="text-gray-600 text-lg mb-6">Pago único • Sin mensualidades • Garantizado</div>
              
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-6 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6 inline mr-3" />
                EMPEZAR AHORA - WhatsApp
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                ✅ Respuesta en menos de 5 minutos<br />
                ✅ Setup completo en 24-48 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Todo Lo Que Necesitas Para <span className="text-emerald-600">Multiplicar Tus Ventas</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Website Profesional",
                description: "Página web optimizada que convierte visitantes en clientes. Responsive, rápida, con SEO incluido."
              },
              {
                icon: "📱",
                title: "WhatsApp Business Pro",
                description: "Automatización completa de WhatsApp. Respuestas automáticas, catálogo digital, botones de acción."
              },
              {
                icon: "🔍",
                title: "Google Business Optimizado",
                description: "Perfil completo en Google Maps. Aparecer primero en búsquedas locales de tu ciudad."
              },
              {
                icon: "📊",
                title: "Dashboard Simple",
                description: "Panel básico para ver leads, mensajes y estadísticas. Sin complicaciones."
              },
              {
                icon: "🎯",
                title: "Publicidad Básica Setup",
                description: "Configuración inicial de Google Ads y Facebook Ads para empezar a generar leads."
              },
              {
                icon: "🛡️",
                title: "90 Días de Soporte",
                description: "Acompañamiento completo por 3 meses. Ajustes, mejoras y respuestas por WhatsApp."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS KILLER */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-emerald-600">Resultados Reales</span> de MYPEs Como La Tuya
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "María González",
                business: "Salón de Belleza - San Juan de Lurigancho",
                result: "+73 clientes en 45 días",
                quote: "No podía creer cuando empezaron a llegar citas por WhatsApp. En un mes recuperé la inversión."
              },
              {
                name: "Carlos Mendoza",
                business: "Clínica Dental - Los Olivos",
                result: "+89 consultas nuevas",
                quote: "Ahora aparezco primero en Google Maps. Los pacientes me encuentran fácil y rápido."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="text-emerald-600 font-bold mt-2">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCIA FINAL */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            ⏰ Solo Quedan <span className="text-red-400">12 Cupos</span> Este Mes
          </h2>
          <p className="text-xl mb-8">
            Después del 31 de Julio, el precio sube a S/.3,500. No te quedes sin tu cupo.
          </p>
          
          <button 
            onClick={handleWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-2xl font-bold py-6 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <Phone className="w-6 h-6 inline mr-3" />
            RESERVAR MI CUPO AHORA
          </button>
          
          <div className="mt-8 flex justify-center items-center gap-4 text-sm">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Sin letra chica</span>
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Sin mensualidades</span>
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Resultados garantizados</span>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-8 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400">
            © 2025 AQXION • Transformación Digital para MYPEs Peruanas
          </p>
        </div>
      </footer>
    </div>
  );
}
