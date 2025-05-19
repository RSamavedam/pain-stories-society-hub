
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, BookUser, Pill, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <Layout>
      {/* Hero section with more human imagery */}
      <AnimatedSection 
        className="py-16 md:py-24"
        animationType="fade-in"
        duration={800}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection 
              animationType="fade-up"
              delay={300}
              className="mb-6"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
                Information. Stories. Hope.
              </h1>
            </AnimatedSection>
            
            <AnimatedSection 
              animationType="fade-up"
              delay={500}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-pain-800">
                Spreading knowledge about rare pain conditions - because informed care starts with informed patients
              </p>
            </AnimatedSection>
            
            <AnimatedSection 
              animationType="fade-up"
              delay={700}
              className="mb-10"
            >
              <p className="text-base md:text-lg text-muted-foreground">
                Pain Relief Society aims to increase awareness and understanding of chronic pain conditions by sharing accessible knowledge, amplifying patient stories, and fostering collaborative initiatives between patients, caregivers, and healthcare professionals. We believe that visibility, education, and connection are essential steps toward better care and compassionate support.
              </p>
            </AnimatedSection>
            
            <AnimatedSection 
              animationType="fade-up"
              delay={900}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-pain-600 hover:bg-pain-700 rounded-full">
                  <Link to="/patient-stories">Read Patient Stories</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-pain-600 text-pain-600 hover:bg-pain-50 rounded-full">
                  <Link to="/pain-conditions">Learn About Conditions</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* How we help section with more human-centered icons */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection className="mb-6" animationType="fade-up">
            <h2 className="font-serif text-3xl font-bold text-center text-brown">How We Help</h2>
          </AnimatedSection>
          
          <AnimatedSection className="mb-12" animationType="fade-up" delay={200}>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of shared experiences and trusted information to help you navigate your pain journey.
            </p>
          </AnimatedSection>
          
          <PieceByPiece 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={200}
            baseDelay={200}
            animationType="fade-up"
          >
            <Card className="border-pain-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pain-50 p-3">
                    <BookUser className="h-6 w-6 text-pain-600" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Pain Conditions</h3>
                <p className="text-muted-foreground mb-5">
                  Clear, accessible information about various chronic pain conditions, written with input from both medical professionals and patients who live with these conditions.
                </p>
                <Link to="/pain-conditions" className="text-pain-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-pain-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pain-50 p-3">
                    <Pill className="h-6 w-6 text-pain-600" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Treatments</h3>
                <p className="text-muted-foreground mb-5">
                  Explore various treatment approaches, from conventional medical therapies to complementary practices, all shared with real patient perspectives on what has helped.
                </p>
                <Link to="/treatments" className="text-pain-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-pain-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pain-50 p-3">
                    <Users className="h-6 w-6 text-pain-600" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Patient Stories</h3>
                <p className="text-muted-foreground mb-5">
                  Authentic accounts from individuals navigating life with rare pain conditions, offering valuable insights, coping strategies, and moments of hope and resilience.
                </p>
                <Link to="/patient-stories" className="text-pain-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </PieceByPiece>
        </div>
      </section>

      {/* Featured story section with Het's image */}
      <AnimatedSection 
        className="py-16 bg-softgray-50/50" 
        animationType="fade-in"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animationType="fade-up" className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-center text-brown">Featured Patient Story</h2>
            </AnimatedSection>
            
            <AnimatedSection animationType="scale-up" delay={200}>
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <AnimatedSection animationType="fade-up" delay={400} className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      <Avatar className="w-24 h-24 border-2 border-pain-100">
                        <AvatarImage src="/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png" alt="Het" className="object-cover" />
                        <AvatarFallback className="text-xl">H</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-xl mb-1">Het</h3>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animationType="fade-up" delay={600} className="mb-6">
                    <blockquote className="italic text-lg text-muted-foreground leading-relaxed mt-4">
                      "Het experienced excruciating pain in his hands. As a result, he went to a local orthopedic specialist who gave him some pain killers. When those medications didn't help, he was recommended to a rheumatologist who have anti-inflammatory medications and steroids as he was diagnosed with rheumatoid arthritis. Finally, when no doctor could figure out what was wrong, he was diagnosed with having a mental disability because everything seemed to be normal physically."
                    </blockquote>
                  </AnimatedSection>
                  
                  <AnimatedSection animationType="fade-up" delay={800}>
                    <Link to="/patient-stories/het" className="text-pain-600 hover:underline font-medium inline-flex items-center">
                      Read Het's full story
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Community section with more welcoming language */}
      <AnimatedSection 
        className="py-16 md:py-24"
        animationType="fade-in"
        duration={1000}
      >
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection animationType="scale-up" className="mb-6">
              <HandHeart className="h-12 w-12 text-pain-600 mx-auto" />
            </AnimatedSection>
            
            <AnimatedSection animationType="fade-up" delay={200} className="mb-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown">Join Our Community</h2>
            </AnimatedSection>
            
            <AnimatedSection animationType="fade-up" delay={400} className="mb-8">
              <p className="text-lg text-muted-foreground">
                Connect with others who truly understand what you're going through. Share your experiences, learn from others, and find comfort in knowing you're not alone on this journey.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animationType="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-pain-600 hover:bg-pain-700 rounded-full">
                  <Link to="/contact">Get Involved</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-pain-600 text-pain-600 hover:bg-pain-50 rounded-full">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
