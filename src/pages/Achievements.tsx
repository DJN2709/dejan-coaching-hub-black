import React from "react";
import { Trophy, Award, Medal, BookOpen, Briefcase, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Achievements = () => {
  const achievements = [
    {
      icon: <Briefcase className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Accelerated Financial Processes",
      description: "Optimized financial operations and reduced operational costs by identifying and eliminating process bottlenecks."
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "User-Centric Royalties",
      description: "Launched Fan-Powered Royalties at SoundCloud—the industry's first user-centric payout model. Empowered creators with greater transparency and control over their earnings."
    },
    {
      icon: <Trophy className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Outcome-Driven Culture",
      description: "Introduced product frameworks and monthly prioritization rituals, replacing rigid timelines with adaptive, value-driven planning."
    },
    {
      icon: <Medal className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Strategy at Scale",
      description: "Developed and implemented strategies that accelerated experimentation and significantly reduced time to market."
    },
    {
      icon: <BookOpen className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Data-Led Discovery",
      description: "Built frameworks to measure product impact using both quantitative and qualitative data—enabling better, faster decisions."
    },
    {
      icon: <Award className="h-8 w-8" style={{ color: '#9b87f5' }} />,
      title: "Educator & Speaker",
      description: "As a featured speaker and instructor at Product School, mentored aspiring product managers and equipped them with the tools to lead with clarity, confidence, and purpose."
    }
  ];
  
  const careerHighlights = [
    {
      year: "Current",
      role: "Group Product Manager, Creator and Enterprise Payouts",
      company: "Spotify",
      description: "Driving innovation in the complex world of royalties and creator payouts. Built and led high-performing teams across EMEA, launching scalable solutions that power the financial backbone of Spotify's creator economy.",
      achievements: [
        "Led cross-functional teams across EMEA",
        "Launched scalable payout solutions",
        "Improved the financial infrastructure for the creator economy"
      ]
    },
    {
      year: "Ongoing",
      role: "Instructor & Featured Speaker, Product Leadership Coach",
      company: "Product School, Independent",
      description: "For over three years, I've shared practical frameworks and real-world experiences with a global community of 1M+ product professionals. Whether through workshops or 1:1 coaching, I help PMs grow into confident, strategic leaders who drive impact at scale. Additionally, I provide coaching and consulting to product leaders and organizations to help them build better products and teams.",
      achievements: [
        "Shared frameworks with 1M+ product professionals",
        "Conducted workshops and 1:1 coaching",
        "Helped PMs develop into strategic leaders",
        "Developed custom frameworks for product leadership",
        "Coached 100+ product leaders from startups to enterprise companies"
      ]
    },
    {
      year: "Previous",
      role: "Lead Product Manager, Insights & Royalties",
      company: "SoundCloud",
      description: "Spearheaded the development and launch of Fan-Powered Royalties, making SoundCloud the first major streaming platform to adopt a user-centric model. Collaborated with economists and engineers to model revenue shifts and execute a groundbreaking vision for fairer artist compensation.",
      achievements: [
        "Launched Fan-Powered Royalties, the first user-centric model on a major platform",
        "Collaborated with economists to model revenue shifts",
        "Executed vision for fairer artist compensation"
      ]
    },
    {
      year: "Previous",
      role: "Director of Business Analysis",
      company: "BMG",
      description: "Led teams focused on royalty systems and technical services, enabling smarter licensing negotiations and operational excellence. Built bridges between technology, rights, and finance—bringing clarity to one of the industry's most complex value chains.",
      achievements: [
        "Led royalty systems and technical services teams",
        "Enabled smarter licensing negotiations",
        "Connected technology, rights, and finance departments"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Achievements & Experience
              </h1>
              <p className="text-xl text-white/80">
                A journey through my career milestones, accomplishments, and the impact I've made in product leadership.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Achievements */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Key Achievements
            </h2>
            <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 rounded-lg bg-black border border-white hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="mb-4 p-4 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full">
                    {React.cloneElement(achievement.icon, {
                      className: "h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {achievement.title}
                  </h3>
                  <p className="text-white/80">{achievement.description}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Timeline */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Career Journey
            </h2>
            <div className="container max-w-7xl mx-auto px-4">
              {careerHighlights.map((highlight, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="sticky top-20">
                        <span className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                          {highlight.year}
                        </span>
                        <h3 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                          {highlight.role}
                        </h3>
                        <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                          {highlight.company}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-2/3 bg-black border border-white p-6 rounded-lg hover:border-blue-400/50 transition-all duration-300">
                      <p className="mb-4 text-white/80">{highlight.description}</p>
                      <h4 className="font-medium mb-2 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        <Award className="h-4 w-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" /> 
                        Key Achievements
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {highlight.achievements.map((achievement, i) => (
                          <li key={i} className="text-white/80">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
