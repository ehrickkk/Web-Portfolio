import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface/50">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading label="Experience" title="Where I've made impact">
            A track record of building, analyzing, and ensuring quality across
            the software lifecycle.
          </SectionHeading>
        </SectionReveal>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experience.map((entry, index) => (
            <SectionReveal key={entry.id} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex flex-col gap-4 md:mb-16 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="absolute left-0 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <span className="h-4 w-4 rounded-full border-2 border-accent bg-surface ring-4 ring-accent/20" />
                </div>

                <div className="flex-1 pl-10 md:pl-0">
                  <div className="rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                    <p className="font-mono text-xs tracking-widest text-accent uppercase">
                      {entry.date}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-heading">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {entry.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {entry.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm leading-relaxed text-body"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
