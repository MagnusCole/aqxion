'use client';

import { useState, useEffect } from 'react';
import { BlogPost } from '@/lib/blog';

// Mock data para evitar problemas con fs en el cliente
const mockPosts: BlogPost[] = [
  {
    title: '5 Errores Comunes que los Negocios Locales Cometen y Alejan Clientes en 2025',
    slug: '5-errores-comunes-negocios-locales-alejan-clientes-2025',
    excerpt: 'Descubre los errores más frecuentes que hacen que los clientes potenciales elijan a la competencia y cómo evitarlos.',
    content: '',
    date: '2025-01-15',
    readTime: '8 min lectura',
    category: 'Estrategia',
    author: 'Equipo AQXION',
    image: '/assets/blog/errores-negocios-locales.jpg',
    featured: true,
    tags: ['marketing local', 'errores comunes', 'estrategia']
  },
  {
    title: 'Análisis de Competencia Digital 2025: Cómo Superar a Tus Rivales Online',
    slug: 'analisis-competencia-digital-2025',
    excerpt: 'Metodología completa para analizar la competencia digital y encontrar oportunidades de crecimiento en tu mercado.',
    content: '',
    date: '2025-01-14',
    readTime: '12 min lectura',
    category: 'Marketing Digital',
    author: 'Equipo AQXION',
    image: '/assets/blog/analisis-competencia.jpg',
    featured: false,
    tags: ['competencia', 'análisis', 'digital']
  },
  {
    title: 'Automatización de Marketing para Pequeños Negocios: Guía Práctica 2025',
    slug: 'automatizacion-marketing-pequenos-negocios-2025',
    excerpt: 'Implementa sistemas de marketing automatizado que trabajen por ti las 24 horas y generen leads constantemente.',
    content: '',
    date: '2025-01-13',
    readTime: '10 min lectura',
    category: 'Automatización',
    author: 'Equipo AQXION',
    image: '/assets/blog/automatizacion-marketing.jpg',
    featured: true,
    tags: ['automatización', 'marketing', 'pequeños negocios']
  },
  {
    title: 'Caso de Éxito: Cómo una Clínica Dental Duplicó sus Consultas en 90 Días',
    slug: 'caso-exito-clinica-dental-duplicar-consultas-2025',
    excerpt: 'Estrategia completa implementada paso a paso para multiplicar pacientes en el sector salud.',
    content: '',
    date: '2025-01-12',
    readTime: '15 min lectura',
    category: 'Casos de Éxito',
    author: 'Equipo AQXION',
    image: '/assets/blog/caso-clinica-dental.jpg',
    featured: false,
    tags: ['caso de éxito', 'clínica dental', 'sector salud']
  },
  {
    title: 'Cómo Atraer Clientes Sin Redes Sociales en 2025',
    slug: 'como-atraer-clientes-sin-redes-sociales-2025',
    excerpt: 'Estrategias efectivas para generar leads y ventas sin depender de Instagram, Facebook o TikTok.',
    content: '',
    date: '2025-01-11',
    readTime: '9 min lectura',
    category: 'Marketing Digital',
    author: 'Equipo AQXION',
    image: '/assets/blog/atraer-clientes-sin-redes.jpg',
    featured: false,
    tags: ['lead generation', 'marketing offline', 'estrategia']
  },
  {
    title: 'Cómo Convertir WhatsApp en una Máquina de Ventas (Sin Bots)',
    slug: 'como-convertir-whatsapp-maquina-ventas-sin-bots-2025',
    excerpt: 'Transforma WhatsApp Business en tu herramienta de ventas más poderosa con estrategias humanas y efectivas.',
    content: '',
    date: '2025-01-10',
    readTime: '11 min lectura',
    category: 'Ventas',
    author: 'Equipo AQXION',
    image: '/assets/blog/whatsapp-ventas.jpg',
    featured: false,
    tags: ['WhatsApp', 'ventas', 'conversión']
  },
  {
    title: 'Guía para Generar 30 Clientes en 30 Días Sin Publicar en Redes',
    slug: 'guia-generar-30-clientes-30-dias-sin-publicar-2025',
    excerpt: 'Sistema probado para conseguir clientes constantemente usando estrategias que no requieren contenido viral.',
    content: '',
    date: '2025-01-09',
    readTime: '14 min lectura',
    category: 'Lead Generation',
    author: 'Equipo AQXION',
    image: '/assets/blog/30-clientes-30-dias.jpg',
    featured: true,
    tags: ['lead generation', 'clientes', 'sistema']
  },
  {
    title: 'SEO Local: Guía Completa para Dominar tu Zona en 2025',
    slug: 'seo-local-guia-completa-2025',
    excerpt: 'Todo lo que necesitas saber para aparecer primero en búsquedas locales y atraer más clientes de tu área.',
    content: '',
    date: '2025-01-08',
    readTime: '16 min lectura',
    category: 'SEO',
    author: 'Equipo AQXION',
    image: '/assets/blog/seo-local-guia.jpg',
    featured: false,
    tags: ['SEO local', 'búsquedas locales', 'Google']
  }
];

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { posts, loading };
}
