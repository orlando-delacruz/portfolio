// src/data/project.js
import Project1 from "../assets/images/projects/project-1.webp";
import Project2 from "../assets/images/projects/project-2.webp";
import Project3 from "../assets/images/projects/project-3.webp";
import Project4 from "../assets/images/projects/project-4.webp";

// HEADING
export const projectsHeading = {
  pretitle: "Featured Projects",
  title: "My Projects",
  highlight: "Showcase",
  arialabel: "projects-heading",
};

// VIEW ALL BUTTON
export const viewAll = {
  link: "/projects",
  label: "View All",
};

// CATEGORY
export const filtersData = [
  { key: "all", label: "All Projects" },
  { key: "frontend", label: "Frontend" },
  { key: "freelance", label: "Freelance" },
  { key: "academic", label: "Academic" },
  { key: "personal", label: "Personal" },
];

const projects = [
  /* ── PROJECT 1 ─────────────────────────────────────────── */
  {

    id: 1,
    slug: "portfolio",
    thumbnail: Project1,
    thumbnailAlt: "Personal Portfolio Website screenshot",
    title: "Personal Portfolio Website",
    category: "Personal Project",
    categoryKey: "personal",
    duration: "Ongoing",

    description:
      "A fully responsive personal portfolio website built to showcase my skills, projects, experience, and professional growth as a frontend developer. Developed using React, Styled Components, Ant Design, JavaScript, CSS, and Vite with a focus on performance, accessibility, and SEO.",

    links: {
      live: "https://orlandodelacruz.vercel.app/",
      github: "https://github.com/orlandostack/portfolio",
      caseStudy: "/projects/portfolio",
    },

    year: "2026",
    role: "Frontend Developer",
    overview:
      "This portfolio serves as my professional online presence and project showcase. The goal was to create a modern and scalable website that highlights my expertise, technical skills, and completed projects while maintaining excellent performance and usability. The project follows a component-based architecture using React and Styled Components, with Ant Design components integrated where appropriate to improve development efficiency and user experience.",
    highlights: [
      "Responsive Design",
      "SEO Optimization",
      "Project Showcase",
      "Performance Focused",
    ],
    techStack: [
      { name: "React", purpose: "Component-based frontend development" },
      { name: "Styled Components", purpose: "Scoped and maintainable styling" },
      { name: "Ant Design", purpose: "Reusable UI components and layouts" },
      { name: "JavaScript", purpose: "Application logic and interactivity" },
      { name: "CSS", purpose: "Custom styling and responsive layouts" },
      { name: "Vite", purpose: "Fast build tool and development server" },
      { name: "React Helmet", purpose: "SEO metadata management" },
      { name: "Sharp", purpose: "Image optimization and WebP conversion" },
    ],
    challenges: [
      {
        title: "Maintaining SEO in a React application",
        body: "Since the website is built as a single-page application, search engine optimization required additional configuration. React Helmet was implemented to manage page titles, meta descriptions, and social sharing metadata dynamically.",
      },
      {
        title: "Optimizing image performance",
        body: "Large image assets affected loading performance. Sharp was used to convert and optimize images into WebP format, reducing file sizes significantly while preserving image quality.",
      },
    ],
  },

  /* ── PROJECT 2 ─────────────────────────────────────────── */
  {
    id: 2,
    slug: "sanhs-website",
    thumbnail: Project2,
    thumbnailAlt: "SANHS school website screenshot",
    title: "SANHS Website",
    category: "Freelance Project",
    categoryKey: "freelance",
    duration: "3 Months",
    description:
      "A modern school website developed for San Antonio National High School to establish its official online presence. Built with React, Styled Components, Ant Design, Framer Motion, Hygraph, and GraphQL for dynamic content management and an engaging user experience.",
    links: {
      live: "https://sanhs-website-edu.vercel.app/",
      github: "https://github.com/orlandostack/sanhs-website",
      caseStudy: "/projects/sanhs-website",
    },
    year: "2025",
    role: "Frontend Developer",
    overview:
      "San Antonio National High School previously had no official website. The objective of the project was to create a professional digital platform that would serve as the school's primary online communication channel. The website allows administrators to manage content efficiently through a headless CMS while providing users with a modern browsing experience enhanced by animations and responsive design.",
    highlights: [
      "School Website Development",
      "CMS Integration",
      "Responsive Design",
      "Interactive Animations",
    ],
    techStack: [
      { name: "React", purpose: "Frontend development and component architecture" },
      { name: "Styled Components", purpose: "Reusable and responsive styling" },
      { name: "Ant Design", purpose: "UI components and forms" },
      { name: "Framer Motion", purpose: "Animations and page transitions" },
      { name: "Hygraph", purpose: "Headless CMS for content management" },
      { name: "GraphQL", purpose: "Efficient content retrieval and querying" },
      { name: "Vite", purpose: "Fast development and build tooling" },
    ],
    challenges: [
      {
        title: "Building the school's first digital presence",
        body: "Because the school did not have an existing website, the project required planning the overall structure, navigation, and content organization to ensure information was easy to access for students, parents, and faculty members.",
      },
      {
        title: "Simplifying content management",
        body: "School staff needed a way to update announcements and content without technical knowledge. Hygraph content models were configured to provide a simple and structured content management experience.",
      },
    ],
    screenshots: [
      { src: Project1, alt: "Portfolio homepage screenshot" },
      { src: Project1, alt: "Portfolio projects section" },
    ],
  },

  /* ── PROJECT 3 ─────────────────────────────────────────── */
  {
    id: 3,
    slug: "classic-english",
    thumbnail: Project3,
    thumbnailAlt: "Classic English educational platform screenshot",
    title: "Classic English",
    category: "Freelance Project",
    categoryKey: "freelance",
    duration: "3 Months",
    description:
      "An educational platform designed to make literature more engaging through interactive stories, character profiles, multimedia content, audio narration, and video integration. Built using React, Styled Components, Framer Motion, Hygraph, and GraphQL.",
    links: {
      live: "https://classic-english.vercel.app/",
      github: "https://github.com/orlandostack/digital-classic-english",
      caseStudy: "/projects/classic-english",
    },
    year: "2024",
    role: "Frontend Developer",
    overview:
      "Classic English was built as a school requirement brought to life. The goal was to make Shakespeare and other classical authors approachable to high school students through design and interactivity — not just text on a page. The project leans heavily on animation and multimedia to create something that feels more like a digital magazine than a textbook.",
    highlights: [
      "Interactive Learning",
      "Multimedia Content",
      "CMS Integration",
      "Responsive Design",
    ],
    techStack: [
      { name: "React", purpose: "Component architecture and routing" },
      { name: "Styled Components", purpose: "Themed, responsive layout system" },
      { name: "Framer Motion", purpose: "Story reveal animations and page transitions" },
      { name: "GraphQL", purpose: "Querying stories, characters, and media" },
      { name: "Hygraph", purpose: "CMS for all literary content and media assets" },
    ],
    challenges: [
      {
        title: "Audio playback consistency across browsers",
        body: "The Web Audio API behaved differently in Safari vs Chrome, especially around autoplay policies. Audio was wrapped in a unified hook that requests user gesture before playing and gracefully degrades to a visible play button when autoplay is blocked.",
      },
      {
        title: "Rich text from CMS to React",
        body: "Hygraph returns rich text as a JSON AST. A recursive renderer was built to map each node type to styled React components, giving full control over formatting without touching code.",
      },
    ],
  },

  /* ── PROJECT 4 ─────────────────────────────────────────── */
  {
    id: 4,
    slug: "sanhs-qc",
    thumbnail: Project4,
    thumbnailAlt: "SANHS QC System dashboard screenshot",
    title: "SANHS QC System",
    category: "Academic Project",
    categoryKey: "academic",
    duration: "3 Months",
    description:
      "A web-based Quality Control System developed for San Andres National High School to streamline equipment monitoring, inspections, and reporting. The platform integrates a Decision Tree Machine Learning Model for predictive equipment analysis and maintenance planning.",
    links: {
      live: "https://qc-system.vercel.app/",
      github: "https://github.com/DhennisNizal/qc-system",
      caseStudy: "/projects/sanhs-qc",
    },
    year: "2024",
    role: "Frontend Developer",
    overview:
      "The SANHS QC System was developed as an academic project following Agile SDLC principles. The goal was to digitize quality control workflows and improve equipment monitoring through a centralized web application. The frontend interface, dashboard system, and user experience were built while integrating data from Hygraph through GraphQL. A key feature is the Decision Tree Machine Learning Model that helps analyze equipment conditions and generate predictive insights for maintenance planning.",
    highlights: [
      "Dashboard System",
      "Machine Learning Integration",
      "Decision Tree Model",
      "GraphQL Integration",
      "Responsive Interface",
    ],
    techStack: [
      { name: "React", purpose: "Frontend application development" },
      { name: "Styled Components", purpose: "Component-based styling system" },
      { name: "JavaScript", purpose: "Application logic and interactivity" },
      { name: "CSS", purpose: "Layout and visual customization" },
      { name: "HTML", purpose: "Application structure" },
      { name: "Hygraph", purpose: "Headless CMS and content management" },
      { name: "GraphQL", purpose: "Efficient data querying and integration" },
      { name: "Vite", purpose: "Development and build tooling" },
      { name: "Decision Tree Model", purpose: "Predictive equipment analysis" },
    ],
    challenges: [
      {
        title: "Presenting machine learning predictions clearly",
        body: "Machine learning outputs can be difficult for non-technical users to understand. The interface was designed to display prediction results in a simple and accessible format, allowing users to quickly identify equipment conditions and recommended actions.",
      },
      {
        title: "Managing dynamic data efficiently",
        body: "The system required handling multiple data sources and dynamically updating dashboard information. GraphQL queries and reusable React components were implemented to keep the application scalable and maintainable.",
      },
    ],
  },
];



export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export default projects;