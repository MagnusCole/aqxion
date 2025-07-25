// Script de verificación del super admin
// Abre este archivo en el navegador: http://localhost:3000/debug

'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useSuperAdmin } from '@/hooks/useSuperAdmin';
import { useAuth } from '@/contexts/AuthContext';

export default function DebugPage() {
  const { user, signIn, signUp, signOut } = useAuth();
  const { isSuperAdmin, loading } = useSuperAdmin();
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [loginForm, setLoginForm] = useState({ email: 'luis@aqxion.com', password: '' });
  const [signupForm, setSignupForm] = useState({ email: 'luis@aqxion.com', password: '', businessName: 'AQXION Admin' });

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

  const handleLogin = async () => {
    try {
      const result = await signIn(loginForm.email, loginForm.password);
      if (result.error) {
        alert('Error de login: ' + result.error.message);
      } else {
        alert('Login exitoso! Recargando página...');
        window.location.reload();
      }
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  const handleSignup = async () => {
    try {
      const result = await signUp(signupForm.email, signupForm.password, signupForm.businessName);
      if (result.error) {
        alert('Error de registro: ' + result.error.message);
      } else {
        alert('Cuenta creada exitosamente! Recargando página...');
        window.location.reload();
      }
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  const deleteExistingUser = async () => {
    if (!confirm('¿Estás seguro de eliminar la cuenta luis@aqxion.com? Esto borrará todos los datos.')) {
      return;
    }

    try {
      alert('Para eliminar usuarios necesitas:');
      alert('1. Ve a Supabase Dashboard');
      alert('2. Authentication → Users');
      alert('3. Busca luis@aqxion.com');
      alert('4. Click en los 3 puntos → Delete user');
      alert('5. Después regresa aquí y crea la cuenta nueva');
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
          {user && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <strong>Email actual:</strong> {user.email}
              <div className="mt-3 flex gap-3">
                <a 
                  href="/portal"
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 inline-block"
                >
                  Ir al Portal
                </a>
                <button 
                  onClick={async () => {
                    await signOut();
                    window.location.reload();
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Información de Debug:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Gestión de Cuenta:</h2>
          <div className="space-y-6">
            
            {!user ? (
              <>
                {/* Login Form */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">🔐 Login:</h3>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <button 
                      onClick={handleLogin}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Hacer Login
                    </button>
                  </div>
                </div>

                {/* Signup Form */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">✨ Crear Nueva Cuenta:</h3>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="password"
                      placeholder="Nueva contraseña (mínimo 6 caracteres)"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Nombre del negocio"
                      value={signupForm.businessName}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, businessName: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <button 
                      onClick={handleSignup}
                      disabled={signupForm.password.length < 6}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
                    >
                      Crear Cuenta
                    </button>
                  </div>
                </div>

                {/* Delete existing user */}
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">🗑️ Eliminar Cuenta Existente:</h3>
                  <p className="text-sm text-red-600 mb-3">Si ya existe luis@aqxion.com pero no recuerdas la contraseña</p>
                  <button 
                    onClick={deleteExistingUser}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Eliminar cuenta luis@aqxion.com
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800">✅ Usuario Autenticado</h3>
                <p className="text-green-600">Email: {user.email}</p>
                <button 
                  onClick={() => window.location.href = '/portal'}
                  className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
                >
                  Ir al Portal
                </button>
              </div>
            )}

            <button 
              onClick={createSuperAdminEntry}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
            >
              Configurar Permisos Super Admin
            </button>
            
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">SQL para ejecutar en Supabase:</h3>
              <code className="block mt-2 bg-yellow-50 p-2 rounded text-sm whitespace-pre-wrap">
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
