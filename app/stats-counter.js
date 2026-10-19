'use client';

import { useEffect, useRef, useState } from 'react';

function Counter({ value, prefix = '', suffix = '' }) {
  // Render the real value on the server as a resilient fallback; the client
  // animation takes over as soon as the card enters the viewport.
  const [displayValue, setDisplayValue] = useState(value);
  const counterRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return undefined;

    const finish = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setDisplayValue(value);
        return;
      }

      setDisplayValue(0);
      const startTime = performance.now();
      const duration = 1200;
      const tick = (now) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - ((1 - progress) ** 3);
        setDisplayValue(Math.round(value * eased));
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        finish();
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <strong ref={counterRef}>{prefix}{displayValue}{suffix}</strong>;
}

export default function StatsCounter() {
  return <div className="stats-grid">
    <div><Counter value={80} prefix="+" /><p>Marcas construídas do zero</p></div>
    <div><Counter value={3} /><p>Anos de estúdio independente</p></div>
    <div><Counter value={100} suffix="%" /><p>Projetos feitos in-house</p></div>
  </div>;
}
