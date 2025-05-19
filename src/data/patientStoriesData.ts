
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
    {
      id: "robert-harris",
      name: "Robert Harris",
      condition: "Complex Regional Pain Syndrome (CRPS)",
      snippet: "After a workplace accident damaged nerves in my right arm, I developed CRPS. The pain was unlike anything I'd experienced before – burning, stabbing, and constant. Through specialized pain management programs and finding support in online communities, I've learned to pace myself and recognize my limits while still maintaining my passion for woodworking using adaptive tools.",
      date: "March 3, 2025",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "RH"
    },
    {
      id: "sarah-wilson",
      name: "Sarah Wilson",
      condition: "Complex Regional Pain Syndrome (CRPS)",
      snippet: "My journey with CRPS began after a seemingly minor ankle sprain that never healed properly. What followed was years of misdiagnosis before finding a specialist who recognized the telltale signs. Through a combination of ketamine infusions, physical therapy, and mindfulness practices, I've regained some quality of life and now advocate for faster diagnosis for others suffering with similar symptoms.",
      date: "February 12, 2025",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "SW"
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
    {
      id: "lisa-chen",
      name: "Lisa Chen",
      condition: "Fibromyalgia",
      snippet: "As a former marathon runner, being diagnosed with fibromyalgia felt like losing part of my identity. The widespread pain, brain fog, and crushing fatigue forced me to redefine my relationship with movement and achievement. I've learned to appreciate gentle yoga, swimming, and short walks as my new form of exercise, and have discovered the importance of quality rest as part of my treatment plan.",
      date: "April 7, 2025",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "LC"
    },
  ],
  "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)": [
    {
      id: "david-walsh",
      name: "David Walsh",
      condition: "ME/CFS",
      snippet: "Before ME/CFS, I was a high-energy software developer who loved hiking on weekends. Now, even small tasks require careful energy management. The post-exertional malaise – where even minimal physical or mental exertion leads to debilitating crashes – has been the hardest symptom to explain to others. I've learned to pace myself meticulously and have found supportive online communities where I don't need to justify my limitations.",
      date: "January 20, 2025",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "DW"
    },
    {
      id: "sophia-patel",
      name: "Sophia Patel",
      condition: "ME/CFS",
      snippet: "My ME/CFS journey began following a severe viral infection in college. As a former athlete, adjusting to severe energy limitations has been challenging. I've had to become an expert in energy conservation, using techniques like the spoon theory to explain my limitations to others. Finding doctors who understand this condition has been difficult, but I'm grateful for my current healthcare team who validate my experience and focus on improving my quality of life.",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "SP"
    },
    {
      id: "thomas-miller",
      name: "Thomas Miller",
      condition: "ME/CFS",
      snippet: "Living with ME/CFS for the past decade has forced me to redefine my identity and purpose. As a former teacher who loved active classroom engagement, I've had to find new ways to contribute meaningfully while respecting my physical limitations. Through pacing, medication management, and acceptance, I've built a different but still fulfilling life that includes advocacy work and mentoring others newly diagnosed with this complex condition.",
      date: "April 3, 2025",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "TM"
    },
  ],
};
