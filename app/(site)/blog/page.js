import SiteShell from '../site-shell';
import BlogExplorer from '../components/blog-explorer';
import CtaBand from '../components/cta-band';
import { readingTime, formatDate } from '../../../lib/posts';
import { getPosts } from '../../../lib/content';

export const metadata = {
  title: 'Blog | Guri Digital',
  description: 'Conteúdos sobre branding, direção criativa e cinema sintético.',
};

export default async function BlogPage() {
  const posts = await getPosts();
  const list = posts
    .map((post) => ({ ...post, dateLabel: formatDate(post.date), readingTime: readingTime(post) }))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <SiteShell>
      <section className="sx-wrap sx-hero">
        <p className="home-eyebrow sx-rise"><span />BLOG</p>
        <h1 className="sx-rise" style={{ '--d': '80ms' }}>Ideias, processo e bastidores.</h1>
        <p className="sx-lead sx-rise" style={{ '--d': '160ms' }}>Conteúdos sobre branding, direção criativa e cinema sintético.</p>
      </section>
      <BlogExplorer posts={list} />
      <CtaBand />
    </SiteShell>
  );
}
