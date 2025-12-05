import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "X Matrix transformed our digital presence. We went from struggling to hit targets to consistently exceeding them by 200%+.",
      author: "Sarah Chen",
      role: "CMO, TechFlow",
      metric: "+312% Revenue",
    },
    {
      quote:
        "The team's data-driven approach and creative excellence is unmatched. Best agency decision we've ever made.",
      author: "Marcus Rodriguez",
      role: "Founder, Luxe Beauty",
      metric: "5.2x ROAS",
    },
    {
      quote:
        "They don't just run ads – they build growth engines. Our pipeline has never been healthier.",
      author: "Jennifer Walsh",
      role: "VP Marketing, FinanceHub",
      metric: "$47M Pipeline",
    },
    {
      quote:
        "Finally an agency that actually delivers on their promises. The ROI speaks for itself.",
      author: "David Kim",
      role: "CEO, ScaleUp Labs",
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
