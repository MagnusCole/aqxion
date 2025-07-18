// LLM-OPTIMIZED: Centralized configuration with IA theme and strict typing
/**
 * Configuration management for AQXION IA automation platform
 * Includes environment validation and type safety
 */

export interface GoogleAppsScriptConfig {
  readonly url: string;
  readonly backupUrl?: string;
}

export interface CalendlyConfig {
  readonly consultationUrl: string;
}

export interface AnalyticsConfig {
  readonly gtag?: string;
  readonly facebookPixel?: string;
  readonly gtmId?: string;
}

export interface NotificationConfig {
  readonly email: string;
}

export interface LandingPagesConfig {
  readonly thanks: string;
  readonly contact: string;
  readonly iaDemo: string;
}

export interface FormConfig {
  readonly source: string;
  readonly type: string;
}

export interface FormsConfig {
  readonly contactForm: FormConfig;
  readonly newsletter: FormConfig;
  readonly leadMagnet: FormConfig;
  readonly landingPage: FormConfig;
  readonly consultation: FormConfig;
  readonly iaAutomation: FormConfig;
}

export interface ResourceConfig {
  readonly name: string;
  readonly downloadUrl: string;
}

export interface ResourcesConfig {
  readonly metaAdsGuide: ResourceConfig;
  readonly iaAutomationGuide: ResourceConfig;
  readonly clientAcquisitionBlueprint: ResourceConfig;
}

export interface AppConfig {
  readonly googleAppsScript: GoogleAppsScriptConfig;
  readonly calendly: CalendlyConfig;
  readonly analytics: AnalyticsConfig;
  readonly notifications: NotificationConfig;
  readonly landingPages: LandingPagesConfig;
  readonly forms: FormsConfig;
  readonly resources: ResourcesConfig;
}

/**
 * IA-optimized configuration with enhanced features
 */
export const config: AppConfig = {
  // Google Apps Script integration
  googleAppsScript: {
    url: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec',
    backupUrl: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_BACKUP_URL
  },

  // External service URLs
  calendly: {
    consultationUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/luis-aqxion/30min'
  },

  // Analytics and tracking configuration
  analytics: {
    gtag: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    facebookPixel: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    gtmId: process.env.NEXT_PUBLIC_GTM_ID
  },

  // Notification settings
  notifications: {
    email: process.env.NOTIFICATION_EMAIL || 'contacto@aqxion.com'
  },

  // Landing pages and routing
  landingPages: {
    thanks: '/landing/thanks',
    contact: '/contacto',
    iaDemo: '/demo-ia'
  },

  // Form configurations with IA context
  forms: {
    contactForm: {
      source: 'contact-form-ia',
      type: 'contact'
    },
    newsletter: {
      source: 'blog-newsletter',
      type: 'newsletter'
    },
    leadMagnet: {
      source: 'lead-magnet',
      type: 'lead-magnet'
    },
    landingPage: {
      source: 'landing-page',
      type: 'lead-magnet'
    },
    consultation: {
      source: 'consultation-request-ia',
      type: 'consultation'
    },
    iaAutomation: {
      source: 'ia-automation-request',
      type: 'ia-automation'
    }
  },

  // Resource downloads with IA focus
  resources: {
    metaAdsGuide: {
      name: 'Guía Meta Ads',
      downloadUrl: '/downloads/guia-meta-ads.pdf'
    },
    iaAutomationGuide: {
      name: 'Guía de Automatización IA',
      downloadUrl: '/downloads/guia-automatizacion-ia.pdf'
    },
    clientAcquisitionBlueprint: {
      name: 'Blueprint de Adquisición de Clientes IA',
      downloadUrl: '/downloads/blueprint-adquisicion-clientes-ia.pdf'
    }
  }
};

/**
 * Environment validation with detailed error reporting
 */
export const validateConfig = (): { isValid: boolean; missing: string[]; warnings: string[] } => {
  // Durante el build, no forzamos variables requeridas ya que tienen valores por defecto
  const required: string[] = [];

  const recommended = [
    'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    'NEXT_PUBLIC_GTM_ID',
    'NEXT_PUBLIC_CALENDLY_URL',
    'NEXT_PUBLIC_GOOGLE_SCRIPT_URL'
  ];

  const missing = required.filter(key => !process.env[key]);
  const warnings = recommended.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Required environment variables missing:', missing);
  }

  if (warnings.length > 0 && isDevelopment) {
    console.warn('⚠️  Recommended environment variables missing:', warnings);
  }

  return {
    isValid: missing.length === 0,
    missing,
    warnings
  };
};

/**
 * Environment detection utilities
 */
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
export const isStaging = process.env.VERCEL_ENV === 'preview';

/**
 * Type-safe configuration helpers
 */
export const getCalendlyUrl = (): string => config.calendly.consultationUrl;
export const getGoogleScriptUrl = (): string => config.googleAppsScript.url;
export const getThanksPageUrl = (): string => config.landingPages.thanks;
export const getContactPageUrl = (): string => config.landingPages.contact;
export const getIADemoUrl = (): string => config.landingPages.iaDemo;

/**
 * Analytics helpers
 */
export const getGTagId = (): string | undefined => config.analytics.gtag;
export const getGTMId = (): string | undefined => config.analytics.gtmId;
export const getFacebookPixelId = (): string | undefined => config.analytics.facebookPixel;

/**
 * Resource helpers
 */
export const getResourceDownloadUrl = (resourceKey: keyof ResourcesConfig): string => {
  return config.resources[resourceKey].downloadUrl;
};

/**
 * Form configuration helpers
 */
export const getFormConfig = (formKey: keyof FormsConfig): FormConfig => {
  return config.forms[formKey];
};

/**
 * Initialize configuration validation on module load
 */
if (typeof window === 'undefined' && isDevelopment) {
  // Server-side validation solo en desarrollo
  const validation = validateConfig();
  if (!validation.isValid) {
    console.warn(`Configuration validation warnings: ${validation.missing.join(', ')}`);
  }
}
