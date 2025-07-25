import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// Google Sheets API para métricas del cliente
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Implementar Google Sheets API
    // Por ahora devolvemos datos mock que luego conectarás a tu Google Sheet
    const mockMetrics = {
      websiteVisits: 150,
      whatsappLeads: 12,
      conversionRate: 8.0,
      businessProfile: {
        completedSteps: 4,
        totalSteps: 7,
        nextAction: "Configurar Google My Business"
      },
      recentActivity: [
        {
          date: "2025-01-20",
          action: "Website visitado",
          details: "5 nuevas visitas desde Google"
        },
        {
          date: "2025-01-19", 
          action: "WhatsApp lead",
          details: "Cliente preguntó por servicios"
        }
      ],
      upcomingSessions: [
        {
          date: "2025-01-25",
          time: "15:00",
          type: "Sesión estratégica 1:1",
          status: "confirmada"
        }
      ]
    };

    return NextResponse.json(mockMetrics);
  } catch (error) {
    console.error('Error fetching Google metrics:', error);
    return NextResponse.json(
      { error: 'Error fetching metrics' },
      { status: 500 }
    );
  }
}

// Actualizar progreso del cliente en Google Sheets
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { metric, value, timestamp } = body;

    // TODO: Enviar a Google Sheets API
    console.log(`Updating metric ${metric} to ${value} at ${timestamp}`);

    return NextResponse.json({ 
      success: true, 
      message: 'Metric updated successfully' 
    });
  } catch (error) {
    console.error('Error updating Google metrics:', error);
    return NextResponse.json(
      { error: 'Error updating metrics' },
      { status: 500 }
    );
  }
}
