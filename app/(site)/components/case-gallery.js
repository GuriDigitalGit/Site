'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CaseGallery({ images, title }) {
  const [index, setIndex] = useState(null);
  const touchX = useRef(null);
  const total = images.length;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir) => setIndex((i) => (i === null ? i : (i + dir + total) % total)), [total]);

  useEffect(() => {
    if (index === null) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <section className="case-gallery">
        {images.map((src, i) => (
          <button type="button" className="case-shot" key={src} data-reveal onClick={() => setIndex(i)} aria-label={`Ampliar imagem ${i + 1} de ${total}`}>
            <img src={src} alt={`${title} — imagem ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </section>
      {index !== null && createPortal(
        <div
          className="sx-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — galeria`}
          onClick={close}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <img key={images[index]} src={images[index]} alt={`${title} — imagem ${index + 1}`} onClick={(e) => e.stopPropagation()} />
          <span className="sx-lightbox-count">{index + 1} / {total}</span>
          <button type="button" className="sx-lightbox-btn is-close" aria-label="Fechar" onClick={close}>✕</button>
          {total > 1 && <>
            <button type="button" className="sx-lightbox-btn is-prev" aria-label="Imagem anterior" onClick={(e) => { e.stopPropagation(); step(-1); }}>←</button>
            <button type="button" className="sx-lightbox-btn is-next" aria-label="Próxima imagem" onClick={(e) => { e.stopPropagation(); step(1); }}>→</button>
          </>}
        </div>,
        document.body,
      )}
    </>
  );
}
