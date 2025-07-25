'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface HermesIAChatProps {
  onOpenContact?: () => void;
}

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses = {
  greeting: [
    "¡Hola! Soy Hermes IA 👋 ¿En qué puedo ayudarte con tu negocio hoy?",
    "¡Hola! Soy tu asistente digital Hermes IA. ¿Cómo puedo ayudarte a hacer crecer tu MYPE?"
  ],
  pricing: [
    "Nuestro Plan MYPE cuesta S/.1,500 (pago único) e incluye:\n\n✅ Sitio web profesional\n✅ Configuración completa de Google Business\n✅ Dashboard de control personalizado\n✅ 90 días de soporte personal\n✅ Hosting incluido por 1 año\n\n¿Te gustaría hablar con un humano para más detalles?"
  ],
  services: [
    "Ofrecemos una presencia digital completa para MYPEs:\n\n• Sitio web profesional\n• Optimización en Google My Business\n• Dashboard de control\n• Integración con redes sociales\n• Soporte personalizado por 90 días\n\n¿Qué aspecto te interesa más?"
  ],
  support: [
    "Incluimos 90 días de soporte personal donde:\n\n• Te acompañamos paso a paso\n• Resolvemos todas tus dudas\n• Optimizamos tu presencia digital\n• Acceso directo al equipo\n\n¿Te gustaría contactar a nuestro equipo humano?"
  ],
  contact: [
    "¡Perfecto! Te conectaré con nuestro equipo humano para que puedan ayudarte mejor. Voy a abrir el formulario de contacto para ti."
  ],
  default: [
    "Entiendo tu consulta. Para darte la mejor respuesta, ¿te gustaría hablar directamente con nuestro equipo? Ellos pueden ayudarte con cualquier duda específica sobre tu negocio.",
    "Esa es una gran pregunta. Nuestro equipo humano está mejor preparado para ayudarte con eso. ¿Te conecto con ellos?"
  ]
};

export function HermesIAChat({ onOpenContact }: HermesIAChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sonido suave y calmo - nota C suave
    audioRef.current = new Audio('data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ4AAAAAAAAAAAAAAAAAAAAAAAA=');
    audioRef.current.volume = 0.3; // Volumen suave
    
    return () => {
      if (audioRef.current) {
        audioRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const playNotificationSound = () => {
    // Crear un sonido más suave programáticamente
    if (typeof window !== 'undefined') {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5 note
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuanto')) {
      return predefinedResponses.pricing[0];
    }
    
    if (lowerMessage.includes('servicio') || lowerMessage.includes('que incluye') || lowerMessage.includes('ofrecen')) {
      return predefinedResponses.services[0];
    }
    
    if (lowerMessage.includes('soporte') || lowerMessage.includes('ayuda') || lowerMessage.includes('acompañamiento')) {
      return predefinedResponses.support[0];
    }
    
    if (lowerMessage.includes('contacto') || lowerMessage.includes('hablar') || lowerMessage.includes('humano')) {
      return predefinedResponses.contact[0];
    }
    
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('buenas')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)];
  };

  const handleToggle = () => {
    if (!isOpen) {
      playNotificationSound();
      setHasNewMessage(false);
      
      // Mensaje de bienvenida automático
      if (messages.length === 0) {
        setTimeout(() => {
          addBotMessage(predefinedResponses.greeting[0]);
        }, 800);
      }
    }
    setIsOpen(!isOpen);
  };

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
    playNotificationSound();
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simular typing delay
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(inputValue);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleContactFormClick = () => {
    playNotificationSound();
    if (onOpenContact) {
      onOpenContact();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", bounce: 0.3, duration: 0.8 }}
      >
        {/* Notification Badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center z-10 shadow-lg"
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Chat Button */}
        <motion.button
          onClick={handleToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center overflow-hidden"
        >
          {/* Pulse Animation suave */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-blue-400 rounded-full"
          />
          
          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1"
              >
                <Bot className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Indicador "IA" pequeño */}
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
            IA
          </div>
        </motion.button>

        {/* Chat Interface */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              style={{
                maxHeight: '500px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Hermes IA</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <p className="text-xs opacity-90">Asistente digital disponible</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-xs rounded-2xl px-4 py-2 ${
                      message.isBot 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Quick Actions */}
                <div className="flex mt-3">
                  <motion.button
                    onClick={handleContactFormClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-3 px-4 rounded-xl transition-colors font-medium"
                  >
                    Hablar con el equipo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
