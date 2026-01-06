"use client";

import { CalendarClock } from "lucide-react";

import Image from "next/image";
import eventsData from "../data/events";

export default function NextEventCard() {

  // Get only the first upcoming event
  const event = eventsData.upcomingEvents?.[0] || null;

  const handleRSVP = () => {
    if (event && event.rsvpUrl) { 
      window.open(event.rsvpUrl, '_blank', 'noopener,noreferrer');
    }
  };


  return (
    <>
      <div className="rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group bg-dark-card">
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex justify-between items-start mb-auto">
            <div className="p-3 bg-dark-card border border-dark-border rounded-xl">
              <CalendarClock className="w-6 h-6 text-dark-secondary" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-dark-muted border border-dark-border px-2 py-1 rounded bg-dark-card">
              Upcoming
            </span>
          </div>
          
          <div className="mt-4">      
            <div className="relative rounded-lg cursor-pointer inline-flex justify-center items-center max-w-full" onClick={handleRSVP}>
              <Image
                src="/events/coming-soon.png"
                alt="Event coming soon"
                width={600}
                height={400}
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

