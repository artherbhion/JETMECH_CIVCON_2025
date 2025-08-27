import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LinearTimeline from "@/components/LinearTimeline";
import EventDetails from "@/components/EventDetails";
import Coordinators from "@/components/Coordinators";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventDetails />
      <AboutSection />
      {/* <LinearTimeline /> */}
      <Coordinators />
      {/* <JoinSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
