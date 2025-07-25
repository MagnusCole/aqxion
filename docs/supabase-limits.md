# LÍMITES SUPABASE FREE TIER - 2025

## 🎯 Límites Principales
- **Base de datos:** 500 MB
- **Ancho de banda:** 5 GB/mes  
- **Auth users:** 50,000 usuarios activos mensuales
- **Realtime:** 200 conexiones concurrentes máximo
- **Edge Functions:** 500,000 invocaciones/mes
- **Storage:** 1 GB

## ⚠️ Lo que MÁS consume en tu proyecto:
1. **API calls** (cada request al portal)
2. **Auth operations** (login/logout frecuente)
3. **Realtime subscriptions** (si las usas)
4. **Storage de archivos** (imágenes, documentos)

## 💡 Optimizaciones para durar más:
1. **Caché en frontend** (React Query, SWR)
2. **Batch operations** (agrupar queries)
3. **Lazy loading** de datos
4. **Compresión de imágenes**
5. **Limpiar datos temporales**

## 📈 Cuándo actualizar a Pro ($25/mes):
- >500 MB en BD (muchos usuarios/datos)
- >5 GB ancho de banda (sitio web muy usado)
- Necesitas más de 200 conexiones simultáneas
- Backups automáticos
- Mejor performance
