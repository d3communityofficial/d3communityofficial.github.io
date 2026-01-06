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
import { CalendarClock } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <section
            id="about"
            className="col-span-full md:col-span-2 w-full flex flex-col h-full"
          >
            <About />
          </section>

          {/* Social Section Placeholder - Takes Right 50% */}
          <section className="col-span-full md:col-span-2 w-full flex flex-col h-full min-h-[300px] border border-dashed border-dark-border rounded-bento bg-dark-card/20 items-center justify-center text-dark-muted">
            <p>Social Section (Reserved)</p>
          </section>
        </div>

        {/* Next Event and Call for Speakers - 50/50 Layout */}
        <section id="events">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NextEventCard />
            <CallForSpeakers />
          </div>
        </section>

        {/* Past Events */}
        <section>
          <PastEventCard/>
        </section>

        {/* Call for Volunteers */}
        <section>
          <CallForVolunteers />
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

        {/* Contact Us Section */}
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </>
  );
}
