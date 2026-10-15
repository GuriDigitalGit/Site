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
      <article className="case-detail">
        <p>{item.year} · {item.category}</p>
        <h1>{item.title}</h1>
        <p>{item.excerpt}</p>
        <img className="case-detail-hero" src={item.heroImage} alt="" />
        <div className="case-detail-copy">
        <h2>Desafio</h2>
        <p>{item.challenge}</p>
        <h2>Solução</h2>
        <p>{item.solution}</p>
        <h2>Resultado</h2>
        <p>{item.results}</p>
        </div>
        <div className="case-gallery" aria-label={`Imagens do case ${item.title}`}>
          {item.gallery.map((image) => <img key={image} src={image} alt="" />)}
        </div>
      </article>
    </SiteShell>
  );
}
