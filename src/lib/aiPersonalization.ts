// LLM-OPTIMIZED: AI-powered UX personalization for AQXION growth agency
// Auto-improved UX/Design pillar - Cycle 1

import { useEffect, useState } from 'react';

export interface UserProfile {
  businessType?: string;
  experience?: 'beginner' | 'intermediate' | 'advanced';
  primaryGoal?: 'leads' | 'sales' | 'automation' | 'growth';
  preferredContent?: 'visual' | 'text' | 'interactive';
  visitCount?: number;
  lastVisit?: string;
}

export interface PersonalizationContext {
  hero: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  services: {
    priority: string[];
    emphasis: string;
  };
  content: {
    level: 'basic' | 'detailed' | 'technical';
    format: 'visual' | 'text' | 'mixed';
  };
}

// AI-powered UX personalization hook for 2025
export const useAIPersonalization = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [personalization, setPersonalization] = useState<PersonalizationContext | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user profile from localStorage or cookies
    const loadUserProfile = () => {
      try {
        const stored = localStorage.getItem('aqxion_user_profile');
        const profile = stored ? JSON.parse(stored) : {};
        
        // Increment visit count
        profile.visitCount = (profile.visitCount || 0) + 1;
        profile.lastVisit = new Date().toISOString();
        
        setUserProfile(profile);
        localStorage.setItem('aqxion_user_profile', JSON.stringify(profile));
        
        // Generate personalization context
        const context = generatePersonalizationContext(profile);
        setPersonalization(context);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading user profile:', error);
        setIsLoading(false);
      }
    };

    loadUserProfile();
  }, []);

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    const updated = { ...userProfile, ...updates };
    setUserProfile(updated);
    localStorage.setItem('aqxion_user_profile', JSON.stringify(updated));
    
    // Regenerate personalization
    const context = generatePersonalizationContext(updated);
    setPersonalization(context);
  };

  return {
    userProfile,
    personalization,
    isLoading,
    updateUserProfile
  };
};

// AI logic for generating personalization context
const generatePersonalizationContext = (profile: UserProfile): PersonalizationContext => {
  // Default context
  const context: PersonalizationContext = {
    hero: {
      headline: "Automatiza tu Crecimiento con IA",
      subtitle: "Genera leads, aumenta ventas y escala sin complicaciones",
      cta: "Empezar Ahora"
    },
    services: {
      priority: ['ads', 'outreach', 'automation', 'content', 'copy'],
      emphasis: 'balanced'
    },
    content: {
      level: 'detailed',
      format: 'mixed'
    }
  };

  // Personalize based on business type
  if (profile.businessType) {
    switch (profile.businessType) {
      case 'restaurant':
        context.hero.headline = "Más Clientes para tu Restaurante";
        context.hero.subtitle = "Sistema automatizado para generar reservas y pedidos con ads locales y outreach";
        context.services.priority = ['ads', 'automation', 'content', 'outreach', 'copy'];
        break;
      case 'clinica':
        context.hero.headline = "Pacientes Nuevos Cada Semana";
        context.hero.subtitle = "Atrae pacientes con marketing automatizado y IA para consultas médicas";
        context.services.priority = ['outreach', 'ads', 'automation', 'copy', 'content'];
        break;
      case 'ecommerce':
        context.hero.headline = "Escala tu E-commerce al Siguiente Nivel";
        context.hero.subtitle = "Automatiza ventas, optimiza conversión y genera tráfico cualificado";
        context.services.priority = ['automation', 'ads', 'copy', 'content', 'outreach'];
        break;
    }
  }

  // Personalize based on experience level
  if (profile.experience) {
    switch (profile.experience) {
      case 'beginner':
        context.content.level = 'basic';
        context.hero.cta = "Guía Gratuita";
        break;
      case 'advanced':
        context.content.level = 'technical';
        context.hero.cta = "Consulta Estratégica";
        context.services.emphasis = 'advanced';
        break;
    }
  }

  // Personalize based on visit count (returning users)
  if (profile.visitCount && profile.visitCount > 1) {
    context.hero.headline = "Bienvenido de Vuelta";
    context.hero.subtitle = "¿Listo para implementar tu estrategia de crecimiento automatizado?";
    context.hero.cta = "Continuar Donde Lo Dejaste";
  }

  // Personalize based on primary goal
  if (profile.primaryGoal) {
    switch (profile.primaryGoal) {
      case 'leads':
        context.services.emphasis = 'lead_generation';
        context.hero.subtitle = "Genera 50+ leads cualificados cada mes con automatización IA";
        break;
      case 'sales':
        context.services.emphasis = 'conversion';
        context.hero.subtitle = "Convierte más leads en ventas con outreach y copy automatizado";
        break;
      case 'automation':
        context.services.emphasis = 'efficiency';
        context.hero.subtitle = "Automatiza todo tu proceso de marketing y ventas con IA";
        break;
    }
  }

  return context;
};

// Advanced UX features for 2025
export const useAdvancedUX = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState('medium');

  useEffect(() => {
    // Detect user preferences
    const detectPreferences = () => {
      // Dark mode preference
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeQuery.matches);

      // Reduced motion preference
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(motionQuery.matches);

      // Load saved preferences
      const savedFontSize = localStorage.getItem('aqxion_font_size');
      if (savedFontSize) {
        setFontSize(savedFontSize);
      }
    };

    detectPreferences();
  }, []);

  const updateFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('aqxion_font_size', size);
    
    // Apply to document root
    const root = document.documentElement;
    root.style.setProperty('--user-font-scale', 
      size === 'small' ? '0.9' : size === 'large' ? '1.2' : '1.0'
    );
  };

  return {
    isDarkMode,
    reducedMotion,
    fontSize,
    updateFontSize
  };
};

// Immersive scroll animations for premium UX
export const useImmersiveScrollEffects = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;
        
        // Parallax effect for hero backgrounds
        if (element.classList.contains('parallax-bg')) {
          const yPos = -(window.scrollY * 0.5);
          element.style.transform = `translateY(${yPos}px)`;
        }
        
        // Fade-in effect for content sections
        if (element.classList.contains('fade-in-on-scroll')) {
          element.style.opacity = ratio.toString();
          element.style.transform = `translateY(${(1 - ratio) * 30}px)`;
        }
        
        // Scale effect for cards
        if (element.classList.contains('scale-on-scroll')) {
          const scale = 0.9 + (ratio * 0.1);
          element.style.transform = `scale(${scale})`;
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.parallax-bg, .fade-in-on-scroll, .scale-on-scroll'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// AI-powered content adaptation
export const useContentAdaptation = (userProfile: UserProfile) => {
  const adaptContent = (baseContent: string, type: 'headline' | 'body' | 'cta') => {
    if (!userProfile.experience || userProfile.experience === 'intermediate') {
      return baseContent;
    }

    const adaptations = {
      beginner: {
        headline: (text: string) => text.replace(/automatización/gi, 'soluciones fáciles'),
        body: (text: string) => text.replace(/ROI/gi, 'resultados'),
        cta: (text: string) => text.replace(/Consulta/gi, 'Información gratuita')
      },
      advanced: {
        headline: (text: string) => text.replace(/fácil/gi, 'estratégico'),
        body: (text: string) => text + ' con métricas avanzadas y KPIs personalizados',
        cta: (text: string) => text.replace(/Empezar/gi, 'Implementar')
      }
    };
    
    const adapter = adaptations[userProfile.experience];
    return adapter?.[type]?.(baseContent) || baseContent;
  };

  return { adaptContent };
};
