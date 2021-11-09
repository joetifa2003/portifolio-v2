import { Sling } from "hamburger-react";
import { useEffect, useState } from "react";
import Container from "../Layout/Container";
import HamburgerMenu from "./Elements/HamburgerMenu";
import MNavLinksWrapper from "./Elements/MNavlinksWrapper";
import NavbarBrand from "./Elements/NavbarBrand";
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
    {
        name: "github",
        to: "github",
    },
];

function Navbar() {
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        if (menuOpened) {
            document.body.classList.add("menu-opened");
        } else {
            document.body.classList.remove("menu-opened");
        }
    }, [menuOpened]);

    return (
        <NavbarWrapper>
            <ScrollToTop />
            <Container tw="relative flex items-center justify-between">
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
            </Container>
        </NavbarWrapper>
    );
}

export default Navbar;
