
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Book, Pill, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-pain-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-pain-900 mb-4">
              Information. Stories. Hope.
            </h1>
            <p className="text-lg md:text-xl text-pain-800 mb-8">
              Spreading knowledge about rare pain conditions - because informed care starts with informed patients
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Pain Relief Society aims to increase awareness and understanding of chronic pain conditions by sharing accessible knowledge, amplifying patient stories, and fostering collaborative initiatives between patients, caregivers, and healthcare professionals. We believe that visibility, education, and connection are essential steps toward better care and compassionate support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pain-600 hover:bg-pain-700">
                <Link to="/patient-stories">Read Patient Stories</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pain-600 text-pain-600 hover:bg-pain-50">
                <Link to="/pain-conditions">Learn About Conditions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured content section */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-pain-100">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pain-50 p-3">
                    <Book className="h-6 w-6 text-pain-600" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Pain Conditions</h3>
                <p className="text-muted-foreground mb-4">
                  Find detailed information about various chronic pain conditions, symptoms, and diagnostic approaches.
                </p>
                <Link to="/pain-conditions" className="text-pain-600 hover:underline font-medium">
                  Learn more
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-pain-100">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pain-50 p-3">
                    <Pill className="h-6 w-6 text-pain-600" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Treatments</h3>
                <p className="text-muted-foreground mb-4">
                  Explore different treatment options, therapies, and management strategies for chronic pain conditions.
                </p>
                <Link to="/treatments" className="text-pain-600 hover:underline font-medium">
                  Learn more
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-pain-100">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pain-50 p-3">
                    <Users className="h-6 w-6 text-pain-600" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Patient Stories</h3>
                <p className="text-muted-foreground mb-4">
                  Read personal accounts from individuals living with chronic pain and learn from their experiences.
                </p>
                <Link to="/patient-stories" className="text-pain-600 hover:underline font-medium">
                  Learn more
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured story section */}
      <section className="py-16 bg-pain-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Featured Patient Story</h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-pain-100 w-12 h-12 flex items-center justify-center">
                    <span className="font-medium text-pain-700">JD</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">Living with CRPS for 7 years</p>
                  </div>
                </div>
                <blockquote className="italic text-lg text-muted-foreground mb-6">
                  "Finding this community changed everything for me. For years, I felt isolated and misunderstood. Learning about others with similar experiences gave me hope and practical strategies that my doctors never mentioned..."
                </blockquote>
                <Link to="/patient-stories/jane-doe" className="text-pain-600 hover:underline font-medium">
                  Read Jane's full story
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-pain-50">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="h-12 w-12 text-pain-600 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with patients, caregivers, and healthcare professionals who understand the challenges of living with chronic pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pain-600 hover:bg-pain-700">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pain-600 text-pain-600 hover:bg-pain-50">
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
