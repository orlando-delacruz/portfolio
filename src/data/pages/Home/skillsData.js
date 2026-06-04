// ========== FRONTEND ==========
import HTMLIcon from "../../../assets/images/skills/html.webp";
import CSSIcon from "../../../assets/images/skills/css.webp";
import JavaScriptIcon from "../../../assets/images/skills/javascript.webp";
import ReactIcon from "../../../assets/images/skills/react.webp";
import AntDesignIcon from "../../../assets/images/skills/ant-design.webp";
import StyledComponentsIcon from "../../../assets/images/skills/styled-components.webp";
import BootstrapIcon from "../../../assets/images/skills/bootstrap.webp";
import TailwindIcon from "../../../assets/images/skills/tailwind.webp";
import ViteIcon from "../../../assets/images/skills/vite.webp";

// ========== BACKEND ==========
import PHP from "../../../assets/images/skills/php.webp";
import Laravel from "../../../assets/images/skills/laravel.webp";
import REST from "../../../assets/images/skills/REST.webp";
import GraphQL from "../../../assets/images/skills/graphql.webp";

// ========== TOOLS ===========
import Git from "../../../assets/images/skills/git.webp";
import Github from "../../../assets/images/skills/github.webp";
import VSCode from "../../../assets/images/skills/vscode.webp";
import ClickUp from "../../../assets/images/skills/clickup.webp";
import Chrome from "../../../assets/images/skills/chrome.webp";
import Lighthouse from "../../../assets/images/skills/loghthouse.webp";
import Discord from "../../../assets/images/skills/discord.webp";
import Canva from "../../../assets/images/skills/canva.webp";

// ========== SOFT SKILLS ==========
import Communication from "../../../assets/images/skills/communication.webp";
import Teamwork from "../../../assets/images/skills/teamwork.webp";
import TimeManagement from "../../../assets/images/skills/time-management.webp";
import ProblemSolving from "../../../assets/images/skills/problem-solving.webp";
import Adaptability from "../../../assets/images/skills/adaptability.webp";
import Attention from "../../../assets/images/skills/attention-detail.webp";



const skillsData = {
  heading: {
    pretitle: "Skills & Technologies",
    title: "My Tech",
    highlight: "Stack",
    ariaLabel: "skills and technologies",
  },

  categories: [
    // ================= FRONTEND =================
    {
      id: "frontend",
      label: "Front End",
      skills: [
        { id: "html", icon: HTMLIcon, label: "HTML5" },
        { id: "css", icon: CSSIcon, label: "CSS3" },
        { id: "javascript", icon: JavaScriptIcon, label: "JavaScript" },
        { id: "react", icon: ReactIcon, label: "React" },

        { id: "tailwind", icon: TailwindIcon, label: "Tailwind CSS" },
        { id: "bootstrap", icon: BootstrapIcon, label: "Bootstrap" },
        { id: "styled", icon: StyledComponentsIcon, label: "Styled Components" },
        { id: "antd", icon: AntDesignIcon, label: "Ant Design" },

        { id: "vite", icon: ViteIcon, label: "Vite" },
      ],
    },

    // ================= BACKEND =================
    {
      id: "backend",
      label: "Back End",
      skills: [
        { id: "php", icon: PHP, label: "PHP" },
        { id: "laravel", icon: Laravel, label: "Laravel" },
        { id: "rest", icon: REST, label: "REST API" },
        { id: "graphql", icon: GraphQL, label: "GraphQL" },
      ],
    },

    // ================= TOOLS =================
    {
      id: "tools",
      label: "Tools",
      skills: [
        { id: "git", icon: Git, label: "Git" },
        { id: "github", icon: Github, label: "GitHub" },
        { id: "vscode", icon: VSCode, label: "VS Code" },
        { id: "clickup", icon: ClickUp, label: "ClickUp" },
        { id: "devtools", icon: Chrome, label: "Chrome DevTools" },
        { id: "lighthouse", icon: Lighthouse, label: "Lighthouse" },
        { id: "discord", icon: Discord, label: "Discord" },
        { id: "canva", icon: Canva, label: "Canva" },
      ],
    },

    // ================= SOFT SKILLS =================
    {
      id: "soft-skills",
      label: "Soft Skills",
      skills: [
        { id: "communication", icon: Communication, label: "Communication" },
        { id: "teamwork", icon: Teamwork, label: "Teamwork" },
        { id: "timemanagement", icon: TimeManagement, label: "Time Management" },
        { id: "problemsolving", icon: ProblemSolving, label: "Problem Solving" },
        { id: "adaptability", icon: Adaptability, label: "Adaptability" },
        { id: "attention", icon: Attention, label: "Attention to Detail" },
      ],
    },
  ],
};

export default skillsData;