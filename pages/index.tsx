import axios from "axios";
import About from "components/Sections/About";
import Contact from "components/Sections/Contact";
import Github from "components/Sections/Github";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";

export const getStaticProps: GetStaticProps = async () => {
    const github = (
        await axios.get(
            "https://api.github.com/users/joetifa2003/repos?sort=updated&per_page=4"
        )
    ).data;

    return {
        props: {
            github,
        },
        revalidate: 60,
    };
};

const App = ({ github }: any) => {
    return (
        <div>
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
            <Hero />
            <div className="py-8 space-y-8">
                <Element name="about">
                    <About />
                </Element>
                <Element name="work">
                    <Work />
                </Element>
                <Element name="github">
                    <Github data={github} />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </div>
        </div>
    );
};

export default App;
