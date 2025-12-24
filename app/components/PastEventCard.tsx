"use client";

import { CalendarCheck, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import eventsData from "../data/events.json";
import { useResponsiveCardsPerView, useCarouselAutoRotate, useCarouselPause } from "../hooks/useCarousel";

interface PastEvent {
  id: string;
  date: string;
  formattedDate: string;
  title: string;
  description: string;
  status: string;
  link: string;
  venue: string;
}

export default function PastEventCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = useResponsiveCardsPerView();
  
  // Memoize pastEvents to prevent array recreation on every render
  const pastEvents = useMemo(() => {
    return (eventsData.pastEvents || []) as PastEvent[];
  }, []);
  
  const { isPaused, pause, resume, pauseWithResume } = useCarouselPause();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Early return check (moved after hooks to follow rules of hooks)
  const maxIndex = useMemo(() => {
    if (!pastEvents || pastEvents.length === 0) return 0;
    return Math.max(0, pastEvents.length - cardsPerView);
  }, [pastEvents.length, cardsPerView]);

  // Reset index when cardsPerView changes to prevent out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, maxIndex]);

  // Auto-rotate functionality
  useCarouselAutoRotate(currentIndex, setCurrentIndex, maxIndex, isPaused, 4000);

  // Navigation handlers
  const nextEvent = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevEvent = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToEvent = useCallback((index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  }, [maxIndex]);

  // Consolidated event handlers
  const handleButtonClick = useCallback((callback: () => void) => {
    pauseWithResume(5000);
    callback();
  }, [pauseWithResume]);

 
  const handleMouseEnter = useCallback(() => pause(), [pause]);
  const handleMouseLeave = useCallback(() => resume(), [resume]);

  // Memoized calculations
  const cardWidth = useMemo(() => {
    if (cardsPerView === 1) return '100%';
    const margins = cardsPerView - 1;
    return `calc((100% - ${margins}rem) / ${cardsPerView})`;
  }, [cardsPerView]);

  const transform = useMemo(() => {
    if (cardsPerView === 1) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    return `translateX(calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex}rem))`;
  }, [currentIndex, cardsPerView]);

  // Memoize dots array to prevent React children change error
  const dotsArray = useMemo(() => {
    return Array.from({ length: Math.max(0, maxIndex + 1) }, (_, i) => i);
  }, [maxIndex]);

  // Early return after all hooks
  if (!pastEvents || pastEvents.length === 0) {
    return null;
  }

  return (
    <div 
      className="col-span-1 md:col-span-4 rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group bg-gradient-card" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Past Events Carousel"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-dark-card border border-dark-border rounded-xl">
            <CalendarCheck className="w-6 h-6 text-dark-secondary" aria-hidden="true" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-dark-muted border border-dark-border px-2 py-1 rounded bg-dark-card">
            Past Events
          </span>
        </div>

        {/* Carousel Content - Responsive Cards */}
        <div 
          className="relative overflow-hidden mb-6"
          ref={carouselRef}
          role="group"
          aria-label={`Carousel showing ${cardsPerView} of ${pastEvents.length} events`}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform }}
            aria-live="polite"
            aria-atomic="false"
          >
            {pastEvents.map((event, index) => (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                key={event.id}
                className="flex-shrink-0 rounded-bento p-6 border border-dark-border bg-dark-card flex flex-col hover:border-dark-primary transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary focus:ring-offset-2"
                style={{ 
                  width: cardWidth,
                  marginRight: cardsPerView === 1 || index === pastEvents.length - 1 ? '0' : '1rem'
                }}
                aria-label={`${event.title} - ${event.formattedDate}`}
              >
                <div className="mb-4">
                  <div className="text-dark-secondary font-mono text-xs mb-2">&gt;&gt; {event.formattedDate}</div>
                  <h3 className="text-lg font-bold leading-tight mb-2 text-dark-text">{event.title}</h3>
                  <p className="text-dark-muted text-lg leading-relaxed border-l-2 border-dark-primary pl-3 mb-3">
                    {event.description}
                  </p>
                  {event.venue && (
                    <div className="flex items-center gap-2 text-sm text-dark-muted">
                      <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-dark-muted font-mono">✓ Event Completed</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-border" role="toolbar" aria-label="Carousel navigation">
          <button
            onClick={() => handleButtonClick(prevEvent)}
            disabled={currentIndex === 0 || maxIndex === 0}
            className="w-8 h-8 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dark-primary"
            aria-label="Previous events"
            aria-disabled={currentIndex === 0 || maxIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="flex gap-2 items-center" role="tablist" aria-label="Event indicators">
            {dotsArray.map((index) => (
              <button
                key={`dot-${index}`}
                onClick={() => handleButtonClick(() => goToEvent(index))}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to event ${index + 1} of ${maxIndex + 1}`}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary ${
                  index === currentIndex
                    ? 'bg-dark-primary w-6'
                    : 'bg-dark-card hover:bg-dark-card-hover border border-dark-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleButtonClick(nextEvent)}
            disabled={currentIndex >= maxIndex || maxIndex === 0}
            className="w-8 h-8 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dark-primary"
            aria-label="Next events"
            aria-disabled={currentIndex >= maxIndex || maxIndex === 0}
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
