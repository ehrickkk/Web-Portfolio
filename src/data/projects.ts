import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow Dashboard",
    description:
      "A real-time developer analytics dashboard with customizable widgets, sprint burndown charts, and team velocity tracking. Built for engineering leads who need clarity without the clutter.",
    tech: ["React", "TypeScript", "Recharts", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    thumbnailGradient: "from-violet-600 via-purple-500 to-fuchsia-500",
  },
  {
    id: "taskpilot",
    title: "TaskPilot",
    description:
      "A collaborative task manager with drag-and-drop kanban boards, smart due-date reminders, and offline-first sync. Designed for small teams who move fast and hate bloated tools.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Zustand"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    thumbnailGradient: "from-indigo-600 via-violet-500 to-purple-600",
  },
  {
    id: "pixelcraft",
    title: "PixelCraft Studio",
    description:
      "An in-browser design playground for prototyping UI components with live code export. Features a token-based design system, responsive preview, and one-click React snippet generation.",
    tech: ["React", "Canvas API", "Zod", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    thumbnailGradient: "from-purple-700 via-violet-600 to-indigo-500",
  },
];
