import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import { BlogHero } from '@/components/sections/blog/BlogHero';
import { BlogGrid } from '@/components/sections/blog/BlogGrid';
import { BlogCategories } from '@/components/sections/blog/BlogCategories';
import { BlogNewsletter } from '@/components/sections/blog/BlogNewsletter';

export const metadata: Metadata = {
  title: 'Blog - AQXION | Marketing Digital y Estrategias de Crecimiento',
  description: 'Descubre las últimas estrategias de marketing digital, casos de éxito y tips para hacer crecer tu negocio local.',
  openGraph: {
    title: 'Blog - AQXION | Marketing Digital',
    description: 'Estrategias de marketing digital, casos de éxito y tips para negocios locales.',
    url: 'https://aqxion.com/blog',
    siteName: 'AQXION',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <BlogCategories categories={categories} />
      <BlogGrid posts={posts} />
      <BlogNewsletter />
    </div>
  );
}
