import { css } from "@emotion/react";

const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html,
    body,
    #__next {
        display: flex;
        flex-direction: column;
        font-family: "Poppins", sans-serif;
        width: 100%;
        color: #e5e5e5;
    }

    button {
        font-family: "Poppins", sans-serif;
    }

    .menu-opend {
        overflow: hidden;
    }
`;

export default GlobalStyles;
