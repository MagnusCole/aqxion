import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPostContent, getAllPosts } from '@/lib/blog';
import '@/styles/blog.css';

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
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500">{new Date(post.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{post.readTime} lectura</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-gray-600 text-sm">Especialista en Marketing Digital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <article className="bg-white">
            <div 
              className="blog-content prose prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            
            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{post.author}</div>
                  <div className="text-gray-600">Especialista en Marketing Digital</div>
                  <div className="text-gray-500 text-sm">
                    Publicado el {new Date(post.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Etiquetas del artículo</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 transition-all duration-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='25' cy='5' r='1'/%3E%3Ccircle cx='45' cy='5' r='1'/%3E%3Ccircle cx='5' cy='25' r='1'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='45' cy='25' r='1'/%3E%3Ccircle cx='5' cy='45' r='1'/%3E%3Ccircle cx='25' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="container mx-auto px-8 max-w-4xl text-center relative">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Te gustó este artículo?
            </h2>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              Implementa estas estrategias en tu negocio o contáctanos para ayudarte a aplicarlas
            </p>
            <p className="text-blue-200 text-lg">
              Obtén una consulta gratuita y personalizada para tu negocio
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contacto"
              className="group bg-white text-blue-600 font-bold px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Consulta Gratuita
            </Link>
            <Link
              href="/blog"
              className="group border-2 border-white text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Ver Más Artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
