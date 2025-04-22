
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Briefcase, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Product Experience",
      description: "Over a decade of experience building and scaling products in music tech, from consumer apps to enterprise solutions."
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Team Leadership",
      description: "Led cross-functional teams across EMEA, fostering a culture of innovation, trust, and continuous learning."
    },
    {
      icon: <BookOpen className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Industry Knowledge",
      description: "Deep expertise in music streaming, creator economy, and rights management technologies."
    },
    {
      icon: <Award className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Thought Leadership",
      description: "Regular speaker at product conferences and mentor at Product School, sharing insights with the next generation of product leaders."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  About Me
                </h1>
                <div className="relative">
                  <span className="absolute -left-8 top-0 text-4xl text-purple-500">"</span>
                  <p className="text-xl text-white/80 pl-4">
                    I've built and launched products across both B2C and B2B—some scaled beautifully, and others failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact.
                  </p>
                  <span className="absolute -bottom-4 right-0 text-4xl text-purple-500">"</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/public/lovable-uploads/7de7680b-310e-4003-8132-ca5e1671b114.png"
                  alt="Dejan Krstic"
                  className="rounded-lg shadow-xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Highlights */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Professional Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 rounded-lg bg-black border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="mb-4 p-4 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {highlight.title}
                  </h3>
                  <p className="text-white/80">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                Let's Work Together
              </h2>
              <p className="text-sm md:text-lg text-white/80 mb-6 md:mb-8 max-w-[800px] mx-auto">
                Ready to take your product leadership to the next level? Whether you're looking for coaching, consulting, or just want to connect, I'm here to help.
              </p>
              <Link to="/booking">
                <Button variant="outline" size="lg" className="gap-2 group text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
