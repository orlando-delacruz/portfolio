import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import navbarData from "../../data/navbar";

const { navlinks } = navbarData;

const useActiveSection = () => {
    const [activeLink, setActiveLink] = useState(null);
    const isClickScrolling = useRef(false);
    const location = useLocation();

    // Compute active link for page routes during render (no effect needed)
    const pageActiveLink = useMemo(() => {
        const path = location.pathname;
        if (path === "/") return null;

        const matched = navlinks.find(
            (item) => item.href === path && item.type === "page"
        );
        return matched ? matched.href : null;
    }, [location.pathname]);

    // IntersectionObserver for Home page only — this is a genuine effect
    // because it synchronizes with the external DOM.
    useEffect(() => {
        // Only run on Home page
        if (location.pathname !== "/") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isClickScrolling.current) {
                        const targetId = `#${entry.target.id}`;
                        setActiveLink(targetId);
                    }
                });
            },
            { threshold: 0.3 }
        );

        navlinks.forEach(({ href }) => {
            // Only observe section links (hash-based)
            if (href.startsWith("#")) {
                const section = document.getElementById(href.substring(1));
                if (section) observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    const handleNavClick = (href) => {
        setActiveLink(href);
        isClickScrolling.current = true;
        setTimeout(() => {
            isClickScrolling.current = false;
        }, 600);
    };

    // Return the correct active link based on current route
    const finalActiveLink = location.pathname === "/" ? activeLink : pageActiveLink;

    return { activeLink: finalActiveLink, handleNavClick };
};

export default useActiveSection;