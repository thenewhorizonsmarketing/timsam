import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">Timothy Samuel King</h3>
            <p className="text-sm text-muted-foreground">
              Filmmaker & Director
              <br />
              Mississippi & Southeast US
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("work")} className="text-sm text-muted-foreground hover:text-foreground text-left transition-smooth">
                Work
              </button>
              <button onClick={() => scrollToSection("process")} className="text-sm text-muted-foreground hover:text-foreground text-left transition-smooth">
                Process
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground text-left transition-smooth">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-foreground text-left transition-smooth">
                Contact
              </button>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-smooth"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Timothy Samuel King. Made with love in Mississippi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
