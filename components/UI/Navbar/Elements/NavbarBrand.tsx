import tw from "tailwind-styled-components";

const NavbarBrandWrapper = tw.div`font-mono text-3xl font-bold cursor-pointer md:text-4xl`;

function NavbarBrand() {
    return (
        <NavbarBrandWrapper>
            <span className="text-darkCyan">.</span>
            home
            <span className="text-cyan">()</span>
        </NavbarBrandWrapper>
    );
}

export default NavbarBrand;
