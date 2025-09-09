import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Instagram } from "lucide-react";
import { useState } from "react";

// Import your images
import logaraj from "./img/logaraj.webp";
import palani from "./img/palani2.webp";
import boopathi from "./img/boopathi.webp";
import girubha from "./img/girubha.webp";
import jeevan from "./img/jeevan.webp";
import artherbhion from "./img/artherbhionc.webp";
import pavadharani from "./img/pavadharani.jpg";
import sahi from "./img/sahi.webp";
import roshan from "./img/roshan.webp";
import salamon from "./img/salamon.webp";
import jeeva from "./img/jeeva.webp";
import salo from "./img/salo.webp";
import shaaron from "./img/shaaron.webp";
import rathis from "./img/rathis.webp";
import yesh from "./img/yashwan.webp";
import defaultAvatar from "./img/download.webp";

const eventSections = [
  {
    title: "CodeStrome Coordinators",
    coordinators: [
      {
        name: "JEEVAN RAJ T",
        role: "CodeStrome Coordinator",
        department: "Mechanical Engineering",
        instagram: "jeevan_xj",
        phone: "+91 73393 09770",
        image: jeevan,
      },
      {
        name: "LOGARAJ R",
        role: "CodeStrome Coordinator",
        department: "Mechanical Engineering",
        instagram: "_am_logu._",
        phone: "+91 95978 03451",
        image: logaraj,
      },
    ],
  },
  {
    title: "Design-Xtreme Coordinators",
    coordinators: [
      {
        name: "BOOPATHIRAJAN S",
        role: "Design-Xtreme Coordinator",
        department: "Mechanical Engineering",
        instagram: "boopathi.r.s.10",
        phone: "+91 74062 89488",
        image: boopathi,
      },
      {
        name: "GIRUBHAKARAN S",
        role: "Design-Xtreme Coordinator",
        department: "Mechanical Engineering",
        phone: "+91 81480 55189",
        image: girubha,
      },
    ],
  },
  {
    title: "Lathe-Wizz Coordinators",
    coordinators: [
      {
        name: "SALAMON P",
        role: "Lathe-Wizz Coordinator",
        department: "Mechanical Engineering",
        phone: "+91 95001 57412",
        image: salo,
      },
      {
        name: "SHAHID PARVEZ A B",
        role: "Bridge It Coordinator",
        department: "Mechanical Engineering",
        phone: "+91 98840 12259",
        image: sahi,
      },
      
    ],
  },
  {
    title: "Bridge It Coordinators",
    coordinators: [
      {
        name: "SARON R",
        role: "Bridge It Coordinator",
        department: "Mechanical Engineering",
        phone: "+91 77088 13105",
        image: salamon,
      },
      {
        name: "ROSHAN SANTHOSH",
        role: "Lathe-Wizz Coordinator",
        department: "Mechanical Engineering",
        phone: "+91 80150 29521",
        image: roshan,
      },
      
    ],
  },
  {
    title: "TECH-CONX",
    coordinators: [
      {
        name: "RATHISHA R",
        role: "TECH-CONX Coordinator",
        instagram: "rathisharavikumar@gmail.com",
        department: "CIVIL Engineering",
        phone: "+91 91591 29388",
        image: rathis,
      },
      {
        name: "SHAARAN",
        role: "TECH-CONX Coordinator",
        department: "CIVIL Engineering",
        phone: "+91 93455 22132",
        image: shaaron,
      },
      
    ],
  },
];

const overallCoordinators = [
  {
    name: "ARTHER BHION C",
    role: "Overall Coordinator",
    department: "Mechanical Engineering",
    instagram: "fortis_intrepidus",
    phone: "+91 95858 22800",
    image: artherbhion,
  },
  {
    name: "PALANISAMY K",
    role: "Overall Coordinator",
    department: "Mechanical Engineering",
    instagram: "tn_24_palani",
    phone: "+91 90251 88055",
    image: palani,
  },
  {
    name: "PAVADHARINI S M",
    role: "Overall Coordinator",
    department: "Mechanical Engineering",
    phone: "+91 85083 97657",
    image: pavadharani,
  },
  {
    name: "YESHWAN R",
    role: "Overall Coordinator",
    department: "Mechanical Engineering",
    phone: "+91 9361380844",
    image: yesh,
  },
  {
    name: "JEEVA P",
    role: "Overall Coordinator",
    department: "CIVIL Engineering",
    phone: "+91 93458 16342",
    image: jeeva,
  },
];

const Coordinators = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const eventSectionRows = [];
  for (let i = 0; i < eventSections.length; i += 2) {
    eventSectionRows.push(eventSections.slice(i, i + 2));
  }

  return (
    <section className="py-16 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Event Coordinators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated team of coordinators who are here to help you, contact them to clear your doubts
          </p>
        </div>

        {/* Overall Coordinators Section */}
        <div className="mb-16 p-6 bg-white/10 rounded-xl border border-white/20 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Overall Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {overallCoordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
                coordinator={coordinator}
                index={index}
                expandedCard={expandedCard}
                toggleCard={toggleCard}
              />
            ))}
          </div>
        </div>

        {/* Event rows */}
        {eventSectionRows.map((row, rowIndex) => (
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8" key={rowIndex}>
            {row.map((section, sectionIdx) => (
              <div key={sectionIdx} className="p-6 bg-white/10 rounded-xl border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                  {section.coordinators.map((coordinator, idx) => (
                    <CoordinatorCard
                      key={idx}
                      coordinator={coordinator}
                      index={4 + rowIndex * 4 + sectionIdx * 2 + idx}
                      expandedCard={expandedCard}
                      toggleCard={toggleCard}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Click on any card to view contact details
          </p>
          <Badge className="text-sm px-4 py-2 bg-primary hover:bg-primary/90">
            📧 General Inquiries: jetmechsjce@gmail.com
          </Badge>
        </div>
      </div>
    </section>
  );
};

const CoordinatorCard = ({
  coordinator,
  index,
  expandedCard,
  toggleCard,
}: {
  coordinator: any;
  index: number;
  expandedCard: number | null;
  toggleCard: (index: number) => void;
}) => {
  const handleInstagramClick = (e: React.MouseEvent, username: string) => {
    e.stopPropagation();
    window.open(`https://instagram.com/${username}`, '_blank');
  };

  return (
    <div className="flex justify-center" style={{ perspective: "1000px" }}>
      <Card
        className="bg-card-gradient shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          width: "240px",
          height: "360px",
          borderRadius: "16px",
          transformStyle: "preserve-3d",
          transform: expandedCard === index ? "rotateY(180deg)" : "rotateY(0)",
          transition: "transform 0.6s",
          cursor: "pointer",
        }}
        onClick={() => toggleCard(index)}
      >
        {/* Front of Card */}
        <div
          className={`absolute w-full h-full backface-hidden ${expandedCard === index ? 'hidden' : 'block'}`}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <CardContent className="p-0 h-full">
            <img
              src={coordinator.image || defaultAvatar}
              alt={coordinator.name}
              className="w-full h-full object-cover"
              style={{
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-bold text-lg">
                {coordinator.name}
              </h3>
              <Badge className="mt-1 bg-white text-black hover:bg-white/90">
                {coordinator.role}
              </Badge>
            </div>
          </CardContent>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute w-full h-full backface-hidden ${expandedCard === index ? 'block' : 'hidden'}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "16px",
            backgroundColor: "hsl(var(--card))",
          }}
        >
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {coordinator.name}
              </h3>
              <Badge className="mb-4" variant="secondary">
                {coordinator.role}
              </Badge>
              <p className="text-muted-foreground text-sm mb-4">
                {coordinator.department}
              </p>
            </div>

            <div className="space-y-3 text-sm">
              {coordinator.instagram && (
                <div 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleInstagramClick(e, coordinator.instagram)}
                >
                  <Instagram className="w-4 h-4" />
                  <span className="hover:underline cursor-pointer">
                    @{coordinator.instagram}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${coordinator.phone.replace(/\s/g, '')}`}
                  className="hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {coordinator.phone}
                </a>
              </div>
            </div>

            <button
              className="mt-4 text-sm text-primary hover:underline self-start"
              onClick={(e) => {
                e.stopPropagation();
                toggleCard(index);
              }}
            >
              Flip Back
            </button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Coordinators;