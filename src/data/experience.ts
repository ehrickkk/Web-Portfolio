import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "TechNova Solutions",
    date: "2023 — Present",
    bullets: [
      "Led the migration of a legacy jQuery app to React + TypeScript, cutting load times by 40%.",
      "Built reusable component libraries and design tokens adopted across three product teams.",
      "Collaborated with QA to implement automated visual regression testing with Cypress.",
    ],
  },
  {
    id: "exp-2",
    role: "System Analyst & QA Engineer",
    company: "DataBridge Corp",
    date: "2021 — 2023",
    bullets: [
      "Translated business requirements into technical specs for cross-functional engineering teams.",
      "Designed and executed test plans covering 200+ user stories across web and mobile platforms.",
      "Introduced CI/CD quality gates that reduced production defects by 35% within six months.",
    ],
  },
];
