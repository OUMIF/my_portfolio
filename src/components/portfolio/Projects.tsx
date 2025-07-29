import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec paiement intégré, gestion des stocks et tableau de bord administrateur. Construit avec React, Node.js et PostgreSQL.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    github: "#",
    demo: "#",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel, notifications et analytics. Interface moderne et intuitive.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    github: "#",
    demo: "#",
    tags: ["TypeScript", "React", "Socket.io", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets les plus significatifs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-hover overflow-hidden animate-fade-in">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 bg-primary hover:bg-primary/90" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}