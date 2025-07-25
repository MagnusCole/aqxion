import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { getServerUser } from '@/lib/supabase-server';

// 📊 GET: Obtener métricas del usuario
export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación
    const user = await getServerUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Obtener métricas desde la tabla metrics
    const { data: metrics, error: metricsError } = await supabaseAdmin
      .from('metrics')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1);

    // Obtener conteos de tablas relacionadas
    const [contactsResult, tasksResult, activitiesResult] = await Promise.all([
      supabaseAdmin.from('contacts').select('id', { count: 'exact' }).eq('user_id', user.id),
      supabaseAdmin.from('tasks').select('id, status', { count: 'exact' }).eq('user_id', user.id),
      supabaseAdmin.from('activities').select('id, created_at').eq('user_id', user.id).order('created_at', { ascending: false }).limit(1)
    ]);

    // Calcular métricas en tiempo real
    const totalContacts = contactsResult.count || 0;
    const totalTasks = tasksResult.count || 0;
    const completedTasks = tasksResult.data?.filter(task => task.status === 'completed').length || 0;
    const lastActivity = activitiesResult.data?.[0]?.created_at || new Date().toISOString();

    // Si no hay métricas previas, crear estructura inicial
    const currentMetrics = metrics?.[0] || {};

    const realMetrics = {
      // Contactos reales de la tabla
      totalContacts,
      newContactsToday: 0, // TODO: Calcular por fecha
      newContactsThisWeek: 0, // TODO: Calcular por fecha
      newContactsThisMonth: 0, // TODO: Calcular por fecha
      
      // Actividad de comunicación
      whatsappMessages: currentMetrics.whatsapp_chats || 0,
      emailsSent: 0,
      callsMade: 0,
      
      // Actividad del negocio (datos reales)
      tasksCompleted: completedTasks,
      tasksTotal: totalTasks,
      tasksCompletedToday: 0, // TODO: Calcular por fecha
      
      // Información financiera
      monthlyRevenue: currentMetrics.revenue_generated || 0,
      pendingPayments: 0,
      clientsServedThisMonth: 0,
      
      // Crecimiento
      websiteVisits: currentMetrics.website_visits || 0,
      socialMediaFollowers: 0,
      reviewsReceived: 0,
      
      // Fechas
      lastUpdated: new Date().toISOString(),
      lastActivityDate: lastActivity
    };

    return NextResponse.json({ metrics: realMetrics });

  } catch (error) {
    console.error('Error fetching metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}

// 📝 POST: Actualizar métricas del usuario
export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const user = await getServerUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { metricType, value, note } = body;

    // Validar entrada
    if (!metricType || value === undefined) {
      return NextResponse.json(
        { error: 'metricType and value are required' },
        { status: 400 }
      );
    }

    // Mapear tipo de métrica a columna de BD
    const metricMapping: Record<string, string> = {
      'monthlyRevenue': 'revenue_generated',
      'websiteVisits': 'website_visits',
      'whatsappMessages': 'whatsapp_chats',
      'totalContacts': 'leads_generated',
    };

    const dbColumn = metricMapping[metricType];
    if (!dbColumn) {
      return NextResponse.json(
        { error: 'Invalid metric type' },
        { status: 400 }
      );
    }

    // Obtener métricas actuales o crear nueva entrada
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const { data: existingMetrics, error: fetchError } = await supabaseAdmin
      .from('metrics')
      .select('*')
      .eq('user_id', user.id)
      .eq('period_type', 'weekly')
      .eq('period_start', startOfWeek.toISOString().split('T')[0])
      .single();

    if (existingMetrics) {
      // Actualizar métricas existentes
      const { error: updateError } = await supabaseAdmin
        .from('metrics')
        .update({
          [dbColumn]: value,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingMetrics.id);

      if (updateError) {
        throw updateError;
      }
    } else {
      // Crear nueva entrada de métricas
      const { error: insertError } = await supabaseAdmin
        .from('metrics')
        .insert({
          user_id: user.id,
          period_type: 'weekly',
          period_start: startOfWeek.toISOString().split('T')[0],
          period_end: endOfWeek.toISOString().split('T')[0],
          [dbColumn]: value
        });

      if (insertError) {
        throw insertError;
      }
    }

    // Registrar actividad
    await supabaseAdmin
      .from('activities')
      .insert({
        user_id: user.id,
        action: 'metric_updated',
        entity_type: 'metrics',
        metadata: {
          metric_type: metricType,
          value,
          note
        }
      });

    return NextResponse.json({ 
      success: true,
      message: 'Metric updated successfully' 
    });
  } catch (error) {
    console.error('Error updating metrics:', error);
    return NextResponse.json(
      { error: 'Failed to update metrics' },
      { status: 500 }
    );
  }
}
