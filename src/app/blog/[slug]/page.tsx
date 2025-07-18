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
        <div className="prose prose-lg max-w-3xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-4">
            <strong>Disclaimer:</strong> Los resultados mencionados son hipotéticos basados en 
            best practices de la industria. Resultados reales varían según implementación, 
            mercado y contexto específico. No se garantizan resultados específicos.
          </p>
          <div className="flex justify-between">
            <a href="/blog" className="text-blue-600 hover:underline">
              ← Volver a Guías
            </a>
            <a href="/" className="text-green-600 hover:underline">
              Inicio →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
