import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/teamData";

const About = () => {
  return (
    <Layout>
      <AnimatedSection 
        className="bg-cream-100/70 py-12"
        animationType="fade-in"
        duration={800}
      >
        <div className="container">
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="font-serif text-4xl font-bold text-center mb-4 text-brown">About Us</h1>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
              Learn about our mission, team, and commitment to this community.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection 
            className="flex items-center justify-center mb-8" 
            animationType="scale-up"
            delay={200}
          >
            <Heart className="h-12 w-12 text-cream-600 mr-3" />
            <h2 className="font-serif text-3xl font-bold text-brown">Our Mission</h2>
          </AnimatedSection>
          
          <AnimatedSection className="prose prose-lg max-w-none mb-16" animationType="fade-up" delay={400}>
            <p>
              Welcome to our non-profit organization page dedicated to raising awareness and providing for individuals affected by Rare Pain Conditions. Founded by Adyant Shankar, a Stanford Masters student who experienced the challenges of misdiagnosis and suffered through CRPS, and Trupti Berde, a renowned pediatric physical therapist in Mumbai, India, our mission is to educate the community about these conditions.
            </p>
            <p>
              We strive to empower those living with rare pain conditions through advocacy and collaboration with healthcare professionals. Together, we aim to improve the lives of those impacted by such syndromes.
            </p>
            <p>
              Our work is guided by three core principles:
            </p>
            <ul>
              <li><strong>Information:</strong> Providing evidence-based, accessible information about rare pain conditions, treatments, and coping strategies.</li>
              <li><strong>Stories:</strong> Amplifying the voices and experiences of people living with rare pain to foster understanding and reduce isolation.</li>
              <li><strong>Hope:</strong> Cultivating a supportive community that empowers individuals to advocate for better care and find ways to thrive despite pain challenges.</li>
            </ul>
          </AnimatedSection>
          
          <AnimatedSection className="mb-8" animationType="fade-up" delay={300}>
            <h2 className="font-serif text-3xl font-bold text-center text-brown">Our Team</h2>
          </AnimatedSection>
          
          <PieceByPiece 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            staggerDelay={150}
            baseDelay={200}
            animationType="fade-up"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                initials={member.initials}
              />
            ))}
          </PieceByPiece>
          
          <AnimatedSection className="mb-8" animationType="fade-up" delay={300}>
            <h2 className="font-serif text-3xl font-bold text-center text-brown">Our Values</h2>
          </AnimatedSection>
          
          <PieceByPiece 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={150}
            baseDelay={200}
            animationType="scale-up"
          >
            <div className="text-center p-6">
              <div className="rounded-full bg-cream-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream-600">
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Compassion</h3>
              <p className="text-muted-foreground">We approach every interaction with empathy and understanding for the unique challenges of living with rare pain conditions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="rounded-full bg-cream-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream-600">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Excellence</h3>
              <p className="text-muted-foreground">We commit to providing accurate, up-to-date information and continuously improving our resources and community support.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="rounded-full bg-cream-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream-600">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Inclusion</h3>
              <p className="text-muted-foreground">We value diverse experiences and perspectives, and work to ensure our community is accessible and welcoming to all.</p>
            </div>
          </PieceByPiece>
        </div>
      </div>
    </Layout>
  );
};

export default About;
