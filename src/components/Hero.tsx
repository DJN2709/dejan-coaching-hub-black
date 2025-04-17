import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-black">
      <div className="container flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Product Leadership <span className="text-white">Coaching</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-white/80 max-w-prose">
              Accelerate your product development with battle-tested frameworks, real-world insights, and personal coaching from someone who's been in the trenches.
            </p>
            <p className="text-lg font-semibold text-white max-w-prose">
              Let's turn your product vision into reality—together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking">
              <Button 
                size="lg" 
                className="bg-white text-black transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              >
                Book a Coaching Session
              </Button>
            </Link>
            <Link to="/frameworks">
              <Button 
                variant="outline" 
                size="lg"
                className="transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                Explore Frameworks
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col mt-2">
          <div className="relative w-[480px] h-[250px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
              <img 
                src="/lovable-uploads/776095df-6ce7-4ebb-8318-ade789fad45e.png" 
                alt="Dejan Krstic - Product Leadership Coach" 
                className="object-cover w-full h-full brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          <p className="text-sm italic text-white/70 mt-4 w-[480px]">
            "I've built and launched products across both B2C and B2B—some scaled beautifully, and others failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
