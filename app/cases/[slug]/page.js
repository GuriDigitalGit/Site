import { notFound } from 'next/navigation';
import SiteShell from '../../site-shell';
import { cases, getCaseBySlug } from '../../../lib/cases';

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) notFound();

  return (
    <SiteShell>
      <article>
        <p>{item.year} · {item.category}</p>
        <h1>{item.title}</h1>
        <p>{item.excerpt}</p>
        <h2>Desafio</h2>
        <p>{item.challenge}</p>
        <h2>Solução</h2>
        <p>{item.solution}</p>
        <h2>Resultado</h2>
        <p>{item.results}</p>
      </article>
    </SiteShell>
  );
}
