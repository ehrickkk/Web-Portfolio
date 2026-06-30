import { motion } from "framer-motion";
import { ArrowUpRight, Check, FileText, Mail } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type MutableRefObject,
  type SVGProps,
} from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../ui/BrandIcons";

const EMAIL = "eric.develos.lor@gmail.com";
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=eric.develos.lor@gmail.com";
const GMAIL_OPEN_DELAY_MS = 900;

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

interface SocialChannel {
  title: string;
  handle: string;
  href: string;
  icon: IconComponent;
  external: boolean;
  highlight?: boolean;
  download?: boolean;
}

const statusItems = [
  { color: "bg-emerald-400", label: "Open to full-time roles" },
  { color: "bg-emerald-400", label: "Available for freelance projects" },
  // { color: "bg-yellow-400", label: "Selective with short-term contracts" },
] as const;

const infoItems = [
  { label: "Location", value: "Remote · Open to relocate" },
  { label: "Email", value: EMAIL },
  { label: "Response Time", value: "Within 24 hours" },
] as const;

const socialChannels: SocialChannel[] = [
  {
    title: "GitHub",
    handle: "@ehrickkk",
    href: "https://github.com/ehrickkk",
    icon: GithubIcon,
    external: true,
  },
  {
    title: "LinkedIn",
    handle: "Eric Lor",
    href: "https://www.linkedin.com/in/ericdlor101/",
    icon: LinkedinIcon,
    external: true,
  },
  {
    title: "Facebook",
    handle: "Eric Lor",
    href: "https://www.facebook.com/EricDLor/",
    icon: FacebookIcon,
    external: true,
  },
  {
    title: "Resume",
    handle: "Download CV",
    href: "./src/assets/Ericlor_CV.pdf",
    icon: FileText,
    external: false,
    highlight: true,
    download: true,
  },
];

interface SocialCardProps {
  channel: SocialChannel;
}

function SocialCard({ channel }: SocialCardProps) {
  const Icon = channel.icon;

  return (
    <a
      href={channel.href}
      target={channel.external ? "_blank" : undefined}
      rel={channel.external ? "noopener noreferrer" : undefined}
      download={channel.download ? true : undefined}
      className={`group flex cursor-pointer flex-col gap-3 rounded-2xl border p-5 transition-all duration-300 hover:border-accent/40 ${
        channel.highlight
          ? "border-accent/20 bg-accent/5"
          : "border-border bg-surface-elevated"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
          <Icon size={20} className="text-accent" />
        </div>
        <ArrowUpRight
          size={16}
          className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <div>
        <p className="mt-2 text-sm font-semibold text-heading">{channel.title}</p>
        <p className="text-xs text-muted">{channel.handle}</p>
      </div>
    </a>
  );
}

export function Contact() {
  const [heroFeedback, setHeroFeedback] = useState<string | null>(null);
  const [stripFeedback, setStripFeedback] = useState<string | null>(null);
  const [isOpeningGmail, setIsOpeningGmail] = useState(false);
  const heroTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stripTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gmailTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (heroTimerRef.current) clearTimeout(heroTimerRef.current);
      if (stripTimerRef.current) clearTimeout(stripTimerRef.current);
      if (gmailTimerRef.current) clearTimeout(gmailTimerRef.current);
    };
  }, []);

  const showFeedback = useCallback(
    (
      setFeedback: (message: string | null) => void,
      timerRef: MutableRefObject<ReturnType<typeof setTimeout> | null>,
      message: string,
    ) => {
      setFeedback(message);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setFeedback(null), 3000);
    },
    [],
  );

  const handleEmailClick = useCallback(
    async (source: "hero" | "strip") => {
      if (isOpeningGmail) return;

      const setFeedback = source === "hero" ? setHeroFeedback : setStripFeedback;
      const timerRef = source === "hero" ? heroTimerRef : stripTimerRef;

      let message = "Opened Gmail — copy the email manually";

      setIsOpeningGmail(true);

      try {
        await navigator.clipboard.writeText(EMAIL);
        message = "Email copied to clipboard";
      } catch {
        // fallback message already set
      }

      showFeedback(setFeedback, timerRef, message);

      if (gmailTimerRef.current) clearTimeout(gmailTimerRef.current);
      gmailTimerRef.current = setTimeout(() => {
        window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
        setIsOpeningGmail(false);
      }, GMAIL_OPEN_DELAY_MS);
    },
    [isOpeningGmail, showFeedback],
  );

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 font-mono text-sm text-green-400">
              <motion.span
                className="h-2 w-2 rounded-full bg-green-400"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              Available for new opportunities
            </div>
          </motion.div>

          <SectionReveal>
            <SectionHeading label="Contact" title="Let's build something">
              Have a project in mind or just want to say hello? Drop me a message —
              I typically respond within 24 hours.
            </SectionHeading>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex flex-col rounded-2xl border border-border bg-surface-elevated px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              {infoItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-3 sm:py-0 ${
                    index < infoItems.length - 1
                      ? "border-b border-border sm:border-r sm:border-b-0 sm:pr-6"
                      : ""
                  } ${index > 0 ? "sm:pl-6" : ""} ${
                    index === 1 ? "sm:flex-1 sm:px-6" : ""
                  }`}
                >
                  <p className="mb-1 font-mono text-xs tracking-widest text-accent uppercase">
                    {item.label}
                  </p>
                  {item.label === "Email" ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => handleEmailClick("strip")}
                        disabled={isOpeningGmail}
                        aria-label="Copy email and open Gmail compose"
                        className="text-left text-sm text-body transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {item.value}
                      </button>
                      {stripFeedback && (
                        <p
                          role="status"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-emerald-400"
                        >
                          <Check size={12} />
                          {stripFeedback}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-body">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="rounded-2xl border border-border border-l-2 border-l-accent bg-surface-elevated p-5">
              <p className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">
                Current Status
              </p>
              <ul className="space-y-3">
                {statusItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-body"
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${item.color}`}
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 via-surface-elevated to-surface-elevated p-6 shadow-lg shadow-accent/10 md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                    <Mail size={26} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-heading">Email</p>
                    <p className="text-sm text-muted">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end">
                  <button
                    type="button"
                    onClick={() => handleEmailClick("hero")}
                    disabled={isOpeningGmail}
                    aria-label="Copy email and open Gmail compose"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    Send a message
                  </button>
                  {heroFeedback && (
                    <p
                      role="status"
                      className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-400 sm:justify-end"
                    >
                      <Check size={12} />
                      {heroFeedback}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {socialChannels.map((channel, index) => (
              <SectionReveal key={channel.title} delay={0.4 + index * 0.05}>
                <SocialCard channel={channel} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
