
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
          <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/0d1cda13-e96b-432b-a5ff-c0182a0acde2.png" 
              alt="Dejan Krstic" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
