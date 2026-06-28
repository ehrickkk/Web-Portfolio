import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Web Developer",
  "Mobile Developer",
  "System Analyst",
  "Quality Assurance",
] as const;

type CircuitNode = { id: string; x: number; y: number };
type CircuitLine = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeWidth: number;
  opacity: number;
};

const circuitNodes: CircuitNode[] = [
  { id: "n1", x: 100, y: 200 },
  { id: "n2", x: 280, y: 140 },
  { id: "n3", x: 480, y: 180 },
  { id: "n4", x: 650, y: 100 },
  { id: "n5", x: 820, y: 160 },
  { id: "n6", x: 1050, y: 120 },
  { id: "n7", x: 1280, y: 200 },
  { id: "n8", x: 1200, y: 380 },
  { id: "n9", x: 980, y: 450 },
  { id: "n10", x: 750, y: 520 },
  { id: "n11", x: 520, y: 480 },
  { id: "n12", x: 300, y: 550 },
  { id: "n13", x: 150, y: 420 },
  { id: "n14", x: 200, y: 680 },
  { id: "n15", x: 450, y: 720 },
  { id: "n16", x: 720, y: 780 },
  { id: "n17", x: 1000, y: 720 },
  { id: "n18", x: 1220, y: 650 },
  { id: "n19", x: 900, y: 320 },
  { id: "n20", x: 550, y: 280 },
];

const circuitLines: CircuitLine[] = [
  { id: "l1", x1: 100, y1: 200, x2: 280, y2: 140, strokeWidth: 0.75, opacity: 0.2 },
  { id: "l2", x1: 280, y1: 140, x2: 480, y2: 180, strokeWidth: 0.5, opacity: 0.18 },
  { id: "l3", x1: 480, y1: 180, x2: 650, y2: 100, strokeWidth: 1, opacity: 0.22 },
  { id: "l4", x1: 650, y1: 100, x2: 820, y2: 160, strokeWidth: 0.6, opacity: 0.15 },
  { id: "l5", x1: 820, y1: 160, x2: 1050, y2: 120, strokeWidth: 0.75, opacity: 0.2 },
  { id: "l6", x1: 1050, y1: 120, x2: 1280, y2: 200, strokeWidth: 0.5, opacity: 0.25 },
  { id: "l7", x1: 480, y1: 180, x2: 550, y2: 280, strokeWidth: 0.8, opacity: 0.18 },
  { id: "l8", x1: 550, y1: 280, x2: 900, y2: 320, strokeWidth: 0.5, opacity: 0.2 },
  { id: "l9", x1: 900, y1: 320, x2: 980, y2: 450, strokeWidth: 0.75, opacity: 0.15 },
  { id: "l10", x1: 980, y1: 450, x2: 750, y2: 520, strokeWidth: 1, opacity: 0.22 },
  { id: "l11", x1: 750, y1: 520, x2: 520, y2: 480, strokeWidth: 0.6, opacity: 0.2 },
  { id: "l12", x1: 520, y1: 480, x2: 300, y2: 550, strokeWidth: 0.5, opacity: 0.18 },
  { id: "l13", x1: 300, y1: 550, x2: 150, y2: 420, strokeWidth: 0.75, opacity: 0.25 },
  { id: "l14", x1: 150, y1: 420, x2: 100, y2: 200, strokeWidth: 0.5, opacity: 0.15 },
  { id: "l15", x1: 520, y1: 480, x2: 450, y2: 720, strokeWidth: 0.8, opacity: 0.2 },
  { id: "l16", x1: 450, y1: 720, x2: 720, y2: 780, strokeWidth: 0.6, opacity: 0.18 },
  { id: "l17", x1: 720, y1: 780, x2: 1000, y2: 720, strokeWidth: 0.75, opacity: 0.22 },
  { id: "l18", x1: 1000, y1: 720, x2: 1220, y2: 650, strokeWidth: 0.5, opacity: 0.2 },
];

export function Hero() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const roleCount = roles.length;

    const interval = window.setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roleCount);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 pb-16 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[rgba(139,92,246,0.12)] blur-[100px]" />
        <div className="absolute -right-32 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-[rgba(6,182,212,0.08)] blur-[100px]" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {circuitLines.map((line, index) => (
            <motion.line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={`rgba(139, 92, 246, ${line.opacity})`}
              strokeWidth={line.strokeWidth}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 0.85,
                  delay: index * 0.17,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.3,
                  delay: index * 0.17,
                },
              }}
            />
          ))}

          {circuitNodes.map((node, index) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              fill={`rgba(139, 92, 246, ${0.15 + (index % 3) * 0.04})`}
              initial={{ r: 2.5, opacity: 0 }}
              animate={{
                r: [2.5, 4.5, 2.5],
                opacity: [0.6, 0.2, 0.6],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: index * 0.22,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent"
        >
          <Sparkles size={14} />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold tracking-tight text-heading sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Eric Lor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 min-h-6 font-mono text-sm tracking-widest text-accent uppercase sm:text-base"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[activeRoleIndex]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-block"
            >
              {roles[activeRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted md:text-xl"
        >
          I craft pixel-perfect interfaces and ship reliable software — where
          design precision meets engineering rigor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={scrollToProjects}
            className="group relative overflow-hidden rounded-xl bg-accent px-8 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:brightness-110"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted/80 transition-colors hover:text-accent"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="relative flex h-10 w-10 items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-full border border-accent/40"
                animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.1, 0.45] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <ArrowDown size={18} />
            </div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 xl:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white backdrop-blur-sm ring-2 ring-accent/50 shadow-lg shadow-accent/20">
            EL
          </div>
          <div className="w-44 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open to Work
            </div>
            <p className="text-xs text-white/80">3+ Academic Years Exp.</p>
            <p className="mt-1 text-xs text-white/80">3 Projects</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
