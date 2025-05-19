
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";

const Treatments = () => {
  const medications = [
    { name: "Antidepressants", description: "Certain antidepressants can help relieve chronic pain by influencing how the brain processes pain signals." },
    { name: "Anti-seizure medications", description: "These can help treat nerve pain by calming overactive nerves." },
    { name: "Pain relievers", description: "Various options from over-the-counter NSAIDs to prescription opioids for severe pain." },
    { name: "Topical treatments", description: "Creams, gels, or patches applied directly to the skin for localized pain relief." },
  ];

  const therapies = [
    { name: "Physical therapy", description: "Exercises and treatments to improve movement and function impaired by pain or disability." },
    { name: "Occupational therapy", description: "Helps maintain or recover the ability to perform daily activities affected by pain." },
    { name: "Cognitive behavioral therapy", description: "A psychological approach that helps change thought patterns associated with pain." },
    { name: "Relaxation techniques", description: "Methods like deep breathing, meditation, and mindfulness to reduce stress and pain." },
  ];

  const procedures = [
    { name: "Nerve blocks", description: "Injections that block pain signals from specific nerves." },
    { name: "Spinal cord stimulation", description: "Electrical impulses applied to the spinal cord to modify pain signals." },
    { name: "TENS therapy", description: "Low-voltage electrical currents to relieve pain." },
    { name: "Acupuncture", description: "An ancient Chinese practice involving the insertion of thin needles into specific body points." },
  ];

  return (
    <Layout>
      <AnimatedSection 
        className="bg-cream-100/70 py-12"
        animationType="fade-in"
        duration={800}
      >
        <div className="container">
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="font-serif text-4xl font-bold text-center mb-4">Treatments</h1>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
              Explore different approaches to managing chronic pain conditions.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <div className="container py-12">
        <AnimatedSection animationType="fade-up" delay={300}>
          <Tabs defaultValue="medications" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="therapies">Therapies</TabsTrigger>
              <TabsTrigger value="procedures">Procedures</TabsTrigger>
            </TabsList>
            
            <TabsContent value="medications">
              <PieceByPiece
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                staggerDelay={150}
                animationType="fade-up"
              >
                {medications.map((item, index) => (
                  <Card key={index} className="border-cream-200">
                    <CardHeader>
                      <CardTitle className="font-serif">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </PieceByPiece>
            </TabsContent>
            
            <TabsContent value="therapies">
              <PieceByPiece
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                staggerDelay={150}
                animationType="fade-up"
              >
                {therapies.map((item, index) => (
                  <Card key={index} className="border-cream-200">
                    <CardHeader>
                      <CardTitle className="font-serif">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </PieceByPiece>
            </TabsContent>
            
            <TabsContent value="procedures">
              <PieceByPiece
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                staggerDelay={150}
                animationType="fade-up"
              >
                {procedures.map((item, index) => (
                  <Card key={index} className="border-cream-200">
                    <CardHeader>
                      <CardTitle className="font-serif">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </PieceByPiece>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
        
        <AnimatedSection 
          className="mt-12 text-center" 
          animationType="fade-up"
          delay={600}
        >
          <p className="text-muted-foreground italic">
            This information is provided for educational purposes only and should not replace professional medical advice.
            Always consult with your healthcare provider before starting any new treatment.
          </p>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Treatments;
