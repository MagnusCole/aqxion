import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        console.log('🔐 Intentando login con:', credentials?.email)
        
        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Credenciales faltantes')
          return null
        }

        // ✅ CREDENCIALES DEMO para cliente DEMO (funcionan en producción)
        if (credentials.email === 'demo@cliente.com' && credentials.password === 'demo123') {
          console.log('✅ Login demo exitoso')
          return {
            id: 'demo-user-1',
            email: 'demo@cliente.com',
            name: 'Juan Mendoza',
            image: null,
            businessName: 'Restaurante Sabor Limeño',
            businessType: 'Restaurante',
            phone: '+51 999 123 456'
          }
        }

        // Autenticación con base de datos para usuarios reales
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          businessName: user.businessName,
          businessType: user.businessType,
          phone: user.phone
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.businessName = user.businessName
        token.businessType = user.businessType
        token.phone = user.phone
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.businessName = token.businessName
        session.user.businessType = token.businessType
        session.user.phone = token.phone
      }
      return session
    },
  },
}
