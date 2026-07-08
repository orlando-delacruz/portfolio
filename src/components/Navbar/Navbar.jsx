import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import * as S from "./Navbar.styled";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import navbarData from "../../data/navbar";
import useSectionNavigation from "../../hooks/useSectionNavigation";

const { logo, title, subtitle, actionButton, navlinks } = navbarData;

const LogoContent = () => (
    <>
        <S.LogoImage>
            <img
                src={logo}
                alt={`${title} logo`}
                loading="eager"
                decoding="async"
                width={55}
                height={55}
            />
        </S.LogoImage>
        <S.LogoDetails>
            <S.LogoTitle>{title}</S.LogoTitle>
            <S.LogoSubTitle>{subtitle}</S.LogoSubTitle>
        </S.LogoDetails>
    </>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const offCanvasRef = useRef(null);
    const { navigateToSection, navigateToPage } = useSectionNavigation();

    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);

    // Prevent focus leakage when menu is closed
    useEffect(() => {
        const el = offCanvasRef.current;
        if (!el) return;
        const focusable = el.querySelectorAll("a, button");
        focusable.forEach((node) => {
            node.tabIndex = menuOpen ? 0 : -1;
        });
    }, [menuOpen]);

    const handleNavClick = useCallback(
        (href, type) => {
            closeMenu();
            if (type === "section") {
                const sectionId = href.replace("#", "");
                navigateToSection(sectionId);
            } else {
                navigateToPage(href);
            }
        },
        [closeMenu, navigateToSection, navigateToPage]
    );

    // Memoize nav items
    const NavItems = useMemo(
        () =>
            navlinks.map((item) => {
                const isExact = item.href === "/" || item.href === "/about" || item.href === "/contact";

                // Determine if this is a section link or page link
                const isSection = item.href && item.href.startsWith("#");

                if (isSection) {
                    return (
                        <S.NavItem key={item.id}>
                            <S.NavLink
                                as="a"
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href, "section");
                                }}
                            >
                                {item.label}
                            </S.NavLink>
                        </S.NavItem>
                    );
                }

                return (
                    <S.NavItem key={item.id}>
                        <S.NavLink
                            as={NavLink}
                            to={item.href}
                            end={isExact}
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => handleNavClick(item.href, "page")}
                        >
                            {item.label}
                        </S.NavLink>
                    </S.NavItem>
                );
            }),
        [handleNavClick]
    );

    return (
        <>
            <S.NavbarWrapper aria-label="Main navigation">
                <S.Logo as={Link} to="/" onClick={closeMenu}>
                    <LogoContent />
                </S.Logo>

                <S.Navigation $isOpen={menuOpen}>
                    <S.NavLists>{NavItems}</S.NavLists>

                    <S.NavButton
                        as={Link}
                        to="/contact"
                        aria-label={`${actionButton.label} — go to contact page`}
                        onClick={closeMenu}
                    >
                        {actionButton.label}
                    </S.NavButton>
                </S.Navigation>

                <S.Overlay
                    aria-hidden="true"
                    $isOpen={menuOpen}
                    onClick={closeMenu}
                />

                <S.MenuButton
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="offcanvas-menu"
                >
                    {menuOpen ? (
                        <RiCloseLine aria-hidden="true" />
                    ) : (
                        <RiMenu3Line aria-hidden="true" />
                    )}
                </S.MenuButton>
            </S.NavbarWrapper>

            {menuOpen && (
                <S.OffCanvasWrapper>
                    <S.OffCanvas
                        ref={offCanvasRef}
                        id="offcanvas-menu"
                        aria-label="Mobile navigation"
                    >
                        <S.OffCanvasHeader>
                            <S.Logo as={Link} to="/" onClick={closeMenu}>
                                <LogoContent />
                            </S.Logo>
                            <S.CloseButton
                                onClick={closeMenu}
                                aria-label="Close navigation menu"
                            >
                                <RiCloseLine aria-hidden="true" />
                            </S.CloseButton>
                        </S.OffCanvasHeader>

                        <S.OffCanvasNavLists>
                            {navlinks.map((item) => {
                                const isExact = item.href === "/" || item.href === "/about" || item.href === "/contact";
                                const isSection = item.href && item.href.startsWith("#");

                                if (isSection) {
                                    return (
                                        <S.NavItem key={item.id}>
                                            <S.NavLink
                                                as="a"
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(item.href, "section");
                                                }}
                                            >
                                                {item.label}
                                            </S.NavLink>
                                        </S.NavItem>
                                    );
                                }

                                return (
                                    <S.NavItem key={item.id}>
                                        <S.NavLink
                                            as={NavLink}
                                            to={item.href}
                                            end={isExact}
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                            onClick={() => handleNavClick(item.href, "page")}
                                        >
                                            {item.label}
                                        </S.NavLink>
                                    </S.NavItem>
                                );
                            })}
                        </S.OffCanvasNavLists>

                        <S.NavButton
                            as={Link}
                            to="/contact"
                            onClick={closeMenu}
                        >
                            {actionButton.label}
                        </S.NavButton>
                    </S.OffCanvas>
                </S.OffCanvasWrapper>
            )}
        </>
    );
};

export default Navbar;