import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Web Developer", "Mobile Developer", "System Analyst", "Quality Assurance"] as const;

const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 5),
  delay: (i % 8) * 0.4,
  colorClass: i % 9 === 0 ? "bg-white/20" : "bg-accent/60",
}));

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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_15%_0%,rgba(139,92,246,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_85%_100%,rgba(6,182,212,0.08),transparent)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        {particles.map((p) => (
          <motion.span
            key={p.id}
            className={`absolute rounded-full ${p.colorClass}`}
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            animate={{
              opacity: [0.9, 0.8, 0.9],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (p.id % 4),
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
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
        className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 xl:block"
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
            <p className="text-xs text-white/80">3+ Years Exp.</p>
            <p className="mt-1 text-xs text-white/80">10+ Projects</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
