import tw, { styled } from "twin.macro";

interface SectionProps {
    fullScreen?: boolean;
}

const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    ${(props) => props.fullScreen && "min-height: calc(100vh);"}
    ${tw`bg-gray`}
`;

export default Section;
