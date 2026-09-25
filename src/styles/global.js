import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:focus-visible {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: 4px;
        border-radius: 4px;
  }
    }
    
    body, html {
    font-family: ${theme.typography.font.main}, ${theme.typography.font.secondary};
    font-weight: ${theme.typography.weight.regular};
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
    line-height: 1.5;
    scroll-behavior: smooth;
    font-synthesis: none;
    font-display: swap;
    }

    body {
        max-width: 1440px;
        margin: 0 auto;
    }

    section {
        padding: 112px 65px 80px;

        @media ${theme.media.tablet} {
        padding: 80px 20px 50px;

        }

         @media ${theme.media.mobile} {
        padding: 50px 20px 50px;
        }
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: ${theme.typography.weight.regular};
    }

    ::selection {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
        background: ${theme.colors.secondary};
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.primary};
    }

    a {
        text-decoration: none;
        color: inherit;
        text-underline-offset: 3px;
    }

    ul {
        list-style: none;
    }

    button {
        font-family: inherit;
        cursor: pointer;
        background-color: transparent;
        color: inherit;
        border: none;
        font-size: ${theme.typography.size.lg};
    }

`;
export default GlobalStyle