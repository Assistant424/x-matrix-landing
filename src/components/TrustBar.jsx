import { CheckCircle, TrendingUp, Star } from "lucide-react";

const TrustBar = () => {
  const stats = [
    { icon: CheckCircle, text: "Trusted by 50+ industry leaders" },
    { icon: TrendingUp, text: "$200M+ revenue generated" },
    { icon: Star, text: "4.9/5 client rating" },
  ];

  return (
    <section className="py-4 sm:py-6 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground"
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium">{stat.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
