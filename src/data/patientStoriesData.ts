
import { Condition, StoryCategories } from "@/types/PatientStories";

// Define conditions
export const conditions: Condition[] = [
  {
    id: 1,
    name: "Complex Regional Pain Syndrome (CRPS)",
    description: "A rare and poorly understood chronic pain condition that usually affects an arm or leg after an injury or surgery.",
    details: "CRPS is characterized by prolonged or excessive pain and changes in skin color, temperature, and swelling. The pain may spread beyond the affected limb and can sometimes migrate to the opposite limb. People with CRPS have a heightened sensitivity to touch and even normal contact can be extremely painful.",
    resources: ["CRPS Warriors Foundation", "RSDSA - Reflex Sympathetic Dystrophy Association", "Fight the Flame Foundation"]
  },
  {
    id: 2,
    name: "Fibromyalgia",
    description: "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.",
    details: "Researchers believe fibromyalgia amplifies painful sensations by affecting the way your brain and spinal cord process painful and nonpainful signals. Symptoms often begin after physical trauma, surgery, infection, or significant psychological stress. Women are more likely to develop fibromyalgia than men.",
    resources: ["National Fibromyalgia Association", "Fibromyalgia Fund", "Support Fibromyalgia"]
  },
  {
    id: 3,
    name: "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)",
    description: "A serious, long-term illness that affects many body systems, characterized by extreme fatigue that worsens with physical or mental activity.",
    details: "ME/CFS is a complex, multisystem disease characterized by profound fatigue, post-exertional malaise (PEM), cognitive dysfunction, unrefreshing sleep, and orthostatic intolerance. Many patients report that pain is a significant part of their experience, including headaches, muscle pain, joint pain, and widespread pain. The exact cause remains unknown, though theories include viral infections, immune system problems, and genetic factors. ME/CFS can severely impact quality of life, with 25% of patients housebound or bedbound at some point in their illness.",
    resources: ["ME/CFS Research Foundation", "Solve ME/CFS Initiative", "ME/CFS Research Initiative"]
  },
];

// Group stories by condition type
export const stories: StoryCategories = {
  "Complex Regional Pain Syndrome (CRPS)": [
    {
      id: "het",
      name: "Het",
      condition: "CRPS (Hand Pain)",
      snippet: "Het experienced excruciating pain in his hands. As a result, he went to a local orthopedic specialist who gave him some pain killers. When those medications didn't help, he was recommended to a rheumatologist who have anti-inflammatory medications and steroids as he was diagnosed with rheumatoid arthritis. Finally, when no doctor could figure out what was wrong, he was diagnosed with having a mental disability because everything seemed to be normal physically.",
      date: "October 10, 2024",
      image: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
      initials: "H",
      content: [
        {
          type: "image",
          url: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
          caption: "Meet Het: He has now fully recovered from CRPS"
        },
        {
          type: "text",
          content: "Meet Het."
        },
        {
          type: "text",
          content: "When Het was 15 years old, he experienced excruciating pain in his hands. As a result, he went to a local orthopedic specialist who gave him some pain killers. When those medications didn’t help, he was recommended to a rheumatologist who have anti-inflammatory medications and steroids as he was diagnosed with rheumatoid arthritis. Throughout this process he had been hospitalized 3 to 4 times. Even just a touch of a feather would cause an unbelievable amount of pain. Finally, when no doctor could figure out what was wrong, he was diagnosed with having a mental disability because everything seemed to be normal physically."
        },
        {
          type: "text",
          content: "“I was tired, I wasn’t getting a diagnosis ….  Doctors even told my parents I am going to die in 3 to 4 months [because they could not figure out what was wrong]” - Het"
        },
        {
          type: "text",
          content: "After a couple of months, his pain started spreading and he was given neural blocks to provide temporary anesthetic relief at the sites of his pain. When these blocks temporarily worked, he was finally given the diagnosis of having CRPS."
        },
        {
          type: "text",
          content: "With the diagnosis, he went to through six-seven different physical therapists until he finally found the one who could correctly treat his condition."
        },
        {
          type: "text",
          content: "Now, Het is a _____ year old doing_____."
        },
        {
          type: "text",
          content: "With a diagnosis and slight increase in the knowledge of CRPS, he now says that at least he is grateful that he can go to a doctor and at least they understand the symptoms and can understand what symptoms he had."
        },
        {
          type: "text",
          content: "His advice: “[Patients] need to be mentally strong” through the whole process. During this time when he was in school, he was even called “the medical case” as children would not understand his condition and label him. He also gained an inexplicable amount of weight due to unnecessary drugs. He hopes others can learn from his story of how to seek ought the right care and to never lose hope."
        },
        {
          type: "text",
          content: "Watch some crucial moments of his interview below:"
        }
      ]
    },
  ],
  "Fibromyalgia": [
    
  ],
  "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)": [
    
  ],
};
