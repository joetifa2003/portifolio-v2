import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

const NavbarLinkWrapper = styled(Link)`
    font-family: ${(props) => props.theme.font.mono};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;

    cursor: pointer;

    padding-left: 1rem;
    padding-right: 1rem;
`;

function NavbarLink({
    children,
    to,
    onClick,
}: {
    children: any;
    to: string;
    onClick: any;
}) {
    return (
        <NavbarLinkWrapper
            to={to}
            smooth={true}
            spy={true}
            hashSpy={true}
            onClick={() => {
                onClick();
            }}
        >
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
