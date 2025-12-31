import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    adSpend: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    "Honest audit of your current funnel",
    "Clear roadmap with realistic timelines",
    "No lock-in contracts. Month-to-month.",
  ];

  return (
    <section id="contact" className="py-24 bg-navy-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow animation-delay-300" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4" />
            Accepting 3 new partners this quarter
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ready for <span className="text-gradient-gold">Structured Growth?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            15-minute strategy call. We'll review your funnel, identify gaps, and see if we're a fit.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-3 relative">
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <form 
                onSubmit={handleSubmit} 
                className="relative bg-secondary/30 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_20px_rgba(240,191,0,0.15)]' 
                          : 'border-border hover:border-primary/30'
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_20px_rgba(240,191,0,0.15)]' 
                          : 'border-border hover:border-primary/30'
                      }`}
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === 'company' 
                        ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_20px_rgba(240,191,0,0.15)]' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    placeholder="Company name"
                  />
                  <select
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('adSpend')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 rounded-xl bg-background/50 border text-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === 'adSpend' 
                        ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_20px_rgba(240,191,0,0.15)]' 
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <option value="">Monthly ad spend</option>
                    <option value="0-25k">$0 - $25k</option>
                    <option value="25-50k">$25k - $50k</option>
                    <option value="50-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={3}
                  className={`w-full px-5 py-4 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message' 
                      ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_20px_rgba(240,191,0,0.15)]' 
                      : 'border-border hover:border-primary/30'
                  }`}
                  placeholder="Tell us about your goals..."
                />

                <Button variant="gold" size="xl" className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book My Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
              </form>
            </div>

            {/* Side Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Benefits */}
              <div className="bg-secondary/30 border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">What you'll get:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-gold">24h</div>
                    <div className="text-sm text-muted-foreground">Response time</div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center text-sm text-muted-foreground">
                <span className="text-primary font-semibold">48+ brands</span> trust us with their growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;