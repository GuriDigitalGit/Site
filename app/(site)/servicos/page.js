import SiteShell from '../site-shell';
import CtaBand from '../components/cta-band';
import ServiceCards from '../components/service-cards';
import { process } from '../../../lib/site-data';

export const metadata = {
  title: 'Serviços | Guri Digital',
  description: 'Branding & estratégia, naming, identidade visual e estrutura digital. Quatro frentes que se conectam.',
};

export default function ServicosPage() {
  return (
    <SiteShell>
      <section className="sx-wrap sx-hero">
        <p className="home-eyebrow sx-rise"><span />SERVIÇOS</p>
        <h1 className="sx-rise" style={{ '--d': '80ms' }}>O que entregamos.</h1>
        <p className="sx-lead sx-rise" style={{ '--d': '160ms' }}>Quatro frentes de trabalho que se conectam porque marca não é só o que se vê, é o que se decide, se diz e se sente.</p>
      </section>

      <section className="sx-wrap sx-services-cards">
        <ServiceCards details />
      </section>

      <section className="sx-process">
        <div className="sx-wrap">
          <p className="home-eyebrow home-eyebrow-light" data-reveal><span />PROCESSO</p>
          <h2 data-reveal>Como trabalhamos.</h2>
          <div className="sx-steps">
            {process.map(([number, title, copy], i) => (
              <div className="sx-step" key={number} data-reveal style={{ '--d': `${i * 110}ms` }}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
