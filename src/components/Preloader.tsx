import { motion, AnimatePresence } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";

interface PreloaderProps {
  done: boolean;
}

export const Preloader = ({ done }: PreloaderProps) => {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-secondary text-foreground grid place-items-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: prefersReducedMotion ? 0 : 0.65 } 
          }}
        >
          <div className="text-center px-6">
            <p className="tracking-[0.4em] text-[clamp(0.6rem,1.2vw,0.8rem)] font-sansx uppercase mb-4 text-muted-foreground">
              CINEMATIC EXPERIENCE
            </p>
            <h1 className="text-[clamp(1.75rem,4.5vw,3.2rem)] font-semibold font-serifx">
              LOADING • PLEASE WAIT
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
