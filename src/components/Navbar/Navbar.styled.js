import theme from "../../styles/theme";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 65px;
    background-color: ${theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

    @media ${theme.media.tablet} {
        padding: 10px 20px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
`;

export const LogoImage = styled.div`
    width: 55px;
    height: 55px;

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    @media ${theme.media.tablet} {
        width: 45px;
        height: 45px;
    }
`;

export const LogoDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LogoTitle = styled.p`
    font-size: ${theme.typography.size.lg};
    font-weight: ${theme.typography.weight.medium};

    @media ${theme.media.tablet} {
        font-size: ${theme.typography.size.md};
    }
`;

export const LogoSubTitle = styled.p`
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.weight.light};
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;

    @media ${theme.media.tablet} {
        display: none;
    }
`;

export const Overlay = styled.div`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 150;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
        pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
        transition: opacity 0.3s ease;
    }
`;

export const OffCanvasWrapper = styled.div`
    position: fixed;
    inset: 0;
    z-index: 200;
`;

export const OffCanvas = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    z-index: 200;
    padding: 28px 24px;
    background-color: ${theme.colors.secondary};
    border-right: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 8px 0 32px rgba(0, 0, 0, 0.4);

    @media ${theme.media.mobile} {
        width: 100%;
        border-right: none;
    }
`;

export const OffCanvasHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    opacity: 0.7;
    transition: opacity 0.2s ease;

    svg {
        font-size: 26px;
    }

    &:hover {
        opacity: 1;
    }
`;

export const OffCanvasNavLists = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
`;

export const NavLists = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const NavItem = styled.li`
    width: 100%;
`;

export const NavLink = styled.a`
    position: relative;
    transition: color 0.2s ease;
    font-weight: ${theme.typography.weight.medium};
    color: inherit;

    &.active {
        color: ${theme.colors.primary};
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 2px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px;
        transform: scaleX(0);
        transition: transform 0.2s ease;
    }

    &.active::after {
        transform: scaleX(1);
    }

    &:hover {
        color: ${theme.colors.primary};
    }

    @media ${theme.media.tablet} {
        display: block;
        padding: 12px 16px;
        border-radius: 10px;
        color: inherit;
        background-color: transparent;
        border-left: 3px solid transparent;
        transition: all 0.2s ease;

        &.active {
            color: ${theme.colors.primary};
            background-color: rgba(37, 98, 234, 0.1);
            border-left-color: ${theme.colors.primary};
        }

        &::after {
            display: none;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.05);
            border-left-color: ${theme.colors.primary};
        }
    }
`;

export const NavButton = styled.button`
    background: linear-gradient(to right, ${theme.colors.primary}, #153784);
    padding: 10px 30px;
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    &:hover {
        transform: translateY(-2px);
        opacity: 0.9;
    }

    @media ${theme.media.tablet} {
        width: 100%;
    }
`;

export const MenuButton = styled.button`
    display: none;
    color: ${theme.colors.white};

    svg {
        font-size: 32px;
        transition: color 0.2s ease;
    }

    &:hover svg {
        color: ${theme.colors.primary};
    }

    @media ${theme.media.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;