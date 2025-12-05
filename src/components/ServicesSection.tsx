import { Rocket, Lightbulb, TrendingUp, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Performance Marketing",
      description:
        "Data-driven campaigns that maximize ROI across paid search, social, and programmatic channels.",
    },
    {
      icon: Lightbulb,
      title: "Creative & Branding",
      description:
        "Award-winning creative that captures attention and converts browsers into believers.",
    },
    {
      icon: TrendingUp,
      title: "SEO & Content Strategy",
      description:
        "Organic growth strategies that build lasting authority and sustainable traffic.",
    },
    {
      icon: Brain,
      title: "AI-Powered Advertising",
      description:
        "Machine learning optimization that finds your ideal customers at scale.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Precision Marketing That{" "}
            <span className="text-gradient-gold">Scales</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with creative excellence to drive
            exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.2)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
