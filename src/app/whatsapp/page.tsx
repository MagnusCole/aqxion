'use client';

import { useState } from 'react';
import { Phone, MessageCircle, CheckCircle, Clock } from 'lucide-react';

export default function WhatsAppSetup() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 <span className="text-green-600">WhatsApp Business Pro</span> 
          </h1>
          <p className="text-xl text-gray-700">
            Convierte tu WhatsApp en una máquina de generar clientes 24/7
          </p>
        </div>

        {/* STEPS */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Setup Automático en 3 Pasos</h2>
          
          <div className="space-y-8">
            {[
              {
                number: 1,
                title: "Configuración Inicial",
                description: "Conectamos tu número actual de WhatsApp con nuestro sistema de automatización.",
                time: "5 minutos",
                status: "active"
              },
              {
                number: 2,
                title: "Mensajes Automáticos",
                description: "Configuramos respuestas automáticas para cuando no puedas contestar al instante.",
                time: "10 minutos",
                status: "pending"
              },
              {
                number: 3,
                title: "Catálogo Digital",
                description: "Creamos tu catálogo de productos/servicios directamente en WhatsApp.",
                time: "15 minutos",
                status: "pending"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 p-6 border border-gray-200 rounded-2xl">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  step.status === 'active' ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {step.number}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Tiempo estimado: {step.time}</span>
                  </div>
                </div>

                {step.status === 'active' && (
                  <div className="text-green-500">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">✨ Lo Que Vas a Lograr</h3>
            <div className="space-y-4">
              {[
                "Responder automáticamente 24/7",
                "Mostrar tu catálogo con fotos y precios",
                "Recibir pedidos organizados",
                "Enviar confirmaciones automáticas",
                "Recordatorios de citas automáticos"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-6 text-center">📈 Resultados Típicos</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold">+300%</div>
                <div className="text-sm opacity-90">Más consultas por WhatsApp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">-70%</div>
                <div className="text-sm opacity-90">Menos tiempo respondiendo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Atención automatizada</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎯 Listo Para Empezar Tu Setup
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo se conectará contigo en los próximos minutos para comenzar
          </p>
          
          <button 
            onClick={() => window.open('https://wa.me/51987654321?text=Listo%20para%20setup%20WhatsApp%20Business%20Pro', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 inline mr-3" />
            EMPEZAR SETUP AHORA
          </button>
          
          <p className="text-sm opacity-70 mt-4">
            Respuesta garantizada en menos de 5 minutos
          </p>
        </div>
      </div>
    </div>
  );
}
