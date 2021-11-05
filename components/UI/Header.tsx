function Header({ children }: { children: any }) {
    return (
        <h1 tw="my-8 font-mono font-bold text-2xl sm:text-4xl">
            <span tw="text-cyan">//</span> {children}
        </h1>
    );
}

export default Header;
