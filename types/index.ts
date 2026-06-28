// Global TypeScript Types

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
