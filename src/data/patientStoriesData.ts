
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
      snippet: "Het experienced excruciating pain in his hands. As a result, he went to a local orthopedic specialist who gave him pain killers. When those medications didn't help, he was recommended to a rheumatologist who gave anti-inflammatory medications and steroids as he was diagnosed with rheumatoid arthritis. Finally, when no doctor could figure out what was wrong, he was diagnosed with having a mental disability because everything seemed to be normal physically.",
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
          content: "When Het was 15 years old, he experienced excruciating pain in his hands. As a result, he went to a local orthopedic specialist who gave him pain killers. When those medications didn’t help, he was recommended to a rheumatologist who gave anti-inflammatory medications and steroids as he was diagnosed with rheumatoid arthritis. Throughout this process he had been hospitalized 3 to 4 times. Even just a touch of a feather would cause an unbelievable amount of pain. Finally, when no doctor could figure out what was wrong, he was diagnosed with having a mental disability because everything seemed to be normal physically."
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
          content: "Now, Het is 23 years old and an investment banker."
        },
        {
          type: "text",
          content: "With the current understanding of CRPS, he now says that he is grateful that he can go to a doctor and at least they understand the symptoms he had."
        },
        {
          type: "text",
          content: "His advice: “[Patients] need to be mentally strong” through the whole process. During this time when he was in school, he was even called “the medical case” as children would not understand his condition and label him. He also gained an inexplicable amount of weight due to unnecessary drugs. He hopes others can learn from his story of how to seek ought the right care and to never lose hope."
        },
        {
          type: "text",
          content: "Watch some crucial moments of his interview below:"
        },
        {
          type: "youtube",
          videoId: "IOQoC6Zotb8",
          caption: "Het's Interview with Us"
        }

      ]
    },
  ],
  "Fibromyalgia": [
    {
      id: "sai",
      name: "Sai",
      condition: "Fibromyalgia",
      snippet: "Sai experienced excruciating pain after a fever broke. She spent 5 years in pain, away from school, scouring with hope for a treatment to her condition.",
      date: "November 3, 2024",
      image: "/lovable-uploads/Sai.jpg",
      initials: "S",
      content: [
        {
          type: "image",
          url: "/lovable-uploads/Sai.jpg",
          caption: "Meet Sai: After 5 years in pain, she has fully recovered and is now workng as a government employee in India."
        },
        {
          type: "text",
          content: "Meet Sai."
        },
        {
          type: "text",
          content: "When Sai broke a fever during her high school year, she had thought that the usual rest and recovery mantra would cure her illness and she would be able to go back to school in a few days without any issues. However, it was during this fever that things took a turn for the worse and Sai and her family realized."
        },
        {
          type: "text",
          content: "As her fever subsided, pain in her arms and legs (a sort of aching pain common during fevers) increased drastically and as she explained “spread across her body.” After 2 months, she consulted doctors in the city of Bangalore, India who assured her that her condition is not of concern and prescribed her with Vitamin D and Calcium tablets, as her levels were low. She had undergone all possible scans and blood tests, as everything came up clear. When nothing seemed to work, she was then prescribed steroids and other allopathic pain-relief medications."
        },
        {
          type: "text",
          content: "After one year of treatment with allopathic pain-relief medications, she visited a doctor who provided her with a Fibromyalgia diagnosis. However, she was told that the condition is chronic and that there will be no treatment given for her; she will need to manage with her condition. Given this response, she transitioned into seeking Ayurvedic treatments in India while her parents scoured through recommendations of doctors throughout India to find a treatment for Sai."
        },
        {
          type: "text",
          content: "Sai had difficulty sleeping with her condition, and even stopped going to school after just 6 months of tolerating the pain. She also started becoming depressed. This pain continued on for almost 5 years; she did not even go to college with such pain. She started to tell herself that this was going to be her life in the long-term. However, after these 5 long years, Sai’s cousin Mahati, who is also featured on this website and underwent treatment with Dr. Berde, recommended Sai to come and meet her. Consequently Sai moved to Mumbai and stayed with her relatives for more than a year in hopes of getting proper treatment with Dr. Berde. After this time undergoing physical therapy with Dr. Berde, Sai’s condition improved and began to slowly be able to perform daily life activities. After more than 5 years of pain and not being able to walk for more than 10 minutes, Dr. Berde’s physical therapy treatment allowed her to start moving pain-free."
        },
        {
          type: "text",
          content: "Now, Sai is extremely happy and living life to the fullest. She was also able to complete her studies and now works in a position in the India government."
        },
        {
          type: "text",
          content: "Watch her interview as she reveals for the first-time all that she went through as a Fibromyalgia patient below:"
        },
        {
          type: "youtube",
          videoId: "A-a__IJIchA",
          caption: "Sai's Interview with Us"
        }

      ]
    },
    {
      id: "mahathi",
      name: "Mahathi",
      condition: "Fibromyalgia",
      snippet: "Mahathi experienced excruciating pain after a fever due to malaria in 2014. While the fever eventually subsided, the body pain that came with it never really went away for years.",
      date: "December 7, 2024",
      image: "/lovable-uploads/Mahathi.jpg",
      initials: "M",
      content: [
        {
          type: "image",
          url: "/lovable-uploads/Mahathi.jpg",
          caption: "Meet Mahathi: She was just 15 when she had severe malaria in 2014. The fever eventually subsided, but the body pain that came with it never really went away."
        },
        {
          type: "text",
          content: "Meet Mahathi."
        },
        {
          type: "text",
          content: "She was just 15 when she had severe malaria in 2014. The fever eventually subsided, but the body pain that came with it never really went away."
        },
        {
          type: "text",
          content: "The pain decreased for a while, but by the end of 2015, it came back. She tried everything—allopathy, Ayurveda—but nothing worked. The pain was so bad she couldn't sit, couldn't sleep, couldn't do any physical work. Even walking was difficult."
        },
        {
          type: "text",
          content: "She had to take a break from school. For a year and a half before anyone could figure out what was wrong, doctors just kept giving her painkillers. They said it was probably just from the malaria, but they couldn't really label it. So they pumped her with pain medications while she went from one specialist to another—orthopedics, neurologists, Ayurvedic practitioners. The pain stayed the same no matter what they tried."
        },
        {
          type: "text",
          content: "Depression set in. She would cry all the time, feeling so helpless. There were mood swings and that constant question: 'Why only me?' She really missed going to school and felt lonely around others. Her family was devastated too—no one they knew had ever dealt with something like this."
        },
        {
          type: "text",
          content: "Finally, in 2016, a test showed she had fibromyalgia. She was referred to a rheumatologist, and that's when things started to change."
        },
        {
          type: "text",
          content: "In January 2017, she started physical therapy. Honestly, she didn't have much hope. 'I thought, Oh, same therapy and treatment like all other times. Nothing will work', she remembers. But slowly, over six months, the pain began to subside. She gained enough confidence to go back to school."
        },
        {
          type: "text",
          content: "By May 2017, her treatment was done. And she's been pain-free ever since. Today, she's a Master's student in the U.S. Looking back, she wishes more information about rare pain conditions like fibromyalgia and CRPS was available. Better awareness could help identify people with these conditions much faster."
        },
        {
          type: "text",
          content: "She also wants people to know about the power of physical therapy. 'It's very underestimated in medicine today,' she says. 'I was mostly just given medications. But physical therapy is what actually worked.'"
        },
        {
          type: "text",
          content: "Watch her interview below:"
        },
        {
          type: "youtube",
          videoId: "pUoAleyfjSM",
          caption: "Mahathi's Interview with Us"
        }

      ]
    },
    
  ],
  "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)": [
    
  ],
};
