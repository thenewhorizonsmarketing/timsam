import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Tv, Heart } from "lucide-react";
import headshotImage from "@/assets/filmmaker-headshot.jpg";
import TextReveal from "@/components/TextReveal";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const { transform } = useParallax({ speed: 0.05 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-2 items-center relative z-10">
        {/* Left: Copy & CTAs */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.8] text-balance">
              Films that move people to{" "}
              <span className="text-white inline-block min-h-[1.1em]">
                <TextReveal words={["tears", "give", "vote", "change", "buy"]} />
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Political campaigns, healthcare and corporate stories, weddings and events, and social content—crafted with clarity, heart, and results.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base bg-primary text-primary-foreground hover:bg-primary/90 hover-scale shadow-glow hover-glow transition-all duration-300 px-8 py-6"
            >
              Book a Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("reel")}
              className="text-base border-2 border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 transition-smooth hover-scale"
            >
              Watch 60-sec Reel
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Proven Track Record</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 bg-secondary/50 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <TrendingUp size={14} className="text-primary sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Millions of views</span>
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 bg-secondary/50 animate-fade-up" style={{ animationDelay: '500ms' }}>
                <Tv size={14} className="text-primary sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Television ads</span>
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 bg-secondary/50 animate-fade-up" style={{ animationDelay: '600ms' }}>
                <Heart size={14} className="text-primary sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Lead at Forrest Health</span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Right: Headshot with 3D Frame */}
        <div className="relative flex justify-center lg:justify-end animate-scale-in w-full lg:w-auto">
          <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] perspective-1000 parallax-container" style={{ transform }}>
            {/* 3D Frame - Behind the image */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/5 rounded-lg border-2 border-primary/30 shadow-2xl"
              style={{ 
                transform: 'translateZ(-30px) rotateY(-5deg) rotateX(3deg)',
                transformStyle: 'preserve-3d',
                height: '100%',
                aspectRatio: '3/4'
              }} 
            />
            
            {/* Floating Image */}
            <img
              src={headshotImage}
              alt="Timothy Samuel King, filmmaker and director"
              className="relative w-full h-auto object-cover rounded-lg shadow-elegant border border-primary/20"
              style={{ 
                transform: 'translateZ(20px)',
                transformStyle: 'preserve-3d',
                aspectRatio: '3/4'
              }}
            />
            
            {/* Accent glow */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg blur-2xl sm:blur-3xl opacity-40 -z-10 animate-pulse-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
