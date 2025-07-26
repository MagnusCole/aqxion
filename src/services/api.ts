import type { FormData, User, BusinessMetrics } from '@/types';

// API Service para manejar todas las llamadas al backend
export class ApiService {
  private static baseURL = process.env.NEXT_PUBLIC_API_URL || '/api';

  static async submitContactForm(data: FormData): Promise<void> {
    const response = await fetch(`${this.baseURL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error al enviar formulario');
    }
  }

  static async submitOnboardingForm(data: FormData): Promise<void> {
    const response = await fetch(`${this.baseURL}/onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error al enviar datos de onboarding');
    }
  }

  static async getUserData(): Promise<User> {
    const response = await fetch(`${this.baseURL}/user`);
    
    if (!response.ok) {
      throw new Error('Error al obtener datos del usuario');
    }

    return response.json();
  }

  static async getBusinessMetrics(): Promise<BusinessMetrics> {
    const response = await fetch(`${this.baseURL}/metrics`);
    
    if (!response.ok) {
      throw new Error('Error al obtener métricas del negocio');
    }

    return response.json();
  }

  static async requestGuarantee(reason: string, description: string): Promise<void> {
    const response = await fetch(`${this.baseURL}/guarantee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reason, description }),
    });

    if (!response.ok) {
      throw new Error('Error al solicitar garantía');
    }
  }
}

// WhatsApp Service
export class WhatsAppService {
  private static phoneNumber = '+51999123456';

  static sendMessage(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  static sendQuickMessage(type: 'support' | 'info' | 'urgency'): void {
    const messages = {
      support: '¡Hola! Necesito ayuda con mi cuenta MyPerú 🙋‍♂️',
      info: '¡Hola! Quiero más información sobre MyPerú 📞',
      urgency: '¡Hola! Tengo una consulta urgente sobre mi negocio 🚨'
    };

    this.sendMessage(messages[type]);
  }
}

// Google Sheets Service (para formularios)
export class GoogleSheetsService {
  private static sheetsURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

  static async submitForm(formData: globalThis.FormData): Promise<void> {
    if (!this.sheetsURL) {
      throw new Error('URL de Google Sheets no configurada');
    }

    const response = await fetch(this.sheetsURL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al enviar datos a Google Sheets');
    }
  }
}
