import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";
import profilePicture from "../../assets/my-image2.png";

const values = [
  "User-first thinking in every line of code",
  "Bridging design, development, and QA",
  "Obsessed with performance and accessibility",
  "Clear communication across technical and non-technical teams",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading label="About" title="The person behind the pixels">
            A developer who sees the full picture — from wireframe to deployment,
            from test case to production release.
          </SectionHeading>
        </SectionReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/5 blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface-elevated">
              <img
                  src={profilePicture}
                  alt="Eric Lor"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />
                {/* Image Placeholder */}
                {/* <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-elevated to-surface p-8">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-accent/40 bg-accent/10 font-display text-3xl font-bold text-accent">
                    EL
                  </div>
                  <p className="text-center text-sm text-muted">
                    Photo placeholder
                  </p>
                </div> */}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-body md:text-lg">
                Hi, I'm Eric — a frontend developer with a rare blend of system
                analysis and quality assurance expertise. I didn't just learn to
                write code; I learned to understand systems, question assumptions,
                and ship software that actually works for real people.
              </p>
              <p className="text-base leading-relaxed text-body md:text-lg">
                My QA background means I catch edge cases before they reach
                production. My analyst mindset means I build the right thing, not
                just the thing right. And my frontend craft means users get
                experiences that feel effortless.
              </p>

              <div className="rounded-2xl border border-border bg-surface-elevated p-6">
                <h3 className="mb-4 font-display text-lg font-semibold text-heading">
                  What makes me different
                </h3>
                <ul className="space-y-3">
                  {values.map((value) => (
                    <li
                      key={value}
                      className="flex items-start gap-3 text-sm text-body md:text-base"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
