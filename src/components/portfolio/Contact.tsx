import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { 
    icon: <Github className="h-6 w-6" />, 
    label: "GitHub", 
    href: "https://github.com/votre-username" 
  },
  { 
    icon: <Linkedin className="h-6 w-6" />, 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/votre-profile" 
  },
  { 
    icon: <Mail className="h-6 w-6" />, 
    label: "Email", 
    href: "mailto:votre-email@example.com" 
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
            Prenons <span className="text-primary">Contact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="hidden sm:inline">{social.label}</span>
              </a>
            </Button>
          ))}
        </div>

        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Portfolio. Conçu avec passion et développé avec React.</p>
        </div>
      </div>
    </section>
  );
}