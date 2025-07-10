// Tipos para Google Analytics 4 / Google Tag Manager
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

// Función para rastrear eventos de página vista
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
    });
  }
};

// Función para rastrear eventos personalizados
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos para el negocio
export const trackContactFormSubmit = (formType: string) => {
  trackEvent('form_submit', 'Contact', formType);
};

export const trackCalendlyClick = () => {
  trackEvent('click', 'Calendly', 'Schedule Meeting');
};

export const trackBlogPostView = (postTitle: string) => {
  trackEvent('page_view', 'Blog', postTitle);
};

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'File', fileName);
};

export const trackSocialClick = (platform: string) => {
  trackEvent('click', 'Social', platform);
};

export const trackPhoneClick = () => {
  trackEvent('click', 'Contact', 'Phone');
};

export const trackEmailClick = () => {
  trackEvent('click', 'Contact', 'Email');
};

export const trackWhatsAppClick = () => {
  trackEvent('click', 'Contact', 'WhatsApp');
};
