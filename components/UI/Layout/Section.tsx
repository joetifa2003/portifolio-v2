import className from "tailwind-styled-components";

const Section = className.section<{ $fullScreen?: boolean }>`
    bg-gray
    overflow-hidden
    flex
    flex-col
    
    ${({ $fullScreen }) => ($fullScreen ? `min-h-screen` : "")}
`;

export default Section;
