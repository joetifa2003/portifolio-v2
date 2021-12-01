import Header from "components/UI/Header";
import Section from "components/UI/Layout/Section";
import ProjectCard from "./Elements/ProjectCard";

function Work() {
    return (
        <Section>
            <div className="container">
                <Header>Some of my work</Header>
                <ProjectCard
                    title="Burgerino"
                    imageUrl="/work/images/projects/Burgerino.jpeg"
                    description="Simple website for a burger restaurant."
                    technologies={["Figma", "Next js", "Emotion"]}
                    link="https://burger-ruddy.vercel.app/"
                />
            </div>
        </Section>
    );
}

export default Work;
