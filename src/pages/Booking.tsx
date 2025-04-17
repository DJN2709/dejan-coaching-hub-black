import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Briefcase, CheckCircle2, PhoneCall, Video, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Booking = () => {
  const coachingServices = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "1:1 Coaching",
      description: "Personalized coaching sessions focused on your specific challenges and goals.",
      duration: "60 min",
      price: "€110",
      features: [
        "Tailored guidance",
        "Action plan development",
        "Follow-up resources",
        "Direct access via email"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/cc0e3f23-6603-4b8c-a323-8972071236ba"
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Team Workshop",
      description: "Interactive workshops for product teams to align on strategy and improve collaboration.",
      duration: "2 hours",
      price: "€450",
      features: [
        "Custom workshop design",
        "Collaborative exercises",
        "Team alignment",
        "Framework implementation"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/d0c5105d-b68f-4248-932b-70a8684a958b"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Leadership Advisory",
      description: "Strategic advisory services for product executives and leadership teams.",
      duration: "90 min",
      price: "€250",
      features: [
        "Strategic planning",
        "Leadership development",
        "Organizational design",
        "Change management"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/51a80e26-d104-4193-9c25-1eb0a5a2b763"
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
                Book a Coaching Session
              </h1>
              <p className="text-xl text-muted-foreground">
                Take your product leadership skills to the next level with personalized coaching and guidance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Coaching Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the coaching format that best fits your needs and goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coachingServices.map((service, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {service.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {service.duration}
                        </p>
                        <p className="text-xl font-bold text-primary">{service.price}</p>
                      </div>
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {service.bookingUrl ? (
                      <Button 
                        className="w-full" 
                        onClick={() => window.open(service.bookingUrl, '_blank')}
                      >
                        Book Now
                      </Button>
                    ) : (
                      <Button className="w-full">Book Now</Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Client Feedback
              </h2>
              <p className="text-lg text-muted-foreground">
                What others say about their coaching experience
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Alex Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Product Director</p>
                  </div>
                </div>
                <p className="italic">
                  "The coaching sessions with Dejan transformed my approach to product leadership. I gained practical frameworks that I could immediately apply to my team."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">CPO at Startup</p>
                  </div>
                </div>
                <p className="italic">
                  "Dejan's coaching helped me navigate the transition from product manager to product leader. His strategic insights were invaluable for our organization."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Marcus Johnson</p>
                    <p className="text-sm text-muted-foreground">Product Team Lead</p>
                  </div>
                </div>
                <p className="italic">
                  "Our team workshop with Dejan created alignment and clarity that we had been missing. His frameworks helped us solve longstanding challenges."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
