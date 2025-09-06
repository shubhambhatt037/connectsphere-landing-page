import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="demo" className="py-32 px-6 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
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
          <h2 className="text-6xl font-bold font-satoshi text-white leading-[110%] mb-6 bg-text-gradient bg-clip-text text-transparent">
            See ConnectSphere in Action
          </h2>
          <p className="text-xl font-inter text-bluish-gray max-w-3xl mx-auto leading-relaxed">
            Watch how teams collaborate smarter with AI.
          </p>
        </div>

        {/* Video Container with enhanced styling */}
        <div className="relative group flex justify-center">
          <div className="relative bg-gradient-to-br from-violet-500/12 via-purple-400/18 to-violet-600/12 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(139,92,246,0.2)] hover:border-violet-400/30 transition-all duration-500 max-w-5xl w-full">
            
            {!isVideoPlaying ? (
              /* Play Button State */
              <div className="p-16">
                <div className="aspect-video flex items-center justify-center">
                  <div className="flex flex-col items-center gap-8">
                    {/* Enhanced Play Button */}
                    <button 
                      onClick={handlePlayVideo}
                      className="w-32 h-32 bg-gradient-to-br from-violet-400 via-purple-500 to-violet-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative shadow-2xl shadow-violet-500/60 cursor-pointer"
                    >
                      {/* Glowing ring on hover */}
                      <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-all duration-500"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-300 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Play className="w-10 h-10 text-white ml-2 relative z-10" fill="currentColor" />
                    </button>
                    
                    {/* Enhanced Subtext */}
                    <p className="text-base font-inter text-gray-300 group-hover:text-white transition-colors duration-300">
                      2-min demo • No sign-up required
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Video Playing State */
              <div className="p-8">
                <div className="relative bg-black/20 rounded-2xl overflow-hidden">
                  {/* Mock Video Player */}
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                    {/* Video Content Placeholder */}
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <Play className="w-8 h-8 text-white" fill="currentColor" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">ConnectSphere Demo</h3>
                        <p className="text-gray-300">Experience seamless team collaboration</p>
                      </div>
                      
                      {/* Demo Features List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                        <div className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                          <span>Real-time messaging</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>AI-powered summaries</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Server management</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                          <span>Modern UI/UX</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => setIsVideoPlaying(false)}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </button>
                          <span className="text-white text-sm">1:23 / 2:00</span>
                        </div>
                        <div className="text-white text-sm">HD Quality</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced futuristic instruction text */}
        <div className="text-center mt-20 opacity-80">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-1 h-1 rounded-full bg-violet-400 animate-pulse"></div>
            <p className="text-base font-inter text-gray-300 font-medium bg-gradient-to-r from-gray-300 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Experience the future of collaboration
            </p>
            <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <p className="text-xs font-inter text-gray-500">
            {isVideoPlaying ? 'Watching live demo • Click anywhere to close' : 'Click to watch • Join thousands of teams worldwide'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;