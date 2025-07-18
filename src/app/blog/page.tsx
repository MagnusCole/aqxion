import { readdirSync } from 'fs';
import path from 'path';

export default function BlogPage() {
  // Read posts from the content directory
  const contentDirectory = path.join(process.cwd(), 'content');
  let posts: string[] = [];
  
  try {
    posts = readdirSync(contentDirectory).filter(file => 
      file.endsWith('.md') && !file.includes('outreach')
    );
  } catch (error) {
    console.log('No content directory found');
  }

  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blueTrust mb-4">Blog - Guías Gratis</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todas nuestras guías para escalar PYMEs con IA, ads y growth strategies.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => {
              const slug = post.replace('.md', '');
              const title = slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              
              return (
                <div key={slug} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold text-greenValue mb-3">
                    <a href={`/blog/${slug}`} className="hover:text-blueTrust">
                      {title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Guía práctica para dueños de PYMEs - implementación step-by-step.
                  </p>
                  <a 
                    href={`/blog/${slug}`} 
                    className="inline-block bg-goldCTA text-white px-4 py-2 rounded-md hover:bg-greenValue transition-colors"
                  >
                    Leer Gratis
                  </a>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-full text-center">Cargando guías...</p>
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
