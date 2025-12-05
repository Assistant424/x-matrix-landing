const ResultsSection = () => {
  const stats = [
    { value: "327%", label: "Avg. ROAS", description: "Return on ad spend" },
    { value: "$127M", label: "Revenue Driven", description: "For our clients" },
    { value: "48", label: "Brands Scaled", description: "And counting" },
  ];

  return (
    <section id="results" className="py-24 bg-navy-dark grid-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that speak louder than words. Every metric represents real growth for real brands.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-10 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-6xl md:text-7xl font-black text-gradient-gold mb-3 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see similar results for your brand?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Let's talk numbers
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
