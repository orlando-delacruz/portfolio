import Logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const footerData = {
  logo: {
    image: Logo,
    alt: "Orlando Dela Cruz Logo",
  },

  title: "Orlando Dela Cruz",
  subtitle: "Web Developer",
  description:
    "Fresh graduate web developer focused on building responsive and scalable modern web applications.",

  socialLinks: [
    { id: "social-github", href: "#", icon: FaGithub },
    { id: "social-linkedin", href: "#", icon: FaLinkedin },
    { id: "social-mail", href: "#", icon: IoIosMail },
    { id: "social-phone", href: "#", icon: FaPhone },
    { id: "social-facebook", href: "#", icon: FaFacebook },
  ],

  quickLinksTitle: "Quick Links",
  quickLinks: [
    { id: "quick-home", href: "#", label: "Home" },
    { id: "quick-about", href: "#", label: "About" },
    { id: "quick-projects", href: "#", label: "Projects" },
    { id: "quick-skill", href: "#", label: "Skill" },
    { id: "quick-services", href: "#", label: "Services" },
    { id: "quick-testimonials", href: "#", label: "Testimonials" },
    { id: "quick-blogs", href: "#", label: "Blogs" },
    { id: "quick-contact", href: "#", label: "Contact" },
  ],

  pageLinksTitle: "Landing Pages",
  pageLinks: [
    { id: "page-home", href: "#", label: "Home Page" },
    { id: "page-about", href: "#", label: "About Page" },
    { id: "page-project", href: "#", label: "Project Page" },
    { id: "page-blog", href: "#", label: "Blog Page" },
    { id: "page-contact", href: "#", label: "Contact Page" },
  ],

  contactTitle: "Contact Us",
  contactLinks: [
    { id: "contact-location", href: "#", icon: FaLocationDot, label: "Brgy. Bagong Niing, San Antonio, Quezon" },
    { id: "contact-phone", href: "#", icon: FaPhone, label: "09095984478" },
    { id: "contact-mail", href: "#", icon: IoIosMail, label: "delacruzorlando776@gmail.com" },
  ],
};

export default footerData;