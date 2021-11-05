import { css } from "@emotion/react";

const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        z-index: 1;
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #e5e5e5;
        font-size: 16px;
        line-height: 1.2;
    }

    button {
        color: #e5e5e5;
        cursor: pointer;
    }

    .menu-opend {
        overflow: hidden;
    }

    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 48px;
    }

    a,
    a:visited,
    a:hover,
    a:active {
        color: inherit;
        text-decoration: inherit;
    }

    .menu-opened {
        overflow: hidden;
    }
`;

export default GlobalStyles;
