
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PainConditions = () => {
  const conditions = [
    {
      id: 1,
      name: "Complex Regional Pain Syndrome (CRPS)",
      description: "A rare and poorly understood chronic pain condition that usually affects an arm or leg after an injury or surgery.",
    },
    {
      id: 2,
      name: "Fibromyalgia",
      description: "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.",
    },
    {
      id: 3,
      name: "Trigeminal Neuralgia",
      description: "A chronic pain condition that affects the trigeminal nerve, which carries sensation from your face to your brain.",
    },
    {
      id: 4,
      name: "Ehlers-Danlos Syndromes",
      description: "A group of disorders that affect connective tissues supporting the skin, bones, blood vessels, and many other organs and tissues.",
    },
    {
      id: 5,
      name: "Chronic Migraine",
      description: "Headaches that occur 15 or more days a month for more than 3 months, with migrainous features on at least 8 days per month.",
    },
    {
      id: 6,
      name: "Postherpetic Neuralgia",
      description: "A complication of shingles, which is caused by the chickenpox (herpes zoster) virus. The condition affects nerve fibers and skin.",
    },
  ];

  return (
    <Layout>
      <div className="bg-pain-50 py-12">
        <div className="container">
          <h1 className="font-serif text-4xl font-bold text-center mb-4">Pain Conditions</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
            Learn about various chronic pain conditions, their symptoms, and how they impact daily life.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conditions.map((condition) => (
            <Card key={condition.id} className="border-pain-100">
              <CardHeader>
                <CardTitle className="font-serif">{condition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{condition.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            This information is provided for educational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PainConditions;
