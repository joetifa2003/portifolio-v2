import NavbarBrand from "./Elements/NavbarBrand";
import NavbarContainer from "./Elements/NavbarContainer";
import NavbarLink from "./Elements/NavbarLink";
import NavbarlinksWrapper from "./Elements/NavbarlinksWrapper";
import NavbarWrapper from "./Elements/NavbarWrapper";

function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavbarBrand />
                <NavbarlinksWrapper>
                    <NavbarLink>aboutMe</NavbarLink>
                    <NavbarLink>myWork</NavbarLink>
                    <NavbarLink>contactMe</NavbarLink>
                </NavbarlinksWrapper>
            </NavbarContainer>
        </NavbarWrapper>
    );
}

export default Navbar;
