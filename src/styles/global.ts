import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        border: none;
        outline: none;

        box-shadow: 0 0 0 0;
        box-sizing: border-box;

        font-family: "Ubuntu";
    }

    body {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow: hidden auto;
    }
`;
