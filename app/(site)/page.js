import Link from 'next/link';
import { services, process, team } from '../../lib/site-data';
import { getCases } from '../../lib/content';
import HomeMotion from './home-motion';
import SiteHeader from './components/site-header';
import SiteFooter from './components/site-footer';
import Manifesto from './components/manifesto';
import LogoMarquee from './components/logo-marquee';
import CtaBand from './components/cta-band';
import StatsCounter from './stats-counter';
import TeamCarousel from './team-carousel';
import WorkGrid from './work-grid';

const testimonialsTop = [
  ['Thaisa Leal', 'Nutricionista', '/site-home/testimonials/thaisa.webp'],
  ['Maia Santos', 'Infoprodutora', '/site-home/testimonials/maia.webp'],
  ['May Duchini', 'Infoprodutora', '/site-home/testimonials/may.webp'],
  ['George Montenegro', 'CEO - QueroQuiro', '/site-home/testimonials/george.webp'],
  ['Pablo Marçal', 'Infoprodutor', '/site-home/testimonials/pablo.webp'],
  ['Thiago Barros', 'Infoprodutor', '/site-home/testimonials/thiago.webp'],
  ['Treino Híbrido', 'Infoprodutor', '/site-home/testimonials/treino.webp'],
  ['Mila Moura', 'Infoprodutora', '/site-home/testimonials/mila.webp'],
  ['Laize Andreatta', 'Infoprodutora', '/site-home/testimonials/laize.webp'],
  ['Adriel Araújo', 'Infoprodutor', '/site-home/testimonials/adriel.webp'],
  ['Letícia Pires', 'Infoprodutora', '/site-home/testimonials/leticia.webp'],
  ['Denis Bugatti', 'Corretor Imobiliário', '/site-home/testimonials/denis.webp'],
  ['Leo Junckes', 'Infoprodutor', '/site-home/testimonials/leo.webp'],
];
const testimonialsBottom = [
  ['Valentina Marcillo', 'Infoprodutora', '/site-home/testimonials/valentina.webp'],
  ['Levir', 'Infoprodutor', '/site-home/testimonials/levir.webp'],
  ['Dr. David Sena', 'Médico', '/site-home/testimonials/david.webp'],
  ['Verónika Alvarado', 'Infoprodutora', '/site-home/testimonials/veronika.webp'],
  ['Débora Rodrigues', 'Infoprodutora', '/site-home/testimonials/debora.webp'],
  ['Filipe Trindade', 'Infoprodutor', '/site-home/testimonials/filipe.webp'],
  ['William Ribeiro', 'Infoprodutor', '/site-home/testimonials/william.webp'],
  ['Dicas do Padrinho', 'Infoprodutor', '/site-home/testimonials/dicas.webp'],
  ['Carol Mançur', 'Infoprodutor', '/site-home/testimonials/carol.webp'],
  ['Bruna Araújo', 'Infoprodutora', '/site-home/testimonials/bruna.webp'],
  ['Pedro Bandeira', 'Empresário', '/site-home/testimonials/pedro.webp'],
  ['Claudio Lara', 'Master Trainer PNL', '/site-home/testimonials/claudio.webp'],
];
function Eyebrow({ children, light = false }) { return <p className={`home-eyebrow${light ? ' home-eyebrow-light' : ''}`}><span />{children}</p>; }

export default async function HomePage() {
  const homeCases = (await getCases()).slice(0, 6).map((item) => [item.title, item.slug, item.category, item.coverImage]);
  return <div className="home-page" id="inicio"><HomeMotion /><SiteHeader /><main>
    <section className="home-hero live-hero"><img className="live-rocket" src="/site-home/hero-rocket.svg" alt="" /><img className="live-scribble" src="/site-home/hero-scribble.svg" alt="" /><img className="live-telescope" src="/site-home/hero-telescope.svg" alt="" /><div className="home-hero-inner"><h1>Marcas que ninguém esquece.</h1><p className="home-hero-lead">Do conceito à forma. Do nome à alma. Construímos marcas com identidade genuína e presença inesquecível.</p><div className="home-actions"><Link className="home-button home-button-dark" href="/contato">Descobrir seu novo mecanismo de marca <span>→</span></Link><a className="home-button home-button-outline" href="#trabalhos">Ver trabalhos</a></div></div><div className="home-proof"><p>Empresas que já confiaram no nosso trabalho!</p><LogoMarquee /></div></section>
    <Manifesto />
    <section className="home-section home-services" id="servicos"><div className="home-wide"><Eyebrow>SERVIÇOS</Eyebrow><div className="home-section-heading"><h2>O que entregamos.</h2><p>Quatro frentes de trabalho que se conectam porque marca não é só o que se vê, é o que se decide, se diz e se sente.</p></div><div className="service-grid live-service-grid">{services.map(([number, title, copy]) => <article className="service-card live-service-card" key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <section className="home-section home-works" id="trabalhos"><div className="home-wide"><Eyebrow>TRABALHOS</Eyebrow><WorkGrid cases={homeCases} /></div></section>
    <section className="home-testimonials"><div className="testimonial-track">{testimonialsTop.concat(testimonialsTop).map(([name, role, image], i) => <article key={`top-${name}-${i}`}><div className="testimonial-avatar"><img src={image} alt="" /></div><h3>{name}</h3><p>{role}</p></article>)}</div><div className="testimonial-track testimonial-track-reverse">{testimonialsBottom.concat(testimonialsBottom).map(([name, role, image], i) => <article key={`bottom-${name}-${i}`}><div className="testimonial-avatar"><img src={image} alt="" /></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>
    <section className="home-section home-ethos" id="sobre"><div className="home-wide"><div className="ethos-heading"><div><Eyebrow>ETHOS</Eyebrow><h2>Arte com propósito.<br />Conceito com resultado.</h2></div><div className="ethos-copy"><p>Acreditamos que design sem conceito é decoração. E conceito sem forma são ideias. Na Guri, os dois caminham juntos desde o primeiro briefing à última entrega.</p><p>Cada projeto recebe atenção total: sem terceirizações, sem templates, sem atalhos — só originalidade.</p></div></div><StatsCounter /></div></section>
    <section className="home-section home-process"><div className="home-wide"><Eyebrow>PROCESSO</Eyebrow><h2>Como trabalhamos.</h2><div className="process-list">{process.map(([number, title, copy]) => <div className="process-row" key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
    <CtaBand />
    <section className="home-team"><div className="home-wide"><div className="team-heading"><div><Eyebrow>NOSSO TIME</Eyebrow><h2>Conheça quem faz a Guri acontecer.</h2></div><p>Uma equipe multidisciplinar movida por criatividade, estratégia e um compromisso inabalável com a qualidade.</p></div><TeamCarousel team={team} /></div></section>
  </main><SiteFooter /></div>;
}
