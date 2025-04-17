
import { Link } from "react-router-dom";
import { ArrowRight, Award, Code, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Index = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Achievements",
      description: "Explore my professional journey, accomplishments, and the impact I've made across various organizations.",
      link: "/achievements"
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frameworks",
      description: "Discover the product management frameworks I've developed and implemented to drive success.",
      link: "/frameworks"
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Coaching",
      description: "Book personalized coaching sessions to accelerate your product leadership growth.",
      link: "/booking"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                How I Can Help You
              </h2>
              <div className="max-w-[800px] mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  I help product teams move faster, think clearer, and build smarter—by combining deep domain expertise with battle-tested product frameworks and a people-first approach. With over 12 years of product leadership experience in the music-tech space, I've worked across B2C and B2B, helping launch, scale, and sometimes gloriously fail products. Every step brought its own lesson, and I use that knowledge today to empower others to do better work.
                </p>
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-md text-muted-foreground mb-6">
                  I focus on building high-performing product teams with a culture of ownership, trust, and experimentation. My approach involves coaching teams to make outcome-driven decisions using OKRs, value stream mapping, and discovery best practices. I specialize in designing product strategies that align user needs with business goals, and I craft operationally efficient solutions for highly complex financial and rights-based ecosystems.
                </p>
                <h3 className="text-xl font-semibold mb-4">How I Lead</h3>
                <p className="text-md text-muted-foreground mb-8">
                  Leadership is a team sport. I aim to cultivate psychological safety, curiosity, and joy within every team I work with. I've helped establish forums for collaborative planning, celebrated failure to normalize learning, and actively mentored team members in product craft.
                </p>
                <p className="text-md text-muted-foreground mb-8">
                  I also speak at product events and mentor aspiring PMs through programs like Product School and Growth School.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{feature.description}</p>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="gap-1 group">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What Others Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                I've had the privilege of helping product leaders and organizations achieve remarkable results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="italic mb-4">
                  "Dejan's frameworks transformed how we approach product development. His coaching helped me become a more effective leader."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Product Director, Tech Company</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="italic mb-4">
                  "The insights gained from our coaching sessions were invaluable. Dejan has a unique ability to simplify complex product challenges."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CPO, Startup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Framework Image Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/d29cc8d1-0287-4333-bcb7-1432b511b110.png" 
                  alt="The Problem Framework" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/08349353-a37e-4e7c-9ed8-834593743e69.png" 
                  alt="Development Process Flow" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Elevate Your Product Leadership?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-[800px] mx-auto">
                Book a coaching session with me to discuss your specific challenges and goals. Let's work together to take your product leadership skills to the next level.
              </p>
              <Link to="/booking">
                <Button size="lg">Book a Session Now</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
