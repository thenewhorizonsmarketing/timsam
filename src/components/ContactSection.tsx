import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, DollarSign, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isInView } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    projectType: "",
    timeline: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center space-y-4 mb-16 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">Let's Start the Conversation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            24-hour response. Straightforward timelines & budgets. Footage delivered ready for TV & social.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Reassurance */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className={`flex gap-3 sm:gap-4 items-start transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">24-hour response</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We respect your time. Every inquiry gets a reply within one business day.
                </p>
              </div>
            </div>

            <div className={`flex gap-3 sm:gap-4 items-start transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Straightforward budgets</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  No surprises. Clear scopes, transparent pricing, flexible timelines.
                </p>
              </div>
            </div>

            <div className={`flex gap-3 sm:gap-4 items-start transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Ready to launch</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Files delivered optimized for TV, web, and every social platform.
                </p>
              </div>
            </div>

            {/* TODO: Add Calendly embed toggle for mobile */}
            <div className={`pt-8 transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <p className="text-sm text-muted-foreground mb-4">Prefer to schedule directly?</p>
              <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 hover-scale">
                Pick a Time on Calendar
              </Button>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary transition-smooth"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border focus:border-primary transition-smooth"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="bg-background border-border focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                  <SelectTrigger id="projectType" className="bg-background border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="political">Political Campaign</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="wedding">Wedding/Event</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                  <SelectTrigger id="timeline" className="bg-background border-border">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                    <SelectItem value="soon">Soon (1 month)</SelectItem>
                    <SelectItem value="flexible">Flexible (2-3 months)</SelectItem>
                    <SelectItem value="planning">Just planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell me about your project *</Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-primary resize-none transition-smooth"
                placeholder="What are your goals? Who's your audience? What success looks like?"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                I agree to be contacted about this project and understand my information will be kept private per the privacy policy.
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={!formData.consent}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover-scale hover-glow"
            >
              Book a Discovery Call
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By submitting this form, you'll receive a calendar link and project questionnaire within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
