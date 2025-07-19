/** @type {import('next').NextConfig} */
const nextConfig = {
  // ACCELERATE - Performance optimizations
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react']
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression and optimization
  compress: true,
  trailingSlash: false,
  
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
