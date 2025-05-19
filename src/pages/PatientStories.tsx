
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const PatientStories = () => {
  const stories = [
    {
      id: "jane-doe",
      name: "Jane Doe",
      condition: "Complex Regional Pain Syndrome (CRPS)",
      snippet: "Living with CRPS for 7 years has taught me more about resilience than I ever thought possible...",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "JD"
    },
    {
      id: "john-smith",
      name: "John Smith",
      condition: "Fibromyalgia",
      snippet: "My journey with fibromyalgia began suddenly after a period of intense stress at work...",
      date: "March 22, 2025",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "JS"
    },
    {
      id: "emily-johnson",
      name: "Emily Johnson",
      condition: "Chronic Migraine",
      snippet: "I've had migraines since my teenage years, but they became chronic after college...",
      date: "February 10, 2025",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "EJ"
    },
    {
      id: "michael-brown",
      name: "Michael Brown",
      condition: "Ehlers-Danlos Syndrome",
      snippet: "Being diagnosed with EDS at 35 finally gave me answers to a lifetime of unexplained symptoms...",
      date: "January 5, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "MB"
    },
    {
      id: "het",
      name: "Het",
      condition: "Chronic Hand Pain",
      snippet: "Het experienced excruciating pain in his hands that went undiagnosed for years...",
      date: "May 10, 2025",
      image: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
      initials: "H"
    },
  ];

  return (
    <Layout>
      <AnimatedSection 
        className="bg-cream-100/70 py-12"
        animationType="fade-in"
        duration={800}
      >
        <div className="container">
          <AnimatedSection animationType="fade-up" delay={200} className="mb-4">
            <h1 className="font-serif text-4xl font-bold text-center">Patient Stories</h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
              Real experiences from people living with chronic pain conditions.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <div className="container py-12">
        <PieceByPiece
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          staggerDelay={200}
          baseDelay={100}
          animationType="fade-up"
        >
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link to={`/patient-stories/${story.id}`} className="cursor-pointer hover:scale-105 transition-transform duration-300">
                    <Avatar className="w-32 h-32 border-2 border-cream-200">
                      <AvatarImage src={story.image} alt={story.name} className="object-cover" />
                      <AvatarFallback className="text-xl bg-cream-100 text-cream-700">{story.initials}</AvatarFallback>
                    </Avatar>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-medium text-lg">{story.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{story.condition}</p>
                    <p className="text-sm">{story.snippet}</p>
                    <p className="text-xs text-muted-foreground">{story.date}</p>
                    <Link 
                      to={`/patient-stories/${story.id}`}
                      className="text-sm text-pain-600 hover:underline inline-flex items-center"
                    >
                      Read full story
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <p className="mt-3 font-medium text-center">{story.name}</p>
            </div>
          ))}
        </PieceByPiece>
        
        <AnimatedSection 
          className="mt-16 text-center" 
          animationType="fade-up"
          delay={600}
        >
          <h3 className="font-serif text-2xl font-bold mb-4">Share Your Story</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Your experience matters. By sharing your story, you help others feel less alone and contribute to a better understanding of chronic pain conditions.
          </p>
          <Button asChild className="bg-cream-600 hover:bg-cream-700 text-foreground">
            <Link to="/contact">Submit Your Story</Link>
          </Button>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default PatientStories;
