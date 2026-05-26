import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import * as S from "./Navbar.styled";
import useActiveSection from "../../hooks/useActiveSection.js";
import { useState, useCallback, useMemo } from "react";
import navbarData from "../../data/navbar.js";

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
    const { activeLink, handleNavClick } = useActiveSection();

    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const onNavClick = useCallback((href) => {
        handleNavClick(href);
        closeMenu();
    }, [handleNavClick, closeMenu]);

    const NavItems = useMemo(() => navlinks.map(({ label, href, id }) => (
        <S.NavItem key={id}>
            <S.NavLink
                href={href}
                $isActive={activeLink === href}
                onClick={() => onNavClick(href)}
            >
                {label}
            </S.NavLink>
        </S.NavItem>
    )), [activeLink, onNavClick]);

    return (
        <>
            <S.NavbarWrapper aria-label="Main navigation">
                <S.Logo>
                    <LogoContent />
                </S.Logo>

                <S.Navigation $isOpen={menuOpen}>
                    <S.NavLists>{NavItems}</S.NavLists>
                    <S.NavButton
                        as="a"
                        href={actionButton.href}
                        aria-label={`${actionButton.label} — scroll to contacts`}
                        onClick={closeMenu}
                    >
                        {actionButton.label}
                    </S.NavButton>
                </S.Navigation>

                <S.Overlay aria-hidden="true" $isOpen={menuOpen} onClick={closeMenu} />

                <S.MenuButton
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="offcanvas-menu"
                >
                    {menuOpen
                        ? <RiCloseLine aria-hidden="true" />
                        : <RiMenu3Line aria-hidden="true" />
                    }
                </S.MenuButton>
            </S.NavbarWrapper>

            <S.OffCanvas
                id="offcanvas-menu"
                $isActiveisOpen={menuOpen}
                aria-label="Mobile navigation"
                aria-hidden={!menuOpen}
            >
                <S.OffCanvasHeader>
                    <S.Logo><LogoContent /></S.Logo>
                    <S.CloseButton
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >

                        <RiCloseLine aria-hidden="true" />
                    </S.CloseButton>
                </S.OffCanvasHeader>

                <S.OffCanvasNavLists>{NavItems}</S.OffCanvasNavLists>

                <S.NavButton
                    onClick={closeMenu}
                    as="a"
                    href={actionButton.href}
                    aria-label={`${actionButton.label} — scroll to contacts`}
                >
                    {actionButton.label}
                </S.NavButton>
            </S.OffCanvas>
        </>
    );
};

export default Navbar;