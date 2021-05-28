import styled from "@emotion/styled";
import { BaseUI, BaseUIProps } from "../BaseUI";

interface SectionProps extends BaseUIProps {
    fullScreen?: boolean;
}

const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    ${(props) => props.fullScreen && "min-height: calc(100vh);"}

    ${BaseUI}
`;

export default Section;
