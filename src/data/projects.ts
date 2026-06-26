import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow Dashboard",
    shortDescription:
      "A real-time developer analytics dashboard with customizable widgets, sprint burndown charts, and team velocity tracking.",
    longDescription:
      "DevFlow Dashboard is a comprehensive engineering analytics platform built for team leads who need actionable insights without drowning in noise. It aggregates data from GitHub, Jira, and CI/CD pipelines into a unified view with customizable widgets, real-time sprint burndown charts, and team velocity tracking. The interface prioritizes clarity — every metric is contextualized with trends, benchmarks, and drill-down capabilities so leaders can make informed decisions in seconds, not hours.",
    problem:
      "Engineering teams were juggling five different tools to understand sprint health, and none of them talked to each other. Leads spent hours each week manually compiling reports instead of unblocking their teams.",
    role:
      "I architected the frontend from scratch using React and TypeScript, designed the widget system for extensibility, and built the real-time data layer with WebSockets. I also wrote end-to-end tests covering all critical user flows.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop",
      "from-violet-600 via-purple-500 to-fuchsia-500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
    ],
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    featured: true,
  },
  {
    id: "taskpilot",
    title: "TaskPilot",
    shortDescription:
      "A collaborative task manager with drag-and-drop kanban boards, smart due-date reminders, and offline-first sync.",
    longDescription:
      "TaskPilot is a lightweight project management tool designed for small teams who move fast and hate bloated software. It features intuitive drag-and-drop kanban boards, smart due-date reminders that adapt to team velocity, and offline-first sync so work never stops — even on a flaky connection. The app handles conflict resolution gracefully and syncs changes within seconds of reconnecting.",
    problem:
      "Small teams were paying for enterprise PM tools they barely used, or worse, managing tasks in spreadsheets that fell out of sync within days.",
    role:
      "I built the entire Next.js frontend, implemented the drag-and-drop kanban with optimistic updates, and designed the offline sync strategy using IndexedDB and a custom conflict-resolution layer.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand", "IndexedDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=675&fit=crop",
      "from-indigo-600 via-violet-500 to-purple-600",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=675&fit=crop",
    ],
    gradient: "from-indigo-600 via-violet-500 to-purple-600",
    featured: true,
  },
  {
    id: "pixelcraft",
    title: "PixelCraft Studio",
    shortDescription:
      "An in-browser design playground for prototyping UI components with live code export and a token-based design system.",
    longDescription:
      "PixelCraft Studio is an in-browser design playground that bridges the gap between design and development. Users can prototype UI components visually, preview them across breakpoints, and export production-ready React snippets with one click. The built-in token-based design system ensures consistency across every component, and the live code panel updates in real time as you tweak properties.",
    problem:
      "Designers and developers were constantly translating mockups into code by hand, introducing inconsistencies and wasting hours on repetitive component scaffolding.",
    role:
      "I designed and built the canvas rendering engine, created the token system architecture, and implemented the React code generator with AST-based output for clean, readable snippets.",
    tags: ["React", "Canvas API", "Zod", "Vite", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=675&fit=crop",
      "from-purple-700 via-violet-600 to-indigo-500",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=675&fit=crop",
    ],
    gradient: "from-purple-700 via-violet-600 to-indigo-500",
    featured: true,
  },
  {
    id: "testtrack",
    title: "TestTrack QA Platform",
    shortDescription:
      "A test management platform with visual test case builders, automated regression suites, and release readiness dashboards.",
    longDescription:
      "TestTrack is a QA-focused platform that brings structure to chaotic testing workflows. It features a visual test case builder for non-technical stakeholders, automated regression suite orchestration, and release readiness dashboards that give PMs a clear go/no-go signal. Integration with CI/CD pipelines means test results flow directly into deployment gates.",
    problem:
      "QA teams were tracking test cases in spreadsheets and had no visibility into release readiness until the day before launch — when it was too late to fix critical issues.",
    role:
      "As both system analyst and lead frontend developer, I translated QA team requirements into technical specs, built the test case builder UI, and implemented the release dashboard with real-time pass/fail metrics from CI pipelines.",
    tags: ["React", "Node.js", "Cypress", "PostgreSQL", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=675&fit=crop",
      "from-emerald-600 via-teal-500 to-cyan-600",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=675&fit=crop",
    ],
    gradient: "from-emerald-600 via-teal-500 to-cyan-600",
    featured: false,
  },
  {
    id: "sysmap",
    title: "SysMap Analyzer",
    shortDescription:
      "An interactive system architecture visualizer that maps service dependencies, API contracts, and data flows across microservices.",
    longDescription:
      "SysMap Analyzer helps engineering teams understand complex microservice architectures at a glance. It automatically discovers service dependencies from configuration files and API specs, renders them as an interactive node graph, and highlights bottlenecks, circular dependencies, and orphaned services. Analysts can annotate nodes, export architecture diagrams, and track changes between releases.",
    problem:
      "Onboarding new engineers to a 40-service architecture took weeks because documentation was outdated and no one had a complete picture of how services connected.",
    role:
      "I designed the system analysis data model, built the interactive graph visualization with D3.js, and created the dependency parser that ingests OpenAPI specs and docker-compose files to auto-generate architecture maps.",
    tags: ["React", "D3.js", "TypeScript", "Python", "OpenAPI"],
    githubUrl: "https://github.com",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop",
      "from-orange-600 via-amber-500 to-yellow-500",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=675&fit=crop",
    ],
    gradient: "from-orange-600 via-amber-500 to-yellow-500",
    featured: false,
  },
  {
    id: "formflow",
    title: "FormFlow Builder",
    shortDescription:
      "A drag-and-drop form builder with conditional logic, validation rules, and embeddable widgets for any web application.",
    longDescription:
      "FormFlow Builder empowers product teams to create complex, multi-step forms without writing code. The visual editor supports conditional field logic, custom validation rules, file uploads, and payment integrations. Completed forms can be embedded as React components or iframes, with submission data routed to webhooks, email, or a built-in analytics dashboard.",
    problem:
      "Every new form requirement meant a developer ticket, a sprint of work, and weeks of back-and-forth on validation rules — even for simple contact forms.",
    role:
      "I built the drag-and-drop form editor, implemented the conditional logic engine with a rule-evaluation runtime, and created the embed SDK that lets teams drop forms into any React app with a single import.",
    tags: ["React", "TypeScript", "Zod", "Tailwind", "Webhooks"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
      "from-rose-600 via-pink-500 to-fuchsia-500",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
    ],
    gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
