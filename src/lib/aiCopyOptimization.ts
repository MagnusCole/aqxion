// LLM-OPTIMIZED: AI-powered copy optimization system for AQXION growth agency
// Auto-improved Content/Copy pillar - Cycle 1

import { useState, useCallback } from 'react';

export interface CopyVariant {
  id: string;
  type: 'headline' | 'subheadline' | 'cta' | 'body' | 'value_prop';
  original: string;
  variants: string[];
  performance?: {
    impressions: number;
    clicks: number;
    conversions: number;
    ctr: number;
    cvr: number;
  };
  context: {
    audience: string;
    stage: 'awareness' | 'consideration' | 'decision' | 'retention';
    tone: 'professional' | 'friendly' | 'urgent' | 'educational';
    goal: 'attention' | 'trust' | 'action' | 'education';
  };
}

export interface CopyPersonalization {
  businessType: string;
  painPoints: string[];
  desired_outcomes: string[];
  experience_level: 'beginner' | 'intermediate' | 'advanced';
  budget_range: 'low' | 'medium' | 'high' | 'enterprise';
}

// Advanced copy optimization system
export const useAICopyOptimization = () => {
  const [activeVariants, setActiveVariants] = useState<Map<string, CopyVariant>>(new Map());
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Generate AI-optimized copy variants based on context
  const generateCopyVariants = useCallback(async (
    originalText: string,
    type: CopyVariant['type'],
    context: CopyVariant['context'],
    personalization?: CopyPersonalization
  ): Promise<string[]> => {
    setIsOptimizing(true);

    try {
      // AI-powered copy generation formulas for AQXION
      const variants = await generateVariantsByType(originalText, type, context, personalization);
      setIsOptimizing(false);
      return variants;
    } catch (error) {
      console.error('Copy variant generation failed:', error);
      setIsOptimizing(false);
      return [originalText];
    }
  }, []);

  // A/B test copy variants with smart allocation
  const testCopyVariants = useCallback(async (
    variantId: string,
    variants: string[],
    context: CopyVariant['context']
  ) => {
    const copyVariant: CopyVariant = {
      id: variantId,
      type: 'headline', // Will be determined by context
      original: variants[0],
      variants: variants.slice(1),
      context,
      performance: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        ctr: 0,
        cvr: 0
      }
    };

    setActiveVariants(prev => new Map(prev).set(variantId, copyVariant));
    
    // Start A/B testing - Simple hash-based allocation
    const userHash = getUserHash();
    const selectedVariant = variants[userHash % variants.length];
    
    // Track variant view
    trackCopyVariantView(variantId, selectedVariant);
    
    return selectedVariant;
  }, []);

  const trackCopyConversion = useCallback((variantId: string, selectedVariant: string) => {
    // Update variant performance metrics
    setActiveVariants(prev => {
      const updated = new Map(prev);
      const variant = updated.get(variantId);
      if (variant && variant.performance) {
        variant.performance.conversions += 1;
        variant.performance.cvr = variant.performance.conversions / variant.performance.impressions;
      }
      return updated;
    });

    // Track in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'copy_conversion', {
        event_category: 'copy_optimization',
        event_label: `${variantId}_${selectedVariant}`,
        custom_parameter_1: variantId,
        custom_parameter_2: selectedVariant
      });
    }
  }, []);

  return {
    generateCopyVariants,
    testCopyVariants,
    trackCopyConversion,
    activeVariants,
    isOptimizing
  };
};

// AI copy generation formulas for AQXION growth agency
const generateVariantsByType = async (
  original: string,
  type: CopyVariant['type'],
  context: CopyVariant['context'],
  personalization?: CopyPersonalization
): Promise<string[]> => {
  
  const { audience, stage, tone, goal } = context;
  
  // Base variants that work for AQXION
  let variants: string[] = [original];
  
  if (type === 'headline') {
    variants = generateHeadlineVariants(original, audience, stage, tone, personalization);
  } else if (type === 'cta') {
    variants = generateCTAVariants(original, stage, tone, goal);
  } else if (type === 'value_prop') {
    variants = generateValuePropVariants(original, audience, personalization);
  } else if (type === 'subheadline') {
    variants = generateSubheadlineVariants(original, stage, tone);
  }
  
  return variants;
};

// Headline optimization formulas
const generateHeadlineVariants = (
  original: string,
  audience: string,
  stage: CopyVariant['context']['stage'],
  tone: CopyVariant['context']['tone'],
  personalization?: CopyPersonalization
): string[] => {
  
  const variants = [original];
  
  // Problem-focused headlines for awareness stage
  if (stage === 'awareness') {
    variants.push(
      `¿Cansado de ${getCommonPainPoint(personalization?.businessType)}?`,
      `El Error #1 que Cometen los ${getAudienceLabel(audience)}`,
      `¿Por Qué tu ${personalization?.businessType || 'Negocio'} No Genera Suficientes Leads?`
    );
  }
  
  // Solution-focused headlines for consideration stage  
  if (stage === 'consideration') {
    variants.push(
      `Cómo Generar 50+ Leads/Mes con Automatización IA`,
      `El Sistema Completo para Escalar tu ${personalization?.businessType || 'Negocio'}`,
      `De 0 a 100 Leads: El Framework que Usan las Mejores Agencias`
    );
  }
  
  // Result-focused headlines for decision stage
  if (stage === 'decision') {
    variants.push(
      `Clientes Reales Aumentaron Ventas 300% en 90 Días`,
      `Garantizamos 50+ Leads Cualificados o Te Devolvemos el Dinero`,
      `El Único Sistema que Necesitas para Escalar a 7 Cifras`
    );
  }
  
  // Personalization based on business type
  if (personalization?.businessType) {
    const personalizedVariants = getBusinessTypeHeadlines(personalization.businessType);
    variants.push(...personalizedVariants);
  }
  
  // Tone adjustments
  if (tone === 'urgent') {
    variants.push(
      `ÚLTIMO DÍA: ${original.replace(/\.$/, '')} (Solo 24h)`,
      `ATENCIÓN: ${original}`,
      `🚨 URGENTE: ${original}`
    );
  } else if (tone === 'friendly') {
    variants.push(
      `¡Hola! ${original}`,
      `Te ayudamos a ${original.toLowerCase()}`,
      `¿Sabías que ${original.toLowerCase()}?`
    );
  }
  
  return variants.slice(0, 5); // Limit to 5 variants for testing
};

// CTA optimization formulas
const generateCTAVariants = (
  original: string,
  stage: CopyVariant['context']['stage'],
  tone: CopyVariant['context']['tone'],
  goal: CopyVariant['context']['goal']
): string[] => {
  
  const variants = [original];
  
  // Stage-based CTAs
  const stageVariants = {
    awareness: [
      'Descubre Cómo',
      'Ver Guía Gratuita',
      'Conocer Más',
      'Descargar PDF Gratis'
    ],
    consideration: [
      'Ver Caso de Estudio',
      'Agendar Demo Gratis',
      'Solicitar Propuesta',
      'Hablar con Experto'
    ],
    decision: [
      'Empezar Ahora',
      'Contratar Servicio',
      'Comprar Hoy',
      'Obtener Acceso Inmediato'
    ],
    retention: [
      'Seguir Leyendo',
      'Ver Más Recursos',
      'Acceder a Dashboard',
      'Contactar Soporte'
    ]
  };
  
  variants.push(...stageVariants[stage]);
  
  // Goal-based optimization
  if (goal === 'action') {
    variants.push(
      'Sí, Quiero Resultados',
      'Aplicar Ahora',
      'Obtener Mi Estrategia',
      'Recibir Plan Personalizado'
    );
  } else if (goal === 'trust') {
    variants.push(
      'Ver Testimonio Real',
      'Conocer Casos de Éxito',
      'Hablar con Experto',
      'Consulta Sin Compromiso'
    );
  }
  
  // Tone adjustments
  if (tone === 'urgent') {
    variants.push(
      `${original} (Solo Hoy)`,
      `URGENTE: ${original}`,
      `${original} - 24h Restantes`
    );
  }
  
  return variants.slice(0, 4); // Limit for A/B testing
};

// Value proposition variants
const generateValuePropVariants = (
  original: string,
  audience: string,
  personalization?: CopyPersonalization
): string[] => {
  
  const variants = [original];
  
  // Core value props for AQXION
  const coreValueProps = [
    'Sistema completo de generación de leads con IA que funciona 24/7',
    'De 0 a 50+ leads cualificados en 30 días con automatización',
    'Incrementa ventas 300% con nuestro stack de 5 servicios integrados',
    'El único sistema que combina Ads + Outreach + IA + Content + Copy'
  ];
  
  variants.push(...coreValueProps);
  
  // Business-specific value props
  if (personalization?.businessType) {
    const businessValueProps = getBusinessValueProps(personalization.businessType);
    variants.push(...businessValueProps);
  }
  
  // Experience-level adjustments
  if (personalization?.experience_level === 'beginner') {
    variants.push(
      'Solución simple para generar leads sin complicaciones técnicas',
      'Para dueños ocupados que quieren resultados sin aprender marketing',
      'Sistema probado que funciona incluso si nunca has hecho publicidad'
    );
  } else if (personalization?.experience_level === 'advanced') {
    variants.push(
      'Framework avanzado con métricas LTV, CAC y ROI optimizados',
      'Para empresas que buscan escalar con sistemas automatizados',
      'Solución enterprise con integración completa de herramientas'
    );
  }
  
  return variants.slice(0, 4);
};

// Subheadline variants
const generateSubheadlineVariants = (
  original: string,
  stage: CopyVariant['context']['stage'],
  _tone: CopyVariant['context']['tone']
): string[] => {
  
  const variants = [original];
  
  // Stage-specific subheadlines
  if (stage === 'awareness') {
    variants.push(
      'El problema que mantiene despiertos a los dueños de negocio',
      'La razón por la que tu competencia genera más leads que tú',
      'Por qué el 90% de los negocios fracasa en marketing digital'
    );
  } else if (stage === 'consideration') {
    variants.push(
      'Sistema paso a paso para automatizar tu crecimiento',
      'La metodología que usan las agencias más exitosas',
      'Combina tecnología IA con estrategias de conversión probadas'
    );
  } else if (stage === 'decision') {
    variants.push(
      'Casos reales de clientes que transformaron sus negocios',
      'Garantía de resultados respaldada por 300+ casos de éxito',
      'El único sistema que necesitas para escalar de forma predecible'
    );
  }
  
  return variants.slice(0, 3);
};

// Helper functions
const getUserHash = (): number => {
  if (typeof window === 'undefined') return 0;
  
  const userId = localStorage.getItem('aqxion_visitor_id') || 'anonymous';
  return userId.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
};

const trackCopyVariantView = (variantId: string, selectedVariant: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'copy_variant_view', {
      event_category: 'copy_optimization',
      event_label: `${variantId}_${selectedVariant}`,
      custom_parameter_1: variantId,
      custom_parameter_2: selectedVariant
    });
  }
};

const getCommonPainPoint = (businessType?: string): string => {
  const painPoints: Record<string, string> = {
    'restaurant': 'mesas vacías y pocos pedidos online',
    'ecommerce': 'tráfico que no convierte en ventas',
    'clinica': 'consultas canceladas y pocos pacientes nuevos',
    'gym': 'miembros que se dan de baja cada mes',
    'inmobiliaria': 'leads fríos que nunca compran',
    'consultoria': 'propuestas que no se cierran'
  };
  
  return painPoints[businessType || 'default'] || 'perder clientes potenciales todos los días';
};

const getAudienceLabel = (audience: string): string => {
  const labels: Record<string, string> = {
    'business_owners': 'Dueños de Negocio',
    'entrepreneurs': 'Emprendedores',
    'marketers': 'Marketers',
    'agencies': 'Agencias',
    'ecommerce': 'E-commerce'
  };
  
  return labels[audience] || 'Empresarios';
};

const getBusinessTypeHeadlines = (businessType: string): string[] => {
  const headlines: Record<string, string[]> = {
    'restaurant': [
      'Cómo Llenar tu Restaurante Todas las Noches',
      'De Mesas Vacías a Lista de Espera en 30 Días',
      'El Sistema que Usa [Restaurante Local] para Generar $50k Extra/Mes'
    ],
    'ecommerce': [
      'Cómo Escalar tu E-commerce de $10k a $100k/Mes',
      'El Framework de Automatización que Aumenta AOV 40%',
      'De Carritos Abandonados a Ventas Recurrentes'
    ],
    'clinica': [
      'Más Pacientes, Menos Trabajo: Automatiza tu Consulta',
      'Cómo Generar 50+ Consultas Nuevas Cada Mes',
      'El Sistema que Usan las Clínicas Más Exitosas'
    ]
  };
  
  return headlines[businessType] || [];
};

const getBusinessValueProps = (businessType: string): string[] => {
  const valueProps: Record<string, string[]> = {
    'restaurant': [
      'Llena tu restaurante con el sistema de reservas automatizado #1',
      'Genera pedidos online 24/7 con marketing que funciona mientras duermes',
      'De mesas vacías a lista de espera: sistema probado en 200+ restaurantes'
    ],
    'ecommerce': [
      'Automatiza todo tu embudo de ventas: de visitante a comprador recurrente',
      'Sistema de email marketing que genera 30% de ingresos adicionales',
      'Recupera carritos abandonados y aumenta AOV con IA personalizada'
    ],
    'clinica': [
      'Atrae pacientes de calidad con marketing ético y profesional',
      'Sistema automatizado de seguimiento que aumenta retención 60%',
      'Genera consultas nuevas sin violar regulaciones médicas'
    ]
  };
  
  return valueProps[businessType] || [];
};

// Smart copy selection based on performance
export const useSmartCopySelection = () => {
  const [selectedCopy, setSelectedCopy] = useState<Map<string, string>>(new Map());

  const selectBestPerformingCopy = useCallback((variants: CopyVariant[]) => {
    const bestVariant = variants.reduce((best, current) => {
      if (!best.performance || !current.performance) return best;
      
      // Prioritize conversion rate, then CTR
      const bestScore = (best.performance.cvr * 0.7) + (best.performance.ctr * 0.3);
      const currentScore = (current.performance.cvr * 0.7) + (current.performance.ctr * 0.3);
      
      return currentScore > bestScore ? current : best;
    });

    setSelectedCopy(prev => new Map(prev).set(bestVariant.id, bestVariant.original));
    return bestVariant.original;
  }, []);

  return {
    selectBestPerformingCopy,
    selectedCopy
  };
};
