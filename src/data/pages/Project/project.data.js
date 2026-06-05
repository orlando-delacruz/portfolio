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
      "A fully responsive personal portfolio website built to showcase my skills, projects, experience, and professional growth as a frontend developer. Developed using React, Styled Components, Ant Design, JavaScript, CSS, and Vite with a focus on performance, accessibility, and SEO.",
    highlights: [
      "Responsive Design",
      "SEO Optimization",
      "Project Showcase",
      "Performance Focused",
    ],
    techStack: [
      "React",
      "Styled Components",
      "Ant Design",
      "JavaScript",
      "CSS",
      "Vite",
      "React Helmet",
      "Sharp",
    ],
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
      "A modern school website developed for San Andres National High School to establish its official online presence. Built with React, Styled Components, Ant Design, Framer Motion, Hygraph, and GraphQL for dynamic content management and an engaging user experience.",
    highlights: [
      "School Website Development",
      "CMS Integration",
      "Responsive Design",
      "Interactive Animations",
    ],
    techStack: [
      "React",
      "Styled Components",
      "Ant Design",
      "Framer Motion",
      "Hygraph",
      "GraphQL",
      "Vite",
    ],
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
      "An educational platform designed to make literature more engaging through interactive stories, character profiles, multimedia content, audio narration, and video integration. Built using React, Styled Components, Framer Motion, Hygraph, and GraphQL.",
    highlights: [
      "Interactive Learning",
      "Multimedia Content",
      "CMS Integration",
      "Responsive Design",
    ],
    techStack: [
      "React",
      "Styled Components",
      "Framer Motion",
      "GraphQL",
      "Hygraph",
    ],
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
      "A web-based Quality Control System developed for San Andres National High School to streamline equipment monitoring, inspections, and reporting. The platform integrates a Decision Tree Machine Learning Model for predictive equipment analysis and maintenance planning.",
    highlights: [
      "Dashboard System",
      "Machine Learning Integration",
      "Decision Tree Model",
      "GraphQL Integration",
    ],
    techStack: [
      "React",
      "Styled Components",
      "JavaScript",
      "CSS",
      "HTML",
      "Hygraph",
      "GraphQL",
      "Vite",
      "Decision Tree Model",
    ],
    links: {
      live: "https://qc-system.vercel.app/",
      github: "https://github.com/DhennisNizal/qc-system",
      caseStudy: "/projects/sanhs-qc",
    },
  },
];

export default projects;