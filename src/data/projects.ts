import type { Project } from "../types";
import seated1 from "../assets/seated1.png";
import seated2 from "../assets/seated2.png";
import seated3 from "../assets/seated3.png";
import seated4 from "../assets/seated4.png";
import eventure0 from "../assets/eventure0.png";
import eventure1 from "../assets/eventure1.png";
import eventure2 from "../assets/eventure2.png";
import eventure3 from "../assets/eventure3.png";
import usmo1 from "../assets/USMO1.png";
import usmo2 from "../assets/USMO2.png";
import usmo3 from "../assets/USMO3.png";

export const projects: Project[] = [
  {
    id: "seated",
    title: "Seated",
    shortDescription:
      "A cross-platform seat reservation system designed to eliminate overcrowding and streamline event management across major venues at the University of Makati.",
    longDescription:
      "Seated is a comprehensive mobile and web-based application built to serve as the official event registration and seat reservation system for the University of Makati’s major venues. The platform bridges the gap between event organizers and attendees by offering real-time seating charts, instant booking confirmations, and centralized crowd management tools. Designed to handle high-traffic university events, Seated transforms chaotic, first-come-first-served campus gatherings into structured, accessible, and data-driven experiences for students, faculty, and external VIP guests alike.",
    problem:
      "The University of Makati regularly hosts high-profile academic and cultural events across its major venues, yet lacked a formal mechanism to manage attendance. Without a centralized reservation system, organizers faced unpredictable crowd sizes, severe venue congestion, and an inability to guarantee accessibility accommodations for VIPs or PWDs. For attendees, this created a frustratingly chaotic environment characterized by extreme uncertainty, where securing a seat relied entirely on showing up hours early. Furthermore, event coordinators were left completely in the dark, operating without any predictive attendance data or reservation records to safely map out capacity and ensure a fair allocation of seats.",
    role: "As the sole contributor across multiple critical phases of the project, I served as the System Analyst, translating the university's event policies into functional system requirements and data models. I transitioned into the UI & UX Designer role to map out user journeys and build high-fidelity prototypes, focusing heavily on an intuitive, real-time seating chart interface. Shifting to development as the Frontend Developer, I built the responsive web and mobile interfaces, ensuring seamless state synchronization for live bookings. Finally, as the Quality Assurance engineer, I drafted test cases and executed rigorous stress and usability testing to guarantee the platform's stability during high-traffic campus events.",
    tags: [
      "React JS",
      "React Native",
      "TypeScript",
      "Tailwind",
      "C#",
      "ASP.NET",
      "Docker",
      "Expo",
    ],
    githubUrl: "https://github.com/MeinardEdrei/Seated.git",
    // liveUrl: "https://example.com",
    images: [
      seated1, seated2, seated3, seated4
    ],
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    featured: true,
  },
  {
    id: "eventure",
    title: "Eventure",
    shortDescription:
      "A centralized event management system for the University of Makati that streamlines event planning, approvals, and tracking between student organizations and university administration.",
    longDescription:
      "Eventure is a comprehensive web-based event management system engineered to simplify and modernize how campus activities are organized at the University of Makati. Built as a collaborative bridge, the platform connects student organizations directly with the Center for Student Organization and Activities (CSOA) and the general student body. Eventure replaces manual, fragmented workflows with a digital hub where organizers can pitch events, track administrative compliance, manage logistics, and promote activities to students in real time, ensuring a highly organized and vibrant campus life.",
    problem:
      "Organizing campus events at the University of Makati often involved disjointed communication, manual paperwork, and inefficient coordination between student leaders and the Center for Student Organization and Activities (CSOA). Without a centralized platform, student organizations struggled to efficiently plan and track their event lifecycles, leading to scheduling conflicts, delayed administrative approvals, and poor visibility among the student body. This lack of a structured system created unnecessary bottlenecks for CSOA coordinators monitoring campus activities and resulted in lower student engagement due to fragmented event promotion.",
    role: "Serving as a multi-disciplinary lead on the project, I took on the responsibilities of a System Analyst to gather requirements from both student leaders and CSOA administrators, translating complex university approval workflows into clear technical specifications. As the UI & UX Designer, I mapped out the user journeys and designed an intuitive dashboard interface tailored for seamless navigation and progress tracking. Transitioning to implementation as the Frontend Developer, I built the responsive user interface, ensuring a clean visual presentation and smooth data flow for event submissions. Finally, as the Quality Assurance engineer, I designed test cases and conducted thorough end-to-end testing to verify that the approval workflows, notifications, and user roles functioned flawlessly.",
    tags: ["Next.js", "Tailwind", "C#", "ASP.NET", "MySQL"],
    githubUrl: "https://github.com/MeinardEdrei/Eventure.git",
    // liveUrl: "https://example.com",
    images: [eventure0, eventure1, eventure2, eventure3],
    gradient: "from-indigo-600 via-violet-500 to-purple-600",
    featured: true,
  },
  {
    id: "usmo",
    title: "USMO",
    shortDescription:
      "The official digital platform for the University of Makati’s student publication, delivering trusted campus news, student insights, and community conversations through a modern, responsive interface.",
    longDescription:
      "USMO is the official web application and digital home of the University of Makati's student publication, designed to amplify student voices and modernize campus journalism. Serving as a trusted, central hub for the university community, the platform hosts timely news articles, investigative features, campus opinions, and multimedia content. USMO replaces outdated, traditional distribution methods with a dynamic digital experience that fosters active student engagement, streamlines content discovery, and keeps the entire Herons community informed and connected in real time.",
    problem:
      "As a traditional student publication, the University of Makati’s official student press struggled with limited reach, high printing costs, and a lack of timely engagement due to the absence of a dedicated digital presence. Relying solely on physical prints or fragmented social media posts made it difficult for students to easily access archived issues, filter news categories, or engage in meaningful community conversations. Furthermore, the publication lacked a cohesive, modern visual identity and an optimized user experience, preventing it from effectively competing for student attention in a digital-first era and limiting its ability to serve as an accessible, real-time voice for the campus.",
    role: "In this project, I bridged the gap between aesthetics and functionality by serving as both the UI & UX Designer and Frontend Developer. I began by shaping the publication's digital identity, conducting user research to design a modern, highly readable interface with intuitive navigation and clean typography optimized for long-form reading. Transitioning into development, I turned those high-fidelity prototypes into a pixel-perfect, fully responsive web application. I focused on building clean, semantic frontend code, ensuring fast page load speeds, seamless cross-device compatibility, and smooth transitions that brought the student body's stories to life.",
    tags: ["Figma", "Hostinger Website Builder", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://connect.usmo.org.ph/",
    images: [usmo1, usmo2, usmo3],
    gradient: "from-purple-700 via-violet-600 to-indigo-500",
    featured: true,
  },
  // {
  //   id: "testtrack",
  //   title: "TestTrack QA Platform",
  //   shortDescription:
  //     "A test management platform with visual test case builders, automated regression suites, and release readiness dashboards.",
  //   longDescription:
  //     "TestTrack is a QA-focused platform that brings structure to chaotic testing workflows. It features a visual test case builder for non-technical stakeholders, automated regression suite orchestration, and release readiness dashboards that give PMs a clear go/no-go signal. Integration with CI/CD pipelines means test results flow directly into deployment gates.",
  //   problem:
  //     "QA teams were tracking test cases in spreadsheets and had no visibility into release readiness until the day before launch — when it was too late to fix critical issues.",
  //   role: "As both system analyst and lead frontend developer, I translated QA team requirements into technical specs, built the test case builder UI, and implemented the release dashboard with real-time pass/fail metrics from CI pipelines.",
  //   tags: ["React", "Node.js", "Cypress", "PostgreSQL", "REST APIs"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  //   images: [
  //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=675&fit=crop",
  //     "from-emerald-600 via-teal-500 to-cyan-600",
  //     "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=675&fit=crop",
  //   ],
  //   gradient: "from-emerald-600 via-teal-500 to-cyan-600",
  //   featured: false,
  // },
  // {
  //   id: "sysmap",
  //   title: "SysMap Analyzer",
  //   shortDescription:
  //     "An interactive system architecture visualizer that maps service dependencies, API contracts, and data flows across microservices.",
  //   longDescription:
  //     "SysMap Analyzer helps engineering teams understand complex microservice architectures at a glance. It automatically discovers service dependencies from configuration files and API specs, renders them as an interactive node graph, and highlights bottlenecks, circular dependencies, and orphaned services. Analysts can annotate nodes, export architecture diagrams, and track changes between releases.",
  //   problem:
  //     "Onboarding new engineers to a 40-service architecture took weeks because documentation was outdated and no one had a complete picture of how services connected.",
  //   role: "I designed the system analysis data model, built the interactive graph visualization with D3.js, and created the dependency parser that ingests OpenAPI specs and docker-compose files to auto-generate architecture maps.",
  //   tags: ["React", "D3.js", "TypeScript", "Python", "OpenAPI"],
  //   githubUrl: "https://github.com",
  //   images: [
  //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop",
  //     "from-orange-600 via-amber-500 to-yellow-500",
  //     "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=675&fit=crop",
  //   ],
  //   gradient: "from-orange-600 via-amber-500 to-yellow-500",
  //   featured: false,
  // },
  // {
  //   id: "formflow",
  //   title: "FormFlow Builder",
  //   shortDescription:
  //     "A drag-and-drop form builder with conditional logic, validation rules, and embeddable widgets for any web application.",
  //   longDescription:
  //     "FormFlow Builder empowers product teams to create complex, multi-step forms without writing code. The visual editor supports conditional field logic, custom validation rules, file uploads, and payment integrations. Completed forms can be embedded as React components or iframes, with submission data routed to webhooks, email, or a built-in analytics dashboard.",
  //   problem:
  //     "Every new form requirement meant a developer ticket, a sprint of work, and weeks of back-and-forth on validation rules — even for simple contact forms.",
  //   role: "I built the drag-and-drop form editor, implemented the conditional logic engine with a rule-evaluation runtime, and created the embed SDK that lets teams drop forms into any React app with a single import.",
  //   tags: ["React", "TypeScript", "Zod", "Tailwind", "Webhooks"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  //   images: [
  //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
  //     "from-rose-600 via-pink-500 to-fuchsia-500",
  //     "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
  //   ],
  //   gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
  //   featured: false,
  // },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
