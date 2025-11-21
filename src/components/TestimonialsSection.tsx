import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollReveal();

  const testimonials = [
    {
      quote: "Clear vision, crisp timelines, and footage that made our message impossible to ignore.",
      author: "Sarah Johnson",
      role: "Campaign Manager",
      organization: "State Senate Campaign",
    },
    {
      quote: "We needed someone who understood healthcare storytelling. The results exceeded expectations—our recruitment numbers speak for themselves.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      organization: "Forrest Health",
    },
    {
      quote: "Professional, creative, and a joy to work with. Our wedding film brought us to tears—in the best way.",
      author: "Emily & David Rodriguez",
      role: "Clients",
      organization: "Wedding Film",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <div className={`text-center space-y-4 mb-12 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">What Clients Say</h2>
        </div>

        <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <Card className="bg-card border-border shadow-elegant hover-lift">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <Quote className="w-10 sm:w-12 h-10 sm:h-12 text-primary/30 mb-4 sm:mb-6" />
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground mb-6 sm:mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-base sm:text-lg">{testimonials[current].author}</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].organization}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 hover-scale"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-border hover:bg-border/70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 hover-scale"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
