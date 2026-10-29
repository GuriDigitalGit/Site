import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteShell from '../../site-shell';
import CtaBand from '../../components/cta-band';
import CaseGallery from '../../components/case-gallery';
import CaseCard from '../../components/case-card';
import { getCases, getCaseBySlug } from '../../../../lib/content';

export async function generateStaticParams() { return (await getCases()).map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = await getCaseBySlug(slug);
  if (!item) return {};
  return { title: `${item.title} | Guri Digital`, description: item.caseDescription || item.excerpt };
}

function Eyebrow({ children }) { return <p className="home-eyebrow"><span />{children}</p>; }

export default async function CasePage({ params }) {
  const { slug } = await params;
  const item = await getCaseBySlug(slug);
  if (!item) notFound();
  const cases = await getCases();
  const position = cases.findIndex((c) => c.slug === slug);
  const next = cases[(position + 1) % cases.length];
  const others = cases.filter((c) => c.slug !== slug).slice(0, 3);
  const intro = item.caseIntro || 'Uma marca construída para ser reconhecida.';
  const description = item.caseDescription || item.excerpt;

  return (
    <SiteShell className="case-page">
      <section className="case-hero">
        <Link className="case-back" href="/cases">← Todos os cases</Link>
        <img className="sx-rise" src={item.heroImage} alt={`${item.title} — imagem principal`} />
        <div className="case-meta">
          <div><strong>{item.client}</strong><span>CLIENTE</span></div>
          <div><strong>{item.category}</strong><span>SERVIÇO</span></div>
          <div><strong>{item.year}</strong><span>ANO</span></div>
          <div><strong>{item.sector || 'Branding'}</strong><span>SETOR</span></div>
        </div>
      </section>
      <section className="case-intro" data-reveal>
        <Eyebrow>SOBRE O PROJETO</Eyebrow>
        <h1>{intro}</h1>
        <p>{description}</p>
      </section>
      <CaseGallery images={item.gallery} title={item.title} />
      <Link className="case-next" href={`/cases/${next.slug}`} data-reveal>
        <div>
          <span>PRÓXIMO CASE</span>
          <strong>{next.title}</strong>
          <em>{next.category}</em>
        </div>
        <img src={next.coverImage} alt="" loading="lazy" />
        <b aria-hidden="true">→</b>
      </Link>
      <section className="case-more">
        <Eyebrow>MAIS TRABALHOS</Eyebrow>
        <h2 data-reveal>Explore outros projetos.</h2>
        <div className="works-grid live-works-grid sx-related">
          {others.map((c, i) => <CaseCard key={c.slug} item={c} delay={i * 90} />)}
        </div>
        <Link className="home-button home-button-outline" href="/cases">Ver todos os cases <span>→</span></Link>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
