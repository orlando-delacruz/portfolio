import { useState, useEffect, useRef } from "react";
import navbarData from "../../data/navbar";

const { navlinks } = navbarData;
const useActiveSection = () => {
    const [activeLink, setActiveLink] = useState(null);
    const isClickScrolling = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isClickScrolling.current) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        }, { threshold: 0.3 });

        navlinks.forEach(({ href }) => {
            const section = document.getElementById(href.substring(1));
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (href) => {
        setActiveLink(href);
        isClickScrolling.current = true;
        setTimeout(() => { isClickScrolling.current = false; }, 600);
    };

    return { activeLink, handleNavClick };
};

export default useActiveSection;