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
      tech: ["Storage", ],
      github: "https://github.com/dadyutenga/my-books",
      demo: "#",
      stars: 1,
      forks: 1,
      status: "Active"
    },
    {
      id: 2,
      title: "Hotel Management System",
      description: "A comprehensive hotel management prototype system built with CodeIgniter 4, featuring room booking, guest management, and administrative controls for efficient hotel operations.",
      image: "🏨",
      tech: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/dadyutenga/Hotel-management-simple-prototype-system-for-Friend-3rd-Year-Project",
      demo: "#",
      stars: 1,
      forks: 2,
      status: "Active"
    },
      {
      id: 3,
      title: "Ramadan App",
      description: "A comprehensive Ramadan companion app featuring prayer times, Quran reading, Islamic calendar, and spiritual tracking tools to enhance the holy month experience.",
      image: "🌙",
      tech: ["React Native", "JavaScript", "Firebase", "API Integration", "Mobile"],
      github: "https://github.com/dadyutenga/ramadan-app",
      demo: "#",
      stars: 3,
      forks: 8,
      status: "Active"
    },
      {
      id: 4,
      title: "Skill UI",
      description: "A modern UI component library and design system built with React and TypeScript, featuring reusable components, customizable themes, and comprehensive documentation for developers.",
      image: "🎨",
      tech: ["React", "TypeScript", "CSS", "Storybook", "Design System"],
      github: "https://github.com/dadyutenga/skill_ui",
      demo: "#",
      stars: 12,
      forks: 4,
      status: "Active"
    },
       {
      id: 5,
      title: "Skills Backend",
      description: "A robust backend API for skills management and assessment platform, featuring user authentication, skill tracking, progress monitoring, and comprehensive reporting capabilities.",
      image: "🎯",
      tech: ["Django", "DRF", "PostgreSQL", "JWT", "API"],
      github: "https://github.com/dadyutenga/Skills_backend",
      demo: "#",
      stars: 8,
      forks: 3,
      status: "Active"
    },
      {
      id: 6,
      title: "Ditronics Landing Page",
      description: "A modern and responsive landing page for Ditronics company, featuring sleek design, smooth animations, and optimized user experience to showcase digital services and solutions.",
      image: "🌐",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      github: "https://github.com/Ditronics-Tz/ditronics-landing-page",
      demo: "#",
      stars: 5,
      forks: 2,
      status: "Active"
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