import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import NextEventCard from './components/NextEventCard';
import PastEventCard from './components/PastEventCard';
import MissionLogs from './components/MissionLogs';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForSpeakers from './components/CallForSpeakers';
import CallForVolunteers from './components/CallForVolunteers';
import Sponsors from './components/Sponsors';
import ContactUs from './components/ContactUs';
import ContributorsSection from './components/ContributorsSection';
import SocialLinks from './components/ContactUs/SocialLinks';
import { MessageSquare } from 'lucide-react';

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
        <section
          id="about-socials"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-16"
        >
          <div className="col-span-full md:col-span-2 w-full flex flex-col h-full">
            <About />
          </div>

          {/* Social Links Section - Takes Right 50% */}
          <div className="col-span-full md:col-span-2 w-full flex flex-col h-full">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-dark-secondary" />
                Socials
              </h2>
              <div className="bg-dark-card rounded-3xl border border-dark-border p-6 md:p-8">
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>
        {/*Core  Team */}
        <section id="team" className="pt-16">
          <TeamSection />
        </section>
        {/* Main Bento Grid */}
        <section
          id="events"
          className="flex flex-wrap grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-8 pt-16"
        >
          <NextEventCard />
          <PastEventCard />
          <div className="flex flex-wrap gap-4 md:gap-6">
            {/* Call for Speakers Section */}
            <CallForSpeakers />
            <CallForVolunteers />
          </div>
        </section>

        <section id="mission-logs" className="pt-16">
          <MissionLogs />
        </section>

        {/* Community Partners Section */}
        <section id="partners" className="pt-16">
          <CommunityPartners />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="pt-16">
          <Sponsors />
        </section>

        {/* Contributors Section */}
        <section id="contributors" className="pt-16">
          <ContributorsSection />
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="pt-16">
          <ContactUs />
        </section>
      </div>
    </>
  );
}
