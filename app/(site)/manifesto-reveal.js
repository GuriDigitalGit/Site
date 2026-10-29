'use client';

import { useEffect, useRef, useState } from 'react';

export default function ManifestoReveal() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add('manifesto-js');
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const travel = Math.max(1, bounds.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -bounds.top / travel));
      const firstFill = Math.min(1, nextProgress / 0.6);
      const finalFill = Math.min(1, Math.max(0, (nextProgress - 0.52) / 0.34));
      const finalOpacity = Math.min(1, Math.max(0, (nextProgress - 0.52) / 0.14));
      const exitProgress = Math.min(1, Math.max(0, (nextProgress - 0.84) / 0.16));
      section.style.setProperty('--manifesto-progress', nextProgress);
      section.style.setProperty('--manifesto-fill', `${nextProgress * 100}%`);
      section.style.setProperty('--manifesto-first-fill', `${firstFill * 100}%`);
      section.style.setProperty('--manifesto-final-fill', `${finalFill * 100}%`);
      section.style.setProperty('--manifesto-final-opacity', finalOpacity);
      section.style.setProperty('--manifesto-title-opacity', 1 - exitProgress);
      section.style.setProperty('--manifesto-title-scale', 1 + exitProgress * 0.18);
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
      document.documentElement.classList.remove('manifesto-js');
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
          <div className="manifesto-title" aria-label="Na Guri, não construímos identidades visuais, construímos razões para existir.">
            <p className="manifesto-message">
              <span className="manifesto-message-first">Na Guri, não construímos identidades visuais, </span>
              <span className="manifesto-message-final">construímos razões para existir.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
