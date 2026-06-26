import type { NavLink, SocialLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:eric.lor@example.com",
    icon: "email",
  },
];
