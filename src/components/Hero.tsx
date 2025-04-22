import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-8 md:py-12 lg:py-32 relative overflow-hidden">
      {/* Conference stage background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/photo-1605810230434-7631ac76ec81.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container px-4 md:px-6 relative z-10">
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
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-xl opacity-50" />
              <img 
                src="/lovable-uploads/01819dc8-a738-4e82-b8b8-28b1d5fa8c6f.png" 
                alt="Product Leader Speaking"
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))',
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) translateZ(0)',
                }}
              />
              <div 
                className="absolute -bottom-4 -left-4 -right-4 h-8 bg-white/10 blur-xl rounded-full transform rotate-1"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
