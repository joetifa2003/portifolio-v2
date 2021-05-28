import { css, Theme } from "@emotion/react";
import { getResponsiveQuries, Responsive } from "utils/Responsive";

export interface BaseUIProps {
    position?: Responsive;
    justifyItems?: Responsive;
    alignItems?: Responsive;
    justifyContent?: Responsive;
    alignContent?: Responsive;
    bgColor?: keyof Theme["color"];
    color?: keyof Theme["color"];
    marginTop?: Responsive;
    marginBottom?: Responsive;
    marginLeft?: Responsive;
    marginRight?: Responsive;
    marginY?: Responsive;
    marginX?: Responsive;
    paddingTop?: Responsive;
    paddingBottom?: Responsive;
    paddingLeft?: Responsive;
    paddingRight?: Responsive;
    paddingY?: Responsive;
    paddingX?: Responsive;
}

export const BaseUI = (
    props: BaseUIProps & {
        theme: Theme;
    }
) => css`
    ${props.bgColor && `background-color: ${props.theme.color[props.bgColor]};`}
    ${props.color && `color: ${props.theme.color[props.color]};`}

    ${props.position &&
    getResponsiveQuries(props.position, (value) => `position: ${value};`)}
    
    ${props.justifyItems &&
    getResponsiveQuries(
        props.justifyItems,
        (value) => `justify-items: ${value};`
    )}

    ${props.alignItems &&
    getResponsiveQuries(props.alignItems, (value) => `align-items: ${value};`)}

    ${props.justifyContent &&
    getResponsiveQuries(
        props.justifyContent,
        (value) => `justify-content: ${value};`
    )}

    ${props.alignContent &&
    getResponsiveQuries(
        props.alignContent,
        (value) => `align-content: ${value};`
    )}

    ${props.marginTop &&
    getResponsiveQuries(props.marginTop, (value) => `margin-top: ${value};`)}

    ${props.marginBottom &&
    getResponsiveQuries(props.marginTop, (value) => `margin-bottom: ${value};`)}

    ${props.marginLeft &&
    getResponsiveQuries(props.marginTop, (value) => `margin-left: ${value};`)}

    ${props.marginRight &&
    getResponsiveQuries(props.marginTop, (value) => `margin-right: ${value};`)}

    ${props.marginX &&
    getResponsiveQuries(
        props.marginTop,
        (value) => `
        margin-left: ${value};
        margin-right: ${value};
    `
    )}
    
    ${props.marginX &&
    getResponsiveQuries(
        props.marginTop,
        (value) => `
        margin-top: ${value};
        margin-bottom: ${value};
    `
    )}

    ${props.paddingTop &&
    getResponsiveQuries(props.paddingTop, (value) => `padding-top: ${value};`)}

    ${props.paddingBottom &&
    getResponsiveQuries(
        props.paddingTop,
        (value) => `padding-bottom: ${value};`
    )}

    ${props.paddingLeft &&
    getResponsiveQuries(props.paddingTop, (value) => `padding-left: ${value};`)}

    ${props.paddingRight &&
    getResponsiveQuries(
        props.paddingTop,
        (value) => `padding-right: ${value};`
    )}

    ${props.paddingX &&
    getResponsiveQuries(
        props.paddingTop,
        (value) => `
        padding-left: ${value};
        padding-right: ${value};
    `
    )}
    
    ${props.paddingX &&
    getResponsiveQuries(
        props.paddingTop,
        (value) => `
        padding-top: ${value};
        padding-bottom: ${value};
    `
    )}
`;
