import Navigation from "./components/Navigation";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import NextEventCard from "./components/NextEventCard";
import StatsCard from "./components/StatsCard";
import LocationCard from "./components/LocationCard";
import TechStackCard from "./components/TechStackCard";
import SocialCard from "./components/SocialCard";
import MissionLogs from "./components/MissionLogs";
import TeamSection from "./components/TeamSection";
import CommunityPartners from "./components/CommunityPartners";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="max-w-7xl mx-auto space-y-8 mb-24">
        <Header />
        <HeroSection />

        {/* About Us Section */}
        <AboutSection />

        {/* Main Bento Grid */}
        <div className="flex flex-wrap grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 md:h-[850px]">
          <NextEventCard />
          <StatsCard />
          <LocationCard />
          <TechStackCard />
          <SocialCard />
        </div>

        {/* Secondary Section: Past Logs & Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MissionLogs />
          <TeamSection />
        </div>

        {/* Community Partners Section */}
        <CommunityPartners />

        {/* Sponsors Section */}
        <Sponsors />
      </div>
    </>
  );
}
