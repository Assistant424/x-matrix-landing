import { Target, Zap, Users, TrendingUp, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "ROI Obsessed",
      description: "Every dollar tracked for maximum return.",
    },
    {
      icon: Zap,
      title: "Fast & Data-Driven",
      description: "Quick iterations backed by real data.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your success is our only focus.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategies built for scaling.",
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "Real-time dashboards and reports.",
    },
    {
      icon: Award,
      title: "Results First",
      description: "We don't win until you win.",
    },
  ];

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Visual Element */}
          <div className="relative order-2 lg:order-1">
            {/* Animated Visual Grid */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse-slow animation-delay-200" />
              <div className="absolute inset-8 rounded-full border border-primary/40 animate-pulse-slow animation-delay-400" />
              
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-xl animate-pulse-slow" />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 flex items-center justify-center animate-float">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 flex items-center justify-center animate-float animation-delay-300">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-1/2 left-8 -translate-y-1/2 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 flex items-center justify-center animate-float animation-delay-200">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 flex items-center justify-center animate-float animation-delay-400">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[0_0_60px_rgba(240,191,0,0.3)]">
                  <span className="text-4xl font-black text-background">X</span>
                </div>
              </div>
              
              {/* Decorative Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <line x1="200" y1="60" x2="200" y2="140" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="260" x2="200" y2="340" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="60" y1="200" x2="140" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="260" y1="200" x2="340" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Why Choose Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-gradient-gold">Winners</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We're not your typical agency. We obsess over ROI because your success 
              is our reputation. No vanity metrics, no complicated reports—just 
              <span className="text-foreground font-semibold"> profitable growth</span>.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;