import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import headshotImage from "@/assets/filmmaker-headshot.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-50" />
            <img
              src={headshotImage}
              alt="Timothy Samuel King, filmmaker"
              className="relative w-full aspect-square object-cover rounded-lg shadow-elegant"
            />
          </div>

          {/* Right: Content */}
          <div className={`space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">Story first. Always.</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className={`transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                I'm <strong className="text-foreground">Timothy Samuel King</strong>—a filmmaker who blends clean aesthetic with strategic clarity.
              </p>
              <p className={`transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                From Mississippi to the Southeast, I've led productions for hospital systems, campaigns, and brands that need work that works.
              </p>
              <p className={`transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                Whether it's a 30-second TV spot or a long-form documentary, every frame serves the story—and every story serves your goals.
              </p>
            </div>
            <Button className={`bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-card transition-all hover-scale hover-glow ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <Download className="w-4 h-4 mr-2" />
              Download One-Sheet (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
