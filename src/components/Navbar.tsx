import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
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
              to="/about"
              className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                location.pathname === "/about" 
                ? "bg-white text-black" 
                : "text-white hover:bg-white hover:text-black"
              }`}
            >
              About
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

        <div className="hidden md:flex items-center gap-4">
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
            <Button className="bg-white text-black hover:bg-white/90">Book a Session</Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                  location.pathname === "/" 
                  ? "bg-white text-black" 
                  : "text-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors rounded-2xl px-4 py-2 ${
                  location.pathname === "/about" 
                  ? "bg-white text-black" 
                  : "text-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center gap-2 mt-2">
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
              <Link to="/booking" className="mt-2">
                <Button className="w-full bg-white text-black hover:bg-white/90">Book a Session</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
