'use client';

import { useEffect, useRef, useState } from 'react';

export default function ManifestoReveal() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const travel = Math.max(1, bounds.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -bounds.top / travel));
      section.style.setProperty('--manifesto-progress', nextProgress);
      section.style.setProperty('--manifesto-fill', `${nextProgress * 100}%`);
      setProgress(nextProgress);
    };

    let frameId;
    const intervalId = window.setInterval(updateProgress, 80);
    const tick = () => {
      updateProgress();
      frameId = window.requestAnimationFrame(tick);
    };

    updateProgress();
    frameId = window.requestAnimationFrame(tick);
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearInterval(intervalId);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="manifesto-scroll-space"
      style={{ '--manifesto-progress': progress }}
    >
      <div className="manifesto-sticky">
        <div className="manifesto-inner">
          <p className="home-eyebrow home-eyebrow-light"><span />MANIFESTO</p>
          <div className="manifesto-title" aria-label="Na Guri, não construímos identidades visuais. Construímos razões para existir.">
            <p>Na Guri, não construímos identidades visuais.</p>
            <p>Construímos razões para existir.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
