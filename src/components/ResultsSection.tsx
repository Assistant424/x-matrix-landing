import { TrendingUp, DollarSign, Building2 } from "lucide-react";

const ResultsSection = () => {
  const stats = [
    { 
      icon: TrendingUp,
      value: "327%", 
      label: "Avg. ROAS", 
      description: "Return on ad spend" 
    },
    { 
      icon: DollarSign,
      value: "$127M", 
      label: "Revenue Driven", 
      description: "For our clients" 
    },
    { 
      icon: Building2,
      value: "48", 
      label: "Brands Scaled", 
      description: "And counting" 
    },
  ];

  return (
    <section id="results" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[200px] rounded-full" />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Proven <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Numbers that speak louder than words
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative text-center p-10 rounded-3xl bg-gradient-to-br from-secondary/60 via-secondary/30 to-transparent border border-border hover:border-primary/40 transition-all duration-500 group overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
              </div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
          >
            Ready to see similar results?
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;