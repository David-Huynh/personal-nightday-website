import { createGlobalStyle } from "styled-components";
//Global style for certain elements
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        
        color: ${({ theme }) => theme.primaryColor};
        font-family: ${({ theme }) => theme.fontFamily};
    }
    h1{
        @media (max-width: 450px) {
            font-size: x-large;
        }
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.primaryColor};
    }
    p {
        color: ${({ theme }) => theme.foreground};
        opacity: ${({ theme }) => theme.mediumEmphText};
        transition: all 0.50s linear;
        margin:0;
    }
`;
