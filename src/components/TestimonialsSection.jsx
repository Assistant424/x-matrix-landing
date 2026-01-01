import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "X Matrics took us from $80k to $340k/mo in revenue in under 6 months. Their systematic approach to creative testing was the unlock.",
      author: "Sarah Chen",
      role: "CMO, TechFlow",
      context: "B2B SaaS • Series A • $75k/mo ad spend",
      metric: "+312% Revenue",
    },
    {
      quote:
        "We tried 3 agencies before X Matrics. They're the first team that actually understood unit economics and scaled us profitably.",
      author: "Marcus Rodriguez",
      role: "Founder & CEO",
      context: "DTC Skincare • $2M ARR • 12-person team",
      metric: "5.2x ROAS",
    },
    {
      quote:
        "They don't just run ads—they built a repeatable system. Our cost per lead dropped 40% while volume doubled.",
      author: "Jennifer Walsh",
      role: "VP Marketing",
      context: "B2B Fintech • Series B • $120k/mo ad spend",
      metric: "$47M Pipeline",
    },
    {
      quote:
        "Finally an agency that treats our ad spend like their own money. We hit profitability targets in month 2.",
      author: "David Kim",
      role: "CEO & Co-founder",
      context: "DTC Health Supplements • $5M ARR",
      metric: "4.8x ROAS",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Don't just take our word for it.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-0.5">
                    {testimonial.context}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base sm:text-lg font-bold text-gradient-gold">
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
