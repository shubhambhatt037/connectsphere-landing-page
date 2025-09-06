import { useEffect, useRef, useState, useCallback } from "react";
import { Database, MessageCircle, Zap, Sparkles } from "lucide-react";

const FeaturesSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const sectionRef = useRef<HTMLElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);

  const features = [
    {
      icon: Database,
      title: "Server Management",
      category: "indigo",
      points: [
        "Create and join servers with invite codes",
        "Role-based permissions (Admin, Moderator, Guest)",
        "Server customization with images and names"
      ]
    },
    {
      icon: MessageCircle,
      title: "Communication",
      category: "blue",
      points: [
        "Text, audio, and video channels",
        "Direct messaging between members",
        "File and media sharing",
        "Real-time message updates",
        "Message editing and deletion"
      ]
    },
    {
      icon: Zap,
      title: "AI Summarizer Bot",
      category: "violet",
      points: [
        "/summarize command to generate concise recaps",
        "Adjustable history length (e.g., /summarize 100)",
        "Summaries stored in database for later access",
        "Optional daily automated summaries",
        "Distinct bot styling with loading states"
      ]
    },
    {
      icon: Sparkles,
      title: "User Experience",
      category: "teal",
      points: [
        "Modern Discord-like UI with smooth navigation",
        "Emoji picker and reactions",
        "Mobile-responsive design",
        "Dark/light theme switching",
        "User avatars and profiles"
      ]
    }
  ];

  // Auto-scroll cards when idle
  const startAutoScroll = useCallback(() => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = setTimeout(() => {
      if (!isScrolling) {
        setActiveCardIndex((prev) => (prev + 1) % features.length);
      }
    }, 4000); // Auto-scroll every 4 seconds
  }, [isScrolling, features.length]);

  // Enhanced scroll-based card transitions
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      
      if (isInView) {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollYRef.current;
        
        // Determine scroll direction
        if (Math.abs(scrollDelta) > 50) { // Threshold to prevent too sensitive scrolling
          const newDirection = scrollDelta > 0 ? 'down' : 'up';
          setScrollDirection(newDirection);
          
          if (newDirection === 'down') {
            setActiveCardIndex((prev) => (prev + 1) % features.length);
          } else {
            setActiveCardIndex((prev) => (prev - 1 + features.length) % features.length);
          }
          
          setIsScrolling(true);
          lastScrollYRef.current = currentScrollY;
          
          // Reset scrolling state after delay
          setTimeout(() => setIsScrolling(false), 1500);
        }
      }
    };

    const throttledScroll = (() => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 100);
      };
    })();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [features.length]);

  // Start auto-scroll when not manually scrolling
  useEffect(() => {
    if (!isScrolling) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [isScrolling, startAutoScroll]);

  const getCardClasses = (index: number, category: string) => {
    const isActive = index === activeCardIndex;
    const distanceFromActive = Math.abs(index - activeCardIndex);
    const isVisible = distanceFromActive <= 2; // Only show 3 cards max in stack
    
    const baseClasses = `
      absolute inset-x-0 mx-auto w-full max-w-2xl h-[500px] p-8 rounded-3xl backdrop-blur-2xl 
      transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer group font-inter
      border border-transparent bg-clip-padding
    `;
    
    if (!isVisible) {
      return `${baseClasses} opacity-0 pointer-events-none z-0`;
    }
    
    // Enhanced stack effect - cards peek from top-left with gradient borders
    const stackOffset = distanceFromActive * 12; // Larger offset for better visibility
    const scaleReduction = distanceFromActive * 0.03; // More noticeable scale reduction
    
    const stackClasses = isActive
      ? `z-50 transform-gpu shadow-2xl scale-100 
         hover:scale-[1.02] hover:-translate-y-2 hover:rotate-[0.5deg]`
      : `z-[${48 - distanceFromActive}] transform-gpu 
         translate-x-[-${stackOffset}px] translate-y-[-${stackOffset}px]
         scale-[${0.95 - scaleReduction}]
         opacity-${distanceFromActive === 1 ? '75' : '50'}
         hover:opacity-90 hover:scale-[${0.96 - scaleReduction}]`;
    
    // Gradient border glow effect
    const borderGlow = isActive
      ? `shadow-[0_0_30px_rgba(var(--${category}-rgb),0.4),0_0_60px_rgba(var(--${category}-rgb),0.2),inset_0_1px_0_rgba(255,255,255,0.15)]`
      : distanceFromActive === 1
      ? 'shadow-[0_0_20px_rgba(139,92,246,0.3),0_0_40px_rgba(59,130,246,0.2)] border-gradient-to-r from-violet-400/50 via-purple-400/50 to-blue-400/50'
      : 'shadow-[0_0_10px_rgba(139,92,246,0.2)]';
    
    const backgroundClasses = isActive
      ? `bg-gradient-to-br from-${category}-500/12 via-${category}-400/18 to-${category}-600/12 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-${category}-400/20 before:via-${category}-500/20 before:to-${category}-600/20 before:p-[1px] before:-z-10`
      : `bg-gradient-to-br from-${category}-500/6 via-${category}-400/9 to-${category}-600/6`;
    
    return `${baseClasses} ${stackClasses} ${backgroundClasses} ${borderGlow}`;
  };

  const getIconClasses = (category: string) => {
    const baseClasses = `
      w-16 h-16 rounded-full flex items-center justify-center relative
      transition-all duration-700 group-hover:scale-115 group-hover:rotate-3
      shadow-2xl backdrop-blur-sm font-inter overflow-hidden
      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-500
      group-hover:before:opacity-100 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]
    `;
    
    const backgroundClasses = category === 'violet'
      ? `bg-gradient-to-br from-violet-400 via-purple-500 to-violet-700 shadow-violet-500/60
         before:from-violet-300 before:to-purple-400
         group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]`
      : category === 'blue'
      ? `bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-700 shadow-blue-500/60
         before:from-blue-300 before:to-cyan-400
         group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]`
      : category === 'indigo'
      ? `bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-700 shadow-indigo-500/60
         before:from-indigo-300 before:to-purple-400
         group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]`
      : category === 'teal'
      ? `bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-700 shadow-teal-500/60
         before:from-teal-300 before:to-emerald-400
         group-hover:shadow-[0_0_25px_rgba(20,184,166,0.8)]`
      : `bg-gradient-to-br from-gray-400 via-slate-500 to-gray-700 shadow-gray-500/60
         before:from-gray-300 before:to-slate-400`;
    
    return `${baseClasses} ${backgroundClasses}`;
  };

  return (
    <section ref={sectionRef} id="features" className="py-32 px-6 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Enhanced background with center violet glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-indigo-900/95"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Enhanced animated particles/stars */}
      <div className="absolute inset-0 opacity-60">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-particle-float ${
              i % 5 === 0 ? 'w-2 h-2 bg-violet-400/80 shadow-[0_0_8px_rgba(139,92,246,0.8)]' :
              i % 4 === 0 ? 'w-1.5 h-1.5 bg-blue-400/70 shadow-[0_0_6px_rgba(59,130,246,0.7)]' :
              i % 3 === 0 ? 'w-1 h-1 bg-purple-400/60 shadow-[0_0_4px_rgba(147,51,234,0.6)]' :
              i % 2 === 0 ? 'w-0.5 h-0.5 bg-cyan-400/50' : 
              'w-1 h-1 bg-indigo-400/40'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 8)}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl font-satoshi text-white leading-[110%] mb-6 bg-text-gradient bg-clip-text text-transparent">
            Why ConnectSphere?
          </h2>
          <p className="text-xl font-inter text-bluish-gray max-w-3xl mx-auto leading-relaxed">
            Experience the future of team collaboration with AI-powered tools designed for modern workflows.
          </p>
        </div>

        {/* Enhanced Stack of Cards Container */}
        <div className="relative h-[520px] flex justify-center items-center perspective-1000">
          {features.map((feature, index) => (
            <div
              key={index}
              className={getCardClasses(index, feature.category)}
              onClick={() => setActiveCardIndex(index)}
              style={{
                animationDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card content with consistent layout */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Header section */}
                <div className="flex items-center gap-6 mb-6">
                  <div className={getIconClasses(feature.category)}>
                    <feature.icon 
                      className="w-8 h-8 text-white filter drop-shadow-sm" 
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                     <h3 className="text-3xl font-inter text-white mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-blue-100 group-hover:to-purple-100 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                       {feature.title}
                     </h3>
                  </div>
                </div>
                
                 {/* Content section */}
                 <div className="flex-1">
                   <ul className="space-y-4">
                     {feature.points.map((point, pointIndex) => (
                       <li key={pointIndex} className="flex items-start gap-4 text-sm font-inter leading-loose">
                          <div className={`w-2.5 h-2.5 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 ${
                            feature.category === 'violet'
                              ? 'bg-gradient-to-r from-violet-400 to-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.6)] group-hover:bg-violet-300 group-hover:scale-110'
                              : feature.category === 'blue'
                              ? 'bg-gradient-to-r from-blue-400 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:bg-blue-300 group-hover:scale-110'
                              : feature.category === 'indigo'
                              ? 'bg-gradient-to-r from-indigo-400 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] group-hover:bg-indigo-300 group-hover:scale-110'
                              : feature.category === 'teal'
                              ? 'bg-gradient-to-r from-teal-400 to-emerald-500 shadow-[0_0_8px_rgba(20,184,166,0.6)] group-hover:bg-teal-300 group-hover:scale-110'
                              : 'bg-gradient-to-r from-gray-400 to-slate-500 group-hover:bg-gray-300 group-hover:scale-110'
                          }`}></div>
                         <span className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-loose">
                           {point}
                         </span>
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced navigation indicators with tooltips */}
        <div className="flex justify-center gap-4 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <button
                className={`w-4 h-4 rounded-full transition-all duration-500 relative ${
                  index === activeCardIndex
                    ? `bg-gradient-to-r ${
                        feature.category === 'violet'
                          ? 'from-violet-400 to-purple-500 shadow-lg shadow-violet-400/60'
                          : feature.category === 'blue'
                          ? 'from-blue-400 to-cyan-500 shadow-lg shadow-blue-400/50'
                          : feature.category === 'indigo'
                          ? 'from-indigo-400 to-purple-500 shadow-lg shadow-indigo-400/50'
                          : feature.category === 'teal'
                          ? 'from-teal-400 to-emerald-500 shadow-lg shadow-teal-400/50'
                          : 'from-gray-400 to-slate-500 shadow-lg shadow-gray-400/50'
                      } scale-125 animate-pulse`
                    : 'bg-white/25 hover:bg-white/50 hover:scale-110'
                }`}
                onClick={() => setActiveCardIndex(index)}
              >
                {index === activeCardIndex && (
                  <div className={`absolute inset-0 rounded-full ${
                    feature.category === 'violet'
                      ? 'bg-gradient-to-r from-violet-400 to-purple-500' 
                      : feature.category === 'blue'
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-500'
                      : feature.category === 'indigo'
                      ? 'bg-gradient-to-r from-indigo-400 to-purple-500'
                      : feature.category === 'teal'
                      ? 'bg-gradient-to-r from-teal-400 to-emerald-500'
                      : 'bg-gradient-to-r from-gray-400 to-slate-500'
                  } animate-ping opacity-75`}></div>
                )}
              </button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-black/80 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                {feature.title}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced futuristic instruction text */}
        <div className="text-center mt-20 opacity-80">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-1 h-1 rounded-full bg-violet-400 animate-pulse"></div>
            <p className="text-base font-inter text-gray-300 font-medium bg-gradient-to-r from-gray-300 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Glide through the future of collaboration
            </p>
            <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <p className="text-xs font-inter text-gray-500">
            Navigate with scroll • Card {activeCardIndex + 1} of {features.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;