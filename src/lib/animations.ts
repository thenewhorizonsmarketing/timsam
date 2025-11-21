/**
 * Animation utility functions
 */

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export const isClient = typeof window !== "undefined";

export const prefersReducedMotion = 
  isClient && 
  window.matchMedia && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Text splitting utilities
 */
export const splitTextByWords = (text: string): string[] => {
  return text.split(' ');
};

export const splitTextByCharacters = (text: string): string[] => {
  return text.split('');
};

/**
 * Stagger animation utilities
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};

export const calculateStaggerDuration = (itemCount: number, baseDelay: number = 0.1): number => {
  return itemCount * baseDelay;
};

/**
 * Animation variants for Framer Motion
 */
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const slideLeftVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export const slideRightVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};
