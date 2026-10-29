import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteShell from '../../site-shell';
import CtaBand from '../../components/cta-band';
import ShareButton from '../../components/share-button';
import PortableBody from '../../components/portable-body';
import { readingTime, formatDate } from '../../../../lib/posts';
import { getPostBySlug, getPosts } from '../../../../lib/content';

export async function generateStaticParams() {
  return (await getPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | Guri Digital`, description: post.excerpt };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const all = await getPosts();
  const related = all.filter((p) => p.slug !== slug).slice(0, 2);
  const paragraphs = Array.isArray(post.content) ? post.content : [];

  return (
    <SiteShell>
      <article className="sx-article">
        <header className="sx-wrap sx-article-head">
          <Link className="sx-back" href="/blog">← Voltar ao blog</Link>
          <p className="sx-meta sx-rise">{[post.category, formatDate(post.date), `${readingTime(post)} min de leitura`].filter(Boolean).join(' · ')}</p>
          <h1 className="sx-rise" style={{ '--d': '80ms' }}>{post.title}</h1>
          <p className="sx-lead sx-rise" style={{ '--d': '160ms' }}>{post.excerpt}</p>
        </header>
        {post.coverImage && <div className="sx-wrap"><img className="sx-article-cover sx-rise" style={{ '--d': '220ms' }} src={post.coverImage} alt="" /></div>}
        <div className="sx-prose">
          {post.body ? <PortableBody value={post.body} /> : paragraphs.map((text, i) => <p key={i}>{text}</p>)}
          <div className="sx-article-foot">
            <span>Escrito por {post.author || 'Guri Digital'}</span>
            <ShareButton title={post.title} />
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="sx-wrap sx-related-posts">
          <p className="home-eyebrow"><span />CONTINUE LENDO</p>
          <div className="sx-post-grid">
            {related.map((p) => (
              <Link className="sx-post" href={`/blog/${p.slug}`} key={p.slug}>
                {p.coverImage && <div className="sx-post-img"><img src={p.coverImage} alt="" loading="lazy" /></div>}
                <p className="sx-meta">{[p.category, formatDate(p.date)].filter(Boolean).join(' · ')}</p>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      <CtaBand />
    </SiteShell>
  );
}
