import Header from "components/UI/Header";
import Section from "components/UI/Layout/Section";
import ProjectCard from "./Elements/ProjectCard";

function Work() {
    return (
        <Section fullScreen>
            <div tw="container">
                <Header>My work</Header>
                <ProjectCard
                    title="Burgerino"
                    imageUrl="/work/images/projects/Burgerino.png"
                    description="Simple website for a burger restaurant."
                    technologies={["Figma", "Next js", "Emotion"]}
                    link="https://burger-ruddy.vercel.app/"
                />
            </div>
        </Section>
    );
}

export default Work;
