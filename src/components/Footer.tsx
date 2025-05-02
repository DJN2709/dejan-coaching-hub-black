import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-white/10 py-6 md:py-10 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">
              © {currentYear} Dejan Krstic. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Home
            </Link>
            <Link to="/achievements" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Achievements
            </Link>
            <Link to="/frameworks" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Frameworks
            </Link>
            <Link to="/booking" className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Coaching
            </Link>
            <a 
              href="mailto:dejan.krstic@web.de" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
