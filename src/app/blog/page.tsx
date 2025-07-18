import { readdirSync } from 'fs';
import path from 'path';

export default function BlogPage() {
  // Read posts from the posts directory
  const postsDirectory = path.join(process.cwd(), 'posts');
  let posts: string[] = [];
  
  try {
    posts = readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  } catch (error) {
    console.log('No posts directory found');
  }

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog - Guías Gratis</h1>
        <p className="text-xl mb-8 text-gray-600">
          Todas nuestras guías para escalar PYMEs con IA, ads y growth strategies.
        </p>
        
        <div className="grid gap-4">
          {posts.length > 0 ? (
            posts.map((post) => {
              const slug = post.replace('.md', '');
              const title = slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              
              return (
                <div key={slug} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">
                    <a href={`/blog/${slug}`} className="hover:underline">
                      {title}
                    </a>
                  </h2>
                  <p className="text-gray-600">
                    Guía práctica para dueños de PYMEs - implementación step-by-step.
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">Cargando guías...</p>
          )}
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> Los resultados mencionados en las guías son hipotéticos 
            basados en best practices de la industria. Resultados reales varían según implementación, 
            mercado y contexto específico. No se garantizan resultados específicos.
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <a href="/" className="text-blue-600 hover:underline">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
