import { NextRequest, NextResponse } from 'next/server';
import { getUserFromSession } from '@/lib/auth-api';

// WhatsApp Business API para soporte
export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    
    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Implementar WhatsApp Business API
    // Por ahora devolvemos info mock del grupo de soporte
    const mockWhatsAppInfo = {
      supportGroup: {
        name: "AQXION - Soporte Clientes",
        members: 23,
        status: "active",
        joinLink: "https://chat.whatsapp.com/MOCK_GROUP_INVITE",
        lastActivity: "2025-01-20T14:30:00Z"
      },
      recentMessages: [
        {
          id: "msg_1",
          sender: "Carlos (Admin)",
          message: "¡Buen día! Recuerden que hoy tenemos el workshop de Google Ads a las 6pm 🚀",
          timestamp: "2025-01-20T09:00:00Z",
          type: "announcement"
        },
        {
          id: "msg_2", 
          sender: "María José",
          message: "Gracias por la ayuda con Google My Business, ya tengo mi primera reseña ⭐",
          timestamp: "2025-01-19T16:45:00Z",
          type: "update"
        }
      ],
      supportStatus: {
        responseTime: "< 2 horas",
        availability: "Lun-Vie 9AM-6PM",
        languages: ["Español"],
        escalationNumber: "+51 999 999 999"
      },
      quickActions: [
        {
          label: "Unirse al grupo",
          action: "join_group",
          url: "https://chat.whatsapp.com/MOCK_GROUP_INVITE"
        },
        {
          label: "Contacto directo",
          action: "direct_contact", 
          url: "https://wa.me/51999999999"
        },
        {
          label: "Reportar problema",
          action: "report_issue",
          url: "/portal/soporte?type=technical"
        }
      ]
    };

    return NextResponse.json(mockWhatsAppInfo);
  } catch (error) {
    console.error('Error fetching WhatsApp info:', error);
    return NextResponse.json(
      { error: 'Error fetching WhatsApp info' },
      { status: 500 }
    );
  }
}

// Enviar mensaje de soporte
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    
    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { message, urgency = 'normal', category } = body;

    // TODO: Enviar via WhatsApp Business API
    console.log(`Support message from ${user.email}: ${message}`);

    // Simular lógica de routing
    let responseTime = "2-4 horas";
    let assignedAgent = "Equipo AQXION";

    if (urgency === 'urgent') {
      responseTime = "< 30 minutos";
      assignedAgent = "Carlos (Admin)";
    }

    return NextResponse.json({ 
      success: true, 
      ticketId: `WA_${Date.now()}`,
      estimatedResponse: responseTime,
      assignedTo: assignedAgent,
      message: 'Tu mensaje ha sido enviado. Recibirás respuesta por WhatsApp.'
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return NextResponse.json(
      { error: 'Error sending message' },
      { status: 500 }
    );
  }
}
