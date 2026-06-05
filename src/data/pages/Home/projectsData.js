import Project1 from "../../../assets/images/projects/project-1.webp";
import Project2 from "../../../assets/images/projects/project-2.webp";
import Project3 from "../../../assets/images/projects/project-3.webp";
import Project4 from "../../../assets/images/projects/project-4.webp";

const projectsData = {
  heading: {
    pretitle: "Featured Projects",
    title: "My Projects",
    highlight: "Showcase",
    arialabel: "projects-heading",
  },

  project: [
    {
      id: 1,
      thumbnail: Project1,
      title: "My Portfolio",
      category: "Personal Project",
      progress: "3 Months",
      description:
        "A fully responsive personal portfolio website built to showcase my skills, projects, experience, and professional growth as a frontend developer. Developed using React, Styled Components, Ant Design, JavaScript, CSS, and Vite, the website focuses on performance, accessibility, and SEO while providing a clean and modern user experience across all devices.",
      github: "https://github.com/orlandostack/portfolio",
      live: "https://orlandodelacruz.vercel.app/",
      view: "/projects/portfolio",
    },

    {
      id: 2,
      thumbnail: Project2,
      title: "SANHS Website",
      category: "Freelance Project",
      progress: "3 Months",
      description:
        "A modern school website developed for San Andres National High School to establish its official online presence. Built using React, Styled Components, Ant Design, Framer Motion, Hygraph, and GraphQL, the platform enables students, parents, and faculty members to access announcements, events, and school information through a responsive and user-friendly interface.",
      github: "https://github.com/orlandostack/sanhs-website",
      live: "https://sanhs-website-edu.vercel.app/",
      view: "/projects/sanhs-website",
    },

    {
      id: 3,
      thumbnail: Project3,
      title: "Classic English",
      category: "Freelance Project",
      progress: "3 Months",
      description:
        "An educational platform designed to make literature more engaging and accessible for students. The website features stories, sonnets, character profiles, embedded videos, and audio narration from William Shakespeare and other classical authors. Developed with React, Styled Components, Framer Motion, Hygraph, and GraphQL, it delivers an interactive and responsive learning experience across desktop and mobile devices.",
      github: "https://github.com/orlandostack/digital-classic-english",
      live: "https://classic-english.vercel.app/",
      view: "/projects/classic-english",
    },

    {
      id: 4,
      thumbnail: Project4,
      title: "SANHS QC",
      category: "Academic Project",
      progress: "3 Months",
      description:
        "A web-based Quality Control System developed for San Andres National High School to streamline equipment monitoring, inspection management, and reporting processes. Built using React, Styled Components, Hygraph, GraphQL, JavaScript, CSS, and Vite, the platform integrates a Decision Tree Machine Learning Model to support predictive equipment analysis and maintenance decision-making.",
      github: "https://github.com/DhennisNizal/qc-system",
      live: "https://qc-system.vercel.app/",
      view: "/projects/sanhs-qc",
    },
  ],

  viewAll: {
    link: "/projects",
    label: "View All",
  },
};

export default projectsData;