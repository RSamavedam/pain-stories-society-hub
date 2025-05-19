
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const PatientStories = () => {
  // Group stories by condition type
  const stories = {
    "Complex Regional Pain Syndrome (CRPS)": [
      {
        id: "jane-doe",
        name: "Jane Doe",
        condition: "Complex Regional Pain Syndrome (CRPS)",
        snippet: "Living with CRPS for 7 years has taught me more about resilience than I ever thought possible. The burning sensation never truly goes away, but I've found ways to adapt my life around it. Through a combination of physical therapy, meditation, and connecting with others who understand this journey, I've created a life that still has meaning despite the pain.",
        date: "April 15, 2025",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "JD"
      },
    ],
    "Fibromyalgia and Chronic Pain": [
      {
        id: "john-smith",
        name: "John Smith",
        condition: "Fibromyalgia",
        snippet: "My journey with fibromyalgia began suddenly after a period of intense stress at work. What started as occasional muscle aches escalated into a daily battle with widespread pain and fatigue. Before diagnosis, I thought I was simply overworked, but as symptoms persisted, I knew something more serious was happening. Working with specialists has given me tools to manage my symptoms day by day.",
        date: "March 22, 2025",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "JS"
      },
      {
        id: "het",
        name: "Het",
        condition: "Chronic Hand Pain",
        snippet: "Het experienced excruciating pain in his hands that went undiagnosed for years. Every keystroke and movement became a painful reminder of his condition. After consulting with multiple specialists and trying various treatments, Het finally found relief through a combination of ergonomic adjustments, targeted physical therapy, and mind-body practices that acknowledged the connection between his stress levels and pain intensity.",
        date: "May 10, 2025",
        image: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
        initials: "H"
      },
    ],
    "Neurological Pain Conditions": [
      {
        id: "emily-johnson",
        name: "Emily Johnson",
        condition: "Chronic Migraine",
        snippet: "I've had migraines since my teenage years, but they became chronic after college. The pulsating pain, sensitivity to light, and nausea can keep me bedridden for days. I've learned to identify my triggers—certain foods, weather changes, and sleep disruptions. Creating a migraine journal has been crucial in my management plan, along with regular consultations with my neurologist to adjust medications as needed.",
        date: "February 10, 2025",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "EJ"
      },
      {
        id: "michael-brown",
        name: "Michael Brown",
        condition: "Ehlers-Danlos Syndrome",
        snippet: "Being diagnosed with EDS at 35 finally gave me answers to a lifetime of unexplained symptoms. The chronic pain from my hypermobile joints, frequent dislocations, and connective tissue problems affected every aspect of my life. Learning proper bracing techniques, working with physical therapists who understand EDS, and connecting with the EDS community online has provided both practical support and emotional validation I needed for so long.",
        date: "January 5, 2025",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "MB"
      },
    ],
  };

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
        {Object.entries(stories).map(([category, categoryStories], categoryIndex) => (
          <AnimatedSection 
            key={category} 
            className="mb-16"
            animationType="fade-up"
            delay={categoryIndex * 200}
          >
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">{category}</h2>
            
            <div className="relative min-h-[300px]">
              <PieceByPiece 
                className="relative w-full"
                staggerDelay={300}
                baseDelay={100}
                animationType="fade-in"
              >
                {categoryStories.map((story, index) => {
                  // Create a scattered effect using positioning
                  const positions = [
                    "top-0 left-[10%]",
                    "top-[15%] left-[40%]",
                    "top-[5%] left-[70%]",
                    "top-[40%] left-[25%]",
                    "top-[30%] left-[60%]",
                  ];
                  
                  const position = positions[index % positions.length];
                  
                  return (
                    <div 
                      key={story.id}
                      className={`absolute ${position} transform hover:-translate-y-2 transition-transform duration-300`}
                    >
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Link to={`/patient-stories/${story.id}`} className="cursor-pointer block">
                            <div className="text-center">
                              <Avatar className="w-40 h-40 border-2 border-cream-200 mx-auto shadow-lg">
                                <AvatarImage src={story.image} alt={story.name} className="object-cover" />
                                <AvatarFallback className="text-2xl bg-cream-100 text-cream-700">{story.initials}</AvatarFallback>
                              </Avatar>
                              <p className="mt-3 font-medium text-lg">{story.name}</p>
                            </div>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 p-6 z-50 backdrop-blur bg-white/90 border border-cream-200">
                          <div className="space-y-3">
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
                    </div>
                  );
                })}
              </PieceByPiece>
            </div>
          </AnimatedSection>
        ))}
        
        <AnimatedSection 
          className="mt-24 text-center" 
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
