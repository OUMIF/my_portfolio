import { Button } from "@/components/ui/button";
import { ExternalLink, User } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Avatar */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center overflow-hidden shadow-2xl animate-glow">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-105">
                  <User className="w-24 h-24 lg:w-32 lg:h-32" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-serif">
                I'm a{" "}
                <span className="gradient-text text-glow">
                  Software Engineer
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Je conçois et développe des applications élégantes, robustes et performantes. 
                Passionné par les technologies modernes et l'innovation, je transforme 
                les idées complexes en solutions simples et efficaces.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-white shadow-lg"
                onClick={() => onScrollToSection('projects')}
              >
                Voir mes projets
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => onScrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}