import tw, { styled } from "twin.macro";
const NavbarBrandWrapper = styled.div`
    ${tw`font-mono text-3xl font-bold cursor-pointer md:text-4xl`}
`;

function NavbarBrand() {
    return (
        <NavbarBrandWrapper>
            <span tw="text-darkCyan">.</span>
            home
            <span tw="text-cyan">()</span>
        </NavbarBrandWrapper>
    );
}

export default NavbarBrand;
