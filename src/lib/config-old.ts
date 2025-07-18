// lib/config.ts

/**
 * Configuración centralizada para URLs y variables de entorno
 */
export const config = {
  // URLs de servicios
  googleAppsScript: {
    url: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec',
    backupUrl: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_BACKUP_URL
  },

  // URLs externas
  calendly: {
    consultationUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/luis-aqxion/30min'
  },

  // Configuración de tracking
  analytics: {
    gtag: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    facebookPixel: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
  },

  // Configuración de notificaciones
  notifications: {
    email: process.env.NOTIFICATION_EMAIL || 'contacto@aqxion.com'
  },

  // URLs de landing pages
  landingPages: {
    thanks: '/landing/thanks',
    contact: '/contacto'
  },

  // Configuración de formularios
  forms: {
    contactForm: {
      source: 'contact-form',
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
      source: 'consultation-request',
      type: 'consultation'
    }
  },

  // Configuración de recursos
  resources: {
    metaAdsGuide: {
      name: 'Guía Meta Ads',
      downloadUrl: '/downloads/guia-meta-ads.pdf'
    }
  }
};

/**
 * Validar que todas las configuraciones necesarias estén presentes
 */
export const validateConfig = () => {
  const required = [
    'NEXT_PUBLIC_GOOGLE_SCRIPT_URL'
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn('⚠️ Variables de entorno faltantes:', missing);
  }

  return missing.length === 0;
};

/**
 * Obtener configuración de desarrollo
 */
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

/**
 * Helpers para URLs
 */
export const getCalendlyUrl = () => config.calendly.consultationUrl;
export const getGoogleScriptUrl = () => config.googleAppsScript.url;
export const getThanksPageUrl = () => config.landingPages.thanks;
