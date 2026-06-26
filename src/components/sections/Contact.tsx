import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { socialLinks } from "../../data/navigation";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
} as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading label="Contact" title="Let's build something">
            Have a project in mind or just want to say hello? Drop me a message —
            I typically respond within 24 hours.
          </SectionHeading>
        </SectionReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <SectionReveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-heading">
                  Connect with me
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Prefer a direct line? Reach out through any of these channels.
                </p>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel={
                        link.icon === "email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={link.name}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-border bg-surface-elevated p-6">
                <p className="font-mono text-xs tracking-widest text-accent uppercase">
                  Location
                </p>
                <p className="mt-2 text-heading">Remote · Open to relocate</p>
                <p className="mt-4 font-mono text-xs tracking-widest text-accent uppercase">
                  Email
                </p>
                <a
                  href="mailto:eric.develos.lor@gmail.com"
                  className="mt-2 inline-block text-body transition-colors hover:text-accent"
                >
                  eric.develos.lor@gmail.com
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-heading"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-body outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-body outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-heading"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-body outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitted && (
                  <p className="text-sm font-medium text-emerald-400">
                    Message sent! I'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
