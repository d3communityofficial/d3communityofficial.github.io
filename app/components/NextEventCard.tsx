"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import eventsData from "../data/events";

export default function NextEventCard() {
  // Get only the first upcoming event
  const event = eventsData.upcomingEvents?.[0] || null;

  const handleRSVP = () => {
    if (event && event.rsvpUrl) {
      window.open(event.rsvpUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-square rounded-bento p-4 sm:p-5 md:p-6 border border-dark-border bg-dark-card flex flex-col relative overflow-hidden group hover:border-dark-primary transition-colors cursor-pointer"
      onClick={handleRSVP}
    >
      {/* External link icon at top right */}
      {event?.rsvpUrl && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-500/80 backdrop-blur-sm flex items-center justify-center border border-gray-400/50">
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-gray-100 transition-colors" />
          </div>
        </div>
      )}

      {/* Image filling the entire card */}
      {event?.image && (
        <div className="absolute inset-0 -m-2 sm:-m-4 md:-m-6">
          <Image
            src={event.image}
            alt={event.title || "Event coming soon"}
            fill
            className="object-contain p-4 sm:p-5 md:p-6"
          />
        </div>
      )}
    </div>
  );
}

