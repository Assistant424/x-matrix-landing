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
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    "Honest audit of your current funnel",
    "Clear roadmap with realistic timelines",
    "No lock-in contracts. Month-to-month.",
  ];

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 text-sm sm:text-base";
    const focusedClass = "border-primary ring-2 ring-primary/20 shadow-[0_0_20px_rgba(240,191,0,0.15)]";
    const defaultClass = "border-border hover:border-primary/30";
    
    return `${baseClass} ${focusedField === fieldName ? focusedClass : defaultClass}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-navy-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="hidden sm:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="hidden sm:block absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow animation-delay-300" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4" />
            Accepting 3 new partners this quarter
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Ready for <span className="text-gradient-gold">Structured Growth?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            15-minute strategy call. We'll review your funnel, identify gaps, and see if we're a fit.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-3 relative order-2 lg:order-1">
              {/* Form Glow Effect */}
              <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <form 
                onSubmit={handleSubmit} 
                className="relative bg-secondary/30 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={getInputClassName('name')}
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
                      className={getInputClassName('email')}
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClassName('company')}
                    placeholder="Company name"
                  />
                  <select
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('adSpend')}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClassName('adSpend')}
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
                  className={`${getInputClassName('message')} resize-none`}
                  placeholder="Tell us about your goals..."
                />

                <Button variant="gold" size="lg" className="w-full group relative overflow-hidden">
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
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Benefits */}
              <div className="bg-secondary/30 border border-border rounded-2xl p-5 sm:p-6">
                <h3 className="font-bold text-foreground mb-3 sm:mb-4">What you'll get:</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                      <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gradient-gold">24h</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Response time</div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center text-xs sm:text-sm text-muted-foreground">
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
