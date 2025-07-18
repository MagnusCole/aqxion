// LLM-OPTIMIZED: Advanced lead generation system for AQXION growth agency
// Auto-improved Lead Generation pillar - Cycle 1

import { useState } from 'react';
import { useConversionTracking } from './conversionTrackingClean';

export interface LeadData {
  email: string;
  name?: string;
  phone?: string;
  businessType?: string;
  monthlyRevenue?: string;
  primaryChallenge?: string;
  source: string;
  medium: string;
  campaign?: string;
  timestamp: string;
  score?: number;
}

export interface LeadMagnetConfig {
  type: 'guide' | 'audit' | 'webinar' | 'consultation';
  title: string;
  description: string;
  fileName?: string;
  followUpSequence: string;
  qualificationQuestions: Array<{
    id: string;
    question: string;
    type: 'select' | 'text' | 'number';
    options?: string[];
    required: boolean;
  }>;
}

// Advanced lead capture system
export const useAdvancedLeadCapture = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [leadScore, setLeadScore] = useState(0);
  const { trackConversion } = useConversionTracking();

  const captureEarlyLead = async (
    email: string, 
    source: string,
    additionalData?: Partial<LeadData>
  ): Promise<boolean> => {
    setIsCapturing(true);
    
    try {
      const leadData: LeadData = {
        email,
        source,
        medium: 'website',
        timestamp: new Date().toISOString(),
        ...additionalData
      };

      // Calculate lead score
      const score = calculateLeadScore(leadData);
      leadData.score = score;
      setLeadScore(score);

      // Store locally for offline capability
      const existingLeads = JSON.parse(localStorage.getItem('aqxion_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('aqxion_leads', JSON.stringify(existingLeads));

      // Track conversion
      trackConversion({
        event: 'lead_capture',
        category: 'conversion',
        label: source,
        value: score,
        source: leadData.source,
        medium: leadData.medium,
        campaign: leadData.campaign
      });

      // Send to backend (with retry logic)
      await sendLeadToBackend(leadData);

      // Trigger personalization update
      updateUserPersonalization(leadData);

      setIsCapturing(false);
      return true;
    } catch (error) {
      console.error('Lead capture failed:', error);
      setIsCapturing(false);
      return false;
    }
  };

  const qualifyLead = async (
    leadId: string,
    qualificationData: Record<string, string | number>
  ) => {
    try {
      const leads = JSON.parse(localStorage.getItem('aqxion_leads') || '[]');
      const leadIndex = leads.findIndex((lead: LeadData) => 
        lead.email === leadId || lead.timestamp === leadId
      );

      if (leadIndex === -1) return;

      // Update lead with qualification data
      leads[leadIndex] = {
        ...leads[leadIndex],
        ...qualificationData,
        score: calculateLeadScore({ ...leads[leadIndex], ...qualificationData })
      };

      localStorage.setItem('aqxion_leads', JSON.stringify(leads));

      // Track qualification completion
      trackConversion({
        event: 'lead_qualified',
        category: 'conversion',
        label: 'qualification_complete',
        value: leads[leadIndex].score
      });

      return leads[leadIndex];
    } catch (error) {
      console.error('Lead qualification failed:', error);
      return null;
    }
  };

  return {
    captureEarlyLead,
    qualifyLead,
    isCapturing,
    leadScore
  };
};

// AI-powered lead scoring algorithm
const calculateLeadScore = (leadData: LeadData): number => {
  let score = 0;

  // Base score for providing email
  score += 10;

  // Business type scoring
  const businessTypeScores: Record<string, number> = {
    'ecommerce': 25,
    'saas': 30,
    'consultoria': 20,
    'restaurant': 15,
    'clinica': 20,
    'inmobiliaria': 18,
    'gym': 12,
    'otros': 5
  };
  score += businessTypeScores[leadData.businessType || 'otros'] || 5;

  // Revenue scoring
  const revenueScores: Record<string, number> = {
    '0-10k': 5,
    '10k-50k': 15,
    '50k-100k': 25,
    '100k-500k': 35,
    '500k+': 40
  };
  score += revenueScores[leadData.monthlyRevenue || '0-10k'] || 5;

  // Challenge scoring (indicates pain level)
  const challengeScores: Record<string, number> = {
    'pocas-ventas': 30,
    'leads-caros': 25,
    'no-automatizacion': 20,
    'competencia': 15,
    'tiempo': 18,
    'otros': 8
  };
  score += challengeScores[leadData.primaryChallenge || 'otros'] || 8;

  // Source quality scoring
  const sourceScores: Record<string, number> = {
    'organic': 15,
    'paid_search': 12,
    'social_organic': 10,
    'social_paid': 8,
    'direct': 20,
    'referral': 25,
    'email': 18
  };
  score += sourceScores[leadData.source] || 5;

  // Phone number bonus
  if (leadData.phone) score += 10;

  // Name bonus
  if (leadData.name) score += 5;

  return Math.min(score, 100); // Cap at 100
};

// Backend integration with retry logic
const sendLeadToBackend = async (leadData: LeadData, retries = 3): Promise<void> => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });

      if (response.ok) {
        return;
      }

      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      if (i === retries - 1) {
        console.error('Failed to send lead after retries:', error);
        // Store in failed queue for later retry
        const failedLeads = JSON.parse(localStorage.getItem('aqxion_failed_leads') || '[]');
        failedLeads.push({ ...leadData, failedAt: new Date().toISOString() });
        localStorage.setItem('aqxion_failed_leads', JSON.stringify(failedLeads));
      } else {
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }
};

// Update user personalization based on lead data
const updateUserPersonalization = (leadData: LeadData) => {
  try {
    const profile = JSON.parse(localStorage.getItem('aqxion_user_profile') || '{}');
    
    // Update profile with lead insights
    if (leadData.businessType) profile.businessType = leadData.businessType;
    if (leadData.primaryChallenge) {
      // Map challenge to experience level
      const challengeToExperience: Record<string, string> = {
        'no-automatizacion': 'beginner',
        'leads-caros': 'intermediate',
        'competencia': 'advanced'
      };
      profile.experience = challengeToExperience[leadData.primaryChallenge] || profile.experience;
    }

    // Set primary goal based on challenge
    const challengeToGoal: Record<string, string> = {
      'pocas-ventas': 'sales',
      'leads-caros': 'leads',
      'no-automatizacion': 'automation',
      'competencia': 'growth'
    };
    profile.primaryGoal = challengeToGoal[leadData.primaryChallenge || ''] || 'leads';

    localStorage.setItem('aqxion_user_profile', JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to update personalization:', error);
  }
};

// Progressive lead qualification system
export const useProgressiveLeadQualification = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [qualificationData, setQualificationData] = useState<Record<string, unknown>>({});

  const qualificationFlow = [
    {
      id: 'business_type',
      question: '¿Qué tipo de negocio tienes?',
      type: 'select' as const,
      options: [
        'E-commerce',
        'SaaS/Software',
        'Consultoría',
        'Restaurante',
        'Clínica/Salud',
        'Inmobiliaria',
        'Gimnasio/Fitness',
        'Otros'
      ],
      required: true
    },
    {
      id: 'monthly_revenue',
      question: '¿Cuáles son tus ingresos mensuales aproximados?',
      type: 'select' as const,
      options: [
        'Menos de $10k',
        '$10k - $50k',
        '$50k - $100k',
        '$100k - $500k',
        'Más de $500k'
      ],
      required: true
    },
    {
      id: 'primary_challenge',
      question: '¿Cuál es tu mayor desafío actual?',
      type: 'select' as const,
      options: [
        'Pocas ventas/conversiones',
        'Leads demasiado caros',
        'Falta de automatización',
        'Mucha competencia',
        'Falta de tiempo',
        'Otros'
      ],
      required: true
    },
    {
      id: 'team_size',
      question: '¿Cuántas personas trabajan en tu empresa?',
      type: 'select' as const,
      options: [
        'Solo yo',
        '2-5 personas',
        '6-15 personas',
        '16-50 personas',
        'Más de 50'
      ],
      required: false
    }
  ];

  const nextStep = (answer: string | number) => {
    const currentQ = qualificationFlow[currentStep];
    setQualificationData(prev => ({
      ...prev,
      [currentQ.id]: answer
    }));

    if (currentStep < qualificationFlow.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isComplete = currentStep === qualificationFlow.length;
  const progress = ((currentStep + 1) / qualificationFlow.length) * 100;

  return {
    currentQuestion: qualificationFlow[currentStep],
    currentStep,
    qualificationData,
    nextStep,
    prevStep,
    isComplete,
    progress,
    totalSteps: qualificationFlow.length
  };
};

// Smart lead magnet recommendations
export const useSmartLeadMagnets = () => {
  const getRecommendedMagnet = (
    businessType?: string,
    experience?: string,
    _goal?: string
  ): LeadMagnetConfig => {
    // Default magnet
    let magnet: LeadMagnetConfig = {
      type: 'guide',
      title: 'Guía: 7 Estrategias para Generar Leads con IA',
      description: 'Descubre cómo automatizar tu generación de leads con inteligencia artificial',
      fileName: 'guia-leads-ia-aqxion.pdf',
      followUpSequence: 'default_nurture',
      qualificationQuestions: []
    };

    // Customize based on business type
    if (businessType === 'restaurant') {
      magnet = {
        type: 'guide',
        title: 'Cómo Llenar tu Restaurante Cada Noche',
        description: 'Estrategias probadas para atraer más clientes a tu restaurante',
        fileName: 'restaurante-mas-clientes-aqxion.pdf',
        followUpSequence: 'restaurant_nurture',
        qualificationQuestions: [
          {
            id: 'location',
            question: '¿En qué ciudad está tu restaurante?',
            type: 'text',
            required: true
          }
        ]
      };
    } else if (businessType === 'ecommerce') {
      magnet = {
        type: 'audit',
        title: 'Auditoría Gratuita de tu E-commerce',
        description: 'Análisis completo de tu tienda online y plan de mejoras',
        followUpSequence: 'ecommerce_nurture',
        qualificationQuestions: [
          {
            id: 'store_url',
            question: '¿Cuál es la URL de tu tienda?',
            type: 'text',
            required: true
          }
        ]
      };
    } else if (businessType === 'clinica') {
      magnet = {
        type: 'guide',
        title: 'Marketing Ético para Clínicas y Consultorios',
        description: 'Atrae pacientes de calidad respetando la ética médica',
        fileName: 'marketing-clinicas-aqxion.pdf',
        followUpSequence: 'healthcare_nurture',
        qualificationQuestions: [
          {
            id: 'specialty',
            question: '¿Cuál es tu especialidad médica?',
            type: 'text',
            required: true
          }
        ]
      };
    }

    // Customize based on experience level
    if (experience === 'advanced') {
      magnet.title = magnet.title.replace('Guía:', 'Estrategia Avanzada:');
      magnet.description += ' - Nivel avanzado con métricas y KPIs';
    } else if (experience === 'beginner') {
      magnet.title = magnet.title.replace('Estrategias', 'Primeros Pasos:');
      magnet.description = 'Guía paso a paso para principiantes - Sin tecnicismos';
    }

    return magnet;
  };

  return { getRecommendedMagnet };
};
