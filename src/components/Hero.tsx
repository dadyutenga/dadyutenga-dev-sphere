import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, ExternalLink, MapPin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 fade-in-up">
            <div className="relative mx-auto w-40 h-40 mb-6">
              <img
                src="/lovable-uploads/2b7ea229-016b-43ba-9ce5-d9b141edde4a.png"
                alt="Dadyutenga Nasser"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="fade-in-up stagger-1">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Iringa → Dar es Salaam, Tanzania
              </Badge>
            </div>

            <h1 className="fade-in-up stagger-2 text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Dadyutenga</span>
              <br />
              <span className="text-foreground">Nasser</span>
            </h1>

            <div className="fade-in-up stagger-3 space-y-4">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50">
                  Backend Developer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50">
                  Django Lover
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50">
                  Linux Fanatic
                </Badge>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Passionate backend developer with expertise in Django, Linux, and cloud technologies. 
                Building scalable solutions and contributing to open-source projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="btn-hero">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/dadyutenga', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="fade-in-up stagger-4 flex justify-center gap-6 mt-8">
              <a 
                href="https://github.com/dadyutenga" 
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;