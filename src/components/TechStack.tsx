import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = [
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "Django", icon: "🎯", category: "Framework" },
    { name: "Node.js", icon: "💚", category: "Runtime" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "GraphQL", icon: "📊", category: "API" },
    { name: "Linux", icon: "🐧", category: "OS" },
    { name: "Spring Boot", icon: "🍃", category: "Framework" },
    { name: "CodeIgniter", icon: "🔥", category: "Framework" },
    { name: "Laravel", icon: "⚡", category: "Framework" },
    { name: "REST APIs", icon: "🔄", category: "API" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Git", icon: "🌿", category: "Tool" },
    { name: "Kubernetes", icon: "⚙️", category: "DevOps" },
  ];

  const categories = ["Language", "Framework", "Runtime", "Frontend", "DevOps", "API", "OS", "Cloud", "Database", "Tool"];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, efficient solutions
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-item group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-sm mb-2">{tech.name}</h3>
              <Badge variant="outline" className="text-xs px-2 py-1">
                {tech.category}
              </Badge>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript",
              "Kubernetes",
              "Machine Learning",
              "DevOps",
              "Microservices",
              "GraphQL Advanced"
            ].map((item) => (
              <Badge
                key={item}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                📚 {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;