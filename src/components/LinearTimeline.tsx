import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Zap, Code, Trophy, Lightbulb, Users, Target } from "lucide-react";

const timelineEvents = [
  {
    time: "08:00",
    title: "Registration & Check-in",
    description: "Get your rebel badge and welcome kit",
    location: "Main Lobby",
    type: "start",
    icon: Users,
    color: "text-green-400"
  },
  {
    time: "8:30",
    title: "Opening Ceremony",
    description: "Welcome to the chaos - keynote & agenda reveal",
    location: "Main Auditorium",
    type: "ceremony",
    icon: Zap,
    color: "text-primary"
  },
  {
    time: "9:00",
    title: "Battle Begins",
    description: "The ultimate coding showdown starts now",
    location: "Tech Arena",
    type: "competition",
    icon: Code,
    color: "text-accent"
  },
  {
    time: "12:30",
    title: "Phase 2",
    description: "Build your first neural network",
    location: "Lab 01",
    type: "workshop",
    icon: Lightbulb,
    color: "text-secondary"
  },
  {
    time: "2:00",
    title: "Project Showcase",
    description: "Present your game-changing ideas",
    location: "Innovation Zone",
    type: "showcase",
    icon: Target,
    color: "text-yellow-400"
  },
  {
    time: "2:30",
    title: "Tech Quiz Battle",
    description: "Test your tech knowledge limits",
    location: "Main Auditorium",
    type: "competition",
    icon: Trophy,
    color: "text-orange-400"
  },
  {
    time: "3:00",
    title: "Winners Announcement",
    description: "Crowning the champions & closing ceremony",
    location: "Main Auditorium",
    type: "ceremony",
    icon: Trophy,
    color: "text-primary"
  }
];

const LinearTimeline = () => {
  return (
    <section className="py-12 md:py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-foreground mb-3 md:mb-4">
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              EVENT ROADMAP
            </span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            One epic day. Multiple challenges. Infinite possibilities. 🚀
          </p>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-neon-gradient"></div>
          
          <div className="space-y-8 pl-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Event card */}
                <div className="bg-card-gradient p-4 md:p-6 rounded-xl shadow-card border border-primary/20">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 ${event.color}`}>
                      <event.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <Badge className={`${event.color} bg-transparent border-current text-xs`}>
                      {event.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs ml-auto">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-2 text-xs">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>
                
                {/* Dot */}
                <div className="absolute -left-9 top-4 w-4 h-4 rounded-full bg-primary shadow-neon-blue border-2 border-background"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-gradient"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Event card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-card-gradient p-6 rounded-xl shadow-card border border-primary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 ${event.color}`}>
                        <event.icon className="w-5 h-5" />
                      </div>
                      <Badge className={`${event.color} bg-transparent border-current`}>
                        {event.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm ml-auto">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3 text-sm">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                
                {/* Central dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full ${event.color.replace('text-', 'bg-')} shadow-neon-blue border-4 border-background`}></div>
                </div>
                
                {/* Time indicator */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`text-3xl font-black ${event.color}`}>
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12 md:mt-20">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
            Ready to join the revolution? 🔥
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 bg-green-400/20 text-green-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-green-400/30 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-semibold">Registration Open</span>
            </div>
            <div className="flex items-center gap-2 bg-red-400/20 text-red-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-red-400/30 text-sm">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="font-semibold">Limited Spots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinearTimeline;
