import { Sling } from "hamburger-react";
import { useState } from "react";
import HamburgerMenu from "./Elements/HamburgerMenu";
import MNavLinksWrapper from "./Elements/MNavlinksWrapper";
import NavbarBrand from "./Elements/NavbarBrand";
import NavbarContainer from "./Elements/NavbarContainer";
import NavbarLink from "./Elements/NavbarLink";
import NavbarlinksWrapper from "./Elements/NavbarlinksWrapper";
import NavbarMenu from "./Elements/NavbarMenu";
import NavbarWrapper from "./Elements/NavbarWrapper";
import ScrollToTop from "./Elements/ScrollToTop";

const navBarLinks = [
    {
        name: "aboutMe",
        to: "about-me",
    },
    {
        name: "myWork",
        to: "my-work",
    },
];

function Navbar() {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <NavbarWrapper>
            <ScrollToTop />
            <NavbarContainer>
                <NavbarMenu opened={menuOpened}>
                    <MNavLinksWrapper>
                        {navBarLinks.map((link) => (
                            <NavbarLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpened(false)}
                            >
                                {link.name}
                            </NavbarLink>
                        ))}
                    </MNavLinksWrapper>
                </NavbarMenu>
                <NavbarBrand />
                <HamburgerMenu>
                    <Sling toggled={menuOpened} toggle={setMenuOpened} />
                </HamburgerMenu>
                <NavbarlinksWrapper>
                    {navBarLinks.map((link) => (
                        <NavbarLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpened(false)}
                        >
                            {link.name}
                        </NavbarLink>
                    ))}
                </NavbarlinksWrapper>
            </NavbarContainer>
        </NavbarWrapper>
    );
}

export default Navbar;
