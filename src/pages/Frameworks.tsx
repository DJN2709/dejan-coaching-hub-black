
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Component, LayoutGrid, Globe, Workflow, ArrowRight, Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Frameworks = () => {
  const frameworks = [
    {
      title: "Royalty Platform Framework",
      icon: <Globe className="h-10 w-10 text-primary" />,
      description: "A comprehensive system for managing music rights, royalty calculations, and payment distributions at scale.",
      features: [
        "Streamlined rights management",
        "Automated royalty calculations",
        "Transparent payment distribution",
        "Data-driven insights"
      ],
      image: "/lovable-uploads/f11a8b47-6655-44bc-b6d1-e0b2dc9d286a.png"
    },
    {
      title: "Product Competency Toolkit",
      icon: <LayoutGrid className="h-10 w-10 text-primary" />,
      description: "A structured approach to assess and develop the 12 essential competencies required for successful product leadership.",
      features: [
        "Competency assessment",
        "Development roadmap",
        "Team evaluation",
        "Growth tracking"
      ],
      image: "/lovable-uploads/cf70df66-fe4d-4931-9dc7-1b31c3493355.png"
    },
    {
      title: "Product Leadership Accelerator",
      icon: <Component className="h-10 w-10 text-primary" />,
      description: "A structured program that combines strategic frameworks, practical tools, and coaching to accelerate product leadership growth.",
      features: [
        "Leadership development",
        "Strategic thinking",
        "Team building",
        "Execution excellence"
      ],
      image: "/lovable-uploads/636a86e8-7476-4ed5-81d6-ef4256a6d34a.png"
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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Product Leadership Frameworks
              </h1>
              <p className="text-xl text-muted-foreground">
                Battle-tested frameworks that I've developed and implemented across organizations to drive product success.
              </p>
            </div>
          </div>
        </section>
        
        {/* Frameworks Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-24">
              {frameworks.map((framework, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
                      {framework.icon}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                      {framework.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {framework.description}
                    </p>
                    <div className="space-y-3">
                      {framework.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="gap-2">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden border shadow-sm">
                    <img 
                      src={framework.image} 
                      alt={framework.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Implementation Process */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Framework Implementation Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to adapt and implement these frameworks in your organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {implementationSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Resources */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Framework Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Download templates, guides, and tools to start implementing these frameworks
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="p-3 bg-blue-50 rounded-full inline-flex mb-4">
                  <FileDown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Product Competency Assessment</h3>
                <p className="text-muted-foreground mb-4">A self-assessment tool to evaluate your product management skills across 12 dimensions.</p>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" /> Download Template
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="p-3 bg-blue-50 rounded-full inline-flex mb-4">
                  <FileDown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Royalty Platform Guide</h3>
                <p className="text-muted-foreground mb-4">Comprehensive guide for building and managing efficient royalty distribution systems.</p>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" /> Download Guide
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="p-3 bg-blue-50 rounded-full inline-flex mb-4">
                  <FileDown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership Accelerator Workbook</h3>
                <p className="text-muted-foreground mb-4">Step-by-step workbook for developing product leadership capabilities.</p>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" /> Download Workbook
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    Need Help Implementing These Frameworks?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Get personalized guidance through coaching sessions tailored to your specific organizational challenges.
                  </p>
                  <Link to="/booking">
                    <Button size="lg">Book a Coaching Session</Button>
                  </Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Workflow className="h-40 w-40 text-primary opacity-20" />
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
