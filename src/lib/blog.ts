import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
  content?: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || '',
        excerpt: matterResult.data.excerpt || '',
        date: matterResult.data.date || '',
        category: matterResult.data.category || '',
        author: matterResult.data.author || '',
        readTime: matterResult.data.readTime || '',
        featured: matterResult.data.featured || false,
        image: matterResult.data.image || '',
        tags: matterResult.data.tags || [],
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title || '',
    excerpt: matterResult.data.excerpt || '',
    date: matterResult.data.date || '',
    category: matterResult.data.category || '',
    author: matterResult.data.author || '',
    readTime: matterResult.data.readTime || '',
    featured: matterResult.data.featured || false,
    image: matterResult.data.image || '',
    tags: matterResult.data.tags || [],
    content: matterResult.content,
  } as BlogPost;
}

export async function getPostContent(slug: string): Promise<string> {
  const post = getPostBySlug(slug);
  if (!post || !post.content) {
    return '';
  }

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(post.content);

  return processedContent.toString();
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = [...new Set(allPosts.map(post => post.category))];
  return categories.filter(Boolean);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = [...new Set(allPosts.flatMap(post => post.tags))];
  return tags.filter(Boolean);
}
