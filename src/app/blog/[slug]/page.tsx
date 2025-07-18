import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace('.md', '') }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  
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
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blueTrust mb-4">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <span>📅 {new Date().toLocaleDateString('es-ES')}</span>
            <span>⏱️ 5 min lectura</span>
            <span>📊 Guía Gratuita</span>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }} 
          />
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-greenValue/10 rounded-lg border border-greenValue/20">
          <h3 className="text-2xl font-bold text-blueTrust mb-4">¿Te Sirvió Esta Guía?</h3>
          <p className="text-gray-700 mb-4">
            Si implementas esto y necesitas ayuda personalizada para escalar tu PYME, 
            podemos trabajar juntos en equity (no fees upfront).
          </p>
          <a 
            href="/#pilots" 
            className="inline-block bg-goldCTA text-white px-6 py-3 rounded-md font-semibold hover:bg-greenValue transition-colors mr-4"
          >
            Ver Pilots Disponibles
          </a>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Disclaimer:</strong> Los resultados mencionados son hipotéticos basados en 
              best practices de la industria. Resultados reales varían según implementación, 
              mercado y contexto específico. No se garantizan resultados específicos.
            </p>
            <div className="flex justify-between">
              <a href="/blog" className="text-greenValue hover:text-blueTrust transition-colors">
                ← Volver a Guías
              </a>
              <a href="/" className="text-greenValue hover:text-blueTrust transition-colors">
                Inicio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
