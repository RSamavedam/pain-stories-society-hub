
export interface Condition {
  id: number;
  name: string;
  description: string;
  details: string;
  resources: string[];
}

export interface PatientStory {
  id: string;
  name: string;
  condition: string;
  snippet: string;
  date: string;
  image: string;
  initials: string;
}

export interface StoryCategories {
  [category: string]: PatientStory[];
}
