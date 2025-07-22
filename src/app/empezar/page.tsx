'use client';

import { useState } from 'react';

export default function EmpezarPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí integrarías con tu CRM/email service)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 1500);
  };

  if (showThankYou) {
    return (
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-emerald-50/30 min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-8">✅</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              ¡Perfecto! Ya Estás Dentro
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Te contactaremos en las próximas 24 horas para agendar tu 
              <strong className="text-green-600"> auditoría gratuita</strong> y comenzar a conseguir más clientes.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-green-800 font-semibold">
                🎯 Mientras tanto, revisa tu email (incluyendo spam) para los próximos pasos.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section - Lead Generation Focus */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden min-h-screen flex items-center">
        
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNmEzNGEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Value Proposition */}
              <div className="text-center lg:text-left">
                
                {/* Urgency Badge */}
                <div className="inline-flex items-center bg-red-100 border border-red-300 rounded-full px-4 py-2 mb-6">
                  <span className="text-red-700 font-semibold text-sm">
                    🚨 Solo 5 Spots Disponibles Este Mes
                  </span>
                </div>
                
                {/* Headline - M-A-G-I-C Pattern para PYMEs B2B */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  ¿Tu PYME B2B en Lima Necesita
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 block">
                    Más Clientes de Alto Valor?
                  </span>
                </h1>
                
                {/* Problem + Solution */}
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  <strong className="text-slate-800">Sistema Orgánico Simple DFY</strong> - 
                  Programa de 90 días que resuelve ciclos de ventas largos, publicidad costosa 
                  y falta de tiempo para conseguir <strong className="text-green-600">más clientes recurrentes</strong>.
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700"><strong>Sin publicidad costosa</strong> - Estrategias orgánicas probadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700"><strong>Poco tiempo requerido</strong> - 70% Done For You (DFY)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700"><strong>Clientes recurrentes</strong> - Sistema "una y otra vez"</span>
                  </div>
                </div>
                
                {/* Social Proof */}
                <div className="bg-slate-50 rounded-lg p-4 mb-8">
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Para PYMEs B2B en Lima</strong> (consultorías, agencias, software B2B)
                  </p>
                  <p className="text-xs text-slate-500">
                    Ingresos anuales S/80,000-S/400,000 • 3-7 empleados • Listas para escalar
                  </p>
                </div>
              </div>
              
              {/* Right Column - Lead Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                
                {/* Form Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Auditoría Gratuita
                  </h2>
                  <p className="text-slate-600">
                    <strong>Valor: $497</strong> • Solo por tiempo limitado
                  </p>
                </div>
                
                {/* Lead Form - Baja Fricción */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Empresarial *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-semibold text-slate-700 mb-2">
                      Empresa/PYME *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-2">
                      Teléfono (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                      placeholder="+51 999 xxx xxx (opcional)"
                    />
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Enviando...
                      </span>
                    ) : (
                      'Conseguir Mi Auditoría Gratuita →'
                    )}
                  </button>
                  
                  {/* Trust Elements */}
                  <div className="text-center pt-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      🔒 Información 100% segura • Sin spam • Solo contenido valioso
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section - Maximizar valor percibido */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Lo que Incluye Tu Sistema (Valor: &gt;$10,000)
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Todo lo necesario para conseguir <strong>más clientes de alto valor</strong> en menos tiempo y con poco costo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Componente 1: HVHC */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DFY
                </div>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Auditoría y Configuración Funnel
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Done For You.</strong> Configuramos tu funnel completo para clientes de alto valor sin ads.
                </p>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $1,997
                </div>
              </div>

              {/* Componente 2: HVHC */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DFY/DWY
                </div>
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Soporte Optimización 90 Días
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Colaboración directa.</strong> Ajustes personalizados para recurrencia en poco tiempo.
                </p>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $1,497
                </div>
              </div>

              {/* Componente 3: HVLC */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DWY/DIY
                </div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Plantillas Outreach Premium
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Scripts probados.</strong> Mensajes que generan leads de alto valor con bajo esfuerzo.
                </p>
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $997
                </div>
              </div>

              {/* Bono 1 */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BONO
                </div>
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Checklist Copy Básico DFY
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Guía de 1 semana.</strong> Mensajes que atraen clientes de alto valor en Lima.
                </p>
                <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $497
                </div>
              </div>

              {/* Bono 2 */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BONO
                </div>
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Módulo Automatización DWY
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>3 días de setup.</strong> Sequences que generan clientes recurrentes automáticamente.
                </p>
                <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $497
                </div>
              </div>

              {/* Bono 3 */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BONO
                </div>
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Revisión Contenido DIY
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>1 día de análisis.</strong> Contenido que atrae más clientes sin costo adicional.
                </p>
                <div className="bg-rose-100 text-rose-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $497
                </div>
              </div>
            </div>

            {/* Value Summary */}
            <div className="text-center bg-gradient-to-r from-slate-50 to-green-50 p-12 rounded-2xl border-2 border-green-200">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                <span className="line-through text-slate-500">Valor Total: $10,482</span>
              </h3>
              <h4 className="text-4xl font-bold text-green-600 mb-6">
                Tu Precio de Introducción: $997
              </h4>
              <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                <strong>Solo por tiempo limitado.</strong> Después será $2,997 one-time o $997 + 5% de ingresos incrementales.
              </p>
              
              {/* Urgency Counter */}
              <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6 inline-block">
                <p className="text-red-700 font-semibold text-sm">
                  ⏰ Solo quedan 3 spots este mes • Próximo cohort: 7 días
                </p>
              </div>
              
              <a 
                href="#form" 
                className="inline-flex items-center justify-center bg-green-600 text-white px-12 py-5 text-xl font-bold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Reservar Mi Spot Ahora →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              100% Libre de Riesgos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Garantía Incondicional (2 Semanas)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Si no estás completamente satisfecho, te devolvemos el 100% sin preguntas.
                </p>
              </div>
              
              <div className="bg-white border border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Garantía "Mejor que Dinero" (30 Días)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Si implementas y no ves resultados, continuamos gratis hasta que los logres.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 mb-8">
              <strong>El único riesgo es seguir perdiendo clientes de alto valor cada día que esperes.</strong>
            </p>
            
            <a 
              href="#form" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              Conseguir Mi Auditoría Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Countdown */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600 text-white text-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              5...4...3...2...1... ¡No Esperes Más!
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Cada segundo que esperas es un cliente de alto valor que va con tu competencia. 
              <strong>Actúa ahora.</strong>
            </p>
            <a 
              href="#form" 
              className="inline-flex items-center justify-center bg-white text-red-600 px-12 py-5 text-xl font-bold rounded-xl hover:bg-red-50 transition-colors duration-200 shadow-xl"
            >
              Sí, Quiero Más Clientes Ahora →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
