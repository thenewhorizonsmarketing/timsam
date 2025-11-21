import { motion, AnimatePresence } from "framer-motion";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  navigate: (href: string) => void;
}

const menuItems = [
  { href: "#hero", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const MenuOverlay = ({ open, onClose, navigate }: MenuOverlayProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-accent/95 backdrop-blur-sm text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="max-w-6xl mx-auto p-6 md:p-10">
            <div 
              className="flex items-center justify-between" 
              style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}
            >
              <p className="tracking-[0.35em] text-[clamp(0.6rem,1.2vw,0.8rem)] font-sansx uppercase text-white/80">
                MENU
              </p>
              <button 
                className="px-3 py-1 rounded-full ring-1 ring-white/30 text-[clamp(0.7rem,1vw,0.8rem)] tracking-[0.2em] font-sansx uppercase hover:bg-white/10 transition-colors"
                onClick={onClose}
              >
                CLOSE
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.href);
                    onClose();
                  }}
                  className="group"
                >
                  <div className="text-[clamp(1.6rem,4.5vw,3.2rem)] font-semibold font-serifx group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </div>
                  <div className="mt-2 text-white/70 font-sansx text-sm">
                    Explore →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
