import { useEffect } from "react";

const isClient = typeof window !== "undefined";

/**
 * Dynamic viewport height fix for iOS/Android
 * Sets CSS custom property --svh to 1% of actual viewport height
 */
export const useDynamicSVH = () => {
  useEffect(() => {
    if (!isClient) return;
    
    const setViewportHeight = () => {
      const svh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--svh', `${svh}px`);
    };
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);
};
