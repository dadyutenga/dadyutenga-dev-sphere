import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MY-BOOKS",
      description: "A comprehensive book management system built with Django, allowing users to catalog, search, and organize their personal libraries with advanced filtering and categorization features.",
      image: "📚",
      tech: ["Django", "Python", "PostgreSQL", "Docker", "Bootstrap"],
      github: "https://github.com/dadyutenga/my-books",
      demo: "#",
      stars: 45,
      forks: 12,
      status: "Active"
    },
    {
      id: 2,
      title: "Community Hub",
      description: "Open-source community platform for developers with discussion forums, resource sharing, and event management. Built with Django and modern web technologies.",
      image: "👥",
      tech: ["Django", "Python", "PostgreSQL", "Redis", "Celery"],
      github: "https://github.com/dadyutenga/community-hub",
      demo: "#",
      stars: 78,
      forks: 23,
      status: "Active"
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "Microservices API gateway built with Node.js and Express, featuring rate limiting, authentication, and service discovery for scalable backend architectures.",
      image: "🚀",
      tech: ["Node.js", "Express", "Docker", "Redis", "MongoDB"],
      github: "https://github.com/dadyutenga/api-gateway",
      demo: "#",
      stars: 34,
      forks: 8,
      status: "In Development"
    },
    {
      id: 4,
      title: "DevOps Automation Tools",
      description: "Collection of scripts and tools for automating deployment pipelines, server management, and monitoring across multiple cloud platforms.",
      image: "⚙️",
      tech: ["Python", "Bash", "Docker", "AWS", "Terraform"],
      github: "https://github.com/dadyutenga/devops-tools",
      demo: "#",
      stars: 56,
      forks: 19,
      status: "Active"
    },
    {
      id: 5,
      title: "E-Commerce Backend",
      description: "RESTful API backend for e-commerce applications with payment integration, inventory management, and real-time notifications.",
      image: "🛒",
      tech: ["Django", "DRF", "PostgreSQL", "Redis", "Stripe"],
      github: "https://github.com/dadyutenga/ecommerce-api",
      demo: "#",
      stars: 89,
      forks: 31,
      status: "Active"
    },
    {
      id: 6,
      title: "Linux System Monitor",
      description: "Real-time system monitoring dashboard for Linux servers with alerts, performance metrics, and automated reporting capabilities.",
      image: "🖥️",
      tech: ["Python", "Flask", "InfluxDB", "Grafana", "Docker"],
      github: "https://github.com/dadyutenga/linux-monitor",
      demo: "#",
      stars: 67,
      forks: 15,
      status: "Completed"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in backend development, open-source contributions, and system automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card h-full fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{project.image}</div>
                  <Badge 
                    variant={project.status === "Active" ? "default" : project.status === "In Development" ? "secondary" : "outline"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-1 border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary-hover"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">GitHub Activity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Repositories", value: "50+", icon: "📁" },
              { label: "Contributions", value: "1.2K+", icon: "💻" },
              { label: "Stars Earned", value: "615+", icon: "⭐" },
              { label: "Languages", value: "15+", icon: "🌍" }
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;