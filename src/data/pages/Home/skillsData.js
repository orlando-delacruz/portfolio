import HTMLIcon from "../../../assets/images/skills/html.webp";
import CSSIcon from "../../../assets/images/skills/css.webp";
import JavaScriptIcon from "../../../assets/images/skills/javascript.webp";
import ReactIcon from "../../../assets/images/skills/react.webp";
import AntDesignIcon from "../../../assets/images/skills/ant-design.webp";
import StyledComponentsIcon from "../../../assets/images/skills/styled-components.webp";
import BootstrapIcon from "../../../assets/images/skills/bootstrap.webp";
import TailwindIcon from "../../../assets/images/skills/tailwind.webp";
import ViteIcon from "../../../assets/images/skills/vite.webp";

const skillsData = {
  heading: {
    pretitle: "Skills & Technologies",
    title: "My Tech",
    highlight: "Stack",
    ariaLabel: "skills and technologies",
  },

  categories: [
    {
      id: "frontend",
      label: "Front End",
      skills: [
        { id: "html", icon: HTMLIcon, label: "HTML" },
        { id: "css", icon: CSSIcon, label: "CSS" },
        { id: "js", icon: JavaScriptIcon, label: "JavaScript" },
        { id: "react", icon: ReactIcon, label: "React" },
        { id: "antd", icon: AntDesignIcon, label: "Ant Design" },
        { id: "sc", icon: StyledComponentsIcon, label: "Styled Components" },
        { id: "bootstrap", icon: BootstrapIcon, label: "Bootstrap" },
        { id: "tailwind", icon: TailwindIcon, label: "TailwindCSS" },
        { id: "vite", icon: ViteIcon, label: "Vite" },
      ],
    },
    {
      id: "backend",
      label: "Back End",
      skills: [
        // add back-end entries here
      ],
    },
    {
      id: "tools",
      label: "Tools",
      skills: [
        // add tooling entries here
      ],
    },
    {
      id: "soft-skills",
      label: "Soft Skills",
      skills: [
        // add soft skill entries here
      ],
    },
  ],
};

export default skillsData;