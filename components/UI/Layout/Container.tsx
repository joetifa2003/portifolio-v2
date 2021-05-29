import styled from "@emotion/styled";
import { mq } from "utils/Responsive";
import { BaseUI, BaseUIProps } from "../BaseUI";

interface ContainerProps extends BaseUIProps {}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;

    width: calc(100% - 2rem);
    min-height: 100%;

    overflow-x: hidden;

    margin-left: auto;
    margin-right: auto;

    ${mq.sm} {
        max-width: 640px;
    }

    ${mq.md} {
        max-width: 768px;
    }
    ${mq.lg} {
        max-width: 1024px;
    }

    ${mq.xl} {
        max-width: 1280px;
    }

    ${mq.xxl} {
        max-width: 1536px;
    }

    ${BaseUI}
`;
export default Container;
