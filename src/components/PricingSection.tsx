import { Check } from "lucide-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Growth Starter",
      price: "$4,900",
      period: "/mo",
      description: "Perfect for startups ready to scale",
      features: [
        "Up to $50k ad spend management",
        "2 advertising platforms",
        "Bi-weekly strategy calls",
        "Monthly performance reports",
        "Creative testing (2 concepts/mo)",
        "Landing page optimization",
        "Email support",
        "30-day optimization period",
      ],
      popular: false,
    },
    {
      name: "Dominance",
      price: "$9,900",
      period: "/mo",
      description: "For brands ready to dominate their market",
      features: [
        "Up to $200k ad spend management",
        "All advertising platforms",
        "Weekly strategy calls",
        "Real-time performance dashboard",
        "Unlimited creative testing",
        "Full funnel optimization",
        "Dedicated account manager",
        "Slack channel support",
        "Competitor analysis",
        "Quarterly business reviews",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For industry leaders with complex needs",
      features: [
        "Unlimited ad spend management",
        "Omni-channel strategy",
        "Daily performance syncs",
        "Custom attribution modeling",
        "In-house team training",
        "C-suite reporting",
        "On-site workshops",
        "Priority support (< 1hr)",
        "Custom integrations",
        "Revenue share options",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. No surprises. Just results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                plan.popular
                  ? "card-gradient border-2 border-primary shadow-[0_0_40px_hsl(var(--gold)/0.2)]"
                  : "card-gradient border border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Chosen
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-gradient-gold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "gold" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.name === "Enterprise" ? "Book a Call" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
