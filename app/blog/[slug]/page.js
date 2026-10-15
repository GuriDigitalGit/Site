import { notFound } from 'next/navigation';
import SiteShell from '../../site-shell';
import { getPostBySlug, posts } from '../../../lib/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <SiteShell>
      <article>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </SiteShell>
  );
}
