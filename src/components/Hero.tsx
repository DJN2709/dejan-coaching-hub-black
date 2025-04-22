
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-8 md:py-12 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4 md:space-y-6">
            <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white">
              Product Leadership <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Coaching</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/80 max-w-prose">
                Accelerate your product development with battle-tested frameworks, real-world insights, and personal coaching from someone who's been in the trenches.
              </p>
              <p className="text-base md:text-lg font-semibold text-white max-w-prose">
                Let's turn your product vision into reality—together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent rounded-xl" />
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-xl opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl" />
              <div className="absolute -left-8 -right-8 top-1/2 h-32 bg-gradient-to-r from-purple-500/10 via-blue-500/20 to-purple-500/10 blur-2xl transform -skew-y-3" />
              <div className="absolute inset-0 bg-black/5 mix-blend-overlay rounded-xl" />
              <img 
                src="/public/lovable-uploads/45fb9b3b-e6bf-41fd-be81-2fbb51b94e1f.png" 
                alt="Product Leader"
                className="rounded-xl shadow-2xl w-full object-contain aspect-[4/3] relative z-10"
              />
              <div className="absolute -bottom-4 -left-4 -right-4 h-8 bg-black/80 blur-xl rounded-full transform rotate-1" />
              <div className="absolute -bottom-2 -left-8 -right-8 h-1 bg-purple-500/30 blur-sm" />
              <div className="absolute -bottom-3 -left-8 -right-8 h-1 bg-blue-500/20 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
