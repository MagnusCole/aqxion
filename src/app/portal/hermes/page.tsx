'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, Mic, MicOff, Settings, Sparkles, MessageSquare, BarChart3, Calendar, Users, Zap, Copy, ThumbsUp, ThumbsDown, RotateCcw, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestions?: string[];
  actions?: {
    type: 'copy' | 'implement' | 'schedule';
    label: string;
    action: () => void;
  }[];
}

interface Suggestion {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  prompt: string;
  category: 'marketing' | 'analytics' | 'automation' | 'strategy';
}

const initialSuggestions: Suggestion[] = [
  {
    icon: MessageSquare,
    title: 'Generar Post para Redes',
    description: 'Crea contenido atractivo para Instagram o Facebook',
    prompt: 'Ayúdame a crear un post para Instagram sobre los beneficios del Plan MYPE para restaurantes en Lima',
    category: 'marketing'
  },
  {
    icon: BarChart3,
    title: 'Analizar Métricas',
    description: 'Interpreta los datos de tu dashboard',
    prompt: 'Analiza mis métricas actuales del dashboard y dame recomendaciones para mejorar',
    category: 'analytics'
  },
  {
    icon: Calendar,
    title: 'Planificar Contenido',
    description: 'Crea un calendario de contenido semanal',
    prompt: 'Ayúdame a crear un calendario de contenido para la próxima semana enfocado en atraer más clientes',
    category: 'marketing'
  },
  {
    icon: Users,
    title: 'Estrategia de Leads',
    description: 'Optimiza tu proceso de captación',
    prompt: 'Dame estrategias para mejorar la conversión de leads en mi CRM',
    category: 'strategy'
  },
  {
    icon: Zap,
    title: 'Automatizar WhatsApp',
    description: 'Configura respuestas automáticas efectivas',
    prompt: 'Ayúdame a crear respuestas automáticas para WhatsApp que generen más conversiones',
    category: 'automation'
  }
];

const hermesResponses = {
  'generar post instagram': `¡Perfecto! Aquí tienes un post optimizado para Instagram:

📸 **POST PARA INSTAGRAM**

**Texto:**
"🍽️ ¿Tu restaurante está perdiendo clientes por no estar en línea? 

✨ Con nuestro Plan MYPE tienes:
• Sitio web profesional 
• WhatsApp Business integrado
• Google My Business optimizado
• Dashboard para controlar todo

💰 Solo S/.1,500 (vs S/.15,000 de agencias)
🚀 90 días de soporte personal incluido

¡No más clientes perdidos! 👇

#RestauranteLima #PresenciaDigital #MYPE #Marketing #Lima"

**Hashtags sugeridos:**
#RestauranteLima #ComidaLima #MarketingDigital #MYPE #PresenciaDigital #WhatsAppBusiness #Lima #Gastronomia #Emprendimiento

**Mejor horario:** 7-9 PM (cuando la gente busca dónde cenar)`,

  'analizar metricas': `📊 **ANÁLISIS DE TUS MÉTRICAS**

Basado en tu dashboard actual:

**✅ FORTALEZAS:**
• 156 visitas web (crecimiento +23%)
• 12 leads generados este mes
• WhatsApp activo con 8 conversaciones

**⚠️ OPORTUNIDADES:**
• Tasa de conversión del 7.7% (objetivo: 12%)
• Google My Business solo 89 vistas (puede crecer 3x)

**🎯 RECOMENDACIONES INMEDIATAS:**
1. **Optimizar Google My Business:** Subir fotos, actualizar horarios, responder reseñas
2. **Mejorar WhatsApp:** Respuesta automática + seguimiento en 24h
3. **Contenido Web:** Agregar testimonios y casos de éxito

**📈 META PRÓXIMOS 30 DÍAS:**
• 250+ visitas web (+60%)
• 20+ leads (+67%)
• 200+ vistas Google (+125%)

¿Quieres que te ayude a implementar alguna de estas mejoras?`,

  'calendario contenido': `📅 **CALENDARIO DE CONTENIDO SEMANAL**

**LUNES - Motivación**
📱 Post IG: "Nuevos goals, nuevas oportunidades"
⏰ Mejor hora: 8:00 AM

**MARTES - Educativo**  
📚 Carrusel IG: "5 errores que alejan clientes de tu negocio"
⏰ Mejor hora: 7:00 PM

**MIÉRCOLES - Testimonial**
⭐ Post IG: Cliente destacado + resultados
⏰ Mejor hora: 12:00 PM

**JUEVES - Behind the Scenes**
🎬 Stories IG: Proceso de trabajo/equipo
⏰ Mejor hora: 6:00 PM

**VIERNES - Promocional**
💰 Post IG: Beneficios Plan MYPE + CTA
⏰ Mejor hora: 7:30 PM

**SÁBADO - Comunidad**
🤝 Post IG: Pregunta/encuesta/engagement
⏰ Mejor hora: 11:00 AM

**DOMINGO - Inspiracional**
✨ Quote motivacional + casos de éxito
⏰ Mejor hora: 8:00 PM

**📲 WhatsApp Stories:** Publicar 2-3 veces por semana con contenido exclusivo`,

  default: `¡Hola! Soy Hermes, tu asistente de IA especializado en crecimiento digital para MYPEs. 

🚀 **Puedo ayudarte con:**
• Crear contenido para redes sociales
• Analizar tus métricas y KPIs  
• Planificar estrategias de marketing
• Optimizar tu WhatsApp Business
• Generar ideas para captar más clientes

💡 **Tip:** Sé específico en tus preguntas. Por ejemplo: "Ayúdame a crear un post para Instagram sobre mi restaurante en Miraflores"

¿En qué te ayudo hoy?`
};

export default function HermesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: hermesResponses.default,
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string = inputValue) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular respuesta de IA
    setTimeout(() => {
      const responseKey = content.toLowerCase().includes('post') || content.toLowerCase().includes('instagram') 
        ? 'generar post instagram'
        : content.toLowerCase().includes('metric') || content.toLowerCase().includes('analizar')
        ? 'analizar metricas' 
        : content.toLowerCase().includes('calendario') || content.toLowerCase().includes('contenido')
        ? 'calendario contenido'
        : 'default';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: hermesResponses[responseKey] || hermesResponses.default,
        timestamp: new Date().toISOString(),
        actions: responseKey !== 'default' ? [
          {
            type: 'copy',
            label: 'Copiar respuesta',
            action: () => navigator.clipboard.writeText(hermesResponses[responseKey])
          },
          {
            type: 'implement',
            label: 'Implementar ahora',
            action: () => alert('Función en desarrollo - próximamente podrás implementar automáticamente')
          }
        ] : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    handleSendMessage(suggestion.prompt);
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      type: 'assistant',
      content: hermesResponses.default,
      timestamp: new Date().toISOString()
    }]);
  };

  const categoryColors = {
    marketing: 'bg-pink-100 text-pink-800 border-pink-200',
    analytics: 'bg-blue-100 text-blue-800 border-blue-200',
    automation: 'bg-green-100 text-green-800 border-green-200',
    strategy: 'bg-purple-100 text-purple-800 border-purple-200'
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-xl">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Hermes IA</h1>
              <p className="text-indigo-100 text-sm">Tu asistente de crecimiento digital</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-400 rounded-full"
            />
            <span className="text-sm text-indigo-100">En línea</span>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="p-6 bg-white border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Sugerencias para empezar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {initialSuggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`p-4 text-left rounded-xl border-2 hover:shadow-md transition-all ${categoryColors[suggestion.category]}`}
              >
                <div className="flex items-start gap-3">
                  <suggestion.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{suggestion.title}</h4>
                    <p className="text-xs opacity-80">{suggestion.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                  
                  {message.actions && (
                    <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={action.action}
                          className="flex items-center gap-1 px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          {action.type === 'copy' && <Copy className="w-3 h-3" />}
                          {action.type === 'implement' && <Zap className="w-3 h-3" />}
                          {action.label}
                        </button>
                      ))}
                      <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-500 hover:text-green-600 rounded-lg transition-colors">
                        <ThumbsUp className="w-3 h-3" />
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-500 hover:text-red-600 rounded-lg transition-colors">
                        <ThumbsDown className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
                
                {message.type === 'assistant' && (
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-indigo-600" />
                    </div>
                    <span>Hermes • {new Date(message.timestamp).toLocaleTimeString()}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-indigo-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-indigo-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-indigo-500 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-500">Hermes está escribiendo...</span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Pregúntale a Hermes sobre marketing, métricas, contenido..."
              className="w-full p-4 pr-16 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50"
              disabled={isTyping}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <button
                onClick={() => setIsListening(!isListening)}
                className={`p-2 rounded-lg transition-colors ${
                  isListening ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
          
          {messages.length > 1 && (
            <button
              onClick={clearChat}
              className="p-3 text-gray-400 hover:text-red-600 rounded-xl transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Información de Desarrollo */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🤖 Hermes IA - Demo</h3>
            <p className="text-gray-600 mb-4">
              Esta es una versión de demostración. En la versión completa, Hermes estará integrado con GPT-4 y tendrá acceso a tus datos reales del portal.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✅ Análisis inteligente de métricas en tiempo real</p>
              <p>✅ Generación automática de contenido personalizado</p>
              <p>✅ Estrategias de marketing basadas en tu industria</p>
              <p>✅ Implementación directa de sugerencias en tu portal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
