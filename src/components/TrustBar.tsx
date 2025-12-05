import { CheckCircle, TrendingUp, Star } from "lucide-react";

const TrustBar = () => {
  const stats = [
    { icon: CheckCircle, text: "Trusted by 50+ industry leaders" },
    { icon: TrendingUp, text: "$200M+ revenue generated" },
    { icon: Star, text: "4.9/5 client rating" },
  ];

  return (
    <section className="py-6 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
