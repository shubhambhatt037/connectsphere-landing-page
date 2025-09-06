const ProductMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Floating laptop mockup */}
      <div className="relative transform rotate-6 hover:rotate-3 transition-all duration-700 hover:scale-105" style={{perspective: '1000px'}}>
        <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass transform hover:rotateX-2"
             style={{transformStyle: 'preserve-3d'}}>
          {/* Screen content */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 space-y-3 border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-muted-foreground">ConnectSphere</div>
            </div>
            
            {/* Chat interface mockup */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-accent-blue rounded-full animate-pulse"></div>
                <div className="flex-1 bg-accent-blue/20 rounded-lg p-2">
                  <div className="text-xs text-foreground/80">AI: How can I help you today?</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 justify-end">
                <div className="bg-muted/40 rounded-lg p-2 max-w-xs">
                  <div className="text-xs text-foreground/70">Schedule a team meeting</div>
                </div>
                <div className="w-6 h-6 bg-muted/60 rounded-full"></div>
              </div>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="bg-glass-gradient backdrop-blur-md rounded-lg p-2 text-center border border-white/10">
                <div className="text-xs font-medium text-white/90">Video Call</div>
              </div>
              <div className="bg-glass-gradient backdrop-blur-md rounded-lg p-2 text-center border border-white/10">
                <div className="text-xs font-medium text-white/90">AI Assistant</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent-blue/20 rounded-2xl blur-xl -z-10 animate-glow-pulse"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue/30 rounded-full animate-float blur-sm"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent-blue/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Connecting particles */}
      <div className="absolute top-1/2 -left-8 w-px h-12 bg-accent-blue/30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 -right-8 w-px h-8 bg-accent-blue/20 animate-float" style={{animationDelay: '3s'}}></div>
    </div>
  );
};

export default ProductMockup;