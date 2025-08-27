import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Calendar, Trophy, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    icon: "🎁",
    title: "Epic expriences",
    description: "exprience ecip battles race to the top"
  },
  {
    icon: "📜",
    title: "Digital Certificates",
    description: "participation certificates"
  },
  {
    icon: "🍕",
    title: "Food & Fuel",
    description: "Food Tea & premium snacks"
  },
  {
    icon: "🏆",
    title: "Massive Prizes",
    description: "₹30,000+ in cash prizes"
  },
  {
    icon: "🤝",
    title: "Network Effect",
    description: "Connect with industry rebels & innovators"
  },
  {
    icon: "🚀",
    title: "Skill Boost",
    description: "Level up with participating in events"
  }
];

const JoinSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-4 animate-bounce-in">
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              JOIN THE MOVEMENT
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            One day to change everything. Are you ready to disrupt the status quo? 🔥
          </p>
          
          {/* Status indicators */}
          <div className="flex justify-center gap-6 mb-8 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-full border border-green-400/30">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold">August</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full border border-yellow-400/30">
              <Users className="w-4 h-4" />
              <span className="font-semibold">500 Rebels Max</span>
            </div>
            <div className="flex items-center gap-2 bg-red-400/20 text-red-400 px-4 py-2 rounded-full border border-red-400/30 animate-pulse">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">Filling Fast!</span>
            </div>
          </div>
        </div>
        
        {/* Main registration card */}
        <Card className="max-w-4xl mx-auto bg-card-gradient shadow-glow border border-primary/20 mb-16 animate-scale-in" style={{ animationDelay: '0.7s' }}>
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-black text-foreground mb-4">
                Ready to <span className="text-accent">HACK</span> the future?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join 500+ innovators, rebels, and tech enthusiasts for the most epic one-day tech event. 
                No registration fees. Just pure tech adrenaline.
              </p>
              
              <Badge className="text-lg px-6 py-2 bg-accent/20 text-accent border-accent/30 mb-6 animate-pulse">
                🔥 100% FREE EVENT 🔥
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* <Button variant="neon" size="xl" className="group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                SECURE YOUR SPOT
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Target className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                VIEW SCHEDULE
              </Button> */}
            </div>
            
            <p className="text-sm text-muted-foreground">
              No spam, no BS. Just one epic confirmation email. 📧
            </p>
          </CardContent>
        </Card>
        
        {/* Benefits grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-center text-foreground mb-12 animate-fade-in">
            What You'll <span className="text-primary">Experience</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 border border-primary/10 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <Card className="bg-hero-gradient text-white shadow-glow animate-scale-in border-0" style={{ animationDelay: '1s' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-black mb-4">
              Don't Just Watch. <span className="text-accent">PARTICIPATE.</span>
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              This isn't your typical boring tech event. It's a revolution. 
              And revolutions don't wait for anyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary group"
              >
                <Trophy className="w-5 h-5 mr-2 group-hover:animate-spin" />
                JOIN THE REVOLUTION
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white hover:bg-white/10 group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                SHARE WITH SQUAD
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JoinSection;