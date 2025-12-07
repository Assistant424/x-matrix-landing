import { Target, Zap, Users, TrendingUp, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Obsessive ROI Focus",
      description: "Every dollar tracked and optimized for maximum return.",
    },
    {
      icon: Zap,
      title: "Speed & Precision",
      description: "Rapid iteration with data-backed decisions.",
    },
    {
      icon: Users,
      title: "Elite Talent",
      description: "Ex-Google & Meta growth leaders on your team.",
    },
    {
      icon: TrendingUp,
      title: "Proven Frameworks",
      description: "Tested across $50M+ in ad spend.",
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "Real-time dashboards and complete data access.",
    },
    {
      icon: Award,
      title: "Results Guaranteed",
      description: "Performance-based pricing options available.",
    },
  ];

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 blur-[120px] rounded-full" />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for <span className="text-gradient-gold">Winners</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Founded by ex-Google and Meta growth leaders who bridge the gap between 
            agencies that promise and agencies that deliver.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "98%", label: "Client Retention" },
              { value: "$50M+", label: "Ad Spend Managed" },
              { value: "100+", label: "Campaigns Launched" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-black text-gradient-gold mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-gradient-to-br from-secondary/40 to-transparent border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(240,191,0,0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2 text-lg">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 italic max-w-3xl mx-auto">
              "We don't hide behind vanity metrics. Every campaign is engineered for one thing: 
              <span className="text-primary not-italic font-bold"> profitable growth</span>."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;