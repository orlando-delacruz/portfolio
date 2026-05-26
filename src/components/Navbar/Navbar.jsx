import Logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import * as S from "./Navbar.styled";
import navlinks from "../../data/navbar.js";
import useActiveSection from "../../hooks/useActiveSection.js";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { activeLink, handleNavClick } = useActiveSection();

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const onNavClick = (href) => {
        handleNavClick(href);
        closeMenu();
    };

    const LogoContent = (
        <>
            <S.LogoImage>
                <img src={Logo} loading="eager" decoding="async" width={55} height={55} alt="Orlando Dela Cruz logo" />
            </S.LogoImage>
            <S.LogoDetails>
                <S.LogoTitle>Orlando Dela Cruz</S.LogoTitle>
                <S.LogoSubTitle>Web Developer</S.LogoSubTitle>
            </S.LogoDetails>
        </>
    );

    const NavItems = navlinks.map(({ label, href, id }) => (
        <S.NavItem key={id}>
            <S.NavLink
                href={href}
                isActive={activeLink === href}
                onClick={() => onNavClick(href)}
            >
                {label}
            </S.NavLink>
        </S.NavItem>
    ));

    return (
        <>
            <S.NavbarWrapper>
                <S.Logo>{LogoContent}</S.Logo>

                <S.Navigation isOpen={menuOpen}>
                    <S.NavLists>{NavItems}</S.NavLists>
                    <S.NavButton onClick={closeMenu}>Get In Touch</S.NavButton>
                </S.Navigation>

                <S.Overlay isOpen={menuOpen} onClick={closeMenu} />

                <S.MenuButton onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </S.MenuButton>
            </S.NavbarWrapper>

            <S.OffCanvas isOpen={menuOpen}>
                <S.OffCanvasHeader>
                    <S.Logo>{LogoContent}</S.Logo>
                    <S.CloseButton onClick={closeMenu} aria-label="Close menu">
                        <RiCloseLine />
                    </S.CloseButton>
                </S.OffCanvasHeader>

                <S.OffCanvasNavLists>{NavItems}</S.OffCanvasNavLists>

                <S.NavButton onClick={closeMenu}>Get In Touch</S.NavButton>
            </S.OffCanvas>
        </>
    );
};

export default Navbar;