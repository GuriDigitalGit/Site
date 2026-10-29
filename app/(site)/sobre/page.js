import SiteShell from '../site-shell';
import CtaBand from '../components/cta-band';
import StatsCounter from '../stats-counter';
import TeamCarousel from '../team-carousel';
import { team } from '../../../lib/site-data';

export const metadata = {
  title: 'Sobre | Guri Digital',
  description: 'Arte com propósito. Conceito com resultado. Conheça a Guri e o time por trás das marcas.',
};

export default function SobrePage() {
  return (
    <SiteShell>
      <section className="sx-wrap sx-hero">
        <p className="home-eyebrow sx-rise"><span />SOBRE</p>
        <h1 className="sx-rise" style={{ '--d': '80ms' }}>Arte com propósito.<br />Conceito com resultado.</h1>
      </section>

      <section className="sx-wrap sx-about">
        <p className="sx-big" data-reveal>Acreditamos que design sem conceito é decoração. E conceito sem forma são ideias.</p>
        <div className="sx-about-copy" data-reveal style={{ '--d': '120ms' }}>
          <p>Na Guri, os dois caminham juntos desde o primeiro briefing à última entrega.</p>
          <p>Cada projeto recebe atenção total: sem terceirizações, sem templates, sem atalhos — só originalidade.</p>
        </div>
      </section>

      <section className="home-section home-ethos sx-stats-block">
        <div className="home-wide"><StatsCounter /></div>
      </section>

      <section className="home-team" data-reveal>
        <div className="home-wide">
          <div className="team-heading">
            <div>
              <p className="home-eyebrow"><span />NOSSO TIME</p>
              <h2>Conheça quem faz a Guri acontecer.</h2>
            </div>
            <p>Uma equipe multidisciplinar movida por criatividade, estratégia e um compromisso inabalável com a qualidade.</p>
          </div>
          <TeamCarousel team={team} />
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
