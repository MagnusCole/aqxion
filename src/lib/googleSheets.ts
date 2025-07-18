// lib/googleSheets.ts
import { config, isDevelopment } from './config';
export interface FormData {
  name?: string;
  nombre?: string;
  apellido?: string;
  lastname?: string;
  email: string;
  phone?: string;
  telefono?: string;
  business?: string;
  negocio?: string;
  industria?: string;
  industry?: string;
  message?: string;
  mensaje?: string;
  source?: string;
  fuente?: string;
  type?: string;
  tipo?: string;
  userAgent?: string;
}

export interface GoogleSheetsResponse {
  success: boolean;
  message?: string;
  error?: string;
  timestamp?: string;
}

/**
 * Servicio centralizado para enviar datos a Google Sheets
 * Maneja todas las capturas de leads del sitio web
 */
class GoogleSheetsService {
  private readonly scriptUrl = config.googleAppsScript.url;

  /**
   * Envía datos del formulario a Google Sheets
   */
  async submitFormData(data: FormData): Promise<GoogleSheetsResponse> {
    try {
      // Enriquecer datos con información adicional
      const enrichedData = {
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
        source: data.source || data.fuente || 'website',
        type: data.type || data.tipo || 'contact'
      };

      if (isDevelopment) {
        // LLM-OPTIMIZED: Development-only logging with warn instead of log
        console.warn('📤 Enviando datos a Google Sheets (DEV):', enrichedData);
      }

      // Crear una promesa con timeout
      const fetchWithTimeout = Promise.race([
        fetch(this.scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Importante: para evitar problemas de CORS con Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(enrichedData)
        }),
        new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error('Timeout después de 10 segundos')), 10000)
        )
      ]);

      const response = await fetchWithTimeout;

      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.log('📥 Respuesta del servidor:', response.status, response.statusText);
      }

      // Con mode: 'no-cors', no podemos leer la respuesta
      // Pero sabemos que el script funciona (lo probamos con PowerShell)
      // Así que asumimos éxito si no hay error en el fetch
      const result: GoogleSheetsResponse = {
        success: true,
        message: 'Datos enviados exitosamente a Google Sheets',
        timestamp: new Date().toISOString()
      };

      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.log('✅ Asumiendo éxito con no-cors mode:', result);
      }

      return result;
      
    } catch (error) {
      console.error('❌ Error enviando datos a Google Sheets:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido'
      };
    }
  }

  /**
   * Formulario de contacto principal
   */
  async submitContactForm(data: {
    name: string;
    business: string;
    email: string;
    phone: string;
    industria: string;
    message: string;
  }): Promise<GoogleSheetsResponse> {
    return this.submitFormData({
      ...data,
      source: 'contact-form',
      type: 'contact'
    });
  }

  /**
   * Suscripción al newsletter
   */
  async submitNewsletterSubscription(email: string, source: string = 'blog-newsletter'): Promise<GoogleSheetsResponse> {
    return this.submitFormData({
      name: 'Suscriptor Newsletter',
      email,
      source,
      type: 'newsletter',
      message: 'Se suscribió al newsletter del blog'
    });
  }

  /**
   * Descarga de lead magnet
   */
  async submitLeadMagnetDownload(data: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    industria: string;
    resourceName?: string;
  }): Promise<GoogleSheetsResponse> {
    return this.submitFormData({
      name: data.nombre,
      apellido: data.apellido,
      email: data.email,
      phone: data.telefono,
      industria: data.industria,
      source: 'lead-magnet',
      type: 'lead-magnet',
      message: `Descargó recurso: ${data.resourceName || 'Lead Magnet'}`
    });
  }

  /**
   * Descarga de guía de landing page
   */
  async submitLandingPageLead(data: {
    name: string;
    email: string;
    phone?: string;
    business?: string;
    leadMagnet?: string;
  }): Promise<GoogleSheetsResponse> {
    return this.submitFormData({
      ...data,
      source: 'landing-page',
      type: 'lead-magnet',
      message: `Descargó: ${data.leadMagnet || 'Guía Meta Ads'}`
    });
  }

  /**
   * Agendar consulta
   */
  async submitConsultationRequest(data: {
    name: string;
    email: string;
    phone: string;
    business?: string;
    message?: string;
  }): Promise<GoogleSheetsResponse> {
    return this.submitFormData({
      ...data,
      source: 'consultation-request',
      type: 'consultation',
      message: data.message || 'Solicitó agendar consulta gratuita'
    });
  }
}

// Exportar una instancia singleton
export const googleSheetsService = new GoogleSheetsService();

// Función helper para tracking de eventos
export const trackFormSubmission = (formType: string, success: boolean, additionalData?: Record<string, unknown>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      value: success ? 1 : 0,
      ...additionalData
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    if (success) {
      window.fbq('track', 'Lead', {
        content_name: formType,
        content_category: 'form_submission'
      });
    }
  }

  // Console log para desarrollo
  if (isDevelopment) {
    // eslint-disable-next-line no-console
    console.log(`📊 Form Submission: ${formType}`, { success, ...additionalData });
  }
};
