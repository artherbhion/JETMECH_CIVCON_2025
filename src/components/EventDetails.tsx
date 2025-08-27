import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, ChevronDown, ChevronUp, Mail, Phone, Instagram, FileImage } from "lucide-react";
import { useState } from "react";
import codestrom from "../brochures/codestrom-lowq.webp";
import design from "../brochures/design-lowq.webp";
import bridgeit from "../brochures/bridgeit-lowq.webp";
import lathe from "../brochures/lathe-lowq.webp";
import techconx from "../brochures/techconx.webp";


const coordinators = [
  {
    id: 1,
    name: "ARTHER BHION C",
    email: "artherbhion2004@gmail.com",
    phone: "+91 95858 22800",
    instagram: "@artherbhion"
  },
  {
    id: 2,
    name: "PALANISAMY K",
    email: "palanisamy.k@mech.edu",
    phone: "+91 87654 32109",
    instagram: "@palanimech"
  },
  {
    id: 3,
    name: "YESHWAN R",
    email: "yeshwan.r@mech.edu",
    phone: "+91 76543 21098",
    instagram: "@yeshwanr"
  },
  {
    id: 4,
    name: "JEEVAN RAJ T",
    email: "jeevan_xj",
    phone: "+91 73393 09770",
    instagram: "@jeevanraj"
  },
  {
    id: 5,
    name: "LOGARAJ R",
    email: "logaraj.r@mech.edu",
    phone: "+91 95978 03451",
    instagram: "@logaraj_mech"
  },
  {
    id: 6,
    name: "BOOPATHIRAJAN S",
    email: "boopathi.r.s.10",
    phone: "+91 74062 89488",
    instagram: "@boopathi_mech"
  },
  {
    id: 7,
    name: "GIRUBHAKARAN S",
    email: "girubhakaran.s@mech.edu",
    phone: "+91 81480 55189",
    instagram: "@girubha_mech"
  }
];

const events = [
  {
    id: 1,
    title: "CodeStrom",
    description: "Test your coding skills in this intense two-round competition.",
    category: "Coding",
    duration: "2 rounds",
    teamSize: "Individual",
    prizes: ["₹3,000", "₹2,000", "₹1,000"],
    requirements: ["Laptop (Mandatory)", "Coding knowledge"],
    image: "💻",
    vibe: "🧠 Brainy",
    rounds: [
      {
        name: "Round 1: Coding Quiz",
        description: "100 multiple-choice questions to shortlist participants for Round 2"
      },
      {
        name: "Round 2: Problem Solving",
        description: "6 problems (Easy, Medium, Hard) to be solved in 60 minutes"
      }
    ],
    note: "Winners will be decided based on overall performance in both rounds.",
    coordinators: [coordinators[0], coordinators[1]],
    brochure: codestrom,
  },
  {
    id: 2,
    title: "Design-Xtreme",
    description: "Showcase your CAD skills in this design challenge.",
    category: "Design",
    duration: "2 rounds",
    teamSize: "1-2 members",
    prizes: ["₹3,000", "₹2,000", "₹1,000"],
    requirements: ["Laptop with CAD software", "3D modeling knowledge"],
    image: "✏️",
    vibe: "🎨 Creative",
    rounds: [
      {
        name: "Round 1: CAD Quiz",
        description: "30-minute quiz on CAD basics, 3D modeling, and software tools"
      },
      {
        name: "Round 2: Design Challenge",
        description: "Model a random mechanical component/system in 45-60 minutes"
      }
    ],
    note: "All participants must bring their own laptop with CAD software installed.",
    coordinators: [coordinators[2], coordinators[3]],
    brochure: design,
  },
  {
    id: 3,
    title: "Lathe-Wizz",
    description: "Demonstrate your lathe machining skills in this hands-on competition.",
    category: "Workshop",
    duration: "2 rounds",
    teamSize: "1-2 members",
    prizes: ["₹3,000", "₹2,000", "₹1,000"],
    requirements: ["Basic lathe knowledge", "Safety awareness"],
    image: "⚙️",
    vibe: "🛠️ Hands-on",
    rounds: [
      {
        name: "Round 1: Machining Quiz",
        description: "Quiz on lathe operations, tools, techniques, and safety"
      },
      {
        name: "Round 2: Machining Challenge",
        description: "Machine a workpiece to match a reference model within time limit"
      }
    ],
    note: "All tools and safety equipment will be provided. Safety protocols are mandatory.",
    coordinators: [coordinators[4], coordinators[5]],
    brochure: lathe
  },
  {
    id: 4,
    title: "Bridge It",
    description: "Design and build the strongest popsicle stick bridge.",
    category: "Engineering",
    duration: "2 rounds",
    teamSize: "1-2 members",
    prizes: ["₹3,000", "₹2,000", "₹1,000"],
    requirements: ["Structural knowledge", "Creative thinking"],
    image: "🌉",
    vibe: "🏗️ Structural",
    rounds: [
      {
        name: "Round 1: Reverse Engineering",
        description: "Analyze failed bridge designs and suggest improvements"
      },
      {
        name: "Round 2: Bridge Fabrication",
        description: "Build and test a popsicle stick bridge for maximum load"
      }
    ],
    note: "Materials will be provided. Bridges will be load tested until failure.",
    coordinators: [coordinators[6], coordinators[0]],
    brochure: bridgeit
  },
  {
    id: 5,
    title: "TECH-CONX",
    duration: "2 rounds",
    prizes: ["₹3,000", "₹2,000", "₹1,000"],
    requirements: ["Creative thinking minds", "Techicnal Knowledge"],
    image: "📐",
    rounds: [
      {
        name: "Round 1: Connections",
        description: "in this round participants are asked to find a word based on the image displayed on screen(all words are from basic engg concepts)"
      },
      {
        name: "Round 2: Quiz",
        description: "in this round participants are asked to answer quiz questions from civil and mechanical engg"
      }
    ],
    note: "THREE MEMBERS PER TEAM",
    coordinators: [coordinators[2], coordinators[3]],
    brochure: techconx
  }
];

const EventDetails = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [showCoordinators, setShowCoordinators] = useState<number | null>(null);
  const [viewingBrochure, setViewingBrochure] = useState<string | null>(null);

  // Helper for imported images: works for both string and {default: string}
  const getImgSrc = (img: any) =>
    typeof img === "string" ? img : img?.default || "";

  const handleCardClick = (id: number) => {
    if (showCoordinators !== null || viewingBrochure !== null) {
      setShowCoordinators(null);
      setViewingBrochure(null);
    } else {
      setFlippedCard(flippedCard === id ? null : id);
    }
  };

  const handleCoordinatorClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCoordinators(showCoordinators === id ? null : id);
    setViewingBrochure(null);
  };

  const handleBrochureClick = (brochureUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setViewingBrochure(brochureUrl);
    setShowCoordinators(null);
  };

  const closeBrochure = () => {
    setViewingBrochure(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Card suit decorations */}
      <div className="absolute opacity-10 pointer-events-none">
        <span className="text-[400px] absolute -left-20 -top-20">♠️</span>
        <span className="text-[400px] absolute -right-20 -bottom-20">♥️</span>
        <span className="text-[300px] absolute right-1/4 top-1/4">♦️</span>
        <span className="text-[300px] absolute left-1/4 bottom-1/4">♣️</span>
      </div>
      
      {/* Brochure Modal */}
      {viewingBrochure && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={getImgSrc(viewingBrochure)} 
              alt="Event Brochure" 
              className="max-w-full max-h-[80vh] object-contain border-4 border-orange-400 rounded-lg"
              loading="lazy" // <-- Lazy loading for performance
            />
            <button
              onClick={closeBrochure}
              className="absolute -top-12 right-0 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mt-4">
              <Button 
                variant="outline" 
                onClick={closeBrochure}
                className="bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-600"
              >
                Close Brochure
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="mx-auto w-full relative z-10 px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-orange-400">
              EVENTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pick your challenge. Play your cards right. Win big. 🃏
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="relative h-[500px]"
              style={{
                perspective: "1000px"
              }}
            >
              {/* Event Card */}
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out ${flippedCard === event.id ? 'rotate-y-180' : ''}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCard === event.id ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={() => handleCardClick(event.id)}
              >
                {/* Front of Card - Just the Brochure Image, No Card, No Border, No Padding */}
                <div 
                  className={`absolute w-full h-full backface-hidden ${flippedCard === event.id ? 'hidden' : 'block'}`}
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-0 m-0 bg-transparent border-none rounded-lg">
                    <div className="relative w-full h-full">
                      <img 
                        src={getImgSrc(event.brochure)}
                        alt={`${event.title} Brochure`}
                        className="w-full h-full object-contain m-0 p-0 rounded-lg block"
                        style={{
                          background: "none",
                          boxShadow: "none"
                        }}
                        loading="lazy" // <-- Lazy loading for performance
                      />
                      {/* Place absolute buttons at the image's corners */}
                      <Button
                        variant="outline"
                        className="absolute left-6 bottom-2 bg-gray-800/80 text-white hover:bg-gray-700/90 border-gray-600 z-10"
                        style={{ pointerEvents: "auto" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlippedCard(flippedCard === event.id ? null : event.id);
                        }}
                      >
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                      <Button
                        variant="default"
                        className="absolute right-6 bottom-2 bg-black text-white hover:bg-gray-800 border border-blue-400/50 shadow-lg z-10"
                        style={{ pointerEvents: "auto" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLScPrQQGH_-n-jrPK97Zzr7e9Zdu8jGZjLFt9HU6cDKuQZetbQ/viewform?usp=header",
                            "_blank"
                          );
                        }}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Card with Details */}
                <div 
                  className={`absolute w-full h-full backface-hidden ${flippedCard === event.id ? 'block' : 'hidden'}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    backgroundColor: "hsl(240, 10%, 15%)",
                  }}
                >
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-lg h-full flex flex-col">
                    <CardContent className="p-6 flex-1 overflow-y-auto">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        
                        <div>
                          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-orange-400" />
                            Prize Pool
                          </h4>
                          <div className="flex gap-2 flex-wrap">
                            {event.prizes && event.prizes.map((prize, i) => (
                              <Badge key={i} className={`text-xs ${
                                i === 0 ? 'bg-orange-400/20 text-orange-400 border-orange-400/30' :
                                i === 1 ? 'bg-gray-400/20 text-gray-400 border-gray-400/30' :
                                'bg-cyan-400/20 text-cyan-400 border-cyan-400/30'
                              }`}>
                                {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"} {prize}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-white mb-2">Event Rounds</h4>
                          <div className="space-y-3">
                            {event.rounds && event.rounds.length > 0 ? event.rounds.map((round, i) => (
                              <div key={i} className="bg-gray-700/50 p-3 rounded-lg">
                                <h5 className="font-semibold text-orange-400 text-sm">{round.name}</h5>
                                <p className="text-gray-300 text-xs">{round.description}</p>
                              </div>
                            )) : (
                              <div className="text-gray-400 text-xs">Details will be revealed at the event.</div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-white mb-2">Requirements</h4>
                          <div className="flex gap-2 flex-wrap">
                            {event.requirements && event.requirements.map((req, i) => (
                              <Badge key={i} className="text-xs bg-gray-700 text-gray-300 border-gray-600">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {event.note && (
                          <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                            <p className="text-xs text-orange-300 md:text-gray-400 md:italic">
                              {event.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>

                    {/* Fixed footer */}
                    <div className="p-4 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          className="bg-gray-700 text-white hover:bg-gray-600 flex items-center gap-2"
                          onClick={(e) => handleCoordinatorClick(event.id, e)}
                        >
                          <Phone className="w-4 h-4" />
                          Contacts
                        </Button>
                        
                        <Button
                          variant="outline"
                          className="bg-gray-700 text-white hover:bg-gray-600 flex items-center gap-2"
                          onClick={(e) => handleBrochureClick(event.brochure, e)}
                        >
                          <FileImage className="w-4 h-4" />
                          Brochure
                        </Button>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">                        
                        <Button 
                          variant="ghost" 
                          className="text-xs text-gray-400 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlippedCard(null);
                          }}
                        >
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Back
                        </Button>
                        
                        <Button
                          variant="default"
                          className="bg-black text-white hover:bg-gray-800 border border-blue-400/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              "https://docs.google.com/forms/d/e/1FAIpQLScPrQQGH_-n-jrPK97Zzr7e9Zdu8jGZjLFt9HU6cDKuQZetbQ/viewform?usp=header",
                              "_blank"
                            );
                          }}
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Coordinators Panel */}
              {showCoordinators === event.id && (
                <div 
                  className="absolute inset-0 z-10 bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 flex flex-col"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="flex-1 overflow-y-auto">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title} Coordinators
                    </h3>
                    
                    <div className="space-y-4">
                      {event.coordinators.map((coordinator, index) => (
                        <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-400">{coordinator.name}</h4>
                          
                          <div className="mt-3 space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-400">
                              <Phone className="w-4 h-4" />
                              <a href={`tel:${coordinator.phone}`} className="hover:underline">
                                {coordinator.phone}
                              </a>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-400">
                              <Mail className="w-4 h-4" />
                              <a href={`mailto:${coordinator.email}`} className="hover:underline">
                                {coordinator.email}
                              </a>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-400">
                              <Instagram className="w-4 h-4" />
                              <span>{coordinator.instagram}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-gray-400 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCoordinators(null);
                    }}
                  >
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Back to details
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-white mb-4">
            Ready to play? <span className="text-orange-400">Register now!</span> 🎲
          </p>
          <p className="text-gray-400">
            One registration gives you access to all events. Maximum participation, maximum fun.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default EventDetails;