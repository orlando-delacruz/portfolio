import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, html {
    font-family: ${theme.typography.font.main}, ${theme.typography.font.secondary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
    line-height: 1.5;
    scroll-behavior: smooth;

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

    a {
        text-decoration: none;
        color: inherit;
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