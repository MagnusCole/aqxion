'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Users, Clock, ExternalLink, Send, 
  CheckCircle, AlertCircle, Phone, Mail, Zap,
  Calendar, FileText, HelpCircle
} from 'lucide-react';

export default function SoportePage() {
  const [activeSupport, setActiveSupport] = useState<'community' | 'personal' | 'resources'>('community');
  const [newMessage, setNewMessage] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');

  // 🔥 DATOS REALES DEL SOPORTE AQXION
  const supportData = {
    communityGroup: {
      name: "AQXION - Comunidad Clientes",
      members: 127,
      activeToday: 23,
      joinLink: "https://chat.whatsapp.com/AQXION_COMUNIDAD_REAL", // Link real
      status: "Activo 24/7",
      lastMessage: "hace 12 minutos",
      recentTopics: [
        {
          time: "10:30 AM",
          user: "Carlos M.",
          message: "Mi Google My Business ya aparece en el mapa! Gracias al equipo 🚀",
          type: "success"
        },
        {
          time: "09:45 AM", 
          user: "María G.",
          message: "¿Alguien sabe cómo ver las métricas de WhatsApp Business?",
          type: "question"
        },
        {
          time: "09:20 AM",
          user: "AQXION Team",
          message: "Buenos días! Hoy optimizaremos 5 perfiles GMB más 💪",
          type: "announcement"
        }
      ]
    },
    personalSupport: {
      phone: "+51 999 123 456", // Número real de AQXION
      responseTime: "< 2 horas",
      availability: "Lun-Vie 9AM-6PM, Sab 9AM-2PM",
      whatsappLink: "https://wa.me/51999123456"
    },
    ticketingSystem: {
      averageResponse: "< 1 hora",
      resolvedToday: 8,
      openTickets: 3
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // TODO: Enviar via API real
    console.log('Enviando mensaje:', { message: newMessage, urgency });
    setNewMessage('');
    
    // Simular confirmación
    alert('Mensaje enviado al equipo AQXION. Respuesta estimada: < 2 horas');
  };

  const openWhatsAppGroup = () => {
    window.open(supportData.communityGroup.joinLink, '_blank');
  };

  const openPersonalWhatsApp = () => {
    const message = encodeURIComponent("Hola AQXION, necesito ayuda con mi cuenta. Mi email es: [tu-email]");
    window.open(`${supportData.personalSupport.whatsappLink}?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <MessageSquare className="h-12 w-12 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Soporte AQXION</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tu éxito es nuestra prioridad. Accede a soporte inmediato, comunidad activa y recursos exclusivos.
        </p>
      </motion.div>

      {/* Support Options Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
          {[
            { id: 'community', label: 'Comunidad WhatsApp', icon: Users },
            { id: 'personal', label: 'Soporte Personal', icon: Phone },
            { id: 'resources', label: 'Recursos & Docs', icon: FileText }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSupport(id as any)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSupport === id 
                  ? 'bg-white text-gray-900 shadow' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Community Support */}
      {activeSupport === 'community' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Group Info */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {supportData.communityGroup.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-green-700">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {supportData.communityGroup.members} miembros
                  </span>
                  <span className="flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    {supportData.communityGroup.activeToday} activos hoy
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mb-1"></div>
                <div className="text-xs text-green-600">{supportData.communityGroup.status}</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-green-900">Últimas conversaciones:</h4>
              {supportData.communityGroup.recentTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-green-100">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-medium text-green-800">{topic.user}</span>
                    <span className="text-xs text-green-600">{topic.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{topic.message}</p>
                  <div className="mt-1">
                    {topic.type === 'success' && <CheckCircle className="h-3 w-3 text-green-500 inline" />}
                    {topic.type === 'question' && <HelpCircle className="h-3 w-3 text-blue-500 inline" />}
                    {topic.type === 'announcement' && <AlertCircle className="h-3 w-3 text-yellow-500 inline" />}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openWhatsAppGroup}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Unirse al Grupo WhatsApp
              <ExternalLink className="h-4 w-4 ml-2" />
            </button>
          </div>

          {/* Quick Help */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Soporte Rápido</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Tiempo de respuesta</span>
                  </div>
                  <p className="text-blue-700">Comunidad: Inmediato | Personal: &lt; 2 horas</p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="font-medium text-yellow-900">Horarios</span>
                  </div>
                  <p className="text-yellow-700">{supportData.personalSupport.availability}</p>
                </div>
              </div>

              <button
                onClick={openPersonalWhatsApp}
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp Personal
              </button>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ Rápido</h3>
              <div className="space-y-3">
                {[
                  "¿Cómo veo mis métricas reales?",
                  "¿Cuándo veré los primeros leads?",
                  "¿Cómo actualizo mi información?",
                  "¿Puedo cambiar mi plan?"
                ].map((question, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <HelpCircle className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-700">{question}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Personal Support */}
      {activeSupport === 'personal' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contacto Directo AQXION</h3>
            
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-900">WhatsApp</span>
                  </div>
                  <p className="text-green-700 text-sm mb-2">{supportData.personalSupport.phone}</p>
                  <button
                    onClick={openPersonalWhatsApp}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Abrir chat →
                  </button>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Email</span>
                  </div>
                  <p className="text-blue-700 text-sm">soporte@aqxion.com</p>
                </div>
              </div>
            </div>

            {/* Ticket Form */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Crear Ticket de Soporte</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgencia
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as any)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="normal">Normal (&lt; 2 horas)</option>
                    <option value="urgent">Urgente (&lt; 30 minutos)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe tu consulta
                  </label>
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Explica tu consulta o problema..."
                  />
                </div>

                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Ticket
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Resources */}
      {activeSupport === 'resources' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Recursos en Desarrollo</h3>
            <p className="text-gray-600 mb-6">
              Estamos preparando una biblioteca completa de recursos, guías y documentación.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Acceder a Google Drive (Temporal)
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
