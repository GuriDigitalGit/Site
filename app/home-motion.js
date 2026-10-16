'use client';

import { useEffect } from 'react';

export default function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');
    const targets = document.querySelectorAll('.home-manifesto, .home-services, .home-works, .home-ethos, .home-process, .home-contact, .home-team');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return () => root.classList.remove('motion-ready');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
