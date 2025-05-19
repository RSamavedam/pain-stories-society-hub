
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
      initials: "JD",
      content: [
        {
          type: "text",
          content: "Living with CRPS for 7 years has taught me more about resilience than I ever thought possible. The burning sensation never truly goes away, but I've found ways to adapt my life around it. Through a combination of physical therapy, meditation, and connecting with others who understand this journey, I've created a life that still has meaning despite the pain."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          caption: "My meditation space where I practice mindfulness daily to manage pain"
        },
        {
          type: "text",
          content: "When I was first diagnosed with CRPS, I struggled to find information and support. The constant burning, stabbing sensations in my leg after a minor surgery were dismissed by several doctors before I finally received a proper diagnosis. By that time, the condition had progressed significantly."
        },
        {
          type: "text",
          content: "Physical therapy has been a cornerstone of my treatment plan. Initially, even the lightest touch on my affected leg would send waves of agony through my body. I worked with a specialized physical therapist who understood CRPS and started with mirror therapy and gradually introduced desensitization techniques."
        },
        {
          type: "youtube",
          videoId: "dQw4w9WgXcQ",
          caption: "This video explains the mirror therapy technique that helped me significantly"
        },
        {
          type: "text",
          content: "Connecting with a support group changed everything for me. Being surrounded by people who truly understood what I was going through validated my experiences and provided practical advice that doctors couldn't offer. We share coping mechanisms, treatment updates, and simply provide a space to vent when the pain becomes overwhelming."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          caption: "Our monthly support group meeting where we share stories and strategies"
        },
        {
          type: "text",
          content: "While CRPS has certainly changed the trajectory of my life, it hasn't defined it. I've learned to celebrate small victories and find joy in new hobbies that accommodate my limitations. I hope by sharing my story, others with CRPS will feel less alone and more empowered to advocate for their care."
        }
      ]
    },
    {
      id: "robert-harris",
      name: "Robert Harris",
      condition: "Complex Regional Pain Syndrome (CRPS)",
      snippet: "After a workplace accident damaged nerves in my right arm, I developed CRPS. The pain was unlike anything I'd experienced before – burning, stabbing, and constant. Through specialized pain management programs and finding support in online communities, I've learned to pace myself and recognize my limits while still maintaining my passion for woodworking using adaptive tools.",
      date: "March 3, 2025",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      initials: "RH",
      content: [
        {
          type: "text",
          content: "After a workplace accident damaged nerves in my right arm, I developed CRPS. The pain was unlike anything I'd experienced before – burning, stabbing, and constant. Through specialized pain management programs and finding support in online communities, I've learned to pace myself and recognize my limits while still maintaining my passion for woodworking using adaptive tools."
        },
        {
          type: "youtube",
          videoId: "dQw4w9WgXcQ",
          caption: "My story of adapting woodworking techniques with CRPS"
        },
        {
          type: "text",
          content: "Before my accident, I was a professional carpenter who took pride in creating custom furniture with my hands. The injury seemed minor at first - just a deep cut that required stitches. But weeks later, instead of healing, the pain intensified and spread throughout my entire arm."
        },
        {
          type: "text",
          content: "The diagnosis of CRPS came after months of confusion and frustration. My arm had become hypersensitive, with even the slightest breeze causing excruciating pain. The skin color and temperature would change drastically, and the swelling made it difficult to use my dominant hand for even the simplest tasks."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          caption: "The adaptive tools that allow me to continue working with wood"
        },
        {
          type: "text",
          content: "What helped me most was finding a comprehensive pain management program that combined medication, physical therapy, psychological support, and occupational therapy. The occupational therapist worked with me to develop adaptive tools that would allow me to continue woodworking with my limitations."
        },
        {
          type: "text",
          content: "Today, I run an online shop selling custom wooden items made with my adaptive tools. I've had to adjust my expectations and work at a slower pace, but maintaining this connection to my craft has been essential for my mental health during this journey with chronic pain."
        }
      ]
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
      initials: "JS",
      content: [
        {
          type: "text",
          content: "My journey with fibromyalgia began suddenly after a period of intense stress at work. What started as occasional muscle aches escalated into a daily battle with widespread pain and fatigue. Before diagnosis, I thought I was simply overworked, but as symptoms persisted, I knew something more serious was happening."
        },
        {
          type: "text",
          content: "The frustrating part of fibromyalgia is that you look completely normal from the outside. Friends, family, and even some healthcare providers questioned the validity of my symptoms. 'But you don't look sick' became a phrase I dreaded hearing. The invisible nature of fibromyalgia adds another layer of challenges to an already difficult condition."
        },
        {
          type: "youtube",
          videoId: "dQw4w9WgXcQ",
          caption: "This video helped me explain fibromyalgia to my family members"
        },
        {
          type: "text",
          content: "Finding the right doctor changed everything for me. After being dismissed by several physicians, I finally connected with a rheumatologist who specialized in fibromyalgia. She validated my experiences and worked with me to develop a comprehensive management plan that addressed not just the pain but also the sleep disturbances, cognitive fog, and fatigue that came with it."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          caption: "My home office setup with ergonomic adjustments that help me continue working"
        },
        {
          type: "text",
          content: "Today, I manage my fibromyalgia through a combination of medication, gentle exercise, stress management techniques, and careful pacing. I've had to make significant lifestyle changes, including reducing my work hours and saying no to certain social commitments. But these adjustments have allowed me to regain some quality of life."
        },
        {
          type: "text",
          content: "If you're reading this and are newly diagnosed with fibromyalgia, please know that while the road isn't easy, finding the right support system and treatment approach can make a tremendous difference. Don't give up on finding what works for you."
        }
      ]
    },
    {
      id: "het",
      name: "Het",
      condition: "Chronic Hand Pain",
      snippet: "Het experienced excruciating pain in his hands that went undiagnosed for years. Every keystroke and movement became a painful reminder of his condition. After consulting with multiple specialists and trying various treatments, Het finally found relief through a combination of ergonomic adjustments, targeted physical therapy, and mind-body practices that acknowledged the connection between his stress levels and pain intensity.",
      date: "May 10, 2025",
      image: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
      initials: "H",
      content: [
        {
          type: "text",
          content: "Het experienced excruciating pain in his hands that went undiagnosed for years. Every keystroke and movement became a painful reminder of his condition. After consulting with multiple specialists and trying various treatments, Het finally found relief through a combination of ergonomic adjustments, targeted physical therapy, and mind-body practices that acknowledged the connection between his stress levels and pain intensity."
        },
        {
          type: "image",
          url: "/lovable-uploads/723aa5ad-402e-426d-9044-bdc0e7e62302.png",
          caption: "My journey through chronic pain led me to explore alternative treatments"
        },
        {
          type: "text",
          content: "As a software engineer, my hands are my primary tools. When the pain first started, I ignored it, assuming it was just temporary discomfort from long coding sessions. But as months passed, the pain intensified to the point where I couldn't type for more than a few minutes without experiencing shooting pains throughout my fingers and wrists."
        },
        {
          type: "youtube",
          videoId: "dQw4w9WgXcQ",
          caption: "The ergonomic exercises that helped reduce my hand pain"
        },
        {
          type: "text",
          content: "The diagnostic journey was frustrating. Tests for carpal tunnel syndrome came back negative. X-rays and MRIs showed no structural abnormalities. Some doctors suggested it was purely psychological, which was disheartening when I knew the pain was very real."
        },
        {
          type: "text",
          content: "A breakthrough came when I consulted with a specialist in work-related musculoskeletal disorders. She recognized the complex interplay between physical strain, nervous system sensitization, and stress in my condition. Together, we developed a multifaceted approach that included specialized hand therapy, ergonomic workplace modifications, and mindfulness practices."
        },
        {
          type: "text",
          content: "Today, I still experience flare-ups, especially during high-stress periods or when I push myself too hard. But I have the tools to manage these episodes and prevent them from derailing my life and career. I've become an advocate for workplace ergonomics in the tech industry and regularly share my experience to help others who might be silently suffering with similar symptoms."
        }
      ]
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
      initials: "DW",
      content: [
        {
          type: "text",
          content: "Before ME/CFS, I was a high-energy software developer who loved hiking on weekends. Now, even small tasks require careful energy management. The post-exertional malaise – where even minimal physical or mental exertion leads to debilitating crashes – has been the hardest symptom to explain to others."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          caption: "My current work setup that allows me to code while lying down during flare-ups"
        },
        {
          type: "text",
          content: "My ME/CFS journey began after what seemed like a standard flu. Weeks passed, but instead of recovering, I found myself getting increasingly exhausted. Simple tasks like showering or preparing a meal would leave me bed-bound for hours. The cognitive impairment – what we call 'brain fog' – made programming, once my greatest joy, nearly impossible on bad days."
        },
        {
          type: "youtube",
          videoId: "dQw4w9WgXcQ",
          caption: "This documentary helped my family understand ME/CFS"
        },
        {
          type: "text",
          content: "The most challenging aspect of this condition is its invisibility and the misconceptions surrounding it. Many people, including some healthcare providers, still believe it's 'just being tired' or that we could recover if we just exercised more – when in reality, pushing beyond our energy envelope causes severe relapses that can last for weeks or months."
        },
        {
          type: "text",
          content: "Energy management through pacing has been my primary tool for stabilizing my condition. I use a heart rate monitor to ensure I don't exceed my anaerobic threshold, which helps prevent post-exertional malaise. I've had to become extremely intentional about how I spend my limited energy, prioritizing what matters most each day."
        },
        {
          type: "text",
          content: "While I've had to release my former identity and many activities I loved, I've found new ways to find meaning. I mentor junior developers through online platforms, which I can do at my own pace. I've discovered adaptive hobbies that work within my limitations. Most importantly, I've found a community of fellow ME/CFS patients who truly understand the unique challenges we face."
        }
      ]
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
