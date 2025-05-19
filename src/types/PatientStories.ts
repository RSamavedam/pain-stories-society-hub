
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

// Helper function to create a new patient story with required fields
export const createPatientStory = (
  id: string,
  name: string,
  condition: string,
  snippet: string,
  image: string,
  options: {
    date?: string;
    initials?: string;
    content?: ContentBlock[];
  } = {}
): PatientStory => {
  // Generate initials if not provided
  const initials = options.initials || 
    name.split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

  // Use current date if not provided
  const date = options.date || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    id,
    name,
    condition,
    snippet,
    date,
    image,
    initials,
    content: options.content || [],
  };
};

// Helper functions for creating content blocks
export const createTextBlock = (content: string): ContentBlock => ({
  type: "text",
  content
});

export const createImageBlock = (url: string, caption?: string): ContentBlock => ({
  type: "image",
  url,
  caption
});

export const createYoutubeBlock = (videoId: string, caption?: string): ContentBlock => ({
  type: "youtube",
  videoId,
  caption
});
