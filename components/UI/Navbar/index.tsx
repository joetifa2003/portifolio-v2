import { Sling } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import tw from "tailwind-styled-components";
import ScrollToTop from "./Elements/ScrollToTop";

const navBarScrollLinks = [
    {
        name: "about",
        to: "about",
    },
    {
        name: "work",
        to: "work",
    },
    {
        name: "github",
        to: "github",
    },
    {
        name: "contact",
        to: "contact",
    },
];

const navBarLinks = [
    {
        name: "blog",
        href: "/posts",
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
        <div className="flex absolute h-[80px] top-0 left-0 w-full z-20 bg-lightGray bg-opacity-60 mb-4 drop-shadow-md backdrop-blur-sm">
            <ScrollToTop />
            <div className="container relative flex items-center justify-between">
                <NavbarBrand onClick={() => setMenuOpened(false)} />
                <div className="hidden space-x-8 lg:flex">
                    {navBarScrollLinks.map((link) => (
                        <NavbarScrollLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpened(false)}
                        >
                            {link.name}
                        </NavbarScrollLink>
                    ))}
                    {navBarLinks.map((link) => (
                        <NavbarLink
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpened(false)}
                        >
                            {link.name}
                        </NavbarLink>
                    ))}
                </div>
                <div className="absolute block right-2 lg:hidden">
                    <Sling toggled={menuOpened} toggle={setMenuOpened} />
                </div>
            </div>
        </div>
    );
}

function NavbarBrand({ onClick }: { onClick: any }) {
    return (
        <Link href="/">
            <a
                className="font-mono text-3xl font-bold cursor-pointer md:text-4xl"
                onClick={onClick}
            >
                <span className="text-darkCyan">.</span>
                home
                <span className="text-cyan">()</span>
            </a>
        </Link>
    );
}

const NavbarMenu = tw.aside<{ $opened: boolean }>`
    fixed
    top-[80px]
    left-0
    w-full
    h-full
    transition-all
    duration-500
    bg-lightGray
    transform
    z-[-1]

    ${({ $opened }) => ($opened ? `translate-y-0` : `translate-y-full`)}
`;

const linkStyle = "font-mono text-2xl font-bold leading-10 cursor-pointer";

function NavbarScrollLink({ children, to, onClick }: any) {
    const router = useRouter();

    return (
        <ScrollLink
            className={linkStyle}
            to={to}
            smooth={true}
            onClick={async () => {
                if (router.pathname !== "/") {
                    await router.push("/");
                    scroller.scrollTo(to, {
                        smooth: true,
                    });
                }
                onClick();
            }}
        >
            <span className="text-darkCyan">.</span>
            {children}
            <span className="text-cyan">()</span>
        </ScrollLink>
    );
}

const NavbarLink = ({
    href,
    children,
    onClick,
}: {
    href: string;
    children: any;
    onClick: any;
}) => {
    return (
        <Link href={href}>
            <a className={linkStyle} onClick={onClick}>
                <span className="text-darkCyan">.</span>
                {children}
                <span className="text-cyan">()</span>
            </a>
        </Link>
    );
};

export default Navbar;
