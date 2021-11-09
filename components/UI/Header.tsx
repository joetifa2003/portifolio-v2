function Header({
    children,
    className,
}: {
    children: any;
    className?: string;
}) {
    return (
        <h1
            tw="my-8 font-mono font-bold text-3xl sm:text-4xl"
            className={className}
        >
            <span tw="text-cyan">//</span> {children}
        </h1>
    );
}

export default Header;
