
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-black">
            DK
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-black ${
                location.pathname === "/" ? "text-black" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/achievements"
              className={`text-sm font-medium transition-colors hover:text-black ${
                location.pathname === "/achievements" ? "text-black" : "text-gray-600"
              }`}
            >
              Achievements
            </Link>
            <Link
              to="/frameworks"
              className={`text-sm font-medium transition-colors hover:text-black ${
                location.pathname === "/frameworks" ? "text-black" : "text-gray-600"
              }`}
            >
              Frameworks
            </Link>
            <Link
              to="/booking"
              className={`text-sm font-medium transition-colors hover:text-black ${
                location.pathname === "/booking" ? "text-black" : "text-gray-600"
              }`}
            >
              Coaching
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/dejan-krstic-b4a7a98a/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-black hover:bg-gray-100">
                <Linkedin className="h-5 w-5 text-black" />
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter" className="text-black hover:bg-gray-100">
                <Twitter className="h-5 w-5 text-black" />
              </Button>
            </a>
          </div>
          <Link to="/booking">
            <Button className="bg-black text-white hover:bg-gray-800">Book a Session</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
