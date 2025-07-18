// LLM-OPTIMIZED: Interactive Quiz for lead generation and conversion optimization
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    weight: number;
  }[];
}

interface QuizResult {
  title: string;
  description: string;
  recommendation: string;
  cta: string;
  urgency?: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'business-size',
    question: '¿Cuántos empleados tiene tu negocio?',
    options: [
      { value: 'solo', label: 'Solo yo / Freelancer', weight: 1 },
      { value: 'pequeno', label: '2-10 empleados', weight: 2 },
      { value: 'mediano', label: '11-50 empleados', weight: 3 },
      { value: 'grande', label: '50+ empleados', weight: 4 },
    ],
  },
  {
    id: 'current-leads',
    question: '¿Cuántos leads cualificados generas por mes actualmente?',
    options: [
      { value: 'cero', label: '0-5 leads/mes', weight: 1 },
      { value: 'pocos', label: '5-20 leads/mes', weight: 2 },
      { value: 'algunos', label: '20-50 leads/mes', weight: 3 },
      { value: 'muchos', label: '50+ leads/mes', weight: 4 },
    ],
  },
  {
    id: 'biggest-challenge',
    question: '¿Cuál es tu mayor desafío en marketing digital?',
    options: [
      { value: 'tiempo', label: 'No tengo tiempo para marketing', weight: 1 },
      { value: 'conocimiento', label: 'No sé qué estrategias funcionan', weight: 2 },
      { value: 'resultados', label: 'No veo resultados de mis esfuerzos', weight: 3 },
      { value: 'escala', label: 'No puedo escalar mis campañas', weight: 4 },
    ],
  },
  {
    id: 'budget',
    question: '¿Cuál es tu presupuesto mensual para marketing digital?',
    options: [
      { value: 'bajo', label: 'Menos de $1,000/mes', weight: 1 },
      { value: 'medio', label: '$1,000 - $5,000/mes', weight: 2 },
      { value: 'alto', label: '$5,000 - $15,000/mes', weight: 3 },
      { value: 'premium', label: 'Más de $15,000/mes', weight: 4 },
    ],
  },
  {
    id: 'timeline',
    question: '¿Qué tan urgente es resolver este problema?',
    options: [
      { value: 'explorando', label: 'Solo estoy explorando opciones', weight: 1 },
      { value: 'meses', label: 'En los próximos 3-6 meses', weight: 2 },
      { value: 'pronto', label: 'En las próximas 4-8 semanas', weight: 3 },
      { value: 'urgente', label: 'Necesito resultados YA', weight: 4 },
    ],
  },
];

const getQuizResult = (totalScore: number): QuizResult => {
  if (totalScore <= 8) {
    return {
      title: '🌱 Starter Package',
      description: 'Perfecto para comenzar tu journey de crecimiento automatizado',
      recommendation: 'Te recomendamos empezar con nuestro Growth Stack Básico: Ads automatizados + Outreach directo para generar tus primeros 20-50 leads/mes.',
      cta: 'Consulta Gratuita - Starter',
      urgency: '⚡ Solo 5 spots disponibles este mes',
    };
  } else if (totalScore <= 12) {
    return {
      title: '🚀 Growth Package',
      description: 'Ideal para negocios listos para acelerar su crecimiento',
      recommendation: 'El Growth Stack Completo es perfecto para ti: Ads + Outreach + IA + Content para 50-150 leads/mes con automatización total.',
      cta: 'Demo del Growth Stack',
      urgency: '🔥 Implementación en 30 días garantizada',
    };
  } else if (totalScore <= 16) {
    return {
      title: '💎 Scale Package',
      description: 'Para negocios listos para dominar su mercado',
      recommendation: 'Necesitas nuestro Enterprise Stack: Todos los servicios + consultoría estratégica + optimización continua para 150+ leads/mes.',
      cta: 'Estrategia Enterprise Personalizada',
      urgency: '⭐ Solo trabajamos con 3 clientes Enterprise por mes',
    };
  } else {
    return {
      title: '👑 Enterprise VIP',
      description: 'Para empresas que buscan crecimiento exponencial',
      recommendation: 'Tu empresa califica para nuestro programa VIP: Stack completo + equipo dedicado + garantía de resultados en 90 días.',
      cta: 'Llamada VIP Exclusiva',
      urgency: '💼 Solo para empresas pre-calificadas',
    };
  }
};

export const LeadQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', name: '', company: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowForm(true);
      }, 300);
    }
  };

  const calculateScore = () => {
    return Object.entries(answers).reduce((total, [questionId, answer]) => {
      const question = quizQuestions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.value === answer);
      return total + (option?.weight || 0);
    }, 0);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const score = calculateScore();
    setShowResult(true);
    
    // Track quiz submission for analytics
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'quiz_complete', {
        event_category: 'lead_generation',
        event_label: 'growth_stack_quiz',
        value: score
      });
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setShowForm(false);
    setUserInfo({ email: '', name: '', company: '' });
  };

  if (showResult) {
    const score = calculateScore();
    const result = getQuizResult(score);
    
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎯</div>
          <Heading level="h2" className="text-2xl font-bold mb-4">
            {result.title}
          </Heading>
          <Text className="text-gray-600 mb-6">
            {result.description}
          </Text>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
          <Text className="font-semibold mb-4">
            📊 Tu Recomendación Personalizada:
          </Text>
          <Text className="text-gray-700 leading-relaxed">
            {result.recommendation}
          </Text>
        </div>
        
        {result.urgency && (
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6">
            <Text className="text-orange-800 font-medium text-center">
              {result.urgency}
            </Text>
          </div>
        )}
        
        <div className="text-center space-y-4">
          <Button 
            variant="urgent" 
            size="lg" 
            fullWidth
            className="text-lg font-bold"
          >
            {result.cta} - GRATIS →
          </Button>
          
          <Button 
            variant="outline" 
            onClick={restartQuiz}
            className="text-sm"
          >
            Repetir Quiz
          </Button>
        </div>
        
        <div className="mt-6 text-center">
          <Text className="text-xs text-gray-500">
            ✅ Sin compromiso ✅ Estrategia personalizada incluida ✅ Resultados en 30 días
          </Text>
        </div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">📧</div>
          <Heading level="h2" className="text-xl font-bold mb-2">
            ¡Último Paso!
          </Heading>
          <Text className="text-gray-600">
            Ingresa tus datos para recibir tu recomendación personalizada
          </Text>
        </div>
        
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={userInfo.name}
              onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Tu email profesional"
              value={userInfo.email}
              onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Nombre de tu empresa"
              value={userInfo.company}
              onChange={(e) => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            variant="success" 
            size="lg" 
            fullWidth
            className="mt-6"
          >
            Ver Mi Recomendación →
          </Button>
        </form>
        
        <Text className="text-xs text-gray-500 text-center mt-4">
          🔒 Tu información está segura. No spam, solo tu estrategia personalizada.
        </Text>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <Text className="text-sm font-medium text-gray-600">
            Pregunta {currentQuestion + 1} de {quizQuestions.length}
          </Text>
          <Text className="text-sm font-medium text-blue-600">
            {Math.round(progress)}% completado
          </Text>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <Heading level="h2" className="text-xl font-bold mb-4">
          {question.question}
        </Heading>
        <Text className="text-gray-600">
          Selecciona la opción que mejor describe tu situación
        </Text>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(question.id, option.value)}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium group-hover:text-blue-700">
                {option.label}
              </span>
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-500 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* Back Button */}
      {currentQuestion > 0 && (
        <div className="mt-6 text-center">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            className="text-sm"
          >
            ← Pregunta anterior
          </Button>
        </div>
      )}

      {/* Trust indicators */}
      <div className="mt-8 text-center">
        <Text className="text-xs text-gray-500">
          ⏱️ 2 minutos • 🎯 Recomendación personalizada • 🔒 100% privado
        </Text>
      </div>
    </div>
  );
};
