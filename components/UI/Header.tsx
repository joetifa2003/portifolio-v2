function Header({
    children,
    className,
}: {
    children: any;
    className?: string;
}) {
    return (
        <h1
            className={`${className} my-8 font-mono font-bold text-2xl lg:text-3xl xl:text-5xl`}
        >
            <span className="text-cyan">//</span> {children}
        </h1>
    );
}

export default Header;
