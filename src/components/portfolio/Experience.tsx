import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    description: "Développement d'applications web modernes avec React, Node.js et PostgreSQL. Gestion d'équipe et architecture logicielle.",
    icon: <Code className="h-6 w-6" />,
    period: "2022 - Présent"
  },
  {
    title: "Software Engineer",
    description: "Création d'APIs REST et microservices scalables. Intégration de systèmes complexes et optimisation des performances.",
    icon: <Server className="h-6 w-6" />,
    period: "2020 - 2022"
  },
  {
    title: "Frontend Developer",
    description: "Développement d'interfaces utilisateur interactives et responsives. Maîtrise de React, TypeScript et design systems.",
    icon: <Globe className="h-6 w-6" />,
    period: "2018 - 2020"
  },
  {
    title: "Junior Developer",
    description: "Apprentissage des bonnes pratiques de développement. Participation à des projets en équipe et formation continue.",
    icon: <Database className="h-6 w-6" />,
    period: "2017 - 2018"
  }
];

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mon parcours professionnel et les compétences acquises au fil des années
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group card-hover bg-card border-2 hover:border-primary/50 relative overflow-hidden glow-primary hover:glow-primary-strong"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {exp.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}