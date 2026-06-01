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
    // PROJECT 1
    {
      id: 1,
      thumbnail: Project1,
      title: "My Portfolio",
      category: "Personal Project",
      progress: "3 Months",
      description:
        "A fully responsive personal website built from scratch to showcase my skills, projects, and professional journey. Developed using React JS, Styled-Components, and Framer Motion to deliver a clean, interactive, and consistent user interface. Smooth animations enhance user experience, and the site is optimized for both desktop and mobile devices.",
      github: "#",
      live: "#",
      view: "#",
    },

    // PROJECT 2
    {
      id: 2,
      thumbnail: Project2,
      title: "SANHS Website",
      category: "Freelance Project",
      progress: "3 Months",
      description:
        "A modern, fully responsive school website providing students, parents, and teachers with real-time school information. Built with React JS, Styled-Components, and Ant Design for a polished interface. Integrated Hygraph (headless CMS) and GraphQL for dynamic content management, enabling staff to update announcements, events, and news without modifying code.",
      github: "#",
      live: "#",
      view: "#",
    },

    // PROJECT 3
    {
      id: 3,
      thumbnail: Project3,
      title: "Classic English",
      category: "Freelance Project",
      progress: "3 Months",
      description:
        "Classic English is an educational platform created by students of Tayabas Western Academy to bring literature to life. The website features stories and sonnets from William Shakespeare and other classical authors, with interactive elements such as character descriptions, embedded videos for each story, and audio read-aloud options for sonnets. Developed with React JS, Styled-Components, and Framer Motion, it provides a responsive and engaging experience for both desktop and mobile users. Content is managed through Hygraph CMS with GraphQL for dynamic updates.",
      github: "#",
      live: "#",
      view: "#",
    },

    // PROJECT 4
    {
      id: 4,
      thumbnail: Project4,
      title: "SANHS QC",
      category: "Freelance Project",
      progress: "3 Months",
      description:
        "A web-based equipment quality control system for San Antonio National High School, developed using Agile SDLC. The platform digitizes inspections and integrates Decision Tree and LSTM algorithms for predictive monitoring and real-time updates. Features a role-based access system where admins and users access different functionalities through secure, protected routes.",
      github: "#",
      live: "#",
      view: "#",
    },
  ],

  viewAll: {
    link: "#",
    label: "View All",
    target: "",
    rel: "",
  },
};

export default projectsData;