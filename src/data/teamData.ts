
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
    bio: "Dr. Johnson is a pain specialist with over 15 years of experience. After witnessing the struggles her patients faced in finding reliable information, she founded the Pain Relief Society.",
    image: "/lovable-uploads/b41d9902-b757-4166-9a01-e957228e47e1.png",
    initials: "AS"
  },
  {
    name: "Dr. Trupti Berde",
    role: "Pediatric Physical Therapist, Mumbai, India",
    bio: "Living with CRPS since 2010, Michael brings firsthand experience to our mission. He leads our patient story initiatives and community outreach programs.",
    image: "/lovable-uploads/7043cc7a-2293-4aae-8557-aa9e330ea76d.png",
    initials: "TB"
  },
  {
    name: "Dr. Raju Khubchandani",
    role: "Head of Rheumatology, SRCC Children's Hospital, Mumbai, India",
    bio: "With a background in healthcare education, Emily develops our educational resources and ensures they're accessible to diverse audiences.",
    image: "/lovable-uploads/783a3b26-ed04-4aa4-b10f-4bbe31f634c2.png",
    initials: "RK"
  },
  {
    name: "Robert Garcia",
    role: "Community Manager",
    bio: "Robert oversees our online community and support groups, creating safe spaces for patients and caregivers to connect and share experiences.",
    initials: "RG"
  },
];
