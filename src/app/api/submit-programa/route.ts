import { NextRequest, NextResponse } from 'next/server';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    
    // Validar datos
    const { nombre, email, telefono, empresa } = body;
    
    if (!nombre || !email || !telefono || !empresa) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar teléfono peruano (+51)
    const phoneRegex = /^\+51\s?9\d{8}$/;
    if (!phoneRegex.test(telefono.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Teléfono debe ser +51 9XXXXXXXX' },
        { status: 400 }
      );
    }

    // TODO: Aquí irá la integración con Google Sheets
    // Por ahora simulamos el envío exitoso
    const googleSheetsData = {
      nombre,
      email,
      telefono,
      empresa,
      fecha: new Date().toISOString(),
      fuente: 'Programa Landing Page'
    };

    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Datos recibidos para Google Sheets:', googleSheetsData);

    return NextResponse.json({ 
      success: true, 
      message: 'Registro exitoso. Te contactaremos pronto.' 
    });

  } catch (error) {
    console.error('Error en submit-programa:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
