import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import HeroImage from "../../../assets/images/hero-image.webp"


const heroData = {
  heroImage: HeroImage,
  role: "Web Developer",
  title: "I am",
  highlightTitle: "Orlando Dela Cruz",
  subtitle: "I craft clean, responsive, and user-focused web interfaces with a passion for modern design and performance.",

  primaryButton: {
    label: "View Projects",
    link: "projects"
  },

  secondaryButton: {
    label: "Download CV",
    link: "/resume.pdf"
  },

  socialLinks: [
    { id: "github", icon: FaGithub, link: "https://github.com/orlandostack", label: "Visit yy Github" },
    { id: "linkedin", icon: FaLinkedin, link: "#", label: "Visit my Linked In" },
    { id: "facebook", icon: FaFacebook, link: "#", label: "Visit my Facebook" },
    { id: "gmal", icon: IoMail, link: "#", label: "Send me an Email" },
  ]
}

export default heroData;