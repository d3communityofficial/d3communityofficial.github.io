import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import NextEventCard from './components/NextEventCard';
import StatsCard from './components/StatsCard';
import LocationCard from './components/LocationCard';
import TechStackCard from './components/TechStackCard';
import SocialCard from './components/SocialCard';
import MissionLogs from './components/MissionLogs';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForSpeakers from './components/CallForSpeakers';
import CallForVolunteers from './components/CallForVolunteers';
import Sponsors from './components/Sponsors';
import ContributorsSection from "./components/ContributorsSection";




export default function Home() {
  return (
    <>
      <Navigation />

      <div className="mx-auto space-y-8 mb-24">
        <Header />
        {/* Home */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Us Section */}
        <section id="about">
          <About />
        </section>

        {/* Main Bento Grid */}
        <section
          id="events"
          className="flex flex-wrap grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 md:h-[850px]"
        >
          <NextEventCard />
          <LocationCard />
          <StatsCard />
          <div className="flex flex-wrap gap-4 md:gap-6">
          {/* Call for Speakers Section */}
          <CallForSpeakers />
          <CallForVolunteers />
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
          <SocialCard />
          <TechStackCard />
          </div>
        </section>

        {/* Secondary Section: Past Logs & Team */}
        <section id="team" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MissionLogs />
          <TeamSection />
        </section>

        {/* Community Partners Section */}
        <section id="partners">
          <CommunityPartners />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors">
          <Sponsors />
        </section>
        {/* Contributors Section */}
        <section id="contributors">
          <ContributorsSection />
        </section>
      </div>
    </>
  );
}
