import { Link } from "react-scroll";
import tw, { styled } from "twin.macro";

const NavbarLinkWrapper = styled(Link)`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;

    cursor: pointer;

    padding-left: 1rem;
    padding-right: 1rem;

    ${tw`font-mono`}
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
            <span tw="text-darkCyan">.</span>
            {children}
            <span tw="text-cyan">()</span>
        </NavbarLinkWrapper>
    );
}

export default NavbarLink;
