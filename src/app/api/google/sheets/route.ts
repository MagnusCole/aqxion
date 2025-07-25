import { NextRequest, NextResponse } from 'next/server';

// API para Google Sheets - CRM de Leads
export async function GET(request: NextRequest) {
  try {
    // En producción: Conectar con Google Sheets API
    // const { google } = require('googleapis');
    // const sheets = google.sheets({ version: 'v4', auth });
    
    // Datos simulados para DEMO - En producción vendrán de Google Sheets
    const leads = [
      {
        id: '1',
        name: 'María González',
        email: 'maria.gonzalez@email.com',
        phone: '+51 999 123 456',
        source: 'google',
        status: 'interesado',
        value: 1500,
        date: '2025-01-25',
        lastContact: '2025-01-26',
        notes: 'Interesada en paquete completo. Tiene tienda de ropa en Miraflores.',
        location: 'Miraflores, Lima',
        businessType: 'Retail - Ropa'
      },
      {
        id: '2', 
        name: 'Carlos Mendoza',
        email: 'cmendoza@negocio.com',
        phone: '+51 987 654 321',
        source: 'facebook',
        status: 'propuesta',
        value: 1500,
        date: '2025-01-24',
        lastContact: '2025-01-27',
        notes: 'Restaurante pequeño. Necesita presencia digital urgente.',
        location: 'San Isidro, Lima',
        businessType: 'Restaurante'
      },
      {
        id: '3',
        name: 'Ana Rodríguez',
        email: 'ana.rodriguez@salon.pe',
        phone: '+51 999 888 777',
        source: 'whatsapp',
        status: 'nuevo',
        value: 1500,
        date: '2025-01-27',
        lastContact: '2025-01-27',
        notes: 'Salón de belleza. Primera consulta.',
        location: 'La Molina, Lima',
        businessType: 'Servicios - Belleza'
      },
      {
        id: '4',
        name: 'Pedro Sánchez',
        email: 'pedro@ferreteria.com',
        phone: '+51 999 777 888',
        source: 'referral',
        status: 'cerrado',
        value: 1500,
        date: '2025-01-20',
        lastContact: '2025-01-26',
        notes: 'Cliente cerrado. Pagó completo. Ferretería familiar.',
        location: 'Pueblo Libre, Lima',
        businessType: 'Ferretería'
      }
    ];

    // Calcular estadísticas
    const stats = {
      total: leads.length,
      nuevos: leads.filter(l => l.status === 'nuevo').length,
      contactados: leads.filter(l => l.status === 'contactado').length,
      interesados: leads.filter(l => l.status === 'interesado').length,
      propuestas: leads.filter(l => l.status === 'propuesta').length,
      cerrados: leads.filter(l => l.status === 'cerrado').length,
      perdidos: leads.filter(l => l.status === 'perdido').length,
      valorTotal: leads.reduce((sum, lead) => sum + (lead.status === 'cerrado' ? lead.value : 0), 0),
      valorPotencial: leads.reduce((sum, lead) => sum + lead.value, 0),
      conversionRate: Math.round((leads.filter(l => l.status === 'cerrado').length / leads.length) * 100)
    };

    return NextResponse.json({
      success: true,
      leads,
      stats,
      lastSync: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching CRM data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch CRM data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, source, notes, location, businessType } = body;

    // En producción: Agregar lead a Google Sheets
    // const range = 'Leads!A:K';
    // const values = [[
    //   new Date().toISOString().split('T')[0],
    //   name, email, phone, source, 'nuevo', 1500,
    //   new Date().toISOString().split('T')[0],
    //   notes, location, businessType
    // ]];
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range,
    //   valueInputOption: 'RAW',
    //   resource: { values }
    // });

    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      source,
      status: 'nuevo',
      value: 1500,
      date: new Date().toISOString().split('T')[0],
      lastContact: new Date().toISOString().split('T')[0],
      notes,
      location,
      businessType
    };

    return NextResponse.json({
      success: true,
      message: 'Lead agregado exitosamente',
      lead: newLead
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    // En producción: Actualizar lead en Google Sheets
    // const range = `Leads!F${rowNumber}:G${rowNumber}`;
    // const values = [[status, notes]];
    // await sheets.spreadsheets.values.update({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range,
    //   valueInputOption: 'RAW',
    //   resource: { values }
    // });

    return NextResponse.json({
      success: true,
      message: 'Lead actualizado exitosamente',
      updatedFields: { id, status, notes }
    });

  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}
