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
          <h1 className="text-3xl sm:text-4xl font-bold text-blueCalm mb-4">Guías Gratis Para Tu Negocio</h1>
          <p className="text-lg sm:text-xl text-grayText max-w-2xl mx-auto">
            Todo lo que necesitas para hacer crecer tu PYME, sin trucos ni teorías complicadas.
          </p>
        </div>
        
        <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
          {posts.length > 0 ? (
            posts.map((post) => {
              const slug = post.replace('.md', '');
              const title = slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              
              return (
                <li key={slug} className="p-6 sm:p-8 border rounded bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                  <a href={`/blog/${slug}`} className="text-greenGrowth text-lg sm:text-xl lg:text-2xl font-medium block mb-2 sm:mb-3 hover:text-blueCalm">
                    {title}
                  </a>
                  <p className="text-sm sm:text-base lg:text-lg text-grayText">
                    Guía práctica para dueños de PYMEs - paso a paso, sin relleno.
                  </p>
                </li>
              );
            })
          ) : (
            <p className="text-grayText col-span-full text-center">Cargando guías...</p>
          )}
        </div>
        
        <div className="mt-12 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-sm text-grayText">
            <strong>Honesto:</strong> Los resultados mencionados en las guías son ejemplos 
            basados en casos reales y mejores prácticas. Tus resultados dependerán de tu implementación, 
            mercado y contexto específico. No hay garantías, solo herramientas que funcionan.
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <a href="/" className="text-blueCalm hover:text-greenGrowth transition-colors">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
