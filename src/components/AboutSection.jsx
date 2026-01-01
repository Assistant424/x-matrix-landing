import { Target, Zap, Users, TrendingUp, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "ROI Obsessed",
      description: "Every dollar tracked. Every result tied to revenue.",
    },
    {
      icon: Zap,
      title: "Fast Iteration",
      description: "Weekly tests, not quarterly reviews. Speed compounds.",
    },
    {
      icon: Users,
      title: "Senior Team Only",
      description: "You talk to strategists, not account coordinators.",
    },
    {
      icon: TrendingUp,
      title: "Systems, Not Hacks",
      description: "Repeatable growth processes that outlast any campaign.",
    },
    {
      icon: Shield,
      title: "Full Visibility",
      description: "See what we see. No hidden dashboards or vanity metrics.",
    },
    {
      icon: Award,
      title: "Skin in the Game",
      description: "We grow when you grow. Aligned incentives, always.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="hidden sm:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Visual Element */}
          <div className="relative order-2 lg:order-1">
            {/* Animated Visual Grid */}
            <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse-slow animation-delay-200" />
              <div className="absolute inset-8 rounded-full border border-primary/40 animate-pulse-slow animation-delay-400" />
              
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-xl animate-pulse-slow" />
              </div>
              
              {/* Floating Icons - simplified for mobile */}
              <div className="hidden sm:flex absolute top-8 left-1/2 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 items-center justify-center animate-float-top">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div className="hidden sm:flex absolute bottom-8 left-1/2 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 items-center justify-center animate-float-bottom">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div className="hidden sm:flex absolute top-1/2 left-8 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 items-center justify-center animate-float-left">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div className="hidden sm:flex absolute top-1/2 right-8 w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 items-center justify-center animate-float-right">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[0_0_60px_rgba(240,191,0,0.3)]">
                  <span className="text-3xl sm:text-4xl font-black text-background">X</span>
                </div>
              </div>
              
              {/* Decorative Lines - hidden on mobile */}
              <svg className="hidden sm:block absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <line x1="200" y1="60" x2="200" y2="140" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="260" x2="200" y2="340" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="60" y1="200" x2="140" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="260" y1="200" x2="340" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-4 h-4" />
              Why Choose Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Built for <span className="text-gradient-gold">Winners</span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              We think like operators, not vendors. Our job isn't to run ads—it's to build 
              repeatable systems that make your revenue 
              <span className="text-foreground font-semibold"> predictable and your growth sustainable</span>.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm sm:text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
