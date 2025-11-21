import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const MetricsStripe = () => {
  const { ref, isInView } = useScrollReveal();

  const metrics = [
    { value: "2 years", label: "Lead Filmmaker at Forrest Health" },
    { value: "Millions", label: "Total Campaign Views" },
    { value: "Television", label: "Ads Aired" },
    { value: "4 Sectors", label: "Political, Healthcare, Corporate, Weddings" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`text-center space-y-2 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-[200px] mx-auto px-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        <p className={`text-center text-muted-foreground mt-8 sm:mt-12 text-base sm:text-lg max-w-3xl mx-auto px-4 transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          Proven in high-stakes environments where clarity and trust matter.
        </p>
      </div>
    </section>
  );
};

export default MetricsStripe;
