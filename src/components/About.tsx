import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Code, Coffee, Mountain, Plane } from "lucide-react";

const About = () => {
  const interests = [
    { name: "Open Source", icon: <Code className="w-4 h-4" /> },
    { name: "Hiking", icon: <Mountain className="w-4 h-4" /> },
    { name: "Travel", icon: <Plane className="w-4 h-4" /> },
    { name: "Coffee", icon: <Coffee className="w-4 h-4" /> },
  ];

  const values = [
    {
      title: "Clean Code",
      description: "I believe in writing maintainable, readable code that tells a story.",
      icon: "✨"
    },
    {
      title: "Open Source",
      description: "Contributing to the community and learning from others drives my growth.",
      icon: "🌍"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying current.",
      icon: "📚"
    },
    {
      title: "Problem Solving",
      description: "Every challenge is an opportunity to create innovative solutions.",
      icon: "🧩"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Bio */}
          <Card className="mb-12 card-hover">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <img
                    src="/lovable-uploads/2b7ea229-016b-43ba-9ce5-d9b141edde4a.png"
                    alt="Dadyutenga in classroom"
                    className="w-32 h-32 object-cover rounded-lg border-2 border-primary/20"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">From Iringa, Now in Dar es Salaam</span>
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a passionate backend developer with a deep love for Django and Linux systems. 
                    My journey in tech started in Iringa and has taken me to Dar es Salaam, where I continue 
                    to build scalable solutions and contribute to the open-source community.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    When I'm not coding, you'll find me exploring the latest advancements in cloud technologies, 
                    hiking through Tanzania's beautiful landscapes, or contributing to projects that make a difference 
                    in the developer community.
                  </p>

                  <div className="flex items-center gap-2 text-primary">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">Passionate about building solutions that matter</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="card-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interests */}
          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Beyond Code</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {interests.map((interest) => (
                  <Badge
                    key={interest.name}
                    variant="outline"
                    className="px-4 py-2 text-lg border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {interest.icon}
                    <span className="ml-2">{interest.name}</span>
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground italic">
                  "The best way to predict the future is to create it." - Peter Drucker
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { fact: "Lines of Code", value: "100K+", icon: "💻" },
              { fact: "Cups of Coffee", value: "∞", icon: "☕" },
              { fact: "Years Coding", value: "5+", icon: "🚀" }
            ].map((item) => (
              <div key={item.fact} className="text-center bg-card border border-border rounded-lg p-6 card-hover">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                <div className="text-muted-foreground">{item.fact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;