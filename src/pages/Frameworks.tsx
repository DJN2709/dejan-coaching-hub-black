import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Workflow, ArrowRight, Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";

interface FrameworkFeature {
  title: string;
  description: string;
}

interface Framework {
  title: string;
  description: string;
  image: string;
  features?: FrameworkFeature[];
}

const Frameworks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPrioritizationModal, setShowPrioritizationModal] = useState(false);
  const [showScalabilityModal, setShowScalabilityModal] = useState(false);

  const frameworks: Framework[] = [
    {
      title: "How We Bring Ideas to Life: A High-Level Overview",
      description: "The Unified Intake Process streamlines the journey from idea to execution by strategically assessing, prioritizing, and delivering high-impact initiatives through structured discovery, technical planning, and cross-functional collaboration.",
      image: "/lovable-uploads/development-process-flow-dark.png"
    },
    {
      title: "Prioritization Toolkit",
      description: "You need a transparent, data-driven prioritization framework to align efforts across the organization, helping us focus on high-impact initiatives, foster better collaboration, streamline workflows, and drive smarter, more effective decision-making.",
      image: "/lovable-uploads/prioritization-toolkit-updated.png"
    },
    {
      title: "The Strategic Toolbox",
      description: "By embracing flexibility, pragmatism, and context-driven strategies, modern product teams can move faster, allocate resources smarter, and deliver greater impact without sacrificing alignment or quality.",
      image: "/lovable-uploads/scalability-matrix.png"
    }
  ];

  const renderFeatures = (features: FrameworkFeature[]): React.ReactNode => {
    return (
      <div className="space-y-4">
        {features.map((feature, i) => (
          <div key={i}>
            <h3 className="text-base md:text-lg font-semibold text-white mb-1">{feature.title}</h3>
            <p className="text-sm md:text-base text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Product Leadership Frameworks
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Battle-tested frameworks that I've developed and implemented across organizations to drive product success.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-24">
              {frameworks.map((framework, index) => {
                // First framework: image below description
                if (index === 0) {
                  return (
                    <div key={index} className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {framework.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/80 text-center">
                        {framework.description}
                      </p>
                      {framework.features && renderFeatures(framework.features)}
                      <div className="w-full flex justify-start">
                        <img
                          src={framework.image}
                          alt={framework.title}
                          className="w-full max-w-6xl h-auto object-contain rounded-lg mt-4 cursor-pointer"
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                      {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                          <div className="bg-black text-white rounded-xl p-12 max-w-4xl w-full relative shadow-2xl border border-white/20">
                            <button
                              className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-blue-400"
                              onClick={() => setShowModal(false)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <h3 className="font-bold text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                              Unified Intake Process Details
                            </h3>
                            <div className="space-y-6 text-lg">
                              <p>
                                Our Unified Intake Process is a structured way to evaluate, prioritize, and deliver initiatives that align with our strategy and create meaningful impact. While the name may evolve, the purpose remains clear: bring the right ideas to life through thoughtful collaboration and clear decision-making.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Intake (Should we do it?)</span><br />
                                All new ideas are collected and reviewed to quickly assess strategic fit and potential value. Finance stakeholders meet monthly to prioritize the highest-impact initiatives.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Opportunity Discovery (Is it worth it?)</span><br />
                                Product managers lead a deep dive to understand the problem, explore opportunities, and define the value. Finance leadership reviews the findings to ensure alignment before moving forward.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Technical Discovery (How should we do it?)</span><br />
                                Engineers design the technical solution, map dependencies, and finalize architecture. This is reviewed by FinE leadership and finance stakeholders for final go-ahead.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Build (Let's do it!)</span><br />
                                Once approved, cross-functional teams collaborate to develop and deliver the initiative—tracking progress every step of the way.
                              </p>
                              <p>
                                This process ensures we focus on what matters most, work smarter together, and deliver value that lasts.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Second framework: image below features
                if (index === 1) {
                  return (
                    <div key={index} className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {framework.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/80 w-full text-center">
                        {framework.description}
                      </p>
                      {framework.features && renderFeatures(framework.features)}
                      <div className="w-full flex justify-center">
                        <img
                          src={framework.image}
                          alt={framework.title}
                          className="w-full max-w-xl h-auto object-contain rounded-lg my-4 cursor-pointer"
                          onClick={() => setShowPrioritizationModal(true)}
                        />
                      </div>
                      {showPrioritizationModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                          <div className="bg-black text-white rounded-xl p-12 max-w-4xl w-full relative shadow-2xl border border-white/20">
                            <button
                              className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-blue-400"
                              onClick={() => setShowPrioritizationModal(false)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <h3 className="font-bold text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                              Prioritization Framework Details
                            </h3>
                            <div className="space-y-6 text-lg">
                              <p>
                                Unlock Greater Impact Through Smarter Prioritization. Tired of juggling competing priorities and wondering if your team is focused on what truly matters? We're excited to introduce a new, transparent, and data-driven prioritization framework designed to revolutionize our planning process. By aligning how we handle incoming requests across the entire organization, we're ensuring that effort is directed towards initiatives with the highest potential impact. This page dives deep into how this framework will foster better collaboration, streamline our workflows, and empower us to make informed decisions based on real data – all while keeping things simple and adaptable. Discover how we're moving towards a more focused and effective future.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">High Impact, Low Effort</span><br />
                                Quick wins that deliver immediate value with minimal resource investment.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">High Impact, High Effort</span><br />
                                Strategic initiatives that can transform our business capabilities.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Low Impact, Low Effort</span><br />
                                Small improvements that maintain system health without major investment.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Low Impact, High Effort</span><br />
                                Activities to evaluate for potential optimization or deprioritization.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Third framework: image after description and features
                if (index === 2) {
                  return (
                    <div key={index} className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {framework.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/80 text-center">
                        {framework.description}
                      </p>
                      {framework.features && renderFeatures(framework.features)}
                      <div className="w-full flex justify-center">
                        <img
                          src={framework.image}
                          alt={framework.title}
                          className="w-full max-w-xl h-auto object-contain rounded-lg my-4 cursor-pointer"
                          onClick={() => setShowScalabilityModal(true)}
                        />
                      </div>
                      {showScalabilityModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                          <div className="bg-black text-white rounded-xl p-12 max-w-4xl w-full relative shadow-2xl border border-white/20">
                            <button
                              className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-blue-400"
                              onClick={() => setShowScalabilityModal(false)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <h3 className="font-bold text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                              Scalability Matrix Details
                            </h3>
                            <div className="space-y-6 text-lg">
                              <p>
                                The Scalability Matrix is a strategic tool that helps teams evaluate and plan for growth across multiple dimensions. It provides a structured approach to thinking about how different aspects of your product or service will scale as your business grows.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Technical Scalability</span><br />
                                How well your infrastructure and systems can handle increased load and complexity.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Operational Scalability</span><br />
                                The ability of your processes and workflows to maintain efficiency at scale.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Organizational Scalability</span><br />
                                How your team structure and culture can adapt to growth while maintaining effectiveness.
                              </p>
                              <p>
                                <span className="font-semibold text-xl">Financial Scalability</span><br />
                                The economic model's ability to maintain or improve margins as you grow.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black border-t border-white">
          <div className="container">
            <div className="max-w-4xl mx-auto p-8 md:p-12 bg-black border border-white rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Need Help Implementing These Frameworks?
                  </h2>
                  <p className="text-white/80 mb-6">
                    Get personalized guidance through coaching sessions tailored to your specific organizational challenges.
                  </p>
                  <Link to="/booking">
                    <Button className="bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 border border-blue-400/50 hover:bg-blue-400/10" size="lg">
                      Book a Coaching Session
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Workflow className="h-40 w-40" color="#9b87f5" />
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

export default Frameworks;
