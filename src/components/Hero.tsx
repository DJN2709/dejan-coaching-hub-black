
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Product Leadership <span className="text-primary">Coaching</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-prose">
            Accelerate your product development with battle-tested frameworks and personalized coaching from someone who's been there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking">
              <Button size="lg">Book a Coaching Session</Button>
            </Link>
            <Link to="/frameworks">
              <Button variant="outline" size="lg">Explore Frameworks</Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full h-[400px] bg-blue-50 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 to-transparent mix-blend-overlay"></div>
            <img 
              src="/lovable-uploads/776095df-6ce7-4ebb-8318-ade789fad45e.png" 
              alt="Dejan Krstic - Product Leadership Coach" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
