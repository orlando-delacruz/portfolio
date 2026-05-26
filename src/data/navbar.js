import Logo from "../assets/images/logo.webp";

const navbarData = {
    logo: Logo,
    title: "Orlando Dela Cruz",
    subtitle: "Web Developer",

    actionButton: {
        label: "Get In Touch",
        href: "contacts",
    },

    navlinks: [
        { label: "Home", href: "#home", id: "home" },
        { label: "About", href: "#about", id: "about" },
        { label: "Projects", href: "#projects", id: "projects" },
        { label: "Skills", href: "#skills", id: "skills" },
        { label: "Blogs", href: "#blogs", id: "blogs" },
        { label: "Contact", href: "#contacts", id: "contacts" },
    ],
}

export default navbarData;