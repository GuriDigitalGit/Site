import Link from 'next/link';
import { cases } from '../lib/cases';

const services = [
  ['01', 'Estratégia de marca', 'Posicionamento, território e direção para marcas que querem ser lembradas.'],
  ['02', 'Identidade visual', 'Sistemas visuais com personalidade, consistência e espaço para evoluir.'],
  ['03', 'Naming e verbal', 'Nomes, vozes e narrativas que dão forma ao que a marca acredita.'],
  ['04', 'Direção criativa', 'Conceitos e campanhas que transformam estratégia em presença.'],
];
const process = [
  ['01', 'Escuta', 'Mergulhamos no seu universo. Entendemos o negócio, o mercado, as pessoas e o que ainda não foi dito sobre você.'],
  ['02', 'Descoberta', 'Encontramos a ideia central que torna sua marca diferente, relevante e difícil de esquecer.'],
  ['03', 'Construção', 'Transformamos a convicção em nome, linguagem, identidade e experiências que funcionam no mundo real.'],
  ['04', 'Presença', 'Entregamos as ferramentas para a marca continuar viva, coerente e reconhecível em cada ponto de contato.'],
];
const team = [['Ryan Kelven', 'Head de criação'], ['Ana Beatriz', 'Estratégia e conteúdo'], ['Lucas Ferreira', 'Direção de arte'], ['Júlia Martins', 'Design de marca']];

function Eyebrow({ children, light = false }) { return <p className={`home-eyebrow${light ? ' home-eyebrow-light' : ''}`}><span />{children}</p>; }

function HomeHeader() {
  return <header className="home-header"><Link className="home-logo" href="/" aria-label="Guri Digital">GURI<span>®</span></Link><nav aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#manifesto">Manifesto</a><a href="#servicos">Serviços</a><a href="#trabalhos">Trabalhos</a><a href="#sobre">Sobre</a></nav><Link className="home-header-cta" href="/contato">Falar com a Guri <span>→</span></Link></header>;
}

export default function HomePage() {
  return <div className="home-page" id="inicio">
    <HomeHeader />
    <main>
      <section className="home-hero"><div className="home-hero-inner"><h1>Marcas que ninguém esquece.</h1><p className="home-hero-lead">Do conceito à forma. Do nome à alma. Construímos marcas com identidade genuína e presença inesquecível.</p><div className="home-actions"><Link className="home-button home-button-dark" href="/contato">Descobrir seu novo mecanismo de marca <span>→</span></Link><a className="home-button home-button-outline" href="#trabalhos">Ver trabalhos</a></div></div><div className="home-proof"><p><span />+80 marcas construídas — desde 2022</p><div className="home-client-logos"><b>CAMADA</b><b>Pagfy</b><b>verve</b><b>ORIGEM</b><b>novva</b><b>mira</b></div></div></section>
      <section className="home-manifesto" id="manifesto"><div className="home-wide"><Eyebrow light>MANIFESTO</Eyebrow><div className="manifesto-title"><p>Toda marca nasce de uma ideia.</p><p>As grandes nascem de uma convicção.</p></div><div className="manifesto-copy"><p>Na Guri, não construímos identidades visuais.</p><p>Construímos razões para existir.</p></div></div></section>
      <section className="home-section home-services" id="servicos"><div className="home-wide"><Eyebrow>SERVIÇOS</Eyebrow><div className="home-section-heading"><h2>O que entregamos.</h2><p>Estratégia, design e criatividade para marcas que têm algo importante a dizer.</p></div><div className="service-grid">{services.map(([number, title, copy]) => <article className="service-card" key={number}><div className="service-art">{number}</div><div><Eyebrow>{number}</Eyebrow><h3>{title}</h3><p>{copy}</p><Link href="/servicos">Conhecer serviço <span>→</span></Link></div></article>)}</div></div></section>
      <section className="home-section home-works" id="trabalhos"><div className="home-wide"><Eyebrow>TRABALHOS</Eyebrow><div className="home-section-heading works-heading"><h2>Marcas que viraram referência.</h2><div className="work-tabs"><span>Todos</span><span>Branding</span><span>Digital</span></div></div><div className="works-grid">{cases.slice(0, 3).map((item, index) => <Link className={`work-card work-card-${index + 1}`} href={`/cases/${item.slug}`} key={item.slug}><img src={item.coverImage} alt="" /><div className="work-card-overlay"><p>{item.category} · {item.year}</p><h3>{item.title}</h3><span>Ver projeto →</span></div></Link>)}</div><Link className="home-more-link" href="/cases">Ver todos os trabalhos <span>→</span></Link></div></section>
      <section className="home-section home-ethos" id="sobre"><div className="home-wide"><div className="ethos-heading"><div><Eyebrow>ETHOS</Eyebrow><h2>Arte com propósito.<br />Conceito com resultado.</h2></div><div className="ethos-copy"><p>Acreditamos que design sem conceito é decoração. E conceito sem forma são ideias. Na Guri, os dois caminham juntos desde o primeiro briefing à última entrega.</p><p>Cada projeto recebe atenção total: sem terceirizações, sem templates, sem atalhos — só originalidade.</p></div></div><div className="stats-grid"><div><strong>+80</strong><p>Marcas construídas do zero</p></div><div><strong>+12</strong><p>Segmentos atravessados</p></div><div><strong>100%</strong><p>Feito sob medida</p></div></div></div></section>
      <section className="home-section home-process"><div className="home-wide"><Eyebrow>PROCESSO</Eyebrow><h2>Como trabalhamos.</h2><div className="process-list">{process.map(([number, title, copy]) => <div className="process-row" key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
      <section className="home-contact"><div className="contact-art" /><div className="contact-copy"><Eyebrow>CONTATO</Eyebrow><h2>Pronto para construir algo real?</h2><p>Conta pra gente o que você está construindo. A gente te diz como a marca pode levar isso mais longe.</p><Link className="home-button home-button-dark" href="/contato">Falar com a Guri <span>→</span></Link></div></section>
      <section className="home-team"><div className="home-wide"><div className="team-heading"><div><Eyebrow>NOSSO TIME</Eyebrow><h2>Conheça quem faz<br />a Guri acontecer.</h2></div><p>Uma equipe multidisciplinar movida por criatividade, estratégia e um compromisso inabalável com a qualidade.</p></div><div className="team-grid">{team.map(([name, role]) => <article key={name}><div className="team-photo" /><h3>{name}</h3><p>{role}</p></article>)}</div></div></section>
    </main>
    <footer className="home-footer"><div className="footer-brand"><Link className="home-logo" href="/">GURI<span>®</span></Link><p>Agência de branding & criação de marca.<br />Do conceito à forma.<br />Do nome à alma.</p></div><div><Eyebrow light>NAVEGAÇÃO</Eyebrow><nav><a href="#inicio">Início</a><a href="#manifesto">Manifesto</a><a href="#servicos">Serviços</a><a href="#trabalhos">Trabalhos</a></nav></div><div><Eyebrow light>FALE COM A GENTE</Eyebrow><a href="mailto:oi@guri.digital">oi@guri.digital</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div><div className="footer-bottom">© 2026 Guri Digital. Todos os direitos reservados.</div></footer>
  </div>;
}
