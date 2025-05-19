
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";

const PatientStories = () => {
  const stories = [
    {
      id: "jane-doe",
      name: "Jane Doe",
      condition: "Complex Regional Pain Syndrome (CRPS)",
      snippet: "Living with CRPS for 7 years has taught me more about resilience than I ever thought possible...",
      date: "April 15, 2025",
    },
    {
      id: "john-smith",
      name: "John Smith",
      condition: "Fibromyalgia",
      snippet: "My journey with fibromyalgia began suddenly after a period of intense stress at work...",
      date: "March 22, 2025",
    },
    {
      id: "emily-johnson",
      name: "Emily Johnson",
      condition: "Chronic Migraine",
      snippet: "I've had migraines since my teenage years, but they became chronic after college...",
      date: "February 10, 2025",
    },
    {
      id: "michael-brown",
      name: "Michael Brown",
      condition: "Ehlers-Danlos Syndrome",
      snippet: "Being diagnosed with EDS at 35 finally gave me answers to a lifetime of unexplained symptoms...",
      date: "January 5, 2025",
    },
  ];

  return (
    <Layout>
      <AnimatedSection 
        className="bg-pain-50 py-12"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={200}
          baseDelay={100}
          animationType="fade-up"
        >
          {stories.map((story) => (
            <Card key={story.id} className="border-pain-100">
              <CardHeader>
                <CardTitle className="font-serif">{story.name}</CardTitle>
                <CardDescription>{story.condition}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{story.snippet}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{story.date}</span>
                <Button asChild variant="outline" className="border-pain-600 text-pain-600 hover:bg-pain-50">
                  <Link to={`/patient-stories/${story.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
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
          <Button asChild className="bg-pain-600 hover:bg-pain-700">
            <Link to="/contact">Submit Your Story</Link>
          </Button>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default PatientStories;
