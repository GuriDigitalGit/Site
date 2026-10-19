import Link from 'next/link';
import { cases, getCaseBySlug } from '../../../lib/cases';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return cases.map((item) => ({ slug: item.slug })); }

function CaseHeader() {
  return <header className="case-header"><Link className="case-logo" href="/"><img src="/site-home/live-logo.svg" alt="Guri Digital" /></Link><button className="home-menu" aria-label="Abrir menu"><span /><span /><span /></button><nav><a href="/#inicio">Início</a><a href="/#manifesto">Manifesto</a><a href="/#servicos">Serviços</a><a href="/#trabalhos">Trabalhos</a><a href="/#sobre">Sobre</a></nav><Link className="home-header-cta" href="/contato">Falar com a Guri <span>→</span></Link></header>;
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();
  const intro = item.caseIntro || 'Uma marca construída para ser reconhecida.';
  const description = item.caseDescription || item.excerpt;
  return <div className="case-page"><CaseHeader /><main>
    <section className="case-hero"><Link className="case-back" href="/#trabalhos">← Voltar</Link><img src={item.heroImage} alt="" /><div className="case-meta"><div><strong>{item.client}</strong><span>CLIENTE</span></div><div><strong>{item.category}</strong><span>SERVIÇO</span></div><div><strong>{item.year}</strong><span>ANO</span></div><div><strong>{item.sector || 'Branding'}</strong><span>SETOR</span></div></div></section>
    <section className="case-intro"><Eyebrow> SOBRE O PROJETO</Eyebrow><h1>{intro}</h1><p>{description}</p></section>
    <section className="case-gallery">{item.gallery.map((image) => <img src={image} alt="" key={image} />)}</section>
    <section className="case-more"><Eyebrow>MAIS TRABALHOS</Eyebrow><h2>Explore outros projetos.</h2><Link className="home-button home-button-outline" href="/#trabalhos">Ver todos os trabalhos <span>→</span></Link></section>
    <section className="home-contact case-contact"><div className="contact-art" aria-hidden="true"><img className="contact-art-main" src="/site-home/contact/contact-main.svg" alt="" /><img className="contact-art-top" src="/site-home/contact/contact-top.svg" alt="" /><img className="contact-art-bottom" src="/site-home/contact/contact-bottom.svg" alt="" /></div><div className="contact-copy"><Eyebrow>CONTATO</Eyebrow><h2>Pronto para construir algo real?</h2><p>Conta pra gente o que você está construindo. A gente te diz como a marca pode levar isso mais longe.</p><Link className="home-button home-button-dark" href="/contato">Falar com a Guri <span>→</span></Link></div></section>
  </main><footer className="home-footer"><div className="footer-top"><div className="footer-brand"><Link className="home-logo" href="/"><img src="/figma-home/footer-logo.svg" alt="Guri Digital" /></Link><p>Agência de branding & criação de marca.<br />Do conceito à forma.<br />Do nome à alma.</p></div><div><Eyebrow light>NAVEGAÇÃO</Eyebrow><nav><a href="/#inicio">Início</a><a href="/#manifesto">Manifesto</a><a href="/#servicos">Serviços</a><a href="/#trabalhos">Trabalhos</a><a href="/#sobre">Sobre</a></nav></div><div><Eyebrow light>CONTATO</Eyebrow><a href="mailto:comercial1@guridigital.com.br">comercial1@guridigital.com.br</a><a href="tel:+5511955795397">+55 11 95579 5397</a><span>São Paulo, Brasil</span></div><div><Eyebrow light>REDES</Eyebrow><a href="https://instagram.com/guriwork" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://behance.net/guridigital" target="_blank" rel="noreferrer">Behance ↗</a></div></div><div className="footer-word"><img src="https://guridigital.com.br/wp-content/uploads/2026/06/imagem-GURI-DIGITAL.svg" alt="" /></div><div className="footer-bottom"><span>© 2026 GURI Digital. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer></div>;
}

function Eyebrow({ children, light = false }) { return <p className={`home-eyebrow${light ? ' home-eyebrow-light' : ''}`}><span />{children}</p>; }
