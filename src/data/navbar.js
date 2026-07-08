import Logo from "../assets/images/logo.webp";

const navbarData = {
    logo: Logo,
    title: "Orlando Dela Cruz",
    subtitle: "Front-End Developer",

    actionButton: {
        label: "Get In Touch",
        href: "/contact",
    },

    navlinks: [
        { label: "Home", href: "#home", id: "home", type: "section" },
        { label: "About", href: "/about", id: "about", type: "page" },
        { label: "Projects", href: "#projects", id: "projects", type: "section" },
        { label: "Skills", href: "#skills", id: "skills", type: "section" },
        { label: "Blogs", href: "/blogs", id: "blogs", type: "page" },
        { label: "Contact", href: "/contact", id: "contact", type: "page" },
    ],
}

export default navbarData;