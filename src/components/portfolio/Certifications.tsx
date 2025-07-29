import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Code, Globe } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Developer",
    description: "Amazon Web Services",
    year: "2023",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "React Professional",
    description: "Meta Certification",
    year: "2022",
    icon: <Code className="h-6 w-6" />
  },
  {
    title: "Full Stack Web Development",
    description: "FreeCodeCamp",
    year: "2021",
    icon: <Globe className="h-6 w-6" />
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
            <span className="text-primary">Certifications</span> & Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mes certifications et compétences techniques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center group card-hover animate-fade-in">
              <CardHeader>
                <div className="mx-auto p-4 rounded-full bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300 glow-primary">
                  {cert.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription>
                  {cert.description} • {cert.year}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}