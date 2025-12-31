import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "X Matrics took us from $80k to $340k/mo in revenue in under 6 months. Their systematic approach to creative testing was the unlock.",
      author: "Sarah Chen",
      role: "CMO, TechFlow",
      context: "B2B SaaS • Series A",
      metric: "+312% Revenue",
    },
    {
      quote:
        "We tried 3 agencies before X Matrics. They're the first team that actually understood unit economics and scaled us profitably.",
      author: "Marcus Rodriguez",
      role: "Founder, Luxe Beauty",
      context: "DTC Skincare • $2M ARR",
      metric: "5.2x ROAS",
    },
    {
      quote:
        "They don't just run ads—they built a repeatable system. Our cost per lead dropped 40% while volume doubled.",
      author: "Jennifer Walsh",
      role: "VP Marketing, FinanceHub",
      context: "B2B Fintech • 50 employees",
      metric: "$47M Pipeline",
    },
    {
      quote:
        "Finally an agency that treats our ad spend like their own money. We hit profitability targets in month 2.",
      author: "David Kim",
      role: "CEO, ScaleUp Labs",
      context: "DTC Health • $5M ARR",
      metric: "4.8x ROAS",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-0.5">
                    {testimonial.context}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gradient-gold">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
