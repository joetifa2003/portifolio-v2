import styled from "@emotion/styled";

interface NavbarMenuProps {
    opened: boolean;
}

const NavbarMenu = styled.aside<NavbarMenuProps>`
    position: fixed;
    top: 80px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.color.lightGray};

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
