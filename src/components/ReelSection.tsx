import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ReelSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="reel" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="space-y-8">
          <div className={`text-center space-y-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">See the Work in Action</h2>
            <p className="text-xl text-muted-foreground">60 seconds. The work, the pace, the feel.</p>
          </div>

          {/* Video Container */}
          <div className={`relative aspect-video w-full rounded-lg overflow-hidden bg-card shadow-elegant hover-lift transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '200ms' }}>
            {/* TODO: Replace this div with actual video embed */}
            {/* Example: <video src="your-reel.mp4" controls poster="poster.jpg" className="w-full h-full object-cover" /> */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-secondary">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-pulse-subtle">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-muted-foreground font-medium">
                  [Hero Reel Embed Here]
                  <br />
                  <span className="text-sm">
                    Add muted autoplay loop video with controls on hover
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelSection;
