import { NextRequest, NextResponse } from 'next/server'
import { getUserFromSession } from '@/lib/auth-api'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const authUser = await getUserFromSession(request)
    if (!authUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: authUser.email },
      include: {
        supportTickets: {
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    })

    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }

    return NextResponse.json({
      tickets: user.supportTickets,
      supportInfo: {
        planDaysRemaining: user.supportExpiresAt 
          ? Math.max(0, Math.ceil((new Date(user.supportExpiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))
          : 90,
        isActive: user.isActive,
        planStartDate: user.planStartDate
      }
    })
  } catch (error) {
    console.error('Error fetching support data:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const authUser = await getUserFromSession(request)
    if (!authUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { subject, message, priority = 'medium' } = await request.json()

    if (!subject || !message) {
      return new NextResponse('Subject and message are required', { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email: authUser.email }
    })

    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }

    const ticket = await prisma.supportTicket.create({
      data: {
        userId: user.id,
        subject,
        description: message,
        category: 'other',
        priority,
        status: 'open'
      }
    })

    return NextResponse.json({ ticket })
  } catch (error) {
    console.error('Error creating support ticket:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
