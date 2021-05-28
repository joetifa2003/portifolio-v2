import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "utils/Responsive";

const NavbarBrandWrapper = styled.div`
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;

    cursor: pointer;

    font-family: ${(props) => props.theme.font.mono};

    ${mq.md} {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`;

function NavbarBrand() {
    return (
        <NavbarBrandWrapper>
            <span
                css={(theme) => css`
                    color: ${theme.color.darkCyan};
                `}
            >
                .
            </span>
            home
            <span
                css={(theme) => css`
                    color: ${theme.color.cyan};
                `}
            >
                ()
            </span>
        </NavbarBrandWrapper>
    );
}

export default NavbarBrand;
