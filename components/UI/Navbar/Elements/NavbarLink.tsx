import { Link } from "react-scroll";

function NavbarLink({ children, to, onClick }: any) {
    return (
        <Link
            className="px-4 font-mono text-2xl font-bold leading-10 cursor-pointer "
            to={to}
            smooth={true}
            spy={true}
            hashSpy={true}
            onClick={() => {
                onClick();
            }}
        >
            <span className="text-darkCyan">.</span>
            {children}
            <span className="text-cyan">()</span>
        </Link>
    );
}

export default NavbarLink;
