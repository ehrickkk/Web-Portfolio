import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../../data/navigation";
import { useTheme } from "../../context/ThemeContext";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

type SectionId = (typeof sectionIds)[number];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          const [mostVisible] = [...visibleSections.entries()].sort(
            (a, b) => b[1] - a[1],
          );
          setActiveSection(mostVisible[0] as SectionId);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <div className="fixed top-0 left-1/2 z-50 mt-4 w-full max-w-5xl -translate-x-1/2 px-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mx-auto w-full max-w-4xl"
      >
        <div
          className={`rounded-2xl border border-white/10 px-6 shadow-[0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ${
            scrolled
              ? "bg-black/30 backdrop-blur-2xl"
              : "bg-white/5 backdrop-blur-xl"
          }`}
        >
          <div className="relative flex items-center justify-between py-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="font-display text-lg font-bold tracking-tight text-white transition-colors hover:text-white/90"
            >
              EL<span className="text-accent">.</span>
            </a>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`relative block rounded-lg px-3 py-2 text-sm transition-colors ${
                        active
                          ? "font-medium text-accent"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                          active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-accent/50 hover:text-white"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-accent/50 hover:text-white md:hidden"
              >
                {mobileOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={mobileOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1, marginTop: 8 },
            closed: { height: 0, opacity: 0, marginTop: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden md:hidden"
        >
          <ul className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? "font-medium text-accent"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  );
}
