import { motion, AnimatePresence } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";

interface TransitionLayerProps {
  active: boolean;
}

export const TransitionLayer = ({ active }: TransitionLayerProps) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[90] bg-accent"
          initial={{ x: "-100%" }}
          animate={{ 
            x: 0, 
            transition: { 
              duration: prefersReducedMotion ? 0 : 0.35, 
              ease: [0.65, 0, 0.35, 1] 
            } 
          }}
          exit={{ 
            x: "100%", 
            transition: { 
              duration: prefersReducedMotion ? 0 : 0.35, 
              ease: [0.65, 0, 0.35, 1] 
            } 
          }}
        />
      )}
    </AnimatePresence>
  );
};
