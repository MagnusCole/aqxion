'use client';

import { useState } from 'react';
import { CheckCircle, Phone, CreditCard, Shield } from 'lucide-react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    industry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect to WhatsApp with form data
    const message = `COMPRA CONFIRMADA - Paquete S/.1,500\n\n` +
      `Nombre: ${formData.name}\n` +
      `Negocio: ${formData.business}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Rubro: ${formData.industry}\n\n` +
      `¡Listo para empezar mi transformación digital!`;
    
    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Último Paso Para <span className="text-emerald-600">Multiplicar Tus Ventas!</span>
          </h1>
          <p className="text-xl text-gray-700">
            Completa tus datos y confirma tu inversión de <span className="font-bold text-emerald-600">S/.1,500</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* FORMULARIO */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Datos de Tu Negocio</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej: María González"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de Tu Negocio *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                  placeholder="Ej: Salón de Belleza Elegancia"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp / Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Ej: 987654321"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Ej: maria@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿A qué te dedicas? *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                >
                  <option value="">Selecciona tu rubro</option>
                  <option value="belleza">Salón de Belleza / Spa</option>
                  <option value="dental">Clínica Dental</option>
                  <option value="veterinaria">Veterinaria</option>
                  <option value="restaurant">Restaurante / Comida</option>
                  <option value="ferreteria">Ferretería</option>
                  <option value="mecanico">Mecánico / Taller</option>
                  <option value="boutique">Boutique / Ropa</option>
                  <option value="farmacia">Farmacia / Botica</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6 inline mr-3" />
                CONFIRMAR COMPRA - S/.1,500
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span>Proceso 100% seguro y confidencial</span>
            </div>
          </div>

          {/* RESUMEN DE COMPRA */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Tu Inversión Incluye</h2>
            
            <div className="space-y-4 mb-8">
              {[
                "Website profesional completo",
                "WhatsApp Business automatizado",
                "Google Business Profile optimizado", 
                "Dashboard de leads y estadísticas",
                "Setup inicial de publicidad",
                "90 días de soporte completo",
                "Hosting y dominio incluido",
                "Configuración en 24-48 horas"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Precio regular:</span>
                <span className="text-gray-500 line-through">S/.15,000</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Descuento especial:</span>
                <span className="text-red-600">-S/.13,500</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>Total a pagar:</span>
                <span className="text-emerald-600">S/.1,500</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Pago único • Sin mensualidades • Sin sorpresas
              </p>
            </div>

            {/* GARANTÍA */}
            <div className="mt-8 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-800 text-center mb-3">
                🛡️ GARANTÍA TOTAL
              </h3>
              <p className="text-sm text-emerald-700 text-center">
                Si en 30 días no ves resultados reales en tu negocio, 
                te devolvemos el 100% de tu dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </div>

        {/* URGENCIA FINAL */}
        <div className="mt-12 text-center">
          <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-800 mb-2">
              ⏰ ATENCIÓN: Solo quedan 8 cupos disponibles
            </h3>
            <p className="text-red-700">
              Después del 31 de Julio el precio vuelve a S/.3,500. 
              <br />No pierdas esta oportunidad única.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
