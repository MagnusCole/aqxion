import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const hostname = req.headers.get('host') || '';
    const pathname = req.nextUrl.pathname;

    // Si es app.aqxion.com - redirigir / al login directamente
    if (hostname.includes('app.aqxion.com')) {
      // Redirigir root a login
      if (pathname === '/') {
        return NextResponse.redirect(new URL('/auth/signin', req.url));
      }
      
      // Permitir rutas del portal, auth y APIs
      if (
        pathname.startsWith('/portal') ||
        pathname.startsWith('/auth') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.startsWith('/debug')
      ) {
        return NextResponse.next();
      }
      
      // Redirigir cualquier otra ruta a auth
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    // Si es www.aqxion.com - solo permitir landing
    if (hostname.includes('www.aqxion.com') || hostname === 'aqxion.com') {
      // Bloquear rutas del portal desde www
      if (pathname.startsWith('/portal') || pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('https://app.aqxion.com' + pathname));
      }
      
      return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const hostname = req.headers.get('host') || '';
        const pathname = req.nextUrl.pathname;
        
        // Solo requerir auth para rutas del portal en app.aqxion.com
        if (hostname.includes('app.aqxion.com') && pathname.startsWith('/portal')) {
          return !!token;
        }
        
        return true;
      }
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
