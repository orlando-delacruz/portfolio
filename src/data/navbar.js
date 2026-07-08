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
        { label: "Home", href: "/", id: "home" },
        { label: "About", href: "/about", id: "about" },
        { label: "Projects", href: "/projects", id: "projects" },
        { label: "Blog", href: "/blogs", id: "blog" },
        { label: "Contact", href: "/contact", id: "contact" },
    ],
};

export default navbarData;