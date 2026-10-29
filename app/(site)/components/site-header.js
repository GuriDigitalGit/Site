'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const navItems = [
  ['Cases', '/cases'],
  ['Serviços', '/servicos'],
  ['Sobre', '/sobre'],
  ['Blog', '/blog'],
];

function isActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className="sx-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <header className={`sx-header${scrolled ? ' is-scrolled' : ''}${hidden && !open ? ' is-hidden' : ''}${open ? ' is-open' : ''}`}>
        <Link className="sx-logo" href="/" aria-label="Guri Digital — página inicial">
          <img src="/site-home/live-logo.svg" alt="Guri Digital" />
        </Link>
        <nav className="sx-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} aria-current={isActive(pathname, href) ? 'page' : undefined}>{label}</Link>
          ))}
        </nav>
        <Link className="home-header-cta sx-cta" href="/contato">Falar com a Guri <span>→</span></Link>
        <button
          type="button"
          className="sx-burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="sx-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </header>
      <div id="sx-drawer" className={`sx-drawer${open ? ' is-open' : ''}`} inert={!open} aria-hidden={!open}>
        <nav aria-label="Menu mobile">
          {[['Início', '/'], ...navItems, ['Contato', '/contato']].map(([label, href], index) => (
            <Link key={href} href={href} style={{ '--i': index }} aria-current={(href === '/' ? pathname === '/' : isActive(pathname, href)) ? 'page' : undefined}>
              <small>{String(index + 1).padStart(2, '0')}</small>{label}
            </Link>
          ))}
        </nav>
        <div className="sx-drawer-foot">
          <a href="mailto:comercial1@guridigital.com.br">comercial1@guridigital.com.br</a>
          <a href="tel:+5511955795397">+55 11 95579 5397</a>
          <span>
            <a href="https://instagram.com/guriwork" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://behance.net/guridigital" target="_blank" rel="noreferrer">Behance ↗</a>
          </span>
        </div>
      </div>
    </>
  );
}
