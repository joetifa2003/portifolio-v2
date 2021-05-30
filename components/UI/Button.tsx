import styled from "@emotion/styled";
import { BaseUI, BaseUIProps } from "./BaseUI";

interface Button extends BaseUIProps {}

const Button = styled.a<BaseUIProps>`
    display: inline-block;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5rem;
    border: 4px solid ${(props) => props.theme.color.cyan};

    cursor: pointer;

    background-color: transparent;

    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    :hover {
        background-color: ${(props) => props.theme.color.darkCyan};
    }

    ${BaseUI}
`;

export default Button;
