
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";
import { getTreatmentsByCategory } from "@/data/treatmentsData";

const Treatments = () => {
  const medications = getTreatmentsByCategory("medications");
  const therapies = getTreatmentsByCategory("therapies");
  const procedures = getTreatmentsByCategory("procedures");

  return (
    <Layout>
      <AnimatedSection 
        className="bg-cream-100/70 py-12"
        animationType="fade-in"
        duration={800}
      >
        <div className="container">
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="font-serif text-4xl font-bold text-center mb-4 text-brown">Treatments</h1>
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
                {medications.map((treatment) => (
                  <Card key={treatment.id} className="border-cream-200">
                    <CardHeader>
                      <CardTitle className="font-serif">{treatment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{treatment.description}</CardDescription>
                      {treatment.details && (
                        <p className="mt-3 text-sm text-cream-700">{treatment.details}</p>
                      )}
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
                {therapies.map((treatment) => (
                  <Card key={treatment.id} className="border-cream-200">
                    <CardHeader>
                      <CardTitle className="font-serif">{treatment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{treatment.description}</CardDescription>
                      {treatment.details && (
                        <p className="mt-3 text-sm text-cream-700">{treatment.details}</p>
                      )}
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
                {procedures.map((treatment) => (
                  <Card key={treatment.id} className="border-cream-200">
                    <CardHeader>
                      <CardTitle className="font-serif">{treatment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{treatment.description}</CardDescription>
                      {treatment.details && (
                        <p className="mt-3 text-sm text-cream-700">{treatment.details}</p>
                      )}
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
