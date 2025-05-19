
export interface Treatment {
  id: string; 
  name: string;
  description: string;
  category: "medications" | "therapies" | "procedures";
  details?: string;
  resources?: string[];
}

export const treatments: Treatment[] = [
  // Medications
  { 
    id: "antidepressants",
    name: "Antidepressants", 
    description: "Certain antidepressants can help relieve chronic pain by influencing how the brain processes pain signals.",
    category: "medications",
    details: "Tricyclic antidepressants like amitriptyline and nortriptyline are often used for chronic pain. SNRIs like duloxetine and venlafaxine can also be effective for certain pain conditions."
  },
  { 
    id: "anti-seizure",
    name: "Anti-seizure medications", 
    description: "These can help treat nerve pain by calming overactive nerves.",
    category: "medications",
    details: "Medications like gabapentin and pregabalin are commonly prescribed for neuropathic pain conditions."
  },
  { 
    id: "pain-relievers",
    name: "Pain relievers", 
    description: "Various options from over-the-counter NSAIDs to prescription opioids for severe pain.",
    category: "medications",
    details: "NSAIDs like ibuprofen and naproxen can help with inflammatory pain. Acetaminophen works on the central nervous system. Opioids are typically reserved for severe pain that doesn't respond to other treatments."
  },
  { 
    id: "topical",
    name: "Topical treatments", 
    description: "Creams, gels, or patches applied directly to the skin for localized pain relief.",
    category: "medications",
    details: "Options include lidocaine patches, capsaicin cream, and diclofenac gel, which can provide targeted relief without systemic side effects."
  },

  // Therapies
  { 
    id: "physical-therapy",
    name: "Physical therapy", 
    description: "Exercises and treatments to improve movement and function impaired by pain or disability.",
    category: "therapies",
    details: "Physical therapy may include stretching, strengthening exercises, manual therapy, and education on proper body mechanics."
  },
  { 
    id: "occupational-therapy",
    name: "Occupational therapy", 
    description: "Helps maintain or recover the ability to perform daily activities affected by pain.",
    category: "therapies",
    details: "Occupational therapists can recommend adaptive equipment, energy conservation techniques, and workplace modifications to improve function and reduce pain."
  },
  { 
    id: "cbt",
    name: "Cognitive behavioral therapy", 
    description: "A psychological approach that helps change thought patterns associated with pain.",
    category: "therapies",
    details: "CBT can help patients develop coping strategies, reduce catastrophizing, and improve overall quality of life despite chronic pain."
  },
  { 
    id: "relaxation",
    name: "Relaxation techniques", 
    description: "Methods like deep breathing, meditation, and mindfulness to reduce stress and pain.",
    category: "therapies",
    details: "These techniques can help reduce muscle tension, lower stress hormones, and improve pain tolerance."
  },

  // Procedures
  { 
    id: "nerve-blocks",
    name: "Nerve blocks", 
    description: "Injections that block pain signals from specific nerves.",
    category: "procedures",
    details: "Nerve blocks can be diagnostic (to identify pain sources) or therapeutic (to provide relief). They may include local anesthetics and sometimes steroids."
  },
  { 
    id: "spinal-cord-stimulation",
    name: "Spinal cord stimulation", 
    description: "Electrical impulses applied to the spinal cord to modify pain signals.",
    category: "procedures",
    details: "A small device is implanted near the spine to deliver mild electrical impulses that interrupt pain signals before they reach the brain."
  },
  { 
    id: "tens",
    name: "TENS therapy", 
    description: "Low-voltage electrical currents to relieve pain.",
    category: "procedures",
    details: "Transcutaneous Electrical Nerve Stimulation (TENS) uses a portable device to deliver electrical impulses through electrodes placed on the skin."
  },
  { 
    id: "acupuncture",
    name: "Acupuncture", 
    description: "An ancient Chinese practice involving the insertion of thin needles into specific body points.",
    category: "procedures",
    details: "Acupuncture may help relieve pain by stimulating the release of endorphins and affecting neurotransmitter activity."
  },
];

// Helper function to get treatments by category
export const getTreatmentsByCategory = (category: "medications" | "therapies" | "procedures"): Treatment[] => {
  return treatments.filter(treatment => treatment.category === category);
};
