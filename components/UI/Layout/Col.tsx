import styled from "@emotion/styled";
import { getResponsiveQuries, Responsive } from "utils/Responsive";
import { BaseUI, BaseUIProps } from "../BaseUI";

interface ColProps extends BaseUIProps {
    order?: Responsive;
}

const Col = styled.div<ColProps>`
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.order &&
        getResponsiveQuries(props.order, (value) => `order: ${value};`)};

    ${BaseUI}
`;

export default Col;
