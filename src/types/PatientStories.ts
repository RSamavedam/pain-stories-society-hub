
export interface Condition {
  id: number;
  name: string;
  description: string;
  details: string;
  resources: string[];
}

export type ContentType = "text" | "image" | "youtube";

export interface ContentBlock {
  type: ContentType;
  content?: string;
  url?: string;
  videoId?: string;
  caption?: string;
}

export interface PatientStory {
  id: string;
  name: string;
  condition: string;
  snippet: string;
  date: string;
  image: string;
  initials: string;
  content?: ContentBlock[];
}

export interface StoryCategories {
  [category: string]: PatientStory[];
}
