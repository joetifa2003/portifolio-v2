import Header from "components/UI/Header";
import Container from "components/UI/Layout/Container";
import Section from "components/UI/Layout/Section";
import tw from "twin.macro";
import ProjectCard from "./Elements/ProjectCard";

function Work() {
    return (
        <Section>
            <Container>
                <Header>Some of my work</Header>
                <ProjectCard
                    title="Burgerino"
                    imageUrl="/work/images/projects/Burgerino.jpeg"
                    description="Simple website for a burger restaurant."
                    technologies={["Figma", "Next js", "Emotion"]}
                    link="https://burger-ruddy.vercel.app/"
                />
            </Container>
        </Section>
    );
}

export default Work;
