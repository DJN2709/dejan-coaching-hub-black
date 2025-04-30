import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Handshake, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 animate-fade-in">
              <div className="flex-1 space-y-8">
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  Hi, I'm Dejan
                </h1>
                <div className="space-y-6 text-lg text-white/80">
                  <p>
                    "I've built and launched products across both B2C and B2B—some scaled beautifully, and others failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact."
                  </p>
                  <p>
                    My journey in product leadership has taught me that the most impactful products are built not just with technical excellence, but with deep empathy, understanding, and a relentless focus on solving real human problems.
                  </p>
                  <p>
                    I believe in leading with heart, fostering psychological safety, and creating environments where innovation thrives through open collaboration and fearless experimentation.
                  </p>
                </div>
              </div>
              <div className="lg:flex-1">
                <div className="relative w-full max-w-[480px] h-[400px] transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-full h-full p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 to-purple-600">
                    <img 
                      src="/lovable-uploads/dejan-profile-brick.jpg"
                      alt="Dejan Krstic - Product Leadership Coach" 
                      className="object-cover w-full h-full rounded-2xl bg-black"
                      style={{ display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/5 rounded-full">
                  <Heart className="h-8 w-8" style={{ color: '#9b87f5' }} />
                </div>
                <h3 className="text-xl font-bold text-white">Lead with Empathy</h3>
                <p className="text-white/80">Understanding user needs and team dynamics through genuine connection and care.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/5 rounded-full">
                  <Handshake className="h-8 w-8" style={{ color: '#9b87f5' }} />
                </div>
                <h3 className="text-xl font-bold text-white">Foster Collaboration</h3>
                <p className="text-white/80">Building bridges between teams and creating environments where everyone can thrive.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/5 rounded-full">
                  <Users className="h-8 w-8" style={{ color: '#9b87f5' }} />
                </div>
                <h3 className="text-xl font-bold text-white">Grow Together</h3>
                <p className="text-white/80">Mentoring and learning from others while fostering a culture of continuous improvement.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/5 rounded-full">
                  <MessageSquare className="h-8 w-8" style={{ color: '#9b87f5' }} />
                </div>
                <h3 className="text-xl font-bold text-white">Open Dialogue</h3>
                <p className="text-white/80">Creating space for honest conversations and meaningful feedback.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Ready to Transform Your Product Leadership?
            </h2>
            <Link to="/booking">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
