import Link from 'next/link';
import SiteShell from '../site-shell';
import { posts } from '../../lib/posts';

export default function BlogPage() {
  return (
    <SiteShell>
      <h1>Blog</h1>
      <p>Conteúdos sobre branding, direção criativa e cinema sintético.</p>
      <div>
        {posts.map((post) => (
          <article key={post.slug}>
            <p>{post.date}</p>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
