// Configuración específica de Google Analytics para AQXION
export const GA_CONFIG = {
  // ID de Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TGD5LDTN',
  
  // Configuraciones por defecto para eventos
  defaultEventParams: {
    currency: 'USD',
    // Puedes agregar parámetros personalizados aquí
    business_type: 'marketing_digital',
    target_audience: 'negocios_locales'
  },

  // Configuración de Enhanced Ecommerce (si es necesario)
  ecommerce: {
    currency: 'USD',
    // Para tracking de servicios/productos como conversiones
    services: {
      'consulta_gratuita': {
        item_id: 'consulta-gratuita',
        item_name: 'Consulta Gratuita',
        category: 'Servicios',
        price: 0
      },
      'auditoria_completa': {
        item_id: 'auditoria-completa', 
        item_name: 'Auditoría Completa',
        category: 'Servicios',
        price: 297
      }
    }
  },

  // Eventos importantes para el negocio
  events: {
    // Conversiones principales
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    CALENDLY_CLICK: 'calendly_click',
    PHONE_CLICK: 'phone_click',
    EMAIL_CLICK: 'email_click',
    WHATSAPP_CLICK: 'whatsapp_click',
    
    // Engagement
    BLOG_POST_VIEW: 'blog_post_view',
    DOWNLOAD_LEAD_MAGNET: 'download_lead_magnet',
    VIDEO_PLAY: 'video_play',
    
    // Navegación
    SCROLL_DEEP: 'scroll_deep',
    TIME_ON_PAGE: 'time_on_page',
    
    // Interacciones sociales
    SOCIAL_SHARE: 'social_share',
    SOCIAL_CLICK: 'social_click'
  }
};

// Función para generar eventos personalizados de conversión
export const trackConversion = (conversionType: string, value?: number, additionalParams?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'conversion',
      conversion_type: conversionType,
      value: value || 0,
      ...GA_CONFIG.defaultEventParams,
      ...additionalParams
    });
  }
};

// Función para tracking avanzado de scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: GA_CONFIG.events.SCROLL_DEEP,
      scroll_depth: percentage,
      page_location: window.location.href
    });
  }
};

// Función para tracking de tiempo en página
export const trackTimeOnPage = (seconds: number) => {
  if (typeof window !== 'undefined' && window.dataLayer && seconds > 0) {
    window.dataLayer.push({
      event: GA_CONFIG.events.TIME_ON_PAGE,
      engagement_time_msec: seconds * 1000,
      page_location: window.location.href
    });
  }
};
