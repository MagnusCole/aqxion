import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace('.md', '') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace('-2025', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${title} | Guía Gratis AQXION`,
    description: `Guía práctica: ${title}. Implementación paso-a-paso, resultados reales, sin teorías.`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  // Format title better
  const title = slug
    .replace('-2025', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b\w+\b/g, (word) => {
      const replacements: { [key: string]: string } = {
        'Seo': 'SEO',
        'Ia': 'IA', 
        'Roi': 'ROI',
        'Pymes': 'PYMEs',
        'Whatsapp': 'WhatsApp'
      };
      return replacements[word] || word;
    });
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-white section-padding">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Guía no encontrada
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Esta guía no está disponible.
            </p>
            <a href="/guias" className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
              ← Ver Todas las Guías
            </a>
          </div>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero empathy-focused con imagen */}
      <div className="bg-gradient-to-br from-calm-50 to-primary-50 section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge de implementación práctica */}
            <div className="inline-flex items-center bg-gradient-to-r from-primary-600 to-calm-600 text-white px-6 py-3 rounded-full mb-6 font-semibold">
              <span className="mr-2 text-lg">🎯</span>
              Implementación Práctica
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-calm-700 mb-6 leading-tight max-w-4xl mx-auto">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
              Guía step-by-step para implementar hoy. Sin teorías, solo estrategias que funcionan para PYMEs como la tuya.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-500 text-sm">
              <span className="flex items-center">
                <span className="emoji-icon">📅</span>
                Actualizado {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
              </span>
              <span className="flex items-center">
                <span className="emoji-icon">⏱️</span>
                8-12 min lectura
              </span>
              <span className="flex items-center">
                <span className="emoji-icon">✅</span>
                Accionable
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal con breathability */}
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="prose lg:prose-xl text-neutral-600 max-w-4xl mx-auto">
          <div 
            dangerouslySetInnerHTML={{ __html: html }} 
          />
          
          {/* Tips para Implementar Hoy */}
          <section className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-calm-50 rounded-2xl border-2 border-primary-200">
            <h2 className="text-2xl font-bold text-calm-700 mb-6 flex items-center">
              <span className="emoji-icon">🚀</span>
              Tips para Implementar Hoy
            </h2>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start">
                <span className="emoji-icon text-primary-600">📍</span>
                <span className="text-neutral-600">Empieza con el primer paso más simple de la guía</span>
              </li>
              <li className="flex items-start">
                <span className="emoji-icon text-primary-600">⏰</span>
                <span className="text-neutral-600">Dedica 15-30 minutos diarios a la implementación</span>
              </li>
              <li className="flex items-start">
                <span className="emoji-icon text-primary-600">📊</span>
                <span className="text-neutral-600">Mide resultados cada semana para ajustar la estrategia</span>
              </li>
              <li className="flex items-start">
                <span className="emoji-icon text-primary-600">🎯</span>
                <span className="text-neutral-600">Mantén el foco en 1-2 tácticas hasta dominarlas</span>
              </li>
            </ul>
          </section>
        </div>
        
        {/* Guías relacionadas */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-calm-700 mb-8 text-center">Más Guías para Escalar Tu Negocio</h2>
          <ul className="grid sm:grid-cols-2 gap-6">
            <li>
              <a href="/guias" className="block p-6 bg-white border-2 border-neutral-200 rounded-xl hover:border-primary-200 transition-all duration-200 hover:shadow-md group">
                <span className="text-primary-600 font-semibold group-hover:text-primary-700">Ver Todas las Guías →</span>
                <p className="text-neutral-600 mt-2">Encuentra más estrategias como esta</p>
              </a>
            </li>
            <li>
              <a href="/recursos" className="block p-6 bg-white border-2 border-neutral-200 rounded-xl hover:border-primary-200 transition-all duration-200 hover:shadow-md group">
                <span className="text-primary-600 font-semibold group-hover:text-primary-700">Recursos Listos →</span>
                <p className="text-neutral-600 mt-2">Templates y herramientas para acelerar</p>
              </a>
            </li>
          </ul>
        </div>
        
        {/* Navegación simple */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
            <a href="/guias" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
              ← Todas las Guías
            </a>
            <a href="/" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
              Inicio →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
