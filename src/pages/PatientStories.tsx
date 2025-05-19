
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PieceByPiece from "@/components/PieceByPiece";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define TypeScript interfaces for our data structures
interface Condition {
  id: number;
  name: string;
  description: string;
  details: string;
  resources: string[];
}

interface PatientStory {
  id: string;
  name: string;
  condition: string;
  snippet: string;
  date: string;
  image: string;
  initials: string;
}

interface StoryCategories {
  [category: string]: PatientStory[];
}

const PatientStories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);
  
  // Define conditions (from pain-conditions page)
  const conditions: Condition[] = [
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
      name: "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)",
      description: "A serious, long-term illness that affects many body systems, characterized by extreme fatigue that worsens with physical or mental activity.",
      details: "ME/CFS is a complex, multisystem disease characterized by profound fatigue, post-exertional malaise (PEM), cognitive dysfunction, unrefreshing sleep, and orthostatic intolerance. Many patients report that pain is a significant part of their experience, including headaches, muscle pain, joint pain, and widespread pain. The exact cause remains unknown, though theories include viral infections, immune system problems, and genetic factors. ME/CFS can severely impact quality of life, with 25% of patients housebound or bedbound at some point in their illness.",
      resources: ["ME Action Network", "Solve ME/CFS Initiative", "International Association for CFS/ME"]
    },
  ];

  // Group stories by condition type
  const stories: StoryCategories = {
    "Complex Regional Pain Syndrome (CRPS)": [
      {
        id: "jane-doe",
        name: "Jane Doe",
        condition: "Complex Regional Pain Syndrome (CRPS)",
        snippet: "Living with CRPS for 7 years has taught me more about resilience than I ever thought possible. The burning sensation never truly goes away, but I've found ways to adapt my life around it. Through a combination of physical therapy, meditation, and connecting with others who understand this journey, I've created a life that still has meaning despite the pain.",
        date: "April 15, 2025",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "JD"
      },
    ],
    "Fibromyalgia": [
      {
        id: "john-smith",
        name: "John Smith",
        condition: "Fibromyalgia",
        snippet: "My journey with fibromyalgia began suddenly after a period of intense stress at work. What started as occasional muscle aches escalated into a daily battle with widespread pain and fatigue. Before diagnosis, I thought I was simply overworked, but as symptoms persisted, I knew something more serious was happening. Working with specialists has given me tools to manage my symptoms day by day.",
        date: "March 22, 2025",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "JS"
      },
      {
        id: "het",
        name: "Het",
        condition: "Chronic Hand Pain",
        snippet: "Het experienced excruciating pain in his hands that went undiagnosed for years. Every keystroke and movement became a painful reminder of his condition. After consulting with multiple specialists and trying various treatments, Het finally found relief through a combination of ergonomic adjustments, targeted physical therapy, and mind-body practices that acknowledged the connection between his stress levels and pain intensity.",
        date: "May 10, 2025",
        image: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
        initials: "H"
      },
    ],
    "Neurological Pain Conditions": [
      {
        id: "emily-johnson",
        name: "Emily Johnson",
        condition: "Chronic Migraine",
        snippet: "I've had migraines since my teenage years, but they became chronic after college. The pulsating pain, sensitivity to light, and nausea can keep me bedridden for days. I've learned to identify my triggers—certain foods, weather changes, and sleep disruptions. Creating a migraine journal has been crucial in my management plan, along with regular consultations with my neurologist to adjust medications as needed.",
        date: "February 10, 2025",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "EJ"
      },
      {
        id: "michael-brown",
        name: "Michael Brown",
        condition: "Ehlers-Danlos Syndrome",
        snippet: "Being diagnosed with EDS at 35 finally gave me answers to a lifetime of unexplained symptoms. The chronic pain from my hypermobile joints, frequent dislocations, and connective tissue problems affected every aspect of my life. Learning proper bracing techniques, working with physical therapists who understand EDS, and connecting with the EDS community online has provided both practical support and emotional validation I needed for so long.",
        date: "January 5, 2025",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        initials: "MB"
      },
    ],
  };

  // Get corresponding condition for each story category
  const getConditionForCategory = (category: string): Condition | undefined => {
    return conditions.find(condition => condition.name === category) || undefined;
  };

  const filteredStories = Object.fromEntries(
    Object.entries(stories).map(([category, categoryStories]) => [
      category,
      categoryStories.filter(story =>
        story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.snippet.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ]).filter(([_, categoryStories]) => categoryStories.length > 0)
  );

  const toggleExpand = (id: number) => {
    setExpandedCondition(expandedCondition === id ? null : id);
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
          <div className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full bg-cream-300 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-64 h-64 rounded-full bg-softgray-300 blur-3xl"></div>
          <div className="absolute top-[60%] left-[60%] w-96 h-96 rounded-full bg-cream-400 blur-3xl opacity-40"></div>
        </div>
        
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
            
            <AnimatedSection animationType="fade-up" delay={600} className="max-w-md mx-auto mt-8 relative">
              <Input
                type="text"
                placeholder="Search conditions & stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-cream-300 focus:border-cream-500 focus:ring-cream-500"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-cream-500" />
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <div className="container py-12 max-w-6xl">
          <Tabs defaultValue="stories" className="w-full mb-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="stories" className="flex-1">Patient Stories</TabsTrigger>
              <TabsTrigger value="treatments" className="flex-1">Treatments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="stories" className="mt-6">
              {Object.keys(filteredStories).length === 0 ? (
                <AnimatedSection animationType="fade-in" className="text-center p-8 bg-cream-50 rounded-lg">
                  <p className="text-lg text-cream-700">No stories match your search. Please try different terms.</p>
                </AnimatedSection>
              ) : (
                Object.entries(filteredStories).map(([category, categoryStories], categoryIndex) => {
                  const condition = getConditionForCategory(category);
                  
                  return (
                    <AnimatedSection 
                      key={category} 
                      className="mb-24 relative"
                      animationType="fade-up"
                      delay={categoryIndex * 200}
                    >
                      <Card className="border border-cream-200 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md mb-10">
                        <div className="border-b border-cream-100 py-6 px-8 flex justify-between items-center">
                          <h2 className="font-serif text-3xl font-bold text-cream-800">{category}</h2>
                          
                          {condition && (
                            <Collapsible className="w-full max-w-lg">
                              <CollapsibleTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-cream-600 hover:text-cream-800 hover:bg-cream-100"
                                >
                                  {expandedCondition === condition.id ? "Hide Details" : "About This Condition"}
                                </Button>
                              </CollapsibleTrigger>
                              
                              <CollapsibleContent className="mt-4 space-y-3 animate-accordion-down">
                                <div className="bg-cream-50/80 p-4 rounded-lg border border-cream-100">
                                  <p className="text-cream-700 font-medium mb-2">{condition.description}</p>
                                  <p className="text-cream-600 mb-4">{condition.details}</p>
                                  
                                  <div className="mt-4">
                                    <h4 className="font-medium text-cream-800 mb-2">Helpful Resources:</h4>
                                    <ul className="list-disc pl-5 space-y-1">
                                      {condition.resources.map((resource, idx) => (
                                        <li key={idx} className="text-cream-600">{resource}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          )}
                        </div>
                        
                        <div className="p-8">
                          <div className="relative min-h-[520px]">
                            <PieceByPiece 
                              className="relative w-full"
                              staggerDelay={300}
                              baseDelay={100}
                              animationType="fade-in"
                            >
                              {categoryStories.map((story, index) => {
                                // Create a more organic scattered effect with varied positioning
                                const positions = [
                                  "top-[5%] left-[15%] rotate-[-2deg]",
                                  "top-[15%] right-[20%] rotate-[1deg]",
                                  "bottom-[10%] left-[25%] rotate-[2deg]",
                                  "bottom-[5%] right-[15%] rotate-[-1deg]",
                                  "top-[40%] left-[50%] translate-x-[-50%] rotate-[1deg]",
                                ];
                                
                                const position = positions[index % positions.length];
                                
                                return (
                                  <div 
                                    key={story.id}
                                    className={`absolute ${position} transform hover:-translate-y-3 hover:rotate-0 transition-all duration-500`}
                                  >
                                    <Popover 
                                      open={openPopoverId === story.id} 
                                      onOpenChange={(open) => {
                                        if (open) {
                                          setOpenPopoverId(story.id);
                                        } else if (openPopoverId === story.id) {
                                          setOpenPopoverId(null);
                                        }
                                      }}
                                    >
                                      <div className="text-center relative">
                                        <PopoverTrigger asChild>
                                          <div 
                                            className="relative cursor-pointer"
                                            onMouseEnter={() => setOpenPopoverId(story.id)}
                                            onMouseLeave={() => setOpenPopoverId(null)}
                                          >
                                            <Avatar className="w-52 h-52 border-4 border-white mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                                              <AvatarImage src={story.image} alt={story.name} className="object-cover" />
                                              <AvatarFallback className="text-3xl bg-cream-100 text-cream-700">{story.initials}</AvatarFallback>
                                            </Avatar>
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                          </div>
                                        </PopoverTrigger>

                                        <Link to={`/patient-stories/${story.id}`} className="group cursor-pointer block mt-4">
                                          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md border border-cream-100 transform group-hover:translate-y-1 transition-transform">
                                            <p className="font-medium text-lg text-cream-800">{story.name}</p>
                                          </div>
                                        </Link>

                                        <PopoverContent 
                                          className="w-96 p-6 z-50 backdrop-blur-lg bg-white/95 border border-cream-200 shadow-xl rounded-xl" 
                                          side="bottom" 
                                          align="center" 
                                          sideOffset={20}
                                        >
                                          <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                              <Avatar className="w-14 h-14 border-2 border-cream-200">
                                                <AvatarImage src={story.image} alt={story.name} />
                                                <AvatarFallback className="text-lg">{story.initials}</AvatarFallback>
                                              </Avatar>
                                              <div>
                                                <h3 className="font-serif font-medium text-xl text-cream-900">{story.name}</h3>
                                                <p className="text-sm font-medium text-muted-foreground">{story.condition}</p>
                                              </div>
                                            </div>
                                            <p className="text-cream-800 leading-relaxed italic border-l-4 border-cream-200 pl-4 py-1">{story.snippet}</p>
                                            <div className="flex justify-between items-center pt-2">
                                              <p className="text-xs text-muted-foreground">{story.date}</p>
                                              <Link 
                                                to={`/patient-stories/${story.id}`}
                                                className="text-sm font-medium text-cream-700 hover:text-cream-900 inline-flex items-center group"
                                              >
                                                Read full story
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover:translate-x-1">
                                                  <path d="M5 12h14"></path>
                                                  <path d="m12 5 7 7-7 7"></path>
                                                </svg>
                                              </Link>
                                            </div>
                                          </div>
                                        </PopoverContent>
                                      </div>
                                    </Popover>
                                  </div>
                                );
                              })}
                            </PieceByPiece>
                          </div>
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })
              )}
            </TabsContent>
            
            <TabsContent value="treatments" className="mt-6">
              <PieceByPiece 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                staggerDelay={150}
                animationType="fade-up"
              >
                <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-serif text-cream-800">Physical Therapy</CardTitle>
                    <CardDescription className="text-cream-600">
                      Targeted exercises to improve strength, flexibility and mobility for pain reduction.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream-700">
                      Physical therapy focuses on specific movement patterns and exercises designed to address 
                      the underlying causes of chronic pain conditions. Therapists work with patients to develop
                      personalized programs that gradually build tolerance and improve function.
                    </p>
                    <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-serif text-cream-800">Pain Management Techniques</CardTitle>
                    <CardDescription className="text-cream-600">
                      Multimodal approaches combining medication, therapy, and lifestyle adjustments.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream-700">
                      Comprehensive pain management involves coordinated care from specialists who understand
                      the complex nature of chronic pain. Treatment plans typically incorporate medication management,
                      interventional procedures, psychological support, and complementary therapies.
                    </p>
                    <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-serif text-cream-800">Mind-Body Approaches</CardTitle>
                    <CardDescription className="text-cream-600">
                      Meditation, mindfulness, and cognitive behavioral therapy for pain relief.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream-700">
                      Mind-body techniques help patients develop awareness of the connection between thoughts,
                      emotions, and physical sensations. Research shows these approaches can significantly reduce
                      pain intensity and improve quality of life by addressing the psychological aspects of pain.
                    </p>
                    <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-serif text-cream-800">Emerging Treatments</CardTitle>
                    <CardDescription className="text-cream-600">
                      New technologies and research-backed approaches for chronic pain conditions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream-700">
                      The field of pain management continues to evolve with innovative treatments including
                      neuromodulation, regenerative medicine, and targeted drug delivery systems. These cutting-edge
                      approaches offer hope for patients who haven't responded to conventional therapies.
                    </p>
                    <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </PieceByPiece>
            </TabsContent>
          </Tabs>
          
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
        </div>
      </div>
    </Layout>
  );
};

export default PatientStories;
