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
    { id: "social-github", href: "https://github.com/orlandostack", icon: FaGithub, label: "Visit my GitHub profile" },
    { id: "social-linkedin", href: "https://www.linkedin.com/in/orlando-jr-dela-cruz-127998273/", icon: FaLinkedin, label: "Visit my LinkedIn profile" },
    { id: "social-mail", href: "mailto:orlando.delacruz.dev@gmail.com", icon: IoIosMail, label: "Send me an email" },
    { id: "social-phone", href: "tel:+639095984478", icon: FaPhone, label: "Call me" },
    { id: "social-facebook", href: "https://web.facebook.com/orlando.arcangel/", icon: FaFacebook, label: "Visit my Facebook profile" },
  ],

  quickLinksTitle: "Quick Links",

  quickLinks: [
    { id: "quick-home", href: "/", label: "Home", type: "page" },
    { id: "quick-about", href: "/about", label: "About", type: "page" },
    { id: "quick-projects", href: "/projects", label: "Projects", type: "page" },
    { id: "quick-blogs", href: "/blogs", label: "Blogs", type: "page" },
    { id: "quick-contact", href: "/contact", label: "Contact", type: "page" },
    // Section links (only work on Home, but we handle cross-page via hook)
    { id: "quick-skills", href: "#skills", label: "Skills", type: "section" },
    { id: "quick-services", href: "#services", label: "Services", type: "section" },
    { id: "quick-testimonials", href: "#testimonials", label: "Testimonials", type: "section" },
    { id: "quick-experience", href: "#experience", label: "Experience", type: "section" },
  ],

  // ═══════════════════════════════════════════════════════════
  // PAGE LINKS: all page navigation (no section links here)
  // ═══════════════════════════════════════════════════════════
  pageLinksTitle: "Landing Pages",
  pageLinks: [
    { id: "page-home", href: "/", label: "Home Page" },
    { id: "page-about", href: "/about", label: "About Page" },
    { id: "page-project", href: "/projects", label: "Project Page" },
    { id: "page-blog", href: "/blogs", label: "Blog Page" },
    { id: "page-contact", href: "/contact", label: "Contact Page" },
  ],

  contactTitle: "Contact Us",
  contactLinks: [
    { id: "contact-location", href: "https://maps.google.com/?q=San+Antonio+Quezon+Philippines", icon: FaLocationDot, label: "Brgy. Bagong Niing, San Antonio, Quezon" },
    { id: "contact-phone", href: "tel:+639095984478", icon: FaPhone, label: "09095984478" },
    { id: "contact-mail", href: "mailto:orlando.delacruz.dev@gmail.com", icon: IoIosMail, label: "orlando.delacruz.dev@gmail.com" },
  ],
};

export default footerData;