import Header from "components/UI/Header";
import Col from "components/UI/Layout/Col";
import Container from "components/UI/Layout/Container";
import Grid from "components/UI/Layout/Grid";
import Section from "components/UI/Layout/Section";
import ProjectCard from "./Elements/ProjectCard";

function Work() {
    return (
        <Section>
            <Container>
                <Header>My work</Header>
                <Grid columns="1f">
                    <Col>
                        <ProjectCard
                            title="Burgerino"
                            descreption="Simple website for a burger restraut."
                            technologies={["Figma", "Next js", "Emotion"]}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            title="Project 2"
                            descreption="Simple website for a burger restraut."
                            technologies={["Figma", "Next js", "Emotion"]}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            title="Project 3"
                            descreption="Simple website for a burger restraut."
                            technologies={["Figma", "Next js", "Emotion"]}
                        />
                    </Col>
                </Grid>
            </Container>
        </Section>
    );
}

export default Work;
