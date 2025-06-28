import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPostContent, getAllPosts } from '@/lib/blog';
import TableOfContents from '@/components/blog/TableOfContents';
import '@/styles/blog-clean.css';
import '@/styles/blog-overrides.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado - AQXION Blog',
    };
  }

  return {
    title: `${post.title} - AQXION Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await getPostContent(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Artículo optimizado */}
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        {/* Meta info limpia */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
          <span>{new Date(post.date).toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span>•</span>
          <span className="font-medium">{post.readTime}</span>
        </div>
        
        {/* Título potente */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        
        {/* Autor y compartir optimizado */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{post.author}</div>
              <div className="text-gray-600 text-sm">Marketing Digital</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://aqxion.com/blog/${slug}`)}`}
              target="_blank"
              rel="noopener"
              className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://aqxion.com/blog/${slug}`)}`}
              target="_blank"
              rel="noopener"
              className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="mb-10">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Contenido con final claro */}
        <article className="max-w-none">
          <TableOfContents />
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {/* Final del artículo claro */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              ✓ Artículo completado
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </main>
      {/* CTA optimizado - sin línea gris */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para implementar esto en tu negocio?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Agenda una consulta gratuita de 15 minutos y descubre cómo aplicar estas estrategias específicamente a tu caso.
            </p>
            
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Agendar Consulta Gratuita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <p className="text-gray-500 text-sm mt-4">
              Sin compromiso • Resultados garantizados
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
