// Configuración para Google Analytics 4 via Google Tag Manager
// Este archivo documenta cómo configurar GA4 en GTM

export const GA4_CONFIG = {
  // Tu Measurement ID de Google Analytics 4
  MEASUREMENT_ID: 'G-WKYR96FC8K',
  
  // Configuración para Google Tag Manager
  GTM_SETUP: {
    // Variable en GTM: GA4 Configuration
    variable_name: 'GA4 Configuration',
    variable_type: 'Constant',
    value: 'G-WKYR96FC8K',
    
    // Tag principal en GTM
    tag_name: 'GA4 - Configuration',
    tag_type: 'Google Analytics: GA4 Configuration',
    measurement_id: '{{GA4 Configuration}}',
    trigger: 'All Pages'
  },
  
  // Eventos que se están enviando desde el código
  EVENTS: {
    PAGE_VIEW: 'page_view',           // Automático
    CONTACT_FORM: 'contact_form_submit',
    CALENDLY_CLICK: 'calendly_click',
    SCROLL_DEEP: 'scroll_deep',
    EMAIL_CLICK: 'email_click',
    PHONE_CLICK: 'phone_click',
    WHATSAPP_CLICK: 'whatsapp_click'
  }
};

// Pasos para configurar en Google Tag Manager:
/*
1. Ve a tagmanager.google.com
2. Selecciona tu contenedor GTM-TGD5LDTN
3. Crea Variable:
   - Nombre: GA4 Configuration
   - Tipo: Constante
   - Valor: G-WKYR96FC8K

4. Crea Tag:
   - Nombre: GA4 - Configuration
   - Tipo: Google Analytics: GA4 Configuration
   - Measurement ID: {{GA4 Configuration}}
   - Activador: All Pages

5. Publica los cambios

6. Verifica en Google Analytics 4 > Informes > Tiempo real
*/
