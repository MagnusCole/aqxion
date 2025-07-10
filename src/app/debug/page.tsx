// Página de diagnóstico para debug de CSS en producción
import { headers } from 'next/headers';

export default async function DiagnosticPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost';
  
  return (
    <div style={{ 
      fontFamily: 'monospace', 
      padding: '20px', 
      backgroundColor: '#f0f0f0',
      minHeight: '100vh' 
    }}>
      <h1>🔍 Diagnóstico CSS - AQXION</h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        margin: '10px 0', 
        borderRadius: '5px' 
      }}>
        <h2>Environment Variables:</h2>
        <pre>{JSON.stringify({
          NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || 'NOT_SET',
          NODE_ENV: process.env.NODE_ENV,
          VERCEL_ENV: process.env.VERCEL_ENV || 'NOT_VERCEL',
          VERCEL_URL: process.env.VERCEL_URL || 'NOT_SET'
        }, null, 2)}</pre>
        
        <h3>GTM Debug Script:</h3>
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '10px', 
          fontFamily: 'monospace',
          fontSize: '12px'
        }}>
          Abre la consola y ejecuta: <br/>
          <code>console.log('dataLayer:', window.dataLayer); console.log('gtag:', window.gtag);</code>
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        margin: '10px 0', 
        borderRadius: '5px' 
      }}>
        <h2>Request Info:</h2>
        <pre>Host: {host}</pre>
        <pre>User-Agent: {headersList.get('user-agent')?.substring(0, 100)}...</pre>
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        margin: '10px 0', 
        borderRadius: '5px' 
      }}>
        <h2>CSS Test:</h2>
        <div className="bg-blue-500 text-white p-4 rounded">
          Si ves este texto en azul con padding, Tailwind funciona
        </div>
        <div style={{ 
          backgroundColor: 'var(--color-bg-primary, red)', 
          color: 'var(--color-text-primary, black)',
          padding: '10px',
          marginTop: '10px'
        }}>
          Si este fondo es blanco (no rojo), las CSS variables funcionan
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        margin: '10px 0', 
        borderRadius: '5px' 
      }}>
        <h2>Next.js Info:</h2>
        <pre>Next.js Version: {process.env.npm_package_dependencies_next || 'Unknown'}</pre>
        <pre>Build Time: {new Date().toISOString()}</pre>
      </div>
    </div>
  );
}
