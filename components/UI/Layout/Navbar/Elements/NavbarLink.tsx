import { css } from "@emotion/react";
import styled from "@emotion/styled";

const NavbarLinkWrapper = styled.div`
    font-family: ${(props) => props.theme.font.mono};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;

    cursor: pointer;

    padding-left: 1rem;
    padding-right: 1rem;
`;

function NavbarLink({ children }: { children: any }) {
    return (
        <NavbarLinkWrapper>
            <span
                css={(theme) => css`
                    color: ${theme.color.darkCyan};
                `}
            >
                .
            </span>
            {children}
            <span
                css={(theme) => css`
                    color: ${theme.color.cyan};
                `}
            >
                ()
            </span>
        </NavbarLinkWrapper>
    );
}

export default NavbarLink;
