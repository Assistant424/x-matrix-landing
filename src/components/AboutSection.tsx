import { Target, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Obsessive ROI Focus",
      description: "Every dollar spent is tracked, measured, and optimized.",
    },
    {
      icon: Zap,
      title: "Speed & Precision",
      description: "Rapid iteration with data-backed decisions.",
    },
    {
      icon: Users,
      title: "Ex-Google & Meta Talent",
      description: "Team from the world's top tech companies.",
    },
  ];

  return (
    <section className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-gradient-gold">Winners</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              X Matrix was founded by ex-Google and Meta growth leaders who saw
              the gap between agencies that promise and agencies that deliver.
              We obsess over ROI because your success is our reputation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our proprietary AI-powered bidding strategies and creative testing
              frameworks give our clients an unfair advantage in the market.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl card-gradient border border-border overflow-hidden grid-bg">
              {/* Abstract visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central glow */}
                  <div className="w-48 h-48 rounded-full bg-primary/20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  
                  {/* Orbiting elements */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-full animate-spin"
                      style={{
                        animationDuration: `${20 + i * 10}s`,
                      }}
                    >
                      <div
                        className="w-4 h-4 bg-primary rounded-full gold-glow"
                        style={{
                          transform: `translateX(${60 + i * 30}px)`,
                        }}
                      />
                    </div>
                  ))}
                  
                  {/* Center X logo */}
                  <div className="relative z-10 text-6xl font-black text-gradient-gold">
                    X
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-border shadow-2xl">
              <div className="text-2xl font-bold text-gradient-gold">12+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-2xl">
              <div className="text-2xl font-bold text-gradient-gold">98%</div>
              <div className="text-xs text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
