export interface PastEvent {
  id: string;
  date: string;
  formattedDate: string;
  title: string;
  description: string;
  status: string;
  link: string;
  venue: string;
}

export interface UpcomingEvent {
  id: string;
  date: string;
  formattedDate: string;
  title: string;
  description: string;
  status: string;
  rsvpUrl?: string;
  venue: string;
}

export interface EventsData {
  pastEvents: PastEvent[];
  upcomingEvents: UpcomingEvent[];
}

const eventsData: EventsData = {
  pastEvents: [
    {
      id: "meetup-5",
      date: "2024-10-20",
      formattedDate: "20 OCT 2024",
      title: "Meetup 5",
      description: "Advanced topics in full-stack development and AI integration.",
      status: "completed",
      link: "https://d3community.in/meetup-5",
      venue: "Yuniq, Chennai"
    },
    {
      id: "meetup-4",
      date: "2024-09-18",
      formattedDate: "18 SEP 2024",
      title: "Meetup 4",
      description: "Building scalable applications with modern frameworks.",
      status: "completed",
      link: "https://d3community.in/meetup-4",
      venue: "Yuniq, Chennai"
    },
    {
      id: "meetup-3",
      date: "2024-08-12",
      formattedDate: "12 AUG 2024",
      title: "Meetup 3",
      description: "Deep dive into React and Next.js best practices.",
      status: "completed",
      link: "https://d3community.in/meetup-3",
      venue: "Kissflow, Chennai"
    },
    {
      id: "meetup-2",
      date: "2024-07-08",
      formattedDate: "08 JUL 2024",
      title: "Meetup 2",
      description: "Introduction to AI tools for developers.",
      status: "completed",
      link: "https://d3community.in/meetup-2",
      venue: "ZOOMINFO,Perungudi"
    },
    {
      id: "meetup-1",
      date: "2024-06-05",
      formattedDate: "05 JUN 2024",
      title: "Meetup 1",
      description: "Kickoff event - Building the D3 Community.",
      status: "completed",
      link: "https://d3community.in/meetup-1",
      venue: "Community Center, Bangalore"
    }
  ],
  upcomingEvents: [
    {
      id: "genai-frontend",
      date: "2024-12-24",
      formattedDate: "24 DEC 2024",
      title: "GenAI & Frontend Architecture",
      description: "Deep dive into integrating LLMs with React. Production-grade patterns only.",
      status: "upcoming",
      rsvpUrl: "https://bento.me/d3community",
      venue: "M2P Fintech, Chennai"
    }
  ]
};

export default eventsData;

