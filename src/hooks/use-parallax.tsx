import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/lib/animations';

interface ParallaxOptions {
  speed?: number; // 0-1, where 0.5 means half speed
  direction?: 'up' | 'down';
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up' } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Skip parallax if user prefers reduced motion
    if (prefersReducedMotion) return;

    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const parallaxOffset = scrolled * speed * (direction === 'down' ? 1 : -1);
        setOffset(parallaxOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed, direction]);

  return { offset, transform: `translateY(${offset}px)` };
};
