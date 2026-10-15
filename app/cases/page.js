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
          <Link className="case-card" key={item.slug} href={`/cases/${item.slug}`}>
            <img src={item.coverImage} alt="" />
            <div className="case-card-body">
              <p>{item.year} · {item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <span>Ver case →</span>
            </div>
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}
