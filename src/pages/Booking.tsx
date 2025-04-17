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
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                Book a Coaching Session
              </h1>
              <p className="text-xl text-white/80">
                Take your product leadership skills to the next level with personalized coaching and guidance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Coaching Services
              </h2>
              <p className="text-lg text-white/80">
                Choose the coaching format that best fits your needs and goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coachingServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="flex flex-col h-full bg-black border-white"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-white/10 rounded-lg">
                        {service.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm text-white/80 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {service.duration}
                        </p>
                        <p className="text-xl font-bold text-white">{service.price}</p>
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-white">{service.title}</CardTitle>
                    <CardDescription className="text-white/80">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-white text-black hover:bg-white/90" 
                      onClick={() => window.open(service.bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
