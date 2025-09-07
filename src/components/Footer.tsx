import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { name: "Features", id: "features" },
    { name: "Demo", id: "demo" },
    { name: "About", id: "trusted" },
    { name: "Home", id: "hero" }
  ];
  
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/BhattBuilds", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-bhatt-48b002250/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/shubhambhatt037", label: "GitHub" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 border-t border-white/10">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-indigo-900/95"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-particle-float ${
              i % 4 === 0 ? 'w-1.5 h-1.5 bg-violet-400/60 shadow-[0_0_6px_rgba(139,92,246,0.6)]' :
              i % 3 === 0 ? 'w-1 h-1 bg-blue-400/50 shadow-[0_0_4px_rgba(59,130,246,0.5)]' :
              i % 2 === 0 ? 'w-0.5 h-0.5 bg-purple-400/40' : 
              'w-1 h-1 bg-indigo-400/30'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i % 6)}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left - Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                src="/lovable-uploads/feb4d2b0-4d72-4627-9d8b-08506de2fd1b.png"
                alt="ConnectSphere logo"
                className="h-8 w-8 rounded-md shadow-sm"
              />
              <h3 className="text-2xl font-satoshi text-white bg-text-gradient bg-clip-text text-transparent">
                ConnectSphere
              </h3>
            </div>
            <p className="text-base font-inter text-bluish-gray leading-relaxed">
              Smarter Collaboration, Powered by AI
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-blue-100 hover:to-purple-100 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-base font-inter font-medium relative group cursor-pointer"
              >
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Right - Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-gradient-to-br from-violet-500/10 via-purple-400/15 to-violet-600/10 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-400/30 hover:bg-gradient-to-br hover:from-violet-500/20 hover:via-purple-400/25 hover:to-violet-600/20 hover:scale-110 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-inter">
              © ConnectSphere 2025. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-violet-400 animate-pulse"></div>
              <p className="text-sm font-inter text-gray-400 bg-gradient-to-r from-gray-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Made with ❤️ by Shubham Bhatt
              </p>
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;