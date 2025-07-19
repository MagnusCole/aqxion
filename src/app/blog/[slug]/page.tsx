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
    title: `Guía: ${title} - AQXION`,
    description: `Guía práctica para PYMEs sobre ${title}. Implementación step-by-step gratis.`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  // Generar título desde slug
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Guía no encontrada</h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, esta guía no está disponible en este momento.
          </p>
          <a href="/blog" className="text-blue-600 hover:underline">
            ← Volver a todas las Guías
          </a>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blueCalm mb-4">
            {title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-grayText text-sm">
            <span className="flex items-center">
              <span className="mr-1">📅</span>
              {new Date().toLocaleDateString('es-ES')}
            </span>
            <span className="flex items-center">
              <span className="mr-1">⏱️</span>
              5 min lectura
            </span>
            <span className="flex items-center">
              <span className="mr-1">�</span>
              Guía Gratuita
            </span>
          </div>
        </div>
        
        <div className="prose prose-lg sm:prose-xl lg:prose-2xl max-w-prose sm:max-w-4xl lg:max-w-5xl mx-auto prose-headings:text-blueCalm prose-p:text-grayText prose-p:mb-4 prose-p:leading-relaxed">
          <div 
            className="text-grayText leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }} 
          />
        </div>
        
        <p className="mt-8 sm:mt-10 lg:mt-12 text-grayText text-base sm:text-lg max-w-prose sm:max-w-4xl lg:max-w-5xl mx-auto">
          Usa esto para tu negocio – más recursos en inicio.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-md border border-gray-200">
          <h3 className="text-xl sm:text-2xl font-bold text-blueCalm mb-4">¿Te Sirvió Esta Guía?</h3>
          <p className="text-grayText mb-4">
            Si implementas esto y necesitas ayuda personalizada para escalar tu PYME, 
            podemos trabajar juntos en equity (no fees upfront).
          </p>
          <a 
            href="/#pilots" 
            className="inline-block bg-greenGrowth text-white px-6 py-3 rounded-md font-semibold hover:bg-blueCalm transition-colors duration-200"
          >
            Ver Pilots Disponibles
          </a>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-grayText mb-4">
              <strong>Honesto:</strong> Los resultados mencionados son ejemplos basados en 
              casos reales y mejores prácticas. Tus resultados dependerán de tu implementación, 
              mercado y contexto específico. No hay garantías, solo herramientas que funcionan.
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <a href="/blog" className="text-blueCalm hover:text-greenGrowth transition-colors">
                ← Volver a Guías
              </a>
              <a href="/" className="text-blueCalm hover:text-greenGrowth transition-colors">
                Inicio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
