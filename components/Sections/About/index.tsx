import Chips from "components/UI/Chips";
import Header from "components/UI/Header";
import Section from "components/UI/Layout/Section";

function About() {
    return (
        <Section>
            <div className="container">
                <Header>About me</Header>
                <p className="text-xl text-justify lg:text-3xl">
                    Hello! My name is Youssef and I enjoy creating things that
                    live on the internet. My interest in web development started
                    back in 2015 when I decided to convert an android app to a
                    website — turns out hacking together a simple website taught
                    me a lot about HTML, CSS & JavaScript!
                    <br />
                    <br />
                    Fast-forward to today, and i have learned alot about web
                    development and I have worked on alot of side projects!
                </p>
                <div className="mt-8 text-xl lg:text-2xl">
                    Here are a few technologies I've been working with recently
                </div>
                <div className="mt-4">
                    <Chips
                        items={[
                            "React",
                            "Next js",
                            "TypeScript",
                            "Nest js",
                            "Vue",
                            "Golang",
                            "Rust",
                            "Python",
                            "Dart/Flutter",
                            "Prisma",
                            "Postgresql",
                            "Mongodb",
                        ]}
                    />
                </div>
            </div>
        </Section>
    );
}

export default About;
