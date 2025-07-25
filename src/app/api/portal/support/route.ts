import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
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
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { subject, message, priority = 'medium' } = await request.json()

    if (!subject || !message) {
      return new NextResponse('Subject and message are required', { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
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
