
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Adyant Shankar",
    role: "Founder and Patient Advocate",
    bio: "Adyant Shankar is a BS/MS student studying Biomedical Informatics at Stanford University. After suffering through CRPS and countless misdiagnoses when he was only 12 years old, he founded The Pain Relief Society with his physical therapist to empower others to share their patient stories and increase awareness of such debilitating conditions.",
    image: "/lovable-uploads/b41d9902-b757-4166-9a01-e957228e47e1.png",
    initials: "AS"
  },
  {
    name: "Dr. Trupti Berde",
    role: "Pediatric Physical Therapist, Mumbai, India",
    bio: "Dr. Berde is a pediatric physical therapist with over 20 years experience treating children from all over the world who have suffered from rare pain conditions such as CRPS and fibromyalgia.",
    image: "/lovable-uploads/7043cc7a-2293-4aae-8557-aa9e330ea76d.png",
    initials: "TB"
  },
  {
    name: "Dr. Raju Khubchandani",
    role: "Head of Rheumatology, SRCC Children's Hospital, Mumbai, India",
    bio: "Dr. Khubchandani is the head of pediatric rheumatology at SRCC Children's Hospital in India and is widely recognized as one of the founders of pediatric rheumatology in India. He is the founder of the Indian Society for Pediatric Rheumatology.",
    image: "/lovable-uploads/783a3b26-ed04-4aa4-b10f-4bbe31f634c2.png",
    initials: "RK"
  },
  {
    name: "Raghav Samavedam",
    role: "Technical Advisor",
    bio: "Raghav is a software engineer with a passion for healthcare technology. He ensures our platform is user-friendly and accessible to all.",
    image: "/lovable-uploads/raghav.jpeg",
    initials: "RS"
  }
];
