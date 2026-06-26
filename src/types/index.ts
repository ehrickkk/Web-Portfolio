export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  role: string;
  tags: string[];
  images: string[];
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export interface NavLink {
  label: string;
  href: string;
}

export type Theme = "dark" | "light";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
