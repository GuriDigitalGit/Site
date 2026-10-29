'use client';

import { useEffect, useState } from 'react';

function scrollTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}

export function ToTopLink({ children }) {
  return <button type="button" className="sx-linkbtn" onClick={scrollTop}>{children}</button>;
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button type="button" className={`sx-totop${visible ? ' is-visible' : ''}`} aria-label="Voltar ao topo" onClick={scrollTop} tabIndex={visible ? 0 : -1}>
      ↑
    </button>
  );
}
