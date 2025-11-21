import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Building, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ServicesSection = () => {
  const { ref, isInView } = useScrollReveal();

  const services = [
    {
      icon: Megaphone,
      title: "Campaign & Brand Films",
      what: "Concept → scripting → production → edit suite → social cutdowns",
      ideal: "Political campaigns, colleges, healthcare, clinics, med spas",
    },
    {
      icon: Building,
      title: "Corporate & Healthcare Content",
      what: "Patient stories, recruitment, physician profiles, TV spots, real estate showcases, country club tours, development launches",
      ideal: "Hospitals, multi-location practices, real estate brokerages, country clubs, luxury developments, therapists, enterprises",
    },
    {
      icon: Heart,
      title: "Weddings & Events",
      what: "Highlight + ceremony edits, reels for socials",
      ideal: "Couples, nonprofits, conferences",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center space-y-4 mb-16 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">Services & Packages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every project is custom-built for your goals and timeline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-glow transition-all duration-700 hover-lift bg-card border-border ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">{service.title}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">What you get:</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.what}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Ideal for:</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.ideal}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  onClick={scrollToContact}
                  className="w-full text-primary hover:text-primary/80 hover:bg-primary/10 hover-scale"
                >
                  Request Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
