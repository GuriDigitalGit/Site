import { getCases, getPosts } from '../lib/content';

const baseUrl = 'https://site-pi-one-65.vercel.app';

export default async function sitemap() {
  const [cases, posts] = await Promise.all([getCases(), getPosts()]);
  const staticRoutes = ['', '/landing/cine-sintetico', '/sobre', '/servicos', '/contato', '/cases', '/blog'];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...cases.map((item) => ({ url: `${baseUrl}/cases/${item.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: post.date ? new Date(post.date) : new Date() })),
  ];
}
