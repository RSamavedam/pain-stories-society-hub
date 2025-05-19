
import { Condition, StoryCategories } from "@/types/PatientStories";

// Define conditions
export const conditions: Condition[] = [
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
export const stories: StoryCategories = {
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
