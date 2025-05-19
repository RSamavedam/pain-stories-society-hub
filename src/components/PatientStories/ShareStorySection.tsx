
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const ShareStorySection = () => {
  return (
    <AnimatedSection 
      className="mt-24 text-center relative" 
      animationType="fade-up"
      delay={600}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-40 bg-cream-100/50 blur-3xl rounded-full"></div>
      </div>
      <Card className="max-w-3xl mx-auto border border-cream-200 bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
        <h3 className="font-serif text-2xl font-bold mb-4 text-cream-800">Share Your Story</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Your experience matters. By sharing your story, you help others feel less alone and contribute to a better understanding of chronic pain conditions.
        </p>
        <Button asChild className="bg-cream-600 hover:bg-cream-700 text-white px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all">
          <Link to="/contact">Submit Your Story</Link>
        </Button>
      </Card>
    </AnimatedSection>
  );
};

export default ShareStorySection;
