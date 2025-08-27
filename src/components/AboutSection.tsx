import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import photo1 from "./clgphotos/photo1.jpg";
import photo2 from "./clgphotos/photo2.jpg";
import photo3 from  "./clgphotos/photo3.jpg";
import photo4 from  "./clgphotos/photo4.jpg";
import photo5 from  "./clgphotos/photo5.jpg";
const stats = [
  { number: "500+", label: "Participants", icon: Users },
  { number: "5+", label: "Events", icon: Target },
  { number: "₹30k+", label: "Prize Money", icon: Award },
  { number: "INOVATE", label: "Ideas", icon: Lightbulb }
];

const objectives = [
  {
    icon: "🎯",
    title: "Foster Innovation",
    description: "Encourage creative thinking and innovative problem-solving among students"
  },
  {
    icon: "🤝",
    title: "Build Networks",
    description: "Connect students with industry professionals and like-minded peers"
  },
  {
    icon: "📚",
    title: "Knowledge Sharing",
    description: "Facilitate learning through workshops, talks, and hands-on experiences"
  },
  {
    icon: "🏆",
    title: "Recognize Talent",
    description: "Provide a platform to showcase skills and compete at the highest level"
  }
];

const AboutSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const collegePhotos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % collegePhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [collegePhotos.length]);

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About JETMECH CIVICON 2025
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advancing Engineering Frontiers.
            The Mechanical Symposium brings together students, professionals, and innovators to explore the latest in manufacturing, automation, robotics, thermal systems, and design. A hub for technical excellence, creative thinking, and industry interaction.
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* College Information */}
        <Card className="bg-card-gradient shadow-card animate-fade-in">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  About Our College
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Located in Semmancheri along Chennai's OMR, St. Joseph's College of Engineering (SJCE) offers 11 undergraduate and 7 postgraduate programs in engineering and technology, along with MBA and research degrees. The college is home to seven recognized research centers, supports over 174 doctoral scholars, and actively engages in funded projects and faculty-student publications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">NAAC A+ Accredited</Badge>
                  <Badge variant="secondary">NBA Approved</Badge>
                  <Badge variant="secondary">Industry Partnerships</Badge>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-lg">
                {/* Photo Slideshow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {collegePhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`College photo ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentPhoto ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {collegePhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhoto(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhoto ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-xl font-semibold text-white">
                    Excellence in Education
                  </h4>
                  <p className="text-white/80">
                    Since 1994
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;