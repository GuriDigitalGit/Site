import SiteShell from '../site-shell';
import CtaBand from '../components/cta-band';
import CasesExplorer from '../components/cases-explorer';
import { getCases } from '../../../lib/content';

export const metadata = {
  title: 'Cases | Guri Digital',
  description: 'Marcas que viraram referência. Projetos em que estratégia, identidade e direção criativa viram presença de marca.',
};

export default async function CasesPage() {
  const cases = await getCases();
  return (
    <SiteShell>
      <section className="sx-wrap sx-hero">
        <p className="home-eyebrow sx-rise"><span />PORTFÓLIO</p>
        <h1 className="sx-rise" style={{ '--d': '80ms' }}>Marcas que viraram referência.</h1>
        <p className="sx-lead sx-rise" style={{ '--d': '160ms' }}>Projetos em que estratégia, identidade e direção criativa viram presença de marca.</p>
      </section>
      <CasesExplorer cases={cases} />
      <CtaBand />
    </SiteShell>
  );
}
