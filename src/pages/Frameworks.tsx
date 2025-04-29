import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Workflow, ArrowRight, Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Frameworks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPrioritizationModal, setShowPrioritizationModal] = useState(false);
  const [showScalabilityModal, setShowScalabilityModal] = useState(false);

  const frameworks = [
    {
      title: "How We Bring Ideas to Life: A High-Level Overview",
      description: "Our Unified Intake Process is a structured approach to assess, prioritize, and deliver high-impact initiatives through strategic alignment, deep discovery, technical planning, and cross-functional execution.",
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

  const implementationSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "Evaluate current processes, identify pain points, and establish baseline metrics."
    },
    {
      number: "02",
      title: "Customization",
      description: "Adapt the framework to your specific business context, goals, and constraints."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Integrate the framework into your workflows with proper documentation and training."
    },
    {
      number: "04",
      title: "Measurement",
      description: "Track key performance indicators to assess impact and identify improvement opportunities."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 md:py-40 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Product Leadership Frameworks
              </h1>
              <p className="text-xl text-white/80">
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
                    <div key={index} className="flex flex-col items-start text-left gap-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {framework.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/80">
                        {framework.description}
                      </p>
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
                          <div className="bg-black text-white rounded-xl p-8 max-w-lg w-full relative shadow-2xl border border-white/20">
                            <button
                              className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-blue-400"
                              onClick={() => setShowModal(false)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                              Unified Intake Process Details
                            </h3>
                            <div className="space-y-3 text-base">
                              <p>
                                Our Unified Intake Process is a structured way to evaluate, prioritize, and deliver initiatives that align with our strategy and create meaningful impact. While the name may evolve, the purpose remains clear: bring the right ideas to life through thoughtful collaboration and clear decision-making.
                              </p>
                              <p>
                                <span className="font-semibold">Intake (Should we do it?)</span><br />
                                All new ideas are collected and reviewed to quickly assess strategic fit and potential value. Finance stakeholders meet monthly to prioritize the highest-impact initiatives.
                              </p>
                              <p>
                                <span className="font-semibold">Opportunity Discovery (Is it worth it?)</span><br />
                                Product managers lead a deep dive to understand the problem, explore opportunities, and define the value. Finance leadership reviews the findings to ensure alignment before moving forward.
                              </p>
                              <p>
                                <span className="font-semibold">Technical Discovery (How should we do it?)</span><br />
                                Engineers design the technical solution, map dependencies, and finalize architecture. This is reviewed by FinE leadership and finance stakeholders for final go-ahead.
                              </p>
                              <p>
                                <span className="font-semibold">Build (Let's do it!)</span><br />
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
                    <div key={index} className="flex flex-col items-start text-left gap-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                      {framework.title}
                    </h2>
                      <p className="text-base md:text-lg text-white/80 w-full">
                      {framework.description}
                    </p>
                      <div className="space-y-4">
                        {framework.features && Array.isArray(framework.features) && framework.features[0]?.title ? (
                          framework.features.map((feature, i) => (
                            <div key={i}>
                              <h3 className="text-base md:text-lg font-semibold text-white mb-1">{feature.title}</h3>
                              <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                            </div>
                          ))
                        ) : (
                          <div className="space-y-2">
                            {framework.features?.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                <span className="text-sm text-white/80">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="w-full flex justify-start">
                        <img
                          src={framework.image}
                          alt={framework.title}
                          className="w-full max-w-3xl h-auto object-contain rounded-lg my-4 cursor-pointer"
                          onClick={() => setShowPrioritizationModal(true)}
                        />
                      </div>
                      {showPrioritizationModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                          <div className="bg-black text-white rounded-xl p-8 max-w-lg w-full relative shadow-2xl border border-white/20">
                            <button
                              className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-blue-400"
                              onClick={() => setShowPrioritizationModal(false)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                              Prioritization Framework Details
                            </h3>
                            <div className="space-y-3 text-base">
                              <p>
                                Unlock Greater Impact Through Smarter Prioritization. Tired of juggling competing priorities and wondering if your team is focused on what truly matters? We're excited to introduce a new, transparent, and data-driven prioritization framework designed to revolutionize our planning process. By aligning how we handle incoming requests across the entire organization, we're ensuring that effort is directed towards initiatives with the highest potential impact. This page dives deep into how this framework will foster better collaboration, streamline our workflows, and empower us to make informed decisions based on real data – all while keeping things simple and adaptable. Discover how we're moving towards a more focused and effective future.
                              </p>
                              <p>
                                <span className="font-semibold">High Impact, Low Effort</span><br />
                                Quick wins that deliver immediate value with minimal resource investment.
                              </p>
                              <p>
                                <span className="font-semibold">High Impact, High Effort</span><br />
                                Strategic initiatives that can transform our business capabilities.
                              </p>
                              <p>
                                <span className="font-semibold">Low Impact, Low Effort</span><br />
                                Small improvements that maintain system health without major investment.
                              </p>
                              <p>
                                <span className="font-semibold">Low Impact, High Effort</span><br />
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
                    <div key={index} className="flex flex-col items-start text-left gap-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {framework.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/80">
                        {framework.description}
                      </p>
                      <div className="space-y-4">
                        {framework.features && Array.isArray(framework.features) && framework.features[0]?.title ? (
                          framework.features.map((feature, i) => (
                            <div key={i}>
                              <h3 className="text-base md:text-lg font-semibold text-white mb-1">{feature.title}</h3>
                              <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                            </div>
                          ))
                        ) : (
                          <div className="space-y-2">
                            {framework.features?.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                <span className="text-sm text-white/80">{feature}</span>
                        </div>
                      ))}
                          </div>
                        )}
                      </div>
                      <div className="w-full flex justify-start">
                        <img
                          src={framework.image}
                          alt={framework.title}
                          className="w-full max-w-3xl h-auto object-contain rounded-lg my-4 cursor-pointer"
                          onClick={() => setShowScalabilityModal(true)}
                        />
                      </div>
                      {showScalabilityModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                          <div className="bg-black text-white rounded-xl p-8 max-w-lg w-full relative shadow-2xl border border-white/20">
                            <button
                              className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-blue-400"
                              onClick={() => setShowScalabilityModal(false)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                              Strategic Toolbox Details
                            </h3>
                            <div className="space-y-3 text-base">
                              <p>
                                To meet the diverse goals and maturity levels across products and features, you must be flexible, pragmatic, and collaborative. Whether you're validating assumptions, scaling proven solutions, or executing at the program level, your strategy should be context-aware and outcome-driven.
                              </p>
                              <p>
                                <span className="font-semibold">An Adaptable Approach That Accelerates Impact</span><br />
                                By shifting toward adaptability and guided decision-making, you empower your teams to move faster, focus on what matters most, and drive meaningful outcomes. Leveraging existing capabilities—while being mindful of constraints—lets you accelerate time-to-market without sacrificing alignment or quality.
                              </p>
                              <p>
                                <span className="font-semibold">Strategic Resource Allocation</span><br />
                                When constraints demand deeper investment, this approach helps you prioritize effectively, ensuring the most critical initiatives get the resources they need. It's not just about launching more—it's about launching smarter.
                              </p>
                              <p>
                                <span className="font-semibold">Modern Product Organization</span><br />
                                This is how modern product organizations thrive: with clarity, adaptability, and an unshakable focus on delivering value.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // All other frameworks: default side-by-side layout
                return (
                  <div 
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-stretch`}
                  >
                    <div className="flex-1 space-y-5 flex flex-col justify-between">
                      <div className="space-y-5">
                        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                          {framework.title}
                        </h2>
                        <p className="text-base text-white/80">
                          {framework.description}
                        </p>
                        <div className="space-y-4">
                          {framework.features && Array.isArray(framework.features) && framework.features[0]?.title ? (
                            framework.features.map((feature, i) => (
                              <div key={i}>
                                <h3 className="text-base md:text-lg font-semibold text-white mb-1">{feature.title}</h3>
                                <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                              </div>
                            ))
                          ) : (
                            <div className="space-y-2">
                              {framework.features?.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                  <span className="text-sm text-white/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                  </div>
                    <div className="flex-1 flex items-center">
                      <div className="w-full h-full bg-black">
                    <img 
                      src={framework.image} 
                      alt={framework.title} 
                          className="w-full h-full object-contain min-h-[600px] rounded-lg"
                    />
                  </div>
                </div>
                  </div>
                );
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
