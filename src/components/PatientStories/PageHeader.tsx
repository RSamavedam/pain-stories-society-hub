
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface PageHeaderProps {
  children?: React.ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <AnimatedSection 
      className="bg-gradient-to-b from-cream-100/90 to-cream-50/60 py-16 backdrop-blur-sm"
      animationType="fade-in"
      duration={800}
    >
      <div className="container max-w-6xl">
        <AnimatedSection animationType="fade-up" delay={200} className="mb-6">
          <h1 className="font-serif text-5xl font-bold text-center bg-gradient-to-r from-cream-900 to-cream-700 bg-clip-text text-transparent">Patient Stories</h1>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-up" delay={400}>
          <p className="text-xl text-center max-w-3xl mx-auto text-muted-foreground">
            Real experiences from people living with chronic pain conditions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cream-400 to-cream-600 mx-auto my-6 rounded-full"></div>
        </AnimatedSection>
        
        {children}
      </div>
    </AnimatedSection>
  );
};

export default PageHeader;
