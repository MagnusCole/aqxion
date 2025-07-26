import { NextRequest, NextResponse } from 'next/server';

// API para WhatsApp Automation con Google Apps Script
export async function GET(request: NextRequest) {
  try {
    // En producción: Conectar con Google Apps Script que maneja WhatsApp
    // const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    // const response = await fetch(`${scriptUrl}?action=getMessages`);
    
    // Datos simulados para DEMO
    const messages = [
      {
        id: '1',
        from: '+51 999 123 456',
        fromName: 'María González',
        message: 'Hola, me interesa saber sobre sus servicios digitales',
        timestamp: '2025-01-27 14:30',
        status: 'automated',
        template: 'Bienvenida Automática',
        response: '¡Hola! 👋 Gracias por contactarnos. Somos MyPerú y te ayudamos a crear tu presencia digital completa por solo S/.1,500.\n\n¿Te interesa saber más sobre nuestros servicios?'
      },
      {
        id: '2',
        from: '+51 987 654 321',
        fromName: 'Carlos Mendoza',
        message: '¿Cuánto cuesta el paquete completo?',
        timestamp: '2025-01-27 13:15',
        status: 'automated',
        template: 'Consulta de Precios',
        response: '💰 Nuestro paquete completo incluye:\n✅ Sitio web profesional\n✅ WhatsApp Business\n✅ Google My Business\n✅ 90 días de soporte\n\nTodo por S/.1,500 (pago único, sin mensualidades)\n\n¿Te gustaría agendar una llamada para explicarte los detalles?'
      },
      {
        id: '3',
        from: '+51 999 888 777',
        fromName: 'Ana Rodríguez',
        message: 'Necesito ayuda con mi negocio online urgente',
        timestamp: '2025-01-27 12:45',
        status: 'pending'
      }
    ];

    const templates = [
      {
        id: '1',
        name: 'Bienvenida Automática',
        trigger: 'palabra_clave: hola|buenos dias|buenas tardes|info|informacion',
        message: '¡Hola! 👋 Gracias por contactarnos. Somos MyPerú y te ayudamos a crear tu presencia digital completa por solo S/.1,500.\n\n¿Te interesa saber más sobre nuestros servicios?',
        active: true,
        category: 'bienvenida',
        usage: 45
      },
      {
        id: '2',
        name: 'Consulta de Precios',
        trigger: 'palabra_clave: precio|costo|cuanto|inversión|pagar',
        message: '💰 Nuestro paquete completo incluye:\n✅ Sitio web profesional\n✅ WhatsApp Business\n✅ Google My Business\n✅ 90 días de soporte\n\nTodo por S/.1,500 (pago único, sin mensualidades)\n\n¿Te gustaría agendar una llamada para explicarte los detalles?',
        active: true,
        category: 'consulta',
        usage: 23
      },
      {
        id: '3',
        name: 'Seguimiento Post-Consulta',
        trigger: 'programado: 24_horas_sin_respuesta',
        message: 'Hola 👋 Vi que te interesaron nuestros servicios digitales.\n\n¿Tienes alguna pregunta específica? Estoy aquí para ayudarte a tomar la mejor decisión para tu negocio.\n\nRecuerda que incluimos 90 días de soporte personal 💪',
        active: true,
        category: 'seguimiento',
        usage: 12
      },
      {
        id: '4',
        name: 'Promoción Fin de Mes',
        trigger: 'manual',
        message: '🎉 ¡Últimos días de enero!\n\nSi contratas nuestro paquete digital antes del 31 de enero, incluimos GRATIS:\n\n🎁 Configuración de Meta Ads\n🎁 3 posts diseñados para redes\n🎁 Optimización extra de Google My Business\n\nMantén el precio: S/.1,500 + estos bonos GRATIS\n\n¿Conversamos hoy?',
        active: false,
        category: 'promocion',
        usage: 0
      }
    ];

    const stats = {
      totalMensajes: messages.length,
      automatizados: messages.filter(m => m.status === 'automated').length,
      pendientes: messages.filter(m => m.status === 'pending').length,
      respondidos: messages.filter(m => m.status === 'replied').length,
      plantillasActivas: templates.filter(t => t.active).length,
      tasaAutomatizacion: Math.round((messages.filter(m => m.status === 'automated').length / messages.length) * 100)
    };

    return NextResponse.json({
      success: true,
      messages,
      templates,
      stats,
      lastSync: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching WhatsApp data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch WhatsApp data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'send_message':
        // En producción: Enviar mensaje via WhatsApp Business API
        // const whatsappResponse = await sendWhatsAppMessage(data.to, data.message);
        
        return NextResponse.json({
          success: true,
          message: 'Mensaje enviado exitosamente',
          messageId: Date.now().toString()
        });

      case 'create_template':
        // En producción: Guardar plantilla en Google Sheets
        const newTemplate = {
          id: Date.now().toString(),
          ...data,
          usage: 0,
          active: true
        };

        return NextResponse.json({
          success: true,
          message: 'Plantilla creada exitosamente',
          template: newTemplate
        });

      case 'toggle_template':
        // En producción: Actualizar estado en Google Sheets
        return NextResponse.json({
          success: true,
          message: 'Plantilla actualizada exitosamente'
        });

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('Error in WhatsApp API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process WhatsApp action' },
      { status: 500 }
    );
  }
}

// Función para configurar el webhook de WhatsApp (llamada desde Google Apps Script)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, message, timestamp } = body;

    // Procesar mensaje entrante y decidir si automatizar respuesta
    // Esta función sería llamada por Google Apps Script cuando llega un mensaje

    // Buscar plantilla que coincida
    const templates = [
      {
        trigger: 'hola|buenos dias|buenas tardes|info|informacion',
        response: '¡Hola! 👋 Gracias por contactarnos. Somos MyPerú y te ayudamos a crear tu presencia digital completa por solo S/.1,500.\n\n¿Te interesa saber más sobre nuestros servicios?'
      },
      {
        trigger: 'precio|costo|cuanto|inversión|pagar',
        response: '💰 Nuestro paquete completo incluye:\n✅ Sitio web profesional\n✅ WhatsApp Business\n✅ Google My Business\n✅ 90 días de soporte\n\nTodo por S/.1,500 (pago único, sin mensualidades)\n\n¿Te gustaría agendar una llamada para explicarte los detalles?'
      }
    ];

    const matchedTemplate = templates.find(t => 
      new RegExp(t.trigger, 'i').test(message.toLowerCase())
    );

    if (matchedTemplate) {
      // En producción: Enviar respuesta automática
      // await sendWhatsAppMessage(phone, matchedTemplate.response);
      
      return NextResponse.json({
        success: true,
        automated: true,
        response: matchedTemplate.response
      });
    } else {
      // Marcar como pendiente para respuesta manual
      return NextResponse.json({
        success: true,
        automated: false,
        message: 'Mensaje marcado para respuesta manual'
      });
    }

  } catch (error) {
    console.error('Error processing WhatsApp webhook:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}
