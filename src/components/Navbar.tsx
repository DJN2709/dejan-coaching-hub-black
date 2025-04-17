import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-white">
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                location.pathname === "/" 
                ? "bg-white text-black" 
                : "text-white hover:bg-white hover:text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/achievements"
              className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                location.pathname === "/achievements" 
                ? "bg-white text-black" 
                : "text-white hover:bg-white hover:text-black"
              }`}
            >
              Achievements
            </Link>
            <Link
              to="/frameworks"
              className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                location.pathname === "/frameworks" 
                ? "bg-white text-black" 
                : "text-white hover:bg-white hover:text-black"
              }`}
            >
              Frameworks
            </Link>
            <Link
              to="/booking"
              className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                location.pathname === "/booking" 
                ? "bg-white text-black" 
                : "text-white hover:bg-white hover:text-black"
              }`}
            >
              Coaching
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/dejan-krstic-b4a7a98a/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5 text-white" />
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter" className="text-white hover:bg-white/10">
                <Twitter className="h-5 w-5 text-white" />
              </Button>
            </a>
          </div>
          <Link to="/booking">
            <Button className="bg-black text-white hover:bg-black/90">Book a Session</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
