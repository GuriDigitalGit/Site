'use client';

import { useEffect, useRef } from 'react';

// Bloco do manifesto: a marca "Guri" desenhada em grade, com selo giratório e mascote.
// As camadas se movem de leve conforme a rolagem da página.
export default function Manifesto() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hx-manifesto" id="manifesto" ref={ref} style={{ '--p': 0.5 }}>
      <div className="hx-brand-stage">
        <div className="hx-brand">
          <span className="hx-brand-box is-left" aria-hidden="true" />
          <span className="hx-brand-box is-right" aria-hidden="true" />
          <img className="hx-layer" src="/site-home/brand/g.svg" alt="" />
          <img className="hx-layer hx-l-u" src="/site-home/brand/u.svg" alt="" />
          <img className="hx-layer hx-l-r" src="/site-home/brand/r.svg" alt="" />
          <img className="hx-layer hx-l-i" src="/site-home/brand/i.svg" alt="" />
          <img className="hx-layer hx-l-h" src="/site-home/brand/lines-h.svg" alt="" />
          <img className="hx-layer hx-l-v" src="/site-home/brand/lines-v.svg" alt="" />
          <div className="hx-stamp" aria-hidden="true">
            <img className="hx-stamp-disc" src="/site-home/brand/stamp-disc.svg" alt="" />
            <img className="hx-stamp-ring" src="/site-home/brand/stamp-ring.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="hx-manifesto-row">
        <p className="home-eyebrow home-eyebrow-light"><span />MANIFESTO</p>
        <p className="hx-manifesto-text">
          Na Guri, não construímos identidades visuais.<br />
          <strong>Construímos razões para existir.</strong>
        </p>
      </div>
    </section>
  );
}
