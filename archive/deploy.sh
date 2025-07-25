#!/bin/bash

# 🚀 Script de Deploy para app.aqxion.com
# Ejecutar: ./deploy.sh

echo "🚀 Iniciando deploy a app.aqxion.com..."

# 1. Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta desde la raíz del proyecto."
    exit 1
fi

# 2. Instalar Vercel CLI si no existe
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# 3. Build local para verificar
echo "🔨 Verificando build local..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en build local. Revisa los errores antes de hacer deploy."
    exit 1
fi

# 4. Deploy a Vercel
echo "☁️ Haciendo deploy a Vercel..."
vercel --prod

# 5. Configurar dominio custom
echo "🌐 Configurando dominio app.aqxion.com..."
vercel domains add app.aqxion.com

echo "✅ Deploy completado!"
echo "🔗 URL: https://app.aqxion.com"
echo "🔑 Credenciales demo: demo@cliente.com / demo123"

# 6. Verificaciones post-deploy
echo "🧪 Ejecutando verificaciones..."
curl -I https://app.aqxion.com
curl -I https://app.aqxion.com/auth/signin
curl -I https://app.aqxion.com/portal/dashboard

echo "🎉 ¡Deploy completado exitosamente!"
