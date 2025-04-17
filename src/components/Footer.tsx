
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t py-6 md:py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dejan Krstic. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/achievements" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Achievements
          </Link>
          <Link to="/frameworks" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Frameworks
          </Link>
          <Link to="/booking" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Coaching
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
