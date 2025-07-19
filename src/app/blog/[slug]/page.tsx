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
  const title = slug.replace(/-/g, ' ');
  
  return {
    title: `${title} - Guía Completa AQXION 2025`,
    description: `Guía step-by-step: ${title}. Implementación práctica para PYMEs, resultados medibles, sin teorías.`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  // Generar título desde slug con mejor formatting
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-neutral-50 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-calm-700 mb-6 tracking-tight">
              Guía no encontrada
            </h1>
            <p className="text-xl text-neutral-600 mb-8 text-breathable">
              Lo sentimos, esta guía no está disponible en este momento. 
              Revisa todas nuestras guías disponibles.
            </p>
            <a href="/blog" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
              ← Ver todas las Guías
            </a>
          </div>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-neutral-50">
      <div className="container section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-calm-700 mb-6 sm:mb-8 tracking-tight max-w-4xl mx-auto">
            {title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-neutral-600 text-lg sm:text-xl">
            <span className="flex items-center">
              <span className="mr-2 text-2xl">📅</span>
              Actualizado {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-2xl">⏱️</span>
              Lectura 8-12 min
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-2xl">🎯</span>
              Implementación Práctica
            </span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg sm:prose-xl lg:prose-2xl max-w-none bg-white card-padding rounded-xl border border-neutral-200 shadow-sm"
            dangerouslySetInnerHTML={{ __html: html }} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 lg:mt-16">
          <p className="text-xl sm:text-2xl text-neutral-600 text-breathable text-center mb-12">
            Implementa esto en tu negocio. Más recursos y guías actualizadas en el inicio.
          </p>
          
          <div className="bg-white card-padding rounded-xl border border-neutral-200 shadow-sm">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-calm-700 mb-6 tracking-tight text-center">
              ¿Esta Guía Te Está Ayudando?
            </h3>
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 text-breathable text-center max-w-3xl mx-auto">
              Si implementas esto y quieres acelerar resultados con help personalizada para escalar tu PYME, 
              podemos trabajar juntos en equity (no fees upfront, solo resultados).
            </p>
            <div className="text-center mb-8">
              <a 
                href="/#guides" 
                className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors duration-200 hover:shadow-md"
              >
                Ver Más Guías Como Esta
              </a>
            </div>
            
            <div className="border-t border-neutral-200 pt-8">
              <p className="text-lg text-neutral-600 mb-6 text-breathable text-center max-w-3xl mx-auto">
                <strong className="text-calm-700 font-semibold">Transparencia total:</strong> Los resultados mencionados son ejemplos 
                basados en casos reales y mejores prácticas actualizadas para 2025. Tus resultados dependerán de tu implementación, 
                dedicación, mercado y contexto específico. No hay fórmulas mágicas, solo estrategias probadas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
                <a href="/blog" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
                  ← Todas las Guías
                </a>
                <a href="/" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
                  Inicio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
