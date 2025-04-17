
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-white/10 py-6 md:py-10 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">
              © {currentYear} Dejan Krstic. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="text-sm font-medium text-white/70 hover:text-white">
              Home
            </Link>
            <Link to="/achievements" className="text-sm font-medium text-white/70 hover:text-white">
              Achievements
            </Link>
            <Link to="/frameworks" className="text-sm font-medium text-white/70 hover:text-white">
              Frameworks
            </Link>
            <Link to="/booking" className="text-sm font-medium text-white/70 hover:text-white">
              Coaching
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
