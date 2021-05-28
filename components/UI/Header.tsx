import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "utils/Responsive";

const HeaderWrapper = styled.h1`
    font-family: ${(props) => props.theme.font.mono};
    font-size: 1.75rem;
    line-height: 2rem;
    letter-spacing: 0.2em;
    margin-top: 4rem;
    margin-bottom: 4rem;

    ${mq.sm} {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }

    ${mq.lg} {
        font-size: 4rem;
        line-height: 4rem;
    }
`;

function Header({ children }: { children: any }) {
    return (
        <HeaderWrapper>
            <span
                css={(theme) => css`
                    color: ${theme.color.cyan};
                `}
            >
                //
            </span>{" "}
            {children}
        </HeaderWrapper>
    );
}

export default Header;
