import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { 
  Navbar,
  Hero,
  Experience,
  Projects,
  Certifications,
  Contact
} from "@/components/portfolio";

export default function Portfolio() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar 
        isDark={isDark}
        activeSection={activeSection}
        onToggleTheme={toggleTheme}
        onScrollToSection={scrollToSection}
      />
      
      <Hero onScrollToSection={scrollToSection} />
      
      <Experience />
      
      <Projects />
      
      <Certifications />
      
      <Contact />
    </div>
  );
}
