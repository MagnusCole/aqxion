import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, businessName, businessType } = await request.json()

    // Validar datos requeridos
    if (!name || !email || !password || !businessName || !businessType) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
      return NextResponse.json(
        { message: 'La contraseña debe tener al menos 6 caracteres' },
        { status: 400 }
      )
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'El email ya está registrado' },
        { status: 409 }
      )
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        businessName,
        businessType,
      }
    })

    // Crear métricas iniciales para el negocio
    await prisma.businessMetrics.create({
      data: {
        userId: user.id,
        websiteVisits: 0,
        previousWebsiteVisits: 0,
        leads: 0,
        previousLeads: 0,
        whatsappChats: 0,
        previousWhatsappChats: 0,
        googleViews: 0,
        previousGoogleViews: 0,
        dataSource: 'manual'
      }
    })

    // Retornar usuario sin contraseña
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        message: 'Usuario creado exitosamente',
        user: userWithoutPassword
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
