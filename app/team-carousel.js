'use client';

import { useEffect, useState } from 'react';

export default function TeamCarousel({ team }) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(window.innerWidth <= 760 ? 1 : 4);
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, team.length - visibleCount);
  const move = (direction) => setIndex((current) => Math.max(0, Math.min(current + direction, maxIndex)));

  return <>
    <div className="team-carousel-viewport">
      <div className="team-grid" style={{ '--team-index': index }}>
        {team.map(([name, role, image]) => <article key={name}>
          <div className="team-photo"><img src={image} alt={name} /></div>
          <h3>{name}</h3>
          <p>{role}</p>
        </article>)}
      </div>
    </div>
    <div className="team-controls" aria-label="Controles do carrossel do time">
      <button type="button" onClick={() => move(-1)} disabled={index === 0} aria-label="Pessoa anterior">←</button>
      <button type="button" onClick={() => move(1)} disabled={index === maxIndex} aria-label="Próxima pessoa">→</button>
    </div>
  </>;
}
