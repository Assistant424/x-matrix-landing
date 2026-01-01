import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-navy-dark to-background" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Large glowing orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="hidden sm:block absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-[128px] animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      {/* Animated particles - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-up group hover:border-primary/50 transition-colors cursor-default">
          <Sparkles className="w-4 h-4 text-primary animate-pulse flex-shrink-0" />
          <span className="text-xs sm:text-sm text-muted-foreground">
            For DTC & B2B brands spending $25k+/mo on ads
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 animate-fade-up animation-delay-100">
          <span className="text-foreground block">Predictable Revenue.</span>
          <span className="text-gradient-gold relative inline-block">
            Scalable Growth.
            <span className="absolute -inset-x-6 -inset-y-2 bg-primary/10 blur-2xl -z-10 rounded-full" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-up animation-delay-200 leading-relaxed px-4">
          We build paid acquisition systems for growth-stage DTC and B2B brands ready to scale profitably.
          <span className="text-foreground font-medium"> Not tactics. Systems that compound.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up animation-delay-300 px-4">
          <Button variant="hero" size="lg" className="w-full sm:w-auto group" asChild>
            <a href="#contact">
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group" asChild>
            <a href="#results">
              See Case Studies
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 animate-fade-up animation-delay-400">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-4">Trusted by industry leaders</p>
          <div className="flex items-center justify-center gap-4 sm:gap-8 opacity-40 flex-wrap">
            {["TechFlow", "Luxe", "FinHub", "Nexus", "Apex"].map((brand, i) => (
              <span key={i} className="text-sm sm:text-lg font-bold text-muted-foreground tracking-wider">{brand}</span>
            ))}
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2 animate-scroll-hint">
            <div className="w-1 h-3 bg-primary rounded-full animate-scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
