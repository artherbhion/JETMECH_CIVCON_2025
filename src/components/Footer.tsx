import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">JETMECH CIVICON 2025</h3>
            <p className="text-sm opacity-80 mb-4 leading-relaxed">
              Join us for the most exciting technical symposium featuring innovation, 
              technology, and brilliant minds coming together.
            </p>
            <div className="flex gap-2">
            <Button
  variant="default"
  style={{
    background: "black ",
    color: 'white',
    fontWeight: 500,
    border: '1px solid rgba(96, 165, 250, 0.5)',
    borderRadius: '6px',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 200ms ease',
    // Add these to disable all animations and filters
    animation: 'none',
    filter: 'none',
    transform: 'none',
    boxShadow: 'none',
    // Force disable any parent animations
    animationDuration: '0s',
    animationDelay: '0s',
    animationIterationCount: '1',
    // Important overrides
    willChange: 'auto',
    backfaceVisibility: 'visible'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgb(42 58 93)';
    // Ensure no filters are applied on hover
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'none';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'black';
    // Double ensure no filters remain
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'none';
  }}
  onClick={(e) => {
    e.stopPropagation();
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScPrQQGH_-n-jrPK97Zzr7e9Zdu8jGZjLFt9HU6cDKuQZetbQ/viewform?usp=header", "_blank");
  }}
>
  Register
</Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                Events
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#events" className="opacity-80 hover:opacity-100 transition-opacity">Events</a></li>
              <li><a href="#timeline" className="opacity-80 hover:opacity-100 transition-opacity">Timeline</a></li>
              <li><a href="#coordinators" className="opacity-80 hover:opacity-100 transition-opacity">Coordinators</a></li>
              <li><a href="#registration" className="opacity-80 hover:opacity-100 transition-opacity">Registration</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          {/* Events */}
          <div>
  <h4 className="font-semibold mb-4">Popular Events</h4>
  <ul className="space-y-2 text-sm">
    <li className="opacity-80">codestrom</li>
    <li className="opacity-80">DesignXtream</li>
    <li className="opacity-80">LatheWiz</li>
    <li className="opacity-80">Bridge It</li>
    <li className="opacity-80">Tech-conx</li>
  </ul>
</div>

          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 opacity-80" />
                <div className="opacity-80">
                  <div>ST. JOSEPH'S COLLEGE OF ENGINEERING</div>
                  <div>Chennai, Tamil Nadu</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-80" />
                <div className="flex flex-col">
                  <a href="tel: +91 9585822800" className="opacity-80 hover:opacity-100 transition-opacity">+91 95858 22800</a>
                  <a href="tel: +91 90251 88055" className="opacity-80 hover:opacity-100 transition-opacity">+91 87654 32109</a>
                  <a href="tel: +91 93613 80844 " className="opacity-80 hover:opacity-100 transition-opacity">+91 76543 21098</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:jetmechsjce@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  jetmechsjce@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-80">
            © {currentYear} JETMECH CIVCON. All rights reserved. | Organized by ST. JOSEPH'S COLLEGE OF ENGINEERING
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-background hover:bg-background/10"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              College Website
            </Button>
          </div>
        </div>
        
        {/* Credits */}
        <div className="text-center mt-8 pt-4 border-t border-background/20">
          <p className="text-xs opacity-60">
            Built with ❤️ by the JETMECH CIVICONOrganizing Committee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
