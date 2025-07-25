import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      businessName?: string | null
      businessType?: string | null
      phone?: string | null
    } & DefaultSession['user']
  }

  interface User {
    id: string
    businessName?: string | null
    businessType?: string | null
    phone?: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    businessName?: string | null
    businessType?: string | null
    phone?: string | null
  }
}
