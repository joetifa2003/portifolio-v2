import { styled, theme } from "twin.macro";

interface NavbarMenuProps {
    opened: boolean;
}

const NavbarMenu = styled.aside<NavbarMenuProps>`
    position: fixed;
    top: 80px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme`colors.lightGray`};

    transition: all 500ms ease-in-out;

    padding-left: 1rem;
    padding-right: 1rem;

    z-index: 15;

    ${(props) =>
        props.opened
            ? "transform: translateY(0);"
            : "transform: translateY(100%);"}
`;

export default NavbarMenu;
