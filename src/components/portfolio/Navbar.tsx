import { Button } from "@/components/ui/button";
import { 
  Moon, 
  Sun, 
  User,
  FolderOpen,
  Award,
  MessageCircle
} from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  activeSection: string;
  onToggleTheme: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ isDark, activeSection, onToggleTheme, onScrollToSection }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: <User className="h-4 w-4" /> },
    { id: 'projects', label: 'My Projects', icon: <FolderOpen className="h-4 w-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageCircle className="h-4 w-4" /> }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-xl font-semibold">
            <span className="text-primary">Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:text-primary ${
                  activeSection === item.id ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onToggleTheme}
            className="flex items-center gap-2"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden sm:inline">
              {isDark ? 'Light' : 'Dark'}
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}