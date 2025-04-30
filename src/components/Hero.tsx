import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-8 md:py-12 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex-1 space-y-4 md:space-y-6 text-center animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white">
                Product Leadership <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Coaching</span>
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/80 max-w-prose">
                Accelerate your product development with battle-tested frameworks, real-world insights, and personal coaching from someone who's been in the trenches.
              </p>
              <p className="text-base md:text-lg font-semibold text-white max-w-prose">
                Let's turn your product vision into reality—together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                >
                  Book a Coaching Session
                </Button>
              </Link>
              <Link to="/frameworks">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                >
                  Explore Frameworks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
