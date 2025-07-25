'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'delivered';
}

interface LiveChatProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

export function LiveChat({ isOpen: externalIsOpen, onToggle }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy Ana de AQXION 👋 ¿En qué puedo ayudarte con tu MYPE?',
      sender: 'agent',
      timestamp: new Date(),
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Control externo del chat
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

  // Auto-scroll a nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus en input cuando se abre
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Simulación de respuesta automática
  const sendAutoReply = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let reply = '';
      const msg = userMessage.toLowerCase();
      
      if (msg.includes('precio') || msg.includes('costo') || msg.includes('cuanto')) {
        reply = 'Nuestro sistema tiene un precio especial de $997 (o 3 pagos de $350). ¿Te gustaría que te explique todo lo que incluye? 💰';
      } else if (msg.includes('mype') || msg.includes('negocio') || msg.includes('empresa')) {
        reply = 'Perfecto, trabajamos específicamente con MYPEs en Lima. ¿Qué tipo de negocio tienes? (retail, servicios, alimentos, etc.) 🏪';
      } else if (msg.includes('hola') || msg.includes('buenos') || msg.includes('buenas')) {
        reply = '¡Perfecto! Me da mucho gusto conectar contigo. ¿Cómo se llama tu negocio y cuál es tu principal desafío ahora? 😊';
      } else if (msg.includes('portal') || msg.includes('acceso') || msg.includes('login')) {
        reply = 'El portal está incluido en tu plan. Te doy acceso apenas confirmes tu inscripción. ¿Ya decidiste unirte al programa? 🚀';
      } else {
        reply = 'Entiendo. Déjame ayudarte mejor. ¿Podrías contarme específicamente qué necesitas para tu MYPE? Así te doy la información más precisa 🎯';
      }

      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: reply,
        sender: 'agent',
        timestamp: new Date(),
      }]);
    }, 1500 + Math.random() * 1000); // Tiempo realista de respuesta
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simular envío
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === userMessage.id 
            ? { ...msg, status: 'delivered' }
            : msg
        )
      );
      
      // Respuesta automática
      sendAutoReply(userMessage.text);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onToggle?.(newIsOpen);
    
    if (newIsOpen) {
      setIsMinimized(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-PE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulso sutil cuando hay mensajes nuevos */}
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />
        
        {/* Indicador online */}
        <div className={`absolute -top-1 -right-1 w-4 h-4 ${isOnline ? 'bg-green-400' : 'bg-gray-400'} rounded-full border-2 border-white shadow-sm`}></div>
        
        {/* Badge de mensajes no leídos */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
          1
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 60 : 500
            }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Chat en Vivo</h4>
                  <div className="flex items-center gap-1 text-xs opacity-90">
                    <div className={`w-2 h-2 ${isOnline ? 'bg-green-400' : 'bg-gray-400'} rounded-full`}></div>
                    {isOnline ? 'Ana está en línea' : 'Fuera de línea'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <div className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        } flex items-center justify-between`}>
                          <span>{formatTime(message.timestamp)}</span>
                          {message.sender === 'user' && message.status && (
                            <span className="ml-2">
                              {message.status === 'sending' && '⏳'}
                              {message.status === 'sent' && '✓'}
                              {message.status === 'delivered' && '✓✓'}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2">
                        <div className="flex items-center gap-1">
                          <Bot className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-600">Ana está escribiendo</span>
                          <div className="flex gap-1">
                            <motion.div
                              className="w-1 h-1 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-1 h-1 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-1 h-1 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex items-end gap-3">
                    <div className="flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe tu mensaje..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                        disabled={!isOnline}
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim() || !isOnline}
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Quick replies */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      '¿Cuánto cuesta?',
                      'Quiero más info',
                      'Tengo una MYPE'
                    ].map((reply) => (
                      <button
                        key={reply}
                        onClick={() => setNewMessage(reply)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
