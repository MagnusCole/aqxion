import { NextRequest, NextResponse } from 'next/server';
import { getUserFromSession } from '@/lib/auth-api';

// Google Calendar API para sesiones 1:1
export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    
    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Implementar Google Calendar API
    // Por ahora devolvemos eventos mock que luego conectarás a tu Google Calendar
    const mockCalendar = {
      upcomingSessions: [
        {
          id: "session_1",
          title: "Sesión Estratégica 1:1",
          date: "2025-01-25",
          time: "15:00",
          duration: 60,
          type: "strategy",
          status: "confirmed",
          meetingLink: "https://meet.google.com/abc-defg-hij",
          description: "Revisión de progreso y estrategia para próximos 30 días"
        },
        {
          id: "session_2", 
          title: "Workshop Grupal: Google Ads",
          date: "2025-01-30",
          time: "18:00", 
          duration: 90,
          type: "group_workshop",
          status: "available",
          meetingLink: "https://meet.google.com/xyz-uvwx-abc",
          description: "Workshop para optimizar campañas de Google Ads"
        }
      ],
      availableSlots: [
        {
          date: "2025-01-27",
          slots: ["10:00", "14:00", "16:00"]
        },
        {
          date: "2025-01-28", 
          slots: ["09:00", "11:00", "15:00"]
        }
      ],
      pastSessions: [
        {
          id: "past_1",
          title: "Onboarding inicial",
          date: "2025-01-15",
          time: "16:00",
          duration: 45,
          status: "completed",
          notes: "Cliente configuró Google My Business, próximo paso: optimizar website"
        }
      ]
    };

    return NextResponse.json(mockCalendar);
  } catch (error) {
    console.error('Error fetching Google Calendar:', error);
    return NextResponse.json(
      { error: 'Error fetching calendar' },
      { status: 500 }
    );
  }
}

// Bookear nueva sesión
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    
    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { date, time, sessionType, notes } = body;

    // TODO: Crear evento en Google Calendar via API
    console.log(`New session booked: ${date} ${time} - ${sessionType}`);

    // Mock response - reemplazar con Google Calendar API
    const newSession = {
      id: `session_${Date.now()}`,
      title: sessionType === 'strategy' ? 'Sesión Estratégica 1:1' : 'Consultoría Específica',
      date,
      time,
      duration: 60,
      status: 'confirmed',
      meetingLink: 'https://meet.google.com/new-meeting-link',
      clientNotes: notes
    };

    return NextResponse.json({ 
      success: true, 
      session: newSession,
      message: 'Sesión agendada correctamente - recibirás confirmación por email'
    });
  } catch (error) {
    console.error('Error booking session:', error);
    return NextResponse.json(
      { error: 'Error booking session' },
      { status: 500 }
    );
  }
}
