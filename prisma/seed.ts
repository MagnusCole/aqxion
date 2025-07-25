import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Crear usuario demo para testing - CREDENCIALES CONSISTENTES
  const hashedPassword = await bcrypt.hash('demo123', 12)
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@cliente.com' },
    update: {},
    create: {
      email: 'demo@cliente.com',
      name: 'Juan Mendoza',
      password: hashedPassword,
      businessName: 'Restaurante Sabor Limeño',
      businessType: 'Restaurante',
      phone: '+51 999 123 456',
      planStartDate: new Date(),
      supportExpiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 días
      onboardingCompleted: true,
      isActive: true,
    },
  })

  // Crear métricas demo realistas para cliente demo
  await prisma.businessMetrics.upsert({
    where: { userId: demoUser.id },
    update: {},
    create: {
      userId: demoUser.id,
      websiteVisits: 347,
      previousWebsiteVisits: 189,
      leads: 28,
      previousLeads: 18,
      whatsappChats: 42,
      previousWhatsappChats: 26,
      googleViews: 198,
      previousGoogleViews: 128,
    },
  })

  console.log('✅ Usuario demo creado:', demoUser.email)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
