
import { Trophy, Award, Medal, BookOpen, Briefcase, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Achievements = () => {
  const achievements = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "15+ Years Experience",
      description: "Over 15 years of professional experience in product leadership across various industries."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "100+ Teams Coached",
      description: "Successfully coached over 100 product teams to achieve their strategic objectives."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "20+ Product Launches",
      description: "Led successful launches of over 20 products that impacted millions of users."
    }
  ];
  
  const careerHighlights = [
    {
      year: "2018-Present",
      role: "Product Leadership Coach",
      company: "Independent",
      description: "Providing coaching and consulting to product leaders and organizations to help them build better products and teams.",
      achievements: [
        "Developed custom frameworks for product leadership",
        "Coached 100+ product leaders from startups to enterprise companies",
        "Conducted workshops on product strategy and execution"
      ]
    },
    {
      year: "2015-2018",
      role: "Director of Product",
      company: "Spotify",
      description: "Led the product team responsible for the royalty platform, significantly improving the way artists and rights holders get paid.",
      achievements: [
        "Redesigned the royalty calculation system, improving accuracy by 15%",
        "Implemented new data processing pipelines for faster payments",
        "Built and mentored a team of 12 product managers"
      ]
    },
    {
      year: "2012-2015",
      role: "Senior Product Manager",
      company: "Sony Music",
      description: "Managed digital distribution products and platforms, ensuring Sony artists' content reached global audiences efficiently.",
      achievements: [
        "Increased digital distribution efficiency by 30%",
        "Launched new music metadata management system",
        "Established standardized content delivery processes"
      ]
    },
    {
      year: "2008-2012",
      role: "Product Manager",
      company: "Tech Company",
      description: "Started my product management journey developing software solutions for content management.",
      achievements: [
        "Successfully launched 5 new product features",
        "Improved user retention by 25%",
        "Developed product roadmap methodology still in use today"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Achievements & Experience
              </h1>
              <p className="text-xl text-muted-foreground">
                A journey through my career milestones, accomplishments, and the impact I've made in product leadership.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Achievements */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 rounded-lg bg-white border shadow-sm"
                >
                  <div className="mb-4 p-4 bg-blue-50 rounded-full">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Career Timeline */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              Career Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              {careerHighlights.map((highlight, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="sticky top-20">
                        <span className="block text-sm font-medium text-primary mb-1">{highlight.year}</span>
                        <h3 className="text-xl font-bold mb-1">{highlight.role}</h3>
                        <p className="text-muted-foreground font-medium">{highlight.company}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                      <p className="mb-4">{highlight.description}</p>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" /> Key Achievements
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {highlight.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Education & Certifications */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Master's in Business Administration</h3>
                    <p className="text-muted-foreground mb-2">Harvard Business School, 2010</p>
                    <p>Specialized in Product Management and Innovation Strategy</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Medal className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Certified Product Manager</h3>
                    <p className="text-muted-foreground mb-2">Product Management Institute, 2012</p>
                    <p>Advanced certification in product strategy, development, and management</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Bachelor's in Computer Science</h3>
                    <p className="text-muted-foreground mb-2">MIT, 2006</p>
                    <p>Foundations in software development and technical architecture</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Medal className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Leadership Coaching Certification</h3>
                    <p className="text-muted-foreground mb-2">International Coaching Federation, 2018</p>
                    <p>Professional certification in leadership coaching methodologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
