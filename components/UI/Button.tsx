import tw, { styled, theme } from "twin.macro";

const Button = styled.a`
    border: 4px solid ${(props) => theme`colors.cyan`};

    ${tw`inline-flex items-center justify-center px-8 py-4 space-x-2 text-2xl font-bold leading-none bg-transparent cursor-pointer hover:bg-darkCyan`}
`;

export default Button;
