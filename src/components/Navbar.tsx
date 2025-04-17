
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            DK
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/achievements"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/achievements" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Achievements
            </Link>
            <Link
              to="/frameworks"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/frameworks" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Frameworks
            </Link>
            <Link
              to="/booking"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/booking" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Coaching
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/dejan-krstic-b4a7a98a/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <Link to="/booking">
            <Button>Book a Session</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
