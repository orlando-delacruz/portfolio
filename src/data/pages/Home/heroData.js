import { FaGithub, FaLinkedin, FaFacebook, FaLaptopCode, FaReact, FaHtml5, FaLaravel } from "react-icons/fa";
import { IoMail, IoLogoJavascript } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";

import HeroImage from "../../../assets/images/hero-image.webp";

const heroData = {
  heroImage: HeroImage,
  role: "Front-End Developer",
  title: "I am",
  highlightTitle: "Orlando Dela Cruz",
  subtitle: "I craft clean, responsive, and user-focused web interfaces with a passion for modern design and performance.",

  primaryButton: {
    label: "View Projects",
    link: "projects",
    icon: FaLaptopCode,
  },

  secondaryButton: {
    label: "Download CV",
    link: "/resume.pdf",
    icon: MdOutlineFileDownload,
  },

  socialLinks: [
    { id: "github", icon: FaGithub, link: "https://github.com/orlandostack", label: "Visit my Github" },
    { id: "linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/orlando-jr-dela-cruz-127998273/", label: "Visit my LinkedIn" },
    { id: "facebook", icon: FaFacebook, link: "https://web.facebook.com/orlando.arcangel/", label: "Visit my Facebook" },
    { id: "gmail", icon: IoMail, link: "mailto:orlando.delacruz.dev@gmail.com", label: "Send me an Email" },
  ],

  skills: [
    {
      id: 1, icon: FaReact, color: "#00BCD4", label: "React",
      position: { top: "5%", left: "25%" },
      tabletPosition: { top: "2%", left: "28%" },
      mobilePosition: { top: "2%", left: "22%" },
    },
    {
      id: 2, icon: FaLaravel, color: "#FF5252", label: "Laravel",
      position: { top: "40%", left: "5%" },
      tabletPosition: { top: "38%", left: "20%" },
      mobilePosition: { top: "38%", left: "10%" },
    },
    {
      id: 3, icon: FaHtml5, color: "#E65100", label: "HTML5",
      position: { top: "25%", left: "65%" },
      tabletPosition: { top: "22%", left: "62%" },
      mobilePosition: { top: "22%", left: "62%" },
    },
    {
      id: 4, icon: IoLogoCss3, color: "#0277BD", label: "CSS3",
      position: { top: "80%", left: "15%" },
      tabletPosition: { top: "78%", left: "20%" },
      mobilePosition: { top: "78%", left: "12%" },
    },
    {
      id: 5, icon: IoLogoJavascript, color: "#FFCA28", label: "JavaScript",
      position: { top: "65%", left: "72%" },
      tabletPosition: { top: "63%", left: "70%" },
      mobilePosition: { top: "63%", left: "70%" },
    },
  ],
};

export default heroData;