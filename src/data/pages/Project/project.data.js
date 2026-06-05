// Re-use the same local image imports from home (adjust paths as needed)
import Project1 from "../../../assets/images/projects/project-1.webp";
import Project2 from "../../../assets/images/projects/project-2.webp";
import Project3 from "../../../assets/images/projects/project-3.webp";
import Project4 from "../../../assets/images/projects/project-4.webp";

/* ─── Filter tabs ─────────────────────────────────────────── */
export const filtersData = [
  { key: "all", label: "All Projects" },
  { key: "frontend", label: "Frontend" },
  { key: "freelance", label: "Freelance" },
  { key: "academic", label: "Academic" },
  { key: "personal", label: "Personal" },
];

/* ─── Projects ────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    thumbnail: Project1,
    thumbnailAlt: "Personal Portfolio Website screenshot",
    title: "Personal Portfolio Website",
    category: "Personal Project",
    categoryKey: "personal",
    duration: "3 Months",
    description:
      "A fully responsive personal portfolio website developed to showcase my skills, projects, experience, and professional growth as a web developer. Built with React, Styled Components, and Framer Motion to create a modern and engaging user experience.",
    highlights: [
      "Responsive Design",
      "Interactive Animations",
      "SEO Optimization",
      "Project Showcase",
    ],
    techStack: ["React", "Styled Components", "Framer Motion", "Vite"],
    links: {
      live: "https://orlandodelacruz.vercel.app/",
      github: "https://github.com/orlandostack/portfolio",
      caseStudy: "/projects/portfolio",
    },
  },
  {
    id: 2,
    thumbnail: Project2,
    thumbnailAlt: "SANHS school website screenshot",
    title: "SANHS Website",
    category: "Freelance Project",
    categoryKey: "freelance",
    duration: "3 Months",
    description:
      "A modern school website designed to provide students, parents, and faculty with easy access to announcements, events, academic information, and school updates. The platform integrates a headless CMS to allow dynamic content management without requiring code changes.",
    highlights: [
      "CMS Integration",
      "Responsive Design",
      "GraphQL",
      "Content Management",
    ],
    techStack: ["React", "Styled Components", "Ant Design", "Hygraph", "GraphQL"],
    links: {
      live: "https://sanhs-website-edu.vercel.app/",
      github: "https://github.com/orlandostack/sanhs-website",
      caseStudy: "/projects/sanhs-website",
    },
  },
  {
    id: 3,
    thumbnail: Project3,
    thumbnailAlt: "Classic English educational platform screenshot",
    title: "Classic English",
    category: "Freelance Project",
    categoryKey: "freelance",
    duration: "3 Months",
    description:
      "An educational platform created to make literature more engaging for students through interactive stories, multimedia content, character descriptions, audio narration, and video integration.",
    highlights: [
      "Interactive Learning",
      "Multimedia Content",
      "CMS Integration",
      "Responsive Design",
    ],
    techStack: ["React", "Styled Components", "Framer Motion", "GraphQL", "Hygraph"],
    links: {
      live: "https://classic-english.vercel.app/",
      github: "https://github.com/orlandostack/digital-classic-english",
      caseStudy: "/projects/classic-english",
    },
  },
  {
    id: 4,
    thumbnail: Project4,
    thumbnailAlt: "SANHS QC System dashboard screenshot",
    title: "SANHS QC System",
    category: "Academic Project",
    categoryKey: "academic",
    duration: "3 Months",
    description:
      "A web-based equipment quality control system developed using Agile SDLC principles. The platform digitizes inspection workflows and integrates predictive monitoring features using machine learning models for equipment analysis and reporting.",
    highlights: [
      "Role-Based Access",
      "Dashboard System",
      "Protected Routes",
      "Agile Development",
    ],
    techStack: ["React", "Laravel", "MySQL", "PHP"],
    links: {
      live: "https://qc-system.vercel.app/",
      github: "https://github.com/DhennisNizal/qc-system",
      caseStudy: "/projects/sanhs-qc",
    },
  },
];

export default projects;