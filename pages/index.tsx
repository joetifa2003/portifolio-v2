import About from "components/Sections/About";
import Github from "components/Sections/Github";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import Container from "components/UI/Layout/Container";
import Section from "components/UI/Layout/Section";
import Navbar from "components/UI/Navbar";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(
        "https://api.github.com/users/joetifa2003/repos?sort=updated&per_page=8"
    );

    return {
        props: {
            githubData: await res.json(),
        },
    };
};

const App = ({ githubData }: { githubData: any }) => {
    return (
        <>
            <NextSeo
                title="Youssef Ahmed | Full Stack web developer"
                description="Full Stack web developer from Egypt."
                openGraph={{
                    images: [{ url: "/SocialImage.png" }],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />
            <Navbar />
            <Hero />
            <Element name="about-me">
                <About />
            </Element>
            <Element name="my-work">
                <Work />
            </Element>
            <Element name="github">
                <Github data={githubData} />
            </Element>

            <Section>
                <Container>
                    <iframe
                        src="https://discord.com/widget?id=907772927854923806&theme=dark"
                        width="350"
                        height="500"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </Container>
            </Section>
        </>
    );
};

export default App;
