import { Rocket, Lightbulb, TrendingUp, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Performance Marketing",
      description:
        "Turn ad spend into predictable revenue. We manage Meta, Google, and TikTok campaigns that scale profitably.",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: Lightbulb,
      title: "Creative & Branding",
      description:
        "High-converting ads that stop the scroll. Creative testing systems that find winners fast and scale them.",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: TrendingUp,
      title: "SEO & Content Strategy",
      description:
        "Reduce CAC with organic traffic that compounds. Build authority and capture demand without paying per click.",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description:
        "Real-time bid management and audience targeting that improves ROAS while you sleep.",
      color: "from-purple-500/20 to-purple-500/5",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Rocket className="w-4 h-4" />
            What We Do
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Precision Marketing That{" "}
            <span className="text-gradient-gold">Scales</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-funnel systems that turn clicks into customers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.25)] overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Animated Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
              
              <div className="relative">
                {/* Icon with pulse effect */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative">
                  <service.icon className="w-7 h-7 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-primary/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '2s' }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
          ))}
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-secondary/50 border border-border">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                  {i === 4 ? '★' : ''}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-semibold">48+ brands</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;