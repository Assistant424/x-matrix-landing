import { useState } from "react";

const ResultsSection = () => {
  const stats = [
    { value: "327%", label: "Avg. ROAS" },
    { value: "$127M", label: "Revenue Driven" },
    { value: "48", label: "Brands Scaled" },
  ];

  const caseStudies = [
    {
      brand: "TechFlow",
      result: "+312% Revenue Growth",
      category: "SaaS",
    },
    {
      brand: "Luxe Beauty",
      result: "5.2x ROAS",
      category: "E-Commerce",
    },
    {
      brand: "FinanceHub",
      result: "$47M in Pipeline",
      category: "FinTech",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="results" className="py-24 bg-navy-dark grid-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that speak louder than words.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-navy-dark" />
              
              {/* Grid pattern */}
              <div className="absolute inset-0 grid-bg opacity-50" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div
                  className={`transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-70"
                  }`}
                >
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">
                    {study.brand}
                  </h3>
                  <p className="text-primary font-semibold mt-2">
                    {study.result}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-primary/10 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
