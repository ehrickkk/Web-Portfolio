import { skillCategories } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading label="Skills" title="Tools I wield daily">
            A stack built for shipping fast, testing thoroughly, and scaling
            gracefully.
          </SectionHeading>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <SectionReveal key={category.title} delay={catIndex * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-accent" />
                  <h3 className="font-display text-xl font-semibold text-heading">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-body transition-all duration-200 group-hover:border-accent/20 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
