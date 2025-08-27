"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { useRef } from "react";
import bg from "./clgphotos/backgroung.webp"; // ✅ Vite-compatible import

const HeroSection = () => {
  const eventsRef = useRef<HTMLDivElement>(null);

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
        {/* Transparent Image Background */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none"
        />

        {/* Dynamic animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float blur-sm"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float blur-sm"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-24 h-24 bg-primary/20 rounded-full animate-float blur-sm"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
                animation: "slide-in-right 20s linear infinite",
              }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center text-white">
            {/* Glitch effect title */}
            <div className="mb-8 animate-bounce-in">
              <h1 className="text-6xl lg:text-8xl font-black mb-4 leading-tight relative">
                <span className="text-accent animate-neon-pulse ml-2">
                  JETMECH
                </span>
                <span className="mx-4 text-foreground/50"> & </span>
                <span className="text-secondary animate-neon-pulse">
                  CIVCON
                </span>
                <div
                  className="text-2xl lg:text-3xl font-light text-primary mt-2 animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  2025
                </div>
              </h1>
            </div>

            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto font-light">
                🔩 Gear up for the mechanical mayhem where{" "}
                <span className="text-accent font-semibold">
                  machines roar and ideas ignite.
                </span>
                One day. Pure engineering adrenaline.{" "}
                <span className="text-primary">Built to defy limits.</span>
              </p>
            </div>

            {/* Event highlights */}
            <div
              className="flex flex-wrap justify-center gap-8 mb-12 text-lg animate-slide-in-right"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <Calendar className="w-5 h-5 text-primary" />
                <span>SEPTEMBER 13 2025</span>
              </div>
              <div className="flex items-center gap-3 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>St. Joseph's College Of Engineering</span>
              </div>
              <div className="flex items-center gap-3 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                <Users className="w-5 h-5 text-accent" />
                <span>Open for All</span>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-bounce-in"
              style={{ animationDelay: "1.2s" }}
            >
              <Button
                variant="outline"
                size="xl"
                className="group"
                onClick={scrollToEvents}
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                EXPLORE EVENTS
              </Button>
            </div>

            {/* Status Indicators */}
            <div
              className="mt-12 flex justify-center gap-8 text-sm animate-fade-in"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">Registration Live</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400">Limited Spots</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-400">FOMO Alert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section with the ref */}
      <section
        ref={eventsRef}
        className="py-20 bg-background text-foreground"
        id="events"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event <span className="text-primary">Details</span>
          </h2>

          {/* Event content goes here */}
          <div className="max-w-4xl mx-auto">{/* Event cards */}</div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
