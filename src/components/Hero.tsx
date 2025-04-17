
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-8 md:py-12 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white">
              Product Leadership <span className="text-white">Coaching</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/80 max-w-prose">
                Accelerate your product development with battle-tested frameworks, real-world insights, and personal coaching from someone who's been in the trenches.
              </p>
              <p className="text-base md:text-lg font-semibold text-white max-w-prose">
                Let's turn your product vision into reality—together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/booking">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  Book a Coaching Session
                </Button>
              </Link>
              <Link to="/frameworks">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  Explore Frameworks
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <div className="relative w-full max-w-[480px] h-[250px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                <img 
                  src="/lovable-uploads/776095df-6ce7-4ebb-8318-ade789fad45e.png" 
                  alt="Dejan Krstic - Product Leadership Coach" 
                  className="object-cover w-full h-full brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            <p className="text-sm italic text-white/70 mt-4 max-w-[480px] text-center md:text-left px-4 md:px-0">
              "I've built and launched products across both B2C and B2B—some scaled beautifully, and others failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
