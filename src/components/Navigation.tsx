import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/config/app";

const Navigation = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <img
                src="/lovable-uploads/feb4d2b0-4d72-4627-9d8b-08506de2fd1b.png"
                alt="ConnectSphere logo"
                className="h-8 w-8 rounded-md shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl text-foreground group-hover:text-accent-blue transition-colors duration-300">
                ConnectSphere
              </span>
            </button>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Features", id: "features" },
              { name: "Demo", id: "demo" },
              { name: "About", id: "trusted" }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent-blue relative py-2 transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </div>

          {/* Launch App Button */}
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              className="border-white/50 text-foreground hover:bg-accent-blue hover:border-accent-blue hover:text-white transition-all duration-300"
              onClick={() => window.open(APP_CONFIG.APP_URL, '_blank')}
            >
              Launch App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;