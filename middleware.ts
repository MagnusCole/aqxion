import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const hostname = req.headers.get('host') || '';
    const pathname = req.nextUrl.pathname;

    // 🔒 REGLAS ESTRICTAS DE ACCESO POR DOMINIO
    
    // ✅ app.aqxion.com - SOLO portal y auth
    if (hostname.includes('app.aqxion.com')) {
      // Redirigir root a login
      if (pathname === '/') {
        return NextResponse.redirect(new URL('/auth/signin', req.url));
      }
      
      // PERMITIR: portal, auth, APIs, assets
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
      
      // BLOQUEAR: cualquier otra ruta → redirigir a auth
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    // ✅ www.aqxion.com - SOLO landing page
    if (hostname.includes('www.aqxion.com')) {
      // BLOQUEAR: portal y auth → redirigir a app.aqxion.com
      if (pathname.startsWith('/portal') || pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('https://app.aqxion.com' + pathname));
      }
      
      // PERMITIR: landing, assets, APIs públicas
      return NextResponse.next();
    }

    // ✅ aqxion.com (root) - redirigir a www
    if (hostname === 'aqxion.com') {
      // BLOQUEAR: portal y auth → redirigir a app.aqxion.com
      if (pathname.startsWith('/portal') || pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('https://app.aqxion.com' + pathname));
      }
      
      // Resto → redirigir a www
      return NextResponse.redirect(new URL('https://www.aqxion.com' + pathname));
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
