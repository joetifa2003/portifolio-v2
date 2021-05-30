import Header from "components/UI/Header";
import Col from "components/UI/Layout/Col";
import Container from "components/UI/Layout/Container";
import Grid from "components/UI/Layout/Grid";
import Section from "components/UI/Layout/Section";
import ProjectCard from "./Elements/ProjectCard";

function Work() {
    return (
        <Section fullScreen>
            <Container>
                <Header>My work</Header>
                <Grid columns="1f">
                    <Col>
                        <ProjectCard
                            title="Burgerino"
                            imageUrl={{
                                fallback: "/work/images/projects/Burgerino.png",
                                webp: "/work/images/projects/Burgerino.webp",
                            }}
                            descreption="Simple website for a burger restraut."
                            technologies={["Figma", "Next js", "Emotion"]}
                            link="https://burger-ruddy.vercel.app/"
                        />
                    </Col>
                </Grid>
            </Container>
        </Section>
    );
}

export default Work;
