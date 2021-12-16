import { Sling } from "hamburger-react";
import { useEffect, useState } from "react";
import NavbarBrand from "./Elements/NavbarBrand";
import NavbarLink from "./Elements/NavbarLink";
import NavbarMenu from "./Elements/NavbarMenu";
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
        <div className="flex absolute h-[80px] top-0 left-0 w-full z-20">
            <ScrollToTop />
            <div className="container relative flex items-center justify-between">
                <NavbarBrand />
                <div className="hidden lg:flex">
                    {navBarLinks.map((link) => (
                        <NavbarLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpened(false)}
                        >
                            {link.name}
                        </NavbarLink>
                    ))}
                </div>
                <div className="absolute block right-2 lg:hidden">
                    <Sling toggled={menuOpened} toggle={setMenuOpened} />
                </div>
                <NavbarMenu $opened={menuOpened}>
                    <div className="container flex flex-col">
                        {navBarLinks.map((link) => (
                            <NavbarLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpened(false)}
                            >
                                {link.name}
                            </NavbarLink>
                        ))}
                    </div>
                </NavbarMenu>
            </div>
        </div>
    );
}

export default Navbar;
