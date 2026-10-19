import Link from 'next/link';
import HomeMotion from './home-motion';

const services = [
  ['01', 'Branding & Estratégia', 'Antes de mostrar como você parece, definimos quem você é. Posicionamento, propósito, arquitetura de marca e narrativa — a espinha dorsal de tudo que vem depois.'],
  ['02', 'Naming', 'Um nome é a primeira coisa que o mundo vai esquecer, ou nunca mais tirar da cabeça. Criamos nomes com personalidade, sentido e permanência.'],
  ['03', 'Identidade Visual', 'Do símbolo à tipografia, das cores ao sistema de aplicação. Uma identidade que se reconhece em qualquer superfície, em qualquer contexto.'],
  ['04', 'Estrutura Digital', 'Uma reestruturação inteligente dos canais digitais da sua marca. Transformamos sua comunicação online em uma vitrine com alta percepção de valor.'],
];
const process = [
  ['01', 'Escuta', 'Mergulhamos no seu universo. Não fazemos perguntas genéricas. Entendemos o negócio, o mercado, as pessoas e o que ainda não foi dito sobre você que deveria ser.'],
  ['02', 'Conceituação', 'Transformamos descobertas em territórios criativos únicos. Construímos o eixo conceitual que vai orientar todas as decisões de marca.'],
  ['03', 'Design', 'Damos forma ao conceito. Cada elemento é deliberado. Cada escolha tem razão de existir além da estética.'],
  ['04', 'Ativação', 'Documentamos e entregamos um sistema completo, pronto para ser aplicado com consistência por qualquer equipe, em qualquer canal.'],
];
const cases = [
  ['Comunidade Leal', 'thaisa-leal-case', 'Branding, Estrutura Digital, Identidade Visual', '/site-home/case-thaisa.webp'],
  ['Shape Now', 'shape-now-case', 'Identidade Visual', '/site-home/case-shape.webp'],
  ['Bruna Zanatta', 'bruna-zanatta-case', 'Identidade Visual', '/site-home/case-bruna.webp'],
  ['Kleverson Passos', 'kleverson-passos-case', 'Identidade Visual', '/site-home/case-kleverson.webp'],
  ['Lo que piensan las mujeres', 'lo-que-piensan-case', 'Branding, Identidade Visual', '/site-home/case-loque.webp'],
];
const testimonials = [
  ['Maia Santos', 'Infoprodutora', '/site-home/testimonials/maia.webp'],
  ['May Duchini', 'Infoprodutora', '/site-home/testimonials/may.webp'],
  ['George Montenegro', 'CEO - QueroQuiro', '/site-home/testimonials/george.webp'],
  ['Pablo Marçal', 'Infoprodutor', '/site-home/testimonials/pablo.webp'],
  ['Thiago Barros', 'Infoprodutor', '/site-home/testimonials/thiago.webp'],
  ['Treino Híbrido', 'Infoprodutor', '/site-home/testimonials/treino.webp'],
  ['Mila Moura', 'Infoprodutora', '/site-home/testimonials/mila.webp'],
  ['Laize Andreatta', 'Infoprodutora', '/site-home/testimonials/laize.webp'],
  ['Adriel Araújo', 'Infoprodutor', '/site-home/testimonials/adriel.webp'],
  ['Denis Bugatti', 'Corretor Imobiliário', '/site-home/testimonials/denis.webp'],
  ['Leo Junckes', 'Infoprodutor', '/site-home/testimonials/leo.webp'],
  ['Levir', 'Infoprodutor', '/site-home/testimonials/levir.webp'],
  ['Valentina Marcillo', 'Infoprodutora', '/site-home/testimonials/valentina.webp'],
  ['Dr. David Sena', 'Médico', '/site-home/testimonials/david.webp'],
  ['Débora Rodrigues', 'Infoprodutora', '/site-home/testimonials/debora.webp'],
  ['Filipe Trindade', 'Infoprodutor', '/site-home/testimonials/filipe.webp'],
  ['William Ribeiro', 'Infoprodutor', '/site-home/testimonials/william.webp'],
  ['Dicas do Padrinho', 'Infoprodutor', '/site-home/testimonials/dicas.webp'],
  ['Carol Mançur', 'Infoprodutor', '/site-home/testimonials/carol.webp'],
  ['Bruna Araújo', 'Infoprodutora', '/site-home/testimonials/bruna.webp'],
  ['Pedro Bandeira', 'Empresário', '/site-home/testimonials/pedro.webp'],
  ['Claudio Lara', 'Master Trainer PNL', '/site-home/testimonials/claudio.webp'],
];
const team = [['Ryan Kelven', 'Head de criação', '/site-home/team/ryan.webp'], ['Gustavo Arpassy', 'Head de estratégia', '/site-home/team/gustavo.webp'], ['Beatriz Soares', 'Branding designer', '/site-home/team/beatriz.webp'], ['Rafael Custódio', 'Web designer', '/site-home/team/rafael.webp'], ['Alessandro Evangelista', 'Designer', '/site-home/team/alessandro.webp'], ['Fernanda', 'Designer', '/site-home/team/fernanda.webp']];
function Eyebrow({ children, light = false }) { return <p className={`home-eyebrow${light ? ' home-eyebrow-light' : ''}`}><span />{children}</p>; }
function Header() { return <header className="home-header"><Link className="home-logo" href="/" aria-label="Guri Digital"><img src="/site-home/live-logo.svg" alt="Guri Digital" /></Link><button className="home-menu" aria-label="Abrir menu"><span /><span /><span /></button><nav aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#manifesto">Manifesto</a><a href="#servicos">Serviços</a><a href="#trabalhos">Trabalhos</a><a href="#sobre">Sobre</a></nav><Link className="home-header-cta" href="/contato">Falar com a Guri <span>→</span></Link></header>; }

export default function HomePage() {
  return <div className="home-page" id="inicio"><HomeMotion /><Header /><main>
    <section className="home-hero live-hero"><img className="live-rocket" src="/site-home/hero-rocket.svg" alt="" /><img className="live-scribble" src="/site-home/hero-scribble.svg" alt="" /><img className="live-telescope" src="/site-home/hero-telescope.svg" alt="" /><div className="home-hero-inner"><h1>Marcas que ninguém esquece.</h1><p className="home-hero-lead">Do conceito à forma. Do nome à alma. Construímos marcas com identidade genuína e presença inesquecível.</p><div className="home-actions"><Link className="home-button home-button-dark" href="/contato">Descobrir seu novo mecanismo de marca <span>→</span></Link><a className="home-button home-button-outline" href="#trabalhos">Ver trabalhos</a></div></div><div className="home-proof"><p>Empresas que já confiaram no nosso trabalho!</p><div className="home-client-logos"><b>CAMADA</b><b>Pagfy</b><b>VERVE</b><b>ORIGEM</b><b>NOVVA</b><b>MIRA</b></div></div></section>
    <section className="home-manifesto" id="manifesto"><div className="home-wide"><Eyebrow light>MANIFESTO</Eyebrow><div className="manifesto-title"><p>Na Guri, não construímos identidades visuais.</p><p>Construímos razões para existir.</p></div></div></section>
    <section className="home-section home-services" id="servicos"><div className="home-wide"><Eyebrow>SERVIÇOS</Eyebrow><div className="home-section-heading"><h2>O que entregamos.</h2><p>Quatro frentes de trabalho que se conectam porque marca não é só o que se vê, é o que se decide, se diz e se sente.</p></div><div className="service-grid live-service-grid">{services.map(([number, title, copy]) => <article className="service-card live-service-card" key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <section className="home-section home-works" id="trabalhos"><div className="home-wide"><Eyebrow>TRABALHOS</Eyebrow><div className="home-section-heading works-heading"><h2>Marcas que viraram referência.</h2><select aria-label="Filtrar trabalhos"><option>Filtrar por categoria...</option><option>Branding</option><option>Estrutura Digital</option><option>Identidade Visual</option></select></div><div className="works-grid live-works-grid">{cases.map(([title, slug, category, image]) => <Link className="work-card" href={`/cases/${slug}`} key={slug}><img src={image} alt="" /><div className="work-card-overlay"><h3>{title}</h3><p>{category}</p></div></Link>)}</div><Link className="home-more-link" href="/cases">Ver todos os trabalhos <span>→</span></Link></div></section>
    <section className="home-testimonials"><div className="testimonial-track">{testimonials.concat(testimonials).map(([name, role, image], i) => <article key={`top-${name}-${i}`}><div className="testimonial-avatar"><img src={image} alt="" /></div><h3>{name}</h3><p>{role}</p></article>)}</div><div className="testimonial-track testimonial-track-reverse">{testimonials.concat(testimonials).map(([name, role, image], i) => <article key={`bottom-${name}-${i}`}><div className="testimonial-avatar"><img src={image} alt="" /></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>
    <section className="home-section home-ethos" id="sobre"><div className="home-wide"><div className="ethos-heading"><div><Eyebrow>ETHOS</Eyebrow><h2>Arte com propósito.<br />Conceito com resultado.</h2></div><div className="ethos-copy"><p>Acreditamos que design sem conceito é decoração. E conceito sem forma são ideias. Na Guri, os dois caminham juntos desde o primeiro briefing à última entrega.</p><p>Cada projeto recebe atenção total: sem terceirizações, sem templates, sem atalhos — só originalidade.</p></div></div><div className="stats-grid"><div><strong>+80</strong><p>Marcas construídas do zero</p></div><div><strong>3</strong><p>Anos de estúdio independente</p></div><div><strong>100%</strong><p>Projetos feitos in-house</p></div></div></div></section>
    <section className="home-section home-process"><div className="home-wide"><Eyebrow>PROCESSO</Eyebrow><h2>Como trabalhamos.</h2><div className="process-list">{process.map(([number, title, copy]) => <div className="process-row" key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
    <section className="home-contact"><div className="contact-art"><img src="/figma-home/contact-art.svg" alt="" /></div><div className="contact-copy"><Eyebrow>CONTATO</Eyebrow><h2>Pronto para construir algo real?</h2><p>Conta pra gente o que você está construindo. A gente te diz como a marca pode levar isso mais longe.</p><Link className="home-button home-button-dark" href="/contato">Falar com a Guri <span>→</span></Link></div></section>
    <section className="home-team"><div className="home-wide"><div className="team-heading"><div><Eyebrow>NOSSO TIME</Eyebrow><h2>Conheça quem faz a Guri acontecer.</h2></div><p>Uma equipe multidisciplinar movida por criatividade, estratégia e um compromisso inabalável com a qualidade.</p></div><div className="team-grid">{team.concat(team).map(([name, role, image], i) => <article key={`${name}-${i}`}><div className="team-photo"><img src={image} alt="" /></div><h3>{name}</h3><p>{role}</p></article>)}</div></div></section>
  </main><footer className="home-footer"><div className="footer-brand"><Link className="home-logo" href="/"><img src="/figma-home/footer-logo.svg" alt="Guri Digital" /></Link><p>Agência de branding & criação de marca.<br />Do conceito à forma.<br />Do nome à alma.</p></div><div><Eyebrow light>NAVEGAÇÃO</Eyebrow><nav><a href="#inicio">Início</a><a href="#manifesto">Manifesto</a><a href="#servicos">Serviços</a><a href="#trabalhos">Trabalhos</a><a href="#sobre">Sobre</a></nav></div><div><Eyebrow light>CONTATO</Eyebrow><a href="mailto:comercial1@guridigital.com.br">comercial1@guridigital.com.br</a><a href="tel:+5511955795397">+55 11 95579 5397</a><span>São Paulo, Brasil</span></div><div><Eyebrow light>REDES</Eyebrow><a href="https://instagram.com/guriwork" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://behance.net/guridigital" target="_blank" rel="noreferrer">Behance ↗</a></div><div className="footer-word">GURI DIGITAL</div><div className="footer-bottom">© 2026 GURI Digital. Todos os direitos reservados.<span>Voltar ao topo ↑</span></div></footer></div>;
}
