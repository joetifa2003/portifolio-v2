import styled from "@emotion/styled";
import { getResponsiveQuries, Responsive } from "utils/Responsive";
import { BaseUI, BaseUIProps } from "../BaseUI";

interface GridProps extends BaseUIProps {
    columns?: Responsive;
    gap?: string;
}

const Grid = styled.div<GridProps>`
    display: grid;
    gap: ${(props) => props.gap || "2rem"};

    ${(props) =>
        props.columns &&
        getResponsiveQuries(
            props.columns,
            (value) => `grid-template-columns: ${value};`
        )}

    ${BaseUI}
`;

export default Grid;
