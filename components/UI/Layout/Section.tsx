import tw from "tailwind-styled-components";

const Section = tw.section<{ $fullScreen?: boolean }>`
    bg-gray
    overflow-hidden
    flex
    flex-col
    
    ${({ $fullScreen }) => ($fullScreen ? `min-h-screen` : "")}
`;

export default Section;
