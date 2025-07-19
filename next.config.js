/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Permite que el build continúe aunque haya errores de TypeScript durante el desarrollo
    ignoreBuildErrors: false,
  },
  eslint: {
    // Permite que el build continúe aunque haya errores de ESLint durante el desarrollo
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
