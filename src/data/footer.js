import Logo from "../assets/images/logo.webp";
import FooterBg from "../assets/images/footer.webp";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const footerData = {
  logo: {
    image: Logo,
    alt: "Orlando Dela Cruz Logo",
  },

  footerBg: FooterBg,

  title: "Orlando Dela Cruz",
  subtitle: "Web Developer",
  description:
    "Web developer focused on building responsive and scalable modern web applications.",

  socialLinks: [
    { id: "social-github", href: "#", icon: FaGithub, label: "Visit my GitHub profile" },
    { id: "social-linkedin", href: "#", icon: FaLinkedin, label: "Visit my LinkedIn profile" },
    { id: "social-mail", href: "#", icon: IoIosMail, label: "Send me an email" },
    { id: "social-phone", href: "#", icon: FaPhone, label: "Call me" },
    { id: "social-facebook", href: "#", icon: FaFacebook, label: "Visit my Facebook profile" },
  ],

  quickLinksTitle: "Quick Links",
  quickLinks: [
    { id: "quick-home", href: "#home", label: "Home" },
    { id: "quick-about", href: "#about", label: "About" },
    { id: "quick-projects", href: "#projects", label: "Projects" },
    { id: "quick-skill", href: "#skills", label: "Skills" },
    { id: "quick-services", href: "#services", label: "Services" },
    { id: "quick-testimonials", href: "#testimonials", label: "Testimonials" },
    { id: "quick-blogs", href: "#blogs", label: "Blogs" },
    { id: "quick-contact", href: "#contacts", label: "Contact" },
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
    { id: "contact-location", href: "https://maps.google.com/?q=San+Antonio+Quezon+Philippines", icon: FaLocationDot, label: "Brgy. Bagong Niing, San Antonio, Quezon" },
    { id: "contact-phone", href: "tel:+639095984478", icon: FaPhone, label: "09095984478" },
    { id: "contact-mail", href: "mailto:delacruzorlando776@gmail.com", icon: IoIosMail, label: "delacruzorlando776@gmail.com" },
  ],
};

export default footerData;