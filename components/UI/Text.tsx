import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { getResponsiveQuries, Responsive } from "utils/Responsive";
import { BaseUI, BaseUIProps } from "./BaseUI";

const textSizes = {
    small: { fontSize: 1, lineHeight: 1.5 },
    medium: { fontSize: 1.875, lineHeight: 3 },
    large: {
        fontSize: 3.5,
        lineHeight: 4.5,
    },
    xlarge: {
        fontSize: 6.5625,
        lineHeight: 7.5,
    },
};
interface TextProps extends BaseUIProps {
    fontFamily?: keyof Theme["font"];
    fontSize?: Responsive;
    lineHeight?: Responsive;
    letterSpaceing?: Responsive;
    fontWeight?: Responsive;
    textAlign?: Responsive;
    shadow?: boolean;
    size?: Responsive;
}

const Text = styled.div<TextProps>`
    ${(props) =>
        props.fontFamily &&
        `
        font-family: ${props.theme.font[props.fontFamily]};
    `}

    ${(props) =>
        props.fontSize &&
        getResponsiveQuries(props.fontSize, (value) => `font-size: ${value};`)}


    ${(props) =>
        props.lineHeight &&
        getResponsiveQuries(
            props.lineHeight,
            (value) => `line-height: ${value};`
        )}

    ${(props) =>
        props.size &&
        getResponsiveQuries(
            props.size,
            (value) => `
            font-size: ${textSizes[value].fontSize}rem;
            line-height: ${textSizes[value].lineHeight}rem;
        `
        )}

    ${(props) =>
        props.letterSpaceing &&
        getResponsiveQuries(
            props.letterSpaceing,
            (value) => `letter-spacing: ${value};`
        )}

    ${(props) =>
        props.fontWeight &&
        getResponsiveQuries(
            props.fontWeight,
            (value) => `font-weight: ${value};`
        )}

    ${(props) =>
        props.textAlign &&
        getResponsiveQuries(
            props.textAlign,
            (value) => `text-align: ${value};`
        )}

    ${(props) =>
        props.shadow && `text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`}

    ${BaseUI}
`;

export default Text;
