'use client'

import React, { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronRight, User, Lock, Mail, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    console.log('🔑 Intentando login con:', email)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      console.log('📝 Resultado de signIn:', result)

      if (result?.error) {
        console.log('❌ Error en login:', result.error)
        setError('Credenciales inválidas')
      } else {
        console.log('✅ Login exitoso, verificando sesión...')
        // Verificar sesión y redirigir
        const session = await getSession()
        console.log('📊 Sesión obtenida:', session)
        if (session) {
          console.log('🚀 Redirigiendo al portal...')
          router.push('/portal/dashboard')
        }
      }
    } catch (error) {
      console.error('💥 Error en handleSubmit:', error)
      setError('Error al iniciar sesión')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/portal/dashboard' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <User className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Bienvenido de vuelta
          </h1>
          <p className="text-gray-600">
            Accede a tu portal de crecimiento empresarial
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <h3 className="text-sm font-medium text-blue-900 mb-2">🔓 Credenciales Demo:</h3>
            <div className="space-y-1 text-sm text-blue-700">
              <p><strong>Email:</strong> demo@cliente.com</p>
              <p><strong>Password:</strong> demo123</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEmail('demo@cliente.com');
                setPassword('demo123');
              }}
              className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
            >
              Usar credenciales demo
            </button>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                placeholder="tu@empresa.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Iniciar Sesión
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>

        {/* Demo Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">Acceso Demo Activo</span>
          </div>
          <p className="text-xs text-green-700 mb-3">
            Usa estas credenciales para probar el sistema completo:
          </p>
          <div className="space-y-2">
            <div className="bg-white/50 rounded-lg p-2 border border-green-100">
              <p className="text-xs text-green-600 font-mono">
                <span className="font-medium">Email:</span> demo@cliente.com
              </p>
            </div>
            <div className="bg-white/50 rounded-lg p-2 border border-green-100">
              <p className="text-xs text-green-600 font-mono">
                <span className="font-medium">Password:</span> demo123
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setEmail('demo@cliente.com');
              setPassword('demo123');
            }}
            className="mt-3 w-full text-xs bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Usar Credenciales Demo
          </button>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">o</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Google Sign In */}
        <motion.button
          onClick={handleGoogleSignIn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continúa con Google
        </motion.button>

        {/* Links */}
        <div className="text-center mt-6 space-y-2">
          <Link 
            href="/auth/signup" 
            className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
          >
            ¿No tienes cuenta? Regístrate
          </Link>
          <br />
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
