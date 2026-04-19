/*
  STUDENTS: Edit this file only.
  - Change text, links, and section order in `blocks`.
  - Keep every block `id` and `type` stable.

  CHANGE CHECKLIST (non-technical):
  1) Update name/role/email in `profile`.
  2) Update LinkedIn/GitHub/Twitter in `socialLinks`.
  3) Change colors in `themeColors` (optional).
  4) Update section text inside `blocks` (optional).
  5) Do not change any `id` or `type` values.
*/

import type { PortfolioConfig } from "./portfolio.schema";

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
};

// Quick-edit section: update these values first for most profile/theme changes.
const profile = {
  name: "Santosh Sharma",
  role: "UI/UX Designer & Lecturer",
  location: "Milky Way Galaxy",
  email: "santoshpoudel713@gmail.com",
  linkedin: "linkedin.com/in/santosh-sharma-62a386300/",
};

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/santosh-sharma-62a386300/",
  github: "https://github.com/Santoshpoudel1920",
  behance: "https://www.behance.net/santoshpoudel4",
};

// Single source of truth for brand hue.
// Change this one value to retheme all accent-driven UI parts.
// Using a grayscale palette for black/white/gray styling.
const brandColor = "#000000";
const brandTextOnColor = "#ffffff";

const themeColors = {
  // Keep overrides minimal: all other tokens are derived from these in styles.css.
  brand: brandColor,
  "brand-foreground": brandTextOnColor,
} as const;

export const portfolioConfig: PortfolioConfig = {
  site: {
    name: profile.name,
    role: profile.role,
  },
  person: {
    fullName: profile.name,
    location: profile.location,
    email: profile.email,
    linkedin: profile.linkedin,
  },
  nav: {
    brand: {
      text: profile.name,
      accentText: ".",
      href: "#",
    },
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Hire Me",
      href: "#contact",
    },
  },
  seo: {
    title: `${profile.name} | UI/UX Designer Portfolio`,
    description:
      "UI/UX designer and lecturer creating holistic systems, teaching with clarity, and helping startups and design teams bring intuitive digital products to life.",
    author: profile.name,
    ogImage:
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8a26296c-4b36-46bf-829e-0469bb62ecf2/id-preview-6db04203--557eecb1-1f64-4c35-842e-6bd4d1e84a18.lovable.app-1775816077576.png",
  },
  theme: {
    mode: "light",
    colors: themeColors,
  },
  blocks: [
    {
      id: "hero-main",
      type: "hero",
      badge: profile.role,
      headingPrefix: "Hi, I'm",
      headingHighlight: profile.name,
      description:
        "I design holistic systems and teach UX to help startups, design teams, and clients build products that feel intuitive, useful, and memorable.",
      primaryCta: {
        label: "Let's Connect",
        href: "#contact",
      },
      secondaryCta: {
        label: "View Projects",
        href: "#experience",
      },
      image: {
        src: withBase("/images/bnw-png.png"),
        alt: `${profile.name} - ${profile.role}`,
        width: 1024,
        height: 1024,
      },
    },
    {
      id: "about-main",
      type: "about",
      title: "About",
      titleHighlight: "Me",
      paragraphs: [
        "I'm a UI/UX designer and lecturer who creates holistic systems, visual storytelling, and usable experiences for product teams.",
        "I teach programming and design with simplicity, helping students learn complex concepts through visualization and practical workflows.",
      ],
      image: {
        src: "https://media.licdn.com/dms/image/v2/D4E03AQGvF7uesLLl9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721731067115?e=1778112000&v=beta&t=rXTa6EdrVbG7fILDq1e1up87fKkfBB23ixHkXubCfGM",
        alt: `${profile.name} - ${profile.role}`,
        width: 500,
        height: 600,
      },
      nameTag: profile.name,
      stats: [
        { value: "4+", label: "Years Experience" },
        { value: "30+", label: "Projects Built" },
        { value: "15+", label: "Happy Clients" },
        { value: "99%", label: "Delivery Rate" },
      ],
    },
    {
      id: "skills-main",
      type: "skills",
      title: "My",
      titleHighlight: "Skills",
      subtitle:
        "Core strengths across design, teaching, and technical problem solving.",
      items: [
        { name: "Holistic UX Design", level: 94 },
        { name: "Teaching & Mentorship", level: 92 },
        { name: "Programming Fundamentals", level: 88 },
        { name: "Communication & Leadership", level: 90 },
        { name: "Critical Thinking", level: 96 },
      ],
      image: {
        src: withBase("/images/skills-clipart.png"),
        alt: "Achievement and skills illustration",
        width: 800,
        height: 800,
      },
    },
    {
      id: "services-main",
      type: "services",
      title: "What I",
      titleHighlight: "Do",
      subtitle:
        "Training, mentorship, and design support for creative teams and learners.",
      items: [
        {
          icon: "🎓",
          title: "Training Sessions",
          desc: "Interactive workshops on UX, design systems, and visual thinking for teams and students.",
        },
        {
          icon: "🤝",
          title: "Mentorship",
          desc: "Career guidance and portfolio coaching for aspiring UX designers and developers.",
        },
        {
          icon: "🧠",
          title: "Design Strategy",
          desc: "Holistic system design advice for creating products that are usable, useful, and aligned to goals.",
        },
      ],
      image: {
        src: withBase("/images/services-clipart.png"),
        alt: "Digital marketing tools",
        width: 800,
        height: 800,
      },
    },
    {
      id: "experience-main",
      type: "experience",
      title: "My",
      titleHighlight: "Journey",
      subtitle: "Teaching, designing, and mentoring across product and academic spaces.",
      items: [
        {
          year: "2024 - Present",
          role: "CS Lecturer",
          company: "Undergraduate Computer Science Program",
          desc: "Teaching C, C++, Java, Python, compiler design, operating systems, and software engineering with clear visual explanations.",
        },
        {
          year: "2022 - 2024",
          role: "UI/UX Designer",
          company: "Freelance Clients",
          desc: "Designing polished product experiences and user flows for startups and creative teams.",
        },
        {
          year: "2021 - 2022",
          role: "Design Mentor",
          company: "Portfolio Workshops",
          desc: "Coaching aspiring designers to communicate ideas clearly and build stronger portfolios.",
        },
      ],
    },
    {
      id: "contact-main",
      type: "contact",
      title: "Let's",
      titleHighlight: "Talk",
      subtitle:
        "Need a design mentor, training session, or UX collaborator? Let's connect and bring your ideas to life.",
      cardTitle: "Send a Message",
      submitLabel: "Send Message",
      successMessage: "Thanks for your message. I will get back to you soon.",
      errorMessage: "Unable to send your message right now. Please try again shortly.",
      contactItems: [
        { icon: "✉️", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
        { icon: "📍", label: "Location", value: profile.location },
        { icon: "🔗", label: "LinkedIn", value: profile.linkedin, href: socialLinks.linkedin },
      ],
      image: {
        src: withBase("/images/contact-clipart.png"),
        alt: "Contact and communication illustration",
        width: 800,
        height: 800,
      },
    },
    {
      id: "footer-main",
      type: "footer",
      socialLinks: [
        { label: "LinkedIn", href: socialLinks.linkedin },
        { label: "GitHub", href: socialLinks.github },
        { label: "Behance", href: socialLinks.behance },
      ],
      copyrightText: "All rights reserved.",
    },
  ],
};
