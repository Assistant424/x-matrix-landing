import { Target, Zap, Users, TrendingUp, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Obsessive ROI Focus",
      description: "Every dollar spent is tracked, measured, and optimized for maximum return.",
    },
    {
      icon: Zap,
      title: "Speed & Precision",
      description: "Rapid iteration with data-backed decisions. We move fast without breaking things.",
    },
    {
      icon: Users,
      title: "Ex-Google & Meta Talent",
      description: "Our team comes from the world's top tech companies and performance agencies.",
    },
    {
      icon: TrendingUp,
      title: "Proven Frameworks",
      description: "Proprietary strategies tested across 100+ campaigns and $50M+ in ad spend.",
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "Real-time dashboards, weekly reports, and complete access to all data.",
    },
    {
      icon: Award,
      title: "Results Guaranteed",
      description: "We're so confident in our work, we offer performance-based pricing options.",
    },
  ];

  return (
    <section className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient-gold">Winners</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            X Matrix was founded by ex-Google and Meta growth leaders who saw the gap between 
            agencies that promise and agencies that deliver. We obsess over ROI because your 
            success is our reputation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content - Story */}
          <div>
            <div className="space-y-6 mb-10">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're not your typical agency. We don't hide behind vanity metrics or 
                bury results in complicated reports. Every campaign we run is engineered 
                for one thing: <span className="text-foreground font-semibold">profitable growth</span>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our proprietary AI-powered bidding strategies and creative testing 
                frameworks give our clients an unfair advantage in the market. While 
                others guess, we <span className="text-foreground font-semibold">know</span>.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                <div className="text-3xl font-bold text-gradient-gold mb-1">12+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                <div className="text-3xl font-bold text-gradient-gold mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1 text-sm">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
