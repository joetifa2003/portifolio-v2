import className from "tailwind-styled-components";

const NavbarMenu = className.aside<{ $opened: boolean }>`
    fixed
    top-[80px]
    left-0
    w-full
    h-full
    transition-all
    duration-500
    bg-lightGray
    transform
    z-20

    ${({ $opened }) => ($opened ? `translate-y-0` : `translate-y-full`)}
`;

export default NavbarMenu;
