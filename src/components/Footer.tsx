import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Heart, Coffee, Code, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/dadyutenga",
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "LinkedIn", 
      href: "https://linkedin.com/in/dadyutenga",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Twitter",
      href: "https://twitter.com/dadyutenga", 
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "Bento",
      href: "https://bento.me/dadyutenga",
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const learningTopics = [
    "Advanced TypeScript patterns",
    "AWS cloud architecture", 
    "Machine Learning fundamentals",
    "DevOps practices & CI/CD",
    "Microservices with Kubernetes",
    "GraphQL advanced concepts"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Dadyutenga</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Backend Developer passionate about Django, Linux, and building scalable solutions. 
                Always learning, always coding, always caffeinated.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-primary" />
                <span>Coffee Powered</span>
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Currently Exploring</h3>
            <div className="space-y-3">
              {learningTopics.map((topic, index) => (
                <div key={topic} className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-secondary-foreground/80">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/10 border border-border/20 hover:bg-card/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-green-500/30 text-green-400">
                🟢 Available for work
              </Badge>
              <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                🔵 Open to collaborate
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
              <span>&copy; {currentYear} Dadyutenga Nasser.</span>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>

            <div className="flex items-center gap-6 text-sm text-secondary-foreground/60">
              <span>Made with React + TypeScript</span>
              <span>•</span>
              <span>Hosted on PrivateVPS</span>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="text-center mt-8 pt-6 border-t border-border/50">
            <p className="text-secondary-foreground/60 italic">
              "The best way to predict the future is to create it." - Peter Drucker
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;