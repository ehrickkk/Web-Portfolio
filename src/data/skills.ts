import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "Python" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "Jest" },
      { name: "Cypress" },
    ],
  },
];
