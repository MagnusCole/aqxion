// Script de verificación del super admin
// Abre este archivo en el navegador: http://localhost:3000/debug

'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useSuperAdmin } from '@/hooks/useSuperAdmin';
import { useAuth } from '@/contexts/AuthContext';

export default function DebugPage() {
  const { user } = useAuth();
  const { isSuperAdmin, loading } = useSuperAdmin();
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const runDebug = async () => {
      try {
        // 1. Verificar sesión actual
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        // 2. Verificar tabla super_admins
        const { data: superAdmins, error: superAdminsError } = await supabase
          .from('super_admins')
          .select('*');

        // 3. Verificar user_profiles
        const { data: userProfile, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('email', 'luis@aqxion.com')
          .single();

        setDebugInfo({
          session: session ? {
            email: session.user.email,
            id: session.user.id,
            authenticated: true
          } : { authenticated: false },
          sessionError,
          superAdmins,
          superAdminsError,
          userProfile,
          profileError,
          hookResults: { isSuperAdmin, loading }
        });
      } catch (error) {
        setDebugInfo({ error: (error as Error).message });
      }
    };

    runDebug();
  }, [isSuperAdmin, loading, user]);

  const createSuperAdminEntry = async () => {
    try {
      const { data, error } = await supabase
        .from('super_admins')
        .insert({ email: 'luis@aqxion.com' })
        .select();
      
      if (error) {
        alert('Error: ' + error.message);
      } else {
        alert('Super admin creado exitosamente');
        window.location.reload();
      }
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🔍 Debug Super Admin</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Estado Actual:</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${isSuperAdmin ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <strong>Es Super Admin:</strong> {isSuperAdmin ? '✅ SÍ' : '❌ NO'}
            </div>
            <div className={`p-4 rounded-lg ${user ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
              <strong>Usuario Autenticado:</strong> {user ? '✅ SÍ' : '❌ NO'}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Información de Debug:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Acciones de Reparación:</h2>
          <div className="space-y-4">
            <button 
              onClick={createSuperAdminEntry}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Crear entrada en super_admins
            </button>
            
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">SQL para ejecutar en Supabase:</h3>
              <code className="block mt-2 bg-yellow-50 p-2 rounded text-sm">
                {`-- Crear tabla super_admins
CREATE TABLE IF NOT EXISTS super_admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insertar luis@aqxion.com
INSERT INTO super_admins (email) VALUES ('luis@aqxion.com') ON CONFLICT (email) DO NOTHING;`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Debug Information</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Location</h2>
          <div className="space-y-2">
            <p><strong>Hostname:</strong> {debugInfo.hostname}</p>
            <p><strong>Pathname:</strong> {debugInfo.pathname}</p>
            <p><strong>Full URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Loading...'}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Expected Behavior</h2>
          <div className="space-y-2">
            <p><strong>app.aqxion.com/</strong> → Should redirect to <strong>/auth/signin</strong></p>
            <p><strong>www.aqxion.com/</strong> → Should show landing page</p>
            <p><strong>app.aqxion.com/portal/*</strong> → Requires authentication</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Test Links</h2>
          <div className="space-y-2">
            <a href="/auth/signin" className="block text-blue-600 hover:text-blue-800">→ Go to Login</a>
            <a href="/portal/dashboard" className="block text-blue-600 hover:text-blue-800">→ Go to Portal Dashboard</a>
            <a href="https://www.aqxion.com" className="block text-blue-600 hover:text-blue-800">→ Go to Landing Page</a>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-4 mt-6">
          <p className="text-sm">Debug info generated at: {debugInfo.timestamp}</p>
        </div>
      </div>
    </div>
  );
}
