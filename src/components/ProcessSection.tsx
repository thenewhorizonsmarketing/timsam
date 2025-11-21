import { Search, PenTool, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProcessSection = () => {
  const { ref, isInView } = useScrollReveal();

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We clarify goals, audience, and budget.",
    },
    {
      icon: PenTool,
      title: "Plan",
      description: "Script, schedule, and logistics—no guesswork.",
    },
    {
      icon: Video,
      title: "Shoot",
      description: "Tight crew, high craft, on time.",
    },
    {
      icon: Sparkles,
      title: "Edit & Launch",
      description: "Cutdowns for TV, web, and social included.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center space-y-4 mb-16 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, streamlined, and built for results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4 text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover-lift h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth group-hover:rotate-12">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover-scale hover-glow"
          >
            See Dates → Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
