import Project1 from "../../../assets/images/projects/project-1.webp";
import Project2 from "../../../assets/images/projects/project-2.webp";
import Project3 from "../../../assets/images/projects/project-3.webp";
import Project4 from "../../../assets/images/projects/project-4.webp";

/**
 * Keyed by the slug used in the route: /projects/:slug
 * Each entry mirrors projectsGrid.data fields + adds detail-only fields.
 */
const projectDetailData = {
  portfolio: {
    slug: "portfolio",
    thumbnail: Project1,
    thumbnailAlt: "Personal Portfolio Website screenshot",
    title: "Personal Portfolio Website",
    category: "Personal Project",
    categoryKey: "personal",
    duration: "Ongoing",
    year: "2026",
    role: "Frontend Developer",
    description:
      "A fully responsive personal portfolio website built to showcase my skills, projects, experience, and professional growth as a frontend developer. The website focuses on clean design, fast performance, accessibility, and SEO while providing visitors with an engaging experience across all devices.",

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

    links: {
      live: "https://orlandodelacruz.vercel.app/",
      github: "https://github.com/orlandostack/portfolio",
    },
  },


  "sanhs-website": {
    slug: "sanhs-website",
    thumbnail: Project2,
    thumbnailAlt: "SANHS school website screenshot",
    title: "SANHS Website",
    category: "Freelance Project",
    categoryKey: "freelance",
    duration: "3 Months",
    year: "2025",
    role: "Frontend Developer",

    description:
      "A modern school website developed for San Andres National High School to establish its official online presence. The platform provides students, parents, teachers, and visitors with easy access to announcements, events, academic information, and school updates through a responsive and user-friendly interface.",

    overview:
      "San Andres National High School previously had no official website. The objective of the project was to create a professional digital platform that would serve as the school's primary online communication channel. The website allows administrators to manage content efficiently through a headless CMS while providing users with a modern browsing experience enhanced by animations and responsive design.",

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

    links: {
      live: "https://sanhs-website-edu.vercel.app/",
      github: "https://github.com/orlandostack/sanhs-website",
    },
  },


  "classic-english": {
    slug: "classic-english",
    thumbnail: Project3,
    thumbnailAlt: "Classic English educational platform screenshot",
    title: "Classic English",
    category: "Freelance Project",
    categoryKey: "freelance",
    duration: "3 Months",
    year: "2024",
    role: "Frontend Developer",
    description:
      "An educational platform created to make literature more engaging for students through interactive stories, multimedia content, character descriptions, audio narration, and video integration.",
    overview:
      "Classic English was built as a school requirement brought to life. The goal was to make Shakespeare and other classical authors approachable to high school students through design and interactivity — not just text on a page. I leaned heavily on animation and multimedia to create something that felt more like a digital magazine than a textbook.",
    highlights: [
      "Interactive Learning",
      "Multimedia Content",
      "CMS Integration",
      "Responsive Design",
    ],
    techStack: [
      { name: "React", purpose: "Component architecture & routing" },
      { name: "Styled Components", purpose: "Themed, responsive layout system" },
      { name: "Framer Motion", purpose: "Story reveal animations & page transitions" },
      { name: "GraphQL", purpose: "Querying stories, characters, and media" },
      { name: "Hygraph", purpose: "CMS for all literary content & media assets" },
    ],
    challenges: [
      {
        title: "Audio playback consistency across browsers",
        body: "The Web Audio API behaved differently in Safari vs Chrome, especially around autoplay policies. I wrapped all audio in a unified hook that requests user gesture before playing and gracefully degrades to a visible play button when autoplay is blocked.",
      },
      {
        title: "Rich text from CMS to React",
        body: "Hygraph returns rich text as a JSON AST. I built a recursive renderer that maps each node type (headings, blockquotes, embedded assets) to styled React components, giving designers full control over formatting without touching code.",
      },
    ],
    links: {
      live: "https://classic-english.vercel.app/",
      github: "https://github.com/orlandostack/digital-classic-english",
    },
  },

  "sanhs-qc": {
    slug: "sanhs-qc",
    thumbnail: Project4,
    thumbnailAlt: "SANHS QC System dashboard screenshot",
    title: "SANHS QC System",
    category: "Academic Project",
    categoryKey: "academic",
    duration: "3 Months",
    year: "2024",
    role: "Frontend Developer",

    description:
      "A web-based Quality Control System developed for San Andres National High School to streamline equipment monitoring, inspection management, and reporting processes. The system also integrates machine learning through a Decision Tree Model to support predictive equipment analysis and improve maintenance decision-making.",

    overview:
      "The SANHS QC System was developed as an academic project following Agile SDLC principles. The goal was to digitize quality control workflows and improve equipment monitoring through a centralized web application. My role focused on building the frontend interface, dashboard system, and user experience while integrating data from Hygraph through GraphQL. One of the project's key features was the implementation of a Decision Tree Machine Learning Model that helps analyze equipment conditions and generate predictive insights for maintenance planning.",

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
      { name: "CSS", purpose: "Layout and visual customization" },
      { name: "Hygraph", purpose: "Headless CMS and content management" },
      { name: "GraphQL", purpose: "Efficient data querying and integration" },
      { name: "Vite", purpose: "Development and build tooling" },
      { name: "HTML", purpose: "Application structure" },
      { name: "JavaScript", purpose: "Application logic and interactivity" },
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

    links: {
      live: "https://qc-system.vercel.app/",
      github: "https://github.com/DhennisNizal/qc-system",
    },
  },

};

export default projectDetailData;