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
    <main className="section-padding bg-neutral-50 min-h-screen">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-calm-700 mb-6 sm:mb-8 tracking-tight">
            Todas las Guías Para Tu Negocio
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-600 max-w-4xl mx-auto text-breathable">
            Más de 40 guías paso a paso para hacer crecer tu PYME. Sin teorías complicadas, solo lo que realmente funciona.
          </p>
        </div>
        
        <ul className="guides-grid">
          {posts.length > 0 ? (
            posts.map((post) => {
              const slug = post.replace('.md', '');
              const title = slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              
              return (
                <li key={slug}>
                  <a href={`/blog/${slug}`} className="hover:text-primary-600">
                    {title}
                  </a>
                  <p className="text-lg sm:text-xl text-neutral-600 mt-3 mb-4">
                    Guía práctica para dueños de PYMEs - implementación paso a paso, resultados medibles.
                  </p>
                  <span className="text-lg flex items-center mt-4 text-primary-600 font-medium">
                    <span className="emoji-icon">📖</span>
                    Listo para implementar
                  </span>
                </li>
              );
            })
          ) : (
            <li className="col-span-full text-center">
              <p className="text-xl text-neutral-600">Cargando guías...</p>
            </li>
          )}
        </ul>
        
        <div className="mt-16 lg:mt-20 card-padding bg-white rounded-xl border border-neutral-200 shadow-sm">
          <p className="text-lg sm:text-xl text-neutral-600 text-breathable">
            <strong className="text-calm-700 font-semibold">Transparencia total:</strong> Los resultados mencionados son ejemplos 
            basados en casos reales y mejores prácticas de 2025. Tus resultados dependerán de tu implementación, 
            mercado y dedicación. No hay garantías mágicas, solo herramientas probadas que funcionan cuando las usas bien.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
