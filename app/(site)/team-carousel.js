'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

function useSlidesPerView() {
  const [perView, setPerView] = useState(4);
  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 640 ? 1 : window.innerWidth < 1000 ? 2 : 4);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return perView;
}

export default function TeamCarousel({ team }) {
  const perView = useSlidesPerView();
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);
  const max = Math.max(0, team.length - perView);
  const current = Math.min(index, max);

  const go = useCallback((dir) => setIndex((i) => Math.min(max, Math.max(0, Math.min(i, max) + dir))), [max]);

  return (
    <div className="hx-team" style={{ '--pv': perView, '--i': current }}>
      <div
        className="hx-team-viewport"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="hx-team-track">
          {team.map(([name, role, image]) => (
            <article className="hx-team-card" key={name}>
              <div className="hx-team-photo"><img src={image} alt={name} loading="lazy" /></div>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="hx-team-controls">
        <button type="button" aria-label="Anterior" onClick={() => go(-1)} disabled={current === 0}>←</button>
        <button type="button" aria-label="Próximo" onClick={() => go(1)} disabled={current >= max}>→</button>
      </div>
    </div>
  );
}
