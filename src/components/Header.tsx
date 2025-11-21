import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuOverlay } from "@/components/MenuOverlay";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MenuOverlay 
        open={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navigate={scrollToSection}
      />
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
        }`}
        style={{ padding: "max(0.75rem, env(safe-area-inset-top)) 1rem 0.75rem 1rem" }}
      >
        <nav className="container mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg md:text-xl font-serifx text-foreground hover:text-primary transition-smooth"
          >
            Timothy Samuel King
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8">
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium font-sansx text-muted-foreground hover:text-foreground transition-smooth">
              Work
            </button>
            <button onClick={() => scrollToSection("process")} className="text-sm font-medium font-sansx text-muted-foreground hover:text-foreground transition-smooth">
              Process
            </button>
            <button onClick={() => scrollToSection("clients")} className="text-sm font-medium font-sansx text-muted-foreground hover:text-foreground transition-smooth">
              Clients
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium font-sansx text-muted-foreground hover:text-foreground transition-smooth">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium font-sansx text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </button>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection("reel")} className="text-sm font-sansx">
              Watch 60-sec Reel
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="text-sm font-sansx bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              Book a Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="px-3.5 py-1.5 rounded-full ring-1 ring-border text-[clamp(0.8rem,1.15vw,0.92rem)] tracking-[0.2em] font-sansx uppercase hover:bg-primary/10 transition-colors"
          >
            MENU
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
