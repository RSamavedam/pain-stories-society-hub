
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";

const PainConditions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);
  
  const conditions = [
    {
      id: 1,
      name: "Complex Regional Pain Syndrome (CRPS)",
      description: "A rare and poorly understood chronic pain condition that usually affects an arm or leg after an injury or surgery.",
      details: "CRPS is characterized by prolonged or excessive pain and changes in skin color, temperature, and swelling. The pain may spread beyond the affected limb and can sometimes migrate to the opposite limb. People with CRPS have a heightened sensitivity to touch and even normal contact can be extremely painful.",
      resources: ["American CRPS Foundation", "RSDSA - Reflex Sympathetic Dystrophy Association", "CRPS Support Groups"]
    },
    {
      id: 2,
      name: "Fibromyalgia",
      description: "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.",
      details: "Researchers believe fibromyalgia amplifies painful sensations by affecting the way your brain and spinal cord process painful and nonpainful signals. Symptoms often begin after physical trauma, surgery, infection, or significant psychological stress. Women are more likely to develop fibromyalgia than men.",
      resources: ["National Fibromyalgia Association", "Fibromyalgia Coalition", "Fibro Community Support"]
    },
    {
      id: 3,
      name: "Trigeminal Neuralgia",
      description: "A chronic pain condition that affects the trigeminal nerve, which carries sensation from your face to your brain.",
      details: "Trigeminal neuralgia causes extreme, sporadic, sudden burning or shock-like face pain that can last from a few seconds to about 2 minutes per episode. These attacks can occur in quick succession. The intensity of pain can be physically and mentally incapacitating, often described as some of the most severe pain known to humanity.",
      resources: ["TNA - The Facial Pain Association", "Trigeminal Neuralgia Support", "Face Pain Research Foundation"]
    },
    {
      id: 4,
      name: "Ehlers-Danlos Syndromes",
      description: "A group of disorders that affect connective tissues supporting the skin, bones, blood vessels, and many other organs and tissues.",
      details: "People with Ehlers-Danlos syndromes usually have overly flexible joints and stretchy, fragile skin. This can lead to chronic pain, frequent dislocations, and early-onset osteoarthritis. Some forms of the condition can also affect blood vessels, potentially leading to serious complications.",
      resources: ["Ehlers-Danlos Society", "EDS Wellness", "Hypermobility Connect"]
    },
    {
      id: 5,
      name: "Chronic Migraine",
      description: "Headaches that occur 15 or more days a month for more than 3 months, with migrainous features on at least 8 days per month.",
      details: "Chronic migraines cause intense pulsing or throbbing pain, often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. They significantly impact quality of life and ability to perform daily activities. Many sufferers report feeling isolated or misunderstood due to the invisible nature of their condition.",
      resources: ["American Migraine Foundation", "National Headache Foundation", "Migraine Trust"]
    },
    {
      id: 6,
      name: "Postherpetic Neuralgia",
      description: "A complication of shingles, which is caused by the chickenpox (herpes zoster) virus. The condition affects nerve fibers and skin.",
      details: "Postherpetic neuralgia occurs when damaged nerve fibers send confused and exaggerated messages of pain from your skin to your brain. The pain is often described as burning, stabbing, or shooting, and can persist for months or even years after the shingles rash has healed.",
      resources: ["Shingles Support Society", "PHN Pain Alliance", "Neuralgia Association"]
    },
  ];

  const filteredConditions = conditions.filter(condition =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: number) => {
    setExpandedCondition(expandedCondition === id ? null : id);
  };

  return (
    <Layout>
      <AnimatedSection 
        className="bg-pain-50 py-12"
        animationType="fade-in"
        duration={800}
      >
        <div className="container">
          <AnimatedSection animationType="fade-up" delay={200} className="mb-4">
            <h1 className="font-serif text-4xl font-bold text-center text-pain-800">Pain Conditions</h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg text-center max-w-3xl mx-auto text-pain-700">
              Learn about various chronic pain conditions, their symptoms, and how they impact daily life.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={600} className="max-w-md mx-auto mt-8 relative">
            <Input
              type="text"
              placeholder="Search conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-pain-300 focus:border-pain-500 focus:ring-pain-500"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-pain-500" />
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <div className="container py-12">
        {filteredConditions.length === 0 ? (
          <AnimatedSection animationType="fade-in" className="text-center p-8 bg-pain-50 rounded-lg">
            <p className="text-lg text-pain-700">No conditions match your search. Please try different terms.</p>
          </AnimatedSection>
        ) : (
          <PieceByPiece 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={150}
            animationType="fade-up"
          >
            {filteredConditions.map((condition) => (
              <Card 
                key={condition.id} 
                className={`border-pain-200 transition-all duration-300 hover:shadow-md ${
                  expandedCondition === condition.id ? "bg-pain-50" : "bg-white"
                }`}
              >
                <CardHeader className="cursor-pointer" onClick={() => toggleExpand(condition.id)}>
                  <CardTitle className="font-serif text-pain-800 flex justify-between items-center">
                    {condition.name}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-pain-600 hover:text-pain-800 hover:bg-pain-100"
                    >
                      {expandedCondition === condition.id ? "Show Less" : "Read More"}
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-pain-600">{condition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {expandedCondition === condition.id && (
                    <div className="animate-fade-in space-y-4">
                      <p className="text-pain-700">{condition.details}</p>
                      <div className="mt-4">
                        <h4 className="font-medium text-pain-800 mb-2">Helpful Resources:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {condition.resources.map((resource, idx) => (
                            <li key={idx} className="text-pain-600">{resource}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button 
                          className="bg-pain-600 hover:bg-pain-700 text-white"
                          size="sm"
                        >
                          Find Support
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-pain-600 text-pain-600 hover:bg-pain-50"
                        >
                          Share Your Experience
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </PieceByPiece>
        )}
        
        <AnimatedSection animationType="fade-up" delay={500} className="mt-12 text-center">
          <p className="text-pain-600 italic">
            This information is provided for educational purposes only and should not replace professional medical advice.
          </p>
          <div className="mt-8">
            <Button className="bg-pain-600 hover:bg-pain-700">
              Connect with Others
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default PainConditions;
