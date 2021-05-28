import { css } from "@emotion/react";
import Header from "components/UI/Header";
import Container from "components/UI/Layout/Container";
import Section from "components/UI/Layout/Section";
import Text from "components/UI/Text";

function About() {
    return (
        <Section fullScreen>
            <Container>
                <Header>About me</Header>
                <Text
                    fontWeight="bold"
                    fontSize={{ xs: "1.5rem", lg: "3rem" }}
                    lineHeight={{ xs: "2rem", lg: "4rem" }}
                >
                    Hello! My name is Youssef and I enjoy creating things that
                    live on the internet. My interest in web development started
                    back in 2015 when I decided to convert an android app to a
                    website — turns out hacking together a simple website taught
                    me a lot about HTML, CSS & JavaScript!
                    <br />
                    <br />
                    Fast-forward to today, and i have learned alot about web
                    devolpment and I have worked on alot of side projects!
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={{ xs: "1.5rem", lg: "2rem" }}
                    lineHeight={{ xs: "2rem", lg: "2.5rem" }}
                    marginTop="2rem"
                >
                    Here are a few technologies I've been working with recently
                </Text>
                <div
                    css={css`
                        margin-top: 1rem;
                    `}
                >
                    {["React", "Vue"].map((item) => (
                        <Text
                            fontWeight="bold"
                            fontSize={{ xs: "1.5rem" }}
                            lineHeight={{ xs: "2rem" }}
                        >
                            - {item}
                        </Text>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default About;
