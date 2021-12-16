import Burgerino from "assets/images/Burgerino.jpeg";
import Header from "components/UI/Header";
import Section from "components/UI/Layout/Section";
import ProjectCard from "./Elements/ProjectCard";

function Work() {
    return (
        <Section className="container">
            <Header>Some of my work</Header>
            <ProjectCard
                title="Burgerino"
                imageUrl={Burgerino}
                description="Simple website for a burger restaurant."
                technologies={["Figma", "Next js", "Emotion"]}
                link="https://burger-ruddy.vercel.app/"
            />
        </Section>
    );
}

export default Work;
