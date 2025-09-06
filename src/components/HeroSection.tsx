import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ProductMockup from "./ProductMockup";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
    backgroundImage: `url(/lovable-uploads/feb4d2b0-4d72-4627-9d8b-08506de2fd1b.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-blue/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-blue/40 rounded-full animate-particle-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent-blue/20 rounded-full animate-particle-float" style={{
          animationDelay: '4s'
        }}></div>
        <div className="absolute top-1/2 left-1/3 w-px h-16 bg-accent-blue/20 animate-particle-float" style={{
          animationDelay: '3s'
        }}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-accent-blue/25 rounded-full animate-particle-float" style={{
          animationDelay: '5s'
        }}></div>
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-accent-blue/15 rounded-full animate-particle-float" style={{
          animationDelay: '6s'
        }}></div>
        
        {/* Gradient flares near CTAs */}
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-2/3 w-24 h-24 bg-accent-blue/15 rounded-full blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-glass-gradient backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-6 shadow-badge-glow">
              <Sparkles className="w-4 h-4 mr-2 text-accent-blue" />
              AI-Powered Platform
            </div>
            
            {/* Headlines */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05] tracking-tight font-satoshi">
              <span>Smarter Collaboration,</span>{" "}
              <span className="relative inline-block">
                <span className="bg-text-gradient bg-clip-text text-transparent animate-glow-pulse shadow-text-glow">
                  Powered by AI
                </span>
                <div className="absolute bottom-2 left-0 right-0 h-1 bg-text-gradient rounded-full transform scale-x-0 animate-underline-expand"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-bluish-gray mb-8 max-w-xl leading-relaxed font-satoshi">Unify chat, video, voice, and AI, all in one seamless platform for modern teams.</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="gradient" size="lg" className="px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 font-satoshi group">
                <span className="group-hover:animate-pulse">Start Free Today</span>
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold rounded-full font-satoshi"
                onClick={() => scrollToSection('demo')}
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="text-sm text-white/60 font-satoshi">
              <span>Trusted by 500+ teams worldwide</span>
            </div>
          </div>
          
          {/* Right column - Product mockup */}
          <div className="order-first lg:order-last hover:animate-tilt-hover transition-all duration-300">
            <ProductMockup />
          </div>
          
        </div>
      </div>
      
      {/* Bottom glow element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-glow-gradient opacity-60"></div>
    </section>
  );
};
export default HeroSection;