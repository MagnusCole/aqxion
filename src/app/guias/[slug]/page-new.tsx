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
      
      {/* Header Ultra-Simple */}
      <header className="section-padding bg-neutral-50 border-b border-neutral-200">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {title}
            </h1>
            
            {/* Simple meta info */}
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-600 mb-6">
              <span>📖 Guía práctica</span>
              <span>•</span>
              <span>⚡ Implementable hoy</span>
              <span>•</span>
              <span>✅ Resultados reales</span>
            </div>

            {/* Back to blog */}
            <a href="/guias" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
              ← Todas las guías
            </a>
          </div>
        </div>
      </header>

      {/* Content Ultra-Clean */}
      <main className="section-padding">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            
            {/* Action Box */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🎯</div>
                <div>
                  <h2 className="font-bold text-neutral-900 mb-2">¿Listo para implementar?</h2>
                  <p className="text-neutral-700 text-sm">Esta guía te llevará paso-a-paso. Tomate 15 minutos para leerla completa antes de empezar.</p>
                </div>
              </div>
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none
                         prose-headings:text-neutral-900 prose-headings:font-bold prose-headings:tracking-tight
                         prose-h1:text-2xl prose-h1:sm:text-3xl
                         prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-6 prose-h3:mb-3
                         prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
                         prose-strong:text-neutral-900 prose-strong:font-semibold
                         prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline
                         prose-ul:space-y-2 prose-li:text-neutral-700
                         prose-blockquote:border-l-primary-300 prose-blockquote:bg-primary-50 prose-blockquote:p-4 prose-blockquote:my-6"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            
            {/* Action CTA */}
            <div className="mt-12 p-6 bg-neutral-900 text-white rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">¿Te ha sido útil esta guía?</h3>
                <p className="text-neutral-300 mb-6">Hay 40+ guías más esperándote. Todas gratis, todas prácticas.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/guias" className="inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200">
                    Ver Más Guías
                  </a>
                  <a href="/" className="inline-flex items-center justify-center bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-neutral-900 transition-colors duration-200">
                    Inicio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}
