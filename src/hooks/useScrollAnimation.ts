import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          const counters = entry.target.querySelectorAll('[data-count]');
          counters.forEach(counterEl => {
            const counter = counterEl as HTMLElement;
            const target = +(counter.dataset.count || 0);
            if (counter.innerText === '0' || counter.innerText === '0%') {
              let current = 0;
              const duration = 1500;
              const stepTime = 1000 / 60;
              const totalSteps = duration / stepTime;
              const increment = target / totalSteps;
              const updateCounter = () => {
                current += increment;
                if (current < target) {
                  counter.innerText = (target % 1 !== 0) ? current.toFixed(2) : String(Math.ceil(current));
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
                }
              };
              updateCounter();
            }
          });
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};