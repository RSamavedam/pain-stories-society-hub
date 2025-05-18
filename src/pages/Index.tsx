
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, BookUser, Pill, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero section with more human imagery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-pain-900 mb-6 leading-tight">
              Information. Stories. Hope.
            </h1>
            <p className="text-lg md:text-xl text-pain-800 mb-8">
              Spreading knowledge about rare pain conditions - because informed care starts with informed patients
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10">
              Pain Relief Society aims to increase awareness and understanding of chronic pain conditions by sharing accessible knowledge, amplifying patient stories, and fostering collaborative initiatives between patients, caregivers, and healthcare professionals. We believe that visibility, education, and connection are essential steps toward better care and compassionate support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pain-600 hover:bg-pain-700 rounded-full">
                <Link to="/patient-stories">Read Patient Stories</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pain-600 text-pain-600 hover:bg-pain-50 rounded-full">
                <Link to="/pain-conditions">Learn About Conditions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Patient quote section - adds a human voice */}
      <section className="py-12 bg-pain-50/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <blockquote className="relative text-center px-10">
              <div className="text-pain-300 text-6xl font-serif absolute top-0 left-0">"</div>
              <p className="text-xl md:text-2xl italic text-pain-800 mb-6">
                Finding a community that understands my journey with chronic pain has made all the difference. 
                It's not just about managing symptoms—it's about being seen and heard.
              </p>
              <cite className="text-pain-600 font-medium">— Michelle, living with fibromyalgia</cite>
              <div className="text-pain-300 text-6xl font-serif absolute bottom-0 right-0">"</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* How we help section with more human-centered icons */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-6">How We Help</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We believe in the power of shared experiences and trusted information to help you navigate your pain journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Authentic accounts from individuals navigating life with chronic pain, offering valuable insights, coping strategies, and moments of hope and resilience.
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
          </div>
        </div>
      </section>

      {/* Featured story section with more human details */}
      <section className="py-16 bg-pain-50/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Featured Patient Story</h2>
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-pain-100 w-16 h-16 flex items-center justify-center">
                    <span className="font-medium text-pain-700 text-xl">JD</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-lg">Jane Doe</h3>
                    <p className="text-muted-foreground">Living with CRPS for 7 years</p>
                  </div>
                </div>
                <blockquote className="italic text-lg text-muted-foreground mb-6 leading-relaxed">
                  "Finding this community changed everything for me. For years, I felt isolated and misunderstood. Learning about others with similar experiences gave me hope and practical strategies that my doctors never mentioned. The simple act of sharing my story and reading others' journeys reminded me that I'm not alone in this fight. On my darkest days, that connection is sometimes all that gets me through."
                </blockquote>
                <Link to="/patient-stories/jane-doe" className="text-pain-600 hover:underline font-medium inline-flex items-center">
                  Read Jane's full story
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community section with more welcoming language */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <HandHeart className="h-12 w-12 text-pain-600 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with others who truly understand what you're going through. Share your experiences, learn from others, and find comfort in knowing you're not alone on this journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pain-600 hover:bg-pain-700 rounded-full">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pain-600 text-pain-600 hover:bg-pain-50 rounded-full">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
