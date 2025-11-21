import { useState } from "react";
import { prefersReducedMotion } from "@/lib/animations";

export const usePageTransitions = () => {
  const [active, setActive] = useState(false);
  
  const play = (after?: () => void) => {
    setActive(true);
    const timeout = setTimeout(() => {
      after?.();
      setActive(false);
    }, prefersReducedMotion ? 0 : 550);
    
    return () => clearTimeout(timeout);
  };
  
  return { active, play };
};
