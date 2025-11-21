import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Tv, Users } from "lucide-react";

interface PortfolioItem {
  title: string;
  note: string;
  badges: { icon: any; text: string }[];
  category: string;
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      title: "Forrest Health — 'Right Here, Right Now'",
      note: "System-wide recruitment & brand spot",
      badges: [
        { icon: Tv, text: "Aired on TV" },
        { icon: TrendingUp, text: "+1.3M views" },
      ],
      category: "healthcare",
    },
    {
      title: "State Senate Campaign — Victory Ad",
      note: "30-sec closing argument spot",
      badges: [
        { icon: Tv, text: "Aired on TV" },
        { icon: Users, text: "12-point swing" },
      ],
      category: "political",
    },
    {
      title: "Magnolia Smiles — Patient Stories",
      note: "Testimonial series for dental practice",
      badges: [{ icon: TrendingUp, text: "+500K views" }],
      category: "corporate",
    },
    {
      title: "Community College — 'Start Here'",
      note: "Enrollment campaign for rural campus",
      badges: [
        { icon: Tv, text: "Regional TV" },
        { icon: TrendingUp, text: "18% enrollment lift" },
      ],
      category: "corporate",
    },
    {
      title: "Congressional Campaign — Bio Spot",
      note: "Introductory narrative for first-time candidate",
      badges: [
        { icon: Tv, text: "Aired on TV" },
        { icon: Users, text: "Primary victory" },
      ],
      category: "political",
    },
    {
      title: "Med Spa — Brand Refresh",
      note: "Social-first content library",
      badges: [{ icon: TrendingUp, text: "+300K views" }],
      category: "corporate",
    },
    {
      title: "Sarah & Michael — Wedding Highlight",
      note: "Cinematic same-day edit for 200-guest reception",
      badges: [{ icon: Play, text: "Featured on WeddingWire" }],
      category: "weddings",
    },
    {
      title: "Local Church — Capital Campaign",
      note: "Donor-facing case video",
      badges: [
        { icon: Users, text: "$2.1M raised" },
        { icon: TrendingUp, text: "87% donor retention" },
      ],
      category: "corporate",
    },
    {
      title: "Healthcare Social Series",
      note: "30+ short-form patient testimonials",
      badges: [{ icon: TrendingUp, text: "+2M total views" }],
      category: "social",
    },
    {
      title: "Big Bay Lake — Waterfront Living",
      note: "Luxury development brand film",
      badges: [
        { icon: TrendingUp, text: "+800K views" },
        { icon: Users, text: "45% presale rate" },
      ],
      category: "corporate",
    },
    {
      title: "Atlanta Therapy Group — Practice Launch",
      note: "Provider intro series for mental health practice",
      badges: [{ icon: TrendingUp, text: "+400K views" }],
      category: "corporate",
    },
    {
      title: "Country Club of the South — Membership Drive",
      note: "Lifestyle & amenities showcase",
      badges: [
        { icon: TrendingUp, text: "+600K views" },
        { icon: Users, text: "38 new members" },
      ],
      category: "corporate",
    },
    {
      title: "Coastal Realty Group — Agent Recruitment",
      note: "Brand story for expanding brokerage",
      badges: [{ icon: TrendingUp, text: "+300K views" }],
      category: "corporate",
    },
  ];

  const categories = [
    { value: "all", label: "All Work" },
    { value: "political", label: "Political" },
    { value: "healthcare", label: "Healthcare" },
    { value: "corporate", label: "Corporate" },
    { value: "weddings", label: "Weddings & Events" },
    { value: "social", label: "Social" },
  ];

  const filteredItems = (category: string) => {
    if (category === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === category);
  };

  return (
    <section id="work" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From campaign trails to hospital halls—stories that move audiences and drive results.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8 sm:mb-12 h-auto gap-2 bg-transparent">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition-smooth"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredItems(cat.value).map((item, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <CardContent className="p-0">
                      {/* Thumbnail Placeholder */}
                      <div className="relative aspect-video bg-gradient-to-br from-secondary to-card overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-16 h-16 text-primary opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                        </div>
                        {/* TODO: Replace with actual video thumbnail */}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-3 p-6">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge, idx) => (
                          <Badge key={idx} variant="secondary" className="flex items-center gap-1.5 bg-secondary/50">
                            <badge.icon size={14} className="text-primary" />
                            {badge.text}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="mt-2 text-primary hover:text-primary/80 p-0 h-auto font-medium">
                        Watch Case Study →
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* TODO: Add modal/dialog for case study details when selectedItem is not null */}
      </div>
    </section>
  );
};

export default Portfolio;
