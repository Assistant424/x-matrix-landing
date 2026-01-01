import { Rocket, Lightbulb, TrendingUp, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Performance Marketing",
      description:
        "Stop guessing where your ad dollars go. We build and manage campaigns across Meta, Google, and TikTok that turn spend into measurable revenue.",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: Lightbulb,
      title: "Creative & Branding",
      description:
        "Ads that actually convert. We test dozens of creatives monthly to find what makes your audience click, buy, and come back.",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: TrendingUp,
      title: "SEO & Content Strategy",
      description:
        "Lower your customer acquisition cost with organic traffic. We build content systems that generate leads without paying per click.",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description:
        "Automated bid adjustments and audience targeting that improve your return on ad spend 24/7—no manual babysitting required.",
      color: "from-purple-500/20 to-purple-500/5",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating Shapes - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <Rocket className="w-4 h-4" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Precision Marketing That{" "}
            <span className="text-gradient-gold">Scales</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Full-funnel systems that turn clicks into customers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.25)] overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Corner Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
                
                <div className="relative">
                  {/* Icon with pulse effect */}
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative">
                    <IconComponent className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                    <div className="absolute inset-0 rounded-xl bg-primary/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '2s' }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-secondary/50 border border-border">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                  {i === 4 ? '★' : ''}
                </div>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-semibold">48+ brands</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
