import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsStrip from "@/components/ClientsStrip";
import ReelSection from "@/components/ReelSection";
import Portfolio from "@/components/Portfolio";
import MetricsStripe from "@/components/MetricsStripe";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ClientsStrip />
        <ReelSection />
        <Portfolio />
        <MetricsStripe />
        <ProcessSection />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
