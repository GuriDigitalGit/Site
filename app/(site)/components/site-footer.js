import Link from 'next/link';
import BackToTop, { ToTopLink } from './back-to-top';
import Reveal from './reveal';

export default function SiteFooter() {
  return (
    <>
      <footer className="hx-footer">
        <div className="hx-footer-top">
          <p className="hx-footer-tagline">Agência de branding & criação de marca.<br />Do conceito à forma.<br />Do nome à alma.</p>
          <div className="hx-footer-col">
            <h6>Navegação</h6>
            <Link href="/">Início</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div className="hx-footer-col">
            <h6>Contato</h6>
            <a href="mailto:comercial1@guridigital.com.br">comercial1@guridigital.com.br</a>
            <a href="tel:+5511955795397">+55 11 95579 5397</a>
            <span>São Paulo, Brasil</span>
          </div>
          <div className="hx-footer-col">
            <h6>Redes</h6>
            <a href="https://instagram.com/guriwork" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://behance.net/guridigital" target="_blank" rel="noreferrer">Behance ↗</a>
          </div>
        </div>
        <img className="hx-footer-word" src="/site-home/brand/wordmark.svg" alt="Guri Digital" />
        <div className="hx-footer-bottom">
          <span>© 2026 GURI Digital. Todos os direitos reservados.</span>
          <ToTopLink>Voltar ao topo ↑</ToTopLink>
        </div>
      </footer>
      <BackToTop />
      <Reveal />
    </>
  );
}
