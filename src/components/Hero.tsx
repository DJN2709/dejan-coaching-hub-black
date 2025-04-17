
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuoteIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Product Leadership <span className="text-primary">Coaching</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground max-w-prose">
              Accelerate your product development with battle-tested frameworks, real-world insights, and personal coaching from someone who's been in the trenches.
            </p>
            <p className="text-lg text-muted-foreground max-w-prose">
              I've built and launched products across both B2C and B2B—some that scaled beautifully, and others that failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact. From navigating the chaos of early-stage startups to steering strategic growth at scale, I bring lessons learned the hard way—so you don't have to.
            </p>
            <p className="text-lg text-muted-foreground max-w-prose">
              Whether you need a second brain for shaping your strategy, guidance through execution, or a sounding board for the messy in-between, I'm here to help you move faster, smarter, and with more confidence.
            </p>
            <p className="text-lg font-semibold text-primary max-w-prose">
              Let's turn your product vision into reality—together.
            </p>
          </div>
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
            
            {/* Quote overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-xs">
                <div className="flex">
                  <QuoteIcon className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <p className="text-sm italic text-gray-700">
                    I've built and launched products across both B2C and B2B—some that scaled beautifully, and others that failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
