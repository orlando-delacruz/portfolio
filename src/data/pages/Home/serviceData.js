import FrontEnd from "../../../assets/images/services/frontend-development.webp";
import ResponsiveDesign from "../../../assets/images/services/responsive-design.webp";
import UIImplementation from "../../../assets/images/services/ui-implementation.webp";
import BackEndLearning from "../../../assets/images/services/backend-learning.webp";

const serviceData = {
  heading: {
    pretitle: "Services",
    title: "What I",
    highlight: "Can Do",
    ariaLabel: "services offered",
  },

  services: [
    {
      id: "frontend",
      icon: FrontEnd,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern frontend technologies and component-based architecture.",
      tag: "React · JS",
    },
    {
      id: "responsive",
      icon: ResponsiveDesign,
      title: "Responsive Design",
      description:
        "Designing websites optimized for desktop, tablet, and mobile devices with clean and accessible layouts.",
      tag: "Mobile-first",
    },
    {
      id: "ui",
      icon: UIImplementation,
      title: "UI Implementation",
      description:
        "Converting Figma and design mockups into fully functional and responsive web pages.",
      tag: "Figma → Code",
    },
    {
      id: "backend",
      icon: BackEndLearning,
      title: "Backend System Learning",
      description:
        "Developing backend knowledge in APIs, authentication systems, databases, and Laravel application structure.",
      tag: "Laravel · REST",
    },
  ],
};

export default serviceData;