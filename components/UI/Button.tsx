import className from "tailwind-styled-components";

const BUTTON_STYLE = `
    inline-flex 
    items-center 
    justify-center 
    px-8 
    py-4 
    space-x-2 
    text-xl
    md:text-2xl 
    font-bold 
    leading-none 
    bg-transparent 
    cursor-pointer 
    hover:bg-darkCyan
    border-2
    md:border-4
    border-cyan
    transition-all
    duration-250
`;

export const LinkButton = className.a`
    ${() => BUTTON_STYLE}
`;

export const Button = className.button`
    disabled:border-slate-50
    ${() => BUTTON_STYLE}
`;
