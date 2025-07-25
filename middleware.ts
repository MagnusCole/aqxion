import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Esta función se ejecuta solo si el usuario está autenticado
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: ['/portal/:path*']
}
