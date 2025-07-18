import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Optimización de performance
  compress: true,
  
  // Optimización de bundle
  experimental: {
    optimizePackageImports: ['class-variance-authority', 'react-icons'],
  },

  // LLM-OPTIMIZED: Bundle analyzer support
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      if (process.env.ANALYZE === 'true') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: './analyze/bundle-report.html',
          })
        );
      }
      return config;
    },
  }),
  
  // Headers de seguridad
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        }
      ]
    }
  ],

  // LLM-OPTIMIZED: Performance optimizations
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
