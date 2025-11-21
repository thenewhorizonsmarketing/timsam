import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';

interface TextRevealProps {
  words: string[];
  className?: string;
  interval?: number;
}

const TextReveal = ({ words, className = "", interval = 3000 }: TextRevealProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];
  const shouldAnimate = !prefersReducedMotion;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Split word into characters for stagger animation
  const characters = currentWord.split('');

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-block"
          initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 1 }}
          exit={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {characters.map((char, i) => (
            <motion.span
              key={`${currentIndex}-${i}`}
              className="inline-block"
              initial={shouldAnimate ? { opacity: 0, y: 20, scale: 0.8 } : { opacity: 1, y: 0, scale: 1 }}
              animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextReveal;
