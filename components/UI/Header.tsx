function Header({
    children,
    className,
}: {
    children: any;
    className?: string;
}) {
    return (
        <h1
            className={`${
                className || ""
            } lg:mb-16 mb-8 font-mono font-bold text-2xl md:text-3xl xl:text-5xl`}
        >
            <span className="text-cyan">//</span> {children}
        </h1>
    );
}

export default Header;
