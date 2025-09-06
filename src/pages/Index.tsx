import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedSection from "@/components/TrustedSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
