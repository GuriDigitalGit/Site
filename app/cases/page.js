import Link from 'next/link';
import SiteShell from '../site-shell';
import { cases } from '../../lib/cases';

export default function CasesPage() {
  return (
    <SiteShell>
      <p>Portfólio</p>
      <h1>Cases</h1>
      <p>Projetos em que estratégia, identidade e direção criativa viram presença de marca.</p>
      <div>
        {cases.map((item) => (
          <article key={item.slug}>
            <p>{item.year} · {item.category}</p>
            <h2><Link href={`/cases/${item.slug}`}>{item.title}</Link></h2>
            <p>{item.excerpt}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
