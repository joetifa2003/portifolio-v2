import { Link } from "react-scroll";
import className from "tailwind-styled-components";

const NavbarLinkWrapper = className(Link)`
    font-mono
    px-4
    cursor-pointer
    font-bold
    text-2xl
    leading-10
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
            <span className="text-darkCyan">.</span>
            {children}
            <span className="text-cyan">()</span>
        </NavbarLinkWrapper>
    );
}

export default NavbarLink;
