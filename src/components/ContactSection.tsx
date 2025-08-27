import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "St. Joseph's College of Engineering",
      "OMR, Chennai, Tamil Nadu",
      "India - 600119"
    ],
    color: "text-primary"
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 95858 22800", "+91 87654 32109", "+91 76543 21098"],
    color: "text-accent"
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["jetmechsjce@gmail.com"],
    color: "text-secondary"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    color: "text-muted-foreground"
  }
];

const socialLinks = [
  { name: "Website", icon: "🌐", link: "#" },
  { name: "Instagram", icon: "📷", link: "#" },
  { name: "LinkedIn", icon: "💼", link: "#" },
  { name: "Twitter", icon: "🐦", link: "#" },
  { name: "YouTube", icon: "📺", link: "#" },
  { name: "WhatsApp", icon: "💬", link: "#" }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card-gradient shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <info.icon className={`w-6 h-6 mt-1 ${info.color}`} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map and Quick Actions */}
          <div className="space-y-6">
            {/* Google Map Embed */}
            <Card className="bg-card-gradient shadow-card animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Find Us On Campus
                </h3>
                <div className="rounded-lg overflow-hidden h-64 mb-4">
                  <iframe
                    title="St. Joseph's College of Engineering Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6328602973456!2d80.216166!3d12.8697923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbeb0b2eeb7%3A0x2cb8fc0ae9b16ed5!2sSt%20Joseph's%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1691055705146!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <a
                    href="https://www.google.com/maps/place/St+Joseph's+College+Of+Engineering/@12.8697923,80.216166,16.49z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            {/* <Card className="bg-card-gradient shadow-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex flex-col items-center p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-2xl mb-1">{social.icon}</span>
                      <span className="text-xs text-center">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Quick Contact */}
            <Card className="bg-hero-gradient text-white shadow-glow animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="opacity-90 mb-6">
                  Our team is available to assist you with registration, events, and any other queries.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-primary flex-1"
                    asChild
                  >
                    <a href="tel:9585822800">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-primary flex-1"
                    asChild
                  >
                    <a href="mailto:jetmechsjce@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <Card className="bg-card-gradient shadow-card animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out our comprehensive FAQ section for quick answers to common questions.
              </p>
              <Button variant="default">View FAQ</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
