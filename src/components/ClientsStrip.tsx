import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ClientsStrip = () => {
  const { ref, isInView } = useScrollReveal();

  const clients = [
    "Forrest Health",
    "Magnolia Smiles",
    "Big Bay Lake",
    "Country Club of the South",
    "Atlanta Therapy Group",
    "Coastal Realty Group",
    "State College",
    "Political Campaigns",
  ];

  return (
    <section id="clients" className="py-16 px-4 bg-card/30">
      <div className="container mx-auto" ref={ref}>
        <p className={`text-center text-xs uppercase tracking-wider text-muted-foreground mb-8 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Selected clients & collaborators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`text-sm sm:text-base md:text-lg lg:text-xl font-medium text-muted-foreground/70 hover:text-foreground transition-all duration-600 grayscale hover:grayscale-0 text-center hover-scale ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsStrip;
